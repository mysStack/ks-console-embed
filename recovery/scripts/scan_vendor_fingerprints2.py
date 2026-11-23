#!/usr/bin/env python3
from pathlib import Path

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = {
    "InvalidTokenError": "InvalidTokenError",
    "jwt decode atob": "jwt",
    "nanoid alphabet": "use URL-friendly",
    "Prism": "/* PrismJS",
    "draggable": "DraggableCore",
    "path-to-regexp": "path-to-regexp",
    "AnsiUp": "AnsiUp",
    "fastCopy": "fastCopy",
    "dagre": "graphlib",
}

# narrower extra
EXTRA = [
    ("jwt-decode fn", "function(e,t){if(typeof e!==\"string\")"),
]

hits = {k: [] for k in NEEDLES}
for path in UNPACKED.glob("module-*.js"):
    try:
        text = path.read_text(encoding="utf-8", errors="ignore")
    except OSError:
        continue
    for name, needle in NEEDLES.items():
        if needle in text:
            hits[name].append(path.name)

for name, files in hits.items():
    files.sort()
    print(f"{name}: {files[:12]} ({len(files)})")
