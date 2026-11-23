#!/usr/bin/env python3
"""Classify LIVE leftover module-N.js: vendor fingerprint vs unique orig.

Uniqueness is GLOBAL among all non-stub unpacked + promoted sources.
Skip 2-hit / 0-hit / KSE-only / skip-list / already-mapped orig paths.
Do not invent orig paths. Do not alias core-js@2 (recharts).
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
KNOWN_PY = ROOT / "recovery/scripts/add_known_named.py"
WEBPACK = (APP / "webpack.config.js").read_text(encoding="utf-8")
RECHARTS = (APP / "recharts-aliases.js").read_text(encoding="utf-8")
COREJS = APP / "corejs-aliases.js"
NM = APP / "node_modules"
LIVE_JSON = APP / "LIVE_UNPACKED.json"
OUT = APP / "LIVE_LEFTOVER_NEXT.json"

STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)
T_PAT = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
API_PAT = re.compile(r"""['"]((?:/kapis|/apis|/api)[^'"]{6,})['"]""")
KAPIS_PAT = re.compile(r"""['"](kapis/[^'"]{6,})['"]""")
RES_PAT = re.compile(
    r"""(?:this|e|t|n)\.(?:resourceName|module)\s*=\s*['"]([^'"]+)['"]"""
)
MODULE_KEY_PAT = re.compile(r"""(?:^|[,{\s])module:\s*['"]([^'"]+)['"]""")
DISPLAY_PAT = re.compile(
    r"""(?:displayName|chartName)\s*[:=]\s*['"]([A-Za-z][A-Za-z0-9]+)['"]"""
)
STR_RE = re.compile(r"""['"]([^'"]{8,})['"]""")
ERR_RE = re.compile(
    r"""throw new (?:TypeError|ReferenceError|Error)\((['"])(.*?)\1\)"""
)
BANNER_RE = re.compile(
    r"(?:@license|Copyright \(c\)|Licensed under the|SPDX-License-Identifier|MIT License)[^\n]{0,160}",
    re.I,
)

SKIP_FRAGS = (
    "WHIZARD",
    "ColumeInput",
    "CustomToolTip",
    "PromQLInput",
    "ProjectSelect",
    "FormGroupCard",
    "ItemContianer",
    "FullscreenModal",
    "ErrorContainer",
    "EditMonitorFormLayout",
    "MetircQueryInput",
    "BillIcon",
    "ContainerLog",
    "Compose",
    "GrafanaTargetInput",
    "SquareButton",
    "StatusReason",
    "Cards/Banner",
)
COMMON_T = {
    "NAME", "TYPE", "STATUS", "CREATE", "EDIT", "DELETE", "SAVE", "CANCEL",
    "CONFIRM", "OK", "CLOSE", "SEARCH", "REFRESH", "MORE", "ACTION", "ACTIONS",
    "CREATED_AT", "CREATION_TIME", "DESCRIPTION", "PROJECT", "CLUSTER",
    "WORKSPACE", "NAMESPACE", "USERNAME", "PASSWORD", "EMAIL", "ROLE",
}

BABEL = {
    "classCallCheck": ("Cannot call a class as a function",),
    "assertThisInitialized": (
        "this hasn't been initialised - super() hasn't been called",
    ),
    "inherits": ("Super expression must either be null or a function",),
    "typeof": (
        'typeof Symbol === "function" && typeof Symbol.iterator === "symbol"',
    ),
    "getPrototypeOf": ("Object.setPrototypeOf ? Object.getPrototypeOf",),
    "setPrototypeOf": ("Object.setPrototypeOf || function",),
    "asyncToGenerator": ('n(i, resolve, reject, l, s, "next", e)',),
    "interopRequireDefault": ("if (e && e.__esModule)", "return {", "default: e"),
    "initializerWarningHelper": ("Decorating class property failed",),
    "get": ('typeof Reflect !== "undefined" && Reflect.get',),
    "createClass": ("r.enumerable = r.enumerable || false", "n(e.prototype, t)"),
    "defineProperty": (
        "if (t in e)",
        "Object.defineProperty(e, t, {",
        "writable: true",
    ),
    "possibleConstructorReturn": (
        'module246(t) !== "object" && typeof t !== "function"',
        "return module88(e)",
    ),
    "slicedToArray": (
        "module498(e) || module538(e, t) || module344(e, t) || module499()",
    ),
    "nonIterableRest": ("Invalid attempt to destructure non-iterable instance",),
    "nonIterableSpread": ("Invalid attempt to spread non-iterable instance",),
    "arrayWithHoles": ("if (Array.isArray(e))", "return e;"),
    "iterableToArrayLimit": ("Symbol.iterator in Object(e)",),
    "unsupportedIterableToArray": (
        "/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/",
    ),
    "superPropBase": (
        "while(!Object.prototype.hasOwnProperty.call(e, t)",
    ),
    "arrayLikeToArray": (
        "for (var i = 0; i < e.length; i++)",
        "t[i] = e[i]",
    ),
    "iterableToArray": ("Array.from(e)",),
    "arrayWithoutHoles": ("Array.isArray(e)",),
    "objectWithoutPropertiesLoose": (
        "Object.prototype.hasOwnProperty.call(e, n)",
        "t[n] = e[n]",
    ),
    "toConsumableArray": ("Invalid attempt to spread",),
    "extends": ("Object.assign || function",),
    "construct": ("typeof Reflect !== \"undefined\" && Reflect.construct",),
    "isNativeReflectConstruct": (
        "Date.prototype.toString.call(Reflect.construct(Date, [], function () {}",
    ),
    "wrapNativeSuper": ("setPrototypeOf", "isNativeFunction"),
    "isNativeFunction": ('indexOf("[native code]")',),
    "taggedTemplateLiteral": ("Object.freeze(raw)",),
    "readOnlyError": ("is read-only",),
    "writeOnlyError": ("is write-only",),
    "defaults": ("for (var i = 1; i < arguments.length; i++)",),
    "defineEnumerableProperties": ("Object.defineProperties",),
    "initializerDefineProperty": ("descriptor.initializer",),
    "applyDecoratedDescriptor": ("desc.initializer",),
}

VENDOR_NEEDLES = [
    ("filesize", "filesize"),
    ("js-cookie", "js-cookie"),
    ("uuid-v4", "xxxxxxxx-xxxx-4xxx"),
    ("tinycolor", "tinycolor"),
    ("JSEncrypt", "JSEncrypt"),
    ("cronstrue", "cronstrue"),
    ("JSZip", "JSZip"),
    ("ipaddr", "ipaddr.js"),
    ("localforage", "localforage"),
    ("axios", "axios"),
    ("tiny-invariant", "Invariant failed"),
    ("object-assign", "object-assign"),
    ("hoist-non-react-statics", "hoist-non-react-statics"),
    ("react-lifecycles-compat", "react-lifecycles-compat"),
    ("LineChart-chartName", 'chartName: "LineChart"'),
    ("DraggableCore", "DraggableCore"),
    ("jwt-decode", "Invalid token specified"),
    ("numeral", "numeral"),
    ("clipboard", "clipboard.js"),
    ("html2canvas", "html2canvas"),
    ("sockjs", "sockjs"),
    ("pako", "pako"),
    ("internmap", "internmap"),
    ("parse-entities", "parse-entities"),
    ("core-js-shared", "__core-js_shared__"),
    ("core-js-zloirock", "zloirock"),
    ("core-js-library", "core-js/library"),
]

aliased = set(re.findall(r"module-(\d+)\.js", WEBPACK + "\n" + RECHARTS))
if COREJS.exists():
    aliased.update(re.findall(r"module-(\d+)\.js", COREJS.read_text(encoding="utf-8")))

known_pairs = re.findall(
    r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY.read_text(encoding="utf-8")
)
known_keys = {p for p, _m in known_pairs}
known_mods = {m for _p, m in known_pairs}
mod_to_known = defaultdict(list)
for p, m in known_pairs:
    mod_to_known[m].append(p)

already_babel = {
    Path(p).stem
    for p, _m in known_pairs
    if p.startswith("utils/babel-helpers/")
}


def mid_of(name: str) -> str:
    m = re.search(r"module-(\d+)\.js", name)
    return m.group(1) if m else ""


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def is_stub(text: str) -> bool:
    return bool(STUB_RE.search(text[:400]))


def skip_name(key: str) -> bool:
    low = key.lower()
    return any(frag.lower() in low for frag in SKIP_FRAGS)


def norm_key(rel_posix: str) -> str:
    rel = rel_posix.replace("\\", "/")
    if rel.endswith("/index.jsx"):
        return rel[: -len("/index.jsx")] + ".js"
    if rel.endswith("/index.js"):
        return rel[: -len("/index.js")] + ".js"
    if rel.endswith(".jsx"):
        return rel[:-4] + ".js"
    return rel


def parse_export_sig(text: str):
    tm = re.search(
        r"""(?:\$|module8)\(\{\s*target:\s*['"](\w+)['"]([^}]*)\}\s*,\s*\{([^}]+)\}""",
        text,
        re.S,
    )
    if not tm:
        return None
    target, flags, body = tm.group(1), tm.group(2), tm.group(3)
    proto = "proto: true" in flags or "proto:!0" in flags.replace(" ", "")
    stat = "stat: true" in flags or "stat:!0" in flags.replace(" ", "")
    glob = "global: true" in flags or "global:!0" in flags.replace(" ", "")
    keys = []
    for km in re.finditer(r"""(?:^|,)\s*([A-Za-z_$][\w$]*)\s*:""", body):
        keys.append(km.group(1))
    if not keys:
        for km in re.finditer(r"""(?:^|,)\s*([A-Za-z_$][\w$]*)\s*(?=,|$)""", body):
            k = km.group(1)
            if k not in {"true", "false", "null"}:
                keys.append(k)
    if not keys:
        return None
    return (target, proto, stat, glob, tuple(keys))


print("=== load live leftover list ===", flush=True)
live_doc = json.loads(LIVE_JSON.read_text(encoding="utf-8"))
live_names = live_doc["leftover_live"]
live_set = set(live_names)
print("live_leftovers", len(live_names), "bundle", live_doc.get("bundle"))

print("=== index all unpacked ===", flush=True)
unpacked_text: dict[str, str] = {}
for path in UNPACKED.glob("module-*.js"):
    text = read_text(path)
    if is_stub(text):
        continue
    unpacked_text[path.name] = text
print("real_unpacked", len(unpacked_text))

leftover_text = {n: unpacked_text[n] for n in live_names if n in unpacked_text}
print("live_with_text", len(leftover_text), "missing_text", sorted(live_set - set(leftover_text)))

# ---------- babel helpers: unique among ALL real unpacked ----------
print("\n=== babel helpers unique among all real unpacked ===")
babel_pins = []
babel_skipped = []
for helper, needles in BABEL.items():
    if helper in already_babel:
        continue
    hits = [n for n, t in unpacked_text.items() if all(s in t for s in needles)]
    live_hits = [n for n in hits if n in live_set]
    print(f"  {helper}: all={hits[:6]} ({len(hits)}) live={live_hits}")
    if len(hits) == 1 and hits[0] in live_set:
        babel_pins.append({"helper": helper, "module": hits[0], "bytes": len(unpacked_text[hits[0]])})
    elif hits:
        babel_skipped.append({"helper": helper, "hits": hits, "live": live_hits})

or_chain = []
for n, t in unpacked_text.items():
    if re.search(
        r"export default function\(e,\s*t\) \{\s*return module\d+\(e\) \|\| module\d+\(e,\s*t\) \|\| module\d+\(e,\s*t\) \|\| module\d+\(\)",
        t,
        re.S,
    ):
        or_chain.append(n)
print("  slicedToArray_pattern:", or_chain)
if len(or_chain) == 1 and or_chain[0] in live_set:
    if not any(p["helper"] == "slicedToArray" for p in babel_pins):
        if "slicedToArray" not in already_babel:
            babel_pins.append(
                {
                    "helper": "slicedToArray",
                    "module": or_chain[0],
                    "bytes": len(unpacked_text[or_chain[0]]),
                }
            )

print("babel_pins", len(babel_pins))

print("\n=== small leftover error strings (live, 1-hit globally) ===")
err_index = defaultdict(list)
for n, t in unpacked_text.items():
    if len(t) > 4000:
        continue
    for m in ERR_RE.finditer(t):
        err_index[m.group(2)].append(n)
for msg, files in sorted(err_index.items(), key=lambda kv: kv[0]):
    live_files = [f for f in files if f in live_set]
    if len(files) == 1 and live_files:
        print(f"  UNIQUE {msg!r} -> {files[0]}")
    elif live_files and len(files) <= 3:
        print(f"  MULTI{len(files)} {msg!r} -> {files}")

# ---------- lodash: 1:1 among ALL unpacked, not live-only ----------
print("\n=== lodash method 1:1 among all unpacked ===", flush=True)
lodash_pins = []
lodash_skipped = []
lodash_dir = NM / "lodash"
if lodash_dir.is_dir():
    leftover_lits = {n: set(STR_RE.findall(t)) for n, t in unpacked_text.items()}
    lit_to_mods = defaultdict(set)
    for n, lits in leftover_lits.items():
        for s in lits:
            lit_to_mods[s].add(n)

    lodash_method_files = []
    for p in sorted(lodash_dir.glob("*.js")):
        if p.name.startswith("_") or p.name in {
            "lodash.js", "core.js", "fp.js", "index.js",
            "wrapperLodash.js", "chain.js", "lodash.min.js",
        }:
            continue
        text = read_text(p)
        reqs = re.findall(r"""require\(['"]\./([^'"]+)['"]\)""", text)
        lits = set(STR_RE.findall(text))
        lits -= {"use strict", "object", "function", "undefined", "exports", "module", "default"}
        lodash_method_files.append((p.name, reqs, lits, text))

    lodash_lit_owners = defaultdict(set)
    for name, _r, lits, _t in lodash_method_files:
        for s in lits:
            lodash_lit_owners[s].add(name)

    raw = []
    for lname, reqs, lits, _t in lodash_method_files:
        unique_lits = [
            s for s in lits
            if len(lodash_lit_owners[s]) == 1 and len(s) >= 10 and " " in s
        ]
        if not unique_lits:
            continue
        cand = None
        via = None
        for s in unique_lits:
            mods = lit_to_mods.get(s, set())
            if not mods:
                continue
            if cand is None:
                cand = set(mods)
                via = s
            else:
                cand &= mods
        if cand and len(cand) == 1:
            mod = next(iter(cand))
            raw.append((lname, mod, via, len(unique_lits), len(reqs)))

    by_mod = defaultdict(list)
    by_l = defaultdict(list)
    for item in raw:
        by_mod[item[1]].append(item)
        by_l[item[0]].append(item)
    for lname, mod, via, nuniq, nreq in raw:
        live = mod in live_set
        if len(by_mod[mod]) != 1 or len(by_l[lname]) != 1:
            lodash_skipped.append({"lodash": lname, "module": mod, "reason": "multi", "live": live})
            continue
        rec = {
            "lodash": lname,
            "module": mod,
            "via": via,
            "uniq_lits": nuniq,
            "requires": nreq,
            "live": live,
        }
        if live:
            lodash_pins.append(rec)
            print(f"  LIVE {mod} -> lodash/{lname} via={via!r}")
        else:
            lodash_skipped.append({**rec, "reason": "not_live"})
print("lodash_live_1to1", len(lodash_pins), "skipped", len(lodash_skipped))
# user: lodash 2-hit copies stay module-N.js. If any pin is actually 2-hit globally, drop.
# The scan above already requires 1 module per unique lodash lit intersection.

# ---------- core-js3 entries (NOT core-js@2) ----------
print("\n=== core-js3 unique export signatures ===", flush=True)
corejs_pins = []
corejs_skipped = []
corejs3 = NM / "core-js3"
corejs2 = NM / "core-js"
if not corejs3.is_dir():
    print("NO core-js3 dir")
else:
    cj3_index = defaultdict(list)
    for p in (corejs3 / "modules").glob("*.js"):
        sig = parse_export_sig(read_text(p))
        if sig:
            cj3_index[sig].append(p.name)
    cj2_index = defaultdict(list)
    if corejs2.is_dir():
        for folder in ("modules", "library/fn", "library/es6", "es6", "es7"):
            d = corejs2 / folder
            if not d.is_dir():
                continue
            for p in d.rglob("*.js"):
                sig = parse_export_sig(read_text(p))
                if sig:
                    cj2_index[sig].append(str(p.relative_to(corejs2)))

    leftover_sigs = []
    for n in live_names:
        t = leftover_text.get(n)
        if not t:
            continue
        if mid_of(n) in aliased:
            continue
        # skip obvious v2 library copies
        if "core-js/library" in t or "library/fn" in t:
            corejs_skipped.append({"module": n, "reason": "core-js-library-v2"})
            continue
        sig = parse_export_sig(t)
        if sig:
            leftover_sigs.append((n, sig))

    sig_to_left = defaultdict(list)
    for n, sig in leftover_sigs:
        sig_to_left[sig].append(n)

    print("live_export_sigs", len(leftover_sigs), "corejs3_sigs", len(cj3_index))
    for n, sig in leftover_sigs:
        cands = cj3_index.get(sig, [])
        lefts = sig_to_left[sig]
        v2 = cj2_index.get(sig, [])
        if v2 and not cands:
            corejs_skipped.append({"module": n, "reason": "v2_only_sig", "v2": v2[:3], "sig_keys": list(sig[4])})
            continue
        if len(cands) == 1 and len(lefts) == 1:
            # dual-file esnext vs v2: if v2 also has this signature, skip (recharts risk / last slice rule)
            if v2:
                corejs_skipped.append({
                    "module": n,
                    "reason": "esnext_or_v2_dual",
                    "corejs3": cands[0],
                    "v2": v2[:3],
                    "keys": list(sig[4]),
                })
                print(f"  SKIP dual {n} -> {cands[0]} v2={v2[:2]} keys={sig[4]}")
                continue
            corejs_pins.append({
                "module": n,
                "corejs": f"core-js3/modules/{cands[0]}",
                "keys": list(sig[4]),
                "target": sig[0],
            })
            print(f"  PIN {n} -> core-js3/modules/{cands[0]} keys={sig[4]}")
        else:
            if cands or len(lefts) > 1:
                corejs_skipped.append({
                    "module": n,
                    "reason": "not_1to1",
                    "cands": cands,
                    "copies": lefts,
                    "keys": list(sig[4]),
                })
print("corejs3_pins", len(corejs_pins), "skipped", len(corejs_skipped))

# ---------- vendor banners / needles in LIVE leftovers ----------
print("\n=== vendor needles in live leftovers ===")
needle_hits = {}
for label, needle in VENDOR_NEEDLES:
    hits = [n for n, t in leftover_text.items() if needle in t]
    if hits:
        needle_hits[label] = hits
        print(f"  {label}: {len(hits)} sample={hits[:8]}")

print("\n=== copyright banners in live leftovers ===")
banner_mods = []
for name in live_names:
    t = leftover_text.get(name, "")
    head = t[:4000]
    banners = [m.group(0)[:140] for m in BANNER_RE.finditer(head)]
    umd = "webpackUniversalModuleDefinition" in head or "define.amd" in head[:1500]
    if not banners and not umd:
        continue
    banner_mods.append({
        "module": name,
        "bytes": len(t),
        "umd": umd,
        "banners": banners[:3],
        "head": head[:180].replace("\n", " | "),
    })
    print(f"  {name} umd={umd} bytes={len(t)} banner={banners[:1]}")
print("banner_mods", len(banner_mods))

# ---------- orig globally unique ----------
print("\n=== orig unique t/api/module among leftover live ===", flush=True)

t_index = defaultdict(set)
api_index = defaultdict(set)
res_index = defaultdict(set)
disp_index = defaultdict(set)
for name, text in unpacked_text.items():
    for k in T_PAT.findall(text):
        t_index[k].add(name)
    for k in API_PAT.findall(text) + KAPIS_PAT.findall(text):
        api_index[k].add(name)
    for k in list(RES_PAT.findall(text)) + list(MODULE_KEY_PAT.findall(text)):
        res_index[k].add(name)
    for k in DISPLAY_PAT.findall(text):
        disp_index[k].add(name)

for folder in ("pages", "components", "stores", "actions", "utils", "configs", "core"):
    d = SRC / folder
    if not d.exists():
        continue
    for p in d.rglob("*.js"):
        text = read_text(p)
        if text.startswith("export { default } from "):
            continue
        tag = "PROMOTED:" + p.relative_to(SRC).as_posix()
        for k in T_PAT.findall(text):
            t_index[k].add(tag)
        for k in API_PAT.findall(text) + KAPIS_PAT.findall(text):
            api_index[k].add(tag)
        for k in list(RES_PAT.findall(text)) + list(MODULE_KEY_PAT.findall(text)):
            res_index[k].add(tag)
        for k in DISPLAY_PAT.findall(text):
            disp_index[k].add(tag)

orig_t = defaultdict(list)
orig_api = defaultdict(list)
orig_res = defaultdict(list)
orig_disp = defaultdict(list)
missing = []
orig_files = 0
for folder in ("components", "pages", "stores", "utils", "hocs", "actions", "configs"):
    d = ORIG / folder
    if not d.exists():
        continue
    for p in d.rglob("*"):
        if not p.is_file() or p.suffix not in {".js", ".jsx"}:
            continue
        if ".test." in p.name or p.name.endswith(".spec.js"):
            continue
        rel = p.relative_to(ORIG).as_posix()
        key = norm_key(rel)
        text = read_text(p)
        orig_files += 1
        for k in T_PAT.findall(text):
            orig_t[k].append(key)
        for a in API_PAT.findall(text) + KAPIS_PAT.findall(text):
            orig_api[a].append(key)
        for k in list(RES_PAT.findall(text)) + list(MODULE_KEY_PAT.findall(text)):
            orig_res[k].append(key)
        for k in DISPLAY_PAT.findall(text):
            orig_disp[k].append(key)
        if key not in known_keys:
            missing.append((key, text))

print("orig_scanned", orig_files, "known_keys", len(known_keys), "missing_orig", len(missing))

orig_pins = []
orig_skipped = []
seen_mod = set()
seen_path = set()


def consider(key: str, files, reason: str, extra: str) -> bool:
    if skip_name(key):
        orig_skipped.append({"path": key, "reason": "skip-list", "detail": extra})
        return False
    if key in known_keys or key in seen_path:
        orig_skipped.append({
            "path": key,
            "reason": "orig_path_already_mapped",
            "mapped_to": mod_to_known.get(known_pairs and key, []),
            "detail": extra,
        })
        return False
    dest = SRC / key
    if dest.exists():
        orig_skipped.append({"path": key, "reason": "dest_exists", "detail": extra})
        return False
    live = [f for f in files if f in live_set and mid_of(f) not in aliased]
    others = [f for f in files if f not in live_set]
    if others:
        orig_skipped.append({
            "path": key,
            "reason": "not_global_unique",
            "live": live,
            "others": [str(x)[:80] for x in list(others)[:6]],
            "detail": extra,
        })
        return False
    if len(live) != 1:
        if live:
            orig_skipped.append({
                "path": key,
                "reason": f"{len(live)}-hit",
                "live": live,
                "detail": extra,
            })
        else:
            orig_skipped.append({"path": key, "reason": "0-hit", "detail": extra})
        return False
    mod = live[0]
    if mod in known_mods or mod in seen_mod:
        orig_skipped.append({
            "path": key,
            "module": mod,
            "reason": "module_already_mapped",
            "mapped_paths": mod_to_known.get(mod, []),
            "detail": extra,
        })
        return False
    orig_pins.append({"path": key, "module": mod, "reason": f"{reason} {extra}".strip()})
    seen_mod.add(mod)
    seen_path.add(key)
    print(f"  PIN {key} -> {mod} [{reason}] {extra}")
    return True


for key, text in missing:
    if skip_name(key):
        continue
    pinned = False
    tkeys = list(dict.fromkeys(T_PAT.findall(text)))
    unique_t = [k for k in tkeys if orig_t[k] == [key] and k not in COMMON_T]
    for k in unique_t:
        if consider(key, t_index.get(k, []), "unique_t", repr(k)):
            pinned = True
            break
    if pinned:
        continue
    for k in dict.fromkeys(list(RES_PAT.findall(text)) + list(MODULE_KEY_PAT.findall(text))):
        if orig_res[k] != [key]:
            continue
        if consider(key, res_index.get(k, []), "unique_module", repr(k)):
            pinned = True
            break
    if pinned:
        continue
    unique_apis = [
        a for a in dict.fromkeys(API_PAT.findall(text) + KAPIS_PAT.findall(text))
        if orig_api[a] == [key]
    ]
    for a in unique_apis:
        if consider(key, api_index.get(a, []), "unique_api", a[:80]):
            pinned = True
            break
    if pinned:
        continue
    for k in dict.fromkeys(DISPLAY_PAT.findall(text)):
        if orig_disp[k] != [key]:
            continue
        if consider(key, disp_index.get(k, []), "unique_displayName", repr(k)):
            pinned = True
            break

print("orig_pins", len(orig_pins), "orig_skipped_logged", len(orig_skipped))

# sample unclassified
classified = (
    {p["module"] for p in babel_pins}
    | {p["module"] for p in lodash_pins}
    | {p["module"] for p in corejs_pins}
    | {p["module"] for p in orig_pins}
)
print("classified", len(classified), "unclassified_live", len(live_names) - len(classified))
print("\n=== sample unclassified heads ===")
shown = 0
unclassified_sample = []
for name in live_names:
    if name in classified:
        continue
    t = leftover_text.get(name, "")
    head = t[:180].replace("\n", " | ")
    rec = {"module": name, "bytes": len(t), "head": head[:160]}
    unclassified_sample.append(rec)
    if shown < 20:
        print(f"  {name} bytes={len(t)} head={head[:160]}")
        shown += 1

report = {
    "live_leftover_count": len(live_names),
    "bundle": live_doc.get("bundle"),
    "unique_files_main_bundle": live_doc.get("unique_files_main_bundle"),
    "babel_pins": babel_pins,
    "babel_skipped": babel_skipped,
    "lodash_pins": lodash_pins,
    "lodash_skipped_sample": lodash_skipped[:20],
    "corejs_pins": corejs_pins,
    "corejs_skipped": corejs_skipped[:40],
    "orig_pins": orig_pins,
    "orig_skipped_mapped": [x for x in orig_skipped if x.get("reason") == "orig_path_already_mapped"][:20],
    "orig_skipped_skip_list": [x for x in orig_skipped if x.get("reason") == "skip-list"][:20],
    "needle_hits": {k: v[:12] + ([f"...{len(v)}"] if len(v) > 12 else []) for k, v in needle_hits.items()},
    "banner_mods": banner_mods[:40],
    "classified_count": len(classified),
    "unclassified_sample": unclassified_sample[:25],
}
OUT.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
print("\nwrote", OUT)
print(json.dumps({
    "live": len(live_names),
    "babel_pins": len(babel_pins),
    "lodash_pins": len(lodash_pins),
    "corejs_pins": len(corejs_pins),
    "orig_pins": len(orig_pins),
    "classified": len(classified),
}, indent=2))
