import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import component from "pages/clusters/containers/Storage/VolumeSnapshotClasses/Detail/VolumeSnapshot";
export default function(path) {
    return [
        {
            path: `${path}/volume-snapshot`,
            title: "VOLUME_SNAPSHOT_PL",
            exact: true,
            component
        },
        getIndexRoute({
            path,
            to: `${path}/volume-snapshot`,
            exact: true
        })
    ];
};
