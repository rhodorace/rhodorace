#!/bin/sh
set -eu
[ "${RENEWED_LINEAGE:-}" = /etc/rhodo-production/acme/live/rhodo-production ] || exit 0
/usr/bin/openssl x509 -in "$RENEWED_LINEAGE/fullchain.pem" -noout -checkhost rhodo-rock.com
/usr/bin/openssl x509 -in "$RENEWED_LINEAGE/fullchain.pem" -noout -checkhost www.rhodo-rock.com
/usr/bin/openssl x509 -in "$RENEWED_LINEAGE/fullchain.pem" -noout -checkend 604800
/usr/sbin/nginx -t
/usr/bin/systemctl reload nginx
