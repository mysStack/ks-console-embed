from pathlib import Path
p = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/phase4-build")
keys = [
    "loadProjectSelect",
    "loadModal",
    "ks-project-select",
    "handleEnterWorkspace",
    "MULTI_CLUSTER_PROJECT_PL",
    "DEVOPS_PROJECT_PL",
    "getProjectNavs",
    "VERSION_EXISTS",
]
for f in sorted(p.glob("*.js")):
    t = f.read_text(encoding="utf-8", errors="ignore")
    hits = [k for k in keys if k in t]
    if hits:
        print(f"{f.name}\t{f.stat().st_size}\t{','.join(hits)}")
