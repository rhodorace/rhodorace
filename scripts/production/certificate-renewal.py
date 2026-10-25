#!/usr/bin/python3
"""Activate Rhodo HTTP renewal only after DNS and the public ACME route are ready."""
import argparse
import fcntl
import importlib.util
import ipaddress
import json
import os
from pathlib import Path
import socket
import subprocess
import sys
import urllib.request

CONFIG = Path('/etc/rhodo-production/acme')
STATE = Path('/var/lib/rhodo-production-deploy')
MARKER = Path('/etc/rhodo-production/renewal-enabled')
LINEAGE = CONFIG / 'live/rhodo-production'
HOSTS = ('rhodo-rock.com', 'www.rhodo-rock.com')
ALLOWED_IPS = {'169.58.175.172', '2a02:c207:2369:666::1'}
HTTP_MARKER = b'rhodo-vmi3690666-acme-webroot\n'
CERTBOT = ['/usr/bin/certbot', '--config-dir', str(CONFIG),
           '--work-dir', str(STATE / 'certbot-work'), '--logs-dir', '/var/log/rhodo-certbot']


def command(args):
    return subprocess.run(args, check=True, text=True, capture_output=True, timeout=1200)


def dns_status():
    result = {}
    for host in HOSTS:
        try:
            result[host] = sorted({str(ipaddress.ip_address(row[4][0]))
                                   for row in socket.getaddrinfo(host, 80, type=socket.SOCK_STREAM)})
        except OSError:
            result[host] = []
    return result


def valid_dns(records):
    return all('169.58.175.172' in records.get(host, [])
               and set(records[host]) <= ALLOWED_IPS for host in HOSTS)


def http_ready():
    opener = urllib.request.build_opener(urllib.request.ProxyHandler({}))
    for host in HOSTS:
        with opener.open('http://' + host + '/.well-known/acme-challenge/rhodo-renewal-ready', timeout=12) as response:
            if response.status != 200 or response.read(4096) != HTTP_MARKER:
                return False
    return True


def webroot_configured():
    path = CONFIG / 'renewal/rhodo-production.conf'
    if not path.is_file():
        return False
    return any(line.strip() == 'authenticator = webroot' for line in path.read_text().splitlines())


def backup():
    spec = importlib.util.spec_from_file_location('rhodo_deployment', '/usr/local/libexec/rhodo-production/deploy.py')
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module.backup_operation(STATE)


class RenewalActivation:
    def __init__(self, marker=MARKER):
        self.marker = Path(marker)

    def dns_ready(self):
        return valid_dns(dns_status())

    def http_ready(self):
        return http_ready()

    def run(self, args):
        return command(args)

    def backup(self):
        return backup()

    def activate(self):
        if not self.dns_ready():
            raise RuntimeError('DNS still points elsewhere; renewal activation refused without changes')
        if not self.http_ready():
            raise RuntimeError('Public ACME webroot is not ready; activation refused without changes')
        if self.marker.exists():
            raise RuntimeError('Renewal is already marked enabled; use --check instead')
        self.backup()
        self.run(CERTBOT + ['reconfigure', '--cert-name', 'rhodo-production', '--webroot',
                           '--webroot-path', '/var/www/rhodo-acme', '--preferred-challenges',
                           'http', '--non-interactive'])
        self.run(CERTBOT + ['renew', '--cert-name', 'rhodo-production', '--dry-run',
                           '--preferred-challenges', 'http', '--run-deploy-hooks', '--non-interactive'])
        fd = os.open(self.marker, os.O_WRONLY | os.O_CREAT | os.O_EXCL, 0o600)
        with os.fdopen(fd, 'w') as output:
            output.write('HTTP validation and deployment hook verified\n')
        try:
            self.run(['/usr/bin/systemctl', 'enable', '--now', 'rhodo-certbot.timer'])
        except BaseException:
            self.marker.unlink(missing_ok=True)
            self.run(['/usr/bin/systemctl', 'disable', '--now', 'rhodo-certbot.timer'])
            raise
        return {'renewal_enabled': True, 'authenticator': 'webroot', 'dry_run_passed': True}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    action = parser.add_mutually_exclusive_group(required=True)
    action.add_argument('--check', action='store_true')
    action.add_argument('--activate', action='store_true')
    action.add_argument('--assert-enabled', action='store_true', help=argparse.SUPPRESS)
    args = parser.parse_args()
    if os.geteuid() != 0 or socket.gethostname().split('.')[0] != 'vmi3690666':
        raise RuntimeError('Run through sudo only on the approved VPS')
    if args.assert_enabled:
        if not MARKER.is_file() or not webroot_configured():
            raise RuntimeError('HTTP renewal is not enabled and verified')
        return
    if args.check:
        records = dns_status()
        print(json.dumps({'dns': records, 'dns_ready': valid_dns(records),
                          'webroot_configured': webroot_configured(), 'renewal_enabled': MARKER.is_file(),
                          'certificate': command(['/usr/bin/openssl', 'x509', '-in', str(LINEAGE / 'fullchain.pem'),
                                                  '-noout', '-dates', '-ext', 'subjectAltName']).stdout.strip()}))
        return
    with (STATE / 'deploy.lock').open('a') as lock:
        fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
        print(json.dumps(RenewalActivation().activate()))


if __name__ == '__main__':
    try:
        main()
    except (OSError, ValueError, RuntimeError, subprocess.SubprocessError) as error:
        # Certbot output is kept in its private logs; do not expose account/diagnostic data.
        print('Rhodo renewal: ' + str(error), file=sys.stderr)
        sys.exit(1)
