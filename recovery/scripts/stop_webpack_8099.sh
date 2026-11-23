#!/usr/bin/env bash
set -euo pipefail

echo "=== before ==="
ss -ltn | grep 8099 || echo "8099 down"
ps -ef | grep -E "[w]ebpack serve" | head || true

if ps -p 234350 >/dev/null 2>&1; then
  echo "TERM webpack 234350"
  kill -TERM 234350 || true
fi

for _ in 1 2 3 4 5 6 7 8 9 10 11 12 15; do
  if ! ss -ltn | grep -q ":8099 "; then
    echo "8099 is free"
    exit 0
  fi
  owner=$(ss -ltnp 2>/dev/null | awk "/:8099 / {print}" | sed -n "s/.*pid=\\([0-9]*\\).*/\\1/p" | head -n1)
  if [ -n "${owner:-}" ]; then
    echo "TERM 8099 owner ${owner}"
    kill -TERM "${owner}" || true
  fi
  sleep 1
done

if ss -ltn | grep -q ":8099 "; then
  echo "8099 still bound after TERM; aborting instead of fuser-kill"
  ss -ltnp | grep 8099 || true
  exit 1
fi
echo "8099 is free"
