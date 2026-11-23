#!/usr/bin/env python3
"""Import-SET pinning: leftover named-import set vs orig promoted-child set.

size>=2, 1 leftover : 1 orig, reject shared sets. Do not invent.
"""
from __future__ import annotations

from collections import defaultdict
from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
SRC = APP / "src"
UNPACKED = SRC / "unpacked"
ORIG = ROOT / "src"
KNOWN_PY = ROOT / "recovery/scripts/add_known_named.py"
LIVE = json.loads((APP / "LIVE_UNPACKED.json").read_text(encoding="utf-8"))
WEBPACK = (APP / "webpack.config.js").read_text(encoding="utf-8")
RECHARTS = (APP / "recharts-aliases.js").read_text(encoding="utf-8")
COREJS = (APP / "corejs-aliases.js").read_text(encoding="utf-8")
SHIMS = (APP / "corejs-shim-aliases.js").read_text(encoding="utf-8")
OUT = APP / "PASS9_IMPORT_SET.json"

# reuse remaining_like skip + business_looking classification
from pathlib import Path as _P
import importlib.util

spec = importlib.util.spec_from_file_location(
    "pass4_remaining_like",
    ROOT / "recovery/scripts/pass4_remaining_like.py",
)

STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
IMP_RE = re.compile(
    r"""(?:\bfrom|\bimport\s*\(|\brequire\s*\()\s*['"]([^'"]+)['"]""",
    re.M,
)
PREFIXES = (
    "pages",
    "components",
    "stores",
    "actions",
    "utils",
    "configs",
    "core",
    "dmp",
)
SKIP_MODS = {
    "3225", "3567", "3511", "3513", "3251", "833", "950", "882", "807",
    "1635", "5774", "1636", "1639", "1633", "1634", "1337", "1272", "1389",
    "1183", "1764", "1111", "1053", "1112",
    "4656", "4657", "1134", "1072", "3866", "3892", "186", "1979",
    "3753", "3772", "3774", "3776", "3778", "3780", "1981",
    "1135", "1798", "1800", "1801", "1869", "1418",
    "1867", "4139", "4144", "4330",
    "1489", "2102", "1837", "1410", "5770", "1861", "4764",
    "1415", "989", "891", "717", "4142",
    "4423", "815", "962", "821", "988",
    "4938", "4997", "4998", "1215", "1475", "3666", "3674",
    "2399", "2400", "2401", "4945",
    "2300", "2301", "2302", "805", "837", "959", "2943",
    "1832", "1831", "851", "1122", "3326", "4448",
    "4153", "4154", "4219", "4227", "4103", "4080", "4107", "4105", "1847",
    "3680", "3689", "3693", "3698", "3701", "793", "747", "3839",
}
SKIP_NAME_FRAGS = (
    "WHIZARD", "ColumeInput", "CustomToolTip", "PromQLInput", "ProjectSelect",
    "FormGroupCard", "ItemContianer", "FullscreenModal", "ErrorContainer",
    "EditMonitorFormLayout", "MetircQueryInput", "BillIcon", "ContainerLog",
    "Compose", "GrafanaTargetInput", "SquareButton", "StatusReason",
    "KubeTools", "withDefaultSecrets", "KubeCtl", "KubeConfig", "kubeConfig",
    "EditGroup", "ReplicasInput", "ScheduleCluster", "RuleList", "RuleForm",
    "ClustersMapper", "ContainerImages", "ConfigReferenceImpact", "About.js",
    "ServiceAccess", "ToggleView", "TextPreview", "SlackForm", "EditBasicInfo",
    "ImageBuilder", "FluxApp", "ChartCard", "DiffYaml", "PipelineStatus",
    "AppInstances", "Slider.js", "NameWithAction", "InstanceList",
    "VersionStatus", "MonitorTab", "AceEditor", "imgBuilder", "TrafficCard",
    "PhysicalResourceItem", "Cascader/Options", "Cascader/Item", "LimitRange",
    "ManageButton", "Cards/Banner", "Cards/Info",
)
SKIP_KEY_SUBSTR = (
    "stores/monitoring/", "stores/rank/", "federated.list", "limitrange",
    "utils/request", "utils/localStorage", "components/Layout/",
    "actions/toolbox", "pages/whizard-telemetry/",
    "components/Base/Modal/modal", "clusters/components/Cards/Cluster/fields",
    "fedprojects/containers/Overview/Help",
    "fedprojects/containers/Overview/LimitRange",
    "containers/BaseInfo/ResourceQuota",
)
SKIP_EXACT = {
    "pages/clusters/containers/Overview/Dashboard/ClusterNodes.js",
    "pages/clusters/containers/Overview/Dashboard/ResourcesUsage.js",
    "pages/clusters/containers/Overview/Dashboard/ServiceComponents.js",
}

already = set(re.findall(r"module-(\d+)\.js", COREJS + SHIMS + WEBPACK + RECHARTS))
known_pairs = re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY.read_text(encoding="utf-8"))
known_keys = {p for p, _m in known_pairs}
known_mods = {m for _p, m in known_pairs}
mod_to_paths = defaultdict(list)
for p, m in known_pairs:
    mod_to_paths[m].append(p)
# canonical path per module: prefer containers/ then pages
def score(path: str) -> tuple:
    return (
        1 if "/containers/" in path else 0,
        path.count("/"),
        1 if path.startswith("pages/") else 0,
        len(path),
        path,
    )

mod_canon = {m: sorted(ps, key=score, reverse=True)[0] for m, ps in mod_to_paths.items()}
path_to_mod = {p: m for p, m in known_pairs}


def mid(name: str) -> str:
    m = re.search(r"module-(\d+)\.js", name)
    return m.group(1) if m else ""


def read(p: Path) -> str:
    return p.read_text(encoding="utf-8", errors="replace")


def key_aliases(key: str) -> list[str]:
    keys = [key]
    if key.endswith("/index.js"):
        keys.append(key[: -len("/index.js")] + ".js")
    elif key.endswith(".js"):
        keys.append(key[:-3] + "/index.js")
    return keys


def is_known(key: str) -> bool:
    return any(k in known_keys for k in key_aliases(key))


def canon_known(key: str) -> str | None:
    for k in key_aliases(key):
        if k in path_to_mod:
            return mod_canon[path_to_mod[k]]
    return None


def skip_name(key: str) -> bool:
    if key in SKIP_EXACT or any(k in SKIP_EXACT for k in key_aliases(key)):
        return True
    low = key.lower()
    return any(f.lower() in low for f in SKIP_NAME_FRAGS) or any(
        s.lower() in low for s in SKIP_KEY_SUBSTR
    )


def skip_mod(name: str) -> bool:
    n = mid(name)
    return n in SKIP_MODS or n in {re.search(r"\d+", x).group() for x in already} or name in known_mods


def leftover_name_from_spec(spec: str) -> str | None:
    spec = spec.split("?")[0]
    m = re.search(r"(?:^|/)(module-\d+\.js)$", spec)
    if not m:
        return None
    if spec.startswith("named/"):
        return None
    if spec.startswith("unpacked/") or spec.startswith("./") or spec.startswith("../"):
        return m.group(1)
    return None


def norm_key(rel: str) -> str:
    rel = rel.replace("\\", "/")
    if rel.endswith(".jsx"):
        return rel[:-4] + ".js"
    return rel


def resolve_import(importer_rel: str, raw: str) -> str | None:
    if not raw.startswith("."):
        return None
    base = Path(importer_rel).parent
    parts = []
    for part in (base / raw).as_posix().split("/"):
        if part in (".", ""):
            continue
        if part == "..":
            if parts:
                parts.pop()
            continue
        parts.append(part)
    rel = "/".join(parts)
    for ext in ("", ".js", ".jsx", "/index.js", "/index.jsx"):
        cand = rel + ext
        p = ORIG / cand
        if p.is_file():
            return norm_key(p.relative_to(ORIG).as_posix())
    return None


def resolve_alias_import(importer_rel: str, raw: str) -> str | None:
    local = resolve_import(importer_rel, raw)
    if local:
        return local
    aliases = {
        "core/": "core/",
        "components/": "components/",
        "utils/": "utils/",
        "stores/": "stores/",
        "hocs/": "hocs/",
        "actions/": "actions/",
        "configs/": "configs/",
        "pages/": "pages/",
        "apps/": "pages/apps/",
        "projects/": "pages/projects/",
        "clusters/": "pages/clusters/",
        "workspaces/": "pages/workspaces/",
        "access/": "pages/access/",
        "devops/": "pages/devops/",
        "fedprojects/": "pages/fedprojects/",
        "settings/": "pages/settings/",
        "console/": "pages/console/",
        "edgewize/": "pages/edgewize/",
        "node-groups/": "pages/node-groups/",
        "whizard-telemetry/": "pages/whizard-telemetry/",
        "dmp/": "dmp/",
    }
    for prefix, mapped in aliases.items():
        if raw == prefix[:-1] or raw.startswith(prefix):
            rest = raw[len(prefix) :] if raw.startswith(prefix) else ""
            rel = mapped + rest
            for ext in ("", ".js", ".jsx", "/index.js", "/index.jsx"):
                cand = rel + ext
                p = ORIG / cand
                if p.is_file():
                    return norm_key(p.relative_to(ORIG).as_posix())
            return None
    return None


def tiny_css(t: str) -> bool:
    stripped = t.lstrip()
    head = t.split("\n", 1)[0]
    if stripped.startswith("export default {") and "import " not in head and len(t) < 80:
        return True
    if len(t) < 120 and "export default {" in t and "t(" not in t:
        return True
    return False


unpacked = {}
for p in UNPACKED.glob("module-*.js"):
    t = read(p)
    if STUB_RE.search(t[:400]):
        continue
    unpacked[p.name] = t

live = [n for n in LIVE.get("leftover_live") or [] if n in unpacked]
business = []
for name in live:
    t = unpacked[name]
    n = mid(name)
    if n in SKIP_MODS or name in known_mods or n in {re.search(r"\d+", x).group() for x in already}:
        continue
    if "Incorrect invocation" in t or "Accessors not supported" in t or "Invalid size" in t:
        continue
    if (
        "Cannot call a class as a function" in t
        or "this hasn't been initialised" in t
        or "Super expression must either be null or a function" in t
    ):
        continue
    if tiny_css(t) or len(t) < 400:
        continue
    if t.lstrip().startswith("export default {") and "createElement" not in t and "t(" not in t:
        continue
    if "createElement" in t or "React.Component" in t or "observer(" in t or re.search(
        r"""(?<![A-Za-z0-9_])t\(\s*['"]""", t
    ):
        business.append(name)

print("live", len(live), "business_looking", len(business), flush=True)


def leftover_named_set(text: str) -> set[str]:
    out = set()
    for spec in IMP_RE.findall(text):
        spec = spec.split("?")[0]
        if spec.startswith("named/"):
            continue
        for prefix in PREFIXES:
            if spec == prefix or spec.startswith(prefix + "/"):
                key = spec if spec.endswith(".js") else spec + ".js"
                c = canon_known(key)
                if c:
                    out.add(c)
                break
        name = leftover_name_from_spec(spec)
        if name and name in mod_canon:
            out.add(mod_canon[name])
    return out


leftover_sets = {}
size_hist = defaultdict(int)
for name in business:
    s = leftover_named_set(unpacked[name])
    leftover_sets[name] = s
    size_hist[len(s)] += 1
print("leftover named-set size hist", dict(sorted(size_hist.items())), flush=True)

# orig files not in KNOWN
print("=== orig promoted-child sets ===", flush=True)
orig_sets = {}
orig_files = 0
for p in ORIG.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name or p.name.endswith(".spec.js"):
        continue
    rel = p.relative_to(ORIG).as_posix()
    key = norm_key(rel)
    orig_files += 1
    if is_known(key) or skip_name(key):
        continue
    text = read(p)
    kids = set()
    for raw in IMP_RE.findall(text):
        resolved = resolve_alias_import(rel, raw)
        if resolved:
            c = canon_known(resolved)
            if c:
                kids.add(c)
    orig_sets[key] = kids

print("orig_files", orig_files, "unnamed_orig", len(orig_sets), flush=True)
orig_size_hist = defaultdict(int)
for s in orig_sets.values():
    orig_size_hist[len(s)] += 1
print("orig promoted-child size hist", dict(sorted(orig_size_hist.items())[:20]), flush=True)

# index sets size>=2
leftover_by_set = defaultdict(list)
for name, s in leftover_sets.items():
    if len(s) < 2:
        continue
    leftover_by_set[frozenset(s)].append(name)

orig_by_set = defaultdict(list)
for key, s in orig_sets.items():
    if len(s) < 2:
        continue
    orig_by_set[frozenset(s)].append(key)

print("leftover sets size>=2 unique", len(leftover_by_set), "shared", sum(1 for v in leftover_by_set.values() if len(v) > 1), flush=True)
print("orig sets size>=2 unique", len(orig_by_set), "shared", sum(1 for v in orig_by_set.values() if len(v) > 1), flush=True)

pins = []
rejected = []
for s, leftovers in leftover_by_set.items():
    origs = orig_by_set.get(s) or []
    if len(leftovers) != 1:
        rejected.append({
            "reason": "leftover_set_not_unique",
            "leftovers": leftovers,
            "origs": origs,
            "set_size": len(s),
            "sample": sorted(s)[:8],
        })
        continue
    if len(origs) == 0:
        rejected.append({
            "reason": "no_orig_set_match",
            "leftovers": leftovers,
            "set_size": len(s),
            "sample": sorted(s)[:8],
        })
        continue
    if len(origs) != 1:
        rejected.append({
            "reason": "orig_set_shared",
            "leftovers": leftovers,
            "origs": origs,
            "set_size": len(s),
            "sample": sorted(s)[:8],
        })
        continue
    pins.append({
        "module": leftovers[0],
        "path": origs[0],
        "set_size": len(s),
        "named": sorted(s),
        "reason": "import_set_1_1",
    })

print("pins", len(pins), flush=True)
for p in pins:
    print(f"  {p['module']} -> {p['path']} set={p['set_size']}", flush=True)
print("rejected leftover_set_not_unique", sum(1 for r in rejected if r["reason"] == "leftover_set_not_unique"), flush=True)
print("rejected no_orig_set_match", sum(1 for r in rejected if r["reason"] == "no_orig_set_match"), flush=True)
print("rejected orig_set_shared", sum(1 for r in rejected if r["reason"] == "orig_set_shared"), flush=True)

def drop_helpers(s: set[str]) -> set[str]:
    return {x for x in s if not x.startswith("utils/babel-helpers/")}

# orig git has no babel-helpers; leftover sets include compiler injects.
leftover_by_set2 = defaultdict(list)
for name, s in leftover_sets.items():
    s2 = drop_helpers(s)
    if len(s2) < 2:
        continue
    leftover_by_set2[frozenset(s2)].append(name)
orig_by_set2 = defaultdict(list)
for key, s in orig_sets.items():
    s2 = drop_helpers(s)
    if len(s2) < 2:
        continue
    orig_by_set2[frozenset(s2)].append(key)

pins2 = []
rej2 = defaultdict(int)
for s, leftovers in leftover_by_set2.items():
    origs = orig_by_set2.get(s) or []
    if len(leftovers) != 1:
        rej2["leftover_set_not_unique"] += 1
        continue
    if len(origs) == 0:
        rej2["no_orig_set_match"] += 1
        continue
    if len(origs) != 1:
        rej2["orig_set_shared"] += 1
        continue
    pins2.append({
        "module": leftovers[0],
        "path": origs[0],
        "set_size": len(s),
        "named": sorted(s),
        "reason": "import_set_1_1_no_babel_helpers",
    })
print("pins_no_babel_helpers", len(pins2), "rej", dict(rej2), flush=True)
for p in pins2:
    print(f"  {p['module']} -> {p['path']} set={p['set_size']}", flush=True)

OUT.write_text(
    json.dumps(
        {
            "business_looking": len(business),
            "leftover_size_hist": {str(k): v for k, v in sorted(size_hist.items())},
            "orig_unnamed": len(orig_sets),
            "orig_size_hist": {str(k): v for k, v in sorted(orig_size_hist.items())},
            "leftover_sets_ge2": len(leftover_by_set),
            "orig_sets_ge2": len(orig_by_set),
            "pins": pins,
            "pins_no_babel_helpers": pins2,
            "rejected_counts": {
                "leftover_set_not_unique": sum(1 for r in rejected if r["reason"] == "leftover_set_not_unique"),
                "no_orig_set_match": sum(1 for r in rejected if r["reason"] == "no_orig_set_match"),
                "orig_set_shared": sum(1 for r in rejected if r["reason"] == "orig_set_shared"),
            },
            "rejected_no_babel": dict(rej2),
            "rejected_sample": rejected[:30],
        },
        indent=2,
    )
    + "\n",
    encoding="utf-8",
)
print("wrote", OUT, flush=True)
