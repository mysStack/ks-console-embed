import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module815 from "./module-815.js";
import module4729 from "./module-4729.js";
import module4731 from "./module-4731.js";
export default function(path) {
    return [
        {
            path: `${path}/data`,
            title: "DATA",
            component: module4729,
            exact: true
        },
        {
            path: `${path}/history`,
            title: "HISTORICAL_VERSIONS",
            component: module4731,
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
            to: `${path}/data`,
            exact: true
        })
    ];
};
