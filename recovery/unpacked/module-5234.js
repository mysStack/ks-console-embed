import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import component from "./module-5235.js";
const path = "/v2/edgewize/clusters/:cluster/fota/:node";
const u = [
    {
        path: `${path}/tasks`,
        title: "TASK_EXE_INFO",
        component,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/tasks`,
        exact: true
    })
];
export default u;
