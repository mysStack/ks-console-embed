#!/usr/bin/env python3
from pathlib import Path

p = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/phase4-build")
files = [f for f in p.iterdir() if f.is_file()]
print("count", len(files))
print("total_bytes", sum(f.stat().st_size for f in files))
print("---special---")
for f in sorted(files, key=lambda x: x.name):
    if f.suffix in {".html", ".txt", ".map"} or f.name.startswith("app.") or "index" in f.name:
        print("%10d %s" % (f.stat().st_size, f.name))
print("---top10---")
for f in sorted(files, key=lambda x: -x.stat().st_size)[:10]:
    print("%10d %s" % (f.stat().st_size, f.name))
