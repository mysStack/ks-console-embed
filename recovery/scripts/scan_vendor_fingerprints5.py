#!/usr/bin/env python3
from pathlib import Path

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    ("ansi_to_html", "ansi_to_html"),
    ("AnsiUp", "AnsiUp"),
    ("react-draggable class", "react-draggable"),
    ("DraggableCore", "DraggableCore"),
    ("Prism.highlight", "Prism.highlight"),
    ("prismjs css", "prism.css"),
    ("d3 scaleExtent", "scaleExtent"),
    ("d3 zoomIdentity", "zoomIdentity"),
    ("d3 curveBasis", "curveBasis"),
    ("d3-selection event", "d3.event"),
    ("fast-copy copy", "function copy("),
    ("memoizee", "memoizee"),
    ("nanoid", "nanoid"),
    ("jwt-decode", "jwt-decode"),
]

hits = {name: [] for name, _ in NEEDLES}
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for name, needle in NEEDLES:
        if needle in text:
            hits[name].append(path.name)

for name, files in hits.items():
    print(f"{name}: {files[:15]} ({len(files)})")
