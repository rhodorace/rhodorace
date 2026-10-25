import importlib.util
import json
import os
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

MODULE = Path(__file__).resolve().parents[2] / 'scripts/production/deploy.py'
spec = importlib.util.spec_from_file_location('rhodo_deploy', MODULE)
deploy = importlib.util.module_from_spec(spec)
spec.loader.exec_module(deploy)


class FakeDeployer(deploy.Deployer):
    def __init__(self, base, state):
        super().__init__(base, state)
        self.events = []
        self.fail_release = None
        self.fail_restart = False

    def service(self, action):
        self.events.append(('service', action))
        if action == 'restart' and self.fail_restart:
            self.fail_restart = False
            raise RuntimeError('injected restart failure')

    def health(self, meta):
        self.events.append(('health', meta['release']))
        if self.fail_release == meta['release']:
            raise RuntimeError('injected unhealthy candidate')
        return [{'status': 200}]


class DeploymentTransactions(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.base = Path(self.temp.name) / 'site'
        self.state = Path(self.temp.name) / 'state'
        (self.base / 'releases').mkdir(parents=True)
        (self.state / 'releases').mkdir(parents=True)
        self.d = FakeDeployer(self.base, self.state)
        self.one = self.release('20261025T130000000001Z-aaaaaaaaaaaa', 'a' * 40)
        self.two = self.release('20261025T130000000002Z-bbbbbbbbbbbb', 'b' * 40)

    def tearDown(self):
        self.temp.cleanup()

    def release(self, name, commit):
        (self.base / 'releases' / name).mkdir()
        meta = {'release': name, 'commit': commit, 'build_id': name}
        deploy.atomic_json(self.state / 'releases' / (name + '.json'), meta)
        return meta

    def test_first_release_records_private_health(self):
        result = self.d.activate(self.one)
        self.assertEqual(self.d.target().name, self.one['release'])
        self.assertEqual(result['mode'], 'private-preview')
        self.assertIsNone(result['previous_release'])
        self.assertEqual(self.d.load()['health'], [{'status': 200}])

    def test_failed_first_release_stops_only_rhodo_and_removes_pointer(self):
        self.d.fail_release = self.one['release']
        with self.assertRaises(RuntimeError):
            self.d.activate(self.one)
        self.assertIsNone(self.d.target())
        self.assertFalse(self.d.statefile.exists())
        self.assertEqual(self.d.events[-1], ('service', 'stop'))

    def test_failed_update_restores_previous_pointer_and_state(self):
        self.d.activate(self.one)
        before = self.d.statefile.read_bytes()
        self.d.fail_release = self.two['release']
        with self.assertRaises(RuntimeError):
            self.d.activate(self.two)
        self.assertEqual(self.d.target().name, self.one['release'])
        self.assertEqual(self.d.statefile.read_bytes(), before)
        self.assertEqual(self.d.events[-1], ('health', self.one['release']))

    def test_restart_failure_also_restores_previous_release(self):
        self.d.activate(self.one)
        self.d.fail_restart = True
        with self.assertRaises(RuntimeError):
            self.d.activate(self.two)
        self.assertEqual(self.d.target().name, self.one['release'])
        self.assertEqual(self.d.load()['commit'], 'a' * 40)

    def test_state_write_failure_rolls_back_the_service(self):
        self.d.activate(self.one)
        with patch.object(deploy, 'atomic_json', side_effect=OSError('disk full')):
            with self.assertRaises(OSError):
                self.d.activate(self.two)
        self.assertEqual(self.d.target().name, self.one['release'])
        self.assertEqual(self.d.load()['commit'], 'a' * 40)

    def test_manual_rollback_previous_and_round_trip(self):
        self.d.activate(self.one)
        self.d.activate(self.two)
        result = self.d.rollback('previous')
        self.assertEqual(result['release'], self.one['release'])
        self.assertEqual(result['previous_release'], self.two['release'])
        self.assertEqual(self.d.rollback('previous')['release'], self.two['release'])

    def test_missing_previous_is_rejected_without_service_changes(self):
        with self.assertRaises(RuntimeError):
            self.d.rollback('previous')
        self.assertEqual(self.d.events, [])

    def test_arbitrary_path_rollback_rejected(self):
        for name in ['../../etc', '/tmp/fake', 'abc', '; reboot']:
            with self.assertRaises(RuntimeError):
                self.d.rollback(name)
        self.assertEqual(self.d.events, [])

    def test_pointer_state_disagreement_is_rejected(self):
        self.d.point(self.base / 'releases' / self.one['release'])
        with self.assertRaises(RuntimeError):
            self.d.activate(self.two)
        self.assertEqual(self.d.events, [])

    def test_unexpected_current_target_is_rejected(self):
        os.symlink('/etc', self.d.current)
        with self.assertRaises(RuntimeError):
            self.d.activate(self.one)
        self.assertEqual(self.d.events, [])

    def test_unrecorded_rollback_release_is_rejected(self):
        (self.state / 'releases' / (self.two['release'] + '.json')).unlink()
        with self.assertRaises(RuntimeError):
            self.d.rollback(self.two['release'])
        self.assertEqual(self.d.events, [])


if __name__ == '__main__':
    unittest.main()
