#!/usr/bin/env bash
echo "=== listen ==="
ss -ltnp 2>/dev/null | grep 8099 || ss -ltn | grep 8099 || echo "8099 down"
echo "=== procs ==="
ps -ef | grep webpack | grep -v grep | head -20
echo "=== cpu ==="
ps -eo pid,pcpu,pmem,etime,cmd | grep webpack | grep -v grep | head
echo "=== log bytes ==="
wc -c /tmp/kse-v3-webpack-8099.log || true
python3 /home/bruce/code/ks-develop/kse-console-v3/recovery/scripts/read_webpack_log.py
echo "=== curl ==="
python3 - <<'PY'
import socket
s=socket.socket()
s.settimeout(3)
try:
    s.connect(("127.0.0.1", 8099))
    print("tcp_ok")
except Exception as e:
    print("tcp_fail", type(e).__name__, e)
finally:
    s.close()
PY
