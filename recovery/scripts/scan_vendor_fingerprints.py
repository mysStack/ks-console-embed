#!/usr/bin/env python3
from pathlib import Path

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = {
    "jwt-decode": "Invalid token specified",
    "nanoid": "url-friendly unique ID generator",
    "prismjs": "Prism.languages",
    "react-draggable": "react-draggable",
    "react-mentions": "react-mentions",
    "path-to-regexp": "Must have token",
    "ansi_up": "ansi_up",
    "fast-copy": "fast-copy",
    "memoizee": "memoizee",
    "netmask": "netmask",
    "sortablejs": "Sortable.create",
    "react-file-reader": "react-file-reader",
    "strip-ansi": "strip-ansi",
    "d3-zoom": "d3-zoom",
    "dagre": "dagre.graphlib",
}

hits = {}
for path in UNPACKED.glob("module-*.js"):
    try:
        text = path.read_text(encoding="utf-8", errors="ignore")
    except OSError:
        continue
    for name, needle in NEEDLES.items():
        if needle in text:
            hits.setdefault(name, []).append(path.name)

for name, files in hits.items():
    files.sort()
    print(f"{name}: {files[:8]}{' ...' if len(files) > 8 else ''} ({len(files)})")
missing = [n for n in NEEDLES if n not in hits]
print("missing:", missing)
