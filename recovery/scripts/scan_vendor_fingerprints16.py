#!/usr/bin/env python3
"""Slice 60 vendor leftovers in the LIVE effective import graph.

Alias only confirmed third-party. No LineChart without chartName.
No inventing react-draggable. jwt-decode is server-only.
Do not walk into already-aliased modules.
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


def mid_of(name: str) -> str:
    m = re.search(r"\d+", name)
    return m.group() if m else ""


print("=== indexing ===", flush=True)
texts = {}
importers = defaultdict(list)
children = {}
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    texts[path.name] = text
    kids = imp_unpacked.findall(text)
    children[path.name] = kids
    for m in kids:
        importers[m].append(path.name)

if ENTRY.exists():
    et = ENTRY.read_text(encoding="utf-8", errors="ignore")
    texts["entry.js"] = et
    children["entry.js"] = imp_unpacked.findall(et)

effective = set()
stack = ["entry.js"] if ENTRY.exists() else ["module-759.js"]
seen = set()
while stack:
    cur = stack.pop()
    if cur in seen:
        continue
    seen.add(cur)
    effective.add(cur)
    if mid_of(cur) in aliased:
        continue
    for m in children.get(cur, []):
        stack.append(m)
print("effective_live", len(effective), "aliased", len(aliased))

NEEDLES = [
    ("react-draggable", "react-draggable"),
    ("DraggableCore", "DraggableCore"),
    ("jwt-decode", "Invalid token specified"),
    ("LineChart chartName", 'chartName: "LineChart"'),
    ("LineChart chartName eq", 'chartName = "LineChart"'),
    ("filesize lib", "filesize"),
    ("js-cookie", "js-cookie"),
    ("uuid v4", "xxxxxxxx-xxxx-4xxx"),
    ("tinycolor2", "tinycolor"),
    ("JSEncrypt", "JSEncrypt"),
    ("EventSource new", "new EventSource"),
    ("sockjs", "sockjs"),
    ("htmlparser", "htmlparser"),
    (" internmap", "internmap"),
    ("parse-entities", "parse-entities"),
    ("tiny-invariant", "Invariant failed"),
    ("hoist-non-react-statics", "hoist-non-react-statics"),
    ("object-assign leftover", "object-assign"),
    ("cronstrue", "cronstrue"),
    ("cron-parser", "cron-parser"),
    ("JSZip", "JSZip"),
    ("pako", "pako.min.js"),
    ("ipaddr", "ipaddr.js"),
    ("ajv leftover", "ajv"),
    ("localforage", "localforage"),
    ("axios leftover", "axios"),
    ("echarts leftover", "echarts"),
    ("codemirror leftover", "CodeMirror"),
    ("monaco leftover", "monaco-editor"),
    ("highlight leftover", "highlight.js"),
    ("crypto-js leftover", "crypto-js"),
    ("UMD rootamd", "typeof define === \"function\" && define.amd"),
    ("UMD define.amd", "define.amd"),
    ("factory exports", "factory(exports"),
    ("webpackUniversalModule", "webpackUniversalModuleDefinition"),
]

print("\n=== needle hits in effective unnamed ===")
for n, needle in NEEDLES:
    live_unnamed = []
    for name, text in texts.items():
        if needle not in text:
            continue
        mid = mid_of(name)
        if name in effective and mid and mid not in aliased:
            live_unnamed.append(name)
    if live_unnamed:
        print(f"{n}: {live_unnamed[:12]} ({len(live_unnamed)})")
        for f in live_unnamed[:6]:
            imps = sorted(set(importers[f]))[:8]
            head = texts[f][:180].replace("\n", " | ")[:160]
            print(f"    {f} importers={imps} head={head}")

banner_re = re.compile(
    r"(?:@license|Copyright \(c\)|Licensed under the|SPDX-License-Identifier|MIT License|BSD[ -]3-Clause)[^\n]{0,160}",
    re.I,
)
umd_re = re.compile(
    r"(?:typeof exports === ['\"]object['\"]|typeof define === ['\"]function['\"] && define\.amd|root\[|factory\(exports|universal module definition)",
    re.I,
)

print("\n=== copyright/UMD banners in effective unnamed ===")
shown = 0
for name in sorted(effective, key=lambda n: int(mid_of(n) or 0) if mid_of(n) else 0):
    mid = mid_of(name)
    if not mid or mid in aliased:
        continue
    text = texts.get(name, "")
    head = text[:3500]
    banners = [m.group(0)[:140] for m in banner_re.finditer(head)]
    umd = bool(umd_re.search(head))
    if not banners and not umd:
        continue
    imps = sorted(set(importers.get(name, [])))[:8]
    print(f"  {name} umd={umd} bytes={len(text)} importers={imps}")
    for b in banners[:3]:
        print(f"    banner={b!r}")
    print(f"    head={head[:200].replace(chr(10), ' | ')}")
    shown += 1
    if shown >= 50:
        break
print("banner_shown", shown)

print("\n=== LineChart / draggable / jwt sanity ===")
for needle in ("chartName", "react-draggable", "DraggableCore", "jwt-decode", "Invalid token specified"):
    files = [n for n, t in texts.items() if needle in t]
    print(f"  {needle}: {len(files)} files sample={files[:6]}")
