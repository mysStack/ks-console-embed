#!/usr/bin/env python3
"""Dump orig vs unpacked snippets for suspect pins and scss-ambig unique importers."""
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "src"
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
known_mods = set(re.findall(r"module-(\d+)\.js", KNOWN_PY))
mod_to_name = {v: k for k, v in pairs.items()}
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")

SUSPECT = [
    4062, 4753, 2398, 3911, 4410, 1253, 1023, 3730, 3769, 1394, 3602, 3605,
    4668, 3638, 985, 1759, 1762, 1127, 1684, 4168, 3630, 3632, 3634, 3635,
    2568, 2570, 2629, 4074, 4072, 2704, 3350, 2628, 3486, 3496, 2044, 4060,
    922, 5110, 5098, 3766, 3714, 945, 1240, 1232, 1763, 816, 1073,
]

PARENTS = {
    "components/Layout/GlobalNav.js": "components/Layout/GlobalNav/item.js",
    "components/Layout/Nav.js": "components/Layout/Nav/NavItem.js",
    "pages/clusters/components/Modals/UnbindCluster.js": "pages/clusters/components/Modals/UnbindCluster/SliderConfirm.js",
    "pages/projects/components/Modals/ServiceSetting.js": "pages/projects/components/Modals/ServiceSetting/Form.js",
    "pages/projects/components/Modals/ServiceMonitor.js": "pages/projects/components/Modals/ServiceMonitor/Endpoint.js",
    "components/Modals/EventSearch/Event/Detail.js": "components/Modals/EventSearch/Event/Detail/MetadataModal.js",
    "components/Modals/AuditingSearch/Auditing/Detail.js": "components/Modals/AuditingSearch/Auditing/Detail/MetadataModal.js",
    "components/Base/Modal.js": None,
    "components/Layout/Header.js": "components/Layout/LoginInfo.js",
    "pages/projects/components/Modals/ConfigTemplate.js": "pages/projects/components/Modals/ConfigTemplate/config.js",
    "pages/projects/components/Modals/ServiceSetting/StatefulSet.js": "pages/projects/components/Modals/ServiceSetting/StatefulSet/Form.js",
}


def orig_file(key):
    stem = key[:-3] if key.endswith(".js") else key
    for ext in (".js", ".jsx", "/index.js", "/index.jsx"):
        p = SRC / f"{stem}{ext}"
        if p.exists():
            return p
    return None


importers = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)

print("==== suspect module heads ====")
for n in SUSPECT:
    name = f"module-{n}.js"
    p = UNPACKED / name
    if not p.exists():
        print(n, "MISSING")
        continue
    text = p.read_text(encoding="utf-8", errors="ignore")
    named = mod_to_name.get(name, "?")
    imps = sorted(set(importers[name]), key=lambda s: int(s.split("-")[1].split(".")[0]))
    named_imps = [(i, mod_to_name.get(i, "?")) for i in imps[:8]]
    head = " | ".join(text.splitlines()[:4])[:240]
    print(f"\n{name} named={named} importers={named_imps}")
    print("  head", head)

print("\n==== orig parent local imports vs unpacked kids ====")
for parent, child in PARENTS.items():
    pmod = pairs.get(parent)
    op = orig_file(parent)
    print(f"\nPARENT {parent} -> {pmod} orig={op}")
    if op:
        rels = [r for r in imp_orig.findall(op.read_text(encoding="utf-8", errors="ignore"))]
        print("  orig_imps", rels)
    if child:
        cp = orig_file(child)
        print("  child_orig", child, cp)
        if cp:
            ctext = cp.read_text(encoding="utf-8", errors="ignore")
            print("  child_head", " | ".join(ctext.splitlines()[:8])[:220])
    if pmod and (UNPACKED / pmod).exists():
        ptext = (UNPACKED / pmod).read_text(encoding="utf-8", errors="ignore")
        kids = []
        for m in list(dict.fromkeys(imp_unpacked.findall(ptext))):
            mid = re.search(r"\d+", m).group()
            if mid in known_mods:
                kids.append((m, "named:" + mod_to_name.get(m, "?")))
            else:
                kids.append((m, "UNNAMED"))
        print("  unpacked_kids", kids)

print("\n==== orig snippets for generic 1-hit ====")
for key in [
    "components/Layout/LoginInfo.js",
    "components/Graph/Edge.js",
    "components/Base/Upload/Upload.js",
    "pages/projects/containers/Network/Policies/Detail/Viewer.js",
    "pages/apps/components/Lists/VersionList/Item.js",
    "pages/devops/components/Health.js",
    "pages/access/containers/Roles/Detail/AuthorizationList.js",
    "pages/clusters/containers/ServiceComponents/Card.js",
    "pages/clusters/components/Cards/Monitoring/ETCDNodes.js",
    "pages/clusters/containers/LogCollections/config.js",
    "pages/projects/routes/grayrelease.js",
    "pages/console/containers/NotFound.js",
    "components/Modals/LogSearch/Logging/SearchInput.js",
    "stores/alerting/message.js",
    "pages/devops/components/Status.js",
    "pages/projects/components/Cards/S2iBuilder/BuilderInfo.js",
]:
    p = orig_file(key)
    print(f"\nORIG {key} -> {p}")
    if p:
        print("  ", " | ".join(p.read_text(encoding="utf-8", errors="ignore").splitlines()[:10])[:240])
