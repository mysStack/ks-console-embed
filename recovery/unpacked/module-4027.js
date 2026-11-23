import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module4028 from "./module-4028.js";
import module4029 from "./module-4029.js";
import module4036 from "./module-4036.js";
import module4040 from "./module-4040.js";
import module4041 from "./module-4041.js";
export default function(path) {
    return [
        {
            path: `${path}/gateway-configs`,
            title: "CONFIGURATION_OPTIONS",
            component: module4040,
            exact: true
        },
        {
            path: `${path}/monitors`,
            title: "MONITORING",
            component: module4029,
            exact: true,
            clusterModule: "whizard-monitoring"
        },
        {
            path: `${path}/logs`,
            title: "GATEWAY_LOGS",
            component: module4041,
            exact: true
        },
        {
            path: `${path}/resource-status`,
            title: "RESOURCE_STATUS",
            component: module4036,
            exact: true
        },
        {
            path: `${path}/metadata`,
            title: "METADATA",
            component: module4028,
            exact: true
        },
        getIndexRoute({
            path,
            to: `${path}/gateway-configs`,
            exact: true
        })
    ];
};
