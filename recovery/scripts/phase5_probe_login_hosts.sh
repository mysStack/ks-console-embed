#!/usr/bin/env bash
set -euo pipefail
probe() {
  local url=$1
  echo "=== $url ==="
  curl -sS -o /tmp/phase5-probe.body -D /tmp/phase5-probe.hdr -m 5 -w "http %{http_code} time %{time_total}\n" "$url" || echo curl_fail
  python3 - <<'PY'
from pathlib import Path
h=Path("/tmp/phase5-probe.hdr").read_text(errors="ignore")
b=Path("/tmp/phase5-probe.body").read_bytes()[:80]
print("server", [ln for ln in h.splitlines() if ln.lower().startswith("server:") or ln.lower().startswith("location:") or ln.lower().startswith("content-type:")][:6])
print("body_head", b[:80])
PY
}
for u in \
  "http://192.168.2.131:30880/login" \
  "http://192.168.2.131:30880/kapis/version" \
  "http://10.66.20.23:30880/login" \
  "http://10.66.20.23:30880/kapis/version" \
  "http://10.66.20.25:30880/login" \
  "http://10.66.20.25:30880/kapis/version" \
  "http://127.0.0.1:8108/login"
 do
  probe "$u"
 done
