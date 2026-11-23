#!/usr/bin/env python3
"""Verify candidate leftover pins: global needle uniqueness + npm file exists.

Reject 2-hit needles. Print leftover vs npm heads for human confirmation.
"""
from __future__ import annotations

from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
UNPACKED = APP / "src/unpacked"
NM = APP / "node_modules"
REPORT = json.loads((APP / "LIVE_LEFTOVER_MORE.json").read_text(encoding="utf-8"))

STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)

unpacked = {}
for p in UNPACKED.glob("module-*.js"):
    t = p.read_text(encoding="utf-8", errors="replace")
    if STUB_RE.search(t[:400]):
        continue
    unpacked[p.name] = t
print("real_unpacked", len(unpacked))

ok = []
bad = []
for pin in REPORT["corejs_pins"]:
    mod = pin["module"]
    spec = pin["corejs"]
    via = pin["via"]
    hits = [n for n, t in unpacked.items() if via in t]
    npm = NM / spec
    exists = npm.is_file()
    rec = {
        **pin,
        "global_hits": hits,
        "hit_count": len(hits),
        "npm_exists": exists,
        "leftover_bytes": len(unpacked.get(mod, "")),
        "npm_bytes": npm.stat().st_size if exists else 0,
    }
    unique = hits == [mod] and exists
    rec["ok"] = unique
    print("=" * 72)
    print(f"{mod} -> {spec}")
    print(f"  via={via[:90]!r}")
    print(f"  hits={hits} npm={exists} leftover={rec['leftover_bytes']} npm_bytes={rec['npm_bytes']}")
    if unique:
        left = unpacked[mod]
        right = npm.read_text(encoding="utf-8", errors="replace")
        print("  LEFT :", left[:220].replace("\n", " | "))
        print("  RIGHT:", right[:220].replace("\n", " | "))
        ok.append(rec)
    else:
        print("  REJECT")
        bad.append(rec)

print("\nOK", len(ok), "REJECT", len(bad))
out = {"ok": ok, "reject": bad, "orig_pins": REPORT.get("orig_pins"), "vendor_skipped": REPORT.get("vendor_skipped")}
(APP / "LIVE_LEFTOVER_MORE_VERIFY.json").write_text(json.dumps(out, indent=2) + "\n", encoding="utf-8")
print("orig_skipped_dest", json.dumps(REPORT.get("orig_skipped_dest", [])[:12], indent=2))
print("orig_skipped_mapped", json.dumps(REPORT.get("orig_skipped_mapped", [])[:8], indent=2))
print("vendor_skipped", json.dumps(REPORT.get("vendor_skipped"), indent=2))
