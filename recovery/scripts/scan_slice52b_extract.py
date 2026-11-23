#!/usr/bin/env python3
from pathlib import Path

text = Path("/tmp/scan_slice52b.out").read_text(encoding="utf-8", errors="ignore")
keys = (
    "PIN ",
    "1HIT ",
    "TWO_HIT ",
    "DEDUPED",
    "new_pin",
    "compact_",
    "  1_1",
    "FAIL_UNIQ",
    "Overview orig",
    "unique_kids",
    "orig_unnamed",
    "SEQ ",
    "AMBIG",
    "SKIP ",
    "ALIAS",
    "REJECT",
    "VERDICT",
    "zero_hit",
    "two_hit",
    "method_api",
    "######## PARENT",
    "PARENT ",
)
for i, line in enumerate(text.splitlines()):
    if any(k in line for k in keys) or line.startswith("  PIN") or line.startswith('    "'):
        print(f"{i:04d}|{line[:260]}")
