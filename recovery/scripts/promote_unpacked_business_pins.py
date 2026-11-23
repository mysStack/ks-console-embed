#!/usr/bin/env python3
from pathlib import Path
import json
import shutil

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
UNPACKED = APP / "src/unpacked"
SRC = APP / "src"
PINS = json.loads((APP / "UNPACKED_BUSINESS_PINS.json").read_text())

SKIP_MODULE = {
    "module-1236.js",  # module=alerts false pin
    "module-955.js",  # generic VALIDATION_FAILED
    "module-1639.js",  # GrafanaTargetInput skip
    "module-3839.js",  # ContainerLog
    "module-1869.js",  # InstanceList
    "module-3298.js",  # ContianerTerminal typo skip
    "module-4105.js",
    "module-4103.js",
    "module-4107.js",
    "module-4080.js",  # WHIZARD / Initializing / Tools
    "module-4374.js",  # EditGroup
    "module-1272.js",  # MetircQueryInput
    "module-2103.js",  # PromQLInput
    "module-5045.js",  # ProjectSelect
    "module-3715.js",  # ProjectSelect
    "module-4906.js",  # ImageBuilder
    "module-4086.js",  # KubernetesStatus
}
SKIP_FRAGS = (
    "WHIZARD", "ProjectSelect", "GrafanaTargetInput", "RuleList", "InstanceList",
    "ContainerLog", "EditGroup", "ImageBuilder", "PromQLInput", "MetircQueryInput",
    "ContianerTerminal", "Initializing", "KubeTools",
)


def main():
    applied, skipped = [], []
    for pin in PINS["pins"]:
        name, orig = pin["module"], pin["orig"]
        if name in SKIP_MODULE or any(s in orig for s in SKIP_FRAGS):
            skipped.append({"module": name, "orig": orig, "reason": "skip-list"})
            continue
        src = UNPACKED / name
        if not src.is_file():
            skipped.append({"module": name, "orig": orig, "reason": "missing"})
            continue
        dest = SRC / orig
        if dest.exists():
            skipped.append({"module": name, "orig": orig, "reason": "dest exists"})
            continue
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dest)
        spec = orig[:-3] if orig.endswith(".js") else orig
        stub = f'export {{ default }} from "{spec}";\nexport * from "{spec}";\n'
        src.write_text(stub, encoding="utf-8")
        applied.append(pin)
    out = {"applied": applied, "skipped": skipped, "count": len(applied)}
    (APP / "UNPACKED_BUSINESS_APPLY.json").write_text(json.dumps(out, indent=2) + "\n")
    print(json.dumps({"count": out["count"], "skipped": len(skipped)}, indent=2))
    for p in applied:
        print(f"{p['module']} -> {p['orig']}")


if __name__ == "__main__":
    main()
