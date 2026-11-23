import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module821 from "./module-821.js";
import module5229 from "./module-5229.js";
import module5231 from "./module-5231.js";
import module5232 from "./module-5232.js";
const path = "/v2/edgewize/clusters/:cluster/projects/:namespace";
const s = [
    {
        path: `${path}/overview`,
        title: "OVERVIEW",
        component: module5229,
        exact: true
    },
    {
        path: `${path}/pods`,
        title: "POD_PL",
        component: module5231,
        exact: true
    },
    {
        path: `${path}/quota`,
        title: "QUOTA_PL",
        component: module5232,
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
export default s;
