#!/usr/bin/env bash
set -euo pipefail
curl -sf http://127.0.0.1:8108/__phase5
echo
cd /home/bruce/code/ks-develop/kse-console-v3/recovery/phase5-node
node phase6_ops_verify.mjs
echo ops_verify_done
