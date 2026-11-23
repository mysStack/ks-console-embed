import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import component from "./module-4009.js";
const path = "/clusters/:cluster/log-collections/:component/:name";
const i = [
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
export default i;
