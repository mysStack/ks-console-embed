#!/usr/bin/env bash
set -euo pipefail
cd /home/bruce/code/ks-develop/kse-console-v3/recovery/react-app
# drop stale listen if any, without fuser
if ss -ltn | grep -q ":8099 "; then
  owner=$(ss -ltnp 2>/dev/null | awk "/:8099 / {print}" | sed -n "s/.*pid=\\([0-9]*\\).*/\\1/p" | head -n1)
  if [ -n "${owner:-}" ]; then
    echo "TERM ${owner}"
    kill -TERM "${owner}" || true
    sleep 2
  fi
fi
: > /tmp/kse-v3-webpack-8099.log
# survive WSL helper exit; line-buffer logs
setsid stdbuf -oL -eL npx webpack serve --mode development --no-open \
  </dev/null >/tmp/kse-v3-webpack-8099.log 2>&1 &
echo "started pid $!"
sleep 4
ss -ltn | grep 8099 || echo "8099 not listening yet"
ps -ef | grep webpack | grep -v grep | head
echo "log_bytes $(wc -c </tmp/kse-v3-webpack-8099.log)"
