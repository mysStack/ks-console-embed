import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module821 from "./module-821.js";
import module5240 from "./module-5240.js";
import module5241 from "./module-5241.js";
import module5242 from "./module-5242.js";
import module5243 from "./module-5243.js";
const path = "/v2/edgewize/clusters/:cluster/nodes/:node";
const d = [
    {
        path: `${path}/status`,
        title: "RUNNING_STATUS",
        component: module5243,
        exact: true
    },
    {
        path: `${path}/pods`,
        title: "POD_PL",
        component: module5240,
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
        component: module5242,
        exact: true,
        clusterModule: "whizard-monitoring"
    },
    {
        path: `${path}/events`,
        title: "EVENT_PL",
        component: module5241,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/status`,
        exact: true
    })
];
export default d;
