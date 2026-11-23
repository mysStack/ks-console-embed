#!/usr/bin/env bash
set -euo pipefail
echo "=== 2187792 ==="
ps -p 2187792 >/dev/null 2>&1 && echo alive || echo dead
echo "=== 2265955 ==="
ps -p 2265955 -o pid,etime,cmd --no-headers || echo dead2265955
echo "=== 8099 ==="
ss -ltnp | awk '/:8099 / {print}'
echo "=== webpack ==="
ps -ef | awk '/webpack serve/ && !/awk/ {print}'
