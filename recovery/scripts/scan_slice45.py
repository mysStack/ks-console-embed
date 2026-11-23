#!/usr/bin/env python3
"""Slice 45: unnamed original PAGE PARENTS + remaining 1-hit orig vs KNOWN."""
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
    "4656", "4657", "1134", "1072", "3866", "3892",
}
SKIP_NAME_FRAGS = (
    "ColumeInput", "CustomToolTip", "PromQLInput", "ProjectSelect",
    "FormGroupCard", "ItemContianer", "FullscreenModal", "ErrorContainer",
    "EditMonitorFormLayout", "MetircQueryInput", "BillIcon", "ContainerLog",
    "Compose", "GrafanaTargetInput", "SquareButton", "KubeTools",
    "withDefaultSecrets", "KubeCtl", "KubeConfig",
    "EditGroup", "ReplicasInput", "ScheduleCluster",
    "RuleList", "RuleForm", "ClustersMapper", "ContainerImages",
    "ConfigReferenceImpact", "About.js", "ServiceAccess", "ToggleView",
    "TextPreview", "AuditRecord", "SlackForm", "EditBasicInfo",
    "ImageBuilder", "FluxApp", "ChartCard",
)
SKIP_2HIT_T = {
    "YAML_FILE", "ROUTE_SETTINGS", "CREATE_POD_IP_POOL", "TRAFFIC_MANAGEMENT",
    "INTERNAL_ALLOWLIST", "IMAGE_ARTIFACTS", "VALID_URL_DESC", "CODE_CHECK",
    "ISSUE_PL", "UNFOLD", "FOLD", "ADD_ROUTING_RULE_DESC", "INVALID_PATH_DESC",
    "PATH_EXIST", "IMAGE_VALUE", "STORAGE_DEVICES", "VIEW_ALL_REPLICAS",
}
SKIP_KEY_SUBSTR = (
    "stores/monitoring/", "stores/rank/", "federated.list", "limitrange",
    "NameWithAction", "utils/request", "utils/localStorage",
    "pages/settings/containers/layout",
    "components/Layout/",
    "actions/toolbox",
    "pages/fedprojects/containers/LogCollection",
    "pages/workspaces/containers/Quota",
    "pages/clusters/containers/Gateway",
    "pages/workspaces/containers/Gateway",
    "pages/projects/containers/ImageBuilder",
    "pages/clusters/containers/ImageBuilder",
    "pages/devops/containers/CD/list",
    "pages/devops/containers/Pipelines/Detail/layout",
    "FluxApp",
    "ChartCard",
    "ClusterWorkloadStatus/Cluster",
    "ClusterWorkloadStatus/ScheduleCluster",
    "ClusterWorkloadStatus/ReplicasInput",
    "pages/apps/containers/Store",
    "pages/console/containers/Workspace",
    "pages/projects/containers/Alerting/Policies",
    "pages/clusters/containers/Members.js",
    "pages/clusters/containers/Network/IPPools",
    "pages/clusters/containers/Storage/PV/detail",
    "WorkloadTableForm/Card",
)

pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
known_keys = set(pairs)
known_mods = set(re.findall(r"module-(\d+)\.js", KNOWN_PY))
mod_to_names = defaultdict(list)
for k, v in pairs.items():
    mod_to_names[v].append(k)

t_pat = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
res_pat = re.compile(
    r"""(?:this|e|t|n)\.(?:resourceName|module)\s*=\s*['"]([^'"]+)['"]"""
)
api_pat = re.compile(r"""['"]((?:/kapis|/apis|/api)[^'"]{6,})['"]""")
kapis_pat = re.compile(r"""['"](kapis/[^'"]{6,})['"]""")
str_pat = re.compile(r"""['"]([A-Za-z0-9_./:=-]{8,})['"]""")
path_pat = re.compile(r"""['"`](/[A-Za-z0-9_.:/${}-]{8,})['"`]""")
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")

SCAN_ROOTS = [
    SRC / "components",
    SRC / "pages",
    SRC / "stores",
    SRC / "utils",
    SRC / "hocs",
    SRC / "actions",
    SRC / "configs",
]

PAGE_PREFIXES = (
    "pages/fedprojects/",
    "pages/clusters/",
    "pages/workspaces/",
    "pages/projects/",
    "pages/apps/",
    "pages/console/",
    "pages/edgewize/",
    "pages/node-groups/",
    "pages/whizard-telemetry/",
    "pages/devops/",
)

COMMON_T = {
    "NAME", "TYPE", "STATUS", "CREATE", "EDIT", "DELETE", "SAVE", "CANCEL",
    "CONFIRM", "OK", "CLOSE", "SEARCH", "REFRESH", "MORE", "ACTION", "ACTIONS",
    "CREATED_AT", "CREATION_TIME", "DESCRIPTION", "PROJECT", "CLUSTER",
    "WORKSPACE", "NAMESPACE", "USERNAME", "PASSWORD", "EMAIL", "ROLE",
    "DOWNLOAD", "COPY", "ENABLE", "DISABLE", "UPDATE_SUCCESSFUL",
    "SUCCESSFUL", "FAILED", "TIME", "REASON", "JOB", "TOTAL", "CLEAR",
    "PROCESS", "DEPARTMENT", "METADATA", "EVENT_PL", "MONITORING",
    "RESOURCE_STATUS", "PODS",
}


def norm_key(rel_posix: str) -> str:
    rel = rel_posix.replace("\\", "/")
    if rel.endswith("/index.jsx"):
        return rel[: -len("/index.jsx")] + ".js"
    if rel.endswith("/index.js"):
        return rel[: -len("/index.js")] + ".js"
    if rel.endswith(".jsx"):
        return rel[:-4] + ".js"
    return rel


def mid_of(mod_name: str) -> str:
    return re.search(r"\d+", mod_name).group()


def is_css(mod: str) -> bool:
    path = UNPACKED / mod
    if not path.exists():
        return False
    text = path.read_text(encoding="utf-8", errors="ignore")
    head = text.split("\n", 1)[0]
    return text.lstrip().startswith("export default {") and "import " not in head


def skip_mod(name):
    return mid_of(name) in SKIP_MODS


def skip_name(key):
    if any(frag.lower() in key.lower() for frag in SKIP_NAME_FRAGS):
        return True
    if any(s.lower() in key.lower() for s in SKIP_KEY_SUBSTR):
        return True
    return False


def resolve_import(importer_rel, raw):
    if not raw.startswith("."):
        return None
    base = Path(importer_rel).parent
    joined = (base / raw).as_posix()
    parts = []
    for part in joined.split("/"):
        if part == "." or part == "":
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
    for ext in ("/index.js", "/index.jsx"):
        p = SRC / (rel + ext)
        if p.exists():
            return norm_key(p.relative_to(SRC).as_posix())
    return norm_key(rel + ".js") if not rel.endswith(".js") else rel


def resolve_alias_import(importer_rel, raw):
    if raw.startswith("."):
        return resolve_import(importer_rel, raw)
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
            return norm_key(rel + ".js") if not rel.endswith(".js") else rel
    return None


orig_files = []
for root in SCAN_ROOTS:
    if not root.exists():
        continue
    for p in root.rglob("*"):
        if not p.is_file() or p.suffix not in {".js", ".jsx"}:
            continue
        if ".test." in p.name or p.name.endswith(".spec.js"):
            continue
        rel = p.relative_to(SRC).as_posix()
        orig_files.append((rel, norm_key(rel), p))

missing = [(rel, key, p) for rel, key, p in orig_files if key not in known_keys]
page_missing = [
    (rel, key, p)
    for rel, key, p in missing
    if any(key.startswith(pref) for pref in PAGE_PREFIXES)
]

print("=== orig vs KNOWN ===")
print("orig_scanned", len(orig_files), "known_keys", len(known_keys), "missing", len(missing))
print("page_missing", len(page_missing))

print("\n=== page missing by family ===")
for fam in PAGE_PREFIXES:
    hits = [key for _rel, key, _p in page_missing if key.startswith(fam)]
    print(f"  {fam} {len(hits)}")

print("\n=== unnamed Detail/routes.js ===")
unnamed_routes = []
for rel, key, p in missing:
    if key.endswith("Detail/routes.js") or key.endswith("detail/routes.js"):
        unnamed_routes.append(key)
        print(f"  MISSING {key}")
print("unnamed_routes_count", len(unnamed_routes))

print("\n=== unnamed *Detail.js parents under pages ===")
unnamed_detail_parents = []
for rel, key, p in page_missing:
    if key.endswith("/Detail.js") or key.endswith("/detail.js"):
        unnamed_detail_parents.append(key)
        print(f"  MISSING {key}")
print("unnamed_detail_parents_count", len(unnamed_detail_parents))

print("\n=== indexing unpacked ===", flush=True)
unpacked_texts = {}
t_index = defaultdict(set)
res_index = defaultdict(set)
api_index = defaultdict(set)
str_index = defaultdict(set)
importers = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    unpacked_texts[path.name] = text
    for k in t_pat.findall(text):
        t_index[k].add(path.name)
    for k in res_pat.findall(text):
        res_index[k].add(path.name)
    for a in api_pat.findall(text) + kapis_pat.findall(text):
        api_index[a].add(path.name)
    for s in str_pat.findall(text):
        str_index[s].add(path.name)
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)

orig_t = defaultdict(list)
orig_api = defaultdict(list)
orig_str = defaultdict(list)
orig_imp_targets = defaultdict(list)
orig_local_imps = {}
orig_all_imps = {}
orig_texts = {}
for rel, key, p in orig_files:
    text = p.read_text(encoding="utf-8", errors="ignore")
    orig_texts[key] = text
    for k in t_pat.findall(text):
        orig_t[k].append(key)
    for a in api_pat.findall(text) + kapis_pat.findall(text):
        orig_api[a].append(key)
    for s in list(dict.fromkeys(str_pat.findall(text) + path_pat.findall(text))):
        orig_str[s].append(key)
    locals_ = []
    alls_ = []
    for raw in imp_orig.findall(text):
        resolved_local = resolve_import(rel, raw)
        if resolved_local:
            locals_.append(resolved_local)
            orig_imp_targets[resolved_local].append(key)
        resolved_all = resolve_alias_import(rel, raw)
        if resolved_all:
            alls_.append(resolved_all)
            if resolved_all != resolved_local:
                orig_imp_targets[resolved_all].append(key)
    orig_local_imps[key] = locals_
    orig_all_imps[key] = alls_


def unnamed_only(files):
    return [f for f in files if mid_of(f) not in known_mods]


def named_only(files):
    return [f for f in files if f in known_mods or mid_of(f) in known_mods]


pins = []
alias_pins = []


def consider(key, files, reason, extra="", allow_alias=True):
    files = sorted(set(files), key=lambda s: int(mid_of(s)))
    un = [f for f in files if not skip_mod(f)]
    un_unnamed = unnamed_only(un)
    if skip_name(key):
        print(f"  SKIP_NAME {key} [{reason}] {extra}")
        return
    if len(un_unnamed) == 1:
        mod = un_unnamed[0]
        pins.append((key, mod, f"{reason} {extra}".strip()))
        print(f"  PIN {key} -> {mod} [{reason}] {extra}")
    elif len(un) == 1 and not un_unnamed and allow_alias:
        mod = un[0]
        existing = mod_to_names.get(mod, [])
        if key not in existing:
            alias_pins.append((key, mod, f"alias_of {existing} [{reason}] {extra}".strip()))
            print(f"  ALIAS {key} -> {mod} already={existing} [{reason}] {extra}")
    elif 2 <= len(un_unnamed) <= 6:
        print(f"  MULTI {len(un_unnamed)} {key} -> {un_unnamed} [{reason}] {extra}")
    elif len(un_unnamed) == 0 and len(un) == 0:
        print(f"  MISS {key} [{reason}] {extra}")


def unique_needles_for(key):
    text = orig_texts.get(key, "")
    needles = []
    for k in dict.fromkeys(t_pat.findall(text)):
        if k in COMMON_T or k in SKIP_2HIT_T:
            continue
        if orig_t[k] == [key]:
            needles.append(("unique_t", k, t_index.get(k, set())))
    for k in dict.fromkeys(res_pat.findall(text)):
        needles.append(("resource/module", k, res_index.get(k, set())))
    for a in dict.fromkeys(api_pat.findall(text) + kapis_pat.findall(text)):
        if orig_api[a] == [key]:
            needles.append(("unique_api", a, api_index.get(a, set())))
    for s in dict.fromkeys(list(str_pat.findall(text)) + list(path_pat.findall(text))):
        if s in COMMON_T or len(s) < 10:
            continue
        if orig_str[s] == [key]:
            needles.append(("unique_str", s, str_index.get(s, set())))
    return needles


print("\n=== PAGE PARENT unique t/resource/api/str (Detail.js + routes.js first) ===")
priority_keys = unnamed_detail_parents + unnamed_routes
seen_priority = set()
for key in priority_keys:
    if key in seen_priority or skip_name(key):
        continue
    seen_priority.add(key)
    needles = unique_needles_for(key)
    print(f"\n-- {key} needles={len(needles)} --")
    pinned = False
    for kind, needle, files in needles[:20]:
        unn = unnamed_only([f for f in files if not skip_mod(f)])
        named = [(f, mod_to_names.get(f, [])) for f in files if f in known_mods]
        print(f"    {kind} {needle!r} unpacked={sorted(files)[:6]} unnamed={unn} named={named[:3]}")
        consider(key, files, kind, repr(needle)[:80])
        if any(x[0] == key for x in pins + alias_pins):
            pinned = True
            break
    if not pinned:
        imps = orig_imp_targets.get(key, [])
        print(f"    orig_imps={imps}")


print("\n=== remaining unnamed pages unique needles (not skip) ===")
page_scan = []
for rel, key, p in page_missing:
    if skip_name(key) or key in seen_priority:
        continue
    page_scan.append(key)

print("page_scan_remaining", len(page_scan))
page_hit_class = {"1-hit": [], "2-hit": [], "0-hit": [], "multi": [], "alias": []}
for key in page_scan:
    needles = unique_needles_for(key)
    best = None
    for kind, needle, files in needles:
        un = [f for f in files if not skip_mod(f)]
        unn = unnamed_only(un)
        named = [f for f in un if f in known_mods]
        if len(unn) == 1:
            best = ("1-hit", kind, needle, unn)
            break
        if len(un) == 1 and not unn:
            best = ("alias", kind, needle, un)
            if best[0] != "1-hit":
                continue
        if len(unn) == 2 and best is None:
            best = ("2-hit", kind, needle, unn)
        if len(unn) == 0 and len(un) == 0 and best is None:
            best = ("0-hit", kind, needle, [])
        if len(unn) > 2 and best is None:
            best = ("multi", kind, needle, unn)
    if best is None:
        page_hit_class["0-hit"].append((key, None, None, []))
        continue
    cls, kind, needle, files = best
    page_hit_class[cls].append((key, kind, needle, files))
    if cls in ("1-hit", "alias"):
        consider(key, files if cls == "1-hit" else files, kind, repr(needle)[:80])


print("\n=== COMPONENTS/FORMS/HOCS/CARDS/STORES unique 1-hit ===")
extra_missing = [
    (rel, key, p)
    for rel, key, p in missing
    if key.startswith((
        "components/Modals/",
        "components/Forms/",
        "components/HOCs/",
        "components/Cards/",
        "stores/",
        "hocs/",
    ))
    and not skip_name(key)
]
print("extra_missing", len(extra_missing))
for rel, key, p in extra_missing:
    needles = unique_needles_for(key)
    for kind, needle, files in needles:
        un = [f for f in files if not skip_mod(f)]
        unn = unnamed_only(un)
        if len(unn) == 1 or (len(un) == 1 and not unn):
            consider(key, files, kind, repr(needle)[:80])
            if any(x[0] == key for x in pins + alias_pins):
                break


def parent_mod_of(parent_key):
    if parent_key in pairs:
        return pairs[parent_key]
    for k, m, _r in alias_pins + pins:
        if k == parent_key:
            return m
    return None


def dump_kids(parent_key, parent_mod=None):
    parent_mod = parent_mod or parent_mod_of(parent_key)
    if not parent_mod:
        print(f"  MISSING_PARENT_NAME {parent_key}")
        return
    parent_text = unpacked_texts.get(parent_mod, "")
    kids = []
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if mid_of(m) in known_mods or skip_mod(m) or is_css(m):
            continue
        if int(mid_of(m)) < 70:
            continue
        kids.append(m)
    orig_unnamed = [c for c in orig_local_imps.get(parent_key, []) if c not in known_keys and c not in {x[0] for x in pins + alias_pins}]
    orig_unnamed_all = [c for c in orig_all_imps.get(parent_key, []) if c not in known_keys]
    print(f"\n  PARENT {parent_key} -> {parent_mod}")
    print(f"    orig_unnamed_local={orig_unnamed}")
    print(f"    orig_unnamed_all={orig_unnamed_all}")
    print(f"    unpacked_unnamed_kids={kids}")
    for kid in kids:
        ktext = unpacked_texts[kid]
        tkeys = list(dict.fromkeys(t_pat.findall(ktext)))
        unique_t = []
        for k in tkeys:
            files = t_index[k]
            unn = unnamed_only([f for f in files if not skip_mod(f)])
            if files == {kid} or unn == [kid]:
                unique_t.append(k)
        unique_lits = []
        for s in list(dict.fromkeys(str_pat.findall(ktext))):
            files = str_index[s]
            unn = unnamed_only([f for f in files if not skip_mod(f)])
            if (files == {kid} or unn == [kid]) and len(s) >= 10:
                unique_lits.append(s)
        up = sorted(set(importers[kid]))
        named_up = [(i, mod_to_names.get(i, ["?"])) for i in up]
        unique_imp = up == [parent_mod]
        print(f"    KID {kid} unique_importer={unique_imp} importers={named_up[:6]}")
        print(f"      t={tkeys[:10]} unique_t={unique_t[:8]} unique_lit={unique_lits[:6]}")
        if unique_imp and len(orig_unnamed) == 1:
            consider(orig_unnamed[0], [kid], "unique_importer", f"parent={parent_key}")
        elif unique_t:
            for k in unique_t:
                orig_hits = orig_t.get(k, [])
                orig_unnamed_hits = [h for h in orig_hits if h not in known_keys]
                print(f"      unique_t_orig {k!r} orig={orig_hits[:6]} unnamed_orig={orig_unnamed_hits[:4]}")
                if len(set(orig_hits)) == 1:
                    consider(orig_hits[0], [kid], "unique_t", repr(k))
                elif len(set(orig_unnamed_hits)) == 1 and orig_unnamed_hits[0] in orig_unnamed + orig_unnamed_all:
                    consider(orig_unnamed_hits[0], [kid], "unique_t_child", repr(k))
        elif unique_lits:
            for s in unique_lits[:6]:
                orig_hits = orig_str.get(s, [])
                orig_unnamed_hits = [h for h in orig_hits if h not in known_keys]
                print(f"      unique_lit_orig {s!r} orig={orig_hits[:6]} unnamed_orig={orig_unnamed_hits[:4]}")
                if len(set(orig_hits)) == 1:
                    consider(orig_hits[0], [kid], "unique_str", repr(s)[:80])
                elif len(set(orig_unnamed_hits)) == 1 and orig_unnamed_hits[0] in orig_unnamed + orig_unnamed_all:
                    consider(orig_unnamed_hits[0], [kid], "unique_str_child", repr(s)[:80])


print("\n=== dump kids of newly aliased/pinned Detail parents + already-named short aliases ===")
# already-named short Detail aliases that correspond to unnamed original container parents
SHORT_DETAIL_ALIASES = [
    ("pages/fedprojects/deployments/Detail.js", "pages/fedprojects/containers/Deployments/Detail.js"),
    ("pages/fedprojects/statefulsets/Detail.js", "pages/fedprojects/containers/StatefulSets/Detail.js"),
    ("pages/fedprojects/services/Detail.js", "pages/fedprojects/containers/Services/Detail.js"),
    ("pages/fedprojects/ingresses/Detail.js", "pages/fedprojects/containers/Routes/Detail.js"),
    ("pages/fedprojects/volumes/Detail.js", "pages/fedprojects/containers/Volumes/Detail.js"),
    ("pages/fedprojects/secrets/Detail.js", "pages/fedprojects/containers/Secrets/Detail.js"),
    ("pages/fedprojects/configmaps/Detail.js", "pages/fedprojects/containers/ConfigMaps/Detail.js"),
    ("pages/fedprojects/applications/Detail.js", "pages/fedprojects/containers/Applications/Detail.js"),
    ("pages/clusters/nodes/Detail.js", "pages/clusters/containers/Nodes/Detail.js"),
    ("pages/clusters/edgenodes/Detail.js", "pages/clusters/containers/EdgeNodes/Detail.js"),
    ("pages/clusters/customresources/Detail.js", "pages/clusters/containers/CustomResources/Detail.js"),
    ("pages/clusters/roles/Detail.js", "pages/clusters/containers/Roles/Detail.js"),
    ("pages/clusters/log-collections/Detail.js", "pages/clusters/containers/LogCollections/Detail.js"),
    ("pages/clusters/projects/Detail.js", "pages/clusters/containers/Projects/Detail.js"),
    ("pages/clusters/volume-snapshot-classes/Detail.js", "pages/clusters/containers/Storage/VolumeSnapshotClasses/Detail.js"),
    ("pages/clusters/volume-snapshot-content/Detail.js", "pages/clusters/containers/Storage/VolumeSnapshots/SnapshotContent/Detail.js"),
    ("pages/clusters/ippools/Detail.js", "pages/clusters/containers/Network/IPPools/Detail.js"),
    ("pages/clusters/pv/Detail.js", "pages/clusters/containers/Storage/PV/detail.js"),
    ("pages/clusters/gateways/Detail.js", "pages/clusters/containers/Gateway/Detail.js"),
    ("pages/workspaces/containers/Roles.js", "pages/workspaces/containers/Roles/Detail.js"),
]

print("\n=== confirm short alias == original container Detail via unique orig needles ===")
for short, orig in SHORT_DETAIL_ALIASES:
    short_mod = pairs.get(short)
    print(f"\n  SHORT {short} -> {short_mod} orig_known={orig in known_keys}")
    if orig in known_keys or skip_name(orig):
        continue
    if orig not in orig_texts:
        print("    orig_missing_file")
        continue
    needles = unique_needles_for(orig)
    matched = False
    for kind, needle, files in needles[:15]:
        un = [f for f in files if not skip_mod(f)]
        print(f"    {kind} {needle!r} files={sorted(files)[:5]}")
        if short_mod and files == {short_mod}:
            consider(orig, [short_mod], "alias_unique_lit", f"{kind}:{needle!r}")
            matched = True
            break
        if short_mod and unnamed_only(un) == [] and un == [short_mod]:
            consider(orig, [short_mod], "alias_unique_lit", f"{kind}:{needle!r}")
            matched = True
            break
    if not matched:
        # fallback: unique orig importer of uniquely named parent is N/A; dump module t()
        if short_mod:
            dump_kids(orig, short_mod)


print("\n=== dump kids after parent aliases ===")
parent_keys_for_kids = []
for key, _mod, _r in alias_pins + pins:
    if key.endswith("/Detail.js") or key.endswith("/detail.js"):
        parent_keys_for_kids.append(key)
for short, orig in SHORT_DETAIL_ALIASES:
    if orig in known_keys or any(k == orig for k, _m, _r in alias_pins + pins):
        parent_keys_for_kids.append(orig)
for parent_key in list(dict.fromkeys(parent_keys_for_kids)):
    dump_kids(parent_key)


print("\n=== UNIQUE IMPORTER of uniquely named parent (routes + remaining local) ===")
# include newly aliased parents as named
effective_pairs = dict(pairs)
for k, m, _r in alias_pins + pins:
    effective_pairs[k] = m
effective_known = set(effective_pairs)

for rel, key, p in missing:
    if skip_name(key):
        continue
    if any(x[0] == key for x in pins):
        continue
    imps = orig_imp_targets.get(key, [])
    named_imps = [i for i in imps if i in effective_known]
    if len(set(imps)) != 1 or len(named_imps) != 1:
        continue
    parent_key = named_imps[0]
    parent_mod = effective_pairs.get(parent_key)
    if not parent_mod:
        continue
    parent_text = unpacked_texts.get(parent_mod, "")
    kids = []
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if mid_of(m) in known_mods or skip_mod(m) or is_css(m):
            continue
        if int(mid_of(m)) < 70:
            continue
        kids.append(m)
    unnamed_local = [
        c for c in orig_local_imps.get(parent_key, [])
        if c not in effective_known
    ]
    unique_kids = []
    for kid in kids:
        up = sorted(set(importers[kid]))
        if up == [parent_mod]:
            unique_kids.append(kid)
    if len(unique_kids) == 1 and (len(unnamed_local) == 1 or unnamed_local == [key] or key in unnamed_local and len(unique_kids) == 1):
        kid = unique_kids[0]
        if len(unnamed_local) == 1 or unnamed_local == [key]:
            reason = f"unique_importer parent={parent_key} orig_unnamed_local={unnamed_local}"
            if not any(x[0] == key for x in pins):
                pins.append((key, kid, reason))
                print(f"  PIN {key} -> {kid} [{reason}]")
    elif unique_kids and (key.endswith("routes.js") or key in unnamed_local):
        print(
            f"  AMBIG {key} parent={parent_key} unique_kids={unique_kids} "
            f"orig_unnamed_local={unnamed_local}"
        )


print("\n=== DEDUPED NEW PINS (unnamed modules only) ===")
seen = set()
new_count = 0
for key, mod, reason in pins:
    pair = (key, mod)
    if pair in seen:
        continue
    seen.add(pair)
    if mod in known_mods:
        continue
    new_count += 1
    print(f'    "{key}": "{mod}",  # {reason}')
print("new_pin_count", new_count)

print("\n=== DEDUPED ALIAS PINS (original path for already-named module) ===")
seen_a = set()
alias_count = 0
# also include pins that landed on already-named modules
for key, mod, reason in alias_pins + [(k, m, r) for k, m, r in pins if m in known_mods]:
    pair = (key, mod)
    if pair in seen_a:
        continue
    seen_a.add(pair)
    alias_count += 1
    print(f'    "{key}": "{mod}",  # {reason}')
print("alias_pin_count", alias_count)

print("\n=== remaining orig hit-class (pages, not skip) ===")
for cls in ("1-hit", "alias", "2-hit", "0-hit", "multi"):
    items = page_hit_class[cls]
    print(f"\n-- {cls} {len(items)} --")
    for key, kind, needle, files in items[:40]:
        print(f"  {key} [{kind}] {needle!r} -> {files}")
    if len(items) > 40:
        print(f"  ... +{len(items) - 40}")

print("\n=== HIT CLASS COUNTS (all missing orig, not skip) ===")
all_class = {"1-hit": 0, "2-hit": 0, "0-hit": 0, "multi": 0, "alias": 0, "skip": 0}
one_hit_unnamed = []
two_hit = []
zero_hit = []
for rel, key, p in missing:
    if skip_name(key):
        all_class["skip"] += 1
        continue
    needles = unique_needles_for(key)
    classified = "0-hit"
    info = (key, None, [])
    for kind, needle, files in needles:
        un = [f for f in files if not skip_mod(f)]
        unn = unnamed_only(un)
        if len(unn) == 1:
            classified = "1-hit"
            info = (key, needle, unn)
            break
        if len(un) == 1 and not unn:
            classified = "alias"
            info = (key, needle, un)
            continue
        if classified != "alias":
            if len(unn) == 2:
                classified = "2-hit"
                info = (key, needle, unn)
            elif len(unn) > 2:
                classified = "multi"
                info = (key, needle, unn)
    all_class[classified] += 1
    if classified == "1-hit":
        one_hit_unnamed.append(info)
    elif classified == "2-hit":
        two_hit.append(info)
    elif classified == "0-hit":
        zero_hit.append(info)
print(all_class)
print("\n1-hit still unnamed (first 60):")
pinned_keys = {k for k, _m, _r in pins + alias_pins}
for key, needle, files in one_hit_unnamed[:60]:
    mark = "PINNED" if key in pinned_keys else "UNPINNED"
    print(f"  {mark} {key} needle={needle!r} -> {files}")
print("1-hit_total", len(one_hit_unnamed), "unpinned", sum(1 for k, _, _ in one_hit_unnamed if k not in pinned_keys))
print("2-hit_total", len(two_hit), "0-hit_total", len(zero_hit))
print("2-hit sample:")
for key, needle, files in two_hit[:25]:
    print(f"  {key} needle={needle!r} -> {files}")
print("0-hit sample:")
for key, needle, files in zero_hit[:25]:
    print(f"  {key} needle={needle!r} -> {files}")
