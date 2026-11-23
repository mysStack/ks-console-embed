import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module815 from "unpacked/module-815.js";
import module4740 from "unpacked/module-4740.js";
export default function(path) {
    return [
        {
            path: `${path}/resource-status`,
            title: "RESOURCE_STATUS",
            component: module4740,
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
