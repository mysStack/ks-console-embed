#!/usr/bin/env python3
from pathlib import Path

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    ("WebSocketStore", "WebSocketStore"),
    ("nodesMetrics", "nodesMetrics"),
    ("sockjs", "sockjs"),
    ("socket.io", "socket.io"),
    ("EventSource", "new EventSource"),
    ("jsencrypt", "JSEncrypt"),
    ("filesize", "filesize"),
    ("numeral", "numeral"),
    ("clipboard.js", "clipboard.js"),
    ("copy-to-clipboard lib", "copy-to-clipboard"),
    ("tinycolor", "tinycolor"),
    ("color.js", "tinycolor2"),
    ("rc-tree leftover", "rc-tree"),
    ("react-lifecycles-compat", "react-lifecycles-compat"),
    ("warning invariant", "minified: invariant"),
    ("scheduler", "unstable_scheduleCallback"),
    ("object-assign leftover", "object-assign"),
    ("core-js leftover", "core-js"),
    ("empty render div", "return <div/>"),
    ("empty createElement div", 'createElement("div", null)'),
]

hits = {name: [] for name, _ in NEEDLES}
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for name, needle in NEEDLES:
        if needle in text:
            hits[name].append(path.name)

for name, files in hits.items():
    print(f"{name}: {files[:10]} ({len(files)})")
