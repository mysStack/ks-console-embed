#!/usr/bin/env bash
set -euo pipefail
post() {
  local url=$1
  echo "=== POST $url ==="
  curl -sS -m 8 -o /tmp/phase5-login.body -D /tmp/phase5-login.hdr \
    -X POST "$url" \
    -H 'content-type: application/json' \
    -d '{"username":"phase5-probe-not-a-user","encrypt":"00"}' \
    -w "http %{http_code} ctype_via_write\n" || echo fail
  python3 - <<'PY'
from pathlib import Path
h=Path("/tmp/phase5-login.hdr").read_text(errors="ignore")
b=Path("/tmp/phase5-login.body").read_bytes()
print("hdr", [ln.strip() for ln in h.splitlines() if ln.lower().startswith(("http/","content-type:","set-cookie:","location:"))][:8])
print("body_len", len(b), "jsonish", b[:1] in (b"{", b"["))
print("body_head", b[:120].replace(b"\n", b" "))
PY
}
post "http://192.168.2.131:30880/login"
post "http://10.66.20.25:30880/login"
post "http://10.66.20.23:30880/login"
