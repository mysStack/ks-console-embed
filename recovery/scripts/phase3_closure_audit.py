#!/usr/bin/env python3
"""Phase 3 closure audit. Read-only. Does not rename, delete, or touch 8099."""
from collections import Counter, defaultdict
from pathlib import Path
import hashlib
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
SRC = APP / "src"
UNPACKED = SRC / "unpacked"
ORIG = ROOT / "src"
OUT = ROOT / "recovery"
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
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp|chunks)/'
)
STUB_DEST_RE = re.compile(
    r'^export \{ default \} from "((?:pages|components|stores|actions|utils|configs|core|dmp|chunks)/[^"]+)"'
)
MOD_REF = re.compile(r"module-(\d+)\.js")
T_PAT = re.compile(r"""(?<![A-Za-z0-9_])t\(\s*['"]([^'"]{8,})['"]""")
ALIAS_MOD = re.compile(r"src/unpacked/module-(\d+)\.js")
CSS_HASH_RE = re.compile(r'"[A-Za-z0-9_-]{8,}"\s*:')
SKIP_FRAGS = (
    "WHIZARD",
    "ProjectSelect",
    "GrafanaTargetInput",
    "RuleList",
    "RuleForm",
    "InstanceList",
    "ContainerLog",
    "EditGroup",
    "ImageBuilder",
    "PromQLInput",
    "MetircQueryInput",
    "ContianerTerminal",
    "Initializing",
    "KubeTools",
    "Cards/Banner",
    "Cascader",
    "EditBasicInfo",
    "KubernetesStatus",
    "StatusReason",
    "TextPreview",
    "ServiceAccess",
    "ServiceComponents",
    "PhysicalResource",
    "RankTable",
    "CustomToolTip",
    "AceEditor",
    "LimitRange",
    "EmptyList",
    "Cards/Info",
    "Cards/Pods",
    "DiffYaml",
    "LoginConfirm",
    ".test.",
)
SKIP_MODS = {
    "793",
    "805",
    "851",
    "1489",
    "2102",
    "1639",
    "2218",
    "3839",
    "1272",
    "1867",
    "1798",
    "1800",
    "1134",
    "1415",
    "5770",
    "1861",
    "1837",
    "1410",
    "3326",
    "3680",
    "3689",
    "3693",
    "3698",
    "3701",
    "4153",
    "4154",
    "4219",
    "4227",
    "4139",
    "4144",
    "4330",
    "4103",
    "4080",
    "4107",
    "4105",
    "1847",
    "747",
}
KNOWN_0HIT_NEEDLES = (
    "DEVOPS_BASEINFO_DESC",
    "PARMMETER_TYPES",
    "ENVIRONMENT_REFERENCE",
    "kubeconfig.yaml",
    "MODIFY_MEMBER_ROLE",
    "CHANGE_PASSWORD_LATER",
    "__POWERED_BY_WUJIE__",
    "HOW_TO_INVITE_USERS",
    "need_rebuild_",
)
STATUSES = (
    "pinned-readable",
    "stub-linked",
    "vendor",
    "css-empty",
    "babel-helper",
    "duplicate",
    "skip",
    "test",
    "business-leftover",
    "unnameable",
)


def sha256_bytes(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def aliases(key: str):
    out = {key}
    if key.endswith("/index.js"):
        out.add(key[: -len("/index.js")] + ".js")
        out.add(key[: -len("/index.js")])
    elif key.endswith(".js"):
        out.add(key[:-3] + "/index.js")
        out.add(key[:-3])
    return out


def load_vendor_alias_ids():
    ids = set()
    for name in (
        "webpack.config.js",
        "corejs-aliases.js",
        "corejs-shim-aliases.js",
        "recharts-aliases.js",
    ):
        p = APP / name
        if not p.exists():
            continue
        text = p.read_text(encoding="utf-8", errors="ignore")
        ids.update(ALIAS_MOD.findall(text))
    return ids


def is_stub(text: str) -> bool:
    head = text.lstrip()[:400]
    return bool(STUB_RE.match(head)) or head.startswith('export { default } from "chunks/')


def stub_dest(text: str):
    m = STUB_DEST_RE.search(text[:400])
    return m.group(1) if m else None


def type_candidate(mid: str, text: str, vendor_ids: set) -> str:
    if mid in SKIP_MODS:
        return "skip"
    if mid in vendor_ids:
        return "vendor"
    stripped = text.lstrip()
    if stripped.startswith("export default {") and len(text) < 800:
        if CSS_HASH_RE.search(text) or stripped.count(":") >= 1:
            return "css-empty"
    if stripped.startswith("export default {}"):
        return "css-empty"
    babel_needles = (
        "Cannot call a class as a function",
        "this hasn't been initialised",
        "super() hasn't been called",
        "Possible constructor return",
        "_classCallCheck",
        "babelHelpers",
    )
    if any(n in text for n in babel_needles):
        return "babel-helper"
    if "Incorrect invocation" in text or "Accessors not supported" in text:
        return "vendor"
    if "core-js" in text[:500] or "__core-js_shared__" in text:
        return "vendor"
    if "LoDash" in text or "lodash.custom" in text[:400]:
        return "vendor"
    business = (
        "createElement" in text
        or "React.createElement" in text
        or bool(T_PAT.search(text))
        or "/kapis/" in text
        or "module.exports" not in text[:80] and "<" in text and "className" in text
    )
    if business:
        return "business-leftover"
    return "unnameable"


def extra_path_dest(orig_key: str, dest_keys: set, dest_basenames: dict):
    for a in aliases(orig_key):
        if a in dest_keys:
            return a, "same-suffix"
    parts = orig_key.split("/")
    if len(parts) >= 3 and parts[0] == "pages":
        scope = parts[1]
        leaf = Path(orig_key).stem
        if leaf == "index" and len(parts) >= 2:
            leaf = parts[-2]
        cand = f"pages/{scope}/{leaf.lower()}.js"
        if cand in dest_keys:
            return cand, "shortened-pages-scope"
        cand2 = f"pages/{scope}/{leaf}.js"
        if cand2 in dest_keys:
            return cand2, "shortened-pages-scope"
    if orig_key.startswith("core/containers/Login/"):
        if "pages/login.js" in dest_keys:
            return "pages/login.js", "login-alias"
    if orig_key.startswith("core/containers/LoginConfirm"):
        if "pages/login/confirm.js" in dest_keys:
            return "pages/login/confirm.js", "login-alias"
    base = Path(orig_key).name
    hits = dest_basenames.get(base, [])
    if len(hits) == 1:
        return hits[0], "unique-basename"
    return None, None


def unique_t_hits(orig_text: str, leftover_t: dict):
    keys = [k for k in T_PAT.findall(orig_text) if k in leftover_t]
    unique = [(k, leftover_t[k]) for k in keys if len(leftover_t[k]) == 1]
    return unique


def main():
    vendor_ids = load_vendor_alias_ids()
    unpacked_files = sorted(UNPACKED.glob("module-*.js"), key=lambda p: int(p.stem.split("-")[1]))
    records = []
    live_records = []
    stub_records = []
    hashes = {}
    leftover_t = defaultdict(list)
    importers = defaultdict(int)
    dest_keys = set()
    dest_basenames = defaultdict(list)
    promoted_files = []
    for prefix in PREFIXES:
        root = SRC / prefix
        if not root.is_dir():
            continue
        for p in root.rglob("*.js"):
            if not p.is_file():
                continue
            key = f"{prefix}/{p.relative_to(root).as_posix()}"
            dest_keys.add(key)
            dest_keys.update(aliases(key))
            dest_basenames[p.name].append(key)
            promoted_files.append(key)

    all_js = list(SRC.rglob("*.js"))
    for p in all_js:
        if "named/" in p.as_posix().replace("\\", "/"):
            continue
        try:
            text = p.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        for mid in set(MOD_REF.findall(text)):
            importers[mid] += 1

    for p in unpacked_files:
        data = p.read_bytes()
        text = data.decode("utf-8", errors="ignore")
        mid = p.stem.split("-")[1]
        digest = sha256_bytes(data)
        hashes[mid] = digest
        dest = stub_dest(text) if is_stub(text) else None
        rec = {
            "module_id": mid,
            "path": f"recovery/react-app/src/unpacked/{p.name}",
            "sha256": digest,
            "size": len(data),
            "stub": is_stub(text),
            "destination": dest,
            "has_readable_path": bool(dest),
            "importer_count": importers.get(mid, 0),
            "vendor_aliased": mid in vendor_ids,
        }
        if rec["stub"]:
            rec["primary_status"] = "stub-linked"
            rec["path_evidence"] = f"stub->{dest}"
            stub_records.append(rec)
        else:
            rec["type_candidate"] = type_candidate(mid, text, vendor_ids)
            rec["path_evidence"] = None
            live_records.append(rec)
            for tkey in T_PAT.findall(text):
                leftover_t[tkey].append(mid)
        records.append(rec)

    by_hash = defaultdict(list)
    for rec in live_records:
        by_hash[rec["sha256"]].append(rec["module_id"])
    dup_groups = []
    for digest, ids in by_hash.items():
        if len(ids) < 2:
            continue
        ids_sorted = sorted(ids, key=int)
        dup_groups.append(
            {
                "sha256": digest,
                "canonical": ids_sorted[0],
                "duplicates": ids_sorted[1:],
                "count": len(ids_sorted),
            }
        )
        canon = ids_sorted[0]
        for rec in live_records:
            if rec["module_id"] not in ids:
                continue
            rec["duplicate_group"] = digest
            rec["canonical_module"] = canon
            if rec["module_id"] != canon:
                rec["tags"] = [rec.get("type_candidate")]
                rec["primary_status"] = "duplicate"
            else:
                rec["primary_status"] = rec["type_candidate"]
    for rec in live_records:
        if "primary_status" not in rec:
            rec["primary_status"] = rec["type_candidate"]
        rec.pop("type_candidate", None)
        rec.pop("stub", None)

    orig306 = []
    orig306_counts = Counter()
    promoted_set = dest_keys
    for p in ORIG.rglob("*"):
        if p.suffix not in {".js", ".jsx"}:
            continue
        key = re.sub(r"\.jsx$", ".js", p.relative_to(ORIG).as_posix())
        if any(a in promoted_set for a in aliases(key)):
            continue
        if any(s in key for s in SKIP_FRAGS):
            continue
        orig_text = p.read_text(encoding="utf-8", errors="ignore")
        dest, kind = extra_path_dest(key, dest_keys, dest_basenames)
        unique = unique_t_hits(orig_text, leftover_t)
        zero = [n for n in KNOWN_0HIT_NEEDLES if n in orig_text]
        leftover_zero = True
        needles = T_PAT.findall(orig_text)
        leftover_hits = [n for n in needles if leftover_t.get(n)]
        if leftover_hits:
            leftover_zero = False
        if dest:
            status = "extra-path-covered"
            reason = f"{kind}:{dest}"
        elif leftover_zero and not unique:
            status = "0-hit"
            reason = "no leftover unique t() >=8"
        elif unique:
            status = "unique-evidence-unpinned"
            reason = f"unique leftover t {unique[0][0]} -> module-{unique[0][1][0]}"
        else:
            status = "unnameable-orig"
            reason = "shared t or no 1:1 leftover body"
        orig306.append(
            {
                "orig": key,
                "status": status,
                "reason": reason,
                "extra_path_dest": dest,
                "unique_t": unique[:5],
                "known_0hit_needles": zero,
            }
        )
        orig306_counts[status] += 1

    live_status = Counter(r["primary_status"] for r in live_records)
    stub_status = Counter(r["primary_status"] for r in stub_records)
    unnameable = [r for r in live_records if r["primary_status"] == "unnameable"]
    business = [r for r in live_records if r["primary_status"] == "business-leftover"]

    summary = {
        "counts": {
            "unpacked_module_files": len(unpacked_files),
            "live_leftover": len(live_records),
            "stub_linked": len(stub_records),
            "promoted_readable_js": len(promoted_files),
            "orig_unpromoted_not_skip_notest": len(orig306),
            "vendor_alias_ids": len(vendor_ids),
            "duplicate_groups": len(dup_groups),
            "live_by_status": dict(live_status),
            "stub_by_status": dict(stub_status),
            "orig306_by_status": dict(orig306_counts),
        },
        "intersection_note": (
            "live_leftover, stub_linked, promoted_readable_js, orig_unpromoted "
            "are four different sets. Do not add them. "
            "stub_linked files live in unpacked/ and re-export dest files already counted in promoted_readable_js. "
            "orig_unpromoted is orig git paths without same-suffix dest, not leftover module-N.js."
        ),
        "unique_importer_conclusion": (
            "Current unique t()/importer 1:1 yield is exhausted for remaining live leftovers. "
            "New pins require extra-path unique body evidence only; this audit did not create pins."
        ),
        "8099": "not modified",
        "git": "no commit/push",
    }

    manifest = {
        "summary": summary,
        "duplicate_groups": dup_groups,
        "live_modules": live_records,
        "stub_modules": stub_records,
    }
    (OUT / "module-manifest.json").write_text(
        json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8"
    )
    (OUT / "unnameable-modules.json").write_text(
        json.dumps(
            {
                "count": len(unnameable),
                "definition": "live leftover whose primary_status is unnameable after vendor/css/babel/skip/duplicate/business rules",
                "modules": unnameable,
            },
            indent=2,
            ensure_ascii=False,
        )
        + "\n",
        encoding="utf-8",
    )
    (OUT / "ORIG306_AUDIT.json").write_text(
        json.dumps(
            {"count": len(orig306), "by_status": dict(orig306_counts), "items": orig306},
            indent=2,
            ensure_ascii=False,
        )
        + "\n",
        encoding="utf-8",
    )
    (OUT / "PHASE3-AUDIT-SUMMARY.json").write_text(
        json.dumps(
            {
                **summary,
                "business_leftover_count": len(business),
                "unnameable_count": len(unnameable),
            },
            indent=2,
            ensure_ascii=False,
        )
        + "\n",
        encoding="utf-8",
    )
    print(json.dumps(summary["counts"], indent=2))


if __name__ == "__main__":
    main()
