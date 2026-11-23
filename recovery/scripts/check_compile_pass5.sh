#!/usr/bin/env bash
set -euo pipefail
echo "=== 8099 ==="
ss -ltnp 2>/dev/null | grep 8099 || ss -ltn | grep 8099 || echo "8099 down"
echo "=== webpack ==="
ps -ef | grep webpack | grep -v grep | head || true
echo "=== log ==="
wc -c /tmp/kse-v3-webpack-8099.log
grep -E "ERROR in |compiled with|WARNING in DefinePlugin" /tmp/kse-v3-webpack-8099.log | tail -n 20 || true
echo "=== tail ==="
tail -n 40 /tmp/kse-v3-webpack-8099.log
