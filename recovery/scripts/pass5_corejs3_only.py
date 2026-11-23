#!/usr/bin/env python3
"""Unique leftover <-> core-js3/lodash internals. Exclude core-js@2 barrels.

core-js@2 stays top-level for recharts. Leftovers are the core-js3 graph (module-8).
"""
from __future__ import annotations

from collections import defaultdict
from pathlib import Path
import json
import re

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
UNPACKED = APP / "src/unpacked"
NM = APP / "node_modules"
LIVE = json.loads((APP / "LIVE_UNPACKED.json").read_text())
VENDOR = json.loads((APP / "PASS5_VENDOR.json").read_text())
already = set(re.findall(
    r"module-(\d+)\.js",
    (APP / "corejs-aliases.js").read_text()
    + (APP / "corejs-shim-aliases.js").read_text()
    + (APP / "webpack.config.js").read_text()
    + (APP / "recharts-aliases.js").read_text(),
))
LEAVE = {"2434", "254"}
remaining_other = set(VENDOR["remaining_other"])
live = set(LIVE["leftover_live"])
STUB_RE = re.compile(r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/')
STR_RE = re.compile(r"""['"]([^'"]{16,})['"]""")
ERR_RE = re.compile(
    r"""throw new (?:TypeError|ReferenceError|RangeError|Error|SyntaxError)\((['"])(.*?)\1\)"""
)
GENERIC = {
    "use strict", "object", "function", "undefined", "prototype",
    "toString", "length", "constructor", "exports", "default",
    "[object Object]", "[object Array]", "[object Function]",
    "[object Number]", "[object String]", "[object Boolean]",
    "[object Arguments]", "[object Date]", "[object Error]",
    "[object Map]", "[object Set]", "[object WeakMap]",
    "[object RegExp]", "[object DataView]", "[object ArrayBuffer]",
    "[object Promise]", "[object WeakSet]",
}
REJECT_NAMES = {
    "lodash.min.js", "lodash.js", "core.js", "core.min.js", "array.js",
    "collection.js", "object.js", "lang.js", "util.js", "seq.js",
    "function.js", "date.js", "number.js", "string.js", "math.js", "index.js",
}


def read(p: Path) -> str:
    return p.read_text(encoding="utf-8", errors="replace")


def mid(name: str) -> str:
    m = re.search(r"module-(\d+)\.js", name)
    return m.group(1) if m else ""


unpacked = {}
for p in UNPACKED.glob("module-*.js"):
    t = read(p)
    if STUB_RE.search(t[:400]):
        continue
    unpacked[p.name] = t

leftover_str = defaultdict(set)
leftover_err = defaultdict(set)
for name, t in unpacked.items():
    for s in STR_RE.findall(t):
        leftover_str[s].add(name)
    for _q, e in ERR_RE.findall(t):
        leftover_err[e].add(name)

npm_str = defaultdict(set)
npm_err = defaultdict(set)
npm_files = []
for prefix, base, globs in (
    ("lodash", NM / "lodash", ("*.js",)),
    ("core-js3", NM / "core-js3", ("internals/*.js", "modules/*.js")),
    ("classnames", NM / "classnames", ("index.js",)),
    ("js-yaml", NM / "js-yaml", ("lib/**/*.js", "index.js")),
    ("object-assign", NM / "object-assign", ("index.js",)),
    ("warning", NM / "warning", ("warning.js",)),
    ("invariant", NM / "invariant", ("browser.js",)),
    ("hoist-non-react-statics", NM / "hoist-non-react-statics", ("src/*.js", "dist/*.js")),
    ("prop-types", NM / "prop-types", ("*.js", "lib/*.js")),
    ("scheduler", NM / "scheduler", ("cjs/*.js",)),
    ("querystring", NM / "querystring", ("*.js",)),
    ("regenerator-runtime", NM / "regenerator-runtime", ("runtime.js",)),
    ("moment-mini", NM / "moment-mini", ("moment.min.js",)),
    ("tiny-invariant", NM / "tiny-invariant", ("dist/**/*.js",)),
    ("react-lifecycles-compat", NM / "react-lifecycles-compat", ("*.js",)),
    ("value-equal", NM / "value-equal", ("esm/*.js",)),
    ("resolve-pathname", NM / "resolve-pathname", ("esm/*.js",)),
    ("qs", NM / "qs", ("lib/*.js",)),
    ("history", NM / "history", ("esm/**/*.js",)),
    ("react-router", NM / "react-router", ("esm/**/*.js", "modules/**/*.js")),
    ("semver", NM / "semver", ("functions/*.js", "internal/*.js")),
):
    if not base.is_dir():
        continue
    for g in globs:
        for p in base.glob(g):
            if not p.is_file() or "node_modules" in p.relative_to(base).parts:
                continue
            if prefix == "lodash" and p.name in REJECT_NAMES:
                continue
            rel = prefix + "/" + p.relative_to(base).as_posix()
            npm_files.append(rel)
            t = read(p)
            for s in STR_RE.findall(t):
                npm_str[s].add(rel)
            for _q, e in ERR_RE.findall(t):
                npm_err[e].add(rel)
print("npm_files", len(npm_files), flush=True)

scan = []
for name in live:
    n = mid(name)
    if n in already or n in LEAVE:
        continue
    scan.append(name)

ok = []
rejected = []
for name in scan:
    t = unpacked.get(name, "")
    hits = []
    for _q, err in ERR_RE.findall(t):
        lives = leftover_err.get(err) or set()
        npms = npm_err.get(err) or set()
        if lives == {name} and len(npms) == 1:
            hits.append(("err:" + err[:80], next(iter(npms))))
    for s in STR_RE.findall(t):
        if s.lower() in GENERIC or s.startswith("module-") or s.startswith("unpacked/"):
            continue
        lives = leftover_str.get(s) or set()
        npms = npm_str.get(s) or set()
        if lives == {name} and len(npms) == 1:
            hits.append(("str:" + s[:80], next(iter(npms))))
    if not hits:
        continue
    npms = list(dict.fromkeys(h[1] for h in hits))
    if len(npms) != 1:
        rejected.append({"module": name, "reason": "multi_npm", "npms": npms, "vias": [h[0] for h in hits][:6]})
        continue
    npm = npms[0]
    if npm.split("/")[-1] in REJECT_NAMES:
        rejected.append({"module": name, "reason": "barrel", "npm": npm})
        continue
    leftover_bytes = len(t)
    npm_path = NM.joinpath(*npm.split("/"))
    npm_bytes = npm_path.stat().st_size if npm_path.is_file() else 0
    ratio = leftover_bytes / npm_bytes if npm_bytes else 0
    if npm_bytes and (ratio < 0.12 or ratio > 8):
        rejected.append({"module": name, "reason": "size", "npm": npm, "ratio": round(ratio, 3), "lb": leftover_bytes, "nb": npm_bytes, "via": hits[0][0]})
        continue
    ok.append({
        "module": name,
        "npm": npm,
        "vias": [h[0] for h in hits][:6],
        "other": name in remaining_other,
        "lb": leftover_bytes,
        "nb": npm_bytes,
        "ratio": round(ratio, 3),
    })

# collapse leftover unique -> same npm (2-hit leftover copies)
by_npm = defaultdict(list)
for rec in ok:
    by_npm[rec["npm"]].append(rec["module"])
unique = []
two = []
for npm, mods in sorted(by_npm.items()):
    uniq = sorted(set(mods))
    if len(uniq) != 1:
        two.append({"npm": npm, "modules": uniq})
        continue
    unique.append(next(r for r in ok if r["module"] == uniq[0] and r["npm"] == npm))

print("unique", len(unique), "two_hit", len(two), "rejected", len(rejected))
print("=== unique remaining_other ===")
for r in unique:
    if r["other"]:
        print(f"  {r['module']} -> {r['npm']} ratio={r['ratio']} via={r['vias'][:2]}")
print("=== unique live not-other ===")
for r in unique:
    if not r["other"]:
        print(f"  {r['module']} -> {r['npm']} ratio={r['ratio']} via={r['vias'][:2]}")
print("=== two-hit sample ===")
for r in two[:15]:
    print(" ", r)
print("=== rejected size/multi sample ===")
for r in rejected[:20]:
    print(" ", r)

(APP / "PASS5_COREJS3_ONLY.json").write_text(json.dumps({
    "unique": unique,
    "two": two,
    "rejected": rejected[:80],
}, indent=2) + "\n")
print("wrote unique", len(unique))
