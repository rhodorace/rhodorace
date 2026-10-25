#!/usr/bin/python3
"""Root-owned Rhodo deployment controller. App/Git/npm code runs only as rhodo-site."""
import argparse
import contextlib
import datetime
import fcntl
import hashlib
import http.client
import json
import os
from pathlib import Path
import pwd
import re
import shutil
import socket
import ssl
import subprocess
import sys
import tarfile
import time

BASE = Path('/srv/rhodo-rock')
STATE = Path('/var/lib/rhodo-production-deploy')
HELPERS = Path('/usr/local/libexec/rhodo-production')
CONFIG = Path('/etc/rhodo-production/config.json')
SERVICE = 'rhodo-rock.service'
REPO = 'https://github.com/rhodorace/rhodorace.git'
SHA = re.compile(r'^[0-9a-f]{40}$')
RID = re.compile(r'^[0-9]{8}T[0-9]{12}Z-[0-9a-f]{12}$')


def atomic_json(path, data):
    temporary = path.with_name(path.name + '.tmp')
    temporary.write_text(json.dumps(data, indent=2) + '\n')
    temporary.chmod(0o600)
    os.replace(temporary, path)


def command(args, **kwargs):
    return subprocess.run(args, check=True, capture_output=True, text=True,
                          timeout=kwargs.pop('timeout', 60), **kwargs)


class LocalTLS(http.client.HTTPSConnection):
    def connect(self):
        raw = socket.create_connection(('127.0.0.1', self.port), self.timeout)
        self.sock = self._context.wrap_socket(raw, server_hostname=self.host)


def request(host, path, tls=True):
    connection = LocalTLS(host, 8443, timeout=10, context=ssl.create_default_context()) if tls else http.client.HTTPConnection('127.0.0.1', 3002, timeout=10)
    try:
        connection.request('GET', path, headers={'Host': host, 'Accept-Encoding': 'identity'})
        result = connection.getresponse()
        body = result.read(20 * 1024 * 1024)
        return result.status, dict(result.getheaders()), body
    finally:
        connection.close()


def check_health(meta):
    result = []
    for host in ['rhodo-rock.com', 'www.rhodo-rock.com']:
        for path, language in [('/', 'bg'), ('/en', 'en'), ('/news', 'bg'), ('/posts?post_id=3275790685635843839', 'bg')]:
            status, headers, body = request(host, path)
            if status != 200:
                raise RuntimeError(f'HTTPS health failed: {host}{path}: {status}')
            match = re.search(rb'<script id="__NEXT_DATA__"[^>]*>(.*?)</script>', body, re.S)
            data = json.loads(match.group(1)) if match else {}
            if data.get('buildId') != meta['build_id'] or data.get('locale') != language:
                raise RuntimeError('HTTPS release/locale mismatch')
            result.append({'host': host, 'path': path, 'status': status})
    status, _, body = request('rhodo-rock.com', '/', tls=False)
    if status != 200 or meta['build_id'].encode() not in body:
        raise RuntimeError('Direct Node health failed')
    for path in ['/.env', '/.git/config', '/package.json', '/scripts/production/deploy.py']:
        if request('rhodo-rock.com', path)[0] != 404:
            raise RuntimeError('Private path was exposed')
    return result


class Deployer:
    def __init__(self, base=BASE, state=STATE):
        self.base, self.state = Path(base), Path(state)
        self.current = self.base / 'current'
        self.statefile = self.state / 'current.json'

    def load(self):
        return json.loads(self.statefile.read_text()) if self.statefile.exists() else None

    def target(self):
        if not self.current.is_symlink():
            if self.current.exists():
                raise RuntimeError('current must be an administrator-owned symlink')
            return None
        target = Path(os.readlink(self.current))
        if target.parent != self.base / 'releases' or not RID.fullmatch(target.name):
            raise RuntimeError('Unexpected current target')
        return target

    def point(self, target):
        temporary = self.base / '.current-next'
        if temporary.exists() or temporary.is_symlink():
            raise RuntimeError('Unfinished current switch; inspect before retrying')
        if target is None:
            self.current.unlink(missing_ok=True)
        else:
            os.symlink(str(target), temporary)
            os.replace(temporary, self.current)

    def service(self, action):
        command(['/usr/bin/systemctl', action, SERVICE])

    def health(self, meta):
        last = None
        for _ in range(15):
            try:
                return check_health(meta)
            except (OSError, ValueError, RuntimeError, http.client.HTTPException) as error:
                last = error
                time.sleep(1)
        raise RuntimeError('Release health did not become ready') from last

    def activate(self, meta):
        target = self.base / 'releases' / meta['release']
        if not RID.fullmatch(meta['release']) or not target.is_dir() or target.is_symlink():
            raise RuntimeError('Unknown release directory')
        old_target, old_state = self.target(), self.load()
        if bool(old_target) != bool(old_state) or (old_state and old_target.name != old_state['release']):
            raise RuntimeError('Current pointer/state disagree; refusing activation')
        self.point(target)
        try:
            self.service('restart')
            proof = self.health(meta)
            saved = dict(meta, previous_release=old_state['release'] if old_state else None,
                         mode='private-preview', health=proof)
            atomic_json(self.statefile, saved)
        except BaseException:
            self.point(old_target)
            if old_target:
                self.service('restart')
                self.health(old_state)
            else:
                self.service('stop')
            raise
        return saved

    def rollback(self, requested):
        current = self.load()
        release = current.get('previous_release') if requested == 'previous' and current else requested
        if not release or not RID.fullmatch(release):
            raise RuntimeError('No valid previous release')
        path = self.state / 'releases' / (release + '.json')
        if not path.is_file():
            raise RuntimeError('Release has no administrator record')
        meta = json.loads(path.read_text())
        if meta.get('release') != release:
            raise RuntimeError('Release record mismatch')
        return self.activate(meta)


def freeze_release(path, release, account):
    cache = BASE / 'shared/runtime-cache' / release
    if cache.exists():
        raise RuntimeError('Runtime cache already exists')
    old_cache = path / '.next/cache'
    if old_cache.is_symlink():
        raise RuntimeError('Unexpected build cache symlink')
    if old_cache.exists():
        shutil.move(str(old_cache), cache)
    else:
        cache.mkdir()
    command(['/bin/chown', '-hR', f'{account.pw_uid}:{account.pw_gid}', str(cache)])
    cache.chmod(0o700)
    os.symlink(str(cache), old_cache)
    for directory, dirs, files in os.walk(path, followlinks=False):
        item = Path(directory)
        os.chown(item, 0, account.pw_gid)
        item.chmod(0o750)
        for name in dirs + files:
            item = Path(directory) / name
            if item.is_symlink():
                os.lchown(item, 0, account.pw_gid)
            elif item.is_file():
                executable = bool(item.stat().st_mode & 0o111)
                os.chown(item, 0, account.pw_gid)
                item.chmod(0o750 if executable else 0o640)
    for parent in [BASE, BASE / 'releases', path, path / '.next']:
        command(['/usr/bin/setfacl', '-m', 'u:www-data:--x', str(parent)])
    for public in [path / 'public', path / '.next/static']:
        command(['/usr/bin/setfacl', '-R', '-m', 'u:www-data:r-X', str(public)])


def prepare_release(commit, state):
    account = pwd.getpwnam('rhodo-site')
    release = datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%fZ') + '-' + commit[:12]
    build = BASE / 'builds' / release
    build.mkdir(mode=0o700)
    os.chown(build, account.pw_uid, account.pw_gid)
    props = ['NoNewPrivileges=yes', 'PrivateTmp=yes', 'PrivateDevices=yes',
             'ProtectSystem=strict', 'ProtectHome=yes',
             'InaccessiblePaths=/srv/my-btr /srv/my-btr-stage /srv/rhodo-rock/.ssh /srv/rhodo-rock/source',
             'ReadWritePaths=' + str(build) + ' /srv/rhodo-rock/shared/build-cache',
             'MemoryMax=3G', 'CPUQuota=200%', 'TasksMax=512', 'RuntimeMaxSec=900',
             'UMask=0077', 'EnvironmentFile=/etc/rhodo-production/build.env']
    for phase in ['fetch', 'install', 'build']:
        unit = 'rhodo-build-' + phase + '-' + release.lower()
        extra = ['IPAddressDeny=any', 'IPAddressAllow=localhost'] if phase == 'build' else []
        args = ['/usr/bin/systemd-run', '--quiet', '--wait', '--collect', '--pipe', '--service-type=exec',
                '--uid=rhodo-site', '--unit=' + unit, '--working-directory=' + str(build)]
        args += ['--property=' + p for p in props + extra]
        args += ['--setenv=' + p for p in [
            'HOME=/srv/rhodo-rock', 'PATH=/opt/node-v24.22.1-linux-x64/bin:/usr/bin:/bin',
            'NPM_CONFIG_CACHE=/srv/rhodo-rock/shared/build-cache',
            'NPM_CONFIG_USERCONFIG=/usr/local/libexec/rhodo-production/empty-user.npmrc',
            'NPM_CONFIG_GLOBALCONFIG=/usr/local/libexec/rhodo-production/empty-global.npmrc',
            'NPM_CONFIG_IGNORE_SCRIPTS=true', 'NEXT_TELEMETRY_DISABLED=1',
            'NODE_OPTIONS=--max-old-space-size=2048', 'GIT_CONFIG_NOSYSTEM=1', 'GIT_CONFIG_GLOBAL=/dev/null']]
        args += [str(HELPERS / 'build-release.sh'), phase, commit, str(build)]
        print(f'{phase}: {release}', flush=True)
        result = subprocess.run(args, capture_output=True, text=True, timeout=950)
        (state / 'logs' / (release + '-' + phase + '.log')).write_text(result.stdout + result.stderr)
        if result.returncode:
            raise RuntimeError(f'{phase} failed; inspect the private build log')
    build_id = (build / '.next/BUILD_ID').read_text().strip()
    if not re.fullmatch(r'[A-Za-z0-9_-]{1,200}', build_id):
        raise RuntimeError('Invalid Next build ID')
    lint = json.loads((build / '.deploy-lint.json').read_text())
    if any(row['errorCount'] or row['warningCount'] for row in lint):
        raise RuntimeError('Lint must pass without warnings')
    shutil.copyfile(build / '.deploy-lint.json', state / 'logs' / (release + '-lint.json'))
    lock_sha = hashlib.sha256((build / 'package-lock.json').read_bytes()).hexdigest()
    target = BASE / 'releases' / release
    os.rename(build, target)
    freeze_release(target, release, account)
    meta = {'release': release, 'commit': commit, 'build_id': build_id,
            'lock_sha256': lock_sha, 'created_at_utc': datetime.datetime.now(datetime.timezone.utc).isoformat()}
    atomic_json(state / 'releases' / (release + '.json'), meta)
    return meta



def backup_operation(state):
    """Keep configuration and current state privately; immutable releases stay in place."""
    stamp = datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%fZ')
    destination = state / 'backups' / (stamp + '.tar.gz')
    candidates = [HELPERS, CONFIG.parent,
                  Path('/etc/systemd/system/rhodo-rock.service'),
                  Path('/etc/systemd/system/rhodo-certbot.service'),
                  Path('/etc/systemd/system/rhodo-certbot.timer'),
                  Path('/etc/nginx/snippets/rhodo-private-common.conf'),
                  Path('/etc/nginx/sites-available/rhodo-private-preview.conf'),
                  state / 'current.json', state / 'releases']
    fd = os.open(destination, os.O_WRONLY | os.O_CREAT | os.O_EXCL, 0o600)
    with os.fdopen(fd, 'wb') as output:
        with tarfile.open(fileobj=output, mode='w:gz') as archive:
            for path in candidates:
                if path.exists():
                    archive.add(path, arcname=str(path).lstrip('/'))
    print('Private configuration backup: ' + str(destination), flush=True)
    return destination


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    group = parser.add_mutually_exclusive_group()
    group.add_argument('--commit')
    group.add_argument('--rollback')
    group.add_argument('--check', action='store_true')
    args = parser.parse_args()
    if os.geteuid() != 0 or socket.gethostname().split('.')[0] != 'vmi3690666':
        raise RuntimeError('Run through sudo only on the approved VPS')
    config = json.loads(CONFIG.read_text())
    if config != {'mode': 'private-preview', 'ready': True}:
        raise RuntimeError('Private preview prerequisites are not ready')
    if BASE.stat().st_uid != 0 or STATE.stat().st_uid != 0:
        raise RuntimeError('Deployment parents must be administrator-owned')
    with (STATE / 'deploy.lock').open('a') as lock:
        try:
            fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
        except BlockingIOError as error:
            raise RuntimeError('Another Rhodo operation is running') from error
        deployer = Deployer()
        if args.check:
            current = deployer.load()
            if not current:
                raise RuntimeError('No active Rhodo release')
            print(json.dumps({'release': current['release'], 'commit': current['commit'],
                              'health': deployer.health(current), 'mode': current['mode']}))
            return
        backup_operation(STATE)
        if args.rollback:
            result = deployer.rollback(args.rollback)
        else:
            commit = args.commit
            if commit is None:
                text = command(['/usr/sbin/runuser', '-u', 'rhodo-site', '--', '/usr/bin/env', '-C', str(BASE), 'GIT_CONFIG_NOSYSTEM=1', 'GIT_CONFIG_GLOBAL=/dev/null', '/usr/bin/git', 'ls-remote', REPO, 'refs/heads/main']).stdout
                commit = text.split()[0]
            if not SHA.fullmatch(commit):
                raise RuntimeError('Commit must be a full lowercase 40-character SHA')
            result = deployer.activate(prepare_release(commit, STATE))
        print(json.dumps(result))


if __name__ == '__main__':
    try:
        main()
    except (RuntimeError, OSError, ValueError, subprocess.SubprocessError) as error:
        print(f'Rhodo operation failed: {error}', file=sys.stderr)
        sys.exit(1)
