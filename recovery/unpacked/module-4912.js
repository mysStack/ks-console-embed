import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module815 from "./module-815.js";
import module4913 from "./module-4913.js";
export default function(path) {
    return [
        {
            path: `${path}/resource-status`,
            title: "RESOURCE_STATUS",
            component: module4913,
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
