#!/usr/bin/env python3
"""Confirm extra leftover uniqueness + remaining_other unique tests vs core-js3."""
from __future__ import annotations

from collections import defaultdict
from pathlib import Path
import json
import re

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
UNPACKED = APP / "src/unpacked"
NM3 = APP / "node_modules/core-js3"
LIVE = json.loads((APP / "LIVE_UNPACKED.json").read_text())
VENDOR = json.loads((APP / "PASS5_VENDOR.json").read_text())
already = set(re.findall(r"module-(\d+)\.js", (APP / "corejs-aliases.js").read_text() + (APP / "corejs-shim-aliases.js").read_text() + (APP / "webpack.config.js").read_text() + (APP / "recharts-aliases.js").read_text()))
remaining_other = set(VENDOR["remaining_other"])
live = set(LIVE["leftover_live"])


def read(p: Path) -> str:
    return p.read_text(encoding="utf-8", errors="replace")


unpacked = {p.name: read(p) for p in UNPACKED.glob("module-*.js")}
npm = {}
for folder in ("modules", "internals"):
    for p in (NM3 / folder).glob("*.js"):
        npm[f"core-js3/{folder}/{p.name}"] = read(p)
print("unpacked", len(unpacked), "npm", len(npm), flush=True)


def lhits(needle: str):
    return [n for n, t in unpacked.items() if needle in t]


def nhits(needle: str):
    return [n for n, t in npm.items() if needle in t]


NEEDLES = [
    "string-to-symbol-registry",
    "symbol-to-string-registry",
    'u("URIError"',
    'c("LinkError"',
    'c("CompileError"',
    "d.finally.call",
    "d.finally !== p",
    "prototype.finally",
    "['finally'].call",
    "NATIVE_SYMBOL_REGISTRY",
    'target: "Symbol"',
    "module385",
    "4294967296",
    "writable: false }).push()",
    "Array.prototype.push.call({",
    'addToUnscopables("includes")',
    'module205("includes")',
    "toISOString: function() {",
    "toISOString: function () {",
    "NativePromisePrototype",
    "IS_PURE",
    "wrap-error-constructor-with-cause",
    "exportWebAssemblyErrorCauseWrapper",
    "exportGlobalErrorCauseWrapper",
    'default("union")',
    'default("difference")',
    'default("symmetricDifference")',
    'default("isSubsetOf")',
    'default("isSupersetOf")',
    'default("isDisjointFrom")',
    "function union(other)",
    "set-union",
    "toSetLike",
    "GetSetRecord",
    'target: "Set"',
]

print("=== needles leftover/npm uniqueness ===")
for n in NEEDLES:
    lh = lhits(n)
    nh = nhits(n)
    flag = ""
    if len(lh) == 1 and len(nh) == 1:
        flag = "1:1"
    elif len(lh) == 1 and len(nh) == 0:
        flag = "L-only"
    elif len(lh) == 1 and len(nh) > 1:
        flag = "L-unique multi-npm"
    print(f"  {flag:18} {n!r:45} L={lh[:6]} nL={len(lh)} N={nh[:6]} nN={len(nh)}")

# remaining_other unique tests: leftover uniquely contains a 24-60 char snippet that uniquely hits one npm module
print("\n=== remaining_other unique test windows vs npm ===")
TEST_RE = re.compile(r".{0,20}(?:4294967297|includes\(\)|toJSON\(\)|finally\.call|writable: false|cause: 7|unscopables|toISOString|padStart|padEnd|matchAll|fromEntries|hasOwn|groupBy|findLast|toReversed|toSorted|toSpliced|withResolvers|isWellFormed|queueMicrotask|structuredClone|fromAsync|Iterator\.from|copyWithin|species|sticky|dotAll|unicodeSets|hasIndices).{0,40}")
ok_extra = []
for name in sorted(remaining_other, key=lambda x: int(re.search(r"\d+", x).group())):
    t = unpacked[name]
    windows = []
    for m in TEST_RE.finditer(t):
        w = m.group(0)
        if leftover_unique := (lhits(w) == [name]):
            np = nhits(w)
            windows.append((w[:90], np))
            if len(np) == 1:
                ok_extra.append({"module": name, "window": w[:90], "npm": np[0]})
print("ok_extra", len(ok_extra))
for rec in ok_extra:
    print(" ", rec)

# unique leftover string-to-symbol-registry consume
print("\n=== consume candidates ===")
cands = [
    "module-28.js", "module-84.js", "module-191.js", "module-196.js",
    "module-249.js", "module-586.js",
    "module-671.js", "module-676.js", "module-678.js",
    "module-680.js", "module-682.js", "module-684.js",
]
DEFAULT_REQ = re.compile(r"""require\(\s*['"]unpacked/(module-\d+\.js)['"]\s*\)\s*\.default""")
DEFAULT_IMP = re.compile(r"""import\s+\w+\s+from\s+['"]unpacked/(module-\d+\.js)['"]""")
SIDE = re.compile(r"""(?:^|\n)import\s+['"]unpacked/(module-\d+\.js)['"]""")
cons = {n: {"def_req": [], "def_imp": [], "side": []} for n in cands}
src = APP / "src"
for folder in ("pages", "components", "stores", "actions", "utils", "configs", "core", "unpacked"):
    d = src / folder
    if not d.is_dir():
        continue
    for path in d.rglob("*.js"):
        if "named" in path.parts:
            continue
        text = read(path)
        rel = path.relative_to(src).as_posix()
        for m in DEFAULT_REQ.findall(text):
            if m in cons:
                cons[m]["def_req"].append(rel)
        for m in DEFAULT_IMP.findall(text):
            if m in cons:
                cons[m]["def_imp"].append(rel)
        for m in SIDE.findall(text):
            if m in cons:
                cons[m]["side"].append(rel)
for n, c in cons.items():
    print(n, "live", n in live, "other", n in remaining_other, "side", len(c["side"]), "def_req", c["def_req"][:4], "def_imp", c["def_imp"][:4], "side0", c["side"][:3])

# require.context + numeric require in src
print("\n=== require.context / numeric require in src ===")
ctx = []
num = []
num_re = re.compile(r"""require\(\s*(\d+)\s*\)""")
ctx_re = re.compile(r"""require\.context""")
for path in src.rglob("*.js"):
    if "named" in path.parts:
        continue
    t = read(path)
    rel = path.relative_to(src).as_posix()
    if ctx_re.search(t):
        ctx.append(rel)
    if num_re.search(t):
        num.append((rel, num_re.findall(t)[:8]))
print("ctx", ctx)
print("numeric_files", len(num), num[:15])

(APP / "PASS5_CONFIRM2.json").write_text(json.dumps({"ok_extra": ok_extra, "consume": cons, "ctx": ctx, "numeric_n": len(num)}, indent=2) + "\n")
print("done")
