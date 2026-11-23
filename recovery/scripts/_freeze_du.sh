#!/usr/bin/env bash
set -euo pipefail
cd /home/bruce/code/ks-develop/kse-console-v3/recovery
du -sh . unpacked react-app react-app/phase4-build react-app/src react-app/src/unpacked react-app/src/named freeze phase5-node phase5-evidence 2>/dev/null
echo "=== phase4-build bytes ==="
du -sb react-app/phase4-build
echo "=== largest ==="
du -sh unpacked react-app/src/unpacked react-app/src/named react-app/node_modules 2>/dev/null
ls react-app/node_modules >/dev/null 2>&1 && du -sh react-app/node_modules
