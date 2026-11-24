#!/usr/bin/env bash
set -euo pipefail

if [ ! -f dist/manifest.json ]; then
  echo "missing dist/manifest.json; run: V3_PUBLIC_PATH=/dist/v3dist/ yarn build:client" >&2
  exit 1
fi

TAG=${TAG:-$(git rev-parse --abbrev-ref HEAD | sed -e 's/\//-/g')-$(git rev-parse --short HEAD)}
REPO=${REPO:-ks-console-embed}
CONTAINER_CLI=${CONTAINER_CLI:-docker}

${CONTAINER_CLI} build --pull=false -f embed/Dockerfile -t "${REPO}:${TAG}" .

if [ -z "${DRY_RUN:-}" ] && [ -n "${PUSH:-}" ]; then
  ${CONTAINER_CLI} push "${REPO}:${TAG}"
fi

echo "built ${REPO}:${TAG}"
