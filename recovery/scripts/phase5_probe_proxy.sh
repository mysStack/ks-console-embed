#!/usr/bin/env bash
set -euo pipefail
echo '---phase5---'
curl -s http://127.0.0.1:8108/__phase5
echo
echo '---kapis/version---'
curl -sS -D - -o /tmp/p5v.json -m 8 http://127.0.0.1:8108/kapis/version | python3 -c 'import sys; print("".join(sys.stdin.readlines()[:12]))'
python3 - <<'PY'
from pathlib import Path
t=Path("/tmp/p5v.json").read_text(errors="ignore")[:160]
print("body", t.replace("\n"," "))
PY
echo '---dummy login---'
curl -sS -m 8 -D - -o /tmp/p5l.json -X POST http://127.0.0.1:8108/login \
  -H 'content-type: application/json' \
  -d '{"username":"phase5-probe-not-a-user","encrypt":"00"}' | python3 -c 'import sys
for ln in sys.stdin:
    l=ln.lower()
    if l.startswith(("http/","content-type:","x-recovery")):
        print(ln.strip())'
python3 - <<'PY'
from pathlib import Path
print("login_body", Path("/tmp/p5l.json").read_text(errors="ignore")[:200])
PY
