#!/usr/bin/env python3
from pathlib import Path
import json
import re
import shutil

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
UNPACKED = APP / "src/unpacked"
SRC = APP / "src"
REL = re.compile(r"""(['"])\./module-(\d+)\.js\1""")
PINS = [
    {
        "module": "module-665.js",
        "orig": "utils/NameWithAction.js",
        "kind": "long",
        "lit": "federatedProject",
    },
    {
        "module": "module-1410.js",
        "orig": "pages/projects/containers/Overview/ResourceUsage/index.js",
        "kind": "long",
        "lit": "namespace_configmap_count",
    },
    {
        "module": "module-1418.js",
        "orig": "pages/apps/components/VersionStatus/index.js",
        "kind": "long",
        "lit": "configs/openpitrix/version",
    },
    {
        "module": "module-5092.js",
        "orig": "pages/devops/components/PipelineStatus/index.js",
        "kind": "long",
        "lit": "components/Forms/Pipelines/ParamsFormModal",
    },
    {
        "module": "module-5093.js",
        "orig": "pages/devops/components/PipelineStatus/nodesRender.js",
        "kind": "unique_kid",
        "lit": "PipelineStatus/card",
    },
    {
        "module": "module-4997.js",
        "orig": "pages/fedprojects/components/ClusterWorkloadStatus/ScheduleCluster.js",
        "kind": "long",
        "lit": "workload.podNums",
    },
    {
        "module": "module-1436.js",
        "orig": "stores/rank/workload.js",
        "kind": "long",
        "lit": "workload_net_bytes_transmitted",
    },
    {
        "module": "module-1636.js",
        "orig": "components/Modals/CustomMonitoring/components/Graph/Compose/index.js",
        "kind": "long",
        "lit": "current.offsetWidth",
    },
]


def main():
    applied, skipped = [], []
    for pin in PINS:
        src = UNPACKED / pin["module"]
        dest = SRC / pin["orig"]
        if dest.exists():
            skipped.append({**pin, "reason": "dest exists"})
            continue
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dest)
        text = dest.read_text(encoding="utf-8")
        dest.write_text(REL.sub(r'"unpacked/module-\2.js"', text), encoding="utf-8")
        spec = pin["orig"][:-3]
        src.write_text(
            f'export {{ default }} from "{spec}";\nexport * from "{spec}";\n',
            encoding="utf-8",
        )
        applied.append(pin)
    out = {"applied": applied, "skipped": skipped, "count": len(applied)}
    (APP / "PASS19_APPLY.json").write_text(json.dumps(out, indent=2) + "\n")
    print(json.dumps({"count": out["count"], "skipped": len(skipped)}, indent=2))
    for p in applied:
        print(p["module"], "->", p["orig"])


if __name__ == "__main__":
    main()
