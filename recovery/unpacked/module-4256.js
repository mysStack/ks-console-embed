import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import component from "./module-4257.js";
const path = "/whizard-telemetry/:cluster/log-collections/:component/:name";
const o = [
    {
        path: `${path}/resource-status`,
        title: "RESOURCE_STATUS",
        component,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/resource-status`,
        exact: true
    })
];
export default o;
