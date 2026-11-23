#!/usr/bin/env python3
"""Classify dest-not-in-graph and leftover-not-in-graph. Read-only."""
from collections import defaultdict
from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "recovery/react-app/src"
STUB_RE = re.compile(
    r'export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp|chunks)/'
)
DEST_PREFIXES = ("pages", "core", "components", "stores", "actions", "utils", "configs", "dmp")
graph = json.loads((ROOT / "recovery/PHASE4-GRAPH.json").read_text())
reachable = set(graph["files"])

dest = []
for prefix in DEST_PREFIXES:
    d = SRC / prefix
    if d.exists():
        dest.extend(str(p.relative_to(SRC)).replace("\\", "/") for p in d.rglob("*.js") if p.is_file())
dest_set = set(dest)
unreached_dest = sorted(dest_set - reachable)

leftover, stubs = [], []
for p in (SRC / "unpacked").glob("module-*.js"):
    rel = str(p.relative_to(SRC)).replace("\\", "/")
    text = p.read_text(encoding="utf-8", errors="ignore")
    if STUB_RE.search(text[:500]):
        stubs.append(rel)
    else:
        leftover.append(rel)
leftover_set, stub_set = set(leftover), set(stubs)
unreached_leftover = sorted(leftover_set - reachable)
unreached_stub = sorted(stub_set - reachable)

# How dest files are referenced: alias path, relative basename, unpacked stub path
# Build inverted index of dest alias specs mentioned in reachable files.


def specs_for(rel: str):
    nojs = rel[:-3] if rel.endswith(".js") else rel
    specs = {rel, nojs, "./" + Path(rel).name, Path(rel).name}
    if rel.endswith("/index.js"):
        specs.add(rel[: -len("/index.js")])
        specs.add(rel[: -len("index.js")])
    return specs


# Scan reachable files for mentions of unreached dest paths (cheap: only those 104).
needles = {}
for rel in unreached_dest:
    for s in specs_for(rel):
        needles.setdefault(s, []).append(rel)

mention = defaultdict(list)
# Also search ALL src js for the alias path without .js
alias_needles = {rel[:-3] if rel.endswith(".js") else rel: rel for rel in unreached_dest}

# Scan unpacked + dest for alias string mentions (not just static import).
scan_roots = [SRC / p for p in ("pages", "core", "components", "stores", "actions", "utils", "configs", "dmp", "unpacked")]
alias_hits = defaultdict(list)
for root in scan_roots:
    if not root.exists():
        continue
    for p in root.rglob("*.js"):
        try:
            text = p.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        rel_from = str(p.relative_to(SRC)).replace("\\", "/")
        for alias, dest_rel in alias_needles.items():
            if alias in text:
                alias_hits[dest_rel].append(rel_from)

from collections import Counter

hit_counts = Counter({k: len(set(v)) for k, v in alias_hits.items()})
zero = []
only_self = []
mentioned_elsewhere = []
for rel in unreached_dest:
    others = [x for x in set(alias_hits.get(rel, [])) if x != rel]
    if not others:
        if hit_counts[rel] == 0:
            zero.append(rel)
        else:
            only_self.append(rel)
    else:
        mentioned_elsewhere.append({"file": rel, "importers": sorted(others)[:8], "importer_count": len(others)})

# leftover not in graph: size + first line
leftover_info = []
for rel in unreached_leftover:
    p = SRC / rel
    text = p.read_text(encoding="utf-8", errors="ignore")
    leftover_info.append({"file": rel, "bytes": len(text), "head": text[:120].replace("\n", " ")})

out = {
    "dest_total": len(dest_set),
    "stub_total": len(stub_set),
    "leftover_total": len(leftover_set),
    "dest_unreached": len(unreached_dest),
    "leftover_unreached": len(unreached_leftover),
    "stub_unreached": len(unreached_stub),
    "dest_unreached_zero_mentions": sorted(set(zero)),
    "dest_unreached_mentioned_elsewhere_count": len(mentioned_elsewhere),
    "dest_unreached_mentioned_sample": mentioned_elsewhere[:30],
    "leftover_unreached": leftover_info,
    "build_missing_resolve": graph.get("missing", []),
    "note": (
        "unreached dest = not in static import graph from bootstrap. "
        "If mentioned by leftover/routes they are still present on disk. "
        "True missing for build = webpack Can't resolve, currently empty."
    ),
}
(ROOT / "recovery/PHASE4-MISSING.json").write_text(json.dumps(out, indent=2) + "\n")
print(json.dumps({
    "dest_total": out["dest_total"],
    "stub_total": out["stub_total"],
    "leftover_total": out["leftover_total"],
    "dest_unreached": out["dest_unreached"],
    "dest_zero_mentions": len(out["dest_unreached_zero_mentions"]),
    "dest_mentioned_elsewhere": out["dest_unreached_mentioned_elsewhere_count"],
    "leftover_unreached": out["leftover_unreached"],
    "stub_unreached": out["stub_unreached"],
}, indent=2))
print("zero_mentions", out["dest_unreached_zero_mentions"][:20])
print("leftover_unreached files:")
for x in leftover_info:
    print(" ", x["file"], x["bytes"])
