import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module4789 from "./module-4789.js";
import module4790 from "./module-4790.js";
import module4792 from "./module-4792.js";
const path = "/:workspace/clusters/:cluster/projects/:namespace/applications/template/:id";
const i = [
    {
        path: `${path}/resource-status`,
        name: "resource-status",
        title: "RESOURCE_STATUS",
        component: module4789,
        exact: true
    },
    {
        path: `${path}/template`,
        title: "APP_TEMPLATE",
        component: module4790,
        exact: true
    },
    {
        path: `${path}/config`,
        title: "APP_SETTINGS",
        component: module4792,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/resource-status`,
        exact: true
    })
];
export default i;
