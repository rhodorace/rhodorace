import importlib.util
import json
from pathlib import Path
import unittest
from unittest.mock import patch

spec = importlib.util.spec_from_file_location('public_deploy', Path(__file__).resolve().parents[2] / 'scripts/production/deploy.py')
deploy = importlib.util.module_from_spec(spec)
spec.loader.exec_module(deploy)


class PublicHealth(unittest.TestCase):
    def response(self, host, path, tls=True, port=None):
        if path in ['/.env', '/.git/config', '/package.json', '/scripts/production/deploy.py']:
            return 404, {}, b''
        if port == 80:
            if path.startswith('/.well-known/'):
                return 200, {}, deploy.ACME_MARKER
            return 308, {'Location': 'https://' + host + path}, b''
        language = 'en' if path == '/en' else 'bg'
        body = b'<script id="__NEXT_DATA__">' + json.dumps({'buildId': 'verified-build', 'locale': language}).encode() + b'</script>'
        return 200, {}, body

    def test_production_checks_public_https_and_http_besides_private(self):
        with patch.object(deploy, 'request', side_effect=self.response) as request:
            result = deploy.check_health({'build_id': 'verified-build'}, mode='production')
        self.assertEqual({row['port'] for row in result}, {443, 8443})
        self.assertEqual(len(result), 16)
        self.assertTrue(any(call.kwargs.get('port') == 80 for call in request.call_args_list))

    def test_healthy_private_cannot_hide_failed_public_listener(self):
        def response(host, path, tls=True, port=None):
            return (503, {}, b'') if port == 443 else self.response(host, path, tls, port)
        with patch.object(deploy, 'request', side_effect=response):
            with self.assertRaisesRegex(RuntimeError, 'HTTPS health failed'):
                deploy.check_health({'build_id': 'verified-build'}, mode='production')

    def test_public_noindex_is_rejected(self):
        def response(host, path, tls=True, port=None):
            status, headers, body = self.response(host, path, tls, port)
            if port == 443:
                headers['X-Robots-Tag'] = 'noindex, nofollow'
            return status, headers, body
        with patch.object(deploy, 'request', side_effect=response):
            with self.assertRaisesRegex(RuntimeError, 'noindex'):
                deploy.check_health({'build_id': 'verified-build'}, mode='production')

    def test_wrong_acme_root_is_rejected(self):
        def response(host, path, tls=True, port=None):
            return (200, {}, b'wrong root') if port == 80 and path.startswith('/.well-known/') else self.response(host, path, tls, port)
        with patch.object(deploy, 'request', side_effect=response):
            with self.assertRaisesRegex(RuntimeError, 'ACME webroot'):
                deploy.check_health({'build_id': 'verified-build'}, mode='production')

    def test_private_checks_do_not_require_public_activation(self):
        with patch.object(deploy, 'request', side_effect=self.response) as request:
            result = deploy.check_health({'build_id': 'verified-build'})
        self.assertEqual({row['port'] for row in result}, {8443})
        self.assertFalse(any(call.kwargs.get('port') in {80, 443} for call in request.call_args_list))

    def test_production_mode_requires_explicit_gate(self):
        self.assertEqual(deploy.config_mode({'mode': 'private-preview', 'ready': True}), 'private-preview')
        with self.assertRaisesRegex(RuntimeError, 'approved'):
            deploy.config_mode({'mode': 'production', 'ready': True})
        self.assertEqual(deploy.config_mode({'mode': 'production', 'ready': True}, public_ready=True), 'production')
        for config in [{'mode': 'unexpected', 'ready': True}, {'mode': 'production', 'ready': 1}, {'mode': 'private-preview', 'ready': False}]:
            with self.assertRaises(RuntimeError):
                deploy.config_mode(config, public_ready=True)
