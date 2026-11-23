import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module815 from "./module-815.js";
import module821 from "./module-821.js";
import module3883 from "./module-3883.js";
export default function(path) {
    return [
        {
            path: `${path}/resource-status`,
            title: "RESOURCE_STATUS",
            component: module3883,
            exact: true
        },
        {
            path: `${path}/metadata`,
            title: "METADATA",
            component: module821,
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
