#!/usr/bin/env bash
set -euo pipefail
python3 /home/bruce/code/ks-develop/kse-console-v3/recovery/scripts/phase4_build_summary.py
echo "---8099---"
ss -ltn | grep -E ":8099 " || echo DOWN
code=$(curl -s -o /tmp/phase4-8099.html -w "%{http_code}" http://127.0.0.1:8099/)
echo "8099_http $code"
python3 - <<'PY'
from pathlib import Path
t = Path("/tmp/phase4-8099.html").read_text(encoding="utf-8", errors="ignore")
print("has_root", 'id="root"' in t or "id='root'" in t)
i = t.find("<title>")
j = t.find("</title>")
print("title", t[i:j+8] if i>=0 else "no-title")
print("len", len(t))
PY
