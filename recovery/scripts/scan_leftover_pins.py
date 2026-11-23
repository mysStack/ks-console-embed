#!/usr/bin/env python3
"""Unique leftover pins in the login/console live graph.

Babel helpers: unique among small leftover files.
Lodash methods: 1:1 against node_modules/lodash/*.js.
core-js: 1:1 against core-js@3.37 modules by target+keys / unique lits.
Orig business: globally unique t()/api among ALL unpacked+promoted, not live-only.
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
NM = APP / "node_modules"

PREFIXES = (
    "pages",
    "components",
    "stores",
    "actions",
    "utils",
    "configs",
    "core",
    "unpacked",
)
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)
IMP_RE = re.compile(
    r"""(?:\bfrom|\bimport\s*\(|\brequire\s*\(|(?:^|\n)\s*import)\s*['"]([^'"]+)['"]""",
    re.M,
)
STR_RE = re.compile(r"""['"]([^'"]{4,})['"]""")
T_PAT = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
ERR_RE = re.compile(r"""throw new (?:TypeError|ReferenceError|Error)\((['"])(.*?)\1\)""")
TARGET_RE = re.compile(
    r"""(?:module8|module_8)\(\{\s*target:\s*['"](\w+)['"]"""
    r"""(?:\s*,\s*proto:\s*(true|false))?(?:\s*,\s*stat:\s*(true|false))?"""
    r"""(?:\s*,\s*global:\s*(true|false))?""",
    re.S,
)
SECOND_KEYS_RE = re.compile(
    r"""(?:module8|module_8)\(\{.*?\}\s*,\s*\{([^}]+)\}""",
    re.S,
)
KEY_NAME_RE = re.compile(r"""(?:^|,)\s*([A-Za-z_$][\w$]*)\s*(?:,|:|\})""")

aliased = set(re.findall(r"module-(\d+)\.js", WEBPACK + "\n" + RECHARTS))
known_pairs = re.findall(
    r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY.read_text(encoding="utf-8")
)
known_mods = {m for _p, m in known_pairs}
known_keys = {p for p, _m in known_pairs}


def mid_of(name: str) -> str:
    m = re.search(r"module-(\d+)\.js", name)
    return m.group(1) if m else ""


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def is_stub(text: str) -> bool:
    return bool(STUB_RE.search(text[:400]))


def try_file(base: Path) -> Path | None:
    if base.is_file():
        return base
    for ext in (".js", ".jsx", ".json"):
        p = Path(str(base) + ext)
        if p.is_file():
            return p
    if base.is_dir():
        for name in ("index.js", "index.jsx"):
            p = base / name
            if p.is_file():
                return p
    return None


def resolve_spec(spec: str, from_path: Path) -> Path | None:
    spec = spec.split("?")[0].split("#")[0]
    if not spec or spec.startswith("named/"):
        return None
    if spec.startswith("./") or spec.startswith("../"):
        base = (from_path.parent / spec).resolve()
        try:
            base.relative_to(SRC.resolve())
        except ValueError:
            return None
        return try_file(base)
    for prefix in PREFIXES:
        if spec == prefix or spec.startswith(prefix + "/"):
            return try_file(SRC / spec)
    return None


print("=== index unpacked ===", flush=True)
unpacked_text = {}
for path in UNPACKED.glob("module-*.js"):
    unpacked_text[path.name] = read_text(path)
print("unpacked", len(unpacked_text), flush=True)

file_text: dict[Path, str] = {}


def walk_from(start: Path) -> set[Path]:
    seen: set[Path] = set()
    stack = [start]
    while stack:
        cur = stack.pop().resolve()
        if cur in seen or not cur.is_file():
            continue
        seen.add(cur)
        text = file_text.get(cur)
        if text is None:
            text = read_text(cur)
            file_text[cur] = text
        mid = mid_of(cur.name)
        if cur.parent == UNPACKED.resolve() and mid in aliased:
            continue
        for spec in IMP_RE.findall(text):
            if spec.startswith("pages/") and "/App" in spec and not spec.startswith(
                "pages/console/"
            ):
                if f'import("{spec}")' in text or f"import('{spec}')" in text:
                    continue
            resolved = resolve_spec(spec, cur)
            if resolved is not None:
                stack.append(resolved)
    return seen


live_files = walk_from(SRC / "bootstrap.js")
leftovers = []
for path in live_files:
    if path.parent != UNPACKED.resolve():
        continue
    if not path.name.startswith("module-"):
        continue
    if mid_of(path.name) in aliased:
        continue
    text = unpacked_text[path.name]
    if is_stub(text):
        continue
    leftovers.append(path.name)
leftovers = sorted(leftovers, key=lambda n: int(mid_of(n)))
leftover_set = set(leftovers)
print("live_files", len(live_files), "leftover_live_non_aliased", len(leftovers))

# ---------- babel helpers among small files ----------
SMALL = 3500
small = {n: unpacked_text[n] for n in leftovers if len(unpacked_text[n]) <= SMALL}
print("small_leftovers", len(small))

BABEL = [
    ("classCallCheck", ("Cannot call a class as a function",)),
    (
        "assertThisInitialized",
        ("this hasn't been initialised - super() hasn't been called",),
    ),
    (
        "inherits",
        ("Super expression must either be null or a function",),
    ),
    (
        "typeof",
        ('typeof Symbol === "function" && typeof Symbol.iterator === "symbol"',),
    ),
    ("getPrototypeOf", ("Object.setPrototypeOf ? Object.getPrototypeOf",)),
    ("setPrototypeOf", ("Object.setPrototypeOf || function",)),
    (
        "asyncToGenerator",
        ('n(i, resolve, reject, l, s, "next", e)',),
    ),
    (
        "interopRequireDefault",
        ("if (e && e.__esModule)", "return {", "default: e"),
    ),
    (
        "initializerWarningHelper",
        ("Decorating class property failed",),
    ),
    (
        "get",
        ("typeof Reflect !== \"undefined\" && Reflect.get",),
    ),
    (
        "createClass",
        ("r.enumerable = r.enumerable || false", "n(e.prototype, t)"),
    ),
    (
        "defineProperty",
        ("if (t in e)", "Object.defineProperty(e, t, {", "writable: true"),
    ),
    (
        "possibleConstructorReturn",
        ('module246(t) !== "object" && typeof t !== "function"', "return module88(e)"),
    ),
    (
        "slicedToArray",
        ("module498(e) || module538(e, t) || module344(e, t) || module499()",),
    ),
    (
        "nonIterableRest",
        ("Invalid attempt to destructure non-iterable instance",),
    ),
    (
        "nonIterableSpread",
        ("Invalid attempt to spread non-iterable instance",),
    ),
    (
        "arrayWithHoles",
        ("Array.isArray(e) ? e : undefined",),
    ),
]

print("\n=== babel helpers unique among small leftovers ===")
babel_pins = []
for helper, needles in BABEL:
    hits = [n for n, t in small.items() if all(s in t for s in needles)]
    print(f"  {helper}: {hits} ({len(hits)})")
    if len(hits) == 1:
        babel_pins.append({"helper": helper, "module": hits[0], "bytes": len(small[hits[0]])})

# slicedToArray composition may miss if child ids differ — detect 4-import || chain
or_chain = []
for n, t in small.items():
    if t.count(" || ") >= 3 and "export default function(e, t)" in t.replace(" ", ""):
        pass
    if re.search(
        r"export default function\(e,\s*t\) \{\s*return module\d+\(e\) \|\| module\d+\(e,\s*t\) \|\| module\d+\(e,\s*t\) \|\| module\d+\(\)",
        t,
        re.S,
    ):
        or_chain.append(n)
print("  slicedToArray_pattern:", or_chain)
if len(or_chain) == 1 and not any(p["helper"] == "slicedToArray" for p in babel_pins):
    babel_pins.append(
        {"helper": "slicedToArray", "module": or_chain[0], "bytes": len(small[or_chain[0]])}
    )

print("babel_pins", len(babel_pins))

print("\n=== small leftover error strings ===")
err_index = defaultdict(list)
for n, t in small.items():
    for m in ERR_RE.finditer(t):
        err_index[m.group(2)].append(n)
for msg, files in sorted(err_index.items(), key=lambda kv: kv[0]):
    if len(files) <= 3:
        print(f"  {len(files)} {msg!r} -> {files}")

# ---------- lodash methods ----------
print("\n=== lodash method 1:1 ===", flush=True)
lodash_dir = NM / "lodash"
lodash_pins = []
if lodash_dir.is_dir():
    def imports_of(text: str) -> list[str]:
        return IMP_RE.findall(text)

    leftover_lits = {n: set(STR_RE.findall(unpacked_text[n])) for n in leftovers}
    lit_to_mods = defaultdict(set)
    for n, lits in leftover_lits.items():
        for s in lits:
            lit_to_mods[s].add(n)

    lodash_method_files = []
    for p in sorted(lodash_dir.glob("*.js")):
        if p.name.startswith("_") or p.name in {
            "lodash.js",
            "core.js",
            "fp.js",
            "index.js",
            "wrapperLodash.js",
            "chain.js",
            "lodash.min.js",
        }:
            continue
        text = read_text(p)
        reqs = re.findall(r"""require\(['"]\./([^'"]+)['"]\)""", text)
        lits = set(STR_RE.findall(text))
        lits -= {
            "use strict",
            "object",
            "function",
            "undefined",
            "exports",
            "module",
            "default",
        }
        lodash_method_files.append((p.name, reqs, lits, text))

    lodash_lit_owners = defaultdict(set)
    for name, _r, lits, _t in lodash_method_files:
        for s in lits:
            lodash_lit_owners[s].add(name)

    raw = []
    for lname, reqs, lits, _t in lodash_method_files:
        unique_lits = [
            s
            for s in lits
            if len(lodash_lit_owners[s]) == 1
            and len(s) >= 10
            and " " in s  # comments / error sentences, not short identifiers
        ]
        if not unique_lits:
            continue
        cand = None
        via = None
        for s in unique_lits:
            mods = {m for m in lit_to_mods.get(s, set()) if m in leftover_set}
            if not mods:
                continue
            if cand is None:
                cand = set(mods)
                via = s
            else:
                cand &= mods
        if cand and len(cand) == 1:
            mod = next(iter(cand))
            # import count should be close to lodash require count
            nimp = len(
                [
                    x
                    for x in imports_of(unpacked_text[mod])
                    if "module-" in x
                ]
            )
            raw.append((lname, mod, via, nimp, len(reqs), len(unique_lits)))

    by_mod = defaultdict(list)
    by_l = defaultdict(list)
    for item in raw:
        by_mod[item[1]].append(item)
        by_l[item[0]].append(item)
    for lname, mod, via, nimp, nreq, nuniq in raw:
        if len(by_mod[mod]) != 1 or len(by_l[lname]) != 1:
            print(f"  SKIP_MULTI {lname} {mod} via={via!r}")
            continue
        if abs(nimp - nreq) > 2 and nuniq < 3:
            print(f"  SKIP_IMPORTS {lname} {mod} imps={nimp} reqs={nreq} via={via!r}")
            continue
        lodash_pins.append(
            {
                "lodash": lname,
                "module": mod,
                "via": via,
                "imports": nimp,
                "requires": nreq,
                "uniq_lits": nuniq,
            }
        )
        print(f"  {mod} -> lodash/{lname} via={via!r} imps={nimp} reqs={nreq}")
print("lodash_pins", len(lodash_pins))

# ---------- core-js entries ----------
print("\n=== core-js entry matches ===", flush=True)
corejs = NM / "core-js"
corejs_pins = []
corejs_version = None
for n in leftovers:
    t = unpacked_text[n]
    m = re.search(r'version:\s*"(\d+\.\d+\.\d+)"', t)
    if m and "zloirock" in t:
        corejs_version = m.group(1)
        print("corejs_version_module", n, corejs_version)
        break

if corejs.is_dir():
    pkg = json.loads(read_text(corejs / "package.json"))
    print("installed_corejs", pkg.get("version"))

    def parse_export_sig(text: str):
        tm = re.search(
            r"""\$\(\{\s*target:\s*['"](\w+)['"]([^}]*)\}\s*,\s*\{([^}]+)\}""",
            text,
            re.S,
        )
        if not tm:
            tm = re.search(
                r"""(?:module8)\(\{\s*target:\s*['"](\w+)['"]([^}]*)\}\s*,\s*\{([^}]+)\}""",
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
        return (target, proto, stat, glob, tuple(keys))

    cj_index = defaultdict(list)
    for p in (corejs / "modules").glob("*.js"):
        sig = parse_export_sig(read_text(p))
        if sig and sig[4]:
            cj_index[sig].append(p.name)

    leftover_sigs = []
    for n in leftovers:
        sig = parse_export_sig(unpacked_text[n])
        if sig and sig[4]:
            leftover_sigs.append((n, sig))

    sig_to_left = defaultdict(list)
    for n, sig in leftover_sigs:
        sig_to_left[sig].append(n)

    print("leftover_export_sigs", len(leftover_sigs), "corejs_export_sigs", len(cj_index))
    for n, sig in leftover_sigs:
        cands = cj_index.get(sig, [])
        lefts = sig_to_left[sig]
        if len(cands) == 1 and len(lefts) == 1:
            corejs_pins.append(
                {
                    "module": n,
                    "corejs": f"core-js/modules/{cands[0]}",
                    "sig": {
                        "target": sig[0],
                        "proto": sig[1],
                        "stat": sig[2],
                        "global": sig[3],
                        "keys": list(sig[4]),
                    },
                }
            )
        elif cands or len(lefts) > 1:
            if len(corejs_pins) < 5 or (cands and lefts):
                pass
    print("corejs_entry_1to1", len(corejs_pins))
    for item in corejs_pins[:40]:
        print(f"  {item['module']} -> {item['corejs']} keys={item['sig']['keys']}")
    # unmatched leftover sigs sample
    unmatched = [
        (n, sig)
        for n, sig in leftover_sigs
        if not any(p["module"] == n for p in corejs_pins)
    ]
    print("unmatched_leftover_sigs", len(unmatched))
    for n, sig in unmatched[:20]:
        print(
            f"  {n} target={sig[0]} proto={sig[1]} stat={sig[2]} keys={sig[4]} "
            f"cj={cj_index.get(sig, [])} copies={sig_to_left[sig]}"
        )
else:
    print("core-js NOT installed")

# ---------- orig globally unique ----------
print("\n=== orig global unique among leftover live ===", flush=True)

def norm_key(rel_posix: str) -> str:
    rel = rel_posix.replace("\\", "/")
    if rel.endswith("/index.jsx"):
        return rel[: -len("/index.jsx")] + ".js"
    if rel.endswith("/index.js"):
        return rel[: -len("/index.js")] + ".js"
    if rel.endswith(".jsx"):
        return rel[:-4] + ".js"
    return rel

t_index = defaultdict(set)
for name, text in unpacked_text.items():
    if is_stub(text):
        continue
    for k in T_PAT.findall(text):
        t_index[k].add(name)
# promoted sources also count as hits (already named)
for folder in ("pages", "components", "stores", "actions", "utils", "configs", "core"):
    d = SRC / folder
    if not d.exists():
        continue
    for p in d.rglob("*.js"):
        text = read_text(p)
        if text.startswith("export { default } from "):
            continue
        for k in T_PAT.findall(text):
            t_index[k].add("PROMOTED:" + p.relative_to(SRC).as_posix())

orig_t = defaultdict(list)
missing = []
for folder in ("components", "pages", "stores", "utils", "hocs", "actions", "configs"):
    d = ORIG / folder
    if not d.exists():
        continue
    for p in d.rglob("*"):
        if not p.is_file() or p.suffix not in {".js", ".jsx"}:
            continue
        if ".test." in p.name:
            continue
        rel = p.relative_to(ORIG).as_posix()
        key = norm_key(rel)
        text = read_text(p)
        for k in T_PAT.findall(text):
            orig_t[k].append(key)
        if key not in known_keys:
            missing.append((key, text))

print("missing_orig", len(missing))
orig_pins = []
COMMON_T = {
    "NAME", "TYPE", "STATUS", "CREATE", "EDIT", "DELETE", "SAVE", "CANCEL",
    "CONFIRM", "OK", "CLOSE", "SEARCH", "REFRESH", "MORE", "ACTION", "ACTIONS",
}
for key, text in missing:
    tkeys = list(dict.fromkeys(T_PAT.findall(text)))
    unique_t = [k for k in tkeys if orig_t[k] == [key] and k not in COMMON_T]
    for k in unique_t:
        files = t_index.get(k, set())
        live = [f for f in files if f in leftover_set]
        promoted = [f for f in files if f.startswith("PROMOTED:")]
        others = [f for f in files if f not in leftover_set and not f.startswith("PROMOTED:")]
        if promoted or others:
            continue
        if len(live) == 1:
            orig_pins.append({"path": key, "module": live[0], "reason": f"unique_t {k}"})
            print(f"  PIN {key} -> {live[0]} unique_t {k}")
            break
print("orig_pins", len(orig_pins))

out = {
    "leftover_live_non_aliased": len(leftovers),
    "corejs_version": corejs_version,
    "babel_pins": babel_pins,
    "lodash_pins": lodash_pins,
    "corejs_pins": corejs_pins,
    "orig_pins": orig_pins,
}
(APP / "LEFTOVER_PINS.json").write_text(json.dumps(out, indent=2) + "\n", encoding="utf-8")
print("\nwrote LEFTOVER_PINS.json")
