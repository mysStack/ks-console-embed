#!/usr/bin/env python3
"""Independent unique-orig business scan on current leftover_live.

Do not invent orig paths. Skip-list stays skip-list.
"""
from __future__ import annotations

import json
import subprocess
from pathlib import Path

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SCRIPT = ROOT / "recovery/scripts/scan_unique_importer_live.py"
print("running", SCRIPT, flush=True)
subprocess.check_call(["python3", str(SCRIPT)])
pins = ROOT / "recovery/react-app/UNIQUE_IMPORTER_PINS.json"
if pins.is_file():
    data = json.loads(pins.read_text(encoding="utf-8"))
    if isinstance(data, dict):
        keys = {k: (len(v) if isinstance(v, list) else v) for k, v in data.items() if k != "reject"}
        print(json.dumps(keys, indent=2)[:4000], flush=True)
        for k in ("pins", "apply", "unique", "ok", "promote"):
            if k in data and isinstance(data[k], list):
                print(k, len(data[k]), data[k][:8], flush=True)
    elif isinstance(data, list):
        print("list", len(data), data[:8], flush=True)
