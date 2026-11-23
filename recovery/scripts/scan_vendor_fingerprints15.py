#!/usr/bin/env python3
"""Slice 59 vendor leftovers in the LIVE unpacked import graph.

Alias to npm only if third-party is confirmed via copyright banner /
package-like API / unique exports. Do not alias business copies.
Do not invent LineChart without chartName. react-draggable is not in
this dist. jwt-decode is server-only.

Candidate: semver 717 imported only by dist-only getApiVersion 362 —
if 362 is in the live graph, aliasing 717 is a vendor alias, not a
named business path.
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


def dump_mod(name: str, limit=24):
    text = texts.get(name, "")
    imps = sorted(set(importers.get(name, [])))
    live_flag = name in live
    aliased_flag = mid_of(name) in aliased
    print(
        f"  {name} live={live_flag} aliased={aliased_flag} "
        f"bytes={len(text)} importers={imps[:limit]}"
    )
    head = text[:500].replace("\n", " | ")
    print(f"    head={head[:400]}")
    export_names = re.findall(
        r"""(?:exports\.([A-Za-z_][\w]*)\s*=|export (?:default |\{ )?([A-Za-z_][\w]*))""",
        text[:4000],
    )
    flat = [a or b for a, b in export_names]
    print(f"    exports_head={flat[:20]}")
    return text, imps


print("\n=== semver 717 / getApiVersion 362 ===")
dump_mod("module-717.js")
dump_mod("module-362.js")
t717 = texts.get("module-717.js", "")
t362 = texts.get("module-362.js", "")
print("717_has_validRange", "validRange" in t717)
print("717_has_satisfies", "satisfies" in t717)
print("717_has_SEMVER", "SEMVER_SPEC_VERSION" in t717 or "semver" in t717[:800].lower())
print("717_has_copyright", bool(re.search(r"Copyright|@license|Licensed", t717[:2500], re.I)))
print("362_imports_717", "module-717.js" in t362)
print("362_live", "module-362.js" in live)
print("717_live", "module-717.js" in live)
print("362_importers", sorted(set(importers.get("module-362.js", [])))[:20])
print("717_importers_all", sorted(set(importers.get("module-717.js", []))))
print("717_live_importers", [f for f in sorted(set(importers.get("module-717.js", []))) if f in live])

NEEDLES = [
    ("react-draggable", "react-draggable"),
    ("DraggableCore", "DraggableCore"),
    ("jwt-decode", "Invalid token specified"),
    ("jwt decode header", "jwt-decode"),
    ("LineChart chartName", 'chartName: "LineChart"'),
    ("LineChart chartName eq", 'chartName = "LineChart"'),
    ("semver validRange", "validRange"),
    ("semver SEMVER_SPEC", "SEMVER_SPEC_VERSION"),
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
    ("parse-entities", "parse-entities"),
    ("warning.js", "throwOnWarnings"),
    ("tiny-invariant", "Invariant failed"),
    ("clipboard.js", "clipboard.js"),
    ("copy-to-clipboard leftover", "copy-to-clipboard"),
    ("react-lifecycles-compat", "react-lifecycles-compat"),
    ("hoist-non-react-statics", "hoist-non-react-statics"),
    ("object-assign leftover", "object-assign"),
    ("core-js leftover", "core-js"),
    ("d3-array", "d3-array"),
    ("d3-path", "d3-path"),
    ("d3-interpolate", "d3-interpolate"),
    ("d3-scale", "d3-scale"),
    ("react-smooth", "react-smooth"),
    ("recharts-scale", "recharts-scale"),
    ("decimal.js-light", "decimal.js-light"),
    ("reduce-css-calc", "reduce-css-calc"),
    ("@babel/polyfill", "@babel/polyfill"),
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
    ("attr-accept leftover", "attr-accept"),
    ("attr-accept fn", "function accepts("),
    ("jszip leftover", "JSZip"),
    ("pako leftover", "pako"),
    ("cron leftover", "cronstrue"),
    ("cron-parser leftover", "cron-parser"),
    ("ip leftover", "ipaddr.js"),
    ("ipaddr leftover", "ipaddr"),
    ("yaml leftover", "js-yaml"),
    ("ajv leftover", "ajv"),
    ("async leftover", "async.waterfall"),
    ("bluebird leftover", "bluebird"),
    ("immutable leftover", "Immutable.Map"),
    ("rxjs leftover", "rxjs"),
    ("highlight leftover", "highlight.js"),
    ("codemirror leftover", "CodeMirror"),
    ("monaco leftover", "monaco-editor"),
    ("echarts leftover", "echarts"),
    ("highcharts leftover", "Highcharts"),
    ("crypto-js leftover", "crypto-js"),
    ("md5 leftover", "function md5("),
    ("sha256 leftover", "sha256"),
    ("base-64 leftover", "base-64"),
    ("query-string leftover", "query-string"),
    ("cookie leftover", "js-cookie"),
    ("localforage leftover", "localforage"),
    ("axios leftover", "axios"),
    ("superagent leftover", "superagent"),
    ("isomorphic-fetch leftover", "isomorphic-fetch"),
    ("node-fetch leftover", "node-fetch"),
]

hits = {name: [] for name, _ in NEEDLES}
banner_hits = defaultdict(list)
pkg_hits = defaultdict(list)

banner_re = re.compile(
    r"(?:@license|Copyright \(c\)|Licensed under|SPDX-License-Identifier)[^\n]{0,160}",
    re.I,
)
name_comment_re = re.compile(
    r"/\*[^*]*\b((?:react|d3|lodash|recharts|moment|history|qs|classnames|semver|uuid|filesize|cookie|tinycolor|jsencrypt)[-a-z0-9.]*)\b[^*]*\*/",
    re.I,
)

for name, text in texts.items():
    mid = mid_of(name)
    for n, needle in NEEDLES:
        if needle in text:
            hits[n].append(name)
    if name not in live:
        continue
    if mid in aliased:
        continue
    for m in banner_re.finditer(text[:4000]):
        banner_hits[m.group(0)[:120]].append(name)
    for m in name_comment_re.finditer(text[:3000]):
        pkg_hits[m.group(1).lower()].append(name)

print("\n=== needle hits (live unnamed first) ===")
for n, _needle in NEEDLES:
    files = hits[n]
    live_unnamed = []
    live_aliased = []
    dead = []
    for f in files:
        mid = mid_of(f)
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
        head = texts[f][:160].replace("\n", " | ")[:150]
        print(f"    {f} importers={imps} head={head}")

print("\n=== copyright/license banners in live unnamed ===")
shown = 0
for banner, files in sorted(banner_hits.items(), key=lambda kv: -len(set(kv[1]))):
    uniq = sorted(set(files))
    unnamed = [f for f in uniq if mid_of(f) not in aliased]
    if not unnamed:
        continue
    print(f"  {banner!r} -> {unnamed[:8]} ({len(unnamed)})")
    shown += 1
    if shown >= 50:
        break

print("\n=== package-name comments in live unnamed ===")
for pkg, files in sorted(pkg_hits.items()):
    uniq = sorted(set(files))
    unnamed = [f for f in uniq if mid_of(f) not in aliased]
    if unnamed:
        print(f"  {pkg}: {unnamed[:10]} ({len(unnamed)})")

print("\n=== unique export fingerprints in live unnamed vendor-looking modules ===")
export_re = re.compile(r"export (?:default |\{ )?([A-Za-z_][A-Za-z0-9_]*)")
display_re = re.compile(r"""(?:displayName|chartName)\s*[:=]\s*['"]([A-Za-z]+)['"]""")
shown = 0
for name, text in texts.items():
    mid = mid_of(name)
    if name not in live or mid in aliased:
        continue
    if "node_modules" in text[:500] or "@license" in text[:1500] or "Copyright (c)" in text[:1500]:
        dn = display_re.findall(text)
        ex = export_re.findall(text[:800])
        if dn or "Copyright" in text[:1500] or "@license" in text[:1500]:
            print(
                f"  {name} display/chart={dn[:6]} exports={ex[:8]} "
                f"importers={sorted(set(importers[name]))[:6]}"
            )
            shown += 1
            if shown >= 40:
                break

print("\n=== 717 export surface vs typical semver ===")
semver_api = [
    "valid", "clean", "inc", "diff", "major", "minor", "patch",
    "prerelease", "compare", "rcompare", "compareLoose", "compareBuild",
    "sort", "rsort", "gt", "lt", "eq", "neq", "gte", "lte",
    "cmp", "coerce", "satisfies", "maxSatisfying", "minSatisfying",
    "minVersion", "validRange", "outside", "gtr", "ltr", "intersects",
    "simplifyRange", "subset", "toComparators", "parse", "parseRange",
]
present = [n for n in semver_api if re.search(rf"\b{n}\b", t717)]
print("semver_api_present", present)
print("717_SEMVER_SPEC", re.findall(r"SEMVER_SPEC_VERSION[^\n]{0,40}", t717)[:4])
print("717_version_strings", re.findall(r"""['"](\d+\.\d+\.\d+)['"]""", t717)[:12])
