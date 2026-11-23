#!/usr/bin/env bash
set -euo pipefail
echo "=== 8099 ==="
ss -ltnp 2>/dev/null | grep 8099 || ss -ltn | grep 8099 || echo "8099 down"
echo "=== webpack procs ==="
ps -ef | grep webpack | grep -v grep | head || true
echo "=== log ==="
wc -c /tmp/kse-v3-webpack-8099.log || true
tail -n 30 /tmp/kse-v3-webpack-8099.log || true
