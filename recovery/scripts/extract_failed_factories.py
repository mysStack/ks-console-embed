#!/usr/bin/env python3
"""Extract the 3 Wakaru-failed webpack factories from sealed v3dist via provenance ranges."""
import json
from pathlib import Path

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery")
PROV = json.loads((ROOT / "unpacked" / "provenance.json").read_text())
OUT = ROOT / "webcrack-input"
OUT.mkdir(parents=True, exist_ok=True)

FAILED = ["module-958.js", "module-1056.js", "module-1648.js"]
meta = {}
for name in FAILED:
    rec = PROV["modules"][name]
    src = Path(rec["input"])
    start, end = rec["ranges"][0]
    blob = src.read_bytes()[start:end]
    out = OUT / name
    out.write_bytes(blob)
    meta[name] = {
        "input": rec["input"],
        "range": [start, end],
        "bytes": len(blob),
        "text_preview": blob.decode("utf-8", "replace")[:500],
    }
    print(f"{name} {len(blob)} bytes from {src.name}[{start}:{end}]")

(OUT / "meta.json").write_text(json.dumps(meta, indent=2, ensure_ascii=False))
