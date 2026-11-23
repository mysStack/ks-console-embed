import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module821 from "./module-821.js";
import module3972 from "./module-3972.js";
import module3981 from "./module-3981.js";
import module3982 from "./module-3982.js";
import module3984 from "./module-3984.js";
const path = "/clusters/:cluster/projects/:namespace";
const d = [
    {
        path: `${path}/overview`,
        title: "OVERVIEW",
        component: module3972,
        exact: true
    },
    {
        path: `${path}/pods`,
        title: "POD_PL",
        component: module3981,
        exact: true
    },
    {
        path: `${path}/gateway`,
        title: "GATEWAY",
        component: module3982,
        exact: true,
        clusterModule: "gateway"
    },
    {
        path: `${path}/quota`,
        title: "QUOTA_PL",
        component: module3984,
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
