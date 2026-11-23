#!/usr/bin/env bash
set -euo pipefail
ROOT=/home/bruce/code/ks-develop/kse-console-v3/recovery
PORT=8108
mkdir -p $ROOT/phase5-evidence
if [ -f $ROOT/phase5-evidence/static-server.pid ]; then
  old=$(cat $ROOT/phase5-evidence/static-server.pid)
  kill "$old" 2>/dev/null || true
fi
# Only the phase5 static server, never 8099.
fuser -k ${PORT}/tcp 2>/dev/null || true
sleep 0.4
export PHASE5_API_ORIGIN="${PHASE5_API_ORIGIN:-http://192.168.2.131:30880}"
nohup python3 $ROOT/scripts/phase5_static_server.py > $ROOT/phase5-evidence/static-server.log 2>&1 &
echo $! > $ROOT/phase5-evidence/static-server.pid
for i in 1 2 3 4 5 6 7 8 9 10; do
  if curl -sf -o /dev/null http://127.0.0.1:${PORT}/__phase5; then
    echo static_ready
    break
  fi
  sleep 0.3
done
echo '---locale---'
code=$(curl -s -o /tmp/phase5-locale.json -w '%{http_code}' http://127.0.0.1:${PORT}/dist/v3dist/locale-en.60d9ddf6aff8fa136646.json)
python3 - <<PY
import json
from pathlib import Path
print("locale_http", "$code")
p = Path("/tmp/phase5-locale.json")
t = p.read_text(encoding="utf-8", errors="ignore")[:80]
print("locale_head", t.replace("\n"," ")[:80])
print("is_json", t.lstrip().startswith("{") or t.lstrip().startswith("["))
PY
ss -ltn | grep -E ':8099 ' || echo 8099_not_listening
ss -ltn | grep -E ':8108 '
