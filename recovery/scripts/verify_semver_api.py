#!/usr/bin/env python3
import sys
sys.path.insert(0, "/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/node_modules")
import semver
print("version_attr", getattr(semver, "__version__", None))
print("gte", semver.gte("1.23.0", "1.21.0"))
print("type", type(semver))
print("has_gte", hasattr(semver, "gte"))
print("has_validRange", hasattr(semver, "validRange"))
print("has_satisfies", hasattr(semver, "satisfies"))
