from pathlib import Path

p = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/phase4-build")
for f in sorted(p.glob("*.js")):
    t = f.read_text(errors="replace")
    hits = []
    if "ks-project-select" in t:
        hits.append("chunkname")
    if "SEARCH_BY_NAME" in t:
        hits.append("SEARCH")
    if "titleWrapper" in t or "_1NfEC1exUIceM5clopym0J" in t:
        hits.append("selectorStyle")
    if "VERSION_EXISTS" in t:
        hits.append("gray")
    if hits:
        print(f.name, f.stat().st_size, hits)
