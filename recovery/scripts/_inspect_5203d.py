from pathlib import Path
root = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/phase4-build")
files = list(root.glob("*.js"))
keys = [
    "showSelect",
    "selector-missing-react-component",
    "titleWrapper",
    "loadSelector",
    "ks-project-selector",
    "VERSION_EXISTS",
    "getProjectNavs",
    "ks-page-side",
]
for f in sorted(files):
    t = f.read_text(encoding="utf-8", errors="ignore")
    hits = [k for k in keys if k in t]
    if hits:
        print(f"{f.name}\t{f.stat().st_size}\t{','.join(hits)}")
c = next(root.glob("5203.app.*.js"))
t = c.read_text(encoding="utf-8", errors="ignore")
print("---5203 head 400---")
print(t[:400])
