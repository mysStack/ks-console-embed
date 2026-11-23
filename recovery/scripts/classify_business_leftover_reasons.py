#!/usr/bin/env python3
"""Attach unnameable reasons to business leftover. No pins. No 8099."""
from collections import Counter
from pathlib import Path
import json

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
MAN = json.loads((ROOT / "recovery/module-manifest.json").read_text())
UNIQ = json.loads((ROOT / "recovery/BUSINESS_LEFTOVER_UNIQUE.json").read_text())
FALSE = {
    "955",
    "1133",
    "1301",
    "1364",
    "2061",
    "2062",
    "2069",
    "2078",
    "2099",
    "2103",
    "2409",
    "3002",
    "3009",
    "3025",
    "3298",
    "3590",
    "3715",
    "3753",
    "4086",
    "4157",
    "4286",
    "4374",
    "4656",
    "4906",
    "4927",
    "5156",
    "1286",
    "2067",
    "4432",
    "2072",
    "5045",
    "3578",
    "4657",
    "1670",
    "4119",
    "3942",
    "4082",
    "2423",
    "1549",
    "4066",
    "1861",
    "1332",
    "1869",
    "3193",
    "5226",
}
cand_ids = {c["module"] for c in UNIQ["candidates"]}
rows = []
for rec in MAN["live_modules"]:
    if rec["primary_status"] != "business-leftover":
        continue
    mid = rec["module_id"]
    if mid in FALSE:
        reason = "known-false-or-skip-body"
    elif mid in cand_ids:
        reason = "unique-t-both-sides-but-skip-or-copy"
    else:
        reason = "no leftover-and-orig unique t()>=8; no extra-path 1:1"
    rows.append(
        {
            "module_id": mid,
            "size": rec["size"],
            "importer_count": rec["importer_count"],
            "sha256": rec["sha256"],
            "unnameable_reason": reason,
        }
    )
unnamed = [r for r in MAN["live_modules"] if r["primary_status"] == "unnameable"]
buckets = Counter()
for r in unnamed:
    s = r["size"]
    if s < 200:
        buckets["lt200"] += 1
    elif s < 400:
        buckets["lt400"] += 1
    elif s < 2000:
        buckets["lt2000"] += 1
    else:
        buckets["ge2000"] += 1
out = {
    "business_leftover": len(rows),
    "by_reason": dict(Counter(r["unnameable_reason"] for r in rows)),
    "unnameable_size_buckets": dict(buckets),
    "items": rows,
}
(ROOT / "recovery/BUSINESS_LEFTOVER_REASONS.json").write_text(
    json.dumps(out, indent=2) + "\n", encoding="utf-8"
)
print(json.dumps({"business": out["business_leftover"], "by_reason": out["by_reason"], "unnameable_size": out["unnameable_size_buckets"]}))
