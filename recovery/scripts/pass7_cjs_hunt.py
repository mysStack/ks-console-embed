#!/usr/bin/env python3
"""Find leftover/promoted readers of require(module-N).default where N is already aliased.

504/506 pattern: aliased CJS without .default, leftover still does .default.match/.concat/.replace.
"""
from __future__ import annotations

from collections import defaultdict
from pathlib import Path
import json
import re

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
SRC = APP / "src"
UNPACKED = SRC / "unpacked"
NM = APP / "node_modules"
LIVE = json.loads((APP / "LIVE_UNPACKED.json").read_text())
COREJS = (APP / "corejs-aliases.js").read_text()
SHIMS = (APP / "corejs-shim-aliases.js").read_text()
WEBPACK = (APP / "webpack.config.js").read_text()
RECHARTS = (APP / "recharts-aliases.js").read_text()

already_ids = set(re.findall(r"module-(\d+)\.js", COREJS + SHIMS + WEBPACK + RECHARTS))
shim_ids = set(re.findall(r"module-(\d+)\.js", SHIMS))
direct_corejs = dict(re.findall(
    r'src/unpacked/(module-\d+\.js)"\)\]: require\.resolve\("([^"]+)"\)',
    COREJS,
))
live = set(LIVE.get("leftover_live") or [])

REQ_DEF = re.compile(
    r"""require\(\s*['"](?:unpacked/|\./)?(module-\d+\.js)['"]\s*\)\s*\.default"""
)
IMP_DEF = re.compile(
    r"""import\s+(\w+)\s+from\s+['"](?:unpacked/|\./)?(module-\d+\.js)['"]"""
)
PROP = re.compile(r"""\.default\.(match|concat|replace|slice|split|test|call|apply|bind|charAt|trim|push|map|filter)\b""")
MOD_DEF_PROP = re.compile(
    r"""\b(\w+)\.default\.(match|concat|replace|slice|split|test|call|apply)\b"""
)


def read(p: Path) -> str:
    return p.read_text(encoding="utf-8", errors="replace")


def mid(name: str) -> str:
    m = re.search(r"module-(\d+)\.js", name)
    return m.group(1) if m else ""


# parse webpack aliases for unpacked module-N
webpack_alias = {}
for m in re.finditer(
    r"""\["unpacked/(module-\d+\.js)"\]:\s*(require\.resolve\("([^"]+)"\)|path\.resolve\([^)]+\))""",
    WEBPACK,
):
    webpack_alias[m.group(1)] = m.group(0)[:160]

hits = []
readers = defaultdict(list)
for folder in ("unpacked", "pages", "components", "stores", "actions", "utils", "configs", "core", "shims"):
    d = SRC / folder
    if not d.is_dir():
        continue
    for path in d.rglob("*.js"):
        if "named" in path.parts:
            continue
        text = read(path)
        rel = path.relative_to(SRC).as_posix()
        for mod in REQ_DEF.findall(text):
            n = mid(mod)
            if n not in already_ids:
                continue
            props = []
            for mm in re.finditer(
                rf"""require\(\s*['"](?:unpacked/|\./)?{re.escape(mod)}['"]\s*\)\s*\.default(?:\.(\w+))?""",
                text,
            ):
                if mm.group(1):
                    props.append(mm.group(1))
            readers[mod].append({
                "file": rel,
                "kind": "require.default",
                "props": props[:8],
                "live_reader": path.name in live or rel.startswith("pages/") or rel.startswith("components/") or rel.startswith("stores/"),
            })
        # ModuleN.default.prop after import ModuleN from aliased
        for var, mod in IMP_DEF.findall(text):
            n = mid(mod)
            if n not in already_ids:
                continue
            props = MOD_DEF_PROP.findall(text)
            used = [p for v, p in props if v == var]
            if used:
                readers[mod].append({
                    "file": rel,
                    "kind": "import.default.prop",
                    "props": used[:8],
                    "var": var,
                })

print("=== require().default / import.default.prop on ALREADY aliased modules ===")
report = []
for mod, recs in sorted(readers.items(), key=lambda kv: int(mid(kv[0]) or 0)):
    n = mid(mod)
    is_shim = n in shim_ids
    target = direct_corejs.get(mod, "")
    live_mod = mod in live
    print(f"{mod} shimmed={is_shim} live={live_mod} target={target} readers={len(recs)}")
    for r in recs[:6]:
        print("   ", r["kind"], r.get("props"), r["file"])
    report.append({
        "module": mod,
        "already_shim": is_shim,
        "live": live_mod,
        "target": target,
        "readers": recs[:12],
    })

# leftover unique regex needles vs core-js3 internals (firefox/webkit class)
print("\n=== unique leftover regex / UA / engine needles vs core-js3 internals ===")
NEEDLES = [
    r"firefox\/(\d+)",
    r"AppleWebKit\/(\d+)",
    r"MSIE|Trident",
    r"Chrome\/(\d+)",
    r"Edge\/(\d+)",
    r"opera\/(\d+)",
    r"Safari\/(\d+)",
    r"node\.js",
    r"process\.versions",
    r"Deno\.version",
    r"engine-user-agent",
    r"userAgent",
    r"webkit",
    r"__core-js_shared__",
    r"Iterator is already executing",
    r"Incorrect invocation",
    r"Invalid size",
    r"Accessors not supported",
    r"Reduce of empty array with no initial value",
    r"called on incompatible receiver",
    r"is not iterable",
    r"Right-hand side of 'instanceof' is not an object",
    r"NewNumber",
    r"NativeURL",
    r"queueMicrotask",
    r"structuredClone",
    r"get-set-record",
    r"toSetLike",
    r"GetSetRecord",
    r"string-to-symbol-registry",
    r"symbol-to-string-registry",
]
unpacked = {p.name: read(p) for p in UNPACKED.glob("module-*.js")}
npm_int = {}
for p in (NM / "core-js3" / "internals").glob("*.js"):
    npm_int["core-js3/internals/" + p.name] = read(p)
for p in (NM / "core-js3" / "modules").glob("*.js"):
    npm_int["core-js3/modules/" + p.name] = read(p)

unique_needles = []
for needle in NEEDLES:
    lh = [n for n, t in unpacked.items() if needle in t]
    nh = [n for n, t in npm_int.items() if needle in t]
    live_unaliased = [n for n in lh if mid(n) not in already_ids and n in live]
    if len(lh) == 1 and len(nh) == 1:
        unique_needles.append({"needle": needle, "leftover": lh[0], "npm": nh[0], "live": lh[0] in live, "already": mid(lh[0]) in already_ids})
        print(f"  1:1 {needle!r} {lh[0]} -> {nh[0]} live={lh[0] in live} already={mid(lh[0]) in already_ids}")
    elif live_unaliased and len(nh) == 1:
        print(f"  live-unaliased multi-leftover? {needle!r} live={live_unaliased[:6]} npm={nh}")

OUT = APP / "PASS7_CJS.json"
OUT.write_text(json.dumps({"readers": report, "unique_needles": unique_needles}, indent=2) + "\n")
print("wrote", OUT, "reader_modules", len(report), "unique_needles", len(unique_needles))
