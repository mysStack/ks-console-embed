#!/usr/bin/env python3
from pathlib import Path

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    ("diff2html", "defaultDiff2HtmlConfig"),
    ("ansi_up", "ansi_up"),
    ("AnsiUp class", "function AnsiUp"),
    ("DraggableCore", "DraggableCore"),
    ("react-draggable", "react-draggable"),
    ("prism languages", "Prism.languages"),
    ("Prism token", "token token"),
    ("jwt InvalidTokenError", "InvalidTokenError"),
    ("jwt decode", "Invalid token specified"),
    ("path-to-regexp compile", "Must have token"),
    ("fast-copy", "fast-copy"),
    ("netmask", "Netmask"),
    ("memoizee", "memoizee"),
    ("strip-ansi", "stripAnsi"),
    ("d3-zoom", "d3.zoom"),
    ("dagre layout", "dagre.layout"),
    ("whatwg-fetch", "whatwg-fetch"),
]

sizes = {}
hits = {name: [] for name, _ in NEEDLES}
for path in UNPACKED.glob("module-*.js"):
    try:
        text = path.read_text(encoding="utf-8", errors="ignore")
    except OSError:
        continue
    sizes[path.name] = path.stat().st_size
    for name, needle in NEEDLES:
        if needle in text:
            hits[name].append(path.name)

for name, files in hits.items():
    files.sort(key=lambda n: sizes.get(n, 0))
    shown = [f"{n}({sizes.get(n,0)})" for n in files[:10]]
    print(f"{name}: {shown} ({len(files)})")
