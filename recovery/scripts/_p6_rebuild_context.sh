#!/usr/bin/env bash
set -euo pipefail
ROOT=/home/bruce/code/ks-develop/kse-console-v3/recovery
cd $ROOT/react-app
npx webpack --config webpack.phase4.config.js --mode production --no-color
bash $ROOT/scripts/phase5_restart_static.sh
curl -s http://127.0.0.1:8108/__phase5
echo
ss -ltn | grep -E ':8099 ' || echo 8099_not_listening
cd $ROOT/phase5-node
node phase6_context_verify.mjs
