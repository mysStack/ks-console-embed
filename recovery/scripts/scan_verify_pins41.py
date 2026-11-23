#!/usr/bin/env python3
"""Strict-verify slice 41 PIN/ALIAS/importer candidates."""
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "src"
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
known_mods = set(pairs.values())
mod_to_names = defaultdict(list)
for k, v in pairs.items():
    mod_to_names[v].append(k)

t_pat = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
str_pat = re.compile(r"""['"]([A-Za-z][A-Za-z0-9_./:=-]{6,})['"]""")
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")

SKIP_MODS = {
    "3225", "3567", "3511", "3513", "3251", "833", "950", "882", "807",
    "1635", "5774", "1636", "1639", "1633", "1634", "1337", "1272", "1389",
    "2853", "1183", "1764", "1111", "1053", "1112",
}

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
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    key = norm_key(p.relative_to(SRC).as_posix())
    text = p.read_text(encoding="utf-8", errors="ignore")
    for k in t_pat.findall(text):
        orig_t[k].append(key)
    for s in str_pat.findall(text):
        orig_str[s].append(key)


def dump_mod(mod, n=14):
    if not mod or mod not in unpacked:
        print("    MODULE_MISSING", mod)
        return
    text = unpacked[mod]
    mid = re.search(r"\d+", mod).group()
    print("    css", is_css(mod), "skip", mid in SKIP_MODS, "named", mod_to_names.get(mod, []))
    print("    t", list(dict.fromkeys(t_pat.findall(text)))[:n])
    print("    importers", sorted(set(importers[mod]))[:10])
    snippet = text
    for needle in ("class ", "export default", "t(", "title"):
        i = snippet.find(needle)
        if i >= 0:
            print("   ", needle, repr(snippet[i:i + 90].replace("\n", " ")))
            break


def same_family_alias(key, existing):
    """True unique alias: same module, containers vs route slug, or index vs file."""
    def family(k):
        parts = k.split("/")
        if len(parts) >= 2 and parts[0] == "pages":
            return parts[1]
        return parts[0]

    key_fam = family(key)
    for e in existing:
        if family(e) != key_fam:
            return False
        # containers path vs route path of same page family is OK
        # different telemetry vs clusters is not
        if "whizard-telemetry" in e or "whizard-telemetry" in key:
            if ("whizard-telemetry" in e) != ("whizard-telemetry" in key):
                return False
    return True


def check(key, mod, needle, kind):
    print(f"\n=== {key} -> {mod} [{kind} {needle!r}] ===")
    if key.endswith(".scss"):
        print("  REJECT scss")
        return False
    op = orig_path_for(key)
    if not op:
        print("  ORIG_MISSING")
        return False
    otext = op.read_text(encoding="utf-8", errors="ignore")
    ot = list(dict.fromkeys(t_pat.findall(otext)))
    print("  orig_t", ot[:14])
    if kind == "t":
        ofiles = orig_t.get(needle, [])
        ufiles = t_index.get(needle, set())
        if needle in COMMON_T:
            print("  SKIP_COMMON_T")
            return False
    elif kind == "str":
        ofiles = orig_str.get(needle, [])
        ufiles = str_index.get(needle, set())
    elif kind == "imp":
        dump_mod(mod)
        if not mod or is_css(mod):
            print("  REJECT css/missing")
            return False
        mid = re.search(r"\d+", mod).group()
        if mid in SKIP_MODS:
            print("  REJECT skip_mod")
            return False
        up = sorted(set(importers[mod]))
        named_up = [(i, mod_to_names.get(i, ["?"])) for i in up]
        print("  importers", named_up)
        unique_named_parent = (
            len(up) == 1 and up[0] in known_mods and not is_css(mod)
        )
        print("  VERDICT", "NEW" if unique_named_parent and mod not in known_mods else "REJECT")
        return unique_named_parent and mod not in known_mods
    else:
        ofiles, ufiles = [], set()

    unnamed = [f for f in ufiles if f not in known_mods]
    named_hits = [(f, mod_to_names.get(f, [])) for f in ufiles if f in known_mods]
    orig_set = sorted(set(ofiles))
    print(f"  orig_hits={len(orig_set)} {orig_set[:8]}")
    print(f"  unpacked_hits={len(ufiles)} unnamed={unnamed[:6]} named={named_hits[:5]}")
    if mod:
        dump_mod(mod)
        if is_css(mod):
            print("  REJECT css")
            return False
        mid = re.search(r"\d+", mod).group()
        if mid in SKIP_MODS:
            print("  REJECT skip_mod")
            return False
        in_mod = needle in unpacked[mod] if needle else False
        print("  needle_in_mod", in_mod)
        if not in_mod and kind != "imp":
            print("  REJECT needle missing")
            return False
    ok_orig = orig_set == [key]
    # uniquely remaining unnamed is OK only if named hits are empty OR all named hits
    # are the candidate module itself (already named) — not other modules (2-hit copies)
    named_other = [f for f in ufiles if f in known_mods and f != mod]
    unique_unp = ufiles == {mod} or (unnamed == [mod] and not named_other)
    alias_ok = (
        mod in known_mods
        and ok_orig
        and unique_unp
        and same_family_alias(key, mod_to_names.get(mod, []))
    )
    new_ok = ok_orig and unique_unp and mod not in known_mods
    print(
        "  VERDICT",
        "NEW" if new_ok else ("ALIAS" if alias_ok else "REJECT"),
        "ok_orig", ok_orig, "unique_unp", unique_unp, "named_other", named_other[:4],
    )
    return new_ok or alias_ok


CANDIDATES = [
    # unique importer / remaining JS children of new parents
    ("pages/fedprojects/containers/Services/Detail/ServiceAccess/ClusterService.js", "module-5011.js", "unique_importer", "imp"),
    ("pages/fedprojects/components/ServiceSetting/Form.js", "module-2938.js", "unique_importer", "imp"),
    ("pages/devops/containers/Roles/Detail/routes.js", "module-5072.js", "unique_importer", "imp"),
    ("components/Modals/DevOpsAllowList/CodeRepoSelect.js", "module-2919.js", "unique_importer", "imp"),
    ("components/Forms/CustomScaling/BaseInfo/WorkloadTableForm.js", "module-2909.js", "unique_importer", "imp"),
    ("pages/projects/components/Modals/GrayReleaseDetail/Edit/config.js", "module-4710.js", "unique_importer", "imp"),
    ("pages/clusters/components/Cards/Monitoring/ETCD/Tab.js", "module-3767.js", "unique_importer", "imp"),
    ("pages/clusters/components/Cards/Monitoring/ServiceComponent/Tab.js", "module-3764.js", "unique_importer", "imp"),
    # unique t/str new pins
    ("components/Modals/AppRepoCreate/url.input.js", "module-3109.js", "APP_REPO_URL_DESC", "t"),
    ("components/Modals/Monitoring/Controller.js", "module-1799.js", "updateMonitorOptions", "str"),
    ("components/Modals/Network/IPPoolsCreate.js", "module-3007.js", "IP_ADDRESS_EMPTY_DESC", "t"),
    ("components/Modals/Create/Form.js", "module-2047.js", "modal-previous", "str"),
    ("components/Forms/CustomScaling/BaseInfo/WorkloadTableForm/Card.js", "module-2911.js", "autoscaling.kubeshpere.io/name", "str"),
    ("utils/devOpsRepos.js", "module-1182.js", "credential_id", "str"),
    ("pages/projects/containers/Pods/Containers/Logs.js", "module-3908.js", "detail.containerID", "str"),
    ("pages/projects/containers/Pods/Containers/Monitoring.js", "module-3906.js", "params.podName", "str"),
    ("pages/projects/containers/Network/Policies/RuleInfo.js", "module-4655.js", "INTERNAL_ALLOWLIST_DESC", "t"),
    ("pages/projects/containers/Alerting/Policies.js", "module-4878.js", "RULE_STATUS", "t"),
    ("pages/projects/containers/ServiceAccounts/Detail/ServiceAccountDetail/Secret.js", "module-3895.js", "DATA_SETTINGS", "t"),
    ("pages/projects/containers/CronJobs/Detail/JobRecords.js", "module-3872.js", "JOB", "t"),
    ("pages/projects/containers/Deployments/Detail/RevisionControl.js", "module-1071.js", "CONFIG_FILE", "t"),
    ("pages/projects/containers/Services/Detail/ResourceStatus.js", "module-3875.js", "EXTERNAL_SERVICE", "t"),
    ("pages/projects/components/Cards/HPA.js", "module-1811.js", "TARGET_CPU_USAGE", "t"),
    ("pages/projects/components/Cards/S2iBuilder.js", "module-1814.js", "IMAGE_BUILDING", "t"),
    ("pages/projects/components/Cards/Ingresses.js", "module-1450.js", "ROUTE_PL", "t"),
    ("pages/projects/components/Cards/ServiceMonitors/Item.js", "module-3878.js", "MONITORING_EXPORTER", "t"),
    ("pages/projects/components/Modals/RepoApp/Apps.js", "module-3093.js", "APP_TEMPLATES_MODAL_DESC", "t"),
    ("pages/projects/components/Modals/CreateApp/Routes.js", "module-2620.js", "ROUTE_SETTINGS_DESC", "t"),
    ("pages/projects/components/Modals/CreateApp/Services/ServiceList/Item.js", "module-2608.js", "workload.spec.placement.clusters", "str"),
    ("pages/projects/components/Modals/CreateApp/Services/ServiceList.js", "module-2607.js", "APP_CREATE_SERVICE_DESC", "t"),
    ("pages/projects/components/Modals/CreateApp/Services/ServiceList/ClusterDiffs.js", "module-2609.js", "SERVICE_SETTINGS", "t"),
    ("pages/projects/components/Modals/CreateApp/Services/ServiceList/ClusterDiffs/ContainerPorts.js", "module-2616.js", "NAME_VALUE", "t"),
    ("pages/projects/components/Modals/CreateApp/Services/ServiceList/ClusterDiffs/ContainersMapper.js", "module-2612.js", "spec.template.spec.init_containers", "str"),
    ("pages/projects/components/Modals/TracingDetail/SpanDetail.js", "module-4780.js", "PROCESS", "t"),
    ("pages/projects/components/Modals/TracingDetail/SpanGraph/TimeRange.js", "module-4784.js", "CLEAR", "t"),
    ("pages/apps/containers/StoreManage/Detail/AppInformation.js", "module-4404.js", "params.appId", "str"),
    ("pages/apps/components/Avatar.js", "module-1025.js", "avatar-title", "str"),
    ("pages/apps/components/Cards/CreateInfo.js", "module-3137.js", "FILE_MAX_SIZE_ICON", "t"),
    ("pages/apps/components/Cards/BaseInfo.js", "module-3154.js", "SERVICE_PROVIDER_WEBSITE", "t"),
    ("pages/apps/components/Modals/VersionSubmit.js", "module-4416.js", "SUBMIT_FOR_REVIEW", "t"),
    ("pages/workspaces/containers/Groups/GroupUser/User.js", "module-4380.js", "DEPARTMENT", "t"),
    ("pages/workspaces/containers/Overview/ResourceUsage/Physical.js", "module-4446.js", "PHYSICAL_RESOURCES", "t"),
    ("pages/workspaces/containers/Members/Detail/DevOps.js", "module-4398.js", "DEVOPS_PROJECTS", "t"),
    ("pages/workspaces/components/Modals/EditBasicInfo.js", "module-4356.js", "spec.clusters", "str"),
    ("pages/clusters/containers/Members.js", "module-4094.js", "CLUSTER_MEMBER", "str"),
    ("pages/clusters/containers/Storage/PV/detail.js", "module-2062.js", "VOLUME_HANDLE", "t"),
    ("pages/clusters/containers/Network/IPPools.js", "module-2409.js", "TOTAL_VALUE", "t"),
    ("pages/clusters/containers/Network/IPPools/Detail.js", "module-3004.js", "POD_IP_POOL_PL", "t"),
    ("pages/clusters/containers/Overview/Dashboard/ResourcesUsage/ResourceItem.js", "module-4508.js", "TOTAL", "t"),
    ("pages/clusters/components/ResourceTable.js", "module-811.js", "nameAndAlias", "str"),
    # aliases: same-family containers vs route
    ("pages/console/containers/Dashboard.js", "module-3629.js", "LAST_LOGIN_TIME", "t"),
    ("pages/console/containers/Support.js", "module-3644.js", "COMMUNITY_SUPPORT", "t"),
    ("pages/projects/containers/Services.js", "module-4552.js", "SERVICE_LIST", "t"),
    ("pages/projects/containers/Members.js", "module-4647.js", "PROJECT_MEMBER_EMPTY_DESC", "t"),
    ("pages/projects/containers/Applications/OPApps.js", "module-4542.js", "NO_TEMPLATE_BASED_APP_FOUND", "t"),
    ("pages/projects/containers/GrayRelease.js", "module-1900.js", "PREREQUEST_FOR_USE_GRAYRELEASE_Q", "t"),
    ("pages/projects/containers/BaseInfo.js", "module-4627.js", "DELETE_PROJECT_TIP", "str"),
    ("pages/projects/containers/Roles.js", "module-4646.js", "PROJECT_ROLE_EMPTY_DESC", "t"),
    ("pages/projects/containers/Roles/Detail.js", "module-4892.js", "PROJECT_ROLE_PL", "t"),
    ("pages/projects/containers/VolumeSnapshots/Detail.js", "module-1409.js", "detail.restoreSize", "str"),
    ("pages/projects/containers/Applications/OPAppDetail.js", "module-4787.js", "editTemplate", "str"),
    ("pages/projects/containers/Applications/CRDAppDetail.js", "module-4742.js", "ADD_ROUTE", "t"),
    ("pages/projects/containers/Pods/Detail.js", "module-1228.js", "status.qosClass", "str"),
    ("pages/projects/containers/Pods/Containers/Detail.js", "module-1229.js", "IMAGE_ID", "t"),
    ("pages/projects/containers/Network/Policies.js", "module-4654.js", "NETWORK_ISOLATION_Q", "t"),
    ("pages/projects/containers/Network/Policies/Detail.js", "module-1830.js", "NETWORK_POLICY_PL", "t"),
    ("pages/projects/containers/ServiceAccounts/Detail.js", "module-1406.js", "SERVICE_ACCOUNT_PL", "t"),
    ("pages/projects/containers/Volumes/Detail.js", "module-1230.js", "CLONE", "t"),
    ("pages/projects/containers/Services/Detail.js", "module-1225.js", "SESSION_AFFINITY", "t"),
    ("pages/workspaces/containers/Repos.js", "module-4388.js", "HOW_TO_USE_APP_REPO_Q", "t"),
    ("pages/workspaces/containers/Members.js", "module-4363.js", "INVITE_WORKSPACE_MEMBER_DESC", "t"),
    ("pages/workspaces/containers/Apps.js", "module-4386.js", "DEVELOP_APP_TITLE", "t"),
    ("pages/workspaces/containers/DevOps.js", "module-4385.js", "DEVOPS_TIP_GITOPS_Q", "t"),
    ("pages/workspaces/containers/BaseInfo.js", "module-4355.js", "WORKSPACE_BASE_INFO_Q1", "t"),
    ("pages/workspaces/containers/Groups.js", "module-4364.js", "DEPARTMENT_PL", "t"),
    ("pages/workspaces/containers/Roles.js", "module-4362.js", "CREATE_WORKSPACE_ROLE", "t"),
    ("pages/workspaces/containers/Apps/Detail.js", "module-4402.js", "EDIT_APP_DESC", "t"),
    ("pages/workspaces/containers/Overview/UsageRanking.js", "module-4452.js", "match.params.workspace", "str"),
    ("pages/workspaces/containers/Members/Detail.js", "module-4394.js", "WORKSPACE_MEMBER_PL", "t"),
    ("pages/workspaces/containers/Repos/Detail.js", "module-4425.js", "APP_REPOSITORY_PL", "t"),
    ("pages/clusters/containers/LogCollections.js", "module-3808.js", "ADDRESS_VALUE", "t"),
    ("pages/clusters/containers/Clusters.js", "module-3665.js", "HOST_CLUSTER_TCAP", "t"),
    ("pages/clusters/containers/Visibility.js", "module-3801.js", "CLUSTER_VISIBILITY_Q1", "t"),
    ("pages/clusters/containers/BaseInfo.js", "module-3798.js", "cluster.update.kubeconfig", "str"),
    ("pages/clusters/containers/ServiceComponents.js", "module-3729.js", "SERVICE_COMPONENTS_DESC", "t"),
    ("pages/clusters/containers/ServiceComponents/Detail.js", "module-3995.js", "SYSTEM_COMPONENT", "str"),
    ("pages/clusters/containers/Storage/VolumeSnapshotClasses.js", "module-3718.js", "volumesnapshotclass", "str"),
    ("pages/clusters/containers/Storage/StorageClasses/Detail.js", "module-3991.js", "SET_AS_DEFAULT_STORAGE_CLASS", "t"),
    ("pages/clusters/containers/Network/Policies.js", "module-3804.js", "NETWORK_POLICY_Q", "t"),
    # should reject: cross-family aliases
    ("pages/clusters/containers/LogCollections/Detail.js", "module-4255.js", "detail.enabled", "str"),
    ("pages/clusters/containers/Monitor/Resource.js", "module-4152.js", "MONITORING_APPLICATION_DESC", "t"),
    ("pages/clusters/containers/Monitor/Cluster.js", "module-4137.js", "MONITORING_CLUSTER_DESC", "t"),
    ("stores/logging.js", "module-1382.js", "kapis/logging.kubesphere.io/v1alpha2", "str"),
    ("stores/workload.js", "module-318.js", "non-existing", "str"),
    ("components/Modals/CustomMonitoring/components/FormInput/GraphType.js", "module-2781.js", "SINGLE_STATE_CHART", "t"),
    ("components/Forms/Notification/SlackForm/Item.js", "module-1705.js", "CHANNEL_EXISTS", "t"),
    # extra unique remaining from new parents
    ("pages/fedprojects/containers/Services/Detail/ServiceAccess/ClusterService.js", "module-5011.js", "EDIT_EXTERNAL_ACCESS", "t"),
    ("pages/fedprojects/components/ServiceSetting/Form.js", "module-2938.js", "INTERNAL_ACCESS_MODE", "t"),
    ("pages/workspaces/components/Modals/EditGroup.js", None, "DEPARTMENT_MANAGEMENT", "t"),
    ("pages/devops/containers/Pipelines/Detail/layout.js", None, "pipelineStore", "str"),
    ("pages/devops/components/Cards/EmptyCard.js", None, None, "dump"),
    ("pages/console/containers/Dashboard/Admin/PlatformStatus.js", None, "LAST_UPDATE_TIME", "t"),
    ("pages/console/containers/Dashboard/Admin/PlatformStatus.js", None, "kubesphere_workspace_count", "str"),
    ("pages/fedprojects/components/ClusterWorkloadStatus/ReplicasInput.js", None, "REPLICAS_SCALE_NOTIFY_CONFIRM", "t"),
    ("pages/fedprojects/components/ClusterWorkloadStatus/ScheduleCluster.js", None, "WEIGHT", "t"),
]


def check_with_resolve(key, mod, needle, kind):
    if kind == "dump":
        print(f"\n=== DUMP {key} ===")
        op = orig_path_for(key)
        if not op:
            print("  ORIG_MISSING")
            return False
        otext = op.read_text(encoding="utf-8", errors="ignore")
        ot = list(dict.fromkeys(t_pat.findall(otext)))
        print("  orig_t", ot)
        for k in ot:
            ofiles = orig_t.get(k, [])
            ufiles = t_index.get(k, set())
            unnamed = [f for f in ufiles if f not in known_mods]
            print(f"    t({k!r}) orig={ofiles[:5]} unpacked={sorted(ufiles)[:6]} unnamed={unnamed[:4]}")
        return False
    if mod is None and needle:
        if kind == "t":
            ufiles = t_index.get(needle, set())
        else:
            ufiles = str_index.get(needle, set())
        unnamed = [f for f in ufiles if f not in known_mods]
        if len(ufiles) == 1:
            mod = next(iter(ufiles))
        elif len(unnamed) == 1:
            mod = unnamed[0]
        print(f"\n# resolved {key} {needle} -> {mod} unnamed={unnamed[:4]} all={sorted(ufiles)[:6]}")
    return check(key, mod, needle, kind)


accepted = []
for item in CANDIDATES:
    key, mod, needle, kind = item
    ok = check_with_resolve(key, mod, needle, kind)
    if ok:
        accepted.append((key, mod if mod else "RESOLVED", needle, kind))

print("\n=== ACCEPTED ===")
seen = set()
for key, mod, needle, kind in accepted:
    # re-resolve None mods
    if mod == "RESOLVED":
        continue
    if (key, mod) in seen:
        continue
    seen.add((key, mod))
    existing = mod_to_names.get(mod, [])
    tag = "ALIAS" if existing else "NEW"
    print(f'    "{key}": "{mod}",  # {tag} {kind} {needle}')
print("accepted_count", len(seen))
