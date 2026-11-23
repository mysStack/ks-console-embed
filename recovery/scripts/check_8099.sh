#!/usr/bin/env bash
set -euo pipefail
echo "=== 8099 listeners ==="
ss -ltnp 2>/dev/null | grep 8099 || ss -ltn | grep 8099 || echo "8099_down"

echo "=== webpack pids ==="
ps -ef | grep -E '[w]ebpack serve' || echo "no_webpack_serve"
ps -ef | grep -E '[n]px webpack' || echo "no_npx_webpack"
