import "./module-15.js";
import "./module-29.js";
import "./module-16.js";
import "./module-4.js";
import module26 from "./module-26.js";
export const getVolumeType = function(e) {
    if (e.persistentVolumeClaim) {
        return "Volume";
    }
    if (e.HostPath) {
        return "HostPath";
    }
    if (e.emptyDir) {
        return "EmptyDir";
    }
};
export const isNotPersistentVolume = function(e) {
    return e.emptyDir || e.hostPath || e.configMap || e.secret;
};
export const findVolume = function(e, t) {
    let n;
    if (t) {
        return n = isNotPersistentVolume(t) ? e.find((e)=>e.name === t.name) : e.find((e)=>module26(e, "persistentVolumeClaim.claimName") === t.name);
    }
    return n;
};
export const cantDeleteSnapshotContent = function({ _originData }) {
    return !(module26(_originData, "spec.source.snapshotHandle") && module26(_originData, "spec.volumeSnapshotRef.uid") || module26(_originData, 'metadata.annotations["snapshot.storage.kubernetes.io/volumesnapshot-being-deleted"]'));
};
