function parseTerminalPath(pathname) {
  const pathSplit = String(pathname || "").split("/");
  if (pathSplit[1] !== "terminal") {
    return { ok: false, reason: "not-terminal" };
  }
  if (pathSplit[2] === "kubectl") {
    const cluster = pathSplit[3];
    if (!cluster) {
      return { ok: false, reason: "missing-cluster", kind: "kubectl" };
    }
    return { ok: true, kind: "kubectl", cluster };
  }
  if (pathSplit[2] === "nodename") {
    const nodename = pathSplit[3];
    if (!nodename) {
      return { ok: false, reason: "missing-nodename", kind: "nodename" };
    }
    return { ok: true, kind: "nodename", nodename };
  }
  const cluster = pathSplit[3];
  const namespace = pathSplit[5];
  const podName = pathSplit[7];
  const containerName = pathSplit[9];
  const structureOk =
    pathSplit[2] === "cluster" &&
    pathSplit[4] === "projects" &&
    pathSplit[6] === "pods" &&
    pathSplit[8] === "containers" &&
    Boolean(cluster && namespace && podName && containerName);
  if (!structureOk) {
    return { ok: false, reason: "invalid-container-path", kind: "container" };
  }
  return {
    ok: true,
    kind: "container",
    params: {
      cluster,
      namespace,
      podName,
      containerName,
    },
  };
}

module.exports = {
  parseTerminalPath,
};
