#!/usr/bin/env python3
"""Walk static import graph from bootstrap.js. Does not rename or touch 8099."""
from collections import defaultdict, deque
from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
SRC = APP / "src"
ENTRY = SRC / "bootstrap.js"
IMP_PATTERNS = [
    re.compile(r"""import\s+['"]([^'"]+)['"]"""),
    re.compile(r"""from\s+['"]([^'"]+)['"]"""),
    re.compile(r"""require\(\s*['"]([^'"]+)['"]"""),
    re.compile(r"""import\(\s*['"]([^'"]+)['"]"""),
]
ALIASES = {
    "pages": SRC / "pages",
    "components": SRC / "components",
    "stores": SRC / "stores",
    "actions": SRC / "actions",
    "utils": SRC / "utils",
    "configs": SRC / "configs",
    "core": SRC / "core",
    "dmp": SRC / "dmp",
    "chunks": SRC / "chunks",
    "unpacked": SRC / "unpacked",
}
EXTS = (".js", ".jsx", ".json")


def resolve_spec(spec: str, parent: Path):
    if spec.startswith("."):
        base = (parent.parent / spec).resolve()
    else:
        matched = None
        for prefix, root in ALIASES.items():
            if spec == prefix or spec.startswith(prefix + "/"):
                rest = spec[len(prefix) :].lstrip("/")
                base = (root / rest).resolve() if rest else root.resolve()
                matched = True
                break
        if not matched:
            return None, "external_or_npm"
    candidates = []
    if base.suffix in EXTS and base.exists():
        return base, "ok"
    for ext in EXTS:
        p = Path(str(base) + ext)
        if p.exists():
            return p, "ok"
        candidates.append(p)
    if base.is_dir():
        for name in ("index.js", "index.jsx", "index.json"):
            p = base / name
            if p.exists():
                return p, "ok"
    return base, "missing"


def main():
    seen = {}
    missing = []
    edges = []
    q = deque([ENTRY.resolve()])
    seen[str(ENTRY.resolve())] = "entry"
    while q:
        cur = q.popleft()
        try:
            text = cur.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        specs = []
        for pat in IMP_PATTERNS:
            specs.extend(pat.findall(text))
        for spec in specs:
            resolved, status = resolve_spec(spec, cur)
            rel_cur = str(cur.relative_to(SRC)).replace("\\", "/")
            if status == "external_or_npm":
                edges.append({"from": rel_cur, "spec": spec, "status": status})
                continue
            rel_to = (
                str(resolved.relative_to(SRC)).replace("\\", "/")
                if resolved and SRC in resolved.parents or resolved == SRC
                else str(resolved)
            )
            try:
                rel_to = str(resolved.relative_to(SRC)).replace("\\", "/")
            except ValueError:
                rel_to = str(resolved)
            edges.append({"from": rel_cur, "spec": spec, "to": rel_to, "status": status})
            if status == "missing":
                missing.append({"from": rel_cur, "spec": spec, "resolved": str(resolved)})
                continue
            key = str(resolved)
            if key not in seen:
                seen[key] = "reachable"
                if resolved.suffix in {".js", ".jsx"}:
                    q.append(resolved)
    files = []
    for k in seen:
        p = Path(k)
        try:
            files.append(str(p.relative_to(SRC)).replace("\\", "/"))
        except ValueError:
            continue
    files = sorted(files)
    counts = defaultdict(int)
    dest_n = stub_n = leftover_n = other_n = 0
    stub_re = re.compile(
        r'export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp|chunks)/'
    )
    dest_prefixes = ("pages/", "core/", "components/", "stores/", "actions/", "utils/", "configs/", "dmp/")
    for f in files:
        top = f.split("/")[0]
        counts[top] += 1
        if f.startswith(dest_prefixes) or f.startswith("chunks/"):
            dest_n += 1
        elif f.startswith("unpacked/module-"):
            p = SRC / f
            try:
                head = p.read_text(encoding="utf-8", errors="ignore")[:400]
            except OSError:
                head = ""
            if stub_re.search(head):
                stub_n += 1
            else:
                leftover_n += 1
        else:
            other_n += 1
    ext_specs = sorted({e["spec"] for e in edges if e.get("status") == "external_or_npm"})
    out = {
        "webpack_entry": "src/bootstrap.js",
        "react_mount": {
            "file": "src/unpacked/entry.js",
            "api": "module106.render(... , document.getElementById('root'))",
            "app": "core/App via unpacked/module-759.js stub -> core/App",
            "react": "unpacked/module-553.js (webpack alias -> npm react)",
            "react_dom": "unpacked/module-106.js (webpack alias -> npm react-dom)",
            "root": "document.getElementById('root')",
        },
        "reachable_src_files": len(files),
        "reachable_dest": dest_n,
        "reachable_stubs": stub_n,
        "reachable_leftover": leftover_n,
        "reachable_other": other_n,
        "by_top": dict(counts),
        "missing_count": len(missing),
        "missing": missing[:200],
        "external_or_npm_unique": len(ext_specs),
        "external_or_npm_sample": ext_specs[:80],
        "files": files,
    }
    dest = ROOT / "recovery/PHASE4-GRAPH.json"
    dest.write_text(json.dumps(out, indent=2) + "\n", encoding="utf-8")
    print(
        json.dumps(
            {
                "reachable": len(files),
                "missing": len(missing),
                "by_top": dict(counts),
            }
        )
    )
    for m in missing[:30]:
        print("MISSING", m["from"], "->", m["spec"])


if __name__ == "__main__":
    main()
