import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module821 from "unpacked/module-821.js";
import module4231 from "unpacked/module-4231.js";
import module4237 from "unpacked/module-4237.js";
import module4238 from "unpacked/module-4238.js";
const path = "/whizard-telemetry/:cluster/edgenodes/:node";
const s = [
    {
        path: `${path}/status`,
        title: "RUNNING_STATUS",
        component: module4231,
        exact: true
    },
    {
        path: `${path}/pods`,
        title: "POD_PL",
        component: module4237,
        exact: true
    },
    {
        path: `${path}/metadata`,
        title: "METADATA",
        component: module821,
        exact: true
    },
    {
        path: `${path}/events`,
        title: "EVENT_PL",
        component: module4238,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/status`,
        exact: true
    })
];
export default s;
