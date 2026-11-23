#!/usr/bin/env python3
"""Merge import-SET pins into UNIQUE_IMPORTER_PINS.json then apply."""
from pathlib import Path
import json
import subprocess
import sys

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
SET_JSON = APP / "PASS10_IMPORT_SET.json"
IMP_JSON = APP / "UNIQUE_IMPORTER_PINS.json"
APPLY = ROOT / "recovery/scripts/apply_unique_importer_live.py"

set_doc = json.loads(SET_JSON.read_text(encoding="utf-8"))
imp_doc = json.loads(IMP_JSON.read_text(encoding="utf-8")) if IMP_JSON.is_file() else {}
pins = list(imp_doc.get("pins") or [])
seen_mod = {p["module"] for p in pins}
seen_path = {p["path"] for p in pins}
added = []
for pin in set_doc.get("pins") or []:
    if pin["module"] in seen_mod or pin["path"] in seen_path:
        print("skip duplicate", pin["module"], pin["path"], flush=True)
        continue
    pins.append({
        "path": pin["path"],
        "module": pin["module"],
        "reason": pin.get("reason") or "import_set_1_1_no_babel_helpers",
        "extra": f"set_size={pin.get('set_size')} named={pin.get('named')}",
    })
    seen_mod.add(pin["module"])
    seen_path.add(pin["path"])
    added.append(pin)
imp_doc["pins"] = pins
imp_doc["pass10_import_set_added"] = added
IMP_JSON.write_text(json.dumps(imp_doc, indent=2) + "\n", encoding="utf-8")
print("merged_pins", len(pins), "added_from_import_set", len(added), flush=True)
for p in pins:
    print(f"  {p['module']} -> {p['path']} [{p.get('reason')}]", flush=True)
subprocess.check_call([sys.executable, str(APPLY)])
