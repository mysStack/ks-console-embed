#!/usr/bin/env bash
set -euo pipefail
ROOT=/home/bruce/code/ks-develop/kse-console-v3/recovery
APP=$ROOT/react-app
PORT=${PHASE5_PORT:-8108}
export PHASE5_PORT=$PORT
export PHASE5_BASE="http://127.0.0.1:${PORT}"
mkdir -p $ROOT/phase5-evidence $ROOT/phase5-node

# Do not print secrets. Load test account names from bashrc.
set +u
# shellcheck disable=SC1091
source /home/bruce/.bashrc >/dev/null 2>&1 || true
set -u
if [ -n "${KS_TEST_USERNAME-}" ]; then export KS_TEST_USERNAME; fi
if [ -n "${KS_TEST_PASSWORD-}" ]; then export KS_TEST_PASSWORD; fi
python3 - <<'PY'
import os
keys = sorted(k for k in os.environ if k.startswith("KS_") and "PASS" not in k and "SECRET" not in k and "TOKEN" not in k and "KEY" not in k)
print("ks_env_keys", keys)
print("ks_test_user_set", bool(os.environ.get("KS_TEST_USERNAME")))
print("ks_test_pass_set", bool(os.environ.get("KS_TEST_PASSWORD")))
PY

echo "---8099 check (must not be modified)---"
ss -ltn | grep -E ":8099 " || echo "8099_not_listening"

echo "---extract routes---"
python3 $ROOT/scripts/phase5_extract_routes.py

if ss -ltn | grep -qE ":${PORT} "; then
  echo "port $PORT already in use"
  ss -ltn | grep -E ":${PORT} "
else
  echo "---start static server---"
  nohup python3 $ROOT/scripts/phase5_static_server.py > $ROOT/phase5-evidence/static-server.log 2>&1 &
  echo $! > $ROOT/phase5-evidence/static-server.pid
  for i in 1 2 3 4 5 6 7 8 9 10; do
    if curl -sf -o /dev/null "$PHASE5_BASE/__phase5"; then
      echo "static_ready"
      break
    fi
    sleep 0.3
  done
fi

echo "---identity---"
curl -sD - "$PHASE5_BASE/__phase5" | head -n 20
echo
curl -s "$PHASE5_BASE/" | python3 -c 'import sys; t=sys.stdin.read(); print("title_ok", "v3dist recovered React app" in t); print("main_js", "app.f61e4774.js" in t); print("root", "id=root" in t or "id=\"root\"" in t or "id=root" in t)'

echo "---playwright install/run---"
cd $ROOT/phase5-node
if [ ! -f package.json ]; then
  npm init -y >/dev/null
fi
if [ ! -d node_modules/playwright ]; then
  npm install --no-fund --no-audit playwright@1.49.1 >/tmp/phase5-npm.log
fi
npx playwright install chromium
cp -f $ROOT/scripts/phase5_playwright.mjs ./phase5_playwright.mjs
node ./phase5_playwright.mjs
