import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module821 from "./module-821.js";
import module4220 from "./module-4220.js";
import module4226 from "./module-4226.js";
import module4227 from "./module-4227.js";
import module4228 from "./module-4228.js";
const path = "/whizard-telemetry/:cluster/nodes/:node";
const d = [
    {
        path: `${path}/status`,
        title: "RUNNING_STATUS",
        component: module4220,
        exact: true
    },
    {
        path: `${path}/pods`,
        title: "Pods",
        component: module4226,
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
        component: module4227,
        exact: true,
        clusterModule: "whizard-monitoring"
    },
    {
        path: `${path}/events`,
        title: "EVENT_PL",
        component: module4228,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/status`,
        exact: true
    })
];
export default d;
