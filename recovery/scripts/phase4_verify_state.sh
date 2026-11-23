#!/usr/bin/env bash
set -euo pipefail
echo "---8099---"
ss -ltn | grep -E ":8099 " || echo DOWN
echo "---counts---"
python3 /home/bruce/code/ks-develop/kse-console-v3/recovery/scripts/count_leftover_live.py 2>/dev/null || true
python3 - <<'PY'
from pathlib import Path
import re
SRC = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src")
STUB = re.compile(r'export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp|chunks)/')
dest = 0
for prefix in ("pages","core","components","stores","actions","utils","configs","dmp"):
    d = SRC/prefix
    if d.exists():
        dest += sum(1 for p in d.rglob("*.js") if p.is_file())
live=stub=0
for p in (SRC/"unpacked").glob("module-*.js"):
    t = p.read_text(encoding="utf-8", errors="ignore")[:400]
    if STUB.search(t):
        stub += 1
    else:
        live += 1
print("dest", dest, "stub", stub, "leftover", live)
PY
echo "---git---"
cd /home/bruce/code/ks-develop/kse-console-v3
git status -sb | head -n 20
echo "---phase4-build---"
ls -l /home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/phase4-build/index.html /home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/phase4-build/app.f61e4774.js
echo "---missing-audit---"
python3 /home/bruce/code/ks-develop/kse-console-v3/recovery/scripts/phase4_missing_audit.py
