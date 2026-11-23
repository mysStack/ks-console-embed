from pathlib import Path
root = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/phase4-build")
c = next(root.glob("5203.app.*.js"))
t = c.read_text(encoding="utf-8", errors="ignore")
print(t[800:2500])
print("---markers---")
for k in ("getRoutes", "ks-page-side", "ModuleSelector", "showSelect", "titleWrapper", "inject", "getProjectNavs"):
    print(k, t.find(k))
