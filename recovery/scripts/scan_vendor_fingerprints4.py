#!/usr/bin/env python3
from pathlib import Path

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    ("tokensToFunction", "tokensToFunction"),
    ("tokensToRegExp", "tokensToRegExp"),
    ("pathToRegexp", "pathToRegexp"),
    ("d3-zoom identity", "d3.zoomIdentity"),
    ("d3-select", "d3.select("),
    ("d3-shape", "d3.curve"),
    ("dagre-layout", "dagre.layout"),
    ("graphlib Graph", "graphlib.Graph"),
    ("jwt specified", "Invalid token specified"),
    ("jwt atob payload", "payload.replace(/-/g"),
    ("draggableCore", "DraggableCore"),
    ("controlPosition", "controlPosition"),
    ("Prism.hooks", "Prism.hooks"),
    ("ansi_up", "ansi_up"),
    ("LineChart chartName", 'chartName = "LineChart"'),
    ("displayName LineChart", 'displayName = "LineChart"'),
    ("react-virtualized Grid", "Grid.defaultProps"),
    ("whatwg-fetch", "whatwg-fetch"),
]

hits = {name: [] for name, _ in NEEDLES}
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for name, needle in NEEDLES:
        if needle in text:
            hits[name].append(path.name)

for name, files in hits.items():
    print(f"{name}: {files[:12]} ({len(files)})")
