#!/usr/bin/env python3
"""Next leftover slice: unique core-js3 internals (substring), unique orig, vendor-in-npm.

Uniqueness is GLOBAL among all non-stub unpacked. Do not invent orig paths.
Do not alias core-js@2/library. Do not invent npm packages.
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
KNOWN_PY = ROOT / "recovery/scripts/add_known_named.py"
WEBPACK = (APP / "webpack.config.js").read_text(encoding="utf-8")
RECHARTS = (APP / "recharts-aliases.js").read_text(encoding="utf-8")
COREJS = APP / "corejs-aliases.js"
LIVE_JSON = APP / "LIVE_UNPACKED.json"
OUT = APP / "LIVE_LEFTOVER_MORE.json"

STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)
ERR_RE = re.compile(
    r"""throw new (?:TypeError|ReferenceError|RangeError|Error)\((['"])(.*?)\1\)"""
)
STR_RE = re.compile(r"""['"]([^'"]{10,})['"]""")
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

# packages already in package.json / node_modules — confirm leftover, never invent
VENDOR_PKG_NEEDLES = [
    ("filesize", "filesize", ("filesize",)),
    ("js-cookie", "js-cookie", ("js-cookie", "Cookies")),
    ("uuid", "uuid", ("xxxxxxxx-xxxx-4xxx",)),
    ("tinycolor2", "tinycolor2", ("tinycolor",)),
    ("jsencrypt", "jsencrypt", ("JSEncrypt",)),
    ("cronstrue", "cronstrue", ("cronstrue",)),
    ("jszip", "jszip", ("JSZip",)),
    ("ipaddr.js", "ipaddr.js", ("ipaddr.js",)),
    ("localforage", "localforage", ("localforage",)),
    ("axios", "axios", ("axios",)),
    ("tiny-invariant", "tiny-invariant", ("Invariant failed",)),
    ("object-assign", "object-assign", ("object-assign",)),
    ("hoist-non-react-statics", "hoist-non-react-statics", ("hoist-non-react-statics",)),
    ("react-lifecycles-compat", "react-lifecycles-compat", ("react-lifecycles-compat",)),
    ("numeral", "numeral", ("numeral",)),
    ("clipboard", "clipboard", ("clipboard.js",)),
    ("html2canvas", "html2canvas", ("html2canvas",)),
    ("sockjs-client", "sockjs-client", ("sockjs",)),
    ("pako", "pako", ("pako",)),
    ("cron-parser", "cron-parser", ("Invalid cron expression",)),
]


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

print("=== load live leftover list ===", flush=True)
live_doc = json.loads(LIVE_JSON.read_text(encoding="utf-8"))
live_names = live_doc["leftover_live"]
live_set = set(live_names)
print("live_leftovers", len(live_names), "already_aliased_in_live",
      sum(1 for n in live_names if mid_of(n) in aliased), "bundle", live_doc.get("bundle"))

print("=== index unpacked ===", flush=True)
unpacked: dict[str, str] = {}
for path in UNPACKED.glob("module-*.js"):
    text = read_text(path)
    if is_stub(text):
        continue
    unpacked[path.name] = text
print("real_unpacked", len(unpacked))

leftover_live = {
    n: unpacked[n]
    for n in live_names
    if n in unpacked and mid_of(n) not in aliased
}
print("live_unaliased", len(leftover_live))

# ---------- core-js3 internals by unique substring ----------
print("\n=== core-js3 unique substring pins ===", flush=True)
cj3 = NM / "core-js3"
cj2 = NM / "core-js"
cj3_files: dict[str, str] = {}
if cj3.is_dir():
    for p in cj3.rglob("*.js"):
        rel = p.relative_to(cj3).as_posix()
        if rel.startswith(("modules/", "internals/", "es/", "web/", "actual/")):
            cj3_files[rel] = read_text(p)
print("cj3_files", len(cj3_files))
cj2_files: dict[str, str] = {}
if cj2.is_dir():
    for p in list(cj2.rglob("*.js")):
        rel = p.relative_to(cj2).as_posix()
        if "min.js" in rel or rel.startswith("client/"):
            continue
        cj2_files[rel] = read_text(p)
print("cj2_files", len(cj2_files))

# unique errors among ALL unpacked
err_owners = defaultdict(set)
for n, t in unpacked.items():
    for m in ERR_RE.finditer(t):
        err_owners[m.group(2)].add(n)

corejs_pins = []
corejs_skipped = []
seen_mod = set()
seen_spec = set()


def consider_corejs(mod: str, spec: str, via: str, reason: str) -> bool:
    if mod in seen_mod or spec in seen_spec:
        return False
    if mid_of(mod) in aliased:
        return False
    npm = NM / spec
    if not npm.is_file():
        corejs_skipped.append({"module": mod, "spec": spec, "reason": "missing_npm", "via": via})
        return False
    if spec.startswith("core-js3/library") or "/library/" in spec:
        return False
    corejs_pins.append({"module": mod, "corejs": spec, "via": via, "reason": reason, "bytes": len(unpacked[mod])})
    seen_mod.add(mod)
    seen_spec.add(spec)
    print(f"  PIN {mod} -> {spec} [{reason}] {via[:70]!r}")
    return True


print("unique leftover errors", sum(1 for v in err_owners.values() if len(v) == 1))
for msg, owners in sorted(err_owners.items(), key=lambda kv: kv[0]):
    if len(owners) != 1:
        continue
    mod = next(iter(owners))
    if mod not in leftover_live:
        continue
    c3 = [rel for rel, t in cj3_files.items() if msg in t]
    c2 = [rel for rel, t in cj2_files.items() if msg in t]
    if len(c3) != 1:
        corejs_skipped.append({
            "module": mod, "error": msg, "reason": f"cj3_hits={len(c3)}",
            "corejs3": c3[:6], "corejs2": c2[:4],
        })
        continue
    target = c3[0]
    if c2 and not target.startswith("internals/") and not target.startswith("modules/"):
        corejs_skipped.append({"module": mod, "error": msg, "reason": "v2_dual_non_entry", "corejs3": target, "corejs2": c2[:4]})
        continue
    consider_corejs(mod, "core-js3/" + target, msg, "unique_error_substr")

# unique long literals in small leftovers vs internals 1:1
print("\n=== unique lits vs cj3 internals ===", flush=True)
lit_owners = defaultdict(set)
for n, t in unpacked.items():
    if len(t) > 6000:
        continue
    for s in STR_RE.findall(t):
        if s.startswith(("unpacked/", "module-", "pages/", "components/")):
            continue
        lit_owners[s].add(n)

lit_cj3 = defaultdict(set)
for rel, t in cj3_files.items():
    if not rel.startswith("internals/"):
        continue
    for s in STR_RE.findall(t):
        lit_cj3[s].add(rel)

lit_added = 0
for s, owners in lit_owners.items():
    if len(owners) != 1:
        continue
    mod = next(iter(owners))
    if mod not in leftover_live or mod in seen_mod:
        continue
    c3 = lit_cj3.get(s, set())
    if len(c3) != 1:
        continue
    target = next(iter(c3))
    c2 = [rel for rel, t in cj2_files.items() if s in t]
    # dual v2 internals: still OK to alias leftover uniquely to v3 file of same unique lit
    # but skip if the leftover is a core-js/library copy
    if "core-js/library" in unpacked[mod]:
        continue
    if consider_corejs(mod, "core-js3/" + target, s, "unique_lit_internal"):
        lit_added += 1
print("lit_pins_added", lit_added)

# small-file structural fingerprints that are unique in leftover AND unique in cj3 internals
STRUCT = [
    (
        "module.exports = function (exec) {",
        "try { return !!exec(); }",
        "internals/fails.js",
    ),
]
print("\n=== structural internals ===")
# auto: leftover files < 250 bytes, compare unique 40+ char lines to cj3 internals
line_owners = defaultdict(set)
for n, t in unpacked.items():
    if len(t) > 2500:
        continue
    for line in t.splitlines():
        s = line.strip()
        if len(s) < 40:
            continue
        if s.startswith(("import ", "export {", "const module", "require(")):
            continue
        line_owners[s].add(n)

line_cj3 = defaultdict(set)
for rel, t in cj3_files.items():
    if not rel.startswith("internals/"):
        continue
    for line in t.splitlines():
        s = line.strip()
        if len(s) < 40:
            continue
        line_cj3[s].add(rel)

struct_added = 0
for s, owners in line_owners.items():
    if len(owners) != 1:
        continue
    mod = next(iter(owners))
    if mod not in leftover_live or mod in seen_mod:
        continue
    c3 = line_cj3.get(s, set())
    if len(c3) != 1:
        continue
    target = next(iter(c3))
    if consider_corejs(mod, "core-js3/" + target, s, "unique_line_internal"):
        struct_added += 1
print("struct_pins_added", struct_added)

# 1:1 module/spec already enforced by seen_*

# ---------- vendor in existing node_modules ----------
print("\n=== vendor packages present in node_modules ===", flush=True)
vendor_pins = []
vendor_skipped = []
for pkg, npm_name, needles in VENDOR_PKG_NEEDLES:
    present = (NM / npm_name).exists()
    hits = []
    for needle in needles:
        hits.extend(n for n, t in leftover_live.items() if needle in t)
    hits = list(dict.fromkeys(hits))
    print(f"  {pkg} npm={present} live_hits={hits[:8]} n={len(hits)}")
    if not present:
        if hits:
            vendor_skipped.append({"pkg": pkg, "reason": "not_in_node_modules", "hits": hits[:8]})
        continue
    if len(hits) != 1:
        if hits:
            vendor_skipped.append({"pkg": pkg, "reason": f"{len(hits)}-hit", "hits": hits[:12]})
        continue
    vendor_pins.append({"module": hits[0], "pkg": npm_name, "via": needles[0]})
    print(f"    PIN {hits[0]} -> {npm_name}")

# ---------- orig unique ----------
print("\n=== orig unique t/api among leftover live ===", flush=True)
t_index = defaultdict(set)
api_index = defaultdict(set)
res_index = defaultdict(set)
disp_index = defaultdict(set)
for name, text in unpacked.items():
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

print("missing_orig", len(missing), "known_keys", len(known_keys))

orig_pins = []
orig_skipped = []
seen_opath = set()
seen_omod = set()


def consider_orig(key: str, files, reason: str, extra: str) -> bool:
    if skip_name(key):
        orig_skipped.append({"path": key, "reason": "skip-list", "detail": extra})
        return False
    if key in known_keys or key in seen_opath:
        orig_skipped.append({"path": key, "reason": "already_mapped", "detail": extra})
        return False
    dest = SRC / key
    if dest.exists():
        orig_skipped.append({"path": key, "reason": "dest_exists", "detail": extra})
        return False
    live = [f for f in files if f in leftover_live]
    others = [f for f in files if f not in leftover_live]
    if others:
        orig_skipped.append({
            "path": key, "reason": "not_global_unique",
            "live": live, "others": [str(x)[:80] for x in list(others)[:4]], "detail": extra,
        })
        return False
    if len(live) != 1:
        orig_skipped.append({"path": key, "reason": f"{len(live)}-hit", "live": live, "detail": extra})
        return False
    mod = live[0]
    if mod in known_mods or mod in seen_omod:
        orig_skipped.append({"path": key, "module": mod, "reason": "module_already_mapped", "detail": extra})
        return False
    orig_pins.append({"path": key, "module": mod, "reason": f"{reason} {extra}".strip()})
    seen_opath.add(key)
    seen_omod.add(mod)
    print(f"  PIN {key} -> {mod} [{reason}] {extra}")
    return True


for key, text in missing:
    if skip_name(key):
        continue
    pinned = False
    unique_t = [k for k in dict.fromkeys(T_PAT.findall(text)) if orig_t[k] == [key] and k not in COMMON_T]
    for k in unique_t:
        if consider_orig(key, t_index.get(k, []), "unique_t", repr(k)):
            pinned = True
            break
    if pinned:
        continue
    for k in dict.fromkeys(list(RES_PAT.findall(text)) + list(MODULE_KEY_PAT.findall(text))):
        if orig_res[k] != [key]:
            continue
        if consider_orig(key, res_index.get(k, []), "unique_module", repr(k)):
            pinned = True
            break
    if pinned:
        continue
    unique_apis = [
        a for a in dict.fromkeys(API_PAT.findall(text) + KAPIS_PAT.findall(text))
        if orig_api[a] == [key]
    ]
    for a in unique_apis:
        if consider_orig(key, api_index.get(a, []), "unique_api", a[:80]):
            pinned = True
            break
    if pinned:
        continue
    for k in dict.fromkeys(DISPLAY_PAT.findall(text)):
        if orig_disp[k] != [key]:
            continue
        if consider_orig(key, disp_index.get(k, []), "unique_displayName", repr(k)):
            break

print("orig_pins", len(orig_pins), "orig_skipped", len(orig_skipped))
print("corejs_pins", len(corejs_pins), "vendor_pins", len(vendor_pins))

report = {
    "live_unaliased": len(leftover_live),
    "bundle": live_doc.get("bundle"),
    "corejs_pins": corejs_pins,
    "corejs_skipped_sample": corejs_skipped[:30],
    "vendor_pins": vendor_pins,
    "vendor_skipped": vendor_skipped,
    "orig_pins": orig_pins,
    "orig_skipped_dest": [x for x in orig_skipped if x.get("reason") == "dest_exists"][:20],
    "orig_skipped_mapped": [x for x in orig_skipped if x.get("reason") == "already_mapped"][:20],
    "orig_skipped_skip_list": [x for x in orig_skipped if x.get("reason") == "skip-list"][:12],
}
OUT.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
print("wrote", OUT)
print(json.dumps({
    "live_unaliased": len(leftover_live),
    "corejs_pins": len(corejs_pins),
    "vendor_pins": len(vendor_pins),
    "orig_pins": len(orig_pins),
    "vendor_skipped": len(vendor_skipped),
}, indent=2))
