import "./module-15.js";
import "./module-11.js";
import "./module-4.js";
import { getChildRoutes } from "./module-317.js";
import module4442 from "./module-4442.js";
import module4444 from "./module-4444.js";
import module4452 from "./module-4452.js";
import module4454 from "./module-4454.js";
const path = "/workspaces/:workspace/overview";
const i = [
    {
        name: "usage",
        title: "RESOURCE_USAGE",
        component: module4444
    },
    {
        name: "ranking",
        title: "USAGE_RANKING",
        component: module4452
    },
    {
        name: "clusters",
        title: "CLUSTER_INFORMATION",
        component: module4454,
        multiCluster: true
    }
];
const f = [
    {
        path,
        component: module4442,
        routes: getChildRoutes(i.filter((e)=>!e.multiCluster || globals.app.isMultiCluster), path)
    }
];
export default f;
