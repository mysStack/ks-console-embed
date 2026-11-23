#!/usr/bin/env python3
"""Among business leftover, find leftover-unique t() that is also orig-unique.
Does not pin. Writes reasons. Does not touch 8099."""
from collections import defaultdict
from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
UNPACKED = APP / "src/unpacked"
ORIG = ROOT / "src"
MANIFEST = ROOT / "recovery/module-manifest.json"
T_PAT = re.compile(r"""(?<![A-Za-z0-9_])t\(\s*['"]([^'"]{8,})['"]""")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
FALSE = {
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
}


def main():
    man = json.loads(MANIFEST.read_text(encoding="utf-8"))
    business_ids = [
        r["module_id"]
        for r in man["live_modules"]
        if r["primary_status"] == "business-leftover"
    ]
    leftover_t = defaultdict(list)
    bodies = {}
    for mid in business_ids:
        p = UNPACKED / f"module-{mid}.js"
        text = p.read_text(encoding="utf-8", errors="ignore")
        bodies[mid] = text
        for k in T_PAT.findall(text):
            leftover_t[k].append(mid)
    orig_t = defaultdict(list)
    for p in ORIG.rglob("*"):
        if p.suffix not in {".js", ".jsx"}:
            continue
        key = p.relative_to(ORIG).as_posix()
        text = p.read_text(encoding="utf-8", errors="ignore")
        for k in T_PAT.findall(text):
            orig_t[k].append(key)
    candidates = []
    reasons = []
    for mid in business_ids:
        keys = T_PAT.findall(bodies[mid])
        unique_both = []
        for k in keys:
            if len(leftover_t[k]) == 1 and leftover_t[k][0] == mid and len(orig_t.get(k, [])) == 1:
                unique_both.append((k, orig_t[k][0]))
        if unique_both and mid not in FALSE:
            candidates.append({"module": mid, "pairs": unique_both[:8]})
        else:
            reasons.append(
                {
                    "module": mid,
                    "reason": (
                        "false-pin-catalog"
                        if mid in FALSE
                        else "no leftover-and-orig unique t()>=8"
                    ),
                }
            )
    out = {
        "business_leftover": len(business_ids),
        "candidates_unique_t_both_sides": len(candidates),
        "no_unique_both": len(reasons),
        "candidates": candidates,
        "note": "candidates still need extra-path body check; this script does not pin",
    }
    (ROOT / "recovery/BUSINESS_LEFTOVER_UNIQUE.json").write_text(
        json.dumps(out, indent=2, ensure_ascii=False) + "\n", encoding="utf-8"
    )
    print(
        json.dumps(
            {
                "business": len(business_ids),
                "candidates": len(candidates),
                "no_unique_both": len(reasons),
            }
        )
    )
    for c in candidates[:30]:
        print(c["module"], c["pairs"][0])


if __name__ == "__main__":
    main()
