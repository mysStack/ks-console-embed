import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module815 from "./module-815.js";
import module821 from "./module-821.js";
import module3872 from "./module-3872.js";
export default function(path) {
    return [
        {
            path: `${path}/records`,
            title: "RUN_RECORDS",
            component: module3872,
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
            exact: true,
            clusterModule: "whizard-monitoring"
        },
        getIndexRoute({
            path,
            to: `${path}/records`,
            exact: true
        })
    ];
};
