function resolveVolumesMapper(loaded) {
  if (loaded && typeof loaded.volumes === "function") {
    return loaded.volumes;
  }
  const def = loaded && loaded.default;
  if (def && typeof def.volumes === "function") {
    return def.volumes;
  }
  return null;
}

function mapFetchedPvcVolumes(items, loaded) {
  const list = Array.isArray(items) ? items : [];
  const fn = resolveVolumesMapper(loaded);
  if (typeof fn !== "function") {
    const err = new Error("object.mapper.volumes is not available");
    console.error("[recovery] PVC volume mapper missing; refusing raw PVC fallback", err);
    throw err;
  }
  return list.map(function (item) {
    return fn(item);
  });
}

module.exports = {
  resolveVolumesMapper,
  mapFetchedPvcVolumes,
};
