import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module4404 from "./module-4404.js";
import module4405 from "./module-4405.js";
import module4408 from "./module-4408.js";
import module4423 from "./module-4423.js";
const path = "/workspaces/:workspace/apps/:appId";
const i = [
    {
        path: `${path}/versions`,
        title: "VERSIONS",
        component: module4408,
        exact: true
    },
    {
        path: `${path}/app-information`,
        title: "APP_INFORMATION",
        component: module4404,
        exact: true
    },
    {
        path: `${path}/audit-records`,
        title: "APP_REVIEW",
        component: module4405,
        exact: true
    },
    {
        path: `${path}/app-instances`,
        title: "APP_INSTANCES",
        component: module4423,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/versions`,
        exact: true
    })
];
export default i;
