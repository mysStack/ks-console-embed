import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module821 from "unpacked/module-821.js";
import module3961 from "pages/clusters/containers/EdgeNodes/Detail/RunningStatus";
import module3967 from "pages/clusters/containers/EdgeNodes/Detail/Pods";
import module3968 from "pages/clusters/containers/EdgeNodes/Detail/Events";
const path = "/clusters/:cluster/edgenodes/:node";
const s = [
    {
        path: `${path}/status`,
        title: "RUNNING_STATUS",
        component: module3961,
        exact: true
    },
    {
        path: `${path}/pods`,
        title: "POD_PL",
        component: module3967,
        exact: true
    },
    {
        path: `${path}/metadata`,
        title: "METADATA",
        component: module821,
        exact: true
    },
    {
        path: `${path}/events`,
        title: "EVENT_PL",
        component: module3968,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/status`,
        exact: true
    })
];
export default s;
