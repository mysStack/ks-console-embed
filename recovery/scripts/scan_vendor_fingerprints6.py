#!/usr/bin/env python3
from pathlib import Path

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    ("toolbox key", "ks-toolbox-pos"),
    ("KubeTools", "KubeTools"),
    ("showTools", "showTools"),
    ("languages.promql", "promql"),
    ("Prism.languages", "languages.promql"),
    ("nanoid alphabet", "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz"),
    ("nanoid generate", "nanoid"),
    ("fast-copy", "fastCopy"),
    ("memoizee primitive", "primitive: true"),
    ("react-draggable cancel", "handleSelector"),
    ("Draggable", "Draggable"),
]

hits = {name: [] for name, _ in NEEDLES}
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for name, needle in NEEDLES:
        if needle in text:
            hits[name].append(path.name)

for name, files in hits.items():
    print(f"{name}: {files[:12]} ({len(files)})")
