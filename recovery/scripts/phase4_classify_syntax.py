#!/usr/bin/env python3
"""Classify recovered JS: ESM / CJS / webpack runtime. Read-only."""
from collections import Counter, defaultdict
from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "recovery/react-app/src"
DEST_PREFIXES = ("pages", "core", "components", "stores", "actions", "utils", "configs", "dmp")
STUB_RE = re.compile(
    r'export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp|chunks)/'
)
WX_MARKERS = (
    "__webpack_require__",
    "require.d(",
    "require.r(",
    "require.n(",
    "require.t(",
    "require.o(",
    "__webpack_exports__",
    "__webpack_module_cache__",
    "webpackJsonp",
)
ESM_RE = re.compile(r"^\s*(import\s|export\s)", re.M)
CJS_RE = re.compile(r"\bmodule\.exports\b|\bexports\.\w+\s*=|\bexports\[")
REQUIRE_NUM = re.compile(r"""require\(\s*['"]?\d+['"]?\s*\)""")
REQUIRE_REL = re.compile(r"""require\(\s*['"][^'"]+['"]\s*\)""")


def kind(text: str) -> dict:
    wx = [m for m in WX_MARKERS if m in text]
    esm = bool(ESM_RE.search(text))
    cjs = bool(CJS_RE.search(text))
    req_num = len(REQUIRE_NUM.findall(text))
    req_rel = len(REQUIRE_REL.findall(text))
    if wx:
        bucket = "webpack_runtime"
    elif esm and cjs:
        bucket = "mixed_esm_cjs"
    elif esm:
        bucket = "esm"
    elif cjs:
        bucket = "cjs"
    else:
        bucket = "other"
    return {
        "bucket": bucket,
        "webpack_markers": wx,
        "esm": esm,
        "cjs": cjs,
        "require_numeric": req_num,
        "require_string": req_rel,
        "bytes": len(text.encode("utf-8", errors="ignore")),
    }


def walk_dest():
    files = []
    for prefix in DEST_PREFIXES:
        d = SRC / prefix
        if not d.exists():
            continue
        files.extend(p for p in d.rglob("*.js") if p.is_file())
    return files


def walk_unpacked():
    d = SRC / "unpacked"
    live, stubs = [], []
    for p in d.glob("module-*.js"):
        text = p.read_text(encoding="utf-8", errors="ignore")
        if STUB_RE.search(text):
            stubs.append((p, text))
        else:
            live.append((p, text))
    return live, stubs


def tally(items):
    buckets = Counter()
    wx_any = 0
    req_num_files = 0
    mixed = 0
    samples = defaultdict(list)
    for path, info in items:
        buckets[info["bucket"]] += 1
        if info["webpack_markers"]:
            wx_any += 1
        if info["require_numeric"]:
            req_num_files += 1
        if info["esm"] and info["cjs"]:
            mixed += 1
        if len(samples[info["bucket"]]) < 5:
            samples[info["bucket"]].append(
                {
                    "file": str(path.relative_to(SRC)).replace("\\", "/"),
                    "markers": info["webpack_markers"],
                    "require_numeric": info["require_numeric"],
                    "require_string": info["require_string"],
                    "esm": info["esm"],
                    "cjs": info["cjs"],
                }
            )
    return {
        "total": len(items),
        "buckets": dict(buckets),
        "webpack_runtime_files": wx_any,
        "numeric_require_files": req_num_files,
        "mixed_esm_cjs": mixed,
        "samples": dict(samples),
    }


def main():
    dest_items = []
    for p in walk_dest():
        text = p.read_text(encoding="utf-8", errors="ignore")
        dest_items.append((p, kind(text)))
    live, stubs = walk_unpacked()
    live_items = [(p, kind(t)) for p, t in live]
    stub_items = [(p, kind(t)) for p, t in stubs]
    out = {
        "dest_readable_js": tally(dest_items),
        "unpacked_live_leftover": tally(live_items),
        "unpacked_stubs": tally(stub_items),
        "note": (
            "dest = uniquely-named business JS under pages/core/components/stores/"
            "actions/utils/configs/dmp. leftover = still module-N.js. "
            "stubs re-export dest paths."
        ),
    }
    dest_path = ROOT / "recovery/PHASE4-SYNTAX.json"
    dest_path.write_text(json.dumps(out, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({k: v["buckets"] | {"total": v["total"]} for k, v in out.items() if k != "note"}, indent=2))


if __name__ == "__main__":
    main()
