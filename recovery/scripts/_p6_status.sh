#!/usr/bin/env bash
set -euo pipefail
ss -ltn | grep -E ':8099 ' || echo 8099_not_listening
ss -ltn | grep -E ':8108 ' || echo 8108_not_listening
curl -sf http://127.0.0.1:8108/__phase5 || echo phase5_health_fail
echo
python3 - <<'PY'
from pathlib import Path
p = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/phase4-build")
idx = (p/"index.html").read_text(encoding="utf-8", errors="ignore")
import re
m = re.search(r"app\.[a-f0-9]+\.js", idx)
print("index_app", m.group(0) if m else "missing")
print("index_exists", (p/"index.html").exists())
print("build_files", len(list(p.glob("*"))))
PY
