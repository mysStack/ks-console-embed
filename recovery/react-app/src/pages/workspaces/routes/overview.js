import "unpacked/module-15.js";
import "unpacked/module-11.js";
import "unpacked/module-4.js";
import { getChildRoutes } from "utils/router.config";
import module4442 from "pages/workspaces/overview/Layout";
import module4444 from "pages/workspaces/overview/usage";
import module4452 from "pages/workspaces/containers/Overview/UsageRanking";
import module4454 from "pages/workspaces/overview/clusters";
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
