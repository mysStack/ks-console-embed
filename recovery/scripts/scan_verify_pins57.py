#!/usr/bin/env python3
"""Strict-verify slice57 pins: unique-importer kids of last-5 named parents
are leaves. Pin RouteRulesEdit unique importer of named actions/router 3325
among unique siblings (3326 is dist-only CREATE_DOMAIN 0-hit orig). Pin
CustomMonitoring/store unique importer of named CustomMonitoring 1632 via
shouldNewMonitorModalShow. Skip List 2300/2301/2302, modal.js 1475,
StatusReason 805, LimitRange 4938, Help HOW_TO_INVITE_USERS,
PhysicalResourceItem 4945, 837, 959, ConfigTemplate vs 2943 ADD_CLUSTER,
Upload 2399/2400/2401, dist widgets, WHIZARD.
"""
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "src"
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
WEBPACK = (ROOT / "recovery/react-app/webpack.config.js").read_text(encoding="utf-8")
RECHARTS = (ROOT / "recovery/react-app/recharts-aliases.js").read_text(encoding="utf-8")

SKIP_MODS = {
    "3225", "3567", "3511", "3513", "3251", "833", "950", "882", "807",
    "1635", "5774", "1636", "1639", "1633", "1634", "1337", "1272", "1389",
    "1183", "1764", "1111", "1053", "1112",
    "4656", "4657", "1134", "1072", "3866", "3892", "186", "1979",
    "3753", "3772", "3774", "3776", "3778", "3780", "1981",
    "1135", "1798", "1800", "1801", "1869", "1418",
    "1867", "4139", "4144", "4330",
    "1489", "2102", "1837", "1410", "5770", "1861", "4764", "1415",
    "989", "891", "717", "4142", "4423", "815", "962", "821", "988",
    "4938", "4997", "4998", "1215", "1475", "3666", "3674",
    "2399", "2400", "2401", "4945",
    "2300", "2301", "2302", "805", "837", "959", "2943",
}
WHIZARD_COPY_RANGE = range(4043, 4338)

pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
known_keys = set(pairs)
known_mods = set(pairs.values())
mod_to_names = defaultdict(list)
for k, v in pairs.items():
    mod_to_names[v].append(k)
aliased = set(re.findall(r"module-(\d+)\.js", WEBPACK + "\n" + RECHARTS))

t_pat = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
str_pat = re.compile(r"""['"]([A-Za-z0-9_./:=${}-]{6,})['"]""")
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")
method_assign = re.compile(
    r"""(?:this|n|t|e|r)\.([A-Za-z_][A-Za-z0-9_]*)\s*=\s*function"""
)
method_class = re.compile(
    r"""(?:^|\n)\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(?:async\s*)?(?:\([^)]*\)|[A-Za-z_][A-Za-z0-9_]*)\s*=>"""
)
method_decl = re.compile(
    r"""(?:^|\n)\s*(?:async\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*\([^;{]*\)\s*\{"""
)
render_pat = re.compile(r"""(?:^|\n)\s*(render[A-Z][A-Za-z0-9_]*)\s*\(""")
export_const_pat = re.compile(
    r"""(?:export\s+const|exports\.|export\s+function)\s+([A-Za-z_][A-Za-z0-9_]*)"""
)
key_pat = re.compile(r"""key:\s*['"]([A-Za-z_][A-Za-z0-9_]*)['"]""")


def mid_of(mod):
    return int(re.search(r"\d+", mod).group())


def is_css(mod):
    path = UNPACKED / mod
    if not path.exists():
        return False
    text = path.read_text(encoding="utf-8", errors="ignore")
    head = text.split("\n", 1)[0]
    return text.lstrip().startswith("export default {") and "import " not in head


def norm_key(rel_posix: str) -> str:
    rel = rel_posix.replace("\\", "/")
    if rel.endswith("/index.jsx"):
        return rel[: -len("/index.jsx")] + ".js"
    if rel.endswith("/index.js"):
        return rel[: -len("/index.js")] + ".js"
    if rel.endswith(".jsx"):
        return rel[:-4] + ".js"
    return rel


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
    return None


def resolve_alias_import(importer_rel, raw):
    local = resolve_import(importer_rel, raw)
    if local:
        return local
    aliases = {
        "core/": "core/",
        "components/": "components/",
        "utils/": "utils/",
        "stores/": "stores/",
        "hocs/": "hocs/",
        "actions/": "actions/",
        "configs/": "configs/",
        "pages/": "pages/",
        "apps/": "pages/apps/",
        "projects/": "pages/projects/",
        "clusters/": "pages/clusters/",
        "workspaces/": "pages/workspaces/",
        "access/": "pages/access/",
        "devops/": "pages/devops/",
        "fedprojects/": "pages/fedprojects/",
        "settings/": "pages/settings/",
        "console/": "pages/console/",
        "edgewize/": "pages/edgewize/",
        "node-groups/": "pages/node-groups/",
        "whizard-telemetry/": "pages/whizard-telemetry/",
    }
    for prefix, mapped in aliases.items():
        if raw == prefix[:-1] or raw.startswith(prefix):
            rest = raw[len(prefix):] if raw.startswith(prefix) else ""
            rel = mapped + rest
            for ext in ("", ".js", ".jsx", "/index.js", "/index.jsx"):
                cand = rel + ext
                p = SRC / cand
                if p.exists() and p.is_file():
                    return norm_key(p.relative_to(SRC).as_posix())
            return None
    return None


def extract_methods(text):
    names = (
        method_assign.findall(text)
        + method_class.findall(text)
        + method_decl.findall(text)
        + render_pat.findall(text)
        + export_const_pat.findall(text)
        + key_pat.findall(text)
    )
    return list(dict.fromkeys(n for n in names if n and not n.startswith("_")))


print("=== indexing ===", flush=True)
unpacked = {}
t_index = defaultdict(set)
method_index = defaultdict(set)
str_index = defaultdict(set)
importers = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    unpacked[path.name] = text
    for k in t_pat.findall(text):
        t_index[k].add(path.name)
    for s in str_pat.findall(text):
        str_index[s].add(path.name)
    for n in extract_methods(text):
        method_index[n].add(path.name)
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)

orig_t = defaultdict(list)
orig_method = defaultdict(list)
orig_str = defaultdict(list)
orig_imp_targets = defaultdict(list)
orig_local_imps = defaultdict(list)
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    rel = p.relative_to(SRC).as_posix()
    key = norm_key(rel)
    text = p.read_text(encoding="utf-8", errors="ignore")
    for k in t_pat.findall(text):
        orig_t[k].append(key)
    for n in extract_methods(text):
        orig_method[n].append(key)
    for s in str_pat.findall(text):
        orig_str[s].append(key)
    for raw in imp_orig.findall(text):
        resolved = resolve_import(rel, raw)
        if resolved:
            orig_local_imps[key].append(resolved)
            orig_imp_targets[resolved].append(key)
        resolved_all = resolve_alias_import(rel, raw)
        if resolved_all and resolved_all != resolved:
            orig_imp_targets[resolved_all].append(key)


def dump_mod(mod):
    text = unpacked.get(mod, "")
    print(f"  {mod} named={mod_to_names.get(mod, [])} css={is_css(mod)} mid={mid_of(mod)}")
    print("    importers", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers.get(mod, [])))][:12])
    print("    methods", extract_methods(text)[:20])
    print("    t", list(dict.fromkeys(t_pat.findall(text)))[:16])
    print("    kids", [(k, mod_to_names.get(k, ["?"])) for k in list(dict.fromkeys(imp_unpacked.findall(text)))[:16]])
    print("    head", text[:280].replace("\n", " | ")[:240])


def unique_unpacked(needle, index):
    files = index.get(needle, set())
    unnamed = [f for f in files if f not in known_mods and str(mid_of(f)) not in SKIP_MODS]
    named = [(f, mod_to_names.get(f, [])) for f in files if f in known_mods]
    return files, unnamed, named


accepted = []
rejected = []


def reject(key, mod, why):
    print("  VERDICT REJECT", why)
    rejected.append((key, mod, why))
    return False


def accept(key, mod, why):
    print("  VERDICT ACCEPT", why)
    accepted.append((key, mod, why))
    return True


def check_unique_importer(key, mod, parent_key, extra_named=None):
    extra_named = extra_named or {}
    print(f"\n=== UNIQUE_IMP {key} -> {mod} parent={parent_key} ===")
    op = orig_path_for(key)
    dump_mod(mod)
    if not op:
        return reject(key, mod, "missing orig")
    if is_css(mod) or str(mid_of(mod)) in SKIP_MODS:
        return reject(key, mod, "css/skip")
    if mod in known_mods:
        return reject(key, mod, f"already named {mod_to_names[mod]}")
    if mid_of(mod) in WHIZARD_COPY_RANGE and "whizard" not in key:
        return reject(key, mod, "whizard_copy")
    otext = op.read_text(encoding="utf-8", errors="ignore")
    oimps = sorted(set(orig_imp_targets.get(key, [])))
    up = sorted(set(importers[mod]))
    parent_mod = extra_named.get(parent_key) or pairs.get(parent_key)
    print("    orig_importers", oimps)
    print("    orig_methods", extract_methods(otext)[:16])
    print("    orig_t", list(dict.fromkeys(t_pat.findall(otext)))[:12])
    print("    unique_named_parent", up == [parent_mod], "unique_orig", oimps == [parent_key])
    if up != [parent_mod]:
        return reject(key, mod, f"unpacked importers {up} != [{parent_mod}]")
    if oimps == [parent_key]:
        return accept(key, mod, f"unique_importer_1_1 parent={parent_key}")
    if parent_mod and up == [parent_mod] and len(oimps) == 1:
        oimp_mod = extra_named.get(oimps[0]) or pairs.get(oimps[0])
        if oimp_mod == parent_mod:
            return accept(key, mod, f"unique_importer_route_alias parent={parent_key} orig_imp={oimps[0]}")
    return reject(key, mod, f"orig importers {oimps}")


print("\n=== last5 parents remaining unnamed JS kids ===")
for parent_key, parent_mod in [
    ("pages/fedprojects/containers/Overview/ResourceUsage/TinyArea.js", "module-4942.js"),
    ("pages/fedprojects/containers/Volumes/Detail/ResourceStatus/UsageCard.js", "module-5026.js"),
    ("pages/fedprojects/containers/Volumes/Detail/VolumeMounts/PodsCard.js", "module-5030.js"),
    ("pages/apps/components/Lists/AuditRecord.js", "module-4413.js"),
    ("pages/fedprojects/components/VolumeSetting.js", "module-3563.js"),
]:
    dump_mod(parent_mod)
    kids = [
        m
        for m in list(dict.fromkeys(imp_unpacked.findall(unpacked[parent_mod])))
        if m not in known_mods and not is_css(m) and str(mid_of(m)) not in SKIP_MODS
    ]
    unique_kids = [m for m in kids if sorted(set(importers[m])) == [parent_mod]]
    print("  orig_local", orig_local_imps.get(parent_key))
    print("  orig_imp_of_unnamed", [
        (c, sorted(set(orig_imp_targets.get(c, []))))
        for c in orig_local_imps.get(parent_key, [])
        if c not in known_keys
    ])
    print("  unnamed_js", kids, "unique", unique_kids)

print("\n=== RouteRulesEdit unique importer of named actions/router 3325 ===")
check_unique_importer(
    "pages/fedprojects/components/RouteRulesEdit.js",
    "module-3331.js",
    "actions/router.js",
)
sibs = ["module-3326.js", "module-3331.js"]
files, unnamed, named = unique_unpacked("EDIT_ROUTING_RULES", t_index)
sib_unn = [f for f in unnamed if f in sibs]
print("EDIT_ROUTING_RULES unnamed", unnamed, "sib", sib_unn, "named", named[:4])
files, unnamed, named = unique_unpacked("INVALID_CREATE_DOMAIN_NAME", t_index)
print("INVALID_CREATE_DOMAIN_NAME unnamed", unnamed, "named", named[:4], "orig", orig_t.get("INVALID_CREATE_DOMAIN_NAME", []))
print("orig_imp RouteRulesEdit", orig_imp_targets.get("pages/fedprojects/components/RouteRulesEdit.js"))
print("importers 3331", sorted(set(importers.get("module-3331.js", []))))
print("importers 3326", sorted(set(importers.get("module-3326.js", []))))
dump_mod("module-3326.js")
print("reject 3326 CREATE_DOMAIN dist-only 0-hit orig")
reject(
    "pages/fedprojects/components/RouteRulesEdit.js",
    "module-3326.js",
    "sibling 3326 is CREATE_DOMAIN dist-only 0-hit orig, not RouteRulesEdit",
)

print("\n=== CustomMonitoring/store unique importer of named 1632 ===")
check_unique_importer(
    "components/Modals/CustomMonitoring/store.js",
    "module-2853.js",
    "components/Modals/CustomMonitoring.js",
)
files, unnamed, named = unique_unpacked("shouldNewMonitorModalShow", str_index)
print("shouldNewMonitorModalShow unnamed", unnamed, "named", named[:4])
files, unnamed, named = unique_unpacked("selectMonitor", method_index)
print("selectMonitor unnamed", unnamed, "named", named[:4])
print("orig_imp store", orig_imp_targets.get("components/Modals/CustomMonitoring/store.js"))

print("\n=== leftover last5 UsageCard 1832/1831, PodsCard 851, VolumeSetting 1122 ===")
print("orig_imp VolumeUsage", sorted(set(orig_imp_targets.get("pages/projects/components/Charts/VolumeUsage.js", []))))
print("importers 1832", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers.get("module-1832.js", [])))])
print("importers 1831", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers.get("module-1831.js", [])))])
print("importers 851 count", len(set(importers.get("module-851.js", []))))
print("importers 1122", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers.get("module-1122.js", [])))])
print("orig_imp VersionStatus", sorted(set(orig_imp_targets.get("pages/apps/components/VersionStatus.js", []))))

print("\n=== vendor leftover needles in live unnamed ===")
ENTRY = UNPACKED / "entry.js"
live = set()
stack = ["entry.js"] if ENTRY.exists() else ["module-759.js"]
seen = set()
texts = dict(unpacked)
if ENTRY.exists():
    texts["entry.js"] = ENTRY.read_text(encoding="utf-8", errors="ignore")
while stack:
    cur = stack.pop()
    if cur in seen:
        continue
    seen.add(cur)
    live.add(cur)
    for m in imp_unpacked.findall(texts.get(cur, "")):
        if m not in seen:
            stack.append(m)
print("live_modules", len(live), "aliased", len(aliased))
NEEDLES = [
    ("react-draggable", "react-draggable"),
    ("DraggableCore", "DraggableCore"),
    ("jwt-decode", "Invalid token specified"),
    ("LineChart chartName", 'chartName: "LineChart"'),
    ("semver validRange", "validRange"),
]
for n, needle in NEEDLES:
    hits = []
    for name, text in texts.items():
        if needle in text and name in live:
            mid = re.search(r"\d+", name)
            mid = mid.group() if mid else ""
            if mid not in aliased:
                hits.append(name)
    print(f"  {n}: {hits[:8] or 'none'} ({len(hits)})")

print("\n=== ACCEPTED ===")
seen_acc = set()
for key, mod, why in accepted:
    pair = (key, mod)
    if pair in seen_acc:
        continue
    seen_acc.add(pair)
    print(f'    "{key}": "{mod}",  # {why}')
print("accepted_unique_pairs", len(seen_acc))
print("\n=== REJECTED ===")
for key, mod, why in rejected:
    print(f"  {key} -> {mod} :: {why}")
print("rejected_count", len(rejected))
