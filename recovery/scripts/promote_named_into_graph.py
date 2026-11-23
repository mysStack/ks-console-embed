#!/usr/bin/env python3
"""Copy uniquely mapped unpacked modules to readable src/ paths and rewrite imports."""
from __future__ import annotations

from collections import defaultdict
from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery")
APP = ROOT / "react-app"
SRC = APP / "src"
UNPACKED = SRC / "unpacked"
KNOWN_PY = ROOT / "scripts" / "add_known_named.py"
WEBPACK = APP / "webpack.config.js"
RECHARTS = APP / "recharts-aliases.js"
COREJS = APP / "corejs-aliases.js"

SPEC = re.compile(r"""(['"])(?:unpacked/|\./)module-(\d+)\.js\1""")


def load_known():
    text = KNOWN_PY.read_text(encoding="utf-8")
    return re.findall(r'"([^"]+)": "(module-\d+\.js)"', text)


def vendor_ids():
    ids = set()
    for path in (WEBPACK, RECHARTS, COREJS):
        if path.exists():
            ids.update(re.findall(r"module-(\d+)\.js", path.read_text(encoding="utf-8")))
    ids.update(str(i) for i in range(5720, 5729))
    return ids


def score(path: str) -> tuple:
    return (
        1 if "/containers/" in path else 0,
        path.count("/"),
        1 if path.startswith("pages/") else 0,
        len(path),
        path,
    )


def canonical_map(pairs):
    by_mod = defaultdict(list)
    for path, mod in pairs:
        if path not in by_mod[mod]:
            by_mod[mod].append(path)
    canon = {}
    extras = defaultdict(list)
    for mod, paths in by_mod.items():
        chosen = sorted(paths, key=score, reverse=True)[0]
        canon[mod] = chosen
        for p in paths:
            if p != chosen:
                extras[mod].append(p)
    return canon, extras


def specifier(rel_js: str) -> str:
    return rel_js[:-3] if rel_js.endswith(".js") else rel_js


def rewrite(text: str, canon: dict, vendor: set[str]) -> str:
    def repl(m):
        q, num = m.group(1), m.group(2)
        filename = f"module-{num}.js"
        if num in vendor:
            return f"{q}unpacked/{filename}{q}"
        if filename in canon:
            return f"{q}{specifier(canon[filename])}{q}"
        return f"{q}unpacked/{filename}{q}"

    return SPEC.sub(repl, text)


def main():
    pairs = load_known()
    vendor = vendor_ids()
    canon, extras = canonical_map(pairs)
    skipped_vendor = [m for m in canon if re.search(r"\d+", m).group() in vendor]
    for m in skipped_vendor:
        canon.pop(m, None)
        extras.pop(m, None)

    promoted = 0
    alias_files = 0
    for mod, rel in canon.items():
        src = UNPACKED / mod
        if not src.exists():
            print("missing", mod)
            continue
        text = src.read_text(encoding="utf-8")
        if text.startswith("export { default } from ") and "unpacked/module-" not in text[:80]:
            # already a stub from a previous run; do not clobber dest
            dest = SRC / rel
            if dest.exists():
                dest.write_text(rewrite(dest.read_text(encoding="utf-8"), canon, vendor), encoding="utf-8")
                promoted += 1
                continue
        dest = SRC / rel
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(rewrite(text, canon, vendor), encoding="utf-8")
        promoted += 1

    for mod, paths in extras.items():
        spec = specifier(canon[mod])
        body = f'export {{ default }} from "{spec}";\nexport * from "{spec}";\n'
        for rel in paths:
            dest = SRC / rel
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_text(body, encoding="utf-8")
            alias_files += 1

    rewritten = 0
    prefixes = ("pages", "components", "stores", "actions", "utils", "configs", "core", "dmp")
    for folder in prefixes:
        d = SRC / folder
        if not d.is_dir():
            continue
        for path in d.rglob("*.js"):
            text = path.read_text(encoding="utf-8")
            if text.startswith("export { default } from "):
                continue
            new = rewrite(text, canon, vendor)
            if new != text:
                path.write_text(new, encoding="utf-8")
                rewritten += 1

    for path in UNPACKED.glob("module-*.js"):
        text = path.read_text(encoding="utf-8")
        if path.name in canon:
            spec = specifier(canon[path.name])
            path.write_text(
                f'export {{ default }} from "{spec}";\nexport * from "{spec}";\n',
                encoding="utf-8",
            )
            rewritten += 1
            continue
        new = rewrite(text, canon, vendor)
        if new != text:
            path.write_text(new, encoding="utf-8")
            rewritten += 1

    entry = UNPACKED / "entry.js"
    if entry.exists():
        text = entry.read_text(encoding="utf-8")
        new = rewrite(text, canon, vendor)
        if new != text:
            entry.write_text(new, encoding="utf-8")
            rewritten += 1

    report = {
        "known_keys": len(pairs),
        "promoted": promoted,
        "alias_files": alias_files,
        "unpacked_rewritten_or_stubbed": rewritten,
        "skipped_vendor": skipped_vendor,
        "canonical_count": len(canon),
    }
    (APP / "PROMOTED.json").write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(report))


if __name__ == "__main__":
    main()
