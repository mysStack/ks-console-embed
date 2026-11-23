#!/usr/bin/env python3
from pathlib import Path
import json

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "recovery/react-app/src"
graph = json.loads((ROOT / "recovery/PHASE4-GRAPH.json").read_text())
reachable = set(graph["files"])
prefixes = ("pages", "core", "components", "stores", "actions", "utils", "configs", "dmp")
dest = []
for prefix in prefixes:
    d = SRC / prefix
    if not d.exists():
        continue
    for p in d.rglob("*.js"):
        rel = str(p.relative_to(SRC)).replace("\\", "/")
        dest.append(rel)
missing = sorted(set(dest) - reachable)
extra = sorted(p for p in reachable if p.split("/")[0] in prefixes and p not in dest)
print(json.dumps({
    "dest_total": len(dest),
    "dest_reachable": len(set(dest) & reachable),
    "dest_not_in_entry_graph": len(missing),
    "dest_not_in_entry_graph_sample": missing[:80],
    "reachable_dest_not_on_disk": extra[:20],
}, indent=2))
(ROOT / "recovery/PHASE4-DEST-UNREACHED.json").write_text(
    json.dumps({"dest_not_in_entry_graph": missing}, indent=2) + "\n"
)
