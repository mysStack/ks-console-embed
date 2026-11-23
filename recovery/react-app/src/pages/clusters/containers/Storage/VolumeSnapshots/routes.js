import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module3714 from "pages/clusters/containers/Storage/VolumeSnapshots/Snapshots";
import module3717 from "pages/clusters/containers/Storage/VolumeSnapshots/SnapshotContent";
const path = "/clusters/:cluster/volume-snapshots";
const c = [
    {
        path: `${path}/snapshots`,
        title: "VOLUME_SNAPSHOT",
        component: module3714,
        exact: true
    },
    {
        path: `${path}/snapshot-content`,
        title: "VOLUME_SNAPSHOT_CONTENT",
        component: module3717,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/snapshots`,
        exact: true
    })
];
export default c;
