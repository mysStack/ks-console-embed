#!/usr/bin/env python3
from pathlib import Path

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3/src")
needles = [
    "spec.email.enabled",
    "IPPOOL_ASSIGN_PROJECT",
    "username}-webhook-receiver",
    "username}-dingtalk-receiver",
    "IPPoolProject",
]


def main():
    files = [p for p in ROOT.rglob("*") if p.suffix in {".js", ".jsx"}]
    for needle in needles:
        hits = []
        for p in files:
            text = p.read_text(encoding="utf-8", errors="ignore")
            if needle in text:
                hits.append(p.relative_to(ROOT).as_posix())
        print(f"{needle!r} {len(hits)}")
        for h in hits[:15]:
            print(" ", h)


if __name__ == "__main__":
    main()
