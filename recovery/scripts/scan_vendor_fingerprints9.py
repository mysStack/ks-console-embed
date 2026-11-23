#!/usr/bin/env python3
from pathlib import Path

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    ("strip-ansi", "strip-ansi"),
    ("ansi regex", "ANSI escape codes"),
    ("createPatch", "createPatch"),
    ("Index:", "\nIndex: "),
    ("async-validator Schema", "async-validator"),
    ("whatwg-fetch", "whatwg-fetch"),
    ("self.fetch", "self.fetch"),
    ("diff2html leftover", "Diff2Html"),
    ("stripAnsi call", "stripAnsi"),
]

hits = {name: [] for name, _ in NEEDLES}
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for name, needle in NEEDLES:
        if needle in text:
            hits[name].append(path.name)

for name, files in hits.items():
    print(f"{name}: {files[:12]} ({len(files)})")
