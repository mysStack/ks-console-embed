#!/usr/bin/env bash
set -euo pipefail
ROOT=/home/bruce/code/ks-develop/kse-console-v3/recovery
bash "$ROOT/scripts/phase5_restart_static.sh"
curl -s http://127.0.0.1:8108/__phase5
echo
ss -ltn | grep -E ':8099 ' || echo 8099_not_listening
ss -ltn | grep -E ':8108 ' || echo 8108_missing
cd "$ROOT/phase5-node"
node phase6_context_verify.mjs
