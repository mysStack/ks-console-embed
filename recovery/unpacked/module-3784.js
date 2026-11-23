import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module3785 from "./module-3785.js";
import module3792 from "./module-3792.js";
const path = "/clusters/:cluster/monitor-resource";
const c = [
    {
        path: `${path}/usage`,
        title: "RESOURCE_USAGE",
        component: module3785,
        exact: true
    },
    {
        path: `${path}/ranking`,
        title: "USAGE_RANKING",
        component: module3792,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/usage`,
        exact: true
    })
];
export default c;
