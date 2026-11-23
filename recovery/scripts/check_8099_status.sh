#!/usr/bin/env bash
set -euo pipefail
echo "=== pid 2187792 ==="
if ps -p 2187792 >/dev/null 2>&1; then
  ps -p 2187792 -o pid,etime,cmd
else
  echo "dead"
fi
echo "=== 8099 listen ==="
ss -ltnp | awk '/:8099 / {print}'
echo "=== webpack processes ==="
ps -ef | awk '/webpack/ && !/awk/ {print}'
echo "=== node processes on 8099 via lsof/fuser info ==="
if command -v lsof >/dev/null 2>&1; then
  lsof -iTCP:8099 -sTCP:LISTEN || true
fi
echo "=== log files ==="
ls -l /tmp/kse-v3-webpack-8099.log /tmp/*webpack* /tmp/kse-v3* 2>/dev/null || true
echo "=== stylesheet.css ==="
ls -l /home/bruce/code/ks-develop/console/dist/v3dist/stylesheet.css
wc -c /home/bruce/code/ks-develop/console/dist/v3dist/stylesheet.css
head -c 300 /home/bruce/code/ks-develop/console/dist/v3dist/stylesheet.css
echo
echo "=== v3dist css list ==="
ls /home/bruce/code/ks-develop/console/dist/v3dist/*.css
