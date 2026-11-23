#!/usr/bin/env bash
set -euo pipefail
for i in $(seq 1 48); do
  echo "=== poll $i $(date +%H:%M:%S) ==="
  ps -p 3301848 -o pid,pcpu,etime,stat 2>/dev/null || echo webpack_gone
  ss -ltn | grep 8099 || echo 8099_down
  code=$(curl -sS -A Mozilla -o /tmp/kse-v3-login.html -w "%{http_code}" --max-time 12 http://127.0.0.1:8099/login || echo fail)
  echo "login_http ${code}"
  if [ "${code}" = "200" ]; then
    grep -oE "app\.[a-f0-9]+\.js" /tmp/kse-v3-login.html | head
    echo READY
    exit 0
  fi
  sleep 8
done
echo NOT_READY
exit 1
