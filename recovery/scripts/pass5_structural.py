#!/usr/bin/env python3
"""Structural extra-path fingerprint of remaining LIVE leftovers vs npm.

Unique extra-path only. Read leftover AND npm. No orig-path invention.
"""
from __future__ import annotations

from collections import defaultdict
from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
UNPACKED = APP / "src/unpacked"
NM = APP / "node_modules"
LIVE = json.loads((APP / "LIVE_UNPACKED.json").read_text(encoding="utf-8"))
VENDOR = json.loads((APP / "PASS5_VENDOR.json").read_text(encoding="utf-8"))
COREJS = (APP / "corejs-aliases.js").read_text(encoding="utf-8")
SHIMS = (APP / "corejs-shim-aliases.js").read_text(encoding="utf-8")
WEBPACK = (APP / "webpack.config.js").read_text(encoding="utf-8")
RECHARTS = (APP / "recharts-aliases.js").read_text(encoding="utf-8")

already = set(re.findall(r"module-(\d+)\.js", COREJS + "\n" + SHIMS + "\n" + WEBPACK + "\n" + RECHARTS))
LEAVE = {"2434", "254"}
remaining_other = set(VENDOR["remaining_other"])


def read(p: Path) -> str:
    return p.read_text(encoding="utf-8", errors="replace")


def mid(name: str) -> str:
    m = re.search(r"module-(\d+)\.js", name)
    return m.group(1) if m else ""


unpacked = {}
for p in UNPACKED.glob("module-*.js"):
    unpacked[p.name] = read(p)
live = set(LIVE.get("leftover_live") or [])

# unique extra-path: leftover uniquely contains a quoted ident that maps to exactly one npm module file
METHOD_RE = re.compile(r"""\.default\(\s*["']([A-Za-z][A-Za-z0-9]{2,})["']\s*\)""")
TARGET_RE = re.compile(r"""target:\s*["']([A-Za-z][A-Za-z0-9]+)["']""")
KEY_RE = re.compile(r"""(?:key|proto):\s*["']([A-Za-z][A-Za-z0-9]{3,})["']""")
EXPORT_OBJ = re.compile(r"""\}\s*,\s*\{\s*([A-Za-z][A-Za-z0-9]+)\s*[,}]""")
FORCED_RE = re.compile(
    r"""forced:\s*!require\(["']unpacked/module-\d+\.js["']\)\.default\(["']([A-Za-z][A-Za-z0-9]+)["']\)"""
)

# index leftover unique quoted idents 8+
ident_hits = defaultdict(set)
forced_hits = defaultdict(set)
for name, t in unpacked.items():
    for m in METHOD_RE.findall(t):
        ident_hits[m].add(name)
    for m in FORCED_RE.findall(t):
        forced_hits[m].add(name)

print("=== unique forced method leftovers ===")
unique_forced = []
for method, mods in sorted(forced_hits.items()):
    if len(mods) != 1:
        print(f"  MULTI {method} {sorted(mods)}")
        continue
    name = next(iter(mods))
    n = mid(name)
    print(f"  UNIQUE {method} {name} already={n in already} live={name in live} other={name in remaining_other}")
    unique_forced.append({"method": method, "module": name, "already": n in already, "live": name in live})

# map unique forced method -> unique core-js3 module filename
corejs_mod_dir = NM / "core-js3" / "modules"
corejs_int_dir = NM / "core-js3" / "internals"
npm_by_stem = {}
for d, prefix in ((corejs_mod_dir, "core-js3/modules"), (corejs_int_dir, "core-js3/internals")):
    if not d.is_dir():
        continue
    for p in d.glob("*.js"):
        npm_by_stem[p.stem] = f"{prefix}/{p.name}"
        npm_by_stem[p.stem.replace(".", "-")] = f"{prefix}/{p.name}"

confirmed = []
rejected = []
for rec in unique_forced:
    if rec["already"] or not rec["live"]:
        continue
    method = rec["method"]
    leftover = rec["module"]
    text = unpacked[leftover]
    # kebab method names
    kebab = re.sub(r"([a-z])([A-Z])", r"\1-\2", method).lower()
    # infer target
    targets = TARGET_RE.findall(text)
    target = targets[0] if len(set(targets)) == 1 else None
    candidates = []
    if target:
        stem = f"esnext.{target.lower()}.{kebab}"
        stem2 = f"es.{target.lower()}.{kebab}"
        for s in (stem, stem2, f"esnext.{target.lower()}.{method.lower()}", f"es.{target.lower()}.{method.lower()}"):
            if s in npm_by_stem:
                candidates.append(npm_by_stem[s])
        # also exact filename
        for p in corejs_mod_dir.glob(f"*.{target.lower()}.{kebab}.js"):
            candidates.append(f"core-js3/modules/{p.name}")
        for p in corejs_mod_dir.glob(f"*.{target.lower()}.{method.lower()}.js"):
            candidates.append(f"core-js3/modules/{p.name}")
    # internals set-union etc
    int_stem = f"{(target or '').lower()}-{kebab}" if target else kebab
    if int_stem in npm_by_stem:
        candidates.append(npm_by_stem[int_stem])
    uniq = list(dict.fromkeys(candidates))
    # prefer modules/ over internals/
    mods = [c for c in uniq if "/modules/" in c]
    ints = [c for c in uniq if "/internals/" in c]
    pick = None
    if len(mods) == 1:
        pick = mods[0]
    elif len(mods) == 0 and len(ints) == 1:
        pick = ints[0]
    leftover_export = EXPORT_OBJ.findall(text)
    if pick:
        npm_text = read(NM.joinpath(*pick.split("/")))
        # structural confirm: npm mentions method, leftover mentions method as export key
        if method not in npm_text and kebab.replace("-", "") not in npm_text.lower().replace("-", ""):
            rejected.append({**rec, "reason": "method_not_in_npm", "npm": pick})
            continue
        if method not in leftover_export and f"{method}" not in text:
            rejected.append({**rec, "reason": "method_not_export", "npm": pick})
            continue
        confirmed.append({
            **rec,
            "target": target,
            "npm": pick,
            "leftover_bytes": len(text),
            "npm_bytes": len(npm_text),
            "leftover_head": text[:180].replace("\n", " | "),
            "npm_head": npm_text[:180].replace("\n", " | "),
            "needs_shim": ".default" in text and "export default" not in npm_text and "module.exports" in npm_text,
            "wrapper_side_effect": "export default" not in text and "module8(" in text or "$(" in npm_text,
        })
    else:
        rejected.append({**rec, "reason": "no_unique_npm", "candidates": uniq, "target": target})

print("\n=== confirmed unique forced wrappers ===")
for c in confirmed:
    print(f"  {c['module']} -> {c['npm']} target={c['target']} method={c['method']}")

print("\n=== rejected forced ===")
for r in rejected:
    print(" ", r)

# unique leftover extra-path strings 24+ among remaining_other vs npm internals/modules/lodash
STR_RE = re.compile(r"""['"]([^'"]{20,})['"]""")
leftover_str = defaultdict(set)
for name, t in unpacked.items():
    for s in STR_RE.findall(t):
        leftover_str[s].add(name)

print("\n=== remaining_other unique 20+ strings (sample) ===")
unique_long = []
for name in sorted(remaining_other, key=lambda n: int(mid(n) or 0)):
    t = unpacked.get(name, "")
    uniq = []
    for s in STR_RE.findall(t):
        if leftover_str[s] == {name}:
            uniq.append(s)
    if uniq:
        unique_long.append({"module": name, "strs": uniq[:8], "n": len(uniq), "bytes": len(t)})
print("files_with_unique_long", len(unique_long))
for rec in unique_long[:40]:
    print(f"  {rec['module']} n={rec['n']} {rec['strs'][:3]}")

# lodash extra-path: leftover uniquely contains a lodash filename stem as comment or identifier
lodash_files = [p for p in (NM / "lodash").glob("*.js") if p.name not in {
    "lodash.js", "lodash.min.js", "core.js", "core.min.js", "array.js", "collection.js",
    "object.js", "lang.js", "util.js", "seq.js", "function.js", "date.js", "number.js",
    "string.js", "math.js", "index.js",
}]
lodash_stems = {p.stem.lstrip("_"): p for p in lodash_files}

print("\n=== unique lodash-stem leftover extra-path ===")
lodash_cands = []
for stem, p in sorted(lodash_stems.items()):
    if len(stem) < 6:
        continue
    # leftover uniquely contains stem as a JS ident
    pat = re.compile(rf"\b{re.escape(stem)}\b")
    hits = [n for n, t in unpacked.items() if pat.search(t)]
    if len(hits) == 1:
        name = hits[0]
        n = mid(name)
        if n in already or name not in live:
            continue
        lodash_cands.append({"module": name, "stem": stem, "npm": f"lodash/{p.name}", "live": name in live, "other": name in remaining_other})
        print(f"  {name} uniquely mentions {stem} -> lodash/{p.name} other={name in remaining_other}")
print("lodash unique-stem count", len(lodash_cands))

# other vendor unique idents
VENDOR_NEEDLES = {
    "hoistNonReactStatics": ("hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js",),
    "classNames": ("classnames/index.js",),
    "jsyaml": ("js-yaml/index.js",),
    "safeDump": ("js-yaml/lib/js-yaml/dumper.js",),
    "safeLoad": ("js-yaml/lib/js-yaml/loader.js",),
    "objectAssign": ("object-assign/index.js",),
    "tinyInvariant": ("tiny-invariant/dist/tiny-invariant.cjs.js",),
    "printWarning": ("warning/warning.js",),
    "Scheduler": ("scheduler/index.js",),
    "unstable_scheduleCallback": ("scheduler/index.js",),
    "checkPropTypes": ("prop-types/checkPropTypes.js",),
    "PropTypes": ("prop-types/index.js",),
    "pathBrowserify": ("path-browserify/index.js",),
    "querystring": ("querystring/index.js",),
    "decodeURIComponent": (),
    "Axios": ("axios/index.js",),
    "createBrowserHistory": ("history/esm/history.js",),
    "matchPath": ("react-router/esm/matchPath.js",),
    "withRouter": ("react-router/esm/withRouter.js",),
    "stringify": (),
    "parseQS": (),
    "regeneratorRuntime": ("regenerator-runtime/runtime.js",),
    "valueEqual": ("value-equal/esm/value-equal.js",),
    "resolvePathname": ("resolve-pathname/esm/resolve-pathname.js",),
    "polyfill": (),
}

print("\n=== vendor ident leftover uniqueness ===")
vendor_cands = []
for ident, npms in VENDOR_NEEDLES.items():
    hits = [n for n, t in unpacked.items() if re.search(rf"\b{re.escape(ident)}\b", t)]
    live_hits = [n for n in hits if n in live and mid(n) not in already]
    print(f"  {ident} all={len(hits)} live_unaliased={len(live_hits)} {live_hits[:8]}")
    if len(live_hits) == 1 and len(npms) == 1:
        vendor_cands.append({"module": live_hits[0], "ident": ident, "npm": npms[0]})

# unique extra-path: leftover uniquely contains a distinctive npm source comment
print("\n=== unique leftover contains npm file comment / first unique string vs one npm file ===")
# scan remaining_other vs lodash+core-js3 unique 24+ leftover strings that appear in exactly one npm file
npm_str = defaultdict(set)
for prefix, base, globs in (
    ("lodash", NM / "lodash", ("*.js",)),
    ("core-js3", NM / "core-js3", ("internals/*.js", "modules/*.js")),
    ("classnames", NM / "classnames", ("index.js",)),
    ("js-yaml", NM / "js-yaml", ("lib/**/*.js",)),
    ("object-assign", NM / "object-assign", ("index.js",)),
    ("warning", NM / "warning", ("warning.js",)),
    ("invariant", NM / "invariant", ("browser.js",)),
    ("hoist-non-react-statics", NM / "hoist-non-react-statics", ("src/*.js", "dist/*.js")),
    ("prop-types", NM / "prop-types", ("*.js", "lib/*.js")),
    ("scheduler", NM / "scheduler", ("cjs/*.js",)),
    ("querystring", NM / "querystring", ("*.js",)),
    ("regenerator-runtime", NM / "regenerator-runtime", ("runtime.js",)),
    ("moment-mini", NM / "moment-mini", ("moment.min.js",)),
):
    if not base.is_dir():
        continue
    for g in globs:
        for p in base.glob(g):
            if not p.is_file():
                continue
            if "node_modules" in p.relative_to(base).parts:
                continue
            if prefix == "lodash" and p.name in {
                "lodash.js", "lodash.min.js", "core.js", "core.min.js", "array.js",
            }:
                continue
            rel = prefix + "/" + p.relative_to(base).as_posix()
            t = read(p)
            for s in STR_RE.findall(t):
                npm_str[s].add(rel)

str_unique = []
for rec in unique_long:
    name = rec["module"]
    npms = set()
    vias = []
    for s in rec["strs"]:
        files = npm_str.get(s) or set()
        if len(files) == 1:
            npms |= files
            vias.append((s[:80], next(iter(files))))
    if len(npms) == 1:
        str_unique.append({"module": name, "npm": next(iter(npms)), "vias": vias[:4]})
print("str_unique remaining_other", len(str_unique))
for rec in str_unique:
    print(" ", rec)

out = {
    "unique_forced": unique_forced,
    "confirmed": confirmed,
    "rejected_forced": rejected,
    "lodash_cands": lodash_cands,
    "vendor_cands": vendor_cands,
    "str_unique": str_unique,
    "unique_long_count": len(unique_long),
}
(APP / "PASS5_STRUCTURAL.json").write_text(json.dumps(out, indent=2) + "\n", encoding="utf-8")
print("wrote PASS5_STRUCTURAL.json confirmed", len(confirmed), "lodash", len(lodash_cands), "vendor", len(vendor_cands), "str_unique", len(str_unique))
