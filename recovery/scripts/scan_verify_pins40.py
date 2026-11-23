#!/usr/bin/env python3
"""Strict-verify slice 40 PIN candidates: orig unique needle + unpacked unique hit."""
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
str_pat = re.compile(r"""['"]([A-Za-z][A-Za-z0-9_./:=-]{8,})['"]""")
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")

SKIP_2HIT_T = {
    "YAML_FILE", "ROUTE_SETTINGS", "CREATE_POD_IP_POOL", "TRAFFIC_MANAGEMENT",
    "INTERNAL_ALLOWLIST", "IMAGE_ARTIFACTS", "VALID_URL_DESC", "CODE_CHECK",
    "ISSUE_PL",
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
    rel = p.relative_to(SRC).as_posix()
    key = norm_key(rel)
    text = p.read_text(encoding="utf-8", errors="ignore")
    for k in t_pat.findall(text):
        orig_t[k].append(key)
    for s in str_pat.findall(text):
        orig_str[s].append(key)

CANDIDATES = [
    ("pages/devops/containers/Pipelines/Detail/Artifacts.js", "module-5105.js", "SIZE", "t"),
    ("pages/devops/containers/Pipelines/Detail/PullRequest.js", "module-5088.js", "PullRequest", "str"),
    ("pages/devops/containers/Pipelines/Detail/CodeQuality.js", "module-5106.js", "sonarqubeStore", "str"),
    ("pages/devops/containers/Pipelines/Detail/Layout/runs.js", "module-5118.js", "unknown", "t"),
    ("pages/devops/containers/Pipelines/Detail/Layout/branch.js", "module-5115.js", "PIPELINE_RUN_START_SI", "t"),
    ("pages/devops/containers/Credential/detail/activity.js", "module-5077.js", "fingerprint.usage", "str"),
    ("pages/devops/containers/Credential/detail/detail.js", "module-5076.js", "TYPE_VALUE", "t"),
    ("pages/devops/components/Cards/CodeQualityIssues/ClassIcon.js", "module-1991.js", "codequality-icon", "str"),
    ("pages/devops/components/Cards/CodeQualityIssues.js", "module-5109.js", "DISPLAY_ONLY_LAST_TEN", "t"),
    ("pages/devops/components/Cards/CodeQualityResult.js", "module-5107.js", "PASSED", "t"),
    ("pages/settings/containers/Notification/Mail.js", "module-5156.js", "default-email-config", "str"),
    ("pages/settings/components/Cards/Banner.js", "module-1078.js", "DINGTALK", "t"),
    ("pages/settings/components/Modals/OAuth.js", "module-5129.js", "OAUTH_DESC", "t"),
    ("pages/access/containers/Accounts/Detail/LoginHistory.js", "module-4349.js", "LOGIN_HISTORY", "t"),
    ("pages/fedprojects/containers/Services/Detail/ServiceAccess.js", "module-5010.js", "ACCESS_INFORMATION", "t"),
    ("pages/fedprojects/components/ClusterWorkloadStatus.js", "module-1984.js", "WEIGHTS", "t"),
    ("pages/fedprojects/components/ServiceSetting/ServiceSettingsForm.js", "module-2939.js", "spec.template.spec.selector", "str"),
    ("pages/projects/components/Modals/KubeConfig.js", "module-3895.js", "kubeconfig.yaml", "str"),
    ("pages/devops/containers/Pipelines/Detail/Parameters/Item.js", "module-5113.js", "unique_importer", "imp"),
    ("pages/workspaces/components/Modals/EditGroup/Detail/Card.js", "module-4370.js", "CREATE_DEPARTMENT", "t"),
    ("pages/workspaces/components/Modals/EditGroup/Detail/Form/ProjectSelect.js", "module-4374.js", "PROJECT_VALUE", "t"),
    ("pages/console/containers/Dashboard/Admin/PlatformStatus/Resource.js", "module-3633.js", "unique_importer", "imp"),
    ("pages/devops/containers/Pipelines/Detail/PipelineLogDialog/logItem.js", "module-5099.js", "unique_importer", "imp"),
    ("pages/fedprojects/containers/Applications/Detail/AppComponents/Components/ServiceCard.js", "module-4980.js", "INTERNAL_DOMAIN_NAME_SCAP", "t"),
    ("pages/access/containers/layout.js", "module-4341.js", "ACCESS_CONTROL", "t"),
    ("pages/access/containers/Workspaces.js", "module-4345.js", "ALL_CLUSTERS", "t"),
    ("pages/access/containers/Accounts.js", "module-4343.js", "PLATFORM_ROLE", "t"),
    ("pages/settings/containers/layout.js", "module-5124.js", "PLATFORM_SETTINGS", "t"),
    ("pages/console/containers/KubeCtl.js", "module-3803.js", "kubectl", "str"),
    ("pages/clusters/containers/KubeConfig.js", "module-3803.js", "kubeconfig", "str"),
    # aliases
    ("pages/devops/containers/Members.js", "module-5067.js", "DEVOPS_PROJECT_MEM_DESC", "t"),
    ("pages/devops/containers/Credential.js", "module-5068.js", "DEVOPS_CREDENTIALS_DESC", "t"),
    ("pages/devops/containers/BaseInfo.js", "module-5063.js", "DEVOPS_PROJECT_SCAP", "t"),
    ("pages/devops/containers/Roles.js", "module-5066.js", "DEVOPS_PROJECT_ROLE_EMPTY_DESC", "t"),
    ("pages/devops/containers/Roles/Detail.js", "module-5071.js", "DEVOPS_PROJECT_ROLE_PL", "t"),
    ("pages/devops/containers/CD/detail.js", "module-5119.js", "repoSource.path", "str"),
    ("pages/devops/containers/Pipelines/PipelinesList.js", "module-5053.js", "COPY_PIPELINE", "t"),
    ("pages/devops/containers/CodeRepo/CRList.js", "module-5061.js", "EDIT_CODE_REPO", "t"),
    ("pages/devops/containers/Credential/detail.js", "module-5073.js", "Edit Credential", "t"),
    ("pages/settings/containers/ThirdPartyLogin.js", "module-5128.js", "THIRD_PARTY_LOGIN_Q", "t"),
    ("pages/settings/containers/BaseInfo.js", "module-5125.js", "PLATFORM_ADDRESS", "t"),
    ("pages/settings/containers/Notification/FeiShu.js", "module-5145.js", "default-feishu-config", "str"),
    ("pages/settings/containers/Notification/Slack.js", "module-5139.js", "default-slack-config", "str"),
    ("pages/settings/containers/Notification/WeCom.js", "module-5138.js", "default-wechat-config", "str"),
    ("pages/settings/containers/Notification/Webhook.js", "module-5140.js", "global-webhook-receiver", "str"),
    ("pages/settings/containers/Notification/DingTalk.js", "module-5137.js", "PLEASE_ENTER_APP_KEY", "t"),
    ("pages/access/containers/Roles.js", "module-4344.js", "CREATE_PLATFORM_ROLE", "t"),
    ("pages/access/containers/Accounts/Detail.js", "module-4347.js", "USER_PL", "t"),
    ("pages/access/containers/Roles/Detail.js", "module-4351.js", "PLATFORM_ROLE_PL", "t"),
    ("pages/fedprojects/containers/Overview.js", "module-4935.js", "params.workspace", "str"),
    # extra unique t probes
    ("pages/fedprojects/containers/LogCollection/LogCollection.js", None, "DISABLE_LOG_COLLECTION_TIP", "t"),
    ("pages/fedprojects/containers/Overview/Help.js", None, "HOW_TO_INVITE_USERS", "t"),
    ("pages/fedprojects/containers/Overview/LimitRange.js", None, "DEFAULT_CONTAINER_QUOTAS_NOT_SET", "t"),
    ("pages/fedprojects/components/FedWorkloadStatus.js", None, "REPLICAS_CURRENT", "t"),
    ("pages/fedprojects/components/ClusterWorkloadStatus/ReplicasInput.js", None, "REPLICAS_SCALE_NOTIFY_CONFIRM", "t"),
    ("pages/fedprojects/components/ServiceSetting.js", None, "UNKNOWN_SERVICE_TYPE", "t"),
    ("pages/fedprojects/components/RouteRulesEdit.js", None, "EDIT_ROUTING_RULES", "t"),
    ("pages/devops/components/Cards/EmptyCard.js", None, None, "dump"),
    ("pages/devops/containers/Pipelines/Detail/Events.js", None, None, "dump"),
    ("pages/devops/containers/CD/Components/StatusText.js", None, None, "dump"),
    ("pages/devops/containers/CD/Components/Destination.js", None, None, "dump"),
    ("pages/devops/components/Modals/DevOpsEdit.js", None, "DEVOPS_ADMIN_DESC", "t"),
    ("pages/devops/containers/Pipelines/Detail/PipeLine.js", None, "JENKINS_UNAVAILABLE", "t"),
    ("pages/devops/containers/Pipelines/Detail/PipeLineOld.js", None, "NO_PIPELINE_CONFIG_FILE_TIP", "t"),
    ("pages/access/routes/detail.js", "module-4346.js", None, "dump"),
    ("pages/console/containers/KubeCtl.js", None, "pageClose", "str"),
]


def dump_mod(mod, n=12):
    if not mod or mod not in unpacked:
        print("    MODULE_MISSING", mod)
        return
    text = unpacked[mod]
    print("    css", is_css(mod), "named", mod_to_names.get(mod, []))
    print("    t", list(dict.fromkeys(t_pat.findall(text)))[:n])
    print("    importers", sorted(set(importers[mod]))[:8])
    snippet = text
    for needle in ("class ", "export default", "t(", "title"):
        i = snippet.find(needle)
        if i >= 0:
            print("   ", needle, repr(snippet[i:i + 80].replace("\n", " ")))
            break


def check(key, mod, needle, kind):
    print(f"\n=== {key} -> {mod} [{kind} {needle!r}] ===")
    op = orig_path_for(key)
    if not op:
        print("  ORIG_MISSING")
        return False
    otext = op.read_text(encoding="utf-8", errors="ignore")
    ot = list(dict.fromkeys(t_pat.findall(otext)))
    print("  orig_t", ot[:12])
    if kind == "dump":
        if mod:
            dump_mod(mod)
        else:
            # find unique orig t
            for k in ot:
                ofiles = orig_t.get(k, [])
                ufiles = t_index.get(k, set())
                print(f"    t({k!r}) orig={ofiles[:5]} unpacked={sorted(ufiles)[:6]} n={len(ufiles)}")
        return False
    if needle in SKIP_2HIT_T:
        print("  SKIP_2HIT_T")
        return False
    if kind == "t":
        ofiles = orig_t.get(needle, [])
        ufiles = t_index.get(needle, set())
    elif kind == "str":
        ofiles = orig_str.get(needle, [])
        ufiles = str_index.get(needle, set())
    elif kind == "imp":
        ofiles = [key]
        ufiles = {mod} if mod else set()
        print("  unique_importer check")
        dump_mod(mod)
        if is_css(mod):
            print("  REJECT css")
            return False
        up = sorted(set(importers[mod]))
        print("  importers", up)
        return len(up) == 1 and not is_css(mod)
    else:
        ofiles, ufiles = [], set()
    unnamed = [f for f in ufiles if f not in known_mods]
    print(f"  orig_hits={len(ofiles)} {ofiles[:6]}")
    print(f"  unpacked_hits={len(ufiles)} unnamed={unnamed[:6]} named={[mod_to_names.get(f) for f in ufiles if f in known_mods][:4]}")
    if mod:
        dump_mod(mod)
        if is_css(mod):
            print("  REJECT css")
            return False
        in_mod = needle in unpacked[mod] if needle else False
        print("  needle_in_mod", in_mod)
    ok_orig = ofiles == [key]
    ok_unp = (ufiles == {mod}) if mod else (len(unnamed) == 1)
    alias_ok = (
        mod in known_mods
        and ofiles == [key]
        and (ufiles == {mod} or unnamed == [] and list(ufiles) == [mod])
    )
    new_ok = ok_orig and (ufiles == {mod} or unnamed == [mod]) and mod not in known_mods
    print("  VERDICT", "NEW" if new_ok else ("ALIAS" if alias_ok else "REJECT"),
          "ok_orig", ok_orig, "ok_unp", ok_unp, "alias_ok", alias_ok)
    return new_ok or alias_ok


accepted = []
for item in CANDIDATES:
    key, mod, needle, kind = item
    if mod is None and kind != "dump" and needle:
        # resolve module from unique unpacked hit
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
    ok = check(key, mod, needle, kind)
    if ok:
        accepted.append((key, mod, needle, kind))

print("\n=== ACCEPTED ===")
seen = set()
for key, mod, needle, kind in accepted:
    if (key, mod) in seen:
        continue
    seen.add((key, mod))
    existing = mod_to_names.get(mod, [])
    tag = "ALIAS" if existing else "NEW"
    print(f'    "{key}": "{mod}",  # {tag} {kind} {needle}')
print("accepted_count", len(seen))
