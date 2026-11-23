#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
NEEDLES = (
    "imageBuilderRun",
    "imageBuilderName",
    "DevopsRunsCard",
    "getDisplayNameNew",
    "handleDOMClick",
    "TailIUnitInput",
    "ENV_FROM",
    "ENVIRONMENT_FROM",
    "withDefaultSecrets",
    "PARMMETER_TYPES",
    "kubeconfig.yaml",
    "MODIFY_MEMBER_ROLE",
    "CHANGE_PASSWORD_LATER",
    "__POWERED_BY_WUJIE__",
    "FEDERATED_PROJECT_UNSOPPORT_QUOTA",
    "need_rebuild_",
)
for p in UNPACKED.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
        continue
    hits = [n for n in NEEDLES if n in text]
    if hits:
        print(p.name, hits)
