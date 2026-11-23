#!/usr/bin/env python3
"""Remaining unique vendor fingerprints in unpacked, not yet aliased to npm.

Only report modules already used in the live import graph. Do not treat vendor
as business source. Do not invent LineChart without chartName.
react-draggable is not in this dist. jwt-decode is server-only.
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
if ENTRY.exists():
    stack = ["entry.js"]
else:
    stack = ["module-759.js"]
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
    ("stream-array", "stream-array"),
    ("LineChart chartName", 'chartName: "LineChart"'),
    ("LineChart chartName eq", 'chartName = "LineChart"'),
    ("filesize lib", "filesize"),
    ("numeral lib", "numeral("),
    ("js-cookie", "js-cookie"),
    ("uuid v4", "xxxxxxxx-xxxx-4xxx"),
    ("tinycolor2", "tinycolor"),
    ("clipboard.js", "clipboard.js"),
    ("copy-to-clipboard leftover", "copy-to-clipboard"),
    ("react-lifecycles-compat", "react-lifecycles-compat"),
    ("hoist-non-react-statics", "hoist-non-react-statics"),
    ("tiny-invariant", "Invariant failed"),
    ("warning.js", "throwOnWarnings"),
    ("object-assign leftover", "object-assign"),
    ("core-js leftover", "core-js"),
    ("semver validRange", "validRange"),
    ("htmlparser", "htmlparser"),
    ("sockjs", "sockjs"),
    ("JSEncrypt", "JSEncrypt"),
    ("EventSource new", "new EventSource"),
    ("d3-array", "d3-array"),
    ("d3-path", "d3-path"),
    ("d3-interpolate", "d3-interpolate"),
    ("d3-scale", "d3-scale"),
    ("react-smooth", "react-smooth"),
    ("recharts-scale", "recharts-scale"),
    ("decimal.js-light", "decimal.js-light"),
    ("reduce-css-calc", "reduce-css-calc"),
    (" internmap", "internmap"),
    ("parse-entity-name", "parse-entities"),
    ("@babel/polyfill", "@babel/polyfill"),
    ("regenerator leftover", "regeneratorRuntime"),
    ("markdown-it leftover", "markdown-it"),
    ("sortable leftover", "Sortable.create"),
    ("whatwg leftover", "github.com/github/fetch"),
    ("big.js leftover", "Big.DP"),
    ("async-validator leftover", "Cannot configure a schema"),
    ("fuse leftover", "function Fuse("),
    ("prism leftover", "Prism.languages"),
    ("nanoid leftover", "url-friendly unique ID generator"),
    ("ansi_up leftover", "ansi_up"),
    ("fast-copy leftover", "fast-copy"),
    ("memoizee leftover", "memoizee"),
    ("netmask leftover", "Netmask"),
    ("dagre leftover", "dagre.graphlib"),
    ("path-to-regexp leftover", "Must have token"),
    ("strip-ansi leftover", "strip-ansi"),
    ("diff createPatch leftover", "Index: "),
    ("xterm leftover", "xterm.js"),
    ("react-color leftover", "SwatchesPicker"),
    ("react-mentions leftover", "react-mentions"),
    ("for-editor leftover", "for-editor"),
    ("react-file-reader leftover", "react-file-reader"),
    ("react-input-autosize leftover", "AutosizeInput"),
    ("react-virtualized leftover", "react-virtualized"),
    ("react-resize-detector leftover", "react-resize-detector"),
    ("file-saver leftover", "saveAs"),
    ("js-yaml leftover", "safeLoad"),
    ("js-base64 leftover", "Base64.encode"),
    ("react-modal leftover", "react-modal"),
    ("react-copy leftover", "react-copy-to-clipboard"),
    ("react-fast-compare leftover", "react-fast-compare"),
]

hits = {name: [] for name, _ in NEEDLES}
banner_hits = defaultdict(list)
pkg_hits = defaultdict(list)

banner_re = re.compile(
    r"(?:@license|Copyright \(c\)|Licensed under|SPDX-License-Identifier)[^\n]{0,120}",
    re.I,
)
pkg_re = re.compile(
    r"(?:from ['\"]([a-zA-Z0-9@/_-]{3,40})['\"]|package['\"]?\s*[:=]\s*['\"]([a-zA-Z0-9@/_-]{3,40})['\"])"
)
name_comment_re = re.compile(
    r"/\*[^*]*\b((?:react|d3|lodash|recharts|moment|history|qs|classnames)[-a-z0-9]*)\b[^*]*\*/",
    re.I,
)

for name, text in texts.items():
    mid = re.search(r"\d+", name)
    mid = mid.group() if mid else ""
    for n, needle in NEEDLES:
        if needle in text:
            hits[n].append(name)
    if name not in live:
        continue
    if mid in aliased:
        continue
    for m in banner_re.finditer(text[:4000]):
        banner_hits[m.group(0)[:100]].append(name)
    for m in name_comment_re.finditer(text[:3000]):
        pkg_hits[m.group(1).lower()].append(name)

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
    if shown >= 40:
        break

print("\n=== package-name comments in live unnamed ===")
for pkg, files in sorted(pkg_hits.items()):
    uniq = sorted(set(files))
    unnamed = [f for f in uniq if (re.search(r"\d+", f).group() if re.search(r"\d+", f) else "") not in aliased]
    if unnamed:
        print(f"  {pkg}: {unnamed[:10]} ({len(unnamed)})")

print("\n=== unique export fingerprints in live unnamed vendor-looking modules ===")
export_re = re.compile(r"export (?:default |\{ )?([A-Za-z_][A-Za-z0-9_]*)")
display_re = re.compile(r"""(?:displayName|chartName)\s*[:=]\s*['"]([A-Za-z]+)['"]""")
for name, text in texts.items():
    mid = re.search(r"\d+", name)
    mid = mid.group() if mid else ""
    if name not in live or mid in aliased:
        continue
    if "node_modules" in text[:500] or "@license" in text[:1500] or "Copyright (c)" in text[:1500]:
        dn = display_re.findall(text)
        ex = export_re.findall(text[:800])
        if dn or "Copyright" in text[:1500] or "@license" in text[:1500]:
            print(f"  {name} display/chart={dn[:6]} exports={ex[:8]} importers={sorted(set(importers[name]))[:6]}")
