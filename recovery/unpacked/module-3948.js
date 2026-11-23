import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module821 from "./module-821.js";
import module3949 from "./module-3949.js";
import module3956 from "./module-3956.js";
import module3957 from "./module-3957.js";
import module3958 from "./module-3958.js";
const path = "/clusters/:cluster/nodes/:node";
const d = [
    {
        path: `${path}/status`,
        title: "RUNNING_STATUS",
        component: module3949,
        exact: true
    },
    {
        path: `${path}/pods`,
        title: "PODS",
        component: module3956,
        exact: true
    },
    {
        path: `${path}/metadata`,
        title: "METADATA",
        component: module821,
        exact: true
    },
    {
        path: `${path}/monitors`,
        title: "MONITORING",
        component: module3957,
        exact: true,
        clusterModule: "whizard-monitoring"
    },
    {
        path: `${path}/events`,
        title: "EVENT_PL",
        component: module3958,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/status`,
        exact: true
    })
];
export default d;
