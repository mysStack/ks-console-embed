#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known = set(re.findall(r"module-(\d+)\.js", KNOWN))
pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN))
imp = re.compile(r'(?:from|require\()\s*["\']\./(module-\d+\.js)')

parents = [
    "components/Forms/Workload/VolumeSettings/VolumeList.js",
    "components/Forms/Workload/VolumeSettings/VolumeTemplateList.js",
    "components/Forms/Workload/VolumeSettings/MountConfig.js",
    "components/Forms/Workload/VolumeSettings/AddVolume.js",
    "components/Forms/Workload/VolumeSettings/AddVolumeTemplate.js",
    "components/Forms/Workload/ContainerSettings/ContainerForm/ProbeInput.js",
    "components/Forms/Workload/ContainerSettings/ContainerForm/HealthChecker.js",
    "components/Forms/Workload/ContainerSettings/ContainerForm.js",
    "components/Forms/Workload/ContainerSettings/PodAffinity.js",
    "components/Forms/Workload/ContainerSettings/ClusterReplicasControl.js",
    "components/Forms/Workload/ContainerSettings/Affinity.js",
    "components/HOCs/withList.js",
    "components/HOCs/withTableActions.js",
]
for name in parents:
    mod = pairs.get(name)
    if not mod:
        print("MISS", name)
        continue
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    kids = []
    for m in imp.findall(text):
        mid = re.search(r"\d+", m).group()
        if mid not in known and int(mid) >= 800:
            kids.append(m)
    print(f"{name} -> {mod} unnamed={list(dict.fromkeys(kids))}")

needles = [
    "TYPE_HOSTPATH",
    "TYPE_EMPTYDIR",
    "TYPE_CONFIGMAP",
    "TYPE_SECRET",
    "READ_ONLY_LOW",
    "READ_AND_WRITE_LOW",
    "STORAGE_CLASS_VALUE",
    "ADD_PERSISTENT_VOLUME_CLAIM_TEMPLATE_DESC",
    "WORKLOAD_MOUNT_VOLUME_DESC",
    "MOUNT_CONFIGMAP_OR_SECRET_DESC",
    "PROBE_COMMAND_DESC",
    "PROBE_COMMAND_EMPTY",
    "INITIAL_DELAY_S",
    "TIMEOUT_PERIOD_S",
    "CHECK_INTERVAL_S",
    "SUCCESS_THRESHOLD_DESC",
    "FAILURE_THRESHOLD_DESC",
    "HOSTPATH_TIP",
    "SELECT_PERSISITENT_VOLUME_CLAIM",
    "PVC_NAME_PREFIX_EXISTS",
    "PLEASE_USE_RELATIVE_PATH",
    "MOUNT_PATH_REPEATED",
    "IN_USER",
]
h = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n in needles:
        if n in text:
            h[n].append(path.name)
print("==== needles ====")
for n in needles:
    files = sorted(h[n], key=lambda s: int(s.split("-")[1].split(".")[0]))
    unnamed = [f for f in files if re.search(r"\d+", f).group() not in known]
    print(f"{len(files):3} {n} unnamed={unnamed[:6] or files[:5]}")
