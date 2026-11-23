#!/usr/bin/env bash
set -euo pipefail
cd /home/bruce/code/ks-develop/kse-console-v3/recovery/react-app
npm install
echo "=== npm install done ==="
python3 -c 'import json; p=json.load(open("node_modules/semver/package.json")); print("semver", p["version"])'
python3 -c 'import json; p=json.load(open("package.json")); print("pkg_semver", p["dependencies"].get("semver"))'
