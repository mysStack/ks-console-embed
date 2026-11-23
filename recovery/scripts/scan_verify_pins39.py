#!/usr/bin/env python3
"""Strict-verify orig-gap PIN candidates: 1-hit in ALL unpacked, no collisions."""
from pathlib import Path
from collections import defaultdict
import re
import ast

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "src"
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
known_mods = {v for v in pairs.values()}
mod_to_names = defaultdict(list)
for k, v in pairs.items():
    mod_to_names[v].append(k)

t_pat = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")

CANDIDATES = [
    ("components/EditForms/GrayReleaseComponent.js", "module-4711.js", "VERSION_EXISTS"),
    ("components/Cards/Containers/Item.js", "module-1219.js", "RESTART"),
    ("components/Cards/Tips.js", "module-1763.js", "HIDE_HELP_INFORMATION"),
    ("components/Cards/Pods/Item.js", "module-3838.js", "READY_VALUE"),
    ("components/Cards/App.js", "module-2639.js", "MAINTAINER_VALUE"),
    ("components/Cards/Monitoring/Controller/TimeSelector/Range/Custom.js", "module-1164.js", "TIMERANGE_SELECTOR_ERROR_MSG"),
    ("components/Cards/Containers/EnvVariables.js", "module-1398.js", "INIT_CONTAINER_VALUE"),
    ("components/Modals/DevOpsAllowList/Destinations.js", "module-2918.js", "MULTI_CLUSTER_PROJECT_NOT_FOR_CD"),
    ("components/Modals/EditAuthorization/CheckItem.js", "module-3321.js", "DESELECT_RESOURCE_FIRST"),
    ("components/Modals/AppRepoCreate/url.input.js", "module-3109.js", "VALID_URL_DESC"),
    ("components/Modals/EventSearch/Event/utils.js", "module-1759.js", "SEARCH_BY_MESSAGE"),
    ("components/Modals/EventSearch/Event/Detail/MetadataModal.js", "module-3486.js", "COUNT"),
    ("components/Modals/Monitoring/Controller.js", "module-1799.js", "updateMonitorOptions"),
    ("components/Modals/AuditingSearch/Auditing/utils.js", "module-1762.js", "AUDIT_LOG_WORKSPACE_TIP"),
    ("components/Modals/Network/IPPoolsCreate.js", "module-2409.js", "CREATE_POD_IP_POOL"),
    ("components/Modals/LogSearch/Logging/SearchInput.js", "module-985.js", "TIME_RANGE_LAST"),
    ("components/Layout/LoginInfo.js", "module-4062.js", "LOG_OUT"),
    ("components/Clusters/ClusterTitle.js", "module-816.js", "KUBE_CONFIG_IS_EXPIRED"),
    ("components/Graph/Detail.js", "module-4759.js", "TRAFFIC_MANAGEMENT"),
    ("components/Graph/Edge.js", "module-4753.js", "indefinite"),
    ("components/Graph/Card.js", "module-4756.js", "TRAFFIC_ENTRY"),
    ("components/Graph/Detail/Monitors/ServiceMonitor.js", "module-4761.js", "TRAFFIC_RPS"),
    ("components/Graph/Detail/Monitors/WorkloadMonitor.js", "module-4762.js", "HTTP_INBOUND_TRAFFIC"),
    ("components/Graph/Detail/PolicyForm/Session.js", "module-4767.js", "HASH_BASED_ON_HTTP_HEADER"),
    ("components/Graph/Detail/PolicyForm.js", "module-4765.js", "LB_ROUND_ROBIN"),
    ("components/Graph/Detail/Pods/Item.js", "module-4770.js", "UPDATED_AT_VALUE_SCAP"),
    ("components/Base/Upload/Upload.js", "module-2398.js", "webkitdirectory"),
    ("components/Base/Upload/utils/request.js", "module-2399.js", "XMLHttpRequest"),
    ("components/Forms/Opensearch/Settings.js", "module-1684.js", "LOG_COLLECTION_OS_URL_TIPS"),
    ("components/Forms/Fluentd/Settings.js", "module-4168.js", "LOG_COLLECTION_FLUENTD_URL_TIPS"),
    ("components/Forms/CustomScaling/BaseInfo.js", "module-2903.js", "EMPTY_SCALING_OBJECT_MESSAGE"),
    ("components/Forms/CustomScaling/BaseInfo/WorkloadAddCard.js", "module-2904.js", "ADD_WORKLOAD_DESC"),
    ("pages/console/containers/NotFound.js", "module-3638.js", "NOT_FOUND_DESC"),
    ("pages/console/containers/Support.js", "module-4063.js", "KUBE_SPHERE_ENTERPRISE_DESC"),
    ("pages/console/containers/Dashboard/Admin.js", "module-3630.js", "PLATFORM_VERSION"),
    ("pages/console/containers/Dashboard/Admin/History/Card.js", "module-3635.js", "MULTI_CLUSTER_DEPLOYMENT"),
    ("pages/console/containers/Dashboard/Admin/History.js", "module-3634.js", "NO_HISTORY_TITLE"),
    ("pages/console/containers/Dashboard/Admin/PlatformStatus.js", "module-3632.js", "LAST_UPDATE_TIME"),
    ("pages/projects/routes/grayrelease.js", "module-4668.js", "RELEASE_MODE_PL"),
    ("pages/projects/containers/Applications/Banner.js", "module-1240.js", "TEMPLATE_BASED_APP_PL"),
    ("pages/projects/containers/ImageBuilder/Detail/ImageProduct.js", "module-4906.js", "IMAGE_ARTIFACTS"),
    ("pages/projects/containers/BaseInfo/DefaultResource.js", "module-1232.js", "CPU_REQUEST_CORE"),
    ("pages/projects/containers/Applications/CRDAppDetail/GrayRelease.js", "module-4774.js", "CREATE_GRAYSCALE_RELEASE_TASK"),
    ("pages/projects/containers/Applications/OPAppDetail/AppTemplate.js", "module-4790.js", "NO_APP_DESC_FOUND"),
    ("pages/projects/containers/Pods/Detail/ScheduleInfo/Chart.js", "module-3899.js", "节点已用请求"),
    ("pages/projects/containers/Pods/Detail/ScheduleInfo.js", "module-1827.js", "POD_SCHEDULING_METHOD"),
    ("pages/projects/containers/Network/Policies/IsolateInfo.js", "module-4658.js", "PROJECT_NETWORK_ISOLATION"),
    ("pages/projects/containers/Network/Policies/RuleInfo.js", "module-4655.js", "INTERNAL_ALLOWLIST"),
    ("pages/projects/containers/Network/Policies/Detail/Viewer.js", "module-3911.js", "DESTINATION"),
    ("pages/projects/containers/Alerting/Policies.js", "module-4878.js", "RULE_STATUS"),
    ("pages/projects/containers/ServiceAccounts/Detail/ServiceAccountDetail/Secret.js", "module-3895.js", "DATA_SETTINGS"),
    ("pages/projects/containers/Volumes/Detail/ResourceStatus.js", "module-3918.js", "MOUNTED_PODS"),
    ("pages/projects/containers/CronJobs/Detail/JobRecords.js", "module-3872.js", "JOB"),
    ("pages/projects/containers/Base/Detail.js", "module-806.js", "getWatchUrl"),
    ("pages/projects/containers/Deployments/Detail/RevisionControl.js", "module-1071.js", "CONFIG_FILE"),
    ("pages/projects/containers/Services/Detail.js", "module-3590.js", "ENDPOINT"),
    ("pages/projects/containers/Services/Topology.js", "module-4553.js", "#canvas"),
    ("pages/projects/containers/Services/Topology/Service.js", "module-4602.js", "POD_COUNT_VALUE"),
    ("pages/projects/containers/Services/Topology/Detail/Connections.js", "module-4609.js", "connections"),
    ("pages/projects/containers/Services/Detail/ResourceStatus.js", "module-3875.js", "EXTERNAL_SERVICE"),
    ("pages/projects/containers/Jobs/Detail/ExcuteRecords.js", "module-3869.js", "SN_NO"),
    ("pages/projects/components/WorkloadStatus.js", "module-2907.js", "HPA_SET_TIP"),
    ("pages/projects/components/JobStatus.js", "module-1068.js", "JobRunning"),
    ("pages/projects/components/Cards/HPA.js", "module-1811.js", "TARGET_CPU_USAGE"),
    ("pages/projects/components/Cards/Services/Item.js", "module-4745.js", "MONITORING_EXPORTER_VALUE"),
    ("pages/projects/components/Cards/S2iBuilder/log.js", "module-3851.js", "CONTAINER_LOG_NOT_ENABLED"),
    ("pages/projects/components/Cards/S2iBuilder.js", "module-1814.js", "IMAGE_BUILDING"),
    ("pages/projects/components/Cards/Ingresses/Item.js", "module-4747.js", "DOMAIN_NAME_VALUE"),
    ("pages/projects/components/Cards/Ingresses.js", "module-1450.js", "ROUTE_PL"),
    ("pages/projects/components/Cards/ServiceMonitors/Item.js", "module-3878.js", "MONITORING_EXPORTER"),
    ("pages/projects/components/Cards/ServiceMonitors.js", "module-3877.js", "SERVICE_MONITORING_EXPORTER"),
    ("pages/projects/components/Cards/ImageBuilderLastRun.js", "module-4897.js", "FILE_SIZE_VALUE"),
    ("pages/projects/components/Cards/Placement.js", "module-945.js", "MULTI_CLUSTER_RESOURCE_TIP"),
    ("pages/projects/components/Cards/Tracing/Item.js", "module-4777.js", "NUM_SPAN_SI"),
    ("pages/projects/components/Cards/Tracing.js", "module-1917.js", "TRACING_NO_DATA_DESC"),
    ("pages/projects/components/Cards/ImageArtifacts/Item.js", "module-4908.js", "IMAGE_SIZE_SCAP"),
    ("pages/projects/components/Cards/S2iBuilder/RerunModal.js", "module-3849.js", "NEW_TAG"),
    ("pages/projects/components/Cards/S2iBuilder/BuilderInfo.js", "module-3847.js", "SOURCE_URL"),
    ("pages/projects/components/Modals/TracingDetail.js", "module-1919.js", "CALLED_SERVICES"),
    ("pages/projects/components/Modals/PodsMonitoring/Resources.js", "module-3860.js", "MONITORING_SELECT_LIMIT_MSG"),
    ("pages/projects/components/Modals/GrayReleaseDetail.js", "module-4703.js", "DELETE_GRAYSCALE_RELEASE_TASK_DESC"),
    ("pages/projects/components/Modals/RepoApp/Apps.js", "module-3093.js", "APP_TEMPLATES_MODAL_DESC"),
    ("pages/projects/components/Modals/GrayReleaseDetail/Component.js", "module-4704.js", "MIRRORED_TRAFFIC_TIP"),
    ("pages/projects/components/Modals/GrayReleaseDetail/Edit.js", "module-4709.js", "EDIT_GRAYSCALE_RELEASE_TASK"),
    ("pages/projects/components/Modals/CreateApp/Services.js", "module-2570.js", "APPLICATION_SERVICE_DESC"),
    ("pages/projects/components/Modals/CreateApp/Code.js", "module-2625.js", "YAML_FILE"),
    ("pages/projects/components/Modals/CreateApp/Routes.js", "module-2620.js", "ROUTE_SETTINGS"),
    ("pages/projects/components/Modals/CreateApp/BaseInfo.js", "module-2568.js", "APP_BASIC_INFORMATION_DESC"),
    ("pages/projects/components/Modals/CreateApp/Services/ServiceList.js", "module-2607.js", "APP_CREATE_SERVICE_DESC"),
    ("pages/projects/components/Modals/CreateApp/Services/ServiceList/ClusterDiffs.js", "module-2609.js", "SERVICE_SETTINGS"),
    ("pages/projects/components/Modals/CreateApp/Services/ServiceList/ClusterDiffs/ContainerPorts.js", "module-2616.js", "NAME_VALUE"),
    ("pages/projects/components/Modals/ServiceMonitor/Authorization.js", "module-2629.js", "NO_AUTHENTICATION_TCAP"),
    ("pages/projects/components/Modals/TracingDetail/SpanDetail.js", "module-4780.js", "PROCESS"),
    ("pages/projects/components/Modals/TracingDetail/SpanGraph/TimeRange.js", "module-4784.js", "CLEAR"),
    ("pages/apps/containers/StoreManage/Detail/AuditRecord.js", "module-4405.js", "RELEASE_RECORD"),
    ("pages/apps/components/AppPreview.js", "module-3096.js", "VERSION_INTRO_EMPTY_DESC"),
    ("pages/apps/components/AppInfo.js", "module-1715.js", "APP_DEPLOY_AGREEMENT_1"),
    ("pages/apps/components/AppBase.js", "module-1709.js", "CATEGORY_COLON"),
    ("pages/apps/components/Lists/VersionList/Item.js", "module-4410.js", "DEVELOPER"),
    ("pages/apps/components/Cards/ConfigFile.js", "module-4411.js", "NO_VERSION_INFO_DESC"),
    ("pages/apps/components/Cards/CreateInfo.js", "module-3137.js", "FILE_MAX_SIZE_ICON"),
    ("pages/apps/components/Cards/ReadmeEdit.js", "module-2464.js", "START_EDITING"),
    ("pages/apps/components/Cards/TestSteps.js", "module-4418.js", "VERSION_SUBMIT_NOTE"),
    ("pages/apps/components/Cards/UploadInfo.js", "module-1373.js", "DOWNLOAD_SUCCESSFUL"),
    ("pages/apps/components/Cards/UpdateLog.js", "module-3160.js", "NO_UPDATE_LOG_DESC"),
    ("pages/apps/components/Cards/BaseInfo.js", "module-3154.js", "SERVICE_PROVIDER_WEBSITE"),
    ("pages/apps/components/Cards/ScreenshotsEdit.js", "module-2462.js", "SCREENSHOTS_COLON"),
    ("pages/apps/components/Cards/AppReadme.js", "module-3156.js", "NO_DOCUMENT_FOUND"),
    ("pages/apps/components/Modals/HelmUpload/files.js", "module-3139.js", "CHART_FILE_DESC"),
    ("pages/apps/components/Modals/VersionSubmit.js", "module-4416.js", "SUBMIT_FOR_REVIEW"),
    ("pages/apps/components/Modals/VersionSubmit/steps.js", "module-4417.js", "TEST_STEPS"),
    ("pages/apps/components/Forms/VersionEdit.js", "module-4420.js", "ENTER_VERSION_NUMBER_TIP"),
    ("pages/apps/components/Forms/AppBaseEdit.js", "module-2460.js", "APP_ICON_FORMAT"),
    ("pages/devops/containers/CD/detail/SyncStatus.js", "module-5121.js", "CURRENT_SYNC_STATUS"),
    ("pages/devops/containers/Pipelines/Detail/routes.js", "module-5081.js", "PIPELINE_CONFIGURATION"),
    ("pages/devops/containers/Pipelines/Detail/Artifacts.js", "module-5105.js", "SIZE"),
    ("pages/devops/containers/Pipelines/Detail/TaskStatus.js", "module-5091.js", "INITIALIZING_PIPELINE"),
    ("pages/devops/containers/Pipelines/Detail/PullRequest.js", "module-5088.js", "PullRequest"),
    ("pages/devops/containers/Pipelines/Detail/CodeQuality.js", "module-5106.js", "sonarqubeStore"),
    ("pages/devops/containers/Pipelines/Detail/Layout/pipeline.js", "module-5117.js", "VIEW_SCAN_LOGS"),
    ("pages/devops/containers/Pipelines/Detail/Layout/runs.js", "module-5118.js", "unknown"),
    ("pages/devops/containers/Pipelines/Detail/Parameters.js", "module-5112.js", "NO_BUILD_PARAMETERS"),
    ("pages/devops/containers/Pipelines/Detail/Activity.js", "module-5090.js", "ACTIVITY_EMPTY_TIP"),
    ("pages/devops/containers/Pipelines/Detail/Commit.js", "module-5104.js", "NO_COMMIT_FOUND"),
    ("pages/devops/containers/Pipelines/Detail/PipelineLogDialog/Timer.js", "module-5098.js", "DURATION_VALUE"),
    ("pages/devops/containers/Pipelines/Detail/PipelineLogDialog.js", "module-5097.js", "VIEW_REAL_TIME_LOG"),
    ("pages/devops/containers/Pipelines/Detail/Branch.js", "module-5083.js", "NO_BRANCHES_FOUND"),
    ("pages/devops/containers/Pipelines/Detail/PipelineLogDialog/FullLogs.js", "module-5101.js", "STOP_REAL_TIME_LOG"),
    ("pages/devops/containers/Credential/detail/detail.js", "module-5076.js", "TYPE_VALUE"),
    ("pages/devops/components/PipelineStatus/card.js", "module-5094.js", "TASK_FAILED_NOT_OPERATIONAL"),
    ("pages/devops/components/DetailNav.js", "module-1992.js", "HEALTH_STATUS_SCAP"),
    ("pages/devops/components/Health.js", "module-1253.js", "NO_STATUS"),
    ("pages/devops/components/Status.js", "module-922.js", "pipeline_status_icon"),
    ("pages/devops/components/Cards/CodeQualityIssues/issue.js", "module-5110.js", "LINE_VALUE"),
    ("pages/devops/components/Cards/CodeQualityIssues.js", "module-5109.js", "ISSUE_PL"),
    ("pages/devops/components/Cards/CodeQualityResult.js", "module-5107.js", "CODE_CHECK"),
    ("pages/settings/components/Cards/Banner.js", "module-1078.js", "DINGTALK"),
    ("pages/settings/components/Modals/GithubOAuth.js", "module-5131.js", "GITHUB_OAUTH_DESC"),
    ("pages/workspaces/containers/Groups/GroupUser/User.js", "module-4380.js", "DEPARTMENT"),
    ("pages/workspaces/containers/Groups/GroupUser.js", "module-4379.js", "NOT_ASSIGNED_TCAP"),
    ("pages/workspaces/containers/Overview/ResourceUsage/Virtual.js", "module-4451.js", "workspace_deployment_count"),
    ("pages/workspaces/containers/Overview/ResourceUsage/Statistics.js", "module-4447.js", "DEVOPS_PROJECT_TCAP"),
    ("pages/workspaces/containers/Overview/ResourceUsage/Physical.js", "module-4446.js", "PHYSICAL_RESOURCES"),
    ("pages/workspaces/containers/Members/Detail/DevOps.js", "module-4398.js", "DEVOPS_PROJECTS"),
    ("pages/workspaces/components/Modals/EditGroup/Detail.js", "module-4369.js", "DELETE_PARENT_GROUP_TIP"),
    ("pages/workspaces/components/Modals/EditGroup/Department.js", "module-4366.js", "NO_DEPARTMENT_TIP"),
    ("pages/workspaces/components/Modals/EditGroup/Detail/Form/DevopsSelect.js", "module-4373.js", "DEVOPS_PROJECT_ROLES_VALUE"),
    ("pages/workspaces/components/Modals/EditGroup/Detail/Form.js", "module-4372.js", "GROUP_WORKSPACE_ROLE_DESC"),
    ("pages/workspaces/components/Modals/EditGroup/Detail/Card.js", "module-4370.js", "DELETING"),
    ("pages/access/containers/Accounts/Detail/LoginHistory.js", "module-4349.js", "LOGIN_HISTORY"),
    ("pages/access/containers/Roles/Detail/AuthorizedUsers.js", "module-1073.js", "NO_AUTHORIZED_USER_DESC"),
    ("pages/access/containers/Roles/Detail/AuthorizationList.js", "module-1023.js", "NO_PERMISSION"),
    ("pages/fedprojects/containers/Applications/Detail/Tracing.js", "module-4992.js", "TRACING_UNAVAILABLE"),
    ("pages/fedprojects/containers/Applications/Detail/TrafficManangement.js", "module-4989.js", "TRAFFIC_MANAGEMENT_UNAVAILABLE"),
    ("pages/fedprojects/containers/Applications/Detail/AppComponents/Components.js", "module-4979.js", "NO_SERVICE_FOUND"),
    ("pages/fedprojects/containers/Overview/ResourceUsage.js", "module-4940.js", "namespace_s2ibuilder_count"),
    ("pages/fedprojects/containers/Volumes/Detail/routes.js", "module-5024.js", "MOUNT_INFORMATION"),
    ("pages/fedprojects/containers/Services/Detail/ServiceAccess.js", "module-5010.js", "ACCESS_INFORMATION"),
    ("pages/fedprojects/components/ClusterWorkloadStatus.js", "module-1984.js", "WEIGHTS"),
    ("pages/clusters/containers/LogCollections/config.js", "module-1394.js", "Opensearch"),
    ("pages/clusters/containers/ServiceComponents/Card.js", "module-3730.js", "RUNNING_TIME"),
    ("pages/clusters/containers/Storage/PV/detail.js", "module-2062.js", "VOLUME_HANDLE"),
    ("pages/clusters/containers/Storage/VolumeSnapshots/Snapshots.js", "module-3714.js", "SNAPSHOT_CLASS_NOT_EXIST_TITLE"),
    ("pages/clusters/containers/Network/IPPools.js", "module-2409.js", "TOTAL_VALUE"),
    ("pages/clusters/containers/Network/IPPools/Detail.js", "module-3004.js", "POD_IP_POOL_PL"),
    ("pages/clusters/containers/Overview/Dashboard/ResourcesUsage/ResourceItem.js", "module-4508.js", "TOTAL"),
    ("pages/clusters/components/ResourceTable.js", "module-811.js", "nameAndAlias"),
    ("pages/clusters/components/Cards/Cluster.js", "module-1391.js", "EXPIRE_DATE"),
    ("pages/clusters/components/Cards/Monitoring/ETCDNodes/item.js", "module-3770.js", "EXTERNAL_ETCD"),
    ("pages/clusters/components/Cards/Monitoring/ETCDNodes.js", "module-3769.js", "SERVICE_STATUS"),
    ("pages/clusters/components/Cards/Monitoring/ETCD.js", "module-3766.js", "ETCD_STATUS"),
    ("pages/clusters/components/Cards/Monitoring/ServiceComponent.js", "module-3763.js", "SERVICE_COMPONENT_MONITORING"),
    ("pages/clusters/components/Modals/ClusterVisibility.js", "module-3652.js", "EDIT_VISIBILITY_DESC"),
    ("stores/alerting/message.js", "module-1127.js", "clusteralerts"),
    ("utils/request.js", "module-756.js", "content-type"),
    ("utils/devOpsRepos.js", "module-1182.js", "credential_id"),
    ("pages/projects/components/Modals/ConfigTemplate/config.js", "module-3602.js", "UNIQUE_IMPORTER"),
    ("pages/projects/components/Modals/ServiceSetting/StatefulSet/Form.js", "module-3605.js", "UNIQUE_IMPORTER"),
]

VENDOR_OR_SHARED = {
    "module-756.js", "module-1123.js", "module-833.js", "module-950.js",
    "module-882.js", "module-807.js",
}

GENERIC_NEEDLES = {
    "COUNT", "LOG_OUT", "XMLHttpRequest", "webkitdirectory", "content-type",
    "connections", "getWatchUrl", "unknown", "SIZE", "JOB", "CLEAR", "PROCESS",
    "TOTAL", "DELETING", "NAME_VALUE", "RESTART", "TOTAL_VALUE", "ENDPOINT",
    "DESTINATION", "WEIGHTS", "DEVELOPER", "NO_PERMISSION", "NO_STATUS",
    "SERVICE_STATUS", "RUNNING_TIME", "TYPE_VALUE", "LINE_VALUE", "DURATION_VALUE",
    "PHYSICAL_RESOURCES", "DEVOPS_PROJECTS", "LOGIN_HISTORY", "DEPARTMENT",
    "DINGTALK", "CONFIG_FILE", "ROUTE_PL", "YAML_FILE", "SERVICE_SETTINGS",
    "indefinite", "Opensearch", "nameAndAlias", "PullRequest",
}

print("=== index unpacked for candidate needles ===")
needles = {n for _k, _m, n in CANDIDATES}
needle_hits = defaultdict(list)
importers = defaultdict(list)
texts = {}
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    texts[path.name] = text
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)
    for n in needles:
        if n in text:
            needle_hits[n].append(path.name)


def orig_path(key):
    stem = key[:-3] if key.endswith(".js") else key
    for ext in (".js", ".jsx", "/index.js", "/index.jsx"):
        p = SRC / f"{stem}{ext}"
        if p.exists():
            return p
    return None


ok = []
reject = []
for key, mod, needle in CANDIDATES:
    reasons = []
    if mod in known_mods:
        reasons.append(f"ALREADY_NAMED {mod_to_names[mod]}")
    if mod in VENDOR_OR_SHARED:
        reasons.append("VENDOR")
    hits = needle_hits.get(needle, [])
    t_hits = [h for h in hits]  # substring hits
    # stricter t() hits
    t_exact = []
    for h in hits:
        if f't("{needle}")' in texts[h] or f"t('{needle}')" in texts[h]:
            t_exact.append(h)
        elif needle in texts[h]:
            t_exact.append(h)
    if needle != "UNIQUE_IMPORTER" and len(set(t_exact)) != 1:
        reasons.append(f"NOT_1HIT count={len(set(t_exact))} files={sorted(set(t_exact), key=lambda s: int(s.split('-')[1].split('.')[0]))[:8]}")
    elif needle != "UNIQUE_IMPORTER" and t_exact[0] != mod:
        reasons.append(f"HIT_MISMATCH {t_exact[0]} vs {mod}")
    op = orig_path(key)
    if not op:
        reasons.append("ORIG_MISSING")
    else:
        otext = op.read_text(encoding="utf-8", errors="ignore")
        if needle != "UNIQUE_IMPORTER" and needle not in otext:
            reasons.append("NEEDLE_NOT_IN_ORIG")
        if needle != "UNIQUE_IMPORTER" and needle not in texts.get(mod, ""):
            reasons.append("NEEDLE_NOT_IN_MOD")
    if needle == "UNIQUE_IMPORTER":
        imps = sorted(set(importers[mod]))
        named_imps = [(i, pairs.get(i) or mod_to_names.get(i, ["?"])[0] if i in known_mods else "?") for i in imps]
        if len(imps) != 1 or imps[0] not in known_mods:
            reasons.append(f"IMPORTER_NOT_UNIQUE {[(i, 'named' if i in known_mods else 'unnamed') for i in imps]}")
        else:
            # orig parent unique import of this child
            parent_names = mod_to_names[imps[0]]
            reasons.append(f"IMPORTER_OK parent={parent_names} (info)")
    if needle in GENERIC_NEEDLES and needle != "UNIQUE_IMPORTER":
        # still allow if truly 1-hit
        if not any(r.startswith("NOT_1HIT") for r in reasons):
            reasons.append("GENERIC_BUT_1HIT")
    status = "REJECT" if any(
        r.startswith(x)
        for r in reasons
        for x in ("ALREADY_NAMED", "VENDOR", "NOT_1HIT", "HIT_MISMATCH", "ORIG_MISSING", "NEEDLE_NOT", "IMPORTER_NOT")
    ) else "OK"
    # GENERIC_BUT_1HIT still OK if truly unique
    line = f"{status} {key} -> {mod} needle={needle} {reasons}"
    print(line)
    if status == "OK":
        ok.append((key, mod, needle))
    else:
        reject.append((key, mod, needle, reasons))

print("\n=== collisions among OK ===")
by_mod = defaultdict(list)
for k, m, n in ok:
    by_mod[m].append(k)
for m, ks in by_mod.items():
    if len(ks) > 1:
        print("COLLIDE", m, ks)

print("\n=== OK mappings ===")
for k, m, n in ok:
    print(f'    "{k}": "{m}",  # {n}')
print("ok_count", len(ok), "reject_count", len(reject))
out = ROOT / "recovery/scripts/scan_verify_pins39.ok.txt"
out.write_text(
    "\n".join(f'    "{k}": "{m}",  # {n}' for k, m, n in ok) + f"\n# ok_count {len(ok)}\n",
    encoding="utf-8",
)
