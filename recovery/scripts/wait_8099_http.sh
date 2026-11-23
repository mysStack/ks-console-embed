#!/usr/bin/env bash
set -euo pipefail
for i in 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15; do
  echo "=== poll $i $(date +%H:%M:%S) ==="
  ss -ltn | grep 8099 || echo "8099_down"
  ps -p 2647922 -o pid,etime,pcpu,cmd --no-headers 2>/dev/null || echo "webpack_pid_gone"
  code=$(curl -sS -o /tmp/kse-v3-8099-login.body -w "%{http_code}" --max-time 5 http://127.0.0.1:8099/login || true)
  echo "login_http ${code:-fail}"
  if [ "${code:-}" = "200" ]; then
    echo "READY"
    head -c 200 /tmp/kse-v3-8099-login.body; echo
    exit 0
  fi
  sleep 20
done
echo "NOT_READY"
exit 1
