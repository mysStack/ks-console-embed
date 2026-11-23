#!/usr/bin/env python3
"""Classify leftover module-N.js in the login/dashboard live import graph.

Do not invent orig business paths. Unique orig / unique known helper / confirmed
vendor only. Skip 2-hit, 0-hit, KSE-only, and named skip-list families.
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
STR_RE = re.compile(r"""['"]([^'"]{6,})['"]""")
T_PAT = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
API_PAT = re.compile(r"""['"]((?:/kapis|/apis|/api)[^'"]{6,})['"]""")
KAPIS_PAT = re.compile(r"""['"](kapis/[^'"]{6,})['"]""")
RES_PAT = re.compile(
    r"""(?:this|e|t|n)\.(?:resourceName|module)\s*=\s*['"]([^'"]+)['"]"""
)
IDENT_PAT = re.compile(r"\b([A-Z][A-Za-z0-9]{10,}|[a-z][A-Za-z0-9]{14,})\b")

SKIP_NAME_FRAGS = (
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
)
COMMON_T = {
    "NAME",
    "TYPE",
    "STATUS",
    "CREATE",
    "EDIT",
    "DELETE",
    "SAVE",
    "CANCEL",
    "CONFIRM",
    "OK",
    "CLOSE",
    "SEARCH",
    "REFRESH",
    "MORE",
    "ACTION",
    "ACTIONS",
    "CREATED_AT",
    "CREATION_TIME",
    "DESCRIPTION",
    "PROJECT",
    "CLUSTER",
    "WORKSPACE",
    "NAMESPACE",
    "USERNAME",
    "PASSWORD",
    "EMAIL",
    "ROLE",
}

BABEL_HELPERS = {
    "classCallCheck": (
        "Cannot call a class as a function",
        'throw new TypeError("Cannot call a class as a function")',
    ),
    "possibleConstructorReturn": (
        "this hasn't been initialised - super() hasn't been called",
    ),
    "inherits": (
        "Super expression must either be null or a function",
    ),
    "assertThisInitialized": (
        "this hasn't been initialised",
    ),
    "typeof": (
        'typeof Symbol === "function" && typeof Symbol.iterator === "symbol"',
    ),
    "getPrototypeOf": (
        "Object.setPrototypeOf ? Object.getPrototypeOf",
    ),
    "setPrototypeOf": (
        "Object.setPrototypeOf || function",
    ),
    "createClass": (
        "Object.defineProperty(Constructor.prototype, protoProps",
        "function defineProperties(target, props)",
    ),
    "get": (
        "typeof Reflect !== \"undefined\" && Reflect.get",
    ),
    "set": (
        "typeof Reflect !== \"undefined\" && Reflect.set",
    ),
    "slicedToArray": (
        "arrayWithHoles",
        "iterableToArrayLimit",
        "unsupported iterable type",
    ),
    "toConsumableArray": (
        "arrayWithoutHoles",
        "iterableToArray",
        "nonIterableSpread",
    ),
    "arrayWithHoles": ("Array.isArray(arr) ? arr : void 0",),
    "arrayWithoutHoles": (
        "Array.isArray(arr) ? arrayLikeToArray(arr) : void 0",
    ),
    "iterableToArray": (
        "Symbol.iterator in Object(iter)",
        "Array.from(iter)",
    ),
    "nonIterableSpread": (
        "Invalid attempt to spread non-iterable instance",
    ),
    "nonIterableRest": (
        "Invalid attempt to destructure non-iterable instance",
    ),
    "iterableToArrayLimit": (
        "var steps = n === void 0 ? Infinity : n",
        "iterator.return",
    ),
    "arrayLikeToArray": (
        "for (var i = 0; i < arr.length; i++) { arr2[i] = arr[i]; }",
    ),
    "objectWithoutProperties": (
        "objectWithoutPropertiesLoose",
    ),
    "objectWithoutPropertiesLoose": (
        "Object.prototype.hasOwnProperty.call(source, key)",
        "target[key] = source[key]",
    ),
    "objectSpread": (
        "Object.assign.apply(Object",
        "defineEnumerableProperties",
    ),
    "defineProperty": (
        'desc = Object.defineProperty && Object.getOwnPropertyDescriptor',
        "enumerable: true, configurable: true, writable: true",
    ),
    "extends": (
        "Object.assign || function (target)",
    ),
    "asyncToGenerator": (
        "return new (P || (P = Promise))",
        "function fulfilled(value)",
        "function step(result)",
    ),
    "awaitAsyncGenerator": ("n[Symbol.asyncIterator]",),
    "asyncGeneratorDelegate": ("delegate.iterator",),
    "asyncIterator": ("Symbol.asyncIterator",),
    "AwaitValue": ("this.wrapped = wrapped",),
    "wrapAsyncGenerator": ("AsyncGenerator",),
    "construct": (
        "typeof Reflect !== \"undefined\" && Reflect.construct",
        "isNativeReflectConstruct",
    ),
    "isNativeReflectConstruct": (
        "Date.prototype.toString.call(Reflect.construct(Date, [], function () {}",
    ),
    "wrapNativeSuper": (
        "setPrototypeOf(Class, Super)",
        "isNativeFunction",
    ),
    "isNativeFunction": (
        "Function.toString.call(fn).indexOf(\"[native code]\")",
    ),
    "taggedTemplateLiteral": (
        "Object.freeze(raw)",
        "strings.raw = raw",
    ),
    "taggedTemplateLiteralLoose": ("strings.raw = raw",),
    "toArray": ("Array.from(arr)",),
    "toPropertyKey": ("toPrimitive",),
    "toPrimitive": (
        'hint === "string" ? String : Number',
    ),
    "createForOfIteratorHelper": (
        "err = { error: err }",
        "unsupported Symbol.iterator",
    ),
    "createForOfIteratorHelperLoose": (
        "var i, arr, s, done = true",
    ),
    "skipFirstGeneratorNext": ("gen.next()",),
    "superPropBase": ("getPrototypeOf(object)",),
    "readOnlyError": ("is read-only",),
    "writeOnlyError": ("is write-only",),
    "classPrivateFieldLooseBase": ("classCheckPrivateStaticAccess",),
    "classPrivateFieldLooseKey": ("__private_",),
    "classStaticPrivateFieldSpecGet": ("classCheckPrivateStaticAccess",),
    "decorate": (
        "i >= 0; i -= 2",
        "Object.getOwnPropertyDescriptor",
    ),
    "defaults": ("for (var i = 1; i < arguments.length; i++)",),
    "defineEnumerableProperties": ("Object.defineProperties",),
    "initializerDefineProperty": ("descriptor.initializer",),
    "applyDecoratedDescriptor": (
        "desc.initializer",
        "Object.defineProperty(target, property, desc)",
    ),
    "initializerWarningHelper": (
        "Decorating class property failed",
    ),
}

aliased = set(re.findall(r"module-(\d+)\.js", WEBPACK + "\n" + RECHARTS))
known_pairs = re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY.read_text(encoding="utf-8"))
known_mods = {m for _p, m in known_pairs}
known_keys = {p for p, _m in known_pairs}
mod_to_known = defaultdict(list)
for p, m in known_pairs:
    mod_to_known[m].append(p)


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


print("=== index src files ===", flush=True)
file_text: dict[Path, str] = {}
children: dict[Path, list[Path]] = {}
unpacked_files = list(UNPACKED.glob("module-*.js"))
roots = [
    SRC / "bootstrap.js",
    SRC / "unpacked" / "entry.js",
]
for folder in PREFIXES:
    d = SRC / folder
    if d.is_dir():
        roots.extend(d.rglob("*.js"))

# Only need texts for files we will walk; still index unpacked leftovers for matching.
for path in unpacked_files:
    file_text[path] = read_text(path)

print("unpacked", len(unpacked_files), flush=True)

LAZY_FOLLOW = {
    "pages/console/App",
    "pages/console/routes",
    "pages/console/containers/Dashboard",
    "pages/login",
    "unpacked/module-776.js",
}


def should_follow_dynamic(spec: str) -> bool:
    if spec in LAZY_FOLLOW:
        return True
    if spec.startswith("pages/console/"):
        return True
    return False


def walk_from(start: Path) -> set[Path]:
    seen: set[Path] = set()
    stack = [start]
    while stack:
        cur = stack.pop()
        cur = cur.resolve()
        if cur in seen:
            continue
        if not cur.exists() or not cur.is_file():
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
            # skip other lazy apps
            if "import(" in text:
                pass
            resolved = resolve_spec(spec, cur)
            if resolved is None:
                continue
            # If this occurrence is a dynamic import of a non-console app, skip.
            # Cheap check: if spec is pages/<other>/App, don't follow unless console/login.
            if spec.startswith("pages/") and "/App" in spec and not spec.startswith(
                "pages/console/"
            ):
                # only skip if it appears as import("pages/x/App")
                if f'import("{spec}")' in text or f"import('{spec}')" in text:
                    if spec not in LAZY_FOLLOW:
                        continue
            stack.append(resolved)
    return seen


bootstrap = SRC / "bootstrap.js"
live_files = walk_from(bootstrap)
print("live_files", len(live_files), flush=True)

leftovers = []
promoted_live = defaultdict(int)
named_live = 0
stub_live = 0
for path in live_files:
    rel = path.relative_to(SRC).as_posix()
    top = rel.split("/")[0]
    if top == "named":
        named_live += 1
        continue
    if top in ("pages", "components", "stores", "actions", "utils", "configs", "core"):
        promoted_live[top] += 1
        continue
    if top == "unpacked" and path.name.startswith("module-") and path.name.endswith(".js"):
        text = file_text[path]
        if is_stub(text):
            stub_live += 1
            continue
        leftovers.append(path.name)

leftovers = sorted(leftovers, key=lambda n: int(mid_of(n)))
print(
    json.dumps(
        {
            "live_files": len(live_files),
            "promoted_live": dict(promoted_live),
            "stub_live": stub_live,
            "named_live": named_live,
            "leftover_live": len(leftovers),
        },
        indent=2,
    )
)

leftover_set = set(leftovers)
leftover_text = {n: file_text[UNPACKED / n] for n in leftovers}

# importers among live leftovers + promoted
importers = defaultdict(list)
for path, text in file_text.items():
    if path not in live_files:
        continue
    for spec in IMP_RE.findall(text):
        if spec.startswith("unpacked/module-") or spec.startswith("./module-"):
            name = spec.rsplit("/", 1)[-1]
            if name in leftover_set:
                importers[name].append(path.relative_to(SRC).as_posix())

print("\n=== babel helper unique matches ===")
babel_hits = []
for helper, needles in BABEL_HELPERS.items():
    matches = []
    for name, text in leftover_text.items():
        if all(n in text for n in needles):
            matches.append(name)
    print(f"  {helper}: {matches[:8]} ({len(matches)})")
    if len(matches) == 1:
        babel_hits.append((helper, matches[0]))

# uniqueness both ways
helper_for = {}
for helper, name in babel_hits:
    helper_for.setdefault(name, []).append(helper)
babel_unique = []
for name, helpers in helper_for.items():
    if len(helpers) == 1:
        babel_unique.append((helpers[0], name))
    else:
        print(f"  MULTI_HELPER {name} -> {helpers}")
print("babel_unique", len(babel_unique))
for helper, name in babel_unique:
    imps = sorted(set(importers[name]))[:6]
    print(f"  {name} -> {helper} importers={len(set(importers[name]))} sample={imps}")


def collect_lits(text: str) -> set[str]:
    return set(STR_RE.findall(text))


print("\n=== lodash unique literal matches ===", flush=True)
lodash_dir = NM / "lodash"
lodash_unique = []
if lodash_dir.is_dir():
    lodash_files = []
    for p in lodash_dir.glob("*.js"):
        if p.name.startswith("_") or p.name in ("lodash.js", "core.js", "fp.js"):
            continue
        lits = collect_lits(read_text(p))
        lits = {s for s in lits if s not in {"use strict", "object", "function", "undefined"}}
        lodash_files.append((p.name, lits, p))

    leftover_lits = {n: collect_lits(t) for n, t in leftover_text.items()}
    # index leftover by each literal
    lit_index = defaultdict(set)
    for n, lits in leftover_lits.items():
        for s in lits:
            lit_index[s].add(n)

    lodash_lit_index = defaultdict(set)
    for name, lits, _p in lodash_files:
        for s in lits:
            lodash_lit_index[s].add(name)

    for lname, lits, _p in lodash_files:
        unique_lits = [
            s
            for s in lits
            if len(lodash_lit_index[s]) == 1
            and len(s) >= 8
            and not s.startswith(".")
            and s not in {"prototype", "constructor"}
        ]
        cand_mods = None
        used = None
        for s in unique_lits:
            mods = lit_index.get(s, set())
            if not mods:
                continue
            if cand_mods is None:
                cand_mods = set(mods)
                used = s
            else:
                cand_mods &= mods
        if unique_lits and cand_mods and len(cand_mods) == 1:
            mod = next(iter(cand_mods))
            lodash_unique.append((lname, mod, used, len(unique_lits)))

    # 1:1 filter
    by_mod = defaultdict(list)
    by_lname = defaultdict(list)
    for item in lodash_unique:
        by_mod[item[1]].append(item)
        by_lname[item[0]].append(item)
    lodash_1to1 = []
    seen_mod = set()
    seen_l = set()
    for lname, mod, used, nuniq in lodash_unique:
        if lname in seen_l or mod in seen_mod:
            continue
        if len(by_mod[mod]) != 1 or len(by_lname[lname]) != 1:
            continue
        seen_l.add(lname)
        seen_mod.add(mod)
        lodash_1to1.append((lname, mod, used, nuniq))
    print("lodash_raw_hits", len(lodash_unique), "lodash_1to1", len(lodash_1to1))
    for lname, mod, used, nuniq in lodash_1to1[:60]:
        print(f"  {mod} -> lodash/{lname} via {used!r} uniq_lits={nuniq} importers={len(set(importers[mod]))}")
else:
    lodash_1to1 = []
    print("NO lodash dir")

print("\n=== babel/runtime helper file names present ===")
rt = NM / "@babel/runtime/helpers"
if rt.is_dir():
    names = sorted(p.stem for p in rt.glob("*.js") if not p.name.startswith("esm"))
    print("runtime_helpers", len(names))
    missing = [h for h, _n in babel_unique if h not in names]
    print("unique_helpers_missing_from_runtime", missing)
else:
    print("NO @babel/runtime/helpers")

print("\n=== vendor banners in leftover live ===")
banner_re = re.compile(
    r"(?:@license|Copyright \(c\)|Licensed under the|SPDX-License-Identifier|MIT License)[^\n]{0,120}",
    re.I,
)
shown = 0
for name in leftovers:
    text = leftover_text[name][:4000]
    if not banner_re.search(text) and "webpackUniversalModuleDefinition" not in text:
        continue
    banners = [m.group(0)[:120] for m in banner_re.finditer(text)]
    print(f"  {name} bytes={len(leftover_text[name])} importers={len(set(importers[name]))} banner={banners[:2]}")
    shown += 1
    if shown >= 40:
        break
print("banner_shown", shown)

print("\n=== extra vendor needles in leftover live ===")
NEEDLES = [
    ("filesize", "filesize"),
    ("js-cookie", "js-cookie"),
    ("uuid", "xxxxxxxx-xxxx-4xxx"),
    ("tinycolor", "tinycolor"),
    ("JSEncrypt", "JSEncrypt"),
    ("cronstrue", "cronstrue"),
    ("JSZip", "JSZip"),
    ("ipaddr", "ipaddr.js"),
    ("localforage", "localforage"),
    ("axios", "axios"),
    ("js-yaml leftover", "js-yaml"),
    ("Base64 leftover", "Base64"),
    ("tiny-invariant", "Invariant failed"),
    ("object-assign", "object-assign"),
    ("hoist-non-react-statics", "hoist-non-react-statics"),
    ("react-lifecycles", "react-lifecycles-compat"),
    ("warning()", "warning:"),
    ("prop-types leftover", "prop-types"),
    ("classnames leftover", "classnames"),
    ("qs leftover", "stringify.parse"),
    ("LineChart", 'chartName: "LineChart"'),
    ("DraggableCore", "DraggableCore"),
    ("jwt", "Invalid token specified"),
    ("semver leftover", "SEMVER"),
    ("core-js shared", "__core-js_shared__"),
    ("core-js export target", "target: \"Array\""),
]
for label, needle in NEEDLES:
    hits = [n for n, t in leftover_text.items() if needle in t]
    if hits:
        print(f"  {label}: {len(hits)} sample={hits[:8]}")

print("\n=== unique orig pins among leftover live ===", flush=True)

def norm_key(rel_posix: str) -> str:
    rel = rel_posix.replace("\\", "/")
    if rel.endswith("/index.jsx"):
        return rel[: -len("/index.jsx")] + ".js"
    if rel.endswith("/index.js"):
        return rel[: -len("/index.js")] + ".js"
    if rel.endswith(".jsx"):
        return rel[:-4] + ".js"
    return rel


orig_files = []
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
        orig_files.append((rel, norm_key(rel), p))

missing = [(rel, key, p) for rel, key, p in orig_files if key not in known_keys]
print("orig_scanned", len(orig_files), "known_keys", len(known_keys), "missing", len(missing))

t_index = defaultdict(set)
api_index = defaultdict(set)
str_index = defaultdict(set)
res_index = defaultdict(set)
# index ALL unpacked (not only leftovers) so uniqueness is global
for path in unpacked_files:
    name = path.name
    text = file_text[path]
    if is_stub(text):
        continue
    for k in T_PAT.findall(text):
        t_index[k].add(name)
    for k in API_PAT.findall(text) + KAPIS_PAT.findall(text):
        api_index[k].add(name)
    for k in STR_RE.findall(text):
        str_index[k].add(name)
    for k in RES_PAT.findall(text):
        res_index[k].add(name)

orig_t = defaultdict(list)
orig_api = defaultdict(list)
orig_str = defaultdict(list)
orig_texts = {}
for rel, key, p in orig_files:
    text = read_text(p)
    orig_texts[key] = text
    for k in T_PAT.findall(text):
        orig_t[k].append(key)
    for a in API_PAT.findall(text) + KAPIS_PAT.findall(text):
        orig_api[a].append(key)
    for s in STR_RE.findall(text):
        orig_str[s].append(key)


def skip_name(key: str) -> bool:
    return any(frag.lower() in key.lower() for frag in SKIP_NAME_FRAGS)


def unnamed_live(files):
    out = []
    for f in files:
        if f not in leftover_set:
            continue
        if mid_of(f) in aliased:
            continue
        out.append(f)
    return sorted(set(out), key=lambda s: int(mid_of(s)))


pins = []


def consider(key, files, reason, extra=""):
    if skip_name(key):
        return
    live = unnamed_live(files)
    if len(live) == 1:
        pins.append((key, live[0], f"{reason} {extra}".strip()))
        print(f"  PIN {key} -> {live[0]} [{reason}] {extra}")
    elif 2 <= len(live) <= 4:
        print(f"  MULTI {len(live)} {key} -> {live} [{reason}] {extra}")


for rel, key, p in missing:
    text = orig_texts[key]
    tkeys = list(dict.fromkeys(T_PAT.findall(text)))
    unique_t = [k for k in tkeys if orig_t[k] == [key] and k not in COMMON_T]
    pinned = False
    for k in unique_t:
        consider(key, t_index.get(k, []), "unique_t", repr(k))
        if any(x[0] == key for x in pins):
            pinned = True
            break
    if pinned:
        continue
    for k in dict.fromkeys(RES_PAT.findall(text)):
        consider(key, res_index.get(k, []), "resource/module", repr(k))
        if any(x[0] == key for x in pins):
            pinned = True
            break
    if pinned:
        continue
    unique_apis = [
        a
        for a in dict.fromkeys(API_PAT.findall(text) + KAPIS_PAT.findall(text))
        if orig_api[a] == [key]
    ]
    for a in unique_apis:
        consider(key, api_index.get(a, []), "unique_api", a[:80])
        if any(x[0] == key for x in pins):
            pinned = True
            break
    if pinned:
        continue
    for s in dict.fromkeys(STR_RE.findall(text)):
        if s in COMMON_T or len(s) < 12:
            continue
        files = str_index.get(s, set())
        if len(files) == 1 and orig_str[s] == [key] and next(iter(files)) in leftover_set:
            consider(key, files, "unique_str", s)
            if any(x[0] == key for x in pins):
                break

print("orig_pin_count", len({(k, m) for k, m, _r in pins}))

print("\n=== leftover live size buckets ===")
cssish = 0
tiny = 0
helperish = 0
for name in leftovers:
    text = leftover_text[name]
    if text.lstrip().startswith("export default {") and "import " not in text.split("\n", 1)[0]:
        cssish += 1
    if len(text) < 400:
        tiny += 1
    if name in {n for _h, n in babel_unique}:
        helperish += 1
print("cssish", cssish, "tiny<400", tiny, "babel_unique_in_live", helperish)

# sample leftover heads not classified
classified = {n for _h, n in babel_unique} | {m for _l, m, _u, _k in lodash_1to1} | {m for _k, m, _r in pins}
print("classified", len(classified), "unclassified", len(leftovers) - len(classified))
print("\n=== sample unclassified leftover heads ===")
shown = 0
for name in leftovers:
    if name in classified:
        continue
    text = leftover_text[name]
    head = text[:180].replace("\n", " | ")
    print(f"  {name} bytes={len(text)} importers={len(set(importers[name]))} head={head[:160]}")
    shown += 1
    if shown >= 25:
        break

out = {
    "leftover_live": leftovers,
    "babel_unique": [{"helper": h, "module": m} for h, m in babel_unique],
    "lodash_1to1": [
        {"lodash": l, "module": m, "via": u, "uniq_lits": n} for l, m, u, n in lodash_1to1
    ],
    "orig_pins": [{"path": k, "module": m, "reason": r} for k, m, r in pins],
}
(APP / "LIVE_LEFTOVERS.json").write_text(json.dumps(out, indent=2) + "\n", encoding="utf-8")
print("\nwrote LIVE_LEFTOVERS.json")
