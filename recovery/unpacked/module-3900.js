import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module962 from "./module-962.js";
import module3901 from "./module-3901.js";
import module3906 from "./module-3906.js";
import module3908 from "./module-3908.js";
export default function(path) {
    return [
        {
            path: `${path}/resource-status`,
            title: "RESOURCE_STATUS",
            component: module3901,
            exact: true
        },
        {
            path: `${path}/monitors`,
            title: "MONITORING",
            component: module3906,
            exact: true,
            clusterModule: "whizard-monitoring"
        },
        {
            path: `${path}/env`,
            title: "ENVIRONMENT_VARIABLE_PL",
            component: module962,
            exact: true
        },
        {
            path: `${path}/logs`,
            title: "CONTAINER_LOGS",
            component: module3908,
            exact: true,
            ksModule: "whizard-logging"
        },
        getIndexRoute({
            path,
            to: `${path}/resource-status`,
            exact: true
        })
    ];
};
