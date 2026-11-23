#!/usr/bin/env python3
from pathlib import Path
import json

root = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/node_modules")
pkgs = [
    "semver", "react", "react-dom", "mobx", "mobx-react", "react-router",
    "react-color", "react-ace", "ace-builds", "d3-selection", "d3-zoom",
    "d3-shape", "recharts", "react-transition-group", "core-js",
    "@kube-design/components",
]
for name in pkgs:
    p = root / name / "package.json"
    if not p.exists():
        print(f"{name}: MISSING")
        continue
    data = json.loads(p.read_text(encoding="utf-8"))
    print(f"{name}: {data.get('version')} main={data.get('main')} module={data.get('module')}")

rc = root / "react-color"
print("react-color entries", sorted(x.name for x in rc.iterdir())[:30] if rc.exists() else None)
dz = root / "d3-zoom" / "node_modules"
print("d3-zoom nested", list(dz.iterdir()) if dz.exists() else None)
ra = root / "react-ace" / "node_modules"
print("react-ace nested", list(ra.iterdir()) if ra.exists() else None)
rtg = root / "react-transition-group" / "node_modules"
print("rtg nested", list(rtg.iterdir()) if rtg.exists() else None)
