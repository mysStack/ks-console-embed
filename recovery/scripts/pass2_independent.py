#!/usr/bin/env python3
"""Independent second pass: live enum, fine leftover buckets, unique-evidence hunt.

Do not invent orig paths. Do not put named/ into the graph. Do not npm-install.
Do not swap top-level core-js@2.6.12.
"""
from __future__ import annotations

from collections import defaultdict
from pathlib import Path
import json
import re
import urllib.request

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
SRC = APP / "src"
UNPACKED = SRC / "unpacked"
ORIG = ROOT / "src"
NM = APP / "node_modules"
KNOWN_PY = ROOT / "recovery/scripts/add_known_named.py"
WEBPACK_TXT = (APP / "webpack.config.js").read_text(encoding="utf-8")
RECHARTS_TXT = (APP / "recharts-aliases.js").read_text(encoding="utf-8")
COREJS_PATH = APP / "corejs-aliases.js"
OUT = APP / "PASS2_INDEPENDENT.json"
CDP_CHUNK = Path(
    "/mnt/c/Users/mys93/.cursor/browser-logs/"
    "cdp-response-Runtime.evaluate-2026-11-22T06-50-55-140Z.json"
)

STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)
FACTORY = re.compile(r"""/\*\*\*/ ["']\./src/unpacked/(module-\d+\.js)["']""")
PREFIX_FACTORY = re.compile(
    r"""/\*\*\*/ ["']\./src/(pages|components|stores|actions|utils|configs|core|unpacked|named)/([^\"']+\.js)["']"""
)
IMP_RE = re.compile(
    r"""(?:\bfrom|\bimport\s*\(|\brequire\s*\()\s*['"]([^'"]+)['"]""",
    re.M,
)
BARREL_RE = re.compile(
    r"""export\s+\{\s*default\s+as\s+\w+\s*\}\s+from\s+['"]([^'"]+)['"]"""
)
T_PAT = re.compile(r"""(?<![A-Za-z0-9_])t\(\s*['"]([^'"]+)['"]""")
API_PAT = re.compile(r"""['"]((?:/kapis|/apis|/api)[^'"]{6,})['"]""")
KAPIS_PAT = re.compile(r"""['"](kapis/[^'"]{6,})['"]""")
MOD_EQ = re.compile(r"""(?:module|resourceName)\s*[:=]\s*['"]([^'"]+)['"]""")
MODAL_EQ = re.compile(r"""modal\s*[:=]\s*['"]([^'"]+)['"]""")
DISPLAY = re.compile(
    r"""(?:displayName|chartName)\s*[:=]\s*['"]([A-Za-z][A-Za-z0-9]+)['"]"""
)
ROUTE_PAT = re.compile(r"""['"](/[A-Za-z][A-Za-z0-9_.:*/-]{5,})['"]""")
CLASS_PAT = re.compile(r"""\bclass\s+([A-Z][A-Za-z0-9]{3,})\b""")
STORE_PAT = re.compile(r"""\bclass\s+([A-Z][A-Za-z0-9]*Store)\b""")
ACTION_KEY = re.compile(
    r"""['"]([a-z][a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+){1,4})['"]\s*:"""
)
ACTION_MODAL = re.compile(
    r"""['"]((?:modal|resource|module)\.[A-Za-z][A-Za-z0-9_.]+)['"]"""
)
WEBPACK_COMMENT = re.compile(r"""/\*\s*([A-Za-z][\w./-]{8,})\s*\*/""")
METHOD_PAT = re.compile(
    r"""(?:^|\n)\s*(?:(?:async\s+)?([A-Za-z_][A-Za-z0-9]{6,})\s*\([^;{]*\)\s*\{"""
    r"""|([A-Za-z_][A-Za-z0-9]{6,})\s*=\s*(?:async\s*)?(?:\([^)]*\)|[A-Za-z_][A-Za-z0-9_]*)\s*=>)"""
)
RENDER_PAT = re.compile(r"""(?:^|\n)\s*(render[A-Z][A-Za-z0-9_]*)\s*\(""")
ERR_LIT = re.compile(
    r"""(?:throw|TypeError|Error|RangeError)\s*(?:new\s+\w+\s*)?\(\s*['"]([^'"]{8,})['"]"""
)
SCRIPT_RE = re.compile(r'src="(/[^"]+\.js)"')
PREFIXES = (
    "pages", "components", "stores", "actions", "utils", "configs", "core",
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
COMMON_T = {
    "NAME", "TYPE", "STATUS", "CREATE", "EDIT", "DELETE", "SAVE", "CANCEL",
    "CONFIRM", "OK", "CLOSE", "SEARCH", "REFRESH", "MORE", "ACTION", "ACTIONS",
    "CREATED_AT", "CREATION_TIME", "DESCRIPTION", "PROJECT", "CLUSTER",
    "WORKSPACE", "NAMESPACE", "USERNAME", "PASSWORD", "EMAIL", "ROLE",
    "ADD", "REMOVE", "UPDATE", "CREATE_SUCCESSFUL", "DELETE_SUCCESSFUL",
    "UPDATE_SUCCESSFUL", "NEXT", "PREVIOUS", "BACK", "YES", "NO", "ENABLE",
    "DISABLE", "OPTIONAL", "REQUIRED", "VALUE", "KEY", "LABEL", "LABELS",
    "ANNOTATIONS", "SETTINGS", "BASIC_INFO", "ADVANCED", "OVERVIEW",
}
COMMON_METHODS = {
    "constructor", "render", "componentDidMount", "componentWillUnmount",
    "componentDidUpdate", "handleSubmit", "fetchData", "getData",
    "handleChange", "handleClick", "handleCancel", "handleOk",
}
COMMON_CLASS = {
    "Component", "PureComponent", "React", "Store", "Modal", "Form",
    "Error", "TypeError", "RangeError", "SyntaxError", "Promise",
}
BABEL_NEEDLES = {
    "classCallCheck": "Cannot call a class as a function",
    "assertThisInitialized": "this hasn't been initialised - super() hasn't been called",
    "inherits": "Super expression must either be null or a function",
    "deleteProperty": "Cannot delete property",
}

aliased = set(re.findall(r"module-(\d+)\.js", WEBPACK_TXT + "\n" + RECHARTS_TXT))
if COREJS_PATH.exists():
    aliased.update(re.findall(r"module-(\d+)\.js", COREJS_PATH.read_text(encoding="utf-8")))

known_pairs = re.findall(
    r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY.read_text(encoding="utf-8")
)
known_keys = {p for p, _m in known_pairs}
known_mods = {m for _p, m in known_pairs}


def mid_of(name: str) -> str:
    m = re.search(r"module-(\d+)\.js", name)
    return m.group(1) if m else ""


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def fetch(url: str, timeout: int = 60) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0", "Accept": "*/*"})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read().decode("utf-8", "replace")


def is_stub(text: str) -> bool:
    return bool(STUB_RE.search(text[:400]))


def key_aliases(key: str) -> list[str]:
    keys = [key]
    if key.endswith("/index.js"):
        keys.append(key[: -len("/index.js")] + ".js")
    elif key.endswith(".js"):
        keys.append(key[:-3] + "/index.js")
    return keys


def is_known(key: str) -> bool:
    return any(k in known_keys for k in key_aliases(key))


def skip_name(key: str) -> bool:
    if key in SKIP_EXACT or any(k in SKIP_EXACT for k in key_aliases(key)):
        return True
    low = key.lower()
    return any(f.lower() in low for f in SKIP_NAME_FRAGS) or any(
        s.lower() in low for s in SKIP_KEY_SUBSTR
    )


def skip_mod(name: str) -> bool:
    return mid_of(name) in SKIP_MODS or mid_of(name) in aliased


def is_i18n_key(k: str) -> bool:
    if not k or k in COMMON_T:
        return False
    return bool(re.fullmatch(r"[A-Z][A-Z0-9_]{3,}", k))


def tiny_cssish(text: str) -> bool:
    stripped = text.lstrip()
    head = text.split("\n", 1)[0]
    if stripped.startswith("export default {") and "import " not in head and len(text) < 80:
        return True
    if len(text) < 120 and "export default {" in text and "t(" not in text:
        return True
    return False


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


def orig_path_for(key: str) -> Path | None:
    for cand in key_aliases(key):
        stem = cand[:-3] if cand.endswith(".js") else cand
        for ext in (".js", ".jsx", "/index.js", "/index.jsx"):
            p = ORIG / f"{stem}{ext}"
            if p.is_file():
                return p
    return None


def pin_path(key: str) -> str:
    if key.endswith("/index.js"):
        return key
    if key.endswith(".js"):
        sibling = SRC / key[:-3]
        orig_dir = ORIG / key[:-3]
        if sibling.is_dir() or orig_dir.is_dir():
            idx = ORIG / key[:-3] / "index.js"
            idx_jsx = ORIG / key[:-3] / "index.jsx"
            if idx.is_file() or idx_jsx.is_file() or sibling.is_dir():
                return key[:-3] + "/index.js"
    return key


def norm_key(rel: str) -> str:
    rel = rel.replace("\\", "/")
    if rel.endswith(".jsx"):
        return rel[:-4] + ".js"
    return rel


print("=== enum live factory leftovers ===", flush=True)
scripts = json.loads((APP / "LIVE_RESOURCES.json").read_text(encoding="utf-8")).get("scripts") or []
# refresh from HTML so we do not blindly copy a stale list
html_scripts = []
for route in ("/login", "/dashboard"):
    try:
        html = fetch("http://127.0.0.1:8099" + route)
        html_scripts.extend("http://127.0.0.1:8099" + s for s in SCRIPT_RE.findall(html))
    except Exception as exc:  # noqa: BLE001
        print("html_err", route, type(exc).__name__, str(exc)[:80])
html_scripts = list(dict.fromkeys(html_scripts))
urls = list(dict.fromkeys(html_scripts + scripts))
print("html_scripts", html_scripts, "url_count", len(urls), flush=True)

webpack_ids = set()
prefix_ids = defaultdict(set)
chunk_errors = []
fetched = 0
app_js = ""
for url in urls:
    try:
        data = fetch(url)
    except Exception as exc:  # noqa: BLE001
        chunk_errors.append({"url": url.split("/")[-1][:80], "error": type(exc).__name__})
        continue
    fetched += 1
    webpack_ids.update(FACTORY.findall(data))
    for m in PREFIX_FACTORY.finditer(data):
        prefix_ids[m.group(1)].add(m.group(2).split("?")[0])
    if "/app." in url and "vendors-" not in url and not app_js:
        app_js = data
    print("fetched", url.split("/")[-1][:70], "factories", len(FACTORY.findall(data)), flush=True)

leftovers = []
stubs = 0
for name in sorted(webpack_ids, key=lambda n: int(re.search(r"\d+", n).group())):
    path = UNPACKED / name
    text = read(path) if path.is_file() else ""
    if is_stub(text):
        stubs += 1
        continue
    leftovers.append(name)

disk = 0
for p in UNPACKED.glob("module-*.js"):
    if not is_stub(read(p)):
        disk += 1

promoted = 0
for folder in PREFIXES:
    d = SRC / folder
    if d.is_dir():
        for p in d.rglob("*.js"):
            t = read(p)
            if not t.startswith("export { default } from "):
                promoted += 1

# webpackChunk names from independent CDP dump
chunk_names = []
chunk_meta = {}
if CDP_CHUNK.exists():
    cdp = json.loads(CDP_CHUNK.read_text(encoding="utf-8"))
    val = ((cdp.get("result") or {}).get("value")) or {}
    chunk_names = val.get("unpackedNames") or []
    chunk_meta = {
        "chunkLen": val.get("chunkLen"),
        "namedCount": val.get("namedCount"),
        "overlay": val.get("overlay"),
        "prefixCounts": val.get("prefixCounts"),
        "unpackedUnique": val.get("unpackedUnique"),
    }

print(json.dumps({
    "fetched_scripts": fetched,
    "chunk_errors": chunk_errors,
    "factory_unpacked_including_stubs": len(webpack_ids),
    "stub_factories": stubs,
    "factory_leftover": len(leftovers),
    "disk_real_unpacked": disk,
    "promoted_real": promoted,
    "named_factories": len(prefix_ids.get("named") or []),
    "prefix_factory_counts": {k: len(v) for k, v in prefix_ids.items()},
    "webpackChunk": chunk_meta,
}, indent=2), flush=True)

print("=== index leftover texts ===", flush=True)
unpacked_text: dict[str, str] = {}
for path in UNPACKED.glob("module-*.js"):
    text = read(path)
    if is_stub(text):
        continue
    unpacked_text[path.name] = text
print("real_unpacked", len(unpacked_text), flush=True)

live_leftover = [n for n in leftovers if n in unpacked_text]
live_set = set(live_leftover)

print("=== classify factory leftovers ===", flush=True)
buckets = defaultdict(list)
remaining = []
for name in live_leftover:
    t = unpacked_text[name]
    n = mid_of(name)
    if n in SKIP_MODS:
        buckets["skip_list"].append(name)
        continue
    if n in aliased:
        buckets["already_aliased_vendor"].append(name)
        continue
    if n == "747" or ("cron" in t.lower() and "constraint" in t.lower() and "Cannot parse" in t):
        buckets["cron_parser_not_installed"].append(name)
        continue
    if "Incorrect invocation" in t or "Accessors not supported" in t or "Invalid size" in t:
        buckets["corejs_2hit_errors"].append(name)
        continue
    if (
        "Cannot call a class as a function" in t
        or "this hasn't been initialised" in t
        or "Super expression must either be null or a function" in t
    ):
        buckets["babel_helper_needles"].append(name)
        continue
    if tiny_cssish(t):
        buckets["cssish"].append(name)
        continue
    if len(t) < 400:
        buckets["tiny"].append(name)
        continue
    if "lodash" in t[:400].lower() or "LoDash" in t:
        buckets["lodashish"].append(name)
        continue
    remaining.append(name)

# finer split of remaining (the ~714 bucket)
for name in remaining:
    t = unpacked_text[name]
    if "webpackPolyfill" in t:
        buckets["webpack_runtime"].append(name)
        continue
    if "Symbol.for(\"react.element\")" in t or "Symbol.for('react.element')" in t:
        if "isValidElementType" in t or "export const isFragment" in t or "export function typeOf" in t:
            buckets["react_is_family"].append(name)
            continue
        if "ReactCurrentDispatcher" in t or "REACT_ELEMENT_TYPE" in t or "createElement" in t[:800]:
            buckets["react_mobx_history_internals"].append(name)
            continue
        buckets["react_mobx_history_internals"].append(name)
        continue
    if any(s in t for s in (
        "ReactCurrentOwner", "ReactCurrentDispatcher", "Minified React error",
        "$mobx", "createBrowserHistory", "Hash history needs a DOM",
        "Browser history needs a DOM", "You should not use <Switch>",
        "withRouter(", "Reaction doesn't",
    )):
        buckets["react_mobx_history_internals"].append(name)
        continue
    if "Cannot delete property" in t:
        buckets["babel_helper_needles"].append(name)
        continue

consumed = set()
for key in (
    "webpack_runtime", "react_is_family", "react_mobx_history_internals",
    "babel_helper_needles",
):
    consumed.update(buckets[key])
rest = [n for n in remaining if n not in consumed]

# kube-design leftover copies vs npm: unique error literals only (not generic displayName)
kd_dir = NM / "@kube-design/components"
kd_needles = {}
if kd_dir.exists():
    for p in kd_dir.rglob("*.js"):
        rel = p.relative_to(kd_dir).as_posix()
        if "node_modules" in rel.split("/"):
            continue
        try:
            kt = read(p)
        except OSError:
            continue
        for e in ERR_LIT.findall(kt):
            if len(e) >= 16:
                kd_needles.setdefault(e, []).append(rel)

for name in list(rest):
    t = unpacked_text[name]
    if "@kube-design" in t or "kubed-" in t:
        buckets["kube_design_leftover_copies"].append(name)
        rest.remove(name)
        continue
    hits = []
    for e in ERR_LIT.findall(t):
        files = kd_needles.get(e) or []
        if files:
            hits.append(e)
    if hits:
        buckets["kube_design_leftover_copies"].append(name)
        rest.remove(name)

# unique vendor vs already-installed npm (top-level + selected transitives)
pkg_json = json.loads((APP / "package.json").read_text(encoding="utf-8"))
deps = {**pkg_json.get("dependencies", {}), **pkg_json.get("devDependencies", {})}
extra_pkgs = [
    "react-is", "tiny-invariant", "hoist-non-react-statics", "warning",
    "tiny-warning", "value-equal", "resolve-pathname", "mini-create-react-context",
    "object-assign", "scheduler", "gud", "prop-types", "history", "mobx",
    "react-lifecycles-compat",
]
scan_pkgs = []
for pkg in list(deps) + extra_pkgs:
    if pkg in {"core-js", "core-js3"}:
        continue
    if (NM / pkg).exists() or (NM / pkg.split("/")[0]).exists():
        scan_pkgs.append(pkg)
scan_pkgs = list(dict.fromkeys(scan_pkgs))

err_index = defaultdict(set)
for name, text in unpacked_text.items():
    if name not in live_set:
        continue
    for e in ERR_LIT.findall(text):
        err_index[e].add(name)

vendor_unique = []
pkg_err = defaultdict(lambda: defaultdict(set))
for pkg in scan_pkgs:
    pkg_dir = NM / pkg
    if not pkg_dir.exists():
        continue
    files = [p for p in pkg_dir.rglob("*.js") if "node_modules" not in p.relative_to(pkg_dir).as_posix().split("/")[1:]]
    if len(files) > 250:
        files = files[:250]
    for p in files:
        try:
            pt = read(p)
        except OSError:
            continue
        rel = p.relative_to(NM).as_posix()
        for e in ERR_LIT.findall(pt):
            pkg_err[e][pkg].add(rel)

for e, live_files in err_index.items():
    live = [n for n in live_files if n in live_set and mid_of(n) not in SKIP_MODS and mid_of(n) not in aliased]
    pkgs = pkg_err.get(e) or {}
    npm_files = [(pkg, rel) for pkg, rels in pkgs.items() for rel in rels]
    if len(live) == 1 and len(npm_files) == 1:
        vendor_unique.append({
            "module": live[0],
            "pkg": npm_files[0][0],
            "file": npm_files[0][1],
            "via": e[:100],
        })

# special unique fingerprints read from leftover AND npm
special = []
react_is_dev = NM / "react-is/cjs/react-is.development.js"
if react_is_dev.exists():
    rit = read(react_is_dev)
    # leftover 761 has AsyncMode + react.block + isValidElementType; 2434 has server_context
    for name in rest + buckets["react_is_family"]:
        t = unpacked_text.get(name, "")
        if "react.async_mode" in t and "react.block" in t and "isValidElementType" in t and "react.server_context" not in t:
            if "REACT_ASYNC_MODE_TYPE" in rit or "react.async_mode" in rit:
                special.append({
                    "module": name,
                    "pkg": "react-is",
                    "file": "react-is/cjs/react-is.development.js",
                    "via": "react.async_mode+react.block+isValidElementType vs npm 16.13.1",
                })
tiny_inv = NM / "tiny-invariant"
if tiny_inv.exists():
    for name, t in unpacked_text.items():
        if name in live_set and "Invariant failed" in t and mid_of(name) not in aliased:
            special.append({
                "module": name,
                "pkg": "tiny-invariant",
                "file": "tiny-invariant/dist/tiny-invariant.cjs.js",
                "via": "Invariant failed unique leftover vs npm",
            })

# classify rest using unique t() vs orig later; first mark KSE-only after orig index
print("vendor_unique_err", len(vendor_unique), "special", special, flush=True)

print("=== index promoted importers ===", flush=True)
promoted_text: dict[str, str] = {}
importers = defaultdict(list)
named_imports = []
for folder in PREFIXES:
    d = SRC / folder
    if not d.is_dir():
        continue
    for path in d.rglob("*.js"):
        rel = path.relative_to(SRC).as_posix()
        text = read(path)
        if text.startswith("export { default } from "):
            continue
        promoted_text[rel] = text
        for spec in IMP_RE.findall(text):
            if spec.startswith("named/"):
                named_imports.append((rel, spec))
                continue
            kid = leftover_name_from_spec(spec)
            if kid and kid in unpacked_text:
                importers[kid].append("PROMOTED:" + rel)
                live_set.add(kid)

for name, text in unpacked_text.items():
    for spec in IMP_RE.findall(text):
        if spec.startswith("named/"):
            named_imports.append((name, spec))
            continue
        kid = leftover_name_from_spec(spec)
        if kid and kid in unpacked_text:
            importers[kid].append(name)
print("promoted_files", len(promoted_text), "named_imports", len(named_imports), flush=True)


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
    }
    for prefix, mapped in aliases.items():
        if raw == prefix[:-1] or raw.startswith(prefix):
            rest = raw[len(prefix):] if raw.startswith(prefix) else ""
            rel = mapped + rest
            for ext in ("", ".js", ".jsx", "/index.js", "/index.jsx"):
                cand = rel + ext
                p = ORIG / cand
                if p.is_file():
                    return norm_key(p.relative_to(ORIG).as_posix())
            return None
    return None


print("=== index orig ===", flush=True)
orig_imp_targets = defaultdict(list)
orig_all_imps = defaultdict(list)
orig_texts = {}
orig_t = defaultdict(list)
orig_api = defaultdict(list)
orig_mod = defaultdict(list)
orig_modal = defaultdict(list)
orig_disp = defaultdict(list)
orig_method = defaultdict(list)
orig_route = defaultdict(list)
orig_class = defaultdict(list)
orig_store = defaultdict(list)
orig_action = defaultdict(list)
orig_comment = defaultdict(list)
orig_barrel_kids = defaultdict(list)
orig_action_modal = defaultdict(list)
for p in ORIG.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name or p.name.endswith(".spec.js"):
        continue
    rel = p.relative_to(ORIG).as_posix()
    key = norm_key(rel)
    text = read(p)
    orig_texts[key] = text
    for raw in IMP_RE.findall(text):
        resolved = resolve_alias_import(rel, raw)
        if resolved:
            orig_all_imps[key].append(resolved)
            orig_imp_targets[resolved].append(key)
    for raw in BARREL_RE.findall(text):
        resolved = resolve_alias_import(rel, raw) or resolve_import(rel, raw)
        if resolved:
            orig_barrel_kids[key].append(resolved)
            if resolved not in orig_all_imps[key]:
                orig_all_imps[key].append(resolved)
                orig_imp_targets[resolved].append(key)
    for k in T_PAT.findall(text):
        orig_t[k].append(key)
    for a in API_PAT.findall(text) + KAPIS_PAT.findall(text):
        orig_api[a].append(key)
    for k in MOD_EQ.findall(text):
        orig_mod[k].append(key)
    for k in MODAL_EQ.findall(text):
        orig_modal[k].append(key)
    for k in DISPLAY.findall(text):
        orig_disp[k].append(key)
    for k in ROUTE_PAT.findall(text):
        orig_route[k].append(key)
    for k in CLASS_PAT.findall(text):
        if k not in COMMON_CLASS:
            orig_class[k].append(key)
    for k in STORE_PAT.findall(text):
        orig_store[k].append(key)
    for k in ACTION_KEY.findall(text):
        orig_action[k].append(key)
    for k in ACTION_MODAL.findall(text):
        orig_action_modal[k].append(key)
    for k in WEBPACK_COMMENT.findall(text):
        orig_comment[k].append(key)
    for a, b in METHOD_PAT.findall(text):
        name = a or b
        if name and name not in COMMON_METHODS:
            orig_method[name].append(key)
    for name in RENDER_PAT.findall(text):
        orig_method[name].append(key)
print("orig_files", len(orig_texts), "known_keys", len(known_keys), flush=True)


def unnamed_locals(parent_key: str) -> list[str]:
    out = []
    for child in dict.fromkeys(orig_all_imps.get(parent_key, [])):
        if is_known(child) or skip_name(child):
            continue
        if child.endswith((".scss", ".css")):
            continue
        out.append(child)
    return out


pins = []
skipped = []
seen_mod = set()
seen_path = set()
reason_counts = defaultdict(int)


def consider(path: str, mod: str, reason: str, extra: str) -> bool:
    path = pin_path(path)
    if skip_name(path) or skip_mod(mod):
        skipped.append({"path": path, "module": mod, "reason": "skip-list", "extra": extra})
        reason_counts["skip-list"] += 1
        return False
    if is_known(path) or path in seen_path:
        skipped.append({"path": path, "module": mod, "reason": "path_mapped", "extra": extra})
        reason_counts["path_mapped"] += 1
        return False
    if mod in known_mods or mod in seen_mod:
        skipped.append({"path": path, "module": mod, "reason": "module_mapped", "extra": extra})
        reason_counts["module_mapped"] += 1
        return False
    dest = SRC / path
    if dest.exists() and not dest.read_text(encoding="utf-8", errors="replace").startswith(
        "export { default } from "
    ):
        skipped.append({"path": path, "module": mod, "reason": "dest_exists", "extra": extra})
        reason_counts["dest_exists"] += 1
        return False
    if not orig_path_for(path):
        skipped.append({"path": path, "module": mod, "reason": "orig_missing", "extra": extra})
        reason_counts["orig_missing"] += 1
        return False
    if path.split("/")[0] not in PREFIXES:
        skipped.append({"path": path, "module": mod, "reason": "prefix_skip", "extra": extra})
        reason_counts["prefix_skip"] += 1
        return False
    if tiny_cssish(unpacked_text.get(mod, "")):
        skipped.append({"path": path, "module": mod, "reason": "cssish", "extra": extra})
        reason_counts["cssish"] += 1
        return False
    pins.append({"path": path, "module": mod, "reason": reason, "extra": extra})
    seen_mod.add(mod)
    seen_path.add(path)
    for alias in key_aliases(path):
        seen_path.add(alias)
    print(f"  PIN {path} -> {mod} [{reason}] {extra}", flush=True)
    return True


def promo_imps(name: str) -> list[str]:
    imps = [i for i in dict.fromkeys(importers[name])]
    return [i[9:] for i in imps if i.startswith("PROMOTED:")]


print("\n=== unique importer 1:1 + grandchildren ===", flush=True)
unique_promoted_kids = defaultdict(list)
for name in sorted(live_set, key=lambda n: int(mid_of(n) or 0)):
    if name in known_mods or skip_mod(name) or tiny_cssish(unpacked_text.get(name, "")):
        continue
    promo = promo_imps(name)
    if len(promo) == 1 and is_known(promo[0]):
        unique_promoted_kids[promo[0]].append(name)
print("parents_with_unique_leftover_kids", len(unique_promoted_kids), flush=True)
one_one = 0
for parent_rel, kids in sorted(unique_promoted_kids.items()):
    orig_unnamed = unnamed_locals(parent_rel)
    if len(kids) == 1 and len(orig_unnamed) == 1:
        child = orig_unnamed[0]
        oimps = sorted(set(orig_imp_targets.get(child, [])))
        oimps_known = [p for p in oimps if is_known(p)]
        if oimps_known == [parent_rel] or oimps == [parent_rel]:
            if consider(child, kids[0], "unique_importer_1_1", f"parent={parent_rel}"):
                one_one += 1
print("unique_importer_1_1", one_one, flush=True)

# grandchildren: leftover uniquely imported by leftover that is unique kid of named parent
gc = 0
for parent_rel, kids in sorted(unique_promoted_kids.items()):
    for kid in kids:
        if kid in seen_mod:
            continue
        # leftover children of this leftover, uniquely
        lkids = []
        for spec in IMP_RE.findall(unpacked_text.get(kid, "")):
            name = leftover_name_from_spec(spec)
            if not name or name not in unpacked_text or skip_mod(name) or tiny_cssish(unpacked_text[name]):
                continue
            pimps = [i for i in dict.fromkeys(importers[name]) if not i.startswith("PROMOTED:")]
            promo = promo_imps(name)
            if pimps == [kid] and not promo:
                lkids.append(name)
        orig_unnamed = unnamed_locals(parent_rel)
        for ochild in orig_unnamed:
            gcs = [c for c in unnamed_locals(ochild) if c not in seen_path]
            if len(lkids) == 1 and len(gcs) == 1:
                oimps = [p for p in dict.fromkeys(orig_imp_targets.get(gcs[0], [])) if not is_known(p) or p == ochild]
                if ochild in orig_imp_targets.get(gcs[0], []) or orig_imp_targets.get(gcs[0], []) == [ochild]:
                    if consider(gcs[0], lkids[0], "unique_grandchild", f"parent={parent_rel} via={ochild}"):
                        gc += 1
print("unique_grandchild", gc, flush=True)

print("\n=== unique barrel ===", flush=True)
barrel_pins = 0
for parent_rel, kids in sorted(unique_promoted_kids.items()):
    barrel_unnamed = []
    for child in dict.fromkeys(orig_barrel_kids.get(parent_rel, [])):
        if is_known(child) or skip_name(child):
            continue
        barrel_unnamed.append(child)
    if len(barrel_unnamed) == 1 and len(kids) == 1:
        if consider(barrel_unnamed[0], kids[0], "unique_barrel", f"parent={parent_rel}"):
            barrel_pins += 1
print("unique_barrel", barrel_pins, flush=True)


def family_index(texts: dict[str, str], kind: str) -> dict[str, list[str]]:
    idx = defaultdict(list)
    for ident, text in texts.items():
        if kind == "t":
            keys = [k for k in T_PAT.findall(text) if is_i18n_key(k)]
        elif kind == "method":
            keys = []
            for a, b in METHOD_PAT.findall(text):
                n = a or b
                if n and n not in COMMON_METHODS:
                    keys.append(n)
            keys.extend(RENDER_PAT.findall(text))
        elif kind == "class":
            keys = [k for k in CLASS_PAT.findall(text) if k not in COMMON_CLASS]
        elif kind == "modal":
            keys = [k for k in MODAL_EQ.findall(text) if not re.fullmatch(r"[-_A-Za-z0-9]{16,}", k)]
        elif kind == "action_modal":
            keys = ACTION_MODAL.findall(text)
        elif kind == "display":
            keys = DISPLAY.findall(text)
        elif kind == "api":
            keys = API_PAT.findall(text) + KAPIS_PAT.findall(text)
        elif kind == "mod":
            keys = MOD_EQ.findall(text)
        elif kind == "store":
            keys = STORE_PAT.findall(text)
        elif kind == "action":
            keys = ACTION_KEY.findall(text)
        elif kind == "route":
            keys = ROUTE_PAT.findall(text)
        else:
            keys = []
        for k in dict.fromkeys(keys):
            idx[k].append(ident)
    return idx


KINDS = (
    "t", "class", "api", "mod", "store", "action", "action_modal",
    "modal", "display", "method", "route",
)

print("\n=== family distinguish ===", flush=True)
fam_pins = 0
for parent_rel, kids in sorted(unique_promoted_kids.items()):
    orig_unnamed = [c for c in unnamed_locals(parent_rel) if c not in seen_path]
    leftover_kids = [k for k in kids if k not in seen_mod]
    if len(leftover_kids) < 1 or len(orig_unnamed) < 1:
        continue
    if len(leftover_kids) == 1 and len(orig_unnamed) == 1:
        continue
    kid_texts = {n: unpacked_text[n] for n in leftover_kids}
    orig_family = {c: orig_texts[c] for c in orig_unnamed if c in orig_texts}
    for kind in KINDS:
        kidx = family_index(kid_texts, kind)
        oidx = family_index(orig_family, kind)
        for key, kfiles in kidx.items():
            ofiles = oidx.get(key, [])
            if len(kfiles) == 1 and len(ofiles) == 1:
                child = ofiles[0]
                oimps = sorted(set(orig_imp_targets.get(child, [])))
                if oimps and parent_rel not in oimps:
                    continue
                if consider(child, kfiles[0], f"family_unique_{kind}", f"parent={parent_rel} key={key!r}"):
                    fam_pins += 1
print("family_pins", fam_pins, flush=True)

print("\n=== orig unique-import families ===", flush=True)
missing_orig = [k for k in orig_texts if not is_known(k)]
uniq_import_kids = defaultdict(list)
for key in sorted(missing_orig):
    if skip_name(key) or key in seen_path:
        continue
    oimps = [p for p in dict.fromkeys(orig_imp_targets.get(key, [])) if is_known(p)]
    if len(oimps) != 1:
        continue
    uniq_import_kids[oimps[0]].append(key)

multi_families = []
oi_pins = oi_zero = oi_multi = 0
zero_kid_paths = []
for parent_key, children in sorted(uniq_import_kids.items()):
    kids = [k for k in unique_promoted_kids.get(parent_key, []) if k not in seen_mod]
    children = [c for c in children if c not in seen_path]
    if len(kids) == 1 and len(children) == 1:
        if consider(children[0], kids[0], "orig_unique_import_1_1", f"parent={parent_key}"):
            oi_pins += 1
        continue
    if not kids:
        oi_zero += len(children)
        for child in children:
            zero_kid_paths.append({"path": child, "parent": parent_key})
            skipped.append({"path": child, "reason": "orig_unique_import_0_kid", "parent": parent_key})
            reason_counts["orig_unique_import_0_kid"] += 1
        continue
    if len(kids) >= 2 and len(children) >= 1:
        oi_multi += 1
        rec = {"parent": parent_key, "leftover_kids": kids, "orig_unnamed": children}
        multi_families.append(rec)
        print(f"  MULTI parent={parent_key} leftover={len(kids)} orig={len(children)}", flush=True)
        kid_texts = {n: unpacked_text[n] for n in kids}
        orig_family = {c: orig_texts[c] for c in children if c in orig_texts}
        for kind in KINDS:
            kidx = family_index(kid_texts, kind)
            oidx = family_index(orig_family, kind)
            for key, kfiles in kidx.items():
                ofiles = oidx.get(key, [])
                if len(kfiles) == 1 and len(ofiles) == 1:
                    if consider(ofiles[0], kfiles[0], f"multi_family_unique_{kind}", f"parent={parent_key} key={key!r}"):
                        oi_pins += 1
print("orig_unique_import_pins", oi_pins, "zero", oi_zero, "multi_families", oi_multi, flush=True)

print("\n=== unique literals leftover vs orig NOT in KNOWN ===", flush=True)
t_index = defaultdict(set)
api_index = defaultdict(set)
mod_index = defaultdict(set)
modal_index = defaultdict(set)
disp_index = defaultdict(set)
method_index = defaultdict(set)
route_index = defaultdict(set)
class_index = defaultdict(set)
store_index = defaultdict(set)
action_index = defaultdict(set)
action_modal_index = defaultdict(set)
comment_index = defaultdict(set)
for name, text in unpacked_text.items():
    for k in T_PAT.findall(text):
        t_index[k].add(name)
    for a in API_PAT.findall(text) + KAPIS_PAT.findall(text):
        api_index[a].add(name)
    for k in MOD_EQ.findall(text):
        mod_index[k].add(name)
    for k in MODAL_EQ.findall(text):
        modal_index[k].add(name)
    for k in DISPLAY.findall(text):
        disp_index[k].add(name)
    for k in ROUTE_PAT.findall(text):
        route_index[k].add(name)
    for k in CLASS_PAT.findall(text):
        if k not in COMMON_CLASS:
            class_index[k].add(name)
    for k in STORE_PAT.findall(text):
        store_index[k].add(name)
    for k in ACTION_KEY.findall(text):
        action_index[k].add(name)
    for k in ACTION_MODAL.findall(text):
        action_modal_index[k].add(name)
    for k in WEBPACK_COMMENT.findall(text):
        comment_index[k].add(name)
    for a, b in METHOD_PAT.findall(text):
        n = a or b
        if n and n not in COMMON_METHODS:
            method_index[n].add(name)
    for n in RENDER_PAT.findall(text):
        method_index[n].add(name)


def leftover_only(files) -> list[str]:
    return sorted(
        {
            f
            for f in files
            if f in unpacked_text and f in live_set and f not in known_mods and not skip_mod(f)
        },
        key=lambda n: int(mid_of(n) or 0),
    )


def unmapped_only(files) -> list[str]:
    return [f for f in files if not is_known(f)]


def parent_aligned(mod: str, orig_key: str) -> bool:
    promo = promo_imps(mod)
    oimps = [p for p in dict.fromkeys(orig_imp_targets.get(orig_key, [])) if is_known(p)]
    if not promo or not oimps:
        return False
    return bool(set(promo) & set(oimps))


lit_pins = 0
strong_no_parent = 0


def try_literal(key: str, orig_map, leftover_map, reason: str, values, require_parent: bool) -> bool:
    global lit_pins, strong_no_parent
    for k in dict.fromkeys(values):
        if unmapped_only(orig_map.get(k, [])) != [key]:
            continue
        live = leftover_only(leftover_map.get(k, []))
        if len(live) != 1:
            continue
        if require_parent and not parent_aligned(live[0], key):
            continue
        tag = reason if require_parent else reason + "_global"
        if consider(key, live[0], tag, repr(k)):
            if require_parent:
                lit_pins += 1
            else:
                strong_no_parent += 1
            return True
    return False


for key in missing_orig:
    if skip_name(key) or key in seen_path:
        continue
    text = orig_texts[key]
    if try_literal(key, orig_mod, mod_index, "unique_module_or_resource", MOD_EQ.findall(text), True):
        continue
    if try_literal(key, orig_api, api_index, "unique_api", API_PAT.findall(text) + KAPIS_PAT.findall(text), True):
        continue
    if try_literal(key, orig_store, store_index, "unique_store_class", STORE_PAT.findall(text), True):
        continue
    if try_literal(key, orig_class, class_index, "unique_class", CLASS_PAT.findall(text), True):
        continue
    if try_literal(key, orig_disp, disp_index, "unique_displayName", DISPLAY.findall(text), True):
        continue
    if try_literal(key, orig_action, action_index, "unique_action_key", ACTION_KEY.findall(text), True):
        continue
    if try_literal(key, orig_action_modal, action_modal_index, "unique_action_modal", ACTION_MODAL.findall(text), True):
        continue
    methods = []
    for a, b in METHOD_PAT.findall(text):
        n = a or b
        if n and n not in COMMON_METHODS:
            methods.append(n)
    methods.extend(RENDER_PAT.findall(text))
    if try_literal(key, orig_method, method_index, "unique_method", methods, True):
        continue
    tkeys = [k for k in T_PAT.findall(text) if is_i18n_key(k)]
    # combined unique action-modal + unique t + unique importer
    am = ACTION_MODAL.findall(text)
    if am and tkeys and promo_imps:
        if try_literal(key, orig_t, t_index, "unique_t_with_action_modal", tkeys, True):
            continue
    if try_literal(key, orig_t, t_index, "unique_t_unmapped_orig", tkeys, True):
        continue
    if try_literal(key, orig_route, route_index, "unique_route", ROUTE_PAT.findall(text), True):
        continue
    if try_literal(key, orig_comment, comment_index, "unique_comment", WEBPACK_COMMENT.findall(text), True):
        continue

# strong global 1:1 without parent (API / resourceName / Store only)
for key in missing_orig:
    if skip_name(key) or key in seen_path:
        continue
    text = orig_texts[key]
    if try_literal(key, orig_api, api_index, "unique_api", API_PAT.findall(text) + KAPIS_PAT.findall(text), False):
        continue
    if try_literal(key, orig_mod, mod_index, "unique_module_or_resource", MOD_EQ.findall(text), False):
        continue
    if try_literal(key, orig_store, store_index, "unique_store_class", STORE_PAT.findall(text), False):
        continue
print("literal_pins_parent", lit_pins, "strong_global", strong_no_parent, flush=True)

print("\n=== 2-hit extra path ===", flush=True)
two_hit_extra = []
for helper, needle in BABEL_NEEDLES.items():
    hits = [n for n, t in unpacked_text.items() if needle in t]
    mapped = [h for h in hits if h in known_mods]
    unmapped = [h for h in hits if h not in known_mods and h in live_set]
    orig_helper = f"utils/babel-helpers/{helper}.js"
    extra_orig = [
        k for k in missing_orig
        if helper.lower() in k.lower() or k.endswith(f"{helper}.js")
    ]
    rec = {
        "helper": helper,
        "hits": hits,
        "mapped": mapped,
        "unmapped": unmapped,
        "orig_helper_known": orig_helper in known_keys,
        "extra_unmapped_orig": extra_orig,
    }
    two_hit_extra.append(rec)
    print(f"  {helper} hits={hits} extra_orig={extra_orig}", flush=True)
    if orig_helper in known_keys and len(unmapped) == 1 and extra_orig:
        # only pin if exactly one extra orig path exists
        if len(extra_orig) == 1:
            consider(extra_orig[0], unmapped[0], "2hit_extra_path", helper)

# 2-hit orig business copies among rest
two_hit_business = []
kse_only = []
for name in rest:
    t = unpacked_text[name]
    tkeys = [k for k in T_PAT.findall(t) if is_i18n_key(k)]
    unique_t = [k for k in tkeys if leftover_only(t_index.get(k, [])) == [name]]
    orig_unmapped = []
    orig_known = []
    for k in unique_t:
        ou = unmapped_only(orig_t.get(k, []))
        ok = [f for f in orig_t.get(k, []) if is_known(f)]
        orig_unmapped.extend(ou)
        orig_known.extend(ok)
    orig_unmapped = list(dict.fromkeys(orig_unmapped))
    orig_known = list(dict.fromkeys(orig_known))
    if unique_t and not orig_unmapped and not orig_known:
        kse_only.append(name)
        buckets["kse_only_unique_t_0_orig"].append(name)
        continue
    if unique_t and not orig_unmapped and orig_known:
        two_hit_business.append({
            "module": name,
            "orig_known": orig_known[:8],
            "unique_t": unique_t[:6],
        })
        buckets["two_hit_orig_business_no_extra_path"].append(name)
        continue

still_unknown = [
    n for n in rest
    if n not in buckets["kse_only_unique_t_0_orig"]
    and n not in buckets["two_hit_orig_business_no_extra_path"]
    and n not in buckets["kube_design_leftover_copies"]
]
for name in still_unknown:
    buckets["truly_unknown"].append(name)

# confirmed npm already in node_modules among remaining
for rec in vendor_unique + special:
    n = rec["module"]
    if n in live_leftover or n in live_set:
        if n not in buckets["confirmed_npm_in_node_modules"]:
            buckets["confirmed_npm_in_node_modules"].append(n)

# drop confirmed npm from truly_unknown
buckets["truly_unknown"] = [
    n for n in buckets["truly_unknown"] if n not in buckets["confirmed_npm_in_node_modules"]
]
buckets["react_is_family"] = [
    n for n in buckets["react_is_family"] if n not in buckets["confirmed_npm_in_node_modules"]
]

print("\n=== leftover bucket counts ===", flush=True)
counts = {k: len(v) for k, v in buckets.items() if v}
print(json.dumps(counts, indent=2), flush=True)

report = {
    "fetched_scripts": fetched,
    "chunk_errors": chunk_errors,
    "html_scripts": html_scripts,
    "factory_unpacked_including_stubs": len(webpack_ids),
    "stub_factories": stubs,
    "factory_leftover": len(leftovers),
    "disk_real_unpacked": disk,
    "promoted_real": promoted,
    "named_factories": len(prefix_ids.get("named") or []),
    "prefix_factory_counts": {k: len(v) for k, v in prefix_ids.items()},
    "webpackChunk": chunk_meta,
    "bucket_counts": counts,
    "bucket_samples": {k: v[:12] for k, v in buckets.items() if v},
    "truly_unknown_ids": buckets["truly_unknown"][:80],
    "two_hit_business_sample": two_hit_business[:20],
    "kse_only_count": len(buckets["kse_only_unique_t_0_orig"]),
    "vendor_unique": vendor_unique,
    "vendor_special": special,
    "two_hit_extra": two_hit_extra,
    "unique_importer_1_1": one_one,
    "unique_grandchild": gc,
    "unique_barrel": barrel_pins,
    "family_pins": fam_pins,
    "literal_pins_parent": lit_pins,
    "strong_global": strong_no_parent,
    "orig_unique_import_pins": oi_pins,
    "orig_unique_import_zero": oi_zero,
    "multi_families": multi_families,
    "multi_family_count": len(multi_families),
    "zero_kid_sample": zero_kid_paths[:20],
    "pins": pins,
    "pin_count": len(pins),
    "reason_counts": dict(reason_counts),
    "named_imports": named_imports[:10],
    "bundle_needles": {
        "src/pages/login": app_js.count("src/pages/login") if app_js else None,
        "src/named/": app_js.count("src/named/") if app_js else None,
        "named/pages/login": app_js.count("named/pages/login") if app_js else None,
    },
}
OUT.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
(APP / "LIVE_UNPACKED.json").write_text(json.dumps({
    "bundle": html_scripts[0] if html_scripts else (urls[0] if urls else ""),
    "leftover_live": leftovers,
    "leftover_live_count": len(leftovers),
    "stub_factories": stubs,
    "factory_unpacked_including_stubs": len(webpack_ids),
    "webpackChunk": chunk_meta,
}, indent=2) + "\n", encoding="utf-8")
print(json.dumps({
    "factory_leftover": len(leftovers),
    "webpackChunk_unpacked": chunk_meta.get("unpackedUnique"),
    "named_factories": len(prefix_ids.get("named") or []),
    "pins": len(pins),
    "vendor_special": special,
    "vendor_unique": len(vendor_unique),
    "bucket_counts": counts,
    "unique_importer_1_1": one_one,
    "unique_grandchild": gc,
    "unique_barrel": barrel_pins,
    "family_pins": fam_pins,
    "literal_pins_parent": lit_pins,
    "strong_global": strong_no_parent,
    "orig_unique_import_zero": oi_zero,
    "multi_family_count": len(multi_families),
}, indent=2), flush=True)
print("wrote", OUT, flush=True)
