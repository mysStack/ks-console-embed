import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module815 from "./module-815.js";
import module962 from "./module-962.js";
import module821 from "./module-821.js";
import module3868 from "./module-3868.js";
import module3869 from "./module-3869.js";
export default function(path) {
    return [
        {
            path: `${path}/records`,
            title: "RUN_RECORDS",
            component: module3869,
            exact: true
        },
        {
            path: `${path}/resource-status`,
            title: "RESOURCE_STATUS",
            component: module3868,
            exact: true
        },
        {
            path: `${path}/metadata`,
            title: "METADATA",
            component: module821,
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
            to: `${path}/records`,
            exact: true
        })
    ];
};
