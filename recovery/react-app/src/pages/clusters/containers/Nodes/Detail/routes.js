import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module821 from "unpacked/module-821.js";
import module3949 from "pages/clusters/containers/Nodes/Detail/RunningStatus";
import module3956 from "pages/clusters/containers/Nodes/Detail/Pods";
import module3957 from "pages/clusters/containers/Nodes/Detail/Monitoring";
import module3958 from "pages/clusters/containers/Nodes/Detail/Events";
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
