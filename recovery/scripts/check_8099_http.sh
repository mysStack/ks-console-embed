#!/usr/bin/env bash
set -euo pipefail
echo "=== pid tree ==="
ps -p 2647922,2647921,2647887,2647886 -o pid,ppid,etime,cmd --no-headers 2>/dev/null || true
echo "=== http ==="
curl -sS -o /dev/null -w "login %{http_code} %{time_total}s\n" --max-time 8 http://127.0.0.1:8099/login || echo "login_fail"
curl -sS -o /dev/null -w "root %{http_code} %{time_total}s\n" --max-time 8 http://127.0.0.1:8099/ || echo "root_fail"
