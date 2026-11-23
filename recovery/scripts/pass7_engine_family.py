#!/usr/bin/env python3
from pathlib import Path

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
UNPACKED = APP / "src/unpacked"
INT = APP / "node_modules/core-js3/internals"

needles = [
    r"(?:ipad|iphone|ipod).*applewebkit",
    "ipad|iphone|ipod",
    "web0s(?!.*chrome)",
    r"MSIE .\.",
    "Pebble",
    "engine-is-ios",
]


def files(folder: Path):
    return {p.name: p.read_text(encoding="utf-8", errors="replace") for p in folder.glob("*.js")}


leftover = files(UNPACKED)
npm = {p.name: p.read_text(encoding="utf-8", errors="replace") for p in INT.glob("*.js")}
print("leftover", len(leftover), "internals", len(npm))
for needle in needles:
    lh = [n for n, t in leftover.items() if needle in t]
    nh = [n for n, t in npm.items() if needle in t]
    print(f"nL={len(lh)} nN={len(nh)} {needle!r}")
    if len(lh) <= 6:
        print("  leftover", lh)
    if len(nh) <= 6:
        print("  npm", nh)
    if len(lh) == 1 and len(nh) == 1:
        print("  >> 1:1", lh[0], "->", nh[0])
