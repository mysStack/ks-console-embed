#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
NEEDLES = (
    "isSubmmiting",
    "oAuthLoginInfo",
    "LDAPIdentityProvider",
    "iam.kubesphere.io~1uninitialized",
    "PATTERN_WORD",
    "PASSWORD_LETTER",
    "appStoreScrollThreshold",
    "initAlias",
    "LabelsCard",
    "AnnotationsCard",
    "CREATED_TIME",
    "kubeconfig.yaml",
    "COPIED_SUCCESSFUL",
    "MODIFY_MEMBER_ROLE",
    "SELECT_ROLE_TIP",
    "encrypt",
    "currentServer",
    "showKS",
    "endSessionURL",
    "jsonPatch",
    "uninitialized",
    "components/Cards/Labels",
    "components/Cards/Annotations",
)
for p in UNPACKED.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
        continue
    hits = [n for n in NEEDLES if n in text]
    if hits:
        print(p.name, hits)
