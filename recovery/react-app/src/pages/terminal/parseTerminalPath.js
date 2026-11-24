function splitTerminalPath(pathname) {
  const pathSplit = String(pathname || "").split("/");
  if (pathSplit.length > 1 && pathSplit[pathSplit.length - 1] === "") {
    pathSplit.pop();
  }
  return pathSplit;
}

function parseTerminalPath(pathname) {
  const pathSplit = splitTerminalPath(pathname);
  if (pathSplit[1] !== "terminal") {
    return { ok: false, reason: "not-terminal" };
  }
  if (pathSplit[2] === "kubectl") {
    if (pathSplit.length !== 4 || !pathSplit[3]) {
      return { ok: false, reason: "missing-cluster", kind: "kubectl" };
    }
    return { ok: true, kind: "kubectl", cluster: pathSplit[3] };
  }
  if (pathSplit[2] === "nodename") {
    if (pathSplit.length !== 4 || !pathSplit[3]) {
      return { ok: false, reason: "missing-nodename", kind: "nodename" };
    }
    return { ok: true, kind: "nodename", nodename: pathSplit[3] };
  }
  const cluster = pathSplit[3];
  const namespace = pathSplit[5];
  const podName = pathSplit[7];
  const containerName = pathSplit[9];
  const structureOk =
    pathSplit.length === 10 &&
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
  splitTerminalPath,
};
