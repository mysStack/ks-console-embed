#!/usr/bin/env python3
"""List KS_* / API-related env and bashrc key names. Never print secret values."""
from pathlib import Path
import os
import re

SECRET = re.compile(r"PASS|SECRET|TOKEN|KEY|PWD|CRED", re.I)
NAME = re.compile(
    r"^(?:export\s+)?([A-Z][A-Z0-9_]*(?:HOST|URL|API|SERVER|CONSOLE|CLUSTER|PORT|ENDPOINT|ADDR|ORIGIN|PROXY)[A-Z0-9_]*)=",
    re.M,
)
KS = re.compile(r"^(?:export\s+)?(KS_[A-Z0-9_]+)=", re.M)

bashrc = Path("/home/bruce/.bashrc").read_text(encoding="utf-8", errors="ignore")
keys = sorted(set(KS.findall(bashrc) + NAME.findall(bashrc)))
print("bashrc_keys", [k for k in keys if not SECRET.search(k)])
print("bashrc_secret_keys_present", sorted(k for k in keys if SECRET.search(k) and k.startswith("KS_")))
env_ks = sorted(k for k in os.environ if k.startswith("KS_") and not SECRET.search(k))
print("env_ks_nonsecret", env_ks)
print("env_user_set", bool(os.environ.get("KS_TEST_USERNAME")))
print("env_pass_set", bool(os.environ.get("KS_TEST_PASSWORD")))
# values of non-secret URL-like keys only, truncated
for k in keys:
    if SECRET.search(k):
        continue
    m = re.search(rf"^(?:export\s+)?{re.escape(k)}=['\"]?([^'\"\n]*)", bashrc, re.M)
    if not m:
        continue
    val = m.group(1).strip()
    if any(s in val.lower() for s in ("http", "https", ":", "kubesphere", "cluster")):
        print("pair", k, val[:120])
