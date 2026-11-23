#!/usr/bin/env python3
"""Why remaining business-looking leftovers cannot be uniquely named."""
from __future__ import annotations

from collections import defaultdict
from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
UNPACKED = APP / "src/unpacked"
ORIG = ROOT / "src"
KNOWN_PY = ROOT / "recovery/scripts/add_known_named.py"
SPLIT = json.loads((APP / "PASS2_SPLIT.json").read_text(encoding="utf-8"))
LIVE = json.loads((APP / "LIVE_UNPACKED.json").read_text(encoding="utf-8"))
OUT = APP / "PASS2_BUSINESS_WHY.json"

STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)
T_PAT = re.compile(r"""(?<![A-Za-z0-9_])t\(\s*['"]([^'"]+)['"]""")
API_PAT = re.compile(r"""['"]((?:/kapis|/apis|/api)[^'"]{6,})['"]""")
COMMON_T = {
    "NAME", "TYPE", "STATUS", "CREATE", "EDIT", "DELETE", "SAVE", "CANCEL",
    "CONFIRM", "OK", "CLOSE", "SEARCH", "REFRESH", "MORE", "ACTION", "ACTIONS",
}

known_pairs = re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY.read_text(encoding="utf-8"))
known_keys = {p for p, _ in known_pairs}
known_mods = {m for _, m in known_pairs}


def is_known(key: str) -> bool:
    keys = [key]
    if key.endswith("/index.js"):
        keys.append(key[: -len("/index.js")] + ".js")
    elif key.endswith(".js"):
        keys.append(key[:-3] + "/index.js")
    return any(k in known_keys for k in keys)


def is_i18n(k: str) -> bool:
    return bool(k and k not in COMMON_T and re.fullmatch(r"[A-Z][A-Z0-9_]{3,}", k))


unpacked = {}
for p in UNPACKED.glob("module-*.js"):
    t = p.read_text(encoding="utf-8", errors="replace")
    if STUB_RE.search(t[:400]):
        continue
    unpacked[p.name] = t

live = set(LIVE["leftover_live"])
biz = SPLIT["remaining_split_samples"]["business_looking"]
# samples only — reconstruct business list from leftover using same heuristic
biz = []
for name in LIVE["leftover_live"]:
    t = unpacked.get(name, "")
    if name not in SPLIT["remaining_split_samples"].get("business_looking", []) and True:
        pass
# Use remaining_like reconstruction: leftover in remaining_split business from file
# PASS2_SPLIT remaining_split_samples is truncated. Recompute with same classify subset:
# leftover names listed under remaining_split_samples['business_looking'] only 15.
# Load from remaining_split count 242 — we need full list. Recompute.

T_Q = re.compile(r"""(?<![A-Za-z0-9_])t\(\s*['"]""")
biz = []
for name in LIVE["leftover_live"]:
    t = unpacked.get(name, "")
    if not t:
        continue
    if "createElement" in t or "React.Component" in t or "observer(" in t or T_Q.search(t):
        # remaining_like filters
        if len(t) < 400:
            continue
        stripped = t.lstrip()
        head = t.split("\n", 1)[0]
        if stripped.startswith("export default {") and "import " not in head and len(t) < 80:
            continue
        if len(t) < 120 and "export default {" in t and "t(" not in t:
            continue
        biz.append(name)
print("biz_raw", len(biz), flush=True)

# orig t index
orig_t = defaultdict(list)
orig_api = defaultdict(list)
for p in ORIG.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    rel = p.relative_to(ORIG).as_posix()
    key = rel[:-4] + ".js" if rel.endswith(".jsx") else rel
    text = p.read_text(encoding="utf-8", errors="replace")
    for k in T_PAT.findall(text):
        orig_t[k].append(key)
    for a in API_PAT.findall(text):
        orig_api[a].append(key)

t_index = defaultdict(set)
api_index = defaultdict(set)
for name, text in unpacked.items():
    for k in T_PAT.findall(text):
        t_index[k].add(name)
    for a in API_PAT.findall(text):
        api_index[a].add(name)


def leftover_only(files):
    return [f for f in files if f in live and f not in known_mods]


def unmapped(files):
    return [f for f in files if not is_known(f)]

why = defaultdict(list)
for name in biz:
    t = unpacked[name]
    tkeys = [k for k in T_PAT.findall(t) if is_i18n(k)]
    uniq = [k for k in tkeys if leftover_only(t_index.get(k, [])) == [name]]
    orig_u = []
    orig_k = []
    for k in uniq:
        orig_u.extend(unmapped(orig_t.get(k, [])))
        orig_k.extend([f for f in orig_t.get(k, []) if is_known(f)])
    orig_u = list(dict.fromkeys(orig_u))
    orig_k = list(dict.fromkeys(orig_k))
    if uniq and not orig_u and not orig_k:
        why["kse_only_unique_t_0_orig"].append({"module": name, "t": uniq[:6]})
    elif uniq and not orig_u and orig_k:
        why["two_hit_copy_of_known_orig"].append({"module": name, "orig": orig_k[:6], "t": uniq[:4]})
    elif uniq and len(orig_u) == 1 and leftover_only(t_index.get(uniq[0], [])) == [name]:
        # would have been a pin if parent-aligned; record as ambiguous without parent
        why["unique_t_but_unmapped_orig_not_parent_aligned"].append({
            "module": name, "orig": orig_u[:4], "t": uniq[:4],
        })
    elif not tkeys:
        why["business_no_unique_t_createElement_only"].append(name)
    else:
        shared = [k for k in tkeys if len(leftover_only(t_index.get(k, []))) > 1]
        why["shared_t_multi_leftover_or_multi_orig"].append({
            "module": name,
            "t_count": len(tkeys),
            "shared_sample": shared[:4],
        })

print({k: len(v) for k, v in why.items()}, flush=True)
OUT.write_text(json.dumps({
    "biz_count": len(biz),
    "why_counts": {k: len(v) for k, v in why.items()},
    "samples": {k: (v[:12] if isinstance(v, list) else v) for k, v in why.items()},
}, indent=2) + "\n", encoding="utf-8")
print("wrote", OUT, flush=True)
