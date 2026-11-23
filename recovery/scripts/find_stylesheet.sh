#!/usr/bin/env bash
set -euo pipefail
echo "=== find stylesheet.css under v3dist ==="
find /home/bruce/code/ks-develop/console/dist/v3dist -name "*.css" -print
echo "=== webpack compile from /proc cwd ==="
pwdx 2265955 2>/dev/null || true
ls -l /proc/2265955/cwd 2>/dev/null || true
echo "=== webpack stdout/stderr via fd if any ==="
ls -l /proc/2265955/fd 2>/dev/null | head
echo "=== nohup.out in react-app ==="
ls -l /home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/nohup.out 2>/dev/null || true
tail -n 30 /home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/nohup.out 2>/dev/null || true
