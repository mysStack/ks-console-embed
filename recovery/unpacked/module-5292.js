import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import component from "./module-1023.js";
const path = "/node-groups/clusters/:cluster/:group/roles/:name";
const c = [
    {
        path: `${path}/authorizations`,
        title: "PERMISSION_PL",
        component,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/authorizations`,
        exact: true
    })
];
export default c;
