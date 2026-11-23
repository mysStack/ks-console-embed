#!/usr/bin/env python3
"""Apply unique-importer / unique-literal pins into KNOWN and the live graph.

Does not import named/. Extra orig-path aliases only; canonical file per module ID.
"""
from __future__ import annotations

from pathlib import Path
import json
import re
import subprocess
import sys

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
KNOWN_PY = ROOT / "recovery/scripts/add_known_named.py"
PINS_JSON = APP / "UNIQUE_IMPORTER_PINS.json"
PROMOTE = ROOT / "recovery/scripts/promote_named_into_graph.py"
ADD_KNOWN = ROOT / "recovery/scripts/add_known_named.py"
OUT = APP / "UNIQUE_IMPORTER_APPLY.json"
ORIG = ROOT / "src"
SRC = APP / "src"
PREFIXES = ("pages", "components", "stores", "actions", "utils", "configs", "core", "dmp")


def main() -> None:
    doc = json.loads(PINS_JSON.read_text(encoding="utf-8"))
    pins = doc.get("pins") or []
    print("candidate_pins", len(pins))
    if not pins:
        OUT.write_text(json.dumps({"applied": [], "skipped": "no pins"}, indent=2) + "\n")
        print("no pins")
        return

    text = KNOWN_PY.read_text(encoding="utf-8")
    existing = set(re.findall(r'"([^"]+)": "(module-\d+\.js)"', text))
    existing_paths = {p for p, _m in existing}
    existing_mods = {m for _p, m in existing}

    applied = []
    skipped = []
    lines = [
        "    # unique-importer / unmapped-orig literals among leftover live",
    ]
    for pin in pins:
        path = pin["path"]
        mod = pin["module"]
        if path.split("/")[0] not in PREFIXES:
            skipped.append({**pin, "apply": "bad_prefix"})
            continue
        if "named/" in path:
            skipped.append({**pin, "apply": "named_forbidden"})
            continue
        if path in existing_paths or mod in existing_mods:
            skipped.append({**pin, "apply": "already_known"})
            continue
        stem = path[:-3] if path.endswith(".js") else path
        orig_ok = False
        for ext in (".js", ".jsx", "/index.js", "/index.jsx"):
            if (ORIG / f"{stem}{ext}").is_file():
                orig_ok = True
                break
        if not orig_ok and path.endswith("/index.js"):
            collapsed = path[: -len("/index.js")]
            for ext in (".js", ".jsx"):
                if (ORIG / f"{collapsed}{ext}").is_file():
                    orig_ok = True
                    break
        if not orig_ok:
            skipped.append({**pin, "apply": "orig_missing"})
            continue
        dest = SRC / path
        if dest.exists() and not dest.read_text(encoding="utf-8", errors="replace").startswith(
            "export { default } from "
        ):
            skipped.append({**pin, "apply": "dest_exists"})
            continue
        lines.append(f'    "{path}": "{mod}",')
        applied.append(pin)
        existing_paths.add(path)
        existing_mods.add(mod)

    print("applied", len(applied), "skipped", len(skipped))
    if not applied:
        OUT.write_text(json.dumps({"applied": [], "skipped": skipped}, indent=2) + "\n")
        return

    marker = "\n}"
    # insert before the KNOWN closing brace that precedes `for name, filename`
    idx = text.rfind("\n}\n\nfor name, filename in KNOWN.items():")
    if idx < 0:
        raise SystemExit("cannot find KNOWN closing brace")
    insert = "\n" + "\n".join(lines) + "\n"
    # previous last entry already has a trailing comma
    new = text[:idx] + insert + text[idx:]
    KNOWN_PY.write_text(new, encoding="utf-8")
    print("updated", KNOWN_PY)

    subprocess.check_call([sys.executable, str(ADD_KNOWN)])
    subprocess.check_call([sys.executable, str(PROMOTE)])
    OUT.write_text(
        json.dumps({"applied": applied, "skipped": skipped, "count": len(applied)}, indent=2)
        + "\n",
        encoding="utf-8",
    )
    print("wrote", OUT)


if __name__ == "__main__":
    main()
