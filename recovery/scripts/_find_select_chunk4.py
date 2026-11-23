from pathlib import Path
p = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/phase4-build")
files = sorted(p.glob("*.js"))
print("js_count", len(files))
print("named", [x.name for x in files if "project-select" in x.name or "ks-project" in x.name])
for f in files:
    t = f.read_text(encoding="utf-8", errors="ignore")
    hits = []
    for k in ("KS_SELECTOR_TITLE_MARKER", "SEARCH_BY_NAME", "VERSION_EXISTS", "webpack_require.e", "__webpack_require__.e"):
        if k in t:
            hits.append(k)
    if hits:
        print(f"{f.name}\t{f.stat().st_size}\t{','.join(hits)}")
