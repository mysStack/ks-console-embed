import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module815 from "unpacked/module-815.js";
import module821 from "unpacked/module-821.js";
import module1983 from "unpacked/module-1983.js";
import module1985 from "unpacked/module-1985.js";
export default function(path) {
    return [
        {
            path: `${path}/resource-status`,
            title: "RESOURCE_STATUS",
            component: module1983,
            exact: true
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
            component: module1985,
            exact: true,
            clusterModule: "whizard-monitoring"
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
