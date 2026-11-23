#!/usr/bin/env python3
from pathlib import Path
root = Path("/home/bruce/code/ks-develop/kse-console-v3/src")
for c in [
    "components/Modals/GrafanaModal",
    "components/Modals/CustomMonitoring",
]:
    found=[]
    for ext in [".js",".jsx","/index.js","/index.jsx"]:
        p = root / f"{c}{ext}"
        if p.exists():
            found.append(str(p.relative_to(root)))
    print(c, found)
