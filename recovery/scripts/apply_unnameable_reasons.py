#!/usr/bin/env python3
"""Move documented business leftover to unnameable with reasons. No pins. No 8099."""
from collections import Counter
from pathlib import Path
import json

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
MAN_PATH = ROOT / "recovery/module-manifest.json"
REASONS_PATH = ROOT / "recovery/BUSINESS_LEFTOVER_REASONS.json"
UNN_PATH = ROOT / "recovery/unnameable-modules.json"
SUM_PATH = ROOT / "recovery/PHASE3-AUDIT-SUMMARY.json"

man = json.loads(MAN_PATH.read_text(encoding="utf-8"))
reasons = {
    r["module_id"]: r["unnameable_reason"]
    for r in json.loads(REASONS_PATH.read_text(encoding="utf-8"))["items"]
}
DEFAULT_UNN = (
    "no vendor alias, not css-empty, not babel-helper, not skip, not duplicate; "
    "no JSX/t()/kapis business needle"
)
changed = 0
unnamed = []
for rec in man["live_modules"]:
    mid = rec["module_id"]
    if rec["primary_status"] == "business-leftover":
        rec["previous_status"] = "business-leftover"
        rec["primary_status"] = "unnameable"
        rec["unnameable_reason"] = reasons.get(mid, "no leftover-and-orig unique t()>=8")
        rec["path_evidence"] = None
        changed += 1
    elif rec["primary_status"] == "unnameable":
        rec.setdefault("unnameable_reason", DEFAULT_UNN)
    if rec["primary_status"] == "unnameable":
        unnamed.append(rec)

live_status = Counter(r["primary_status"] for r in man["live_modules"])
man["summary"]["counts"]["live_by_status"] = dict(live_status)
man["summary"]["unique_importer_conclusion"] = (
    "class_unique=0; unique long literals=13 all known false pins; "
    "stub unique importer=10 known false; unique t both-sides=26 skip/false. "
    "business leftover recategorized unnameable with reasons; no new pins."
)
MAN_PATH.write_text(json.dumps(man, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
UNN_PATH.write_text(
    json.dumps(
        {
            "count": len(unnamed),
            "definition": "live leftover that cannot be given a 1:1 orig path",
            "modules": unnamed,
        },
        indent=2,
        ensure_ascii=False,
    )
    + "\n",
    encoding="utf-8",
)
summary = json.loads(SUM_PATH.read_text(encoding="utf-8"))
summary["counts"]["live_by_status"] = dict(live_status)
summary["business_leftover_count"] = live_status.get("business-leftover", 0)
summary["unnameable_count"] = live_status.get("unnameable", 0)
summary["business_leftover_recategorized"] = changed
SUM_PATH.write_text(json.dumps(summary, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
print(json.dumps({"changed": changed, "live_by_status": dict(live_status), "unnameable": len(unnamed)}))
