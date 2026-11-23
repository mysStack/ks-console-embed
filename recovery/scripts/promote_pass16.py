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
        "module": "module-4052.js",
        "orig": "pages/clusters/components/Modals/ClusterSelect/index.js",
        "kind": "t",
        "lit": "CLUSTER_DESC",
    },
    {
        "module": "module-4053.js",
        "orig": "pages/clusters/components/Modals/ClusterSelect/Card/index.js",
        "kind": "unique_kid",
        "lit": "NODE_COUNT+ClusterTitle",
    },
    {
        "module": "module-3974.js",
        "orig": "pages/projects/containers/Overview/ResourceUsage/AppResourceItem/index.js",
        "kind": "t",
        "lit": "RESOURCE_WARNING_TIPS",
    },
    {
        "module": "module-3975.js",
        "orig": "pages/projects/containers/Overview/ResourceUsage/TinyArea/index.js",
        "kind": "unique_kid",
        "lit": "COLORS_MAP+recharts TinyArea",
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
    (APP / "PASS16_APPLY.json").write_text(json.dumps(out, indent=2) + "\n")
    print(json.dumps({"count": out["count"], "skipped": len(skipped)}, indent=2))
    for p in applied:
        print(p["module"], "->", p["orig"])


if __name__ == "__main__":
    main()
