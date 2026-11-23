#!/usr/bin/env python3
"""Unique leftover vs already-installed history/qs/react-router/path-to-regexp."""
from __future__ import annotations

from pathlib import Path
import json
import re

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
UNPACKED = APP / "src/unpacked"
NM = APP / "node_modules"
LIVE = json.loads((APP / "LIVE_UNPACKED.json").read_text())
VENDOR = json.loads((APP / "PASS5_VENDOR.json").read_text()) if (APP / "PASS5_VENDOR.json").is_file() else {}
COREJS = (APP / "corejs-aliases.js").read_text()
SHIMS = (APP / "corejs-shim-aliases.js").read_text()
WEBPACK = (APP / "webpack.config.js").read_text()
RECHARTS = (APP / "recharts-aliases.js").read_text()
already = set(re.findall(r"module-(\d+)\.js", COREJS + SHIMS + WEBPACK + RECHARTS))
live = set(LIVE.get("leftover_live") or [])
remaining_other = set(VENDOR.get("remaining_other") or [])


def mid(name: str) -> str:
    m = re.search(r"module-(\d+)\.js", name)
    return m.group(1) if m else ""


unpacked = {
    p.name: p.read_text(encoding="utf-8", errors="replace")
    for p in UNPACKED.glob("module-*.js")
}

needles = [
    ("history.createBrowserHistory", "createBrowserHistory"),
    ("history.createHashHistory", "createHashHistory"),
    ("history.locationsAreEqual", "locationsAreEqual"),
    ("qs.stringify", "arrayFormat"),
    ("qs.parse", "allowPrototypes"),
    ("react-router.withRouter", "withRouter"),
    ("react-router.generatePath", "generatePath"),
    ("react-router.__RouterContext", "__RouterContext"),
    ("path-to-regexp.tokensToFunction", "tokensToFunction"),
    ("path-to-regexp.tokensToRegExp", "tokensToRegExp"),
    ("path-to-regexp.compile", "tokensToFunction"),
]

print("already-aliased webpack ids:")
for label, pat in [
    ("qs", "module-244.js"),
    ("history", "module-83.js"),
    ("react-router", "module-47.js"),
    ("react-router-dom", "module-433.js"),
    ("path-to-regexp", "module-1553.js"),
    ("mobx-react-router", "module-431.js"),
]:
    print(f"  {label} {pat} aliased={pat in WEBPACK} live={pat in live}")

print("\n=== leftover uniqueness vs packages ===")
pkg_files = {}
for rel in [
    "history/index.js",
    "history/createBrowserHistory.js",
    "history/createHashHistory.js",
    "qs/lib/index.js",
    "qs/lib/stringify.js",
    "qs/lib/parse.js",
    "react-router/es/index.js",
    "react-router/es/withRouter.js",
    "react-router/es/generatePath.js",
    "react-router/es/matchPath.js",
    "path-to-regexp/index.js",
]:
    p = NM / rel
    if p.is_file():
        pkg_files[rel] = p.read_text(encoding="utf-8", errors="replace")

for label, needle in needles:
    lh = [n for n, t in unpacked.items() if needle in t]
    nh = [n for n, t in pkg_files.items() if needle in t]
    live_u = [n for n in lh if n in live and mid(n) not in already]
    print(f"nL={len(lh):2} nN={len(nh):2} live_unaliased={live_u[:6]} {label!r} {needle!r}")
    if len(lh) <= 4:
        print("   leftover", lh)
    if len(nh) <= 4:
        print("   npm", nh)
    if len(lh) == 1 and len(nh) == 1:
        name = lh[0]
        print(
            f"   >> 1:1 {name} live={name in live} already={mid(name) in already} other={name in remaining_other}"
        )
