#!/usr/bin/env bash
set -euo pipefail
cd /home/bruce/code/ks-develop/kse-console-v3
echo "=== git status ==="
git status --short -- recovery/react-app/package.json recovery/react-app/package-lock.json
echo "=== top packages ==="
ls -d recovery/react-app/node_modules/semver \
  recovery/react-app/node_modules/d3-selection \
  recovery/react-app/node_modules/d3-zoom \
  recovery/react-app/node_modules/react-color \
  recovery/react-app/node_modules/react-ace \
  recovery/react-app/node_modules/ace-builds
echo "=== nested ==="
ls recovery/react-app/node_modules/d3-zoom/node_modules 2>/dev/null || echo "no d3-zoom nested"
ls recovery/react-app/node_modules/react-ace/node_modules 2>/dev/null || echo "no react-ace nested"
ls recovery/react-app/node_modules/react-color/es 2>/dev/null | head || echo "no react-color/es"
python3 -c 'import json; p="/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/node_modules/semver/package.json"; print("semver", json.load(open(p))["version"])'
