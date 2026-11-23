#!/usr/bin/env python3
"""Side-effect import of a default-export React component + empty render."""
from pathlib import Path
from collections import defaultdict
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
side = re.compile(r"""^import\s+["']\./(module-\d+\.js)["']\s*;?\s*$""", re.M)
has_default = re.compile(r"""export\s+default\b""")
classish = re.compile(r"""key:\s*["']render["']|export\s+default\s+class\b|React\.Component|PureComponent""")
empty_render = re.compile(
    r"""key:\s*["']render["']\s*,\s*value:\s*function(?:\s+\w+)?\s*\([^)]*\)\s*\{\s*return\s+(?:null|undefined|<\s*div\s*/\s*>|<\s*>\s*<\s*/\s*>)\s*;?\s*\}""",
    re.S,
)

texts = {p.name: p.read_text(encoding="utf-8", errors="ignore") for p in UNPACKED.glob("module-*.js")}
print("=== empty-render files that side-effect-import a default component ===")
hits = 0
for name, text in texts.items():
    if not empty_render.search(text):
        continue
    targets = []
    for m in side.findall(text):
        tgt = texts.get(m, "")
        if has_default.search(tgt) and classish.search(tgt) and "export default {}" not in tgt.strip()[:40]:
            targets.append(m)
    if targets:
        hits += 1
        print(f"  {name} -> {targets}")
print("hits", hits)

print("\n=== all empty-render files ===")
n = 0
for name, text in sorted(texts.items(), key=lambda kv: kv[0]):
    if empty_render.search(text):
        n += 1
        print(" ", name)
print("empty_count", n)
