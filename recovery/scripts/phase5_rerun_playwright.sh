#!/usr/bin/env bash
set -euo pipefail
ROOT=/home/bruce/code/ks-develop/kse-console-v3/recovery
PORT=${PHASE5_PORT:-8108}
export PHASE5_PORT=$PORT
export PHASE5_BASE="http://127.0.0.1:${PORT}"
export PHASE5_API_ORIGIN="${PHASE5_API_ORIGIN:-http://192.168.2.131:30880}"
mkdir -p $ROOT/phase5-evidence $ROOT/phase5-node

echo "---8108---"
curl -sD - "$PHASE5_BASE/__phase5" | head -n 16 || echo DOWN
ss -ltn | grep -E ':8099 ' || echo 8099_not_listening

cd $ROOT/phase5-node
npx playwright install chromium
cp -f $ROOT/scripts/phase5_playwright.mjs ./phase5_playwright.mjs
node ./phase5_playwright.mjs
