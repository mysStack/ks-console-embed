import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module4113 from "unpacked/module-4113.js";
import module4115 from "unpacked/module-4115.js";
const path = "/whizard-telemetry/:cluster/volume-snapshots";
const c = [
    {
        path: `${path}/snapshots`,
        title: "VOLUME_SNAPSHOT",
        component: module4113,
        exact: true
    },
    {
        path: `${path}/snapshot-content`,
        title: "VOLUME_SNAPSHOT_CONTENT",
        component: module4115,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/snapshots`,
        exact: true
    })
];
export default c;
