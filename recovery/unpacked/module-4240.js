import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module821 from "./module-821.js";
import module4241 from "./module-4241.js";
import module4243 from "./module-4243.js";
import module4244 from "./module-4244.js";
import module4246 from "./module-4246.js";
const path = "/whizard-telemetry/:cluster/projects/:namespace";
const d = [
    {
        path: `${path}/overview`,
        title: "OVERVIEW",
        component: module4241,
        exact: true
    },
    {
        path: `${path}/pods`,
        title: "POD_PL",
        component: module4243,
        exact: true
    },
    {
        path: `${path}/gateway`,
        title: "GATEWAY",
        component: module4244,
        exact: true,
        clusterModule: "gateway"
    },
    {
        path: `${path}/quota`,
        title: "QUOTA_PL",
        component: module4246,
        exact: true
    },
    {
        path: `${path}/metadata`,
        title: "METADATA",
        component: module821,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/overview`,
        exact: true
    })
];
export default d;
