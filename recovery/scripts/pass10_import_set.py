#!/usr/bin/env python3
"""Pass10 import-SET: drop babel-helpers; orig unnamed includes dmp/.

Primary match is leftover named-import set minus compiler helpers vs orig
promoted-child set. size>=2, 1 leftover : 1 orig. Do not invent.
"""
from pathlib import Path
import json
import runpy
import sys

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
PASS9 = ROOT / "recovery/scripts/pass9_import_set.py"
OUT = APP / "PASS10_IMPORT_SET.json"

runpy.run_path(str(PASS9), run_name="__main__")
doc = json.loads((APP / "PASS9_IMPORT_SET.json").read_text(encoding="utf-8"))
pins = doc.get("pins_no_babel_helpers") or []
# reject dest collision with already-promoted OSS paths (different prefix OK)
rejected = []
kept = []
existing = json.loads(json.dumps(doc.get("rejected_no_babel") or {}))
for pin in pins:
    path = pin["path"]
    prefix = path.split("/")[0]
    if prefix == "named":
        rejected.append({**pin, "why": "named_forbidden"})
        continue
    kept.append(pin)
report = {
    "source": "pass9_import_set pins_no_babel_helpers",
    "pins": kept,
    "rejected_extra": rejected,
    "rejected_no_babel": existing,
    "business_looking": doc.get("business_looking"),
    "orig_unnamed": doc.get("orig_unnamed"),
}
OUT.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
print("pass10 pins", len(kept), "rejected_extra", len(rejected), flush=True)
for p in kept:
    print(f"  {p['module']} -> {p['path']} set={p.get('set_size')}", flush=True)
sys.exit(0)
