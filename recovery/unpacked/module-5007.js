import "./module-15.js";
import "./module-5.js";
import module61 from "./module-61.js";
import { getIndexRoute } from "./module-317.js";
import module815 from "./module-815.js";
import module821 from "./module-821.js";
import module5008 from "./module-5008.js";
import module5010 from "./module-5010.js";
export default function(path, t) {
    return [
        {
            path: `${path}/resource-status`,
            title: "RESOURCE_STATUS",
            component: module5008,
            exact: true
        }
    ].concat(module61(t.isFedManaged ? [
        {
            path: `${path}/access`,
            title: "ACCESS_INFORMATION",
            component: module5010,
            exact: true
        }
    ] : []), [
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
    ]);
};
