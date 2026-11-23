import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module4119 from "unpacked/module-4119.js";
import module4121 from "unpacked/module-4121.js";
const path = "/whizard-telemetry/:cluster/volumes";
const c = [
    {
        path: `${path}/Volumes`,
        title: "PERSISTENT_VOLUME_CLAIM_PL",
        component: module4119,
        exact: true
    },
    {
        path: `${path}/PV`,
        title: "PERSISTENT_VOLUME_PL",
        component: module4121,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/Volumes`,
        exact: true
    })
];
export default c;
