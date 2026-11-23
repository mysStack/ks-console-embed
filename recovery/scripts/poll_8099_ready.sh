#!/usr/bin/env bash
set -euo pipefail
for i in $(seq 1 40); do
  echo "=== poll $i $(date +%H:%M:%S) ==="
  ps -ef | grep webpack | grep -v grep | head
  ss -ltn | grep 8099 || echo 8099_down
  code=$(curl -sS -o /tmp/kse-v3-login.html -w "%{http_code}" --max-time 8 http://127.0.0.1:8099/login || echo fail)
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
