#!/usr/bin/env bash
set -euo pipefail
ROOT=/home/bruce/code/ks-develop/kse-console-v3/recovery
cd "$ROOT/phase5-node"
node --test review_fixes.test.cjs
cd "$ROOT/scripts"
python3 test_phase5_ws_proxy.py
cd "$ROOT/react-app"
npx webpack --config webpack.phase4.config.js --mode production --no-color
bash "$ROOT/scripts/phase5_restart_static.sh"
echo '---phase5.5---'
cd "$ROOT/phase5-node"
node phase5_5_verify.mjs
echo '---phase6---'
node phase6_ops_verify.mjs
echo review_verify_done
ss -ltn | grep -E ':8099 ' || echo 8099_not_listening
curl -s http://127.0.0.1:8108/__phase5
echo
