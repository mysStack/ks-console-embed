#!/usr/bin/env python3
"""Move leftover live unpacked modules into src/chunks/<manifest-chunk>/ (REPORT.md next step)."""
import json
import re
import shutil
from pathlib import Path

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery")
APP = ROOT / "react-app"
UNPACKED = APP / "src" / "unpacked"
CHUNKS = APP / "src" / "chunks"
PROV = json.loads((ROOT / "unpacked" / "provenance.json").read_text())
MANIFEST = json.loads(
    Path("/home/bruce/code/ks-develop/console/dist/v3dist/manifest.json").read_text()
)
LIVE = json.loads((APP / "LIVE_UNPACKED.json").read_text())
WEBPACK = (APP / "webpack.config.js").read_text()

hash_to_name = {}
for key, val in MANIFEST.items():
    if isinstance(val, str) and val.endswith(".js") and key.endswith(".js"):
        hash_to_name[val] = key[:-3] if key.endswith(".js") else key
# main entry
hash_to_name["main.558f452048e49db23323.js"] = "main"

aliased = set(int(x) for x in re.findall(r"src/unpacked/module-(\d+)\.js", WEBPACK))

STUB_RE = re.compile(
    r'export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
REL_IMPORT = re.compile(r"""from (['"])\./module-(\d+)\.js\1""")
REL_SIDE = re.compile(r"""import (['"])\./module-(\d+)\.js\1""")
REL_REQ = re.compile(r"""require\((['"])\./module-(\d+)\.js\1\)""")


def is_stub(text: str) -> bool:
    head = text[:400]
    return bool(STUB_RE.search(head)) or "export { default } from \"dmp/" in head


def rewrite_relatives(text: str) -> str:
    text = REL_IMPORT.sub(r'from "unpacked/module-\2.js"', text)
    text = REL_SIDE.sub(r'import "unpacked/module-\2.js"', text)
    text = REL_REQ.sub(r'require("unpacked/module-\2.js")', text)
    return text


moved = []
skipped_stub = 0
skipped_alias = 0
skipped_missing = 0
by_chunk = {}

for name in LIVE.get("leftover_live", []):
    m = re.match(r"module-(\d+)\.js$", name)
    if not m:
        continue
    mid = int(m.group(1))
    src = UNPACKED / name
    if not src.is_file():
        skipped_missing += 1
        continue
    text = src.read_text(encoding="utf-8")
    if is_stub(text):
        skipped_stub += 1
        continue
    if mid in aliased:
        skipped_alias += 1
        continue
    rec = PROV.get("modules", {}).get(name)
    if not rec:
        chunk = "unknown"
    else:
        chunk_file = Path(rec["input"]).name
        chunk = hash_to_name.get(chunk_file, Path(chunk_file).stem.split(".")[0])
    dest_dir = CHUNKS / chunk
    dest_dir.mkdir(parents=True, exist_ok=True)
    dest = dest_dir / name
    dest.write_text(rewrite_relatives(text), encoding="utf-8")
    stub = (
        f'export {{ default }} from "chunks/{chunk}/{name[:-3]}";\n'
        f'export * from "chunks/{chunk}/{name[:-3]}";\n'
    )
    src.write_text(stub, encoding="utf-8")
    moved.append({"module": name, "chunk": chunk})
    by_chunk[chunk] = by_chunk.get(chunk, 0) + 1

out = {
    "moved": len(moved),
    "skipped_stub": skipped_stub,
    "skipped_alias": skipped_alias,
    "skipped_missing": skipped_missing,
    "by_chunk": dict(sorted(by_chunk.items(), key=lambda kv: (-kv[1], kv[0]))),
}
(APP / "CHUNK_ORGANIZE.json").write_text(json.dumps(out, indent=2) + "\n")
print(json.dumps(out, indent=2))
