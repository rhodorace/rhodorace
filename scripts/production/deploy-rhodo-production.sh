#!/bin/bash
set -euo pipefail
exec /usr/bin/python3 -I /usr/local/libexec/rhodo-production/deploy.py "$@"
