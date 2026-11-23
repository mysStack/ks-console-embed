import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import component from "./module-4000.js";
const path = "/clusters/:cluster/customresources/:name";
const i = [
    {
        path: `${path}/resources`,
        title: "RESOURCE_STATUS",
        component,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/resources`,
        exact: true
    })
];
export default i;
