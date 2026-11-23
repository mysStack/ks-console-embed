#!/usr/bin/env python3
"""List orig src top-level dirs vs recovered webpack aliases."""
from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
ORIG = ROOT / "src"
APP = ROOT / "recovery/react-app"
WEBPACK = (APP / "webpack.config.js").read_text(encoding="utf-8")
OUT = APP / "PASS10_PREFIXES.json"

KNOWN = ("pages", "components", "stores", "actions", "utils", "configs", "core", "unpacked")
dirs = sorted(p.name for p in ORIG.iterdir() if p.is_dir() and not p.name.startswith("."))
files = sorted(p.name for p in ORIG.iterdir() if p.is_file() and not p.name.startswith("."))
aliased = set()
for m in re.finditer(r"^\s+([A-Za-z0-9_]+):\s+path\.resolve\(__dirname, \"src/", WEBPACK, re.M):
    aliased.add(m.group(1))
for m in re.finditer(r"^\s+\"([A-Za-z0-9_]+)/\":\s+path\.resolve\(__dirname, \"src/", WEBPACK, re.M):
    aliased.add(m.group(1))

missing = [d for d in dirs if d not in aliased and d not in ("named",)]
print("orig_dirs", dirs, flush=True)
print("orig_files", files, flush=True)
print("webpack_aliased", sorted(aliased), flush=True)
print("missing_aliases", missing, flush=True)
for d in missing:
    p = ORIG / d
    njs = sum(1 for x in p.rglob("*") if x.suffix in {".js", ".jsx"})
    print(f"  {d}: js/jsx={njs} exists={p.is_dir()}", flush=True)

OUT.write_text(
    json.dumps(
        {
            "orig_dirs": dirs,
            "orig_top_files": files,
            "webpack_aliased": sorted(aliased),
            "missing_aliases": missing,
            "counts": {
                d: sum(1 for x in (ORIG / d).rglob("*") if x.suffix in {".js", ".jsx"})
                for d in missing
            },
        },
        indent=2,
    )
    + "\n",
    encoding="utf-8",
)
print("wrote", OUT, flush=True)
