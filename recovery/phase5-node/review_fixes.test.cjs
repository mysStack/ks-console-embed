const { test } = require("node:test");
const assert = require("node:assert/strict");
const {
  mapFetchedPvcVolumes,
  resolveVolumesMapper,
} = require("../react-app/src/utils/mapFetchedPvcVolumes.js");
const { parseTerminalPath } = require("../react-app/src/pages/terminal/parseTerminalPath.js");
const { createLatestOnly } = require("../react-app/src/components/Modals/ContianerTerminal/latestOnly.js");

const pvc = {
  metadata: { name: "data-web", namespace: "demo-ns" },
  spec: {
    accessModes: ["ReadWriteOnce"],
    storageClassName: "local-path",
    resources: { requests: { storage: "10Gi" } },
  },
  status: { phase: "Bound", capacity: { storage: "10Gi" } },
};

function volumes(item) {
  return {
    name: item.metadata.name,
    capacity: item.spec.resources.requests.storage,
    storageClassName: item.spec.storageClassName,
    accessMode: item.spec.accessModes[0],
  };
}

test("PVC mapper uses metadata.name and capacity, not raw PVC", () => {
  const mapped = mapFetchedPvcVolumes([pvc], { volumes });
  assert.equal(mapped[0].name, "data-web");
  assert.equal(mapped[0].capacity, "10Gi");
  assert.equal(mapped[0].storageClassName, "local-path");
  assert.equal(mapped[0].accessMode, "ReadWriteOnce");
  const found = mapped.find((item) => item.name === "data-web");
  assert.ok(found);
  assert.equal(pvc.name, undefined);
});

test("PVC mapper throws instead of returning raw objects", () => {
  assert.equal(resolveVolumesMapper({}), null);
  assert.throws(() => mapFetchedPvcVolumes([pvc], {}), /volumes is not available/);
  assert.throws(() => mapFetchedPvcVolumes([pvc], null), /volumes is not available/);
});

test("PVC mapper accepts default.volumes", () => {
  const mapped = mapFetchedPvcVolumes([pvc], { default: { volumes } });
  assert.equal(mapped[0].capacity, "10Gi");
});

test("parseTerminalPath accepts the original container path", () => {
  const parsed = parseTerminalPath(
    "/terminal/cluster/default/projects/demo-ns/pods/web-0/containers/web-matrix"
  );
  assert.equal(parsed.ok, true);
  assert.equal(parsed.kind, "container");
  assert.deepEqual(parsed.params, {
    cluster: "default",
    namespace: "demo-ns",
    podName: "web-0",
    containerName: "web-matrix",
  });
});

test("parseTerminalPath rejects incomplete container paths", () => {
  assert.equal(parseTerminalPath("/terminal/cluster/default").ok, false);
  assert.equal(parseTerminalPath("/terminal/cluster/default/projects/demo-ns").ok, false);
  assert.equal(parseTerminalPath("/login").ok, false);
});

test("parseTerminalPath accepts kubectl and nodename with required params", () => {
  assert.deepEqual(parseTerminalPath("/terminal/kubectl/default"), {
    ok: true,
    kind: "kubectl",
    cluster: "default",
  });
  assert.equal(parseTerminalPath("/terminal/kubectl").ok, false);
  assert.deepEqual(parseTerminalPath("/terminal/nodename/dev01"), {
    ok: true,
    kind: "nodename",
    nodename: "dev01",
  });
  assert.equal(parseTerminalPath("/terminal/nodename").ok, false);
});

test("latestOnly keeps only the newest request", async () => {
  const gate = createLatestOnly();
  const first = gate.next();
  const second = gate.next();
  assert.equal(gate.isCurrent(first), false);
  assert.equal(gate.isCurrent(second), true);
  let applied = null;
  const slow = Promise.resolve("old-url").then((url) => {
    if (gate.isCurrent(first)) applied = url;
  });
  const fast = Promise.resolve("new-url").then((url) => {
    if (gate.isCurrent(second)) applied = url;
  });
  await Promise.all([slow, fast]);
  assert.equal(applied, "new-url");
});
