from pathlib import Path
p = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/phase4-build")
keys = [
    "KS_SELECTOR_TITLE_MARKER",
    "getProjectNavs",
    "VERSION_EXISTS",
    "NEW_VERSION_SETTINGS",
    "ks-project-select",
    "strategy-group",
    "__webpack_require__.e",
    "webpack_require.e",
]
for f in sorted(p.glob("*.js")):
    t = f.read_text(encoding="utf-8", errors="ignore")
    hits = [k for k in keys if k in t]
    if hits:
        print(f"{f.name}\t{f.stat().st_size}\t{','.join(hits)}")
print("---import( count in 1mb+ ---")
for f in sorted(p.glob("*.js")):
    if f.stat().st_size < 800000:
        continue
    t = f.read_text(encoding="utf-8", errors="ignore")
    print(f.name, "import(", t.count("import("), "ensure", t.count("webpack_require.e"))
