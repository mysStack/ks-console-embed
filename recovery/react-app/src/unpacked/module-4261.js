import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module4262 from "unpacked/module-4262.js";
import module4263 from "unpacked/module-4263.js";
import module4270 from "unpacked/module-4270.js";
import module4278 from "unpacked/module-4278.js";
import module4279 from "unpacked/module-4279.js";
export default function(path) {
    return [
        {
            path: `${path}/monitors`,
            title: "MONITORING",
            component: module4263,
            exact: true
        },
        {
            path: `${path}/gateway-configs`,
            title: "CONFIGURATION_OPTIONS",
            component: module4278,
            exact: true
        },
        {
            path: `${path}/logs`,
            title: "GATEWAY_LOGS",
            component: module4279,
            exact: true
        },
        {
            path: `${path}/resource-status`,
            title: "RESOURCE_STATUS",
            component: module4270,
            exact: true
        },
        {
            path: `${path}/metadata`,
            title: "METADATA",
            component: module4262,
            exact: true
        },
        getIndexRoute({
            path,
            to: `${path}/monitors`,
            exact: true
        })
    ];
};
