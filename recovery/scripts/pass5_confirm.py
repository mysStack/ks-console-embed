#!/usr/bin/env python3
"""Confirm leftover uniqueness for candidate 1:1 npm aliases. Read leftover AND npm."""
from __future__ import annotations

from collections import defaultdict
from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
UNPACKED = APP / "src/unpacked"
NM = APP / "core-js3" if False else APP / "node_modules"
LIVE = json.loads((APP / "LIVE_UNPACKED.json").read_text())
VENDOR = json.loads((APP / "PASS5_VENDOR.json").read_text())
COREJS = (APP / "corejs-aliases.js").read_text()
SHIMS = (APP / "corejs-shim-aliases.js").read_text()
WEBPACK = (APP / "webpack.config.js").read_text()
RECHARTS = (APP / "recharts-aliases.js").read_text()
already = set(re.findall(r"module-(\d+)\.js", COREJS + SHIMS + WEBPACK + RECHARTS))
remaining_other = set(VENDOR["remaining_other"])
live = set(LIVE["leftover_live"])


def read(p: Path) -> str:
    return p.read_text(encoding="utf-8", errors="replace")


unpacked = {p.name: read(p) for p in UNPACKED.glob("module-*.js")}
print("unpacked", len(unpacked), flush=True)

CANDIDATES = [
    # leftover, unique extra-path needle, npm, notes
    ("module-671.js", 'default("difference")', "core-js3/modules/esnext.set.difference.js"),
    ("module-676.js", 'default("isDisjointFrom")', "core-js3/modules/esnext.set.is-disjoint-from.js"),
    ("module-678.js", 'default("isSubsetOf")', "core-js3/modules/esnext.set.is-subset-of.js"),
    ("module-680.js", 'default("isSupersetOf")', "core-js3/modules/esnext.set.is-superset-of.js"),
    ("module-682.js", 'default("symmetricDifference")', "core-js3/modules/esnext.set.symmetric-difference.js"),
    ("module-684.js", 'default("union")', "core-js3/modules/esnext.set.union.js"),
    ("module-28.js", "4294967297", "core-js3/modules/es.array.push.js"),
    ("module-84.js", "Array(1).includes()", "core-js3/modules/es.array.includes.js"),
    ("module-191.js", "new Date(NaN).toJSON() !== null", "core-js3/modules/es.date.to-json.js"),
    ("module-196.js", "d.finally.call", "core-js3/modules/es.promise.finally.js"),
    ("module-249.js", 'target: "WebAssembly"', "core-js3/modules/es.error.cause.js"),
]

# extra leftover uniqueness needles for 249 (CompileError unique extra-path vs aggregate-error)
EXTRA = [
    ("module-249.js", "CompileError", "core-js3/modules/es.error.cause.js"),
    ("module-249.js", "c(\"RuntimeError\"", "core-js3/modules/es.error.cause.js"),
]


def leftover_unique(needle: str) -> list[str]:
    return [n for n, t in unpacked.items() if needle in t]


def npm_unique(needle: str) -> list[str]:
    hits = []
    for folder in ("modules", "internals"):
        d = APP / "node_modules" / "core-js3" / folder
        for p in d.glob("*.js"):
            if needle in read(p):
                hits.append(f"core-js3/{folder}/{p.name}")
    lodash = APP / "node_modules" / "lodash"
    for p in lodash.glob("*.js"):
        if p.name in {"lodash.js", "lodash.min.js", "core.js", "core.min.js", "array.js"}:
            continue
        if needle in read(p):
            hits.append(f"lodash/{p.name}")
    return hits


print("=== candidate leftover uniqueness ===")
ok = []
reject = []
for name, needle, npm in CANDIDATES:
    lives = leftover_unique(needle)
    npms = npm_unique(needle)
    rec = {
        "module": name,
        "needle": needle,
        "npm": npm,
        "leftover_hits": lives,
        "leftover_n": len(lives),
        "npm_hits": npms,
        "npm_n": len(npms),
        "live": name in live,
        "other": name in remaining_other,
        "already": name.replace("module-", "").replace(".js", "") in already,
    }
    unique_l = lives == [name] or set(lives) == {name}
    unique_n = npms == [npm] or set(npms) == {npm}
    # extra-path: leftover unique, npm contains expected file uniquely OR extra-path among npm
    if unique_l and unique_n:
        rec["status"] = "ok"
        ok.append(rec)
    elif unique_l and npm in npms and len(npms) > 1:
        rec["status"] = "extra_path_needed"
        reject.append(rec)
    else:
        rec["status"] = "reject"
        reject.append(rec)
    print(f"{rec['status']:18} {name} needle={needle!r} leftover={lives} npm={npms} live={rec['live']} other={rec['other']}")

print("\n=== extra 249 ===")
for name, needle, npm in EXTRA:
    lives = leftover_unique(needle)
    npms = npm_unique(needle)
    print(f"  {name} {needle!r} leftover={lives} npm={npms}")

# remaining_other unique wrappers: leftover uniquely contains target+method export
print("\n=== remaining_other unique module8 wrappers ===")
WRAP = re.compile(
    r"""(?:module8|\$)\(\s*\{[^}]{0,400}target:\s*["']([A-Za-z]+)["'][^}]{0,400}\}\s*,\s*\{\s*([A-Za-z][A-Za-z0-9]*)\b""",
    re.S,
)
wraps = []
for name in remaining_other:
    t = unpacked.get(name, "")
    m = WRAP.search(t)
    if m:
        wraps.append((name, m.group(1), m.group(2), len(t)))
print("wrapper count", len(wraps))
by_pair = defaultdict(list)
for rec in wraps:
    by_pair[(rec[1], rec[2])].append(rec[0])
for (target, method), mods in sorted(by_pair.items()):
    kebab = re.sub(r"([a-z])([A-Z])", r"\1-\2", method).lower()
    cands = []
    for stem in (
        f"es.{target.lower()}.{kebab}.js",
        f"esnext.{target.lower()}.{kebab}.js",
        f"web.{target.lower()}.{kebab}.js",
        f"es.{target.lower()}.{method.lower()}.js",
        f"esnext.{target.lower()}.{method.lower()}.js",
    ):
        p = APP / "node_modules" / "core-js3" / "modules" / stem
        if p.is_file():
            cands.append(stem)
    print(f"  {mods} {target}.{method} unique_pair={len(mods)==1} npm={cands} already={all(m[7:-3] in already for m in mods)}")

# consume: leftover imported as .default?
print("\n=== consume of ok modules ===")
SRC = APP / "src"
DEFAULT_REQ = re.compile(r"""require\(\s*['"]unpacked/(module-\d+\.js)['"]\s*\)\s*\.default""")
DEFAULT_IMP = re.compile(r"""import\s+\w+\s+from\s+['"]unpacked/(module-\d+\.js)['"]""")
SIDE = re.compile(r"""(?:^|\n)import\s+['"]unpacked/(module-\d+\.js)['"]""")
want = {c["module"] for c in ok}
cons = {n: {"def_req": [], "def_imp": [], "side": []} for n in want}
for folder in ("pages", "components", "stores", "actions", "utils", "configs", "core", "unpacked"):
    d = SRC / folder
    if not d.is_dir():
        continue
    for path in d.rglob("*.js"):
        if "named" in path.parts:
            continue
        t = read(path)
        rel = path.relative_to(SRC).as_posix()
        for m in DEFAULT_REQ.findall(t):
            if m in cons:
                cons[m]["def_req"].append(rel)
        for m in DEFAULT_IMP.findall(t):
            if m in cons:
                cons[m]["def_imp"].append(rel)
        for m in SIDE.findall(t):
            if m in cons:
                cons[m]["side"].append(rel)
for n, c in cons.items():
    print(n, {k: v[:6] for k, v in c.items()})

(APP / "PASS5_CONFIRM.json").write_text(json.dumps({"ok": ok, "reject": reject, "consume": cons}, indent=2) + "\n")
print("ok", len(ok), "reject", len(reject))
