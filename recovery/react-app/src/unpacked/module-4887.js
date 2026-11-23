import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module4888 from "unpacked/module-4888.js";
import module4889 from "unpacked/module-4889.js";
const path = "/:workspace/clusters/:cluster/projects/:namespace/applications/others/:name";
const l = [
    {
        path: `${path}/resource-status`,
        name: "resource-status",
        title: "RESOURCE_STATUS",
        component: module4888,
        exact: true
    },
    {
        path: `${path}/config`,
        title: "APP_SETTINGS",
        component: module4889,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/resource-status`,
        exact: true
    })
];
export default l;
