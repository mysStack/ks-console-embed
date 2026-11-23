import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import component from "./module-5121.js";
const path = "/:workspace/clusters/:cluster/devops/:devops/cd/:cd";
const l = [
    {
        path: `${path}/syncStatus`,
        title: "SYNC_STATUS",
        component
    },
    getIndexRoute({
        path,
        to: `${path}/syncStatus`,
        exact: true
    })
];
export default l;
