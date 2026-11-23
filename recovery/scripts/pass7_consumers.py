#!/usr/bin/env python3
from pathlib import Path
import re

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
SRC = APP / "src"
UNPACKED = SRC / "unpacked"

needles = [
    "unpacked/module-70.js",
    "unpacked/module-146.js",
    "unpacked/module-487.js",
    "unpacked/module-505.js",
    "unpacked/module-117.js",
    "unpacked/module-958.js",
    "unpacked/module-1056.js",
    "unpacked/module-1648.js",
    "unpacked/module-33.js",
    "unpacked/module-365.js",
    "unpacked/module-366.js",
]


def walk():
    for folder in ("unpacked", "pages", "components", "stores", "actions", "utils", "configs", "core"):
        d = SRC / folder
        if not d.is_dir():
            continue
        for p in d.rglob("*.js"):
            if "named" in p.parts:
                continue
            yield p


files = {p: p.read_text(encoding="utf-8", errors="replace") for p in walk()}
print("files", len(files))
for needle in needles:
    print(f"\n=== {needle} ===")
    n = 0
    for p, t in files.items():
        if needle not in t:
            continue
        rel = p.relative_to(SRC).as_posix()
        for i, line in enumerate(t.splitlines(), 1):
            if needle in line:
                print(f"  {rel}:{i}:{line.strip()[:160]}")
                n += 1
    print("  hits", n)

print("\n=== leftover 70 Accessors uniqueness ===")
acc = [p.name for p in UNPACKED.glob("module-*.js") if "Accessors not supported" in p.read_text(encoding="utf-8", errors="replace")]
print("leftover Accessors", acc)

print("\n=== leftover Reduce uniqueness ===")
red = [p.name for p in UNPACKED.glob("module-*.js") if "Reduce of empty array with no initial value" in p.read_text(encoding="utf-8", errors="replace")]
print("leftover Reduce", red)

print("\n=== leftover MSIE uniqueness ===")
msie = [p.name for p in UNPACKED.glob("module-*.js") if "MSIE|Trident" in p.read_text(encoding="utf-8", errors="replace")]
print("leftover MSIE", msie)

print("\n=== leftover Chrome/Edge uniqueness ===")
chrome = []
edge = []
for p in UNPACKED.glob("module-*.js"):
    t = p.read_text(encoding="utf-8", errors="replace")
    if r"Chrome\/(\d+)" in t or "Chrome/(\\d+)" in t:
        chrome.append(p.name)
    if r"Edge\/(\d+)" in t or "Edge/(\\d+)" in t:
        edge.append(p.name)
print("leftover Chrome", chrome)
print("leftover Edge", edge)
