#!/usr/bin/env bash
set -euo pipefail
echo "=== listen ==="
ss -ltnp 2>/dev/null | grep 8099 || ss -ltn | grep 8099 || echo "8099_down"
echo "=== procs ==="
ps -ef | grep -E '[w]ebpack serve|[n]px webpack' || echo "no_webpack"
echo "=== log ==="
wc -c /tmp/kse-v3-webpack-8099.log || true
python3 /home/bruce/code/ks-develop/kse-console-v3/recovery/scripts/read_webpack_log.py
python3 - <<'PY'
import socket
s = socket.socket()
s.settimeout(3)
try:
    s.connect(("127.0.0.1", 8099))
    print("tcp_ok")
except Exception as e:
    print("tcp_fail", type(e).__name__, e)
finally:
    s.close()
PY
