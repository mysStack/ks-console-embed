#!/usr/bin/env bash
set -euo pipefail
LOG=/tmp/kse-v3-webpack-8099.log
for i in $(seq 1 36); do
  echo "=== poll $i $(date +%H:%M:%S) ==="
  ss -ltn | grep 8099 || echo "8099_down"
  if [ -f "$LOG" ]; then
    tail -20 "$LOG" || true
    if grep -q "compiled successfully" "$LOG"; then
      echo READY
      tail -40 "$LOG"
      exit 0
    fi
    if grep -qE "Module not found|ENOENT" "$LOG"; then
      echo FAIL
      tail -50 "$LOG"
      exit 1
    fi
  else
    echo "no_log_yet"
  fi
  sleep 5
done
echo TIMEOUT
tail -50 "$LOG" || true
exit 1
