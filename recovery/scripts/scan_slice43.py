#!/usr/bin/env python3
"""Slice 43: unnamed children of last unique Detail routes + remaining unique orig vs KNOWN."""
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
    "4656", "4657",
}
SKIP_NAME_FRAGS = (
    "ColumeInput", "CustomToolTip", "PromQLInput", "ProjectSelect",
    "FormGroupCard", "ItemContianer", "FullscreenModal", "ErrorContainer",
    "EditMonitorFormLayout", "MetircQueryInput", "BillIcon", "ContainerLog",
    "Compose", "GrafanaTargetInput", "SquareButton", "KubeTools",
    "withDefaultSecrets", "KubeCtl", "KubeConfig",
    "EditGroup", "ReplicasInput", "ScheduleCluster",
    "RuleList", "RuleForm", "ClustersMapper", "ContainerImages",
    "ConfigReferenceImpact",
)
SKIP_2HIT_T = {
    "YAML_FILE", "ROUTE_SETTINGS", "CREATE_POD_IP_POOL", "TRAFFIC_MANAGEMENT",
    "INTERNAL_ALLOWLIST", "IMAGE_ARTIFACTS", "VALID_URL_DESC", "CODE_CHECK",
    "ISSUE_PL", "UNFOLD", "FOLD", "ADD_ROUTING_RULE_DESC", "INVALID_PATH_DESC",
    "PATH_EXIST", "IMAGE_VALUE",
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
str_pat = re.compile(r"""['"]([A-Za-z][A-Za-z0-9_./:=-]{8,})['"]""")
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

FAMILY_PREFIXES = (
    "pages/apps/",
    "pages/projects/",
    "pages/clusters/",
    "pages/workspaces/",
    "pages/console/",
    "components/Modals/",
    "components/Forms/",
    "components/HOCs/",
    "stores/",
    "utils/",
)

NEW_PARENTS = [
    "pages/projects/containers/Pods/Detail/routes.js",
    "pages/projects/containers/Pods/Containers/routes.js",
    "pages/projects/containers/Services/Detail/routes.js",
    "pages/projects/containers/Volumes/Detail/routes.js",
    "pages/projects/containers/VolumeSnapshots/Detail/routes.js",
    "pages/projects/containers/Network/Policies/Detail/routes.js",
    "pages/projects/containers/Roles/Detail/routes.js",
    "pages/projects/containers/Applications/CRDAppDetail/routes.js",
    "pages/projects/containers/Applications/OPAppDetail/routes.js",
    "pages/workspaces/containers/Members/Detail/routes.js",
    "pages/workspaces/containers/Repos/Detail/routes.js",
    "pages/workspaces/containers/Apps/Detail/routes.js",
    "pages/clusters/containers/ServiceComponents/Detail/routes.js",
    "pages/clusters/containers/Storage/StorageClasses/Detail/routes.js",
    "pages/apps/components/Modals/VersionSubmit/steps.js",
    "pages/projects/components/Modals/CreateApp/Code.js",
    "components/Forms/CustomScaling/BaseInfo/WorkloadTableForm/WorkloadTable.js",
]

REMAINING_DETAIL_ROUTES = [
    "pages/projects/containers/Deployments/Detail/routes.js",
    "pages/projects/containers/StatefulSets/Detail/routes.js",
    "pages/projects/containers/DaemonSets/Detail/routes.js",
    "pages/projects/containers/Jobs/Detail/routes.js",
    "pages/projects/containers/CronJobs/Detail/routes.js",
    "pages/projects/containers/ConfigMaps/Detail/routes.js",
    "pages/projects/containers/Secrets/Detail/routes.js",
    "pages/projects/containers/ServiceAccounts/Detail/routes.js",
    "pages/projects/containers/Ingresses/Detail/routes.js",
    "pages/fedprojects/containers/Deployments/Detail/routes.js",
    "pages/fedprojects/containers/StatefulSets/Detail/routes.js",
    "pages/fedprojects/containers/Secrets/Detail/routes.js",
    "pages/fedprojects/containers/ConfigMaps/Detail/routes.js",
    "pages/fedprojects/containers/Services/Detail/routes.js",
    "pages/workspaces/containers/Roles/Detail/routes.js",
    "pages/clusters/containers/Roles/Detail/routes.js",
    "pages/clusters/containers/Storage/VolumeSnapshotClasses/Detail/routes.js",
    "pages/clusters/containers/Storage/PV/detail/routes.js",
    "pages/clusters/containers/Storage/VolumeSnapshots/SnapshotContent/Detail/routes.js",
    "pages/clusters/containers/Network/IPPools/Detail/routes.js",
]

COMMON_T = {
    "NAME", "TYPE", "STATUS", "CREATE", "EDIT", "DELETE", "SAVE", "CANCEL",
    "CONFIRM", "OK", "CLOSE", "SEARCH", "REFRESH", "MORE", "ACTION", "ACTIONS",
    "CREATED_AT", "CREATION_TIME", "DESCRIPTION", "PROJECT", "CLUSTER",
    "WORKSPACE", "NAMESPACE", "USERNAME", "PASSWORD", "EMAIL", "ROLE",
    "DOWNLOAD", "COPY", "ENABLE", "DISABLE", "UPDATE_SUCCESSFUL",
    "SUCCESSFUL", "FAILED", "TIME", "REASON", "JOB", "TOTAL", "CLEAR",
    "PROCESS", "DEPARTMENT",
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
family_missing = [
    (rel, key, p)
    for rel, key, p in missing
    if any(key.startswith(pref) or pref in key for pref in FAMILY_PREFIXES)
]

print("=== orig vs KNOWN ===")
print("orig_scanned", len(orig_files), "known_keys", len(known_keys), "missing", len(missing))
print("family_missing", len(family_missing))

print("\n=== remaining unnamed Detail/routes.js ===")
for key in REMAINING_DETAIL_ROUTES:
    print(f"  {'KNOWN' if key in known_keys else 'MISSING'} {key}")

print("\n=== family missing keys (truncated) ===")
for fam in (
    "pages/projects/containers/Deployments/Detail",
    "pages/projects/containers/StatefulSets/Detail",
    "pages/projects/containers/DaemonSets/Detail",
    "pages/projects/containers/Jobs/Detail",
    "pages/projects/containers/CronJobs/Detail",
    "pages/projects/containers/ConfigMaps/Detail",
    "pages/projects/containers/Secrets/Detail",
    "pages/projects/containers/ServiceAccounts/Detail",
    "pages/projects/containers/Ingresses/",
    "pages/projects/containers/Pods/Detail",
    "pages/projects/containers/Applications/",
    "pages/workspaces/containers/",
    "pages/clusters/containers/Storage/",
    "pages/clusters/containers/ServiceComponents/",
    "components/HOCs/",
    "components/Modals/",
    "components/Forms/",
):
    hits = [key for _rel, key, _p in missing if fam.lower() in key.lower()]
    print(f"\n-- {fam} ({len(hits)}) --")
    for k in hits[:40]:
        print(" ", k)
    if len(hits) > 40:
        print(f"  ... +{len(hits) - 40}")

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
    for s in str_pat.findall(text):
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


def dump_kids(parent_key):
    parent_mod = pairs.get(parent_key)
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
    orig_unnamed = [c for c in orig_local_imps.get(parent_key, []) if c not in known_keys]
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
            key = orig_unnamed[0]
            consider(key, [kid], "unique_importer", f"parent={parent_key}")
        elif unique_t:
            for k in unique_t:
                orig_hits = orig_t.get(k, [])
                orig_unnamed_hits = [h for h in orig_hits if h not in known_keys]
                print(f"      unique_t_orig {k!r} orig={orig_hits[:6]} unnamed_orig={orig_unnamed_hits[:4]}")
                if len(set(orig_hits)) == 1:
                    consider(orig_hits[0], [kid], "unique_t", repr(k))
                elif len(set(orig_unnamed_hits)) == 1 and orig_unnamed_hits[0] in orig_unnamed + orig_unnamed_all:
                    consider(orig_unnamed_hits[0], [kid], "unique_t_child", repr(k))


print("\n=== NEW PARENT unnamed children dump ===")
for parent_key in NEW_PARENTS:
    dump_kids(parent_key)

print("\n=== remaining unnamed Detail/routes as unique importer of named Detail parent ===")
for key in REMAINING_DETAIL_ROUTES:
    if key in known_keys or skip_name(key):
        continue
    imps = orig_imp_targets.get(key, [])
    named_imps = [i for i in imps if i in known_keys]
    print(f"  ROUTE {key} orig_imps={imps} named={named_imps}")
    if len(set(imps)) != 1 or len(named_imps) != 1:
        continue
    parent_key = named_imps[0]
    parent_mod = pairs.get(parent_key)
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
    unique_kids = []
    for kid in kids:
        up = sorted(set(importers[kid]))
        if up == [parent_mod]:
            unique_kids.append(kid)
    unnamed_local = [c for c in orig_local_imps.get(parent_key, []) if c not in known_keys]
    print(f"    parent={parent_key}->{parent_mod} unique_kids={unique_kids} orig_unnamed_local={unnamed_local}")
    if len(unique_kids) == 1 and (len(unnamed_local) == 1 or unnamed_local == [key] or key in unnamed_local):
        consider(key, unique_kids, "unique_importer_routes", f"parent={parent_key}")
    elif unique_kids:
        print(f"    AMBIG unique_kids={unique_kids}")


print("\n=== FAMILY unique t/resource/api pins (remaining pages + forms/modals/hocs/stores) ===")
priority = []
rest = []
for rel, key, p in family_missing:
    if skip_name(key):
        continue
    if any(
        key.startswith(pref)
        for pref in (
            "pages/apps/",
            "pages/projects/containers/",
            "pages/clusters/containers/",
            "pages/workspaces/containers/",
            "pages/console/",
            "components/HOCs/",
            "components/Modals/",
            "components/Forms/",
            "stores/",
            "utils/",
        )
    ):
        priority.append((rel, key, p))
    elif any(
        key.startswith(pref)
        for pref in (
            "pages/projects/components/",
            "pages/clusters/components/",
            "pages/workspaces/components/",
            "pages/fedprojects/",
            "pages/devops/",
            "pages/settings/",
            "pages/access/",
        )
    ):
        rest.append((rel, key, p))

scan_list = priority + rest
print("scan_list", len(scan_list), "priority", len(priority), "rest", len(rest))

for rel, key, p in scan_list:
    text = orig_texts[key]
    tkeys = list(dict.fromkeys(t_pat.findall(text)))
    unique_t = [
        k for k in tkeys
        if orig_t[k] == [key] and k not in COMMON_T and k not in SKIP_2HIT_T
    ]
    pinned = False
    for k in unique_t:
        consider(key, t_index.get(k, []), "unique_t", repr(k))
        if any(x[0] == key for x in pins + alias_pins):
            pinned = True
            break
    if pinned:
        continue
    if key.startswith("stores/"):
        unique_strs = []
        for s in dict.fromkeys(str_pat.findall(text)):
            if s in COMMON_T or len(s) < 12:
                continue
            if orig_str[s] == [key]:
                unique_strs.append(s)
        for s in unique_strs[:8]:
            consider(key, str_index.get(s, set()), "unique_str", s)
            if any(x[0] == key for x in pins + alias_pins):
                break
        continue
    for k in dict.fromkeys(res_pat.findall(text)):
        if orig_t.get(k, []) and orig_t[k] != [key]:
            continue
        consider(key, res_index.get(k, []), "resource/module", repr(k))
        if any(x[0] == key for x in pins + alias_pins):
            pinned = True
            break
    if pinned:
        continue
    unique_apis = [
        a for a in dict.fromkeys(api_pat.findall(text) + kapis_pat.findall(text))
        if orig_api[a] == [key]
    ]
    for a in unique_apis:
        consider(key, api_index.get(a, []), "unique_api", a[:80])
        if any(x[0] == key for x in pins + alias_pins):
            pinned = True
            break
    if pinned:
        continue
    unique_strs = []
    for s in dict.fromkeys(str_pat.findall(text)):
        if s in COMMON_T or len(s) < 12:
            continue
        if orig_str[s] == [key]:
            unique_strs.append(s)
    for s in unique_strs[:8]:
        consider(key, str_index.get(s, set()), "unique_str", s)
        if any(x[0] == key for x in pins + alias_pins):
            break


print("\n=== UNIQUE IMPORTER of uniquely named parent (new parents + remaining local) ===")
parent_child_keys = set()
for parent_key in NEW_PARENTS + REMAINING_DETAIL_ROUTES:
    if parent_key in orig_local_imps:
        for child in orig_local_imps[parent_key]:
            if child not in known_keys:
                parent_child_keys.add(child)
    if parent_key in orig_all_imps:
        for child in orig_all_imps[parent_key]:
            if child not in known_keys:
                parent_child_keys.add(child)

for rel, key, p in missing:
    if key in parent_child_keys or key in {x[1] for x in scan_list}:
        if skip_name(key):
            continue
        imps = orig_imp_targets.get(key, [])
        named_imps = [i for i in imps if i in known_keys]
        if len(set(imps)) != 1 or len(named_imps) != 1:
            if key in parent_child_keys:
                print(f"  GAP_CHILD {key} orig_imps={imps} named={named_imps}")
            continue
        parent_key = named_imps[0]
        parent_mod = pairs[parent_key]
        parent_text = unpacked_texts.get(parent_mod, "")
        kids = []
        for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
            if mid_of(m) in known_mods or skip_mod(m) or is_css(m):
                continue
            if int(mid_of(m)) < 70:
                continue
            kids.append(m)
        unnamed_local = [c for c in orig_local_imps.get(parent_key, []) if c not in known_keys]
        unique_kids = []
        for kid in kids:
            up = sorted(set(importers[kid]))
            if up == [parent_mod]:
                unique_kids.append(kid)
        if len(unique_kids) == 1 and (len(unnamed_local) == 1 or unnamed_local == [key]):
            kid = unique_kids[0]
            reason = f"unique_importer parent={parent_key} orig_unnamed_local={unnamed_local}"
            if not any(x[0] == key for x in pins):
                pins.append((key, kid, reason))
                print(f"  PIN {key} -> {kid} [{reason}]")
            else:
                print(f"  ALSO_IMPORTER {key} -> {kid} [{reason}]")
        elif unique_kids and key in parent_child_keys:
            print(
                f"  AMBIG {key} parent={parent_key} unique_kids={unique_kids} "
                f"orig_unnamed_local={unnamed_local}"
            )
        elif key in parent_child_keys:
            print(
                f"  NO_UNIQUE_KID {key} parent={parent_key} kids={kids} "
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
    new_count += 1
    print(f'    "{key}": "{mod}",  # {reason}')
print("new_pin_count", new_count)

print("\n=== DEDUPED ALIAS PINS (original path for already-named module) ===")
seen_a = set()
alias_count = 0
for key, mod, reason in alias_pins:
    pair = (key, mod)
    if pair in seen_a:
        continue
    seen_a.add(pair)
    alias_count += 1
    print(f'    "{key}": "{mod}",  # {reason}')
print("alias_pin_count", alias_count)

print("\n=== new-parent remaining unpinned ===")
pinned_keys = {k for k, _m, _r in pins + alias_pins}
for parent_key in NEW_PARENTS:
    for child in orig_local_imps.get(parent_key, []) + orig_all_imps.get(parent_key, []):
        if child in known_keys or child in pinned_keys or skip_name(child):
            continue
        tkeys = list(dict.fromkeys(t_pat.findall(orig_texts.get(child, ""))))
        print(f"  GAP {child} parent={parent_key} t={tkeys[:8]}")
