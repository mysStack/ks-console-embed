#!/usr/bin/env python3
"""Slice 49b: IngressCard all kids, WHIZARD unique routes, remaining unique
1:1 named-parent kids and unique orig t/method 1-hit pages."""
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "src"
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")

SKIP_MODS = {
    "3225", "3567", "3511", "3513", "3251", "833", "950", "882", "807",
    "1635", "5774", "1636", "1639", "1633", "1634", "1337", "1272", "1389",
    "2853", "1183", "1764", "1111", "1053", "1112",
    "4656", "4657", "1134", "1072", "3866", "3892", "186", "1979",
    "3753", "3772", "3774", "3776", "3778", "3780", "1981",
    "1135", "1798", "1800",
}
VENDOR_MODS = {
    "module-553.js", "module-239.js", "module-321.js", "module-14.js",
    "module-186.js", "module-433.js", "module-243.js", "module-240.js",
    "module-244.js", "module-1.js", "module-2.js", "module-3.js",
    "module-36.js", "module-37.js", "module-55.js", "module-56.js",
    "module-51.js", "module-26.js", "module-63.js", "module-52.js",
    "module-61.js", "module-74.js", "module-241.js", "module-199.js",
    "module-317.js", "module-2465.js",
}

pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
known_keys = set(pairs)
known_mods = set(pairs.values())
mod_to_names = defaultdict(list)
for k, v in pairs.items():
    mod_to_names[v].append(k)

t_pat = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
str_pat = re.compile(r"""['"]([^'"]{6,})['"]""")
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")
method_pat = re.compile(
    r"""(?:^|\n)\s*(?:(?:async\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*\([^;{]*\)\s*\{"""
    r"""|([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(?:async\s*)?(?:\([^)]*\)|[A-Za-z_][A-Za-z0-9_]*)\s*=>)"""
)


def norm_key(rel_posix: str) -> str:
    rel = rel_posix.replace("\\", "/")
    if rel.endswith("/index.jsx"):
        return rel[: -len("/index.jsx")] + ".js"
    if rel.endswith("/index.js"):
        return rel[: -len("/index.js")] + ".js"
    if rel.endswith(".jsx"):
        return rel[:-4] + ".js"
    return rel


def mid_of(mod):
    return re.search(r"\d+", mod).group()


def is_css(mod):
    path = UNPACKED / mod
    if not path.exists():
        return False
    text = path.read_text(encoding="utf-8", errors="ignore")
    head = text.split("\n", 1)[0]
    return text.lstrip().startswith("export default {") and "import " not in head


def orig_path_for(key):
    stem = key[:-3] if key.endswith(".js") else key
    for ext in (".js", ".jsx", "/index.js", "/index.jsx"):
        p = SRC / f"{stem}{ext}"
        if p.exists() and p.is_file():
            return p
    return None


def resolve_import(importer_rel, raw):
    if not raw.startswith("."):
        return None
    base = Path(importer_rel).parent
    joined = (base / raw).as_posix()
    parts = []
    for part in joined.split("/"):
        if part in (".", ""):
            continue
        if part == "..":
            if parts:
                parts.pop()
            continue
        parts.append(part)
    rel = "/".join(parts)
    for ext in ("", ".js", ".jsx", "/index.js", "/index.jsx"):
        cand = rel + ext
        p = SRC / cand
        if p.exists() and p.is_file():
            return norm_key(p.relative_to(SRC).as_posix())
    return norm_key(rel + ".js") if not rel.endswith(".js") else rel


print("=== indexing ===", flush=True)
unpacked = {}
t_index = defaultdict(set)
str_index = defaultdict(set)
importers = defaultdict(list)
method_index = defaultdict(set)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    unpacked[path.name] = text
    for k in t_pat.findall(text):
        t_index[k].add(path.name)
    for s in str_pat.findall(text):
        str_index[s].add(path.name)
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)
    for a, b in method_pat.findall(text):
        name = a or b
        if name:
            method_index[name].add(path.name)

orig_t = defaultdict(list)
orig_str = defaultdict(list)
orig_method = defaultdict(list)
orig_imp_targets = defaultdict(list)
orig_local_imps = defaultdict(list)
orig_files = []
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    rel = p.relative_to(SRC).as_posix()
    key = norm_key(rel)
    orig_files.append(key)
    text = p.read_text(encoding="utf-8", errors="ignore")
    for k in t_pat.findall(text):
        orig_t[k].append(key)
    for s in str_pat.findall(text):
        orig_str[s].append(key)
    for a, b in method_pat.findall(text):
        name = a or b
        if name:
            orig_method[name].append(key)
    for raw in imp_orig.findall(text):
        resolved = resolve_import(rel, raw)
        if resolved:
            orig_local_imps[key].append(resolved)
            orig_imp_targets[resolved].append(key)


def dump_mod(mod, n=20):
    text = unpacked.get(mod, "")
    print(f"  {mod} named={mod_to_names.get(mod, [])} css={is_css(mod)} skip={mid_of(mod) in SKIP_MODS}")
    print("    importers", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers.get(mod, [])))][:12])
    kids = list(dict.fromkeys(imp_unpacked.findall(text)))
    print("    kids", [(k, mod_to_names.get(k, ["?"]), "css" if is_css(k) else "") for k in kids])
    print("    t", list(dict.fromkeys(t_pat.findall(text)))[:n])
    lits = [s for s in list(dict.fromkeys(str_pat.findall(text))) if s.startswith("/") or "whizard" in s.lower() or s.isupper()]
    print("    route_or_t_lits", lits[:20])


print("\n=== orig page dirs vs named ===")
for prefix in (
    "pages/whizard-telemetry/",
    "pages/edgewize/",
    "pages/node-groups/",
    "pages/apps/",
):
    keys = sorted(k for k in orig_files if k.startswith(prefix))
    unnamed = [k for k in keys if k not in known_keys]
    print(f"  {prefix} orig={len(keys)} unnamed={len(unnamed)}")
    for k in unnamed:
        print(f"    UNNAMED {k} oimps={sorted(set(orig_imp_targets.get(k, [])))}")


print("\n=== IngressCard 4985 ALL kids ===")
dump_mod("module-4985.js")
text = unpacked["module-4985.js"]
for m in list(dict.fromkeys(imp_unpacked.findall(text))):
    dump_mod(m)
    if m in {"module-1981.js", "module-4987.js"} or is_css(m):
        print("    SKIP_REQUESTED")


print("\n=== orig IngressCard local imports ===")
for key in sorted(k for k in orig_files if "IngressCard" in k):
    print(f"  {key} named={pairs.get(key)} locals={orig_local_imps.get(key)} oimps={sorted(set(orig_imp_targets.get(key, [])))}")
    op = orig_path_for(key)
    if op:
        print("    file", op.relative_to(SRC).as_posix())
        src = op.read_text(encoding="utf-8", errors="ignore")
        print("    orig_imps", imp_orig.findall(src)[:20])
        print("    t", t_pat.findall(src)[:12])


print("\n=== unique lits for 4153/4154/4161/4219/4220/4226/4227/4228 ===")
NEEDLE_MODS = [
    "4152", "4153", "4154", "4155", "4157", "4159", "4161",
    "4218", "4219", "4220", "4226", "4227", "4228",
]
for mid in NEEDLE_MODS:
    dump_mod(f"module-{mid}.js")

print("\n=== orig hits for WHIZARD unique routes/lits ===")
needles = [
    "/whizard-telemetry/:cluster/monitor-resource",
    "/whizard-telemetry/:cluster/nodes/:node",
    "USAGE_RANKING",
    "RESOURCE_USAGE",
    "renderVirtualResource",
    "renderProjectTrend",
    "node_gpu_memory_available",
    "NODE_GPU_MEMORY_USAGED",
    "NODE_GPU_MEMORY_UNUSAGED",
    "getMonitoringCfgs",
]
for needle in needles:
    ofiles = orig_str.get(needle, []) + orig_t.get(needle, []) + orig_method.get(needle, [])
    ufiles = str_index.get(needle, set()) | t_index.get(needle, set()) | method_index.get(needle, set())
    unnamed_u = [f for f in ufiles if f not in known_mods and mid_of(f) not in SKIP_MODS]
    print(f"  {needle!r}")
    print(f"    orig={sorted(set(ofiles))}")
    print(f"    unpacked_unnamed={sorted(unnamed_u)} named={[ (f, mod_to_names.get(f, [])) for f in ufiles if f in known_mods ][:6]}")


print("\n=== unique 1:1 named-parent kids (non-vendor) ===")
pins = []
for parent_key, parent_mod in sorted(pairs.items()):
    if not parent_key.startswith(("pages/apps/", "pages/whizard-telemetry/", "pages/edgewize/", "pages/node-groups/", "pages/fedprojects/")):
        continue
    parent_text = unpacked.get(parent_mod, "")
    unique_kids = []
    all_unnamed = []
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if m in known_mods or is_css(m) or mid_of(m) in SKIP_MODS or int(mid_of(m)) < 70:
            continue
        if m in VENDOR_MODS:
            continue
        all_unnamed.append(m)
        if sorted(set(importers[m])) == [parent_mod]:
            unique_kids.append(m)
    locals_ = [c for c in orig_local_imps.get(parent_key, []) if not str(c).endswith((".scss", ".css")) and c not in known_keys]
    if unique_kids or locals_:
        print(f"  {parent_key}->{parent_mod} unique_kids={unique_kids} unnamed_nonvendor={all_unnamed} orig_unnamed={locals_}")
        if len(unique_kids) == 1 and len(locals_) == 1:
            child_key = locals_[0]
            oimps = sorted(set(orig_imp_targets.get(child_key, [])))
            print(f"    1_1 oimps={oimps}")
            if oimps == [parent_key]:
                pins.append((child_key, unique_kids[0], f"unique_importer_1_1 parent={parent_key}"))
                print("    PIN", pins[-1])


print("\n=== unique orig t/method 1-hit remaining apps/whizard/edge/ng pages ===")
WEAK = {"if", "store", "fetchData", "data", "render", "className", "onClick", "state", "super"}
for key in sorted(orig_files):
    if key in known_keys:
        continue
    if not key.startswith(("pages/apps/", "pages/whizard-telemetry/", "pages/edgewize/", "pages/node-groups/")):
        continue
    op = orig_path_for(key)
    if not op:
        continue
    text = op.read_text(encoding="utf-8", errors="ignore")
    tkeys = list(dict.fromkeys(t_pat.findall(text)))
    methods = []
    for a, b in method_pat.findall(text):
        name = a or b
        if name and name not in WEAK:
            methods.append(name)
    unique_t = [k for k in tkeys if orig_t[k] == [key]]
    unique_m = [n for n in methods if orig_method[n] == [key]]
    hits = []
    for k in unique_t:
        files = t_index.get(k, set())
        unn = [f for f in files if f not in known_mods and mid_of(f) not in SKIP_MODS]
        named = [f for f in files if f in known_mods]
        print(f"  t {key} {k!r} unnamed={unn} named={[mod_to_names.get(f, []) for f in named][:3]}")
        if len(unn) == 1 and not named:
            hits.append(("t", k, unn[0]))
    for n in unique_m:
        if n in WEAK:
            continue
        files = method_index.get(n, set())
        unn = [f for f in files if f not in known_mods and mid_of(f) not in SKIP_MODS]
        named = [f for f in files if f in known_mods]
        if n in {"addVersion", "appDetail", "renderTopIntro", "hadnleSelectCategory", "clearTableSearch", "selectedId", "isSelectedCategory", "showDelete", "handleClickCate", "renderCategories", "showReview", "getAppIcon", "getAppISV", "renderAppFilePreview", "renderKeywords", "renderDeployButton"}:
            print(f"  method {key} {n!r} unnamed={unn[:6]} named={[mod_to_names.get(f, []) for f in named][:3]}")
        if len(unn) == 1 and not named:
            hits.append(("method", n, unn[0]))
    if hits:
        mods = sorted(set(m for _k, _n, m in hits))
        print(f"  HITS {key} {hits[:6]} mods={mods}")
        if len(mods) == 1:
            pins.append((key, mods[0], f"unique_1hit {hits[0][0]}:{hits[0][1]!r}"))


print("\n=== WHIZARD orig container files resembling Monitor/Resource and Nodes/Detail ===")
for key in sorted(k for k in orig_files if k.startswith("pages/whizard-telemetry/")):
    print(f"  {key} named={pairs.get(key)}")


print("\n=== cluster counterparts of copies ===")
for key in [
    "pages/clusters/containers/Monitor/Resource/routes.js",
    "pages/clusters/containers/Monitor/Resource/Usage.js",
    "pages/clusters/containers/Monitor/Resource/Ranking.js",
    "pages/clusters/containers/Nodes/Detail/routes.js",
    "pages/clusters/containers/Nodes/Detail/Monitoring.js",
    "pages/clusters/containers/Nodes/Detail/RunningStatus.js",
]:
    print(f"  {key} -> {pairs.get(key)}")
    op = orig_path_for(key)
    if op:
        print("    locals", orig_local_imps.get(key))
        print("    t", t_pat.findall(op.read_text(encoding="utf-8", errors="ignore"))[:8])


print("\n=== PINS ===")
seen = set()
for key, mod, reason in pins:
    if (key, mod) in seen:
        continue
    seen.add((key, mod))
    print(f'    "{key}": "{mod}",  # {reason}')
print("pin_count", len(seen))
