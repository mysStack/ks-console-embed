#!/usr/bin/env python3
from pathlib import Path

text = Path("/tmp/scan_slice52.out").read_text(encoding="utf-8", errors="ignore")
keys = (
    "PARENT ",
    "PIN ",
    "1HIT ",
    "TWO_HIT ",
    "AMBIG",
    "DEDUPED",
    "unique_kids",
    "orig_unnamed",
    "all_unnamed",
    "NONUNIQUE",
    "KID module-",
    "ORIG ",
    "FAIL",
    "########",
    "new_pin",
    "zero_hit",
    "two_hit",
    "method_api",
    "SKIP ",
    "ALIAS",
    "REJECT",
)
for i, line in enumerate(text.splitlines()):
    if any(k in line for k in keys):
        print(f"{i:04d}|{line[:240]}")
