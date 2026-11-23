#!/usr/bin/env python3
from pathlib import Path
import re

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
V3 = Path("/home/bruce/code/ks-develop/console/dist/v3dist")
PUB = APP / "public/v3css"
UNP = APP / "src/unpacked"
REQ = re.compile(r"require\(\s*(\d+)\s*\)")
DYN = re.compile(r"require\(\s*[A-Za-z_][A-Za-z0-9_]*\s*\)")


def names(d: Path):
    return sorted(p.name for p in d.glob("*.css")) if d.is_dir() else []


v3 = names(V3)
pub = names(PUB)
print("v3dist_css", len(v3))
print("public_v3css", len(pub))
print("missing_in_public", sorted(set(v3) - set(pub)))
print("extra_in_public", sorted(set(pub) - set(v3)))

num_files = 0
dyn_files = 0
num_hits = []
dyn_hits = []
for p in UNP.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if text.startswith("export { default } from"):
        continue
    nums = REQ.findall(text)
    if nums:
        num_files += 1
        if len(num_hits) < 8:
            num_hits.append((p.name, nums[:6]))
    dyns = [m.group(0) for m in DYN.finditer(text) if "require.context" not in text[max(0, m.start() - 20) : m.start()]]
    if dyns:
        dyn_files += 1
        if len(dyn_hits) < 8:
            dyn_hits.append((p.name, dyns[:4]))
print("files_with_numeric_require", num_files, num_hits)
print("files_with_dynamic_require", dyn_files, dyn_hits)
