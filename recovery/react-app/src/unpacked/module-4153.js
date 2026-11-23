import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module4154 from "unpacked/module-4154.js";
import module4161 from "unpacked/module-4161.js";
const path = "/whizard-telemetry/:cluster/monitor-resource";
const c = [
    {
        path: `${path}/usage`,
        title: "RESOURCE_USAGE",
        component: module4154,
        exact: true
    },
    {
        path: `${path}/ranking`,
        title: "USAGE_RANKING",
        component: module4161,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/usage`,
        exact: true
    })
];
export default c;
