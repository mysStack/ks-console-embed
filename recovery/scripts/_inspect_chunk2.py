from pathlib import Path

p = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/phase4-build")
chunk = next(p.glob("5203.app.*.js"))
t = chunk.read_text(errors="replace")
print("file", chunk.name, "len", len(t))
print("openedNav", "openedNav" in t)
print("showSelect", "showSelect" in t)
print("workspaceStore", "workspaceStore" in t)
print("getProjectNavs", "getProjectNavs" in t)
print("fetchFin", "fetchFin" in t)
print("ks-page-nav", "ks-page-nav" in t)
print("titleWrapper", "titleWrapper" in t)
print("handleItemOpen", "handleItemOpen" in t)

# first 2500 chars after factory start
idx = t.find("724500")
print("idx724500", idx)
print(t[idx:idx+2500])
print("---app helper---")
app = next(p.glob("app.*.js"))
a = app.read_text(errors="replace")
print("app", app.name)
print(a[1800:2100])
