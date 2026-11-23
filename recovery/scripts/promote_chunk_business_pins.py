#!/usr/bin/env python3
"""Promote unique chunk-business pins into src/<orig>. Skip known skip-list paths."""
from pathlib import Path
import json
import shutil

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
CHUNKS = APP / "src/chunks"
UNPACKED = APP / "src/unpacked"
SRC = APP / "src"
PINS = json.loads((APP / "CHUNK_BUSINESS_PINS.json").read_text())

SKIP_ORIG = {
    "components/Modals/CustomMonitoring/components/FormInput/Template/GrafanaTargetInput/index.js",
    "components/Forms/AlertingPolicy/AlertingRules/RuleList/index.js",
}


def find_chunk(name: str) -> Path | None:
    for p in CHUNKS.glob(f"*/{name}"):
        return p
    return None


def main():
    applied = []
    skipped = []
    for pin in PINS["pins"]:
        orig = pin["orig"]
        name = pin["module"]
        if orig in SKIP_ORIG:
            skipped.append({"module": name, "orig": orig, "reason": "skip-list"})
            continue
        src = find_chunk(name)
        if src is None:
            skipped.append({"module": name, "orig": orig, "reason": "not in chunks"})
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
        (UNPACKED / name).write_text(stub, encoding="utf-8")
        applied.append({"module": name, "orig": orig, "kind": pin["kind"], "lit": pin["lit"]})
    out = {"applied": applied, "skipped": skipped, "count": len(applied)}
    (APP / "CHUNK_BUSINESS_APPLY.json").write_text(json.dumps(out, indent=2) + "\n")
    print(json.dumps(out, indent=2))


if __name__ == "__main__":
    main()
