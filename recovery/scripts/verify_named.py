#!/usr/bin/env python3
from pathlib import Path

named = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/named")
unpacked = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
files = list(named.rglob("*.js"))
print("named_count", len(files))
hits = []
for p in unpacked.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if "src/named/" in text or '/named/' in text:
        hits.append(p.name)
print("NO_NAMED_IN_UNPACKED" if not hits else hits[:10])
