#!/usr/bin/env python3
"""Strict-verify slice 48 pins. Reject weak 'if'/'fetchData'/'store' methods.
Accept unique t/method among siblings of uniquely named parent, unique
importer 1:1, sequential only AFTER a uniquely distinguished sibling.
Also scan remaining unnamed unique kids of Ingresses 4984 and Ranking Project
3793 using extra_known, plus Usage Trend via NO_MONITORING_DATA.
"""
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "src"
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
known_keys = set(pairs)
known_mods = set(pairs.values())
mod_to_names = defaultdict(list)
for k, v in pairs.items():
    mod_to_names[v].append(k)

t_pat = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
str_pat = re.compile(r"""['"]([A-Za-z0-9_./:=${}-]{6,})['"]""")
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")

SKIP_MODS = {
    "3225", "3567", "3511", "3513", "3251", "833", "950", "882", "807",
    "1635", "5774", "1636", "1639", "1633", "1634", "1337", "1272", "1389",
    "2853", "1183", "1764", "1111", "1053", "1112", "4656", "4657",
    "1134", "1072", "3866", "3892", "186", "1979",
    "3753", "3772", "3774", "3776", "3778", "3780", "1981",
}
WEAK_NEEDLES = {"if", "store", "fetchData", "data", "render"}


def orig_path_for(key):
    stem = key[:-3] if key.endswith(".js") else key
    for ext in (".js", ".jsx", "/index.js", "/index.jsx"):
        p = SRC / f"{stem}{ext}"
        if p.exists() and p.is_file():
            return p
    return None


def is_css(mod):
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    head = text.split("\n", 1)[0]
    return text.lstrip().startswith("export default {") and "import " not in head


def mid_of(mod):
    return re.search(r"\d+", mod).group()


def norm_key(rel_posix: str) -> str:
    rel = rel_posix.replace("\\", "/")
    if rel.endswith("/index.jsx"):
        return rel[: -len("/index.jsx")] + ".js"
    if rel.endswith("/index.js"):
        return rel[: -len("/index.js")] + ".js"
    if rel.endswith(".jsx"):
        return rel[:-4] + ".js"
    return rel


def resolve_alias_import(importer_rel, raw):
    if raw.startswith("."):
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
            return norm_key(rel + ".js") if not rel.endswith(".js") else rel
    return None


print("=== indexing ===", flush=True)
unpacked = {}
t_index = defaultdict(set)
str_index = defaultdict(set)
importers = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    unpacked[path.name] = text
    for k in t_pat.findall(text):
        t_index[k].add(path.name)
    for s in str_pat.findall(text):
        str_index[s].add(path.name)
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)

orig_t = defaultdict(list)
orig_str = defaultdict(list)
resolved_imp_targets = defaultdict(list)
orig_local_imps = defaultdict(list)
for p in SRC.rglob("*"):
    if not p.is_file or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    rel = p.relative_to(SRC).as_posix()
    pkey = norm_key(rel)
    text = p.read_text(encoding="utf-8", errors="ignore")
    for k in t_pat.findall(text):
        orig_t[k].append(pkey)
    for s in str_pat.findall(text):
        orig_str[s].append(pkey)
    for raw in imp_orig.findall(text):
        resolved = resolve_alias_import(rel, raw)
        if resolved:
            resolved_imp_targets[resolved].append((pkey, raw))
            if raw.startswith("."):
                orig_local_imps[pkey].append(resolved)


def dump_mod(mod, n=12):
    if not mod or mod not in unpacked:
        print("    MODULE_MISSING", mod)
        return
    text = unpacked[mod]
    print("    css", is_css(mod), "skip", mid_of(mod) in SKIP_MODS, "named", mod_to_names.get(mod, []))
    print("    t", list(dict.fromkeys(t_pat.findall(text)))[:n])
    print("    importers", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers[mod]))][:8])
    kids = list(dict.fromkeys(imp_unpacked.findall(text)))[:16]
    print("    kids", [(k, mod_to_names.get(k, ["?"])) for k in kids])


def unique_unpacked(needle, index):
    files = index.get(needle, set())
    unnamed = [f for f in files if f not in known_mods and mid_of(f) not in SKIP_MODS]
    named = [(f, mod_to_names.get(f, [])) for f in files if f in known_mods]
    return files, unnamed, named


def parent_unique_kids(parent_mod, extra_known=None):
    extra_known = extra_known or set()
    kids = []
    parent_text = unpacked.get(parent_mod, "")
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if m in known_mods or m in extra_known or is_css(m):
            continue
        mid2 = mid_of(m)
        if mid2 in SKIP_MODS or int(mid2) < 70:
            continue
        if sorted(set(importers[m])) == [parent_mod]:
            kids.append(m)
    return kids


def unnamed_locals(parent_key, extra_known=None):
    extra_known = extra_known or set()
    locals_ = [c for c in orig_local_imps.get(parent_key, []) if not str(c).endswith((".scss", ".css"))]
    return [c for c in locals_ if c not in known_keys and c not in extra_known]


def sibling_unique(needle, sibling_mods, cand):
    hits = [m for m in sibling_mods if needle in unpacked.get(m, "")]
    return hits == [cand], hits


accepted = []
rejected = []


def check_named_child(key, mod, parent_key, child_key, child_mod):
    print(f"\n=== NAMED_CHILD {key} -> {mod} via {child_key}->{child_mod} parent={parent_key} ===")
    op = orig_path_for(key)
    parent_mod = pairs.get(parent_key)
    dump_mod(mod)
    if not op or not parent_mod or mod in known_mods or is_css(mod):
        print("  VERDICT REJECT missing")
        rejected.append((key, mod, "missing"))
        return False
    up = sorted(set(importers[mod]))
    unique_named_parent = up == [parent_mod]
    oimps = sorted(set(k for k, _r in resolved_imp_targets.get(key, [])))
    unique_orig = oimps == [parent_key]
    in_mod = child_mod in unpacked.get(mod, "")
    orig_child_imps = sorted(set(k for k, _r in resolved_imp_targets.get(child_key, [])))
    orig_only = orig_child_imps == [key]
    sibs = parent_unique_kids(parent_mod)
    sib_hits = [m for m in sibs if child_mod in unpacked.get(m, "")]
    ok = unique_named_parent and unique_orig and in_mod and orig_only and sib_hits == [mod]
    print("  unique_named_parent", unique_named_parent, "unique_orig", unique_orig)
    print("  orig_child_imps", orig_child_imps, "orig_only", orig_only)
    print("  sib_hits", sib_hits, "in_mod", in_mod)
    print("  VERDICT", "NEW" if ok else "REJECT")
    if not ok:
        rejected.append((key, mod, "named_child"))
    return ok


def check_sib_needle(key, mod, parent_key, needle, extra_known=None):
    extra_known = extra_known or set()
    print(f"\n=== SIB {key} -> {mod} needle={needle!r} parent={parent_key} ===")
    op = orig_path_for(key)
    parent_mod = pairs.get(parent_key)
    dump_mod(mod)
    if needle in WEAK_NEEDLES:
        print("  VERDICT REJECT weak needle")
        rejected.append((key, mod, "weak:"+needle))
        return False
    if not op or not parent_mod or mod in known_mods or is_css(mod) or mid_of(mod) in SKIP_MODS:
        print("  VERDICT REJECT missing/skip")
        rejected.append((key, mod, "missing/skip"))
        return False
    up = sorted(set(importers[mod]))
    unique_named_parent = up == [parent_mod]
    oimps = sorted(set(k for k, _r in resolved_imp_targets.get(key, [])))
    unique_orig = oimps == [parent_key]
    in_mod = needle in unpacked.get(mod, "")
    in_orig = needle in op.read_text(encoding="utf-8", errors="ignore")
    sibs = parent_unique_kids(parent_mod, extra_known)
    ok_sib, hits = sibling_unique(needle, sibs, mod)
    files, unnamed, named = unique_unpacked(needle, str_index)
    tfiles, tunnamed, tnamed = unique_unpacked(needle, t_index)
    print("  unique_named_parent", unique_named_parent, "unique_orig", unique_orig, oimps)
    print("  in_mod", in_mod, "in_orig", in_orig, "sib_unique", ok_sib, "sib_hits", hits)
    print("  str_unnamed", unnamed[:6], "t_unnamed", tunnamed[:6], "named", named[:4], tnamed[:4])
    ok = unique_named_parent and unique_orig and in_mod and in_orig and ok_sib
    print("  VERDICT", "NEW" if ok else "REJECT")
    if not ok:
        rejected.append((key, mod, "sib:"+needle))
    return ok


def check_imp(key, mod, parent_key, extra_known=None):
    extra_known = extra_known or set()
    print(f"\n=== IMP {key} -> {mod} parent={parent_key} extra={sorted(extra_known)} ===")
    op = orig_path_for(key)
    parent_mod = pairs.get(parent_key)
    dump_mod(mod)
    if not op or not parent_mod or mod in known_mods or is_css(mod) or mid_of(mod) in SKIP_MODS:
        print("  VERDICT REJECT missing/skip")
        rejected.append((key, mod, "missing/skip"))
        return False
    up = sorted(set(importers[mod]))
    unique_named_parent = up == [parent_mod]
    oimps = sorted(set(k for k, _r in resolved_imp_targets.get(key, [])))
    unique_orig = oimps == [parent_key]
    unique_kids = parent_unique_kids(parent_mod, extra_known)
    unnamed_local = unnamed_locals(parent_key, extra_known)
    only_unique_kid = unique_kids == [mod]
    ok = unique_named_parent and unique_orig and only_unique_kid and unnamed_local == [key]
    print("  unique_named_parent", unique_named_parent, "unique_orig", unique_orig, oimps)
    print("  unique_kids", unique_kids, "unnamed_local", unnamed_local)
    print("  VERDICT", "NEW" if ok else "REJECT", "only_unique_kid", only_unique_kid)
    if not ok:
        rejected.append((key, mod, "imp"))
    return ok


print("\n=== REJECT weak method pins ===")
for key, mod, needle in [
    ("pages/clusters/containers/Nodes/Detail/RunningStatus/ConditionCard.js", "module-3951.js", "if"),
    ("pages/clusters/containers/EdgeNodes/Detail/RunningStatus/ConditionCard.js", "module-3962.js", "if"),
    ("pages/clusters/containers/Monitor/Resource/Usage/Physical.js", "module-3790.js", "fetchData"),
    ("pages/clusters/containers/Monitor/Resource/Usage/Virtual.js", "module-3790.js", "fetchData"),
]:
    check_sib_needle(key, mod, "pages/clusters/containers/Nodes/Detail/RunningStatus.js" if "Nodes" in key and "Edge" not in key else (
        "pages/clusters/containers/EdgeNodes/Detail/RunningStatus.js" if "EdgeNodes" in key else
        "pages/clusters/containers/Monitor/Resource/Usage.js"
    ), needle)

print("\n=== Ingresses unique importer 1:1 ===")
if check_imp(
    "pages/fedprojects/containers/Applications/Detail/AppIngresses/Ingresses.js",
    "module-4984.js",
    "pages/fedprojects/containers/Applications/Detail/AppIngresses.js",
):
    accepted.append((
        "pages/fedprojects/containers/Applications/Detail/AppIngresses/Ingresses.js",
        "module-4984.js",
        "imp:AppIngresses unique ./Ingresses",
    ))

print("\n=== Ranking Project unique importer 1:1 ===")
if check_imp(
    "pages/clusters/containers/Monitor/Resource/Ranking/Project.js",
    "module-3793.js",
    "pages/clusters/containers/Monitor/Resource/Ranking.js",
):
    accepted.append((
        "pages/clusters/containers/Monitor/Resource/Ranking/Project.js",
        "module-3793.js",
        "imp:Ranking unique ./Project",
    ))

print("\n=== AppDetail Banner unique importer 1:1 ===")
if check_imp(
    "pages/projects/components/Modals/RepoApp/AppDetail/Banner.js",
    "module-3100.js",
    "pages/projects/components/Modals/RepoApp/AppDetail.js",
):
    accepted.append((
        "pages/projects/components/Modals/RepoApp/AppDetail/Banner.js",
        "module-3100.js",
        "imp:AppDetail unique ./Banner",
    ))

print("\n=== Nodes ConditionCard unique t LAST_HEARTBEAT_VALUE among siblings ===")
if check_sib_needle(
    "pages/clusters/containers/Nodes/Detail/RunningStatus/ConditionCard.js",
    "module-3951.js",
    "pages/clusters/containers/Nodes/Detail/RunningStatus.js",
    "LAST_HEARTBEAT_VALUE",
):
    accepted.append((
        "pages/clusters/containers/Nodes/Detail/RunningStatus/ConditionCard.js",
        "module-3951.js",
        "sib:LAST_HEARTBEAT_VALUE",
    ))

print("\n=== Nodes TaintCard sequential remaining 1:1 after ConditionCard ===")
if check_imp(
    "pages/clusters/containers/Nodes/Detail/RunningStatus/TaintCard.js",
    "module-3953.js",
    "pages/clusters/containers/Nodes/Detail/RunningStatus.js",
    extra_known={
        "pages/clusters/containers/Nodes/Detail/RunningStatus/ConditionCard.js",
        "module-3951.js",
    },
):
    accepted.append((
        "pages/clusters/containers/Nodes/Detail/RunningStatus/TaintCard.js",
        "module-3953.js",
        "seq_after_ConditionCard",
    ))

print("\n=== EdgeNodes ConditionCard unique t LATEST_UPDATE_VALUE among siblings ===")
if check_sib_needle(
    "pages/clusters/containers/EdgeNodes/Detail/RunningStatus/ConditionCard.js",
    "module-3962.js",
    "pages/clusters/containers/EdgeNodes/Detail/RunningStatus.js",
    "LATEST_UPDATE_VALUE",
):
    accepted.append((
        "pages/clusters/containers/EdgeNodes/Detail/RunningStatus/ConditionCard.js",
        "module-3962.js",
        "sib:LATEST_UPDATE_VALUE",
    ))

print("\n=== EdgeNodes TaintCard sequential remaining 1:1 after ConditionCard ===")
if check_imp(
    "pages/clusters/containers/EdgeNodes/Detail/RunningStatus/TaintCard.js",
    "module-3964.js",
    "pages/clusters/containers/EdgeNodes/Detail/RunningStatus.js",
    extra_known={
        "pages/clusters/containers/EdgeNodes/Detail/RunningStatus/ConditionCard.js",
        "module-3962.js",
    },
):
    accepted.append((
        "pages/clusters/containers/EdgeNodes/Detail/RunningStatus/TaintCard.js",
        "module-3964.js",
        "seq_after_ConditionCard",
    ))

print("\n=== Usage Trend unique t NO_MONITORING_DATA; Physical/Virtual not unique orig importers ===")
if check_sib_needle(
    "pages/clusters/containers/Monitor/Resource/Usage/Trend.js",
    "module-3790.js",
    "pages/clusters/containers/Monitor/Resource/Usage.js",
    "NO_MONITORING_DATA",
):
    accepted.append((
        "pages/clusters/containers/Monitor/Resource/Usage/Trend.js",
        "module-3790.js",
        "sib:NO_MONITORING_DATA unique orig importer Usage",
    ))

print("\n=== GrayRelease Monitor Circle unique method getSeriesData among siblings ===")
if check_sib_needle(
    "pages/projects/components/Modals/GrayReleaseDetail/Monitor/Circle.js",
    "module-4707.js",
    "pages/projects/components/Modals/GrayReleaseDetail/Monitor.js",
    "getSeriesData",
):
    accepted.append((
        "pages/projects/components/Modals/GrayReleaseDetail/Monitor/Circle.js",
        "module-4707.js",
        "sib:getSeriesData",
    ))

print("\n=== GrayRelease Monitor Line sequential remaining 1:1 after Circle ===")
if check_imp(
    "pages/projects/components/Modals/GrayReleaseDetail/Monitor/Line.js",
    "module-4708.js",
    "pages/projects/components/Modals/GrayReleaseDetail/Monitor.js",
    extra_known={
        "pages/projects/components/Modals/GrayReleaseDetail/Monitor/Circle.js",
        "module-4707.js",
    },
):
    accepted.append((
        "pages/projects/components/Modals/GrayReleaseDetail/Monitor/Line.js",
        "module-4708.js",
        "seq_after_Circle",
    ))

print("\n=== remaining unnamed unique kids of Ingresses 4984 / Ranking Project 3793 ===")
EXTRA_PARENTS = [
    (
        "pages/fedprojects/containers/Applications/Detail/AppIngresses/Ingresses.js",
        "module-4984.js",
        "pages/fedprojects/containers/Applications/Detail/AppIngresses/Ingresses/IngressCard.js",
    ),
    (
        "pages/clusters/containers/Monitor/Resource/Ranking/Project.js",
        "module-3793.js",
        "pages/clusters/containers/Monitor/Resource/Ranking/Project/Table.js",
    ),
]
for parent_key, parent_mod, expected_child in EXTRA_PARENTS:
    extra_known = {parent_key, parent_mod}
    print(f"\n  PARENT {parent_key} pretend-named {parent_mod}")
    dump_mod(parent_mod)
    unique_kids = []
    parent_text = unpacked.get(parent_mod, "")
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if m in known_mods or is_css(m) or mid_of(m) in SKIP_MODS or int(mid_of(m)) < 70:
            continue
        if sorted(set(importers[m])) == [parent_mod]:
            unique_kids.append(m)
    unnamed_local = [c for c in orig_local_imps.get(parent_key, []) if not str(c).endswith((".scss", ".css")) and c not in known_keys]
    print("    unique_kids", unique_kids)
    print("    unnamed_local", unnamed_local)
    print("    expected", expected_child, "oimps", sorted(set(k for k, _r in resolved_imp_targets.get(expected_child, []))))
    for kid in unique_kids:
        dump_mod(kid)
        text = unpacked[kid]
        tkeys = list(dict.fromkeys(t_pat.findall(text)))
        print("    kid_t", tkeys[:8])
        if unique_kids == [kid] and unnamed_local == [expected_child]:
            oimps = sorted(set(k for k, _r in resolved_imp_targets.get(expected_child, [])))
            if oimps == [parent_key]:
                print("    CAND unique_importer_1_1 after parent pin")
                accepted.append((expected_child, kid, "imp_after_parent:"+parent_key))

print("\n=== copy pair context (must uniquely import one copy) ===")
for mid in ("4154", "4153", "4227", "4219", "1798", "1800", "3790", "1135"):
    mod = f"module-{mid}.js"
    print(f"  {mod} named={mod_to_names.get(mod, [])} importers={[(i, mod_to_names.get(i, ['?'])) for i in sorted(set(importers.get(mod, [])))][:8]}")

print("\n=== ACCEPTED ===")
seen = set()
for key, mod, kind in accepted:
    if (key, mod) in seen:
        continue
    seen.add((key, mod))
    print(f'    "{key}": "{mod}",  # {kind}')
print("accepted_count", len(seen))
print("rejected_count", len(rejected))
for item in rejected:
    print("  REJECT", item)
