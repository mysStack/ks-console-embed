#!/usr/bin/env python3
"""Improve recovered react-app: shims, unique named modules, webpack aliases."""
from __future__ import annotations

import json
import re
import shutil
from collections import defaultdict
from pathlib import Path

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery")
APP = ROOT / "react-app"
UNPACKED = APP / "src" / "unpacked"
NAMED = APP / "src" / "named"
INDEX = json.loads((ROOT / "module-index.json").read_text())

SHIMS = {
    "module-958.js": """export default function isBuffer(value) {
  return typeof Buffer !== "undefined" && typeof Buffer.isBuffer === "function"
    ? Buffer.isBuffer(value)
    : false;
}
""",
    "module-1648.js": """export default function copyArrayBuffer(input, isDeep) {
  if (isDeep) {
    return input.slice();
  }
  if (typeof Buffer !== "undefined" && Buffer.from) {
    return Buffer.from(input);
  }
  return input.slice();
}
""",
    "module-1056.js": """const types = (typeof process !== "undefined" && process.binding)
  ? null
  : undefined;
export default types;
""",
}


def slug_route(route: str) -> str | None:
    if not route.startswith("/") or route.startswith("//"):
        return None
    if route.startswith(("/spec/", "/metadata/", "/data/", "/kapis/")):
        return None
    if route in {"/metrics", "/404"}:
        return None
    parts = [p for p in route.split("/") if p]
    if not parts:
        return None
    safe = []
    for p in parts:
        p = re.sub(r"[^A-Za-z0-9_-]", "_", p)
        if not p:
            return None
        safe.append(p)
    return "/".join(safe)


def choose_name(rec: dict) -> str | None:
    if rec.get("kind") not in {"business", "business-support"}:
        return None
    routes = rec.get("routes") or []
    stores = rec.get("stores") or []
    ranked = sorted(routes, key=lambda r: (r.count("/"), len(r)), reverse=True)
    for route in ranked:
        slug = slug_route(route)
        if slug:
            return f"pages/{slug}"
    if stores and rec.get("createElement", 0) > 0:
        name = re.sub(r"[^A-Za-z0-9_-]", "_", stores[0])
        if name:
            return f"stores/{name}"
    return None


def unique_names():
    grouped = defaultdict(list)
    for rec in INDEX["modules"]:
        name = choose_name(rec)
        if not name:
            continue
        grouped[name].append(rec["filename"])
    mapping = {}
    for name, files in grouped.items():
        if len(files) == 1:
            mapping[files[0]] = name
        else:
            for filename in files:
                mid = filename.replace("module-", "").replace(".js", "")
                mapping[filename] = f"{name}__{mid}"
    return mapping


def write_named(mapping: dict):
    if NAMED.exists():
        shutil.rmtree(NAMED)
    NAMED.mkdir(parents=True)
    written = {}
    for filename, name in mapping.items():
        dest = NAMED / f"{name}.js"
        dest.parent.mkdir(parents=True, exist_ok=True)
        rel = Path(*([".."] * (len(Path(name).parts)))) / "unpacked" / filename
        dest.write_text(
            f'export {{ default }} from "{rel.as_posix()}";\n'
            f'export * from "{rel.as_posix()}";\n'
        )
        written[filename] = f"named/{name}.js"
    (APP / "src" / "named-modules.json").write_text(
        json.dumps(written, indent=2, ensure_ascii=False)
    )
    return written


def rewrite_imports(written: dict):
    pattern = re.compile(
        r"""(['"])(\./module-\d+\.js)\1"""
    )
    changed_files = 0
    changed_refs = 0
    for path in UNPACKED.glob("*.js"):
        text = path.read_text(errors="replace")

        def repl(m):
            nonlocal changed_refs
            quote, spec = m.group(1), m.group(2)
            filename = spec[2:]
            named = written.get(filename)
            if not named:
                return m.group(0)
            changed_refs += 1
            return f"{quote}../{named}{quote}"

        new = pattern.sub(repl, text)
        if new != text:
            path.write_text(new)
            changed_files += 1
    return changed_files, changed_refs


def write_shims():
    for name, body in SHIMS.items():
        (UNPACKED / name).write_text(body)
        (ROOT / "unpacked" / name).write_text(body)


def patch_webpack():
    wp = APP / "webpack.config.js"
    text = wp.read_text()
    needle = """      [path.resolve(__dirname, "src/unpacked/module-106.js")]: require.resolve("react-dom"),"""
    extra = """      [path.resolve(__dirname, "src/unpacked/module-106.js")]: require.resolve("react-dom"),
      [path.resolve(__dirname, "src/unpacked/module-14.js")]: require.resolve("mobx"),
      [path.resolve(__dirname, "src/unpacked/module-239.js")]: require.resolve("mobx-react"),"""
    if "module-14.js" not in text:
        if needle not in text:
            raise SystemExit("webpack alias block not found")
        wp.write_text(text.replace(needle, extra, 1))


def main():
    write_shims()
    mapping = unique_names()
    written = write_named(mapping)
    files, refs = rewrite_imports(written)
    patch_webpack()
    summary = {
        "namedModules": len(written),
        "rewrittenFiles": files,
        "rewrittenImports": refs,
        "shims": list(SHIMS),
        "aliasesAdded": ["mobx=module-14", "mobx-react=module-239"],
    }
    (APP / "continue-summary.json").write_text(json.dumps(summary, indent=2))
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()
