import importlib.util
from pathlib import Path
import tempfile
import unittest

spec = importlib.util.spec_from_file_location('renewal', Path(__file__).resolve().parents[2] / 'scripts/production/certificate-renewal.py')
renewal = importlib.util.module_from_spec(spec)
spec.loader.exec_module(renewal)


class FakeActivation(renewal.RenewalActivation):
    def __init__(self, marker):
        super().__init__(marker)
        self.dns_ok = True
        self.http_ok = True
        self.events = []
        self.commands = []
        self.fail = None

    def dns_ready(self):
        return self.dns_ok

    def http_ready(self):
        return self.http_ok

    def backup(self):
        self.events.append('backup')

    def run(self, args):
        self.commands.append(args)
        operation = 'reconfigure' if 'reconfigure' in args else 'dry-run' if '--dry-run' in args else args[1]
        self.events.append(operation)
        if operation == self.fail:
            raise RuntimeError('injected failure')


class RenewalGuards(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.marker = Path(self.temp.name) / 'enabled'
        self.a = FakeActivation(self.marker)

    def tearDown(self):
        self.temp.cleanup()

    def test_old_dns_refuses_without_writes_or_certbot(self):
        self.a.dns_ok = False
        with self.assertRaises(RuntimeError):
            self.a.activate()
        self.assertEqual(self.a.events, [])
        self.assertFalse(self.marker.exists())

    def test_missing_http_route_refuses_without_writes_or_certbot(self):
        self.a.http_ok = False
        with self.assertRaises(RuntimeError):
            self.a.activate()
        self.assertEqual(self.a.events, [])
        self.assertFalse(self.marker.exists())

    def test_failed_challenge_or_hook_never_enables_timer(self):
        for operation in ['reconfigure', 'dry-run']:
            self.a.fail = operation
            with self.assertRaises(RuntimeError):
                self.a.activate()
            self.assertNotIn('enable', self.a.events)
            self.assertFalse(self.marker.exists())

    def test_timer_failure_removes_marker_and_disables_only_own_timer(self):
        self.a.fail = 'enable'
        with self.assertRaises(RuntimeError):
            self.a.activate()
        self.assertFalse(self.marker.exists())
        self.assertEqual(self.a.events[-1], 'disable')

    def test_success_marks_enabled_only_after_validation(self):
        result = self.a.activate()
        self.assertTrue(result['dry_run_passed'])
        self.assertTrue(self.marker.exists())
        self.assertEqual(self.a.events, ['backup', 'reconfigure', 'dry-run', 'enable'])
        self.assertEqual(self.marker.stat().st_mode & 0o777, 0o600)

    def test_old_or_unknown_ipv4_ipv6_are_rejected(self):
        good = {h: ['169.58.175.172'] for h in renewal.HOSTS}
        self.assertTrue(renewal.valid_dns(good))
        for unwanted in ['173.212.247.104', '203.0.113.9', '2001:db8::1']:
            changed = dict(good, **{'rhodo-rock.com': ['169.58.175.172', unwanted]})
            self.assertFalse(renewal.valid_dns(changed))
        self.assertFalse(renewal.valid_dns({}))

    def test_manual_dns_preference_is_replaced_with_http_for_webroot(self):
        self.a.activate()
        for args in self.a.commands[:2]:
            self.assertEqual(args[args.index('--preferred-challenges') + 1], 'http')
        reconfigure = self.a.commands[0]
        self.assertIn('--webroot', reconfigure)
        self.assertEqual(reconfigure[reconfigure.index('--webroot-path') + 1], '/var/www/rhodo-acme')


if __name__ == '__main__':
    unittest.main()
