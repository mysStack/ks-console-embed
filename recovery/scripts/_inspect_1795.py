from pathlib import Path
root = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/phase4-build")
app = next(root.glob("app.*.js"))
c1795 = next(root.glob("1795.app.*.js"))
app_t = app.read_text(encoding="utf-8", errors="ignore")
t = c1795.read_text(encoding="utf-8", errors="ignore")
print("app", app.name, "getPrototypeOf idx", app_t.find("getPrototypeOf"))
i = app_t.find("getPrototypeOf")
print("app around helper", app_t[max(0, i - 200) : i + 220])
print("---1795 head---")
print(t[:500])
print("---markers---")
for k in (
    "RecoveredComponent",
    "recoverClass",
    "VERSION_EXISTS",
    "getProjectNavs",
    "KS_SELECTOR",
    "loadProjectSelect",
):
    print(k, k in t, t.find(k))
print("1795 getPrototypeOf", t.find("getPrototypeOf"))
