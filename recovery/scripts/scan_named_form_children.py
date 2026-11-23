#!/usr/bin/env python3
"""Unnamed JS children of uniquely named Forms/Inputs parents."""
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known_mods = set(re.findall(r"module-(\d+)\.js", KNOWN_PY))
pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
imp = re.compile(r'(?:from|require\()\s*["\']\./(module-\d+\.js)')

def is_css(mod):
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    return text.lstrip().startswith("export default {") and "import " not in text.split("\n")[0]

parents = sorted(
    k for k in pairs
    if k.startswith("components/Forms/") or k.startswith("components/Inputs/")
)
shown = 0
for name in parents:
    mod = pairs[name]
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    kids = []
    for m in imp.findall(text):
        mid = re.search(r"\d+", m).group()
        if mid not in known_mods and int(mid) >= 800:
            if not is_css(m):
                kids.append(m)
    if kids:
        print(f"{name} -> {mod}")
        print("  unnamed-js:", list(dict.fromkeys(kids)))
        shown += 1
print("parents_with_unnamed_js", shown)
