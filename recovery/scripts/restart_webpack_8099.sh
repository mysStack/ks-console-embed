#!/usr/bin/env bash
set -euo pipefail
cd /home/bruce/code/ks-develop/kse-console-v3/recovery/react-app

echo "=== before ==="
ss -ltn | grep 8099 || echo "8099 down"
ps -ef | grep -E "[w]ebpack serve|[n]ode.*webpack" | head

# Stop the known webpack pid if still alive; fall back to the listener owner.
if ps -p 234350 >/dev/null 2>&1; then
  echo "TERM webpack 234350"
  kill -TERM 234350 || true
fi

# If something else still owns 8099, TERM that pid (not fuser -k).
for _ in 1 2 3 4 5 6 7 8 9 10; do
  if ! ss -ltn | grep -q ":8099 "; then
    break
  fi
  owner=$(ss -ltnp | awk "/:8099 / {print}" | sed -n "s/.*pid=\\([0-9]*\\).*/\\1/p" | head -n1)
  if [ -n "${owner}" ]; then
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

echo "=== starting webpack ==="
nohup npx webpack serve --mode development --no-open >/tmp/kse-v3-webpack-8099.log 2>&1 &
echo "started pid $!"
sleep 2
ss -ltn | grep 8099 || echo "8099 not yet listening"
ps -ef | grep -E "[w]ebpack serve" | head
