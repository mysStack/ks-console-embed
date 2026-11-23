#!/usr/bin/env python3
"""Unique leftover vs qs/babel-runtime/core-js@2/mobx/regenerator. Reject 2-hit."""
from __future__ import annotations

from pathlib import Path
import json
import re

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
UNPACKED = APP / "src/unpacked"
NM = APP / "node_modules"
LIVE = json.loads((APP / "LIVE_UNPACKED.json").read_text(encoding="utf-8"))
COREJS = (APP / "corejs-aliases.js").read_text()
SHIMS = (APP / "corejs-shim-aliases.js").read_text()
WEBPACK = (APP / "webpack.config.js").read_text()
RECHARTS = (APP / "recharts-aliases.js").read_text()
already = set(re.findall(r"module-(\d+)\.js", COREJS + SHIMS + WEBPACK + RECHARTS))
live = set(LIVE.get("leftover_live") or [])
OUT = APP / "PASS9_VENDOR.json"


def mid(name: str) -> str:
    m = re.search(r"module-(\d+)\.js", name)
    return m.group(1) if m else ""


unpacked = {
    p.name: p.read_text(encoding="utf-8", errors="replace")
    for p in UNPACKED.glob("module-*.js")
}

npm: dict[str, str] = {}


def add_npm(rel: Path, key: str) -> None:
    if rel.is_file() and rel.suffix == ".js":
        try:
            npm[key] = rel.read_text(encoding="utf-8", errors="replace")
        except OSError:
            return


for p in (NM / "qs" / "lib").glob("*.js"):
    add_npm(p, f"qs/lib/{p.name}")
for p in (NM / "babel-runtime").rglob("*.js"):
    add_npm(p, "babel-runtime/" + p.relative_to(NM / "babel-runtime").as_posix())
# core-js@2 internals (top-level, do not swap package). Skip minified bundles.
cj2 = NM / "core-js"
if cj2.is_dir():
    for folder in ("modules", "library/modules", "es6", "es7", "web", "library/fn"):
        d = cj2 / folder
        if not d.is_dir():
            continue
        for p in d.rglob("*.js"):
            if p.name.endswith(".min.js"):
                continue
            add_npm(p, "core-js/" + p.relative_to(cj2).as_posix())
mobx = NM / "mobx" / "lib"
if mobx.is_dir():
    for p in mobx.glob("*.js"):
        if "min" in p.name:
            continue
        add_npm(p, f"mobx/lib/{p.name}")
for p in (NM / "regenerator-runtime").glob("*.js"):
    add_npm(p, f"regenerator-runtime/{p.name}")

print("npm_files", len(npm), "unpacked", len(unpacked))

needles = [
    "Encoder has to be a function.",
    "The charset option must be either utf-8, iso-8859-1, or undefined",
    "Unknown format option provided.",
    "utf8=%26%2310003%3B&",
    "RFC1738",
    "arrayToObject",
    "maybeMap",
    "hexTable",
    "charsetSentinel",
    "regeneratorRuntime",
    "wrapGenerator",
    "GeneratorFunction",
    "markInner",
    "tryCatch",
    "this hasn't been initialised",
    "Cannot call a class as a function",
    "Super expression must either be null or a function",
    "iterator/symbol",
    "_iterableToArrayLimit",
    "defineEnumerableProperties",
    "mobx-react",
    "Reaction.prototype",
    "$mobx",
    "interceptChange",
    "isObservableArray",
    "ComputedValue",
    "Atom.prototype",
    "__core-js_shared__",
    "core-js/library",
    "babel-runtime/core-js",
]

unique = []
print("\n=== leftover vs npm uniqueness ===")
for needle in needles:
    lh = [n for n, t in unpacked.items() if needle in t]
    nh = [n for n, t in npm.items() if needle in t]
    print(f"nL={len(lh):2} nN={len(nh):2} {needle!r}")
    if len(lh) <= 4:
        print("  leftover", lh)
    if len(nh) <= 4:
        print("  npm", nh)
    if len(lh) == 1 and len(nh) == 1:
        name = lh[0]
        rec = {
            "needle": needle,
            "module": name,
            "npm": nh[0],
            "live": name in live,
            "already": mid(name) in already,
        }
        unique.append(rec)
        print(f"  >> 1:1 {name} -> {nh[0]} live={name in live} already={mid(name) in already}")

print("\n=== leftover 757/310/430 consumers ===")
for needle in ("unpacked/module-757.js", "unpacked/module-310.js", "unpacked/module-430.js"):
    hits = []
    for name, t in unpacked.items():
        if needle in t:
            hits.append(name)
    print(needle, "importers", hits)

print("unique_1_1", len(unique))
OUT.write_text(json.dumps({"unique": unique}, indent=2) + "\n")
print("wrote", OUT)
