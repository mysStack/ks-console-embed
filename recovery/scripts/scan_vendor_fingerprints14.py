#!/usr/bin/env python3
"""Slice 54 vendor leftovers in the live import graph. Alias to npm only if
confirmed. No LineChart without chartName. No react-draggable. jwt-decode
server-only.
"""
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
WEBPACK = (ROOT / "recovery/react-app/webpack.config.js").read_text(encoding="utf-8")
RECHARTS = (ROOT / "recovery/react-app/recharts-aliases.js").read_text(encoding="utf-8")
ENTRY = UNPACKED / "entry.js"

aliased = set(re.findall(r"module-(\d+)\.js", WEBPACK + "\n" + RECHARTS))
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")

print("=== indexing live graph ===", flush=True)
texts = {}
importers = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    texts[path.name] = text
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)

live = set()
stack = ["entry.js"] if ENTRY.exists() else ["module-759.js"]
seen = set()
while stack:
    cur = stack.pop()
    if cur in seen:
        continue
    seen.add(cur)
    live.add(cur)
    text = texts.get(cur, "")
    if not text and cur == "entry.js" and ENTRY.exists():
        text = ENTRY.read_text(encoding="utf-8", errors="ignore")
        texts[cur] = text
    for m in imp_unpacked.findall(text):
        if m not in seen:
            stack.append(m)
print("live_modules", len(live), "aliased", len(aliased))

NEEDLES = [
    ("react-draggable", "react-draggable"),
    ("DraggableCore", "DraggableCore"),
    ("jwt-decode", "Invalid token specified"),
    ("jwt decode header", "jwt-decode"),
    ("LineChart chartName", 'chartName: "LineChart"'),
    ("LineChart chartName eq", 'chartName = "LineChart"'),
    ("semver validRange", "validRange"),
    ("filesize lib", "filesize"),
    ("js-cookie", "js-cookie"),
    ("uuid v4", "xxxxxxxx-xxxx-4xxx"),
    ("tinycolor2", "tinycolor"),
    ("JSEncrypt", "JSEncrypt"),
    ("EventSource new", "new EventSource"),
    ("sockjs", "sockjs"),
    ("htmlparser", "htmlparser"),
    ("stream-array", "stream-array"),
    ("numeral lib", "numeral("),
    (" internmap", "internmap"),
    ("parse-entity-name", "parse-entities"),
    ("warning.js", "throwOnWarnings"),
    ("tiny-invariant", "Invariant failed"),
    ("clipboard.js", "clipboard.js"),
    ("copy-to-clipboard leftover", "copy-to-clipboard"),
]

hits = {name: [] for name, _ in NEEDLES}
banner_hits = defaultdict(list)
banner_re = re.compile(
    r"(?:@license|Copyright \(c\)|Licensed under|SPDX-License-Identifier)[^\n]{0,120}",
    re.I,
)

for name, text in texts.items():
    for n, needle in NEEDLES:
        if needle in text:
            hits[n].append(name)
    mid = re.search(r"\d+", name)
    mid = mid.group() if mid else ""
    if name not in live or mid in aliased:
        continue
    for m in banner_re.finditer(text[:4000]):
        banner_hits[m.group(0)[:100]].append(name)

print("\n=== needle hits (live unnamed first) ===")
for n, _needle in NEEDLES:
    files = hits[n]
    live_unnamed = []
    live_aliased = []
    dead = []
    for f in files:
        mid = re.search(r"\d+", f)
        mid = mid.group() if mid else ""
        if f in live or f == "entry.js":
            if mid in aliased:
                live_aliased.append(f)
            else:
                live_unnamed.append(f)
        else:
            dead.append(f)
    if not files:
        continue
    print(
        f"{n}: live_unnamed={live_unnamed[:12]} ({len(live_unnamed)}) "
        f"live_aliased={len(live_aliased)} dead={len(dead)}"
    )
    for f in live_unnamed[:8]:
        imps = sorted(set(importers[f]))[:8]
        print(f"    {f} importers={imps} head={texts[f][:160].replace(chr(10), ' | ')[:150]}")

print("\n=== copyright/license banners in live unnamed ===")
shown = 0
for banner, files in sorted(banner_hits.items(), key=lambda kv: -len(set(kv[1]))):
    uniq = sorted(set(files))
    unnamed = [f for f in uniq if (re.search(r"\d+", f).group() if re.search(r"\d+", f) else "") not in aliased]
    if not unnamed:
        continue
    print(f"  {banner!r} -> {unnamed[:8]} ({len(unnamed)})")
    shown += 1
    if shown >= 30:
        break
