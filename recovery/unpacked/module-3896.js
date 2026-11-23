import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module815 from "./module-815.js";
import module962 from "./module-962.js";
import module821 from "./module-821.js";
import module1824 from "./module-1824.js";
import module1827 from "./module-1827.js";
import module1829 from "./module-1829.js";
export default function(path) {
    return [
        {
            path: `${path}/resource-status`,
            title: "RESOURCE_STATUS",
            component: module1824,
            exact: true
        },
        {
            path: `${path}/schedule`,
            title: "SCHEDULING_INFORMATION",
            component: module1827
        },
        {
            path: `${path}/metadata`,
            title: "METADATA",
            component: module821,
            exact: true
        },
        {
            path: `${path}/monitors`,
            title: "MONITORING",
            component: module1829,
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
            path: `${path}/events`,
            title: "EVENT_PL",
            component: module815,
            exact: true
        },
        getIndexRoute({
            path,
            to: `${path}/resource-status`,
            exact: true
        })
    ];
};
