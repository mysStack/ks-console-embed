import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module3714 from "./module-3714.js";
import module3717 from "./module-3717.js";
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
