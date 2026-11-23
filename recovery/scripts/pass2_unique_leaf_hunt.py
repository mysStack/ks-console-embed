#!/usr/bin/env python3
"""Independent extra hunt: unique leftover vendor leaves + extra 2-hit orig paths.

Do not invent orig paths. Do not npm-install. Do not alias internals consumed via .default.
"""
from __future__ import annotations

from collections import defaultdict
from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
SRC = APP / "src"
UNPACKED = SRC / "unpacked"
ORIG = ROOT / "src"
NM = APP / "node_modules"
OUT = APP / "PASS2_LEAF_HUNT.json"

STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)
IMP_RE = re.compile(r"""(?:\bfrom|\bimport\s*\(|\brequire\s*\()\s*['"]([^'"]+)['"]""")
DEFAULT_REQ = re.compile(
    r"""require\(\s*['"]unpacked/(module-\d+\.js)['"]\s*\)\s*\.default"""
)
SIDE_IMPORT = re.compile(r"""(?:^|\n)import\s+['"]unpacked/(module-\d+\.js)['"]""")
T_PAT = re.compile(r"""(?<![A-Za-z0-9_])t\(\s*['"]([^'"]+)['"]""")
COPYRIGHT = re.compile(r"""(?:Copyright|@license|MIT License|BSD)[^\n]{8,80}""")
VERSION = re.compile(r"""(?:version|VERSION)\s*[:=]\s*['"](\d+\.\d+\.\d+)['"]""")
ERR_LIT = re.compile(
    r"""(?:throw|TypeError|Error|RangeError)\s*(?:new\s+\w+\s*)?\(\s*['"]([^'"]{12,})['"]"""
)
FACTORY = re.compile(r"""/\*\*\*/ ["']\./src/unpacked/(module-\d+\.js)["']""")
KNOWN_PY = ROOT / "recovery/scripts/add_known_named.py"
COREJS = (APP / "corejs-aliases.js").read_text(encoding="utf-8")
WEBPACK = (APP / "webpack.config.js").read_text(encoding="utf-8")
RECHARTS = (APP / "recharts-aliases.js").read_text(encoding="utf-8")

aliased = set(re.findall(r"module-(\d+)\.js", COREJS + "\n" + WEBPACK + "\n" + RECHARTS))

SKIP_MODS = {
    "3225", "3567", "3511", "3513", "3251", "833", "950", "882", "807",
    "1635", "5774", "1636", "1639", "1633", "1634", "1337", "1272", "1389",
    "1183", "1764", "1111", "1053", "1112",
    "4656", "4657", "1134", "1072", "3866", "3892", "186", "1979",
    "3680", "3689", "3693", "3698", "3701", "2943", "1489", "2102",
    "1798", "1800", "1415", "793", "2399", "2400", "2401",
    "1102", "1306", "1550", "3839", "3326", "747",
}


def read(p: Path) -> str:
    return p.read_text(encoding="utf-8", errors="replace")


def mid(name: str) -> str:
    m = re.search(r"module-(\d+)\.js", name)
    return m.group(1) if m else ""


def is_stub(text: str) -> bool:
    return bool(STUB_RE.search(text[:400]))


unpacked = {}
for p in UNPACKED.glob("module-*.js"):
    t = read(p)
    if is_stub(t):
        continue
    unpacked[p.name] = t

live = json.loads((APP / "LIVE_UNPACKED.json").read_text(encoding="utf-8"))
live_set = set(live.get("leftover_live") or [])

# importer graph among leftover + promoted
importers = defaultdict(list)
default_consumers = defaultdict(list)
side_only = defaultdict(list)
for folder in ("pages", "components", "stores", "actions", "utils", "configs", "core", "unpacked"):
    d = SRC / folder
    if not d.is_dir():
        continue
    for path in d.rglob("*.js"):
        text = read(path)
        rel = path.relative_to(SRC).as_posix()
        for spec in IMP_RE.findall(text):
            m = re.search(r"(?:^|/)(module-\d+\.js)$", spec.split("?")[0])
            if m and (spec.startswith("unpacked/") or spec.startswith("./") or spec.startswith("../")):
                importers[m.group(1)].append(rel)
        for m in DEFAULT_REQ.findall(text):
            default_consumers[m].append(rel)
        for m in SIDE_IMPORT.findall(text):
            side_only[m].append(rel)

# unique leftover vs already-installed npm by error literals (GLOBAL)
err_live = defaultdict(set)
for name, text in unpacked.items():
    if name not in live_set:
        continue
    if mid(name) in aliased or mid(name) in SKIP_MODS:
        continue
    for e in ERR_LIT.findall(text):
        err_live[e].add(name)

pkg_json = json.loads((APP / "package.json").read_text(encoding="utf-8"))
deps = {**pkg_json.get("dependencies", {}), **pkg_json.get("devDependencies", {})}
extra = [
    "react-is", "tiny-invariant", "hoist-non-react-statics", "warning",
    "tiny-warning", "value-equal", "resolve-pathname", "mini-create-react-context",
    "object-assign", "scheduler", "gud", "prop-types", "history", "mobx",
    "react-lifecycles-compat", "core-js3",
]
npm_err = defaultdict(list)
for pkg in list(deps) + extra:
    if pkg == "core-js":
        continue
    pkg_dir = NM / pkg
    if not pkg_dir.exists():
        continue
    files = []
    for p in pkg_dir.rglob("*.js"):
        rel = p.relative_to(pkg_dir).as_posix()
        if "node_modules" in rel.split("/"):
            continue
        files.append(p)
        if len(files) > 400:
            break
    for p in files:
        try:
            pt = read(p)
        except OSError:
            continue
        rel = p.relative_to(NM).as_posix()
        for e in ERR_LIT.findall(pt):
            npm_err[e].append(rel)

safe_alias = []
unsafe_default = []
missing_npm = []
ambiguous = []
for e, lives in err_live.items():
    npm_files = list(dict.fromkeys(npm_err.get(e) or []))
    lives = sorted(lives)
    if len(lives) != 1:
        continue
    name = lives[0]
    if len(npm_files) != 1:
        if not npm_files:
            missing_npm.append({"module": name, "via": e[:120]})
        else:
            ambiguous.append({"module": name, "via": e[:80], "npm": npm_files[:6]})
        continue
    rec = {
        "module": name,
        "npm": npm_files[0],
        "via": e[:120],
        "importers": importers.get(name, [])[:8],
        "default_consumers": default_consumers.get(name, [])[:8],
        "side_imports": side_only.get(name, [])[:8],
    }
    if default_consumers.get(name):
        unsafe_default.append(rec)
    else:
        safe_alias.append(rec)

# core-js3 internals unique by filename fingerprint vs leftover, but .default?
corejs3 = NM / "core-js3"
corejs_unique = []
corejs_unsafe = []
if corejs3.exists():
    # leftover unique strings vs core-js3 internals/modules
    cj_index = defaultdict(list)
    for p in list(corejs3.rglob("*.js"))[:800]:
        rel = p.relative_to(corejs3).as_posix()
        if "node_modules" in rel.split("/"):
            continue
        try:
            pt = read(p)
        except OSError:
            continue
        for e in ERR_LIT.findall(pt):
            cj_index[e].append(rel)
        # also unique function names in internals
        if "dontCallGetSet" in pt:
            cj_index["dontCallGetSet"].append(rel)
        if "enumBugKeys" in pt or "enum-bug-keys" in rel:
            cj_index["enum-bug-keys"].append(rel)

    needles = {
        "dontCallGetSet": "dontCallGetSet",
        "enum-bug-keys": "concat(\"length\", \"prototype\")",
        "Incorrect invocation": "Incorrect invocation",
        "Symbol.description": "es.symbol.description",
    }
    for name, text in unpacked.items():
        if name not in live_set or mid(name) in aliased:
            continue
        rec = None
        if "e.dontCallGetSet" in text or "dontCallGetSet" in text and "export.js" in text[:200]:
            rec = {"module": name, "npm": "core-js3/internals/export.js", "via": "dontCallGetSet"}
        elif '.concat("length", "prototype")' in text or ".concat('length', 'prototype')" in text:
            rec = {"module": name, "npm": "core-js3/internals/enum-bug-keys.js", "via": "enum-bug-keys concat"}
        elif "es.symbol.description" in text or ("description" in text and "wellKnownSymbol" in text and "toStringTag" in text):
            pass
        if rec:
            rec["default_consumers"] = default_consumers.get(name, [])[:8]
            rec["importers"] = importers.get(name, [])[:8]
            if rec["default_consumers"]:
                corejs_unsafe.append(rec)
            else:
                # still unsafe if leftover graph uses require(N).default even if this file is the target
                if default_consumers.get(name):
                    corejs_unsafe.append(rec)
                else:
                    corejs_unique.append(rec)

# 2-hit extra orig path: leftover unique t() that maps to exactly 2 orig files, one known one extra unnamed
known_py = read(KNOWN_PY)
known_keys = set(re.findall(r"""['"]((?:pages|components|stores|actions|utils|configs|core)/[^'\"]+)['"]""", known_py))

orig_t = defaultdict(list)
orig_files = []
for p in ORIG.rglob("*"):
    if p.suffix not in {".js", ".jsx"}:
        continue
    rel = p.relative_to(ORIG).as_posix()
    key = rel[:-4] + ".js" if rel.endswith(".jsx") else rel
    orig_files.append(key)
    try:
        ot = read(p)
    except OSError:
        continue
    for k in T_PAT.findall(ot):
        orig_t[k].append(key)

leftover_t = defaultdict(list)
for name, text in unpacked.items():
    if name not in live_set:
        continue
    for k in T_PAT.findall(text):
        leftover_t[k].append(name)

two_hit_extra = []
for k, origs in orig_t.items():
    origs = list(dict.fromkeys(origs))
    lives = list(dict.fromkeys(leftover_t.get(k) or []))
    if len(lives) != 1:
        continue
    unknown = [o for o in origs if o not in known_keys]
    known = [o for o in origs if o in known_keys]
    if len(origs) == 2 and len(unknown) == 1 and len(known) == 1 and len(lives) == 1:
        two_hit_extra.append({
            "t": k,
            "module": lives[0],
            "known_orig": known[0],
            "extra_orig": unknown[0],
            "importers": importers.get(lives[0], [])[:6],
        })

# unique extra-path means leftover is a SECOND copy; do not alias unless uniquely extra-pathed
# report only if leftover is uniquely extra AND parent-aligned? caller decides. We do not pin copies of known orig.

report = {
    "live_leftover": len(live_set),
    "safe_vendor_alias_candidates": safe_alias[:40],
    "safe_vendor_count": len(safe_alias),
    "unsafe_default_vendor": unsafe_default[:20],
    "unsafe_default_count": len(unsafe_default),
    "missing_npm_unique_err": missing_npm[:20],
    "ambiguous": ambiguous[:20],
    "corejs_unique_no_default": corejs_unique,
    "corejs_unsafe_default": corejs_unsafe,
    "two_hit_extra_orig": two_hit_extra[:40],
    "two_hit_extra_count": len(two_hit_extra),
}
OUT.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
print(json.dumps({
    "live_leftover": len(live_set),
    "safe_vendor": len(safe_alias),
    "unsafe_default": len(unsafe_default),
    "missing_npm": len(missing_npm),
    "corejs_unique": len(corejs_unique),
    "corejs_unsafe": len(corejs_unsafe),
    "two_hit_extra": len(two_hit_extra),
    "safe_sample": [{"m": r["module"], "npm": r["npm"]} for r in safe_alias[:8]],
    "two_hit_sample": two_hit_extra[:5],
}, indent=2))
print("wrote", OUT)
