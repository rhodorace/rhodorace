#!/bin/bash
set -euo pipefail
[[ "$(/usr/bin/id -un)" == rhodo-site ]] || { echo 'Build must run as rhodo-site' >&2; exit 1; }
[[ $# == 3 && "$2" =~ ^[0-9a-f]{40}$ && "$3" =~ ^/srv/rhodo-rock/builds/[0-9]{8}T[0-9]{12}Z-[0-9a-f]{12}$ ]] || exit 2
cd -- "$3"
case "$1" in
  fetch)
    /usr/bin/git init --quiet
    /usr/bin/git remote add origin https://github.com/rhodorace/rhodorace.git
    /usr/bin/git fetch --depth=1 origin "$2"
    /usr/bin/git -c advice.detachedHead=false checkout --detach FETCH_HEAD
    [[ "$(/usr/bin/git rev-parse HEAD)" == "$2" ]]
    ;;
  install)
    /opt/node-v24.22.1-linux-x64/bin/npm ci --ignore-scripts --no-audit --no-fund --strict-peer-deps --include=dev
    ;;
  build)
    /opt/node-v24.22.1-linux-x64/bin/npm run lint -- --format json --output-file .deploy-lint.json
    /opt/node-v24.22.1-linux-x64/bin/npm run build:prod
    /usr/bin/git diff --exit-code
    ;;
  *) exit 2 ;;
esac
