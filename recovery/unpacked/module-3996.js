import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import component from "./module-3997.js";
const path = "/clusters/:cluster/components/:namespace/:name";
const i = [
    {
        path: `${path}/service-details`,
        title: "POD_PL",
        component,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/service-details`,
        exact: true
    })
];
export default i;
