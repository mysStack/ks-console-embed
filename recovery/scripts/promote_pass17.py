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
        "module": "module-4203.js",
        "orig": "pages/projects/containers/StatefulSets/Detail/ResourceStatus.js",
        "kind": "long",
        "lit": "spec.serviceName",
    },
    {
        "module": "module-4204.js",
        "orig": "pages/projects/containers/StatefulSets/Detail/ServiceCard/index.js",
        "kind": "unique_kid",
        "lit": "SERVICE_PL+ports",
    },
    {
        "module": "module-4359.js",
        "orig": "pages/workspaces/containers/QuotaManage/ResourceQuota/index.js",
        "kind": "long",
        "lit": "workspace.quota.edit",
    },
    {
        "module": "module-3192.js",
        "orig": "pages/apps/containers/AppDeploy/index.js",
        "kind": "long",
        "lit": "components/Forms/AppDeploy/BasicInfo",
    },
    {
        "module": "module-1138.js",
        "orig": "pages/workspaces/components/ResourceTable/index.js",
        "kind": "long",
        "lit": "components/HOCs/withTableActions",
    },
    {
        "module": "module-1395.js",
        "orig": "pages/workspaces/components/ResourceTable/ClusterSelect/index.js",
        "kind": "unique_kid",
        "lit": "CLUSTER_VALUE+StatusReason",
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
    (APP / "PASS17_APPLY.json").write_text(json.dumps(out, indent=2) + "\n")
    print(json.dumps({"count": out["count"], "skipped": len(skipped)}, indent=2))
    for p in applied:
        print(p["module"], "->", p["orig"])


if __name__ == "__main__":
    main()
