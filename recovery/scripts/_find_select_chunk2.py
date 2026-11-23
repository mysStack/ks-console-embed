from pathlib import Path

p = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/phase4-build")
for f in sorted(p.glob("*.js")):
    t = f.read_text(errors="replace")
    hits = []
    if "getProjectNavs" in t:
        hits.append("layout")
    if "ks-project-select" in t:
        hits.append("chunkname")
    if "VERSION_EXISTS" in t:
        hits.append("gray")
    if "strategy-group" in t and "titleWrapper" in t:
        hits.append("selectorSrc")
    if hits:
        print(f.name, f.stat().st_size, hits)
