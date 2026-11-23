from pathlib import Path
root = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/phase4-build")
c = next(root.glob("5203.app.*.js"))
t = c.read_text(encoding="utf-8", errors="ignore")
print("5203", c.name, "len", len(t))
idx = t.find("loadSelector")
print("idx", idx)
print(t[max(0, idx - 500) : idx + 600] if idx >= 0 else "no loadSelector")
print("---r.e---", t.count(".e("), "r.t", t.count(".t("), "import(", t.count("import("))
# find webpack ensure
for k in ("ks-project-selector", "selector-missing", "titleWrapper", "showSelect"):
    print(k, t.find(k))
# other chunks
print("---other---")
for f in sorted(root.glob("*.js")):
    x = f.read_text(encoding="utf-8", errors="ignore")
    if "selector-missing" in x or "ks-project-selector" in x or (f.name != c.name and "loadSelector" in x):
        print(f.name, f.stat().st_size, "sel-missing" in x or "selector-missing" in x)
