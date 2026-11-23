import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module815 from "./module-815.js";
import module962 from "./module-962.js";
import module821 from "./module-821.js";
import module1071 from "./module-1071.js";
import module1072 from "./module-1072.js";
import module4203 from "./module-4203.js";
export default function(path) {
    return [
        {
            path: `${path}/resource-status`,
            title: "RESOURCE_STATUS",
            component: module4203,
            exact: true
        },
        {
            path: `${path}/revision-control`,
            title: "REVISION_RECORDS",
            component: module1071,
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
            component: module1072,
            exact: true
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
