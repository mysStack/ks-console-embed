#!/usr/bin/env bash
set -euo pipefail
echo "---kubectl---"
command -v kubectl && kubectl config current-context 2>/dev/null || echo no_kubectl_context
kubectl get --raw=/readyz >/dev/null 2>&1 && echo kubectl_readyz_ok || echo kubectl_readyz_fail
echo "---ports---"
ss -ltn | grep -E ':30880 |:30881 |:30883 |:8099 |:8108 |:8080 |:6443 ' || true
echo "---ks-apiserver pods---"
kubectl get svc,pod -A 2>/dev/null | grep -E 'ks-apiserver|kubesphere-system' | head -n 40 || echo no_ks
echo "---console docs hosts---"
python3 - <<'PY'
from pathlib import Path
import re
root = Path("/home/bruce/code/ks-develop")
pat = re.compile(r"https?://[0-9.]+:(30880|30881|30883|8099|6443)")
seen=set()
for p in [root/"kse-console-v3/docs", root/"console-workloads/docs", root/"console"]:
    if not p.exists():
        continue
    for f in p.rglob("*.md"):
        try:
            t=f.read_text(encoding="utf-8", errors="ignore")
        except Exception:
            continue
        for m in pat.findall(t)[:0]:
            pass
        for m in pat.finditer(t):
            seen.add(m.group(0))
print(sorted(seen)[:30])
PY
