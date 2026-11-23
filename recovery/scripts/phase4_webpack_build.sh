#!/usr/bin/env bash
set -euo pipefail
cd /home/bruce/code/ks-develop/kse-console-v3/recovery/react-app
rm -rf phase4-build
echo "phase4-build start $(date -Is)"
npx webpack --config webpack.phase4.config.js --mode production --no-color
echo "phase4-build exit $? $(date -Is)"
ls -la phase4-build | head
