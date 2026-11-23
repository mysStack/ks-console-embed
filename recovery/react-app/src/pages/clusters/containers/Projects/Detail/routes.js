import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module821 from "unpacked/module-821.js";
import module3972 from "pages/clusters/containers/Projects/Detail/Overview";
import module3981 from "pages/clusters/containers/Projects/Detail/Pods";
import module3982 from "pages/clusters/containers/Projects/Detail/Gateway";
import module3984 from "pages/clusters/containers/Projects/Detail/Quota";
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
