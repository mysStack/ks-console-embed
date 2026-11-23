#!/usr/bin/env python3
"""Fingerprint LIVE leftover unpacked modules vs already-installed npm.

Unique 1:1 leftover <-> one npm file. Do not invent orig paths.
Do not alias 2-hit copies unless uniquely extra-pathed.
Leave react-is 2434 and Incorrect invocation 254.
"""
from __future__ import annotations

from collections import defaultdict
from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
UNPACKED = APP / "src/unpacked"
SRC = APP / "src"
NM = APP / "node_modules"
LIVE = json.loads((APP / "LIVE_UNPACKED.json").read_text(encoding="utf-8"))
COREJS = (APP / "corejs-aliases.js").read_text(encoding="utf-8")
SHIMS = (APP / "corejs-shim-aliases.js").read_text(encoding="utf-8")
WEBPACK = (APP / "webpack.config.js").read_text(encoding="utf-8")
RECHARTS = (APP / "recharts-aliases.js").read_text(encoding="utf-8")
OUT = APP / "PASS4_VENDOR.json"

STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)
STR_RE = re.compile(r"""['"]([^'"]{12,})['"]""")
ERR_RE = re.compile(
    r"""throw new (?:TypeError|ReferenceError|RangeError|Error|SyntaxError)\((['"])(.*?)\1\)"""
)
IMP_RE = re.compile(r"""(?:\bfrom|\bimport\s*\(|\brequire\s*\()\s*['"]([^'"]+)['"]""")
DEFAULT_REQ = re.compile(
    r"""require\(\s*['"]unpacked/(module-\d+\.js)['"]\s*\)\s*\.default"""
)
DEFAULT_IMP = re.compile(
    r"""import\s+(\w+)\s+from\s+['"]unpacked/(module-\d+\.js)['"]"""
)
SIDE_IMP = re.compile(r"""(?:^|\n)import\s+['"]unpacked/(module-\d+\.js)['"]""")
NAMED_IMP = re.compile(
    r"""import\s+\{([^}]+)\}\s+from\s+['"]unpacked/(module-\d+\.js)['"]"""
)

already = set(re.findall(r"module-(\d+)\.js", COREJS + "\n" + SHIMS + "\n" + WEBPACK + "\n" + RECHARTS))
LEAVE = {"2434", "254", "812"}  # newer react-is; Incorrect invocation 2-hit

GENERIC = {
    "use strict", "object", "function", "undefined", "prototype",
    "toString", "length", "constructor", "exports", "default",
    "[object Object]", "[object Array]", "[object Function]",
    "[object Number]", "[object String]", "[object Boolean]",
    "[object Arguments]", "[object Date]", "[object Error]",
    "[object Map]", "[object Set]", "[object WeakMap]",
    "[object RegExp]", "[object DataView]", "[object ArrayBuffer]",
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

live = set(LIVE.get("leftover_live") or [])
print("live", len(live), "unpacked_real", len(unpacked), "already", len(already), flush=True)

default_req = defaultdict(list)
default_imp = defaultdict(list)
side_imp = defaultdict(list)
named_imp = defaultdict(list)
value_imp = defaultdict(list)
for folder in ("pages", "components", "stores", "actions", "utils", "configs", "core", "unpacked"):
    d = SRC / folder
    if not d.is_dir():
        continue
    for path in d.rglob("*.js"):
        if "named" in path.parts:
            continue
        text = read(path)
        rel = path.relative_to(SRC).as_posix()
        for m in DEFAULT_REQ.findall(text):
            default_req[m].append(rel)
        for _var, m in DEFAULT_IMP.findall(text):
            default_imp[m].append(rel)
        for m in SIDE_IMP.findall(text):
            side_imp[m].append(rel)
        for _names, m in NAMED_IMP.findall(text):
            named_imp[m].append(rel)
        for spec in IMP_RE.findall(text):
            mm = re.search(r"(?:^|/)(module-\d+\.js)$", spec.split("?")[0])
            if mm and "module-" in spec and "named/" not in spec:
                value_imp[mm.group(1)].append(rel)


def consume(name: str) -> dict:
    return {
        "default_require": default_req.get(name, [])[:8],
        "default_import": default_imp.get(name, [])[:8],
        "side_import": side_imp.get(name, [])[:8],
        "named_import": named_imp.get(name, [])[:8],
        "any_import": value_imp.get(name, [])[:8],
        "needs_shim": bool(default_req.get(name) or default_imp.get(name)),
        "side_only": bool(side_imp.get(name))
        and not default_req.get(name)
        and not default_imp.get(name)
        and not named_imp.get(name),
    }


leftover_str = defaultdict(set)
leftover_err = defaultdict(set)
for name, t in unpacked.items():
    for s in STR_RE.findall(t):
        leftover_str[s].add(name)
    for _q, e in ERR_RE.findall(t):
        leftover_err[e].add(name)


def index_npm_dir(base: Path, prefix: str, globs: tuple[str, ...] = ("**/*.js",)) -> tuple[dict, dict, list]:
    npm_str: dict[str, set] = defaultdict(set)
    npm_err: dict[str, set] = defaultdict(set)
    files: list[str] = []
    if not base.is_dir():
        return npm_str, npm_err, files
    seen: set[Path] = set()
    for g in globs:
        for p in base.glob(g):
            if p in seen or not p.is_file():
                continue
            if "node_modules" in p.relative_to(base).parts:
                continue
            seen.add(p)
            rel = prefix + "/" + p.relative_to(base).as_posix()
            files.append(rel)
            t = read(p)
            for s in STR_RE.findall(t):
                npm_str[s].add(rel)
            for _q, e in ERR_RE.findall(t):
                npm_err[e].add(rel)
    return npm_str, npm_err, files


PACKAGES = [
    ("lodash", NM / "lodash", ("*.js",)),
    ("core-js3", NM / "core-js3", ("internals/*.js", "modules/*.js")),
    ("react-router", NM / "react-router", ("esm/**/*.js", "modules/**/*.js", "index.js")),
    ("history", NM / "history", ("esm/**/*.js", "es/**/*.js", "index.js")),
    ("qs", NM / "qs", ("lib/*.js", "dist/*.js", "*.js")),
    ("path-to-regexp", NM / "path-to-regexp", ("index.js", "**/*.js")),
    ("react-router-dom", NM / "react-router-dom", ("esm/**/*.js", "modules/**/*.js", "index.js")),
    ("prop-types", NM / "prop-types", ("*.js", "lib/*.js")),
    ("classnames", NM / "classnames", ("index.js", "*.js")),
    ("tiny-invariant", NM / "tiny-invariant", ("dist/**/*.js", "**/*.js")),
    ("hoist-non-react-statics", NM / "hoist-non-react-statics", ("dist/*.js", "*.js")),
    ("warning", NM / "warning", ("*.js", "warning.js")),
    ("value-equal", NM / "value-equal", ("**/*.js",)),
    ("resolve-pathname", NM / "resolve-pathname", ("**/*.js",)),
    ("mini-create-react-context", NM / "mini-create-react-context", ("dist/**/*.js", "**/*.js")),
    ("react-lifecycles-compat", NM / "react-lifecycles-compat", ("**/*.js",)),
    ("object-assign", NM / "object-assign", ("index.js",)),
    ("invariant", NM / "invariant", ("**/*.js",)),
    ("react-is", NM / "react-is", ("index.js", "cjs/*.js")),
    ("moment-mini", NM / "moment-mini", ("**/*.js",)),
    ("regenerator-runtime", NM / "regenerator-runtime", ("*.js",)),
    ("semver", NM / "semver", ("*.js", "functions/*.js", "internal/*.js", "classes/*.js")),
    ("mobx", NM / "mobx", ("lib/**/*.js", "lib/*.js")),
    ("mobx-react", NM / "mobx-react", ("dist/*.js", "*.js")),
]

pkg_index = {}
for key, base, globs in PACKAGES:
    s, e, files = index_npm_dir(base, key, globs)
    pkg_index[key] = {"str": s, "err": e, "files": files, "exists": base.is_dir()}
    print(f"indexed {key} files={len(files)} exists={base.is_dir()}", flush=True)


def unique_hits_for(name: str, pkg: str) -> list[dict]:
    t = unpacked.get(name, "")
    npm_str = pkg_index[pkg]["str"]
    npm_err = pkg_index[pkg]["err"]
    hits = []
    for _q, err in ERR_RE.findall(t):
        lives = leftover_err.get(err) or set()
        npms = npm_err.get(err) or set()
        if lives == {name} and len(npms) == 1:
            hits.append({"via": "err:" + err[:100], "npm": next(iter(npms))})
    for s in STR_RE.findall(t):
        if s.lower() in GENERIC or s.startswith("module-") or s.startswith("unpacked/"):
            continue
        lives = leftover_str.get(s) or set()
        npms = npm_str.get(s) or set()
        if lives == {name} and len(npms) == 1:
            hits.append({"via": "str:" + s[:100], "npm": next(iter(npms))})
    return hits


# Structural lodash needles unique enough to identify files even if strings are short.
LODASH_STRUCT = [
    (
        "module-958.js",
        "lodash/isBuffer.js",
        [
            "typeof Buffer !== \"undefined\" && typeof Buffer.isBuffer",
            "Buffer.isBuffer(value)",
        ],
    ),
    (
        "module-1056.js",
        "lodash/_nodeUtil.js",
        [
            "typeof process !== \"undefined\" && process.binding",
            "process.binding",
        ],
    ),
    (
        "module-1648.js",
        "lodash/_cloneBuffer.js",
        [
            "typeof Buffer !== \"undefined\" && Buffer.from",
            "Buffer.from(input)",
        ],
    ),
    (
        "module-264.js",
        "lodash/isPlainObject.js",
        [
            'module116(e) != "[object Object]"',
            "n instanceof n && toString.call(n) == c",
        ],
    ),
    (
        "module-606.js",
        "lodash/_baseIsNative.js",
        [
            r"/^\[object .+?Constructor\]$/",
            "hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])",
        ],
    ),
]

# Extra structural needles scanned across live leftovers.
LODASH_SCAN = [
    ("lodash/isBuffer.js", ["Buffer.isBuffer", "typeof Buffer !== \"undefined\""], "isBuffer"),
    ("lodash/_nodeUtil.js", ["process.binding", "process.env.NODE_DEBUG"], "nodeUtil"),
    ("lodash/_cloneBuffer.js", ["Buffer.from", "allocUnsafe"], "cloneBuffer"),
    ("lodash/_baseIsNative.js", ["[object .+?Constructor]", "hasOwnProperty|(function)"], "baseIsNative"),
    ("lodash/isPlainObject.js", ["n instanceof n", "[object Object]"], "isPlainObject"),
    ("lodash/_getNative.js", ["func && (isMasked", "getValue(object, key)"], "getNative"),
    ("lodash/_coreJsData.js", ["__core-js_shared__"], "coreJsData"),
    ("lodash/_isMasked.js", ["coreJsData && coreJsData.dummy"], "isMasked"),
    ("lodash/_toSource.js", ["Function.toString"], "toSource"),
    ("lodash/_getValue.js", None, None),
]

ROUTER_NEEDLES = [
    ("You should not use <Switch> outside a <Router>", "react-router"),
    ("You should not use <Route> or withRouter() outside a <Router>", "react-router"),
    ("A <Router> may have only one child element", "react-router"),
    ("The prop `history` is marked as required in `Router`", "react-router"),
    ("withRouter", "react-router"),
    ("generatePath", "react-router"),
    ("matchPath", "react-router"),
    ("You cannot change <Router history>", "react-router"),
    ("A history object is required", "history"),
    ("Hash history needs a DOM", "history"),
    ("Browser history needs a DOM", "history"),
    ("Warning: Hash history cannot PUSH the same path", "history"),
    ("Cannot PUSH the same path", "history"),
    ("Location did not update", "history"),
    ("path-to-regexp", "path-to-regexp"),
    ("The path provided is not a string", "react-router"),
    ("Unexpected end of form", "qs"),
    ("Buffer too small", "qs"),
    ("charset=utf-8", "qs"),
    ("arrayLimit", "qs"),
    ("allowDots", "qs"),
    ("strictNullHandling", "qs"),
    ("parseArrays", "qs"),
    ("commaRoundTrip", "qs"),
    ("Invariant failed", "tiny-invariant"),
    ("Minified exception occurred", "react"),
]

candidates = []
rejected = []
notes = []

# 1) unique string/err vs each package for LIVE leftovers
for name in sorted(live, key=lambda n: int(mid(n) or 0)):
    n = mid(name)
    if n in already or n in LEAVE:
        continue
    t = unpacked.get(name, "")
    if not t:
        continue
    pkg_hits = {}
    for pkg in pkg_index:
        hits = unique_hits_for(name, pkg)
        if hits:
            npms = list(dict.fromkeys(h["npm"] for h in hits))
            pkg_hits[pkg] = {"npms": npms, "vias": [h["via"] for h in hits][:6]}
    if not pkg_hits:
        continue
    # unique across packages too
    all_npms = []
    for rec in pkg_hits.values():
        all_npms.extend(rec["npms"])
    uniq_npms = list(dict.fromkeys(all_npms))
    if len(uniq_npms) != 1:
        rejected.append({
            "module": name,
            "reason": "multi_npm",
            "pkg_hits": {k: v["npms"] for k, v in pkg_hits.items()},
        })
        continue
    npm = uniq_npms[0]
    pkg = npm.split("/")[0]
    cons = consume(name)
    candidates.append({
        "module": name,
        "npm": npm,
        "pkg": pkg,
        "vias": pkg_hits[pkg]["vias"] if pkg in pkg_hits else [],
        "consume": cons,
        "source": "unique_str",
        "kind": "shim" if cons["needs_shim"] else "alias",
    })

# 2) structural lodash Buffer/process + known internals
struct_hits = []
for name, npm, needles in LODASH_STRUCT:
    t = unpacked.get(name, "")
    present = [n for n in needles if n in t]
    live_flag = name in live
    already_flag = mid(name) in already
    npm_path = NM / npm
    struct_hits.append({
        "module": name,
        "npm": npm,
        "needles_hit": present,
        "live": live_flag,
        "already": already_flag,
        "npm_exists": npm_path.is_file(),
        "consume": consume(name),
        "importers_any": value_imp.get(name, [])[:12],
    })
    if live_flag and not already_flag and present and npm_path.is_file():
        if not any(c["module"] == name for c in candidates):
            cons = consume(name)
            candidates.append({
                "module": name,
                "npm": npm,
                "pkg": "lodash",
                "vias": ["struct:" + x[:80] for x in present],
                "consume": cons,
                "source": "lodash_struct",
                "kind": "shim" if cons["needs_shim"] else "alias",
            })

# 3) scan live leftovers for lodash Buffer/process copies besides 958/1056/1648
buffer_live = []
process_live = []
for name in live:
    if mid(name) in already:
        continue
    t = unpacked.get(name, "")
    if "Buffer.isBuffer" in t or "Buffer.from" in t:
        buffer_live.append({
            "module": name,
            "bytes": len(t),
            "has_isBuffer": "Buffer.isBuffer" in t,
            "has_from": "Buffer.from" in t,
            "has_process_binding": "process.binding" in t,
            "head": t[:220].replace("\n", " | "),
            "consume": consume(name),
        })
    if "process.binding" in t:
        process_live.append({
            "module": name,
            "bytes": len(t),
            "head": t[:220].replace("\n", " | "),
            "consume": consume(name),
        })

# 4) router/history/qs/path-to-regexp needles in live leftover
needle_live = []
for needle, pkg in ROUTER_NEEDLES:
    hits = []
    for name in live:
        if mid(name) in already:
            continue
        t = unpacked.get(name, "")
        if needle in t:
            hits.append(name)
    if hits:
        needle_live.append({"needle": needle, "pkg": pkg, "modules": hits, "count": len(hits)})

# 5) uniqueness of candidate npm files among leftover
by_npm = defaultdict(list)
for c in candidates:
    by_npm[c["npm"]].append(c["module"])
unique_ok = []
two_hit = []
for npm, mods in sorted(by_npm.items()):
    uniq_mods = sorted(set(mods))
    if len(uniq_mods) != 1:
        two_hit.append({"npm": npm, "modules": uniq_mods})
        continue
    rec = next(c for c in candidates if c["module"] == uniq_mods[0] and c["npm"] == npm)
    unique_ok.append(rec)

# extra-path 2-hit? none unless uniquely extra-pathed — leave in two_hit
# verify npm file exists
final = []
missing_npm = []
for rec in unique_ok:
    npm = rec["npm"]
    # lodash/foo.js -> NM/lodash/foo.js ; core-js3/internals/x -> NM/core-js3/internals/x
    parts = npm.split("/", 1)
    p = NM / parts[0]
    if len(parts) == 2:
        p = p / parts[1]
    else:
        p = p / "index.js"
    if not p.is_file():
        # try require.resolve-like
        alt = None
        if parts[0] == "lodash":
            alt = NM / "lodash" / parts[1]
        if alt and alt.is_file():
            p = alt
        else:
            missing_npm.append(rec)
            continue
    rec["npm_file"] = str(p)
    rec["npm_bytes"] = p.stat().st_size
    rec["leftover_bytes"] = len(unpacked.get(rec["module"], ""))
    final.append(rec)

# inspect 264/367/421/584/606/314/81 specifically
FOCUS = [
    "module-264.js", "module-367.js", "module-421.js", "module-584.js",
    "module-606.js", "module-314.js", "module-81.js", "module-958.js",
    "module-1056.js", "module-1648.js", "module-2434.js", "module-254.js",
]
focus = {}
for name in FOCUS:
    t = unpacked.get(name, "")
    focus[name] = {
        "live": name in live,
        "already": mid(name) in already,
        "bytes": len(t),
        "consume": consume(name),
        "head": t[:300].replace("\n", " | ") if t else "",
        "unique_corejs": unique_hits_for(name, "core-js3")[:6] if t else [],
        "unique_lodash": unique_hits_for(name, "lodash")[:6] if t else [],
        "unique_router": unique_hits_for(name, "react-router")[:6] if t else [],
        "unique_history": unique_hits_for(name, "history")[:6] if t else [],
        "unique_qs": unique_hits_for(name, "qs")[:6] if t else [],
        "unique_ptr": unique_hits_for(name, "path-to-regexp")[:6] if t else [],
    }

# lodash file existence for structural targets
lodash_files = {
    "isBuffer": (NM / "lodash/isBuffer.js").is_file(),
    "_nodeUtil": (NM / "lodash/_nodeUtil.js").is_file(),
    "_cloneBuffer": (NM / "lodash/_cloneBuffer.js").is_file(),
    "isPlainObject": (NM / "lodash/isPlainObject.js").is_file(),
    "_baseIsNative": (NM / "lodash/_baseIsNative.js").is_file(),
    "_getNative": (NM / "lodash/_getNative.js").is_file(),
    "_coreJsData": (NM / "lodash/_coreJsData.js").is_file(),
    "_isMasked": (NM / "lodash/_isMasked.js").is_file(),
    "_toSource": (NM / "lodash/_toSource.js").is_file(),
}

report = {
    "live": len(live),
    "already": len(already),
    "unique_ok": final,
    "unique_ok_count": len(final),
    "two_hit": two_hit,
    "rejected_multi": rejected[:40],
    "struct_hits": struct_hits,
    "buffer_live": buffer_live,
    "process_live": process_live,
    "needle_live": needle_live,
    "missing_npm": missing_npm,
    "focus": focus,
    "lodash_files": lodash_files,
    "pkg_file_counts": {k: len(v["files"]) for k, v in pkg_index.items()},
}
OUT.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
print(json.dumps({
    "live": len(live),
    "already": len(already),
    "unique_ok_count": len(final),
    "unique_ok": [{"m": c["module"], "npm": c["npm"], "kind": c["kind"], "src": c["source"]} for c in final],
    "two_hit": two_hit,
    "buffer_live": [b["module"] for b in buffer_live],
    "process_live": [b["module"] for b in process_live],
    "needle_live": [{"n": x["needle"][:50], "c": x["count"], "m": x["modules"][:6]} for x in needle_live],
    "lodash_files": lodash_files,
    "focus_live": {k: v["live"] for k, v in focus.items()},
}, indent=2), flush=True)
print("wrote", OUT, flush=True)
