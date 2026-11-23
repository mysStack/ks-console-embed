#!/usr/bin/env python3
from pathlib import Path

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    ("toolbox tips", "TOOLBOX_SHIFT_TIPS"),
    ("toolbox title", "TOOLBOX_DESC"),
    ("logquery link", '"/logquery"'),
    ("eventsearch link", '"/eventsearch"'),
    ("axis y", 'axis="y"'),
    ("axis y obj", 'axis: "y"'),
    ("defaultPosition", "defaultPosition"),
    ("icon hammer", 'icon: "hammer"'),
    ("icon hammer jsx", 'icon="hammer"'),
    ("createCenterWindowOpt", "createCenterWindowOpt"),
    ("width 1200 height 800", "width: 1200"),
    ("ks-toolbox", "toolbox-pos"),
    ("localStorage setItem y", "Math.min(data.y"),
    ("DraggableCore", "DraggableCore"),
    ("react-draggable", "react-draggable"),
    ("position and defaultPosition", "defaultPosition props"),
    ("markMemoizee", "markMemoizee"),
    ("memoizee maxAge", "maxAge:"),
    ("markAll", "markAll"),
    ("topology region", "topology.kubernetes.io/region"),
    ("_originData", "_originData"),
    ("formData copy", "formData"),
    ("fast-copy comment", "fast-copy"),
    ("circular references", "circular"),
    ("primitive true", "primitive: true"),
    ("primitive true2", "primitive:!0"),
    ("length 500", "length: 500"),
    ("pollingFrequency", "pollingFrequency"),
    ("duration 600", "duration: 600"),
    ("AnsiUp converter", "new AnsiUp"),
    ("esMark", "esMark"),
]

hits = {name: [] for name, _ in NEEDLES}
import_hits = {"2106": [], "2107": [], "662": [], "663": [], "664": []}

for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for name, needle in NEEDLES:
        if needle in text:
            hits[name].append(path.name)
    for mid in import_hits:
        if f"./module-{mid}.js" in text and path.name != f"module-{mid}.js":
            import_hits[mid].append(path.name)

for name, files in hits.items():
    print(f"{name}: {files[:15]} ({len(files)})")
print("---imports---")
for mid, files in import_hits.items():
    print(f"module-{mid} importers: {files}")
