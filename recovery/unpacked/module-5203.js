import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module5204 from "./module-5204.js";
import module5209 from "./module-5209.js";
const path = "/v2/edgewize/clusters/:cluster/resource-usage";
const l = [
    {
        path: `${path}/node`,
        title: "NODE_USAGE_RANKING",
        component: module5204,
        exact: true
    },
    {
        path: `${path}/project`,
        title: "PROJECTS_USAGE_RANKING",
        component: module5209,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/node`,
        exact: true
    })
];
export default l;
