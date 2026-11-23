import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module821 from "./module-821.js";
import module3961 from "./module-3961.js";
import module3967 from "./module-3967.js";
import module3968 from "./module-3968.js";
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
