import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module5251 from "./module-5251.js";
import module5254 from "./module-5254.js";
export default function(path) {
    return [
        {
            path: `${path}/rules`,
            title: "ALERTING_RULE",
            component: module5251,
            exact: true
        },
        {
            path: `${path}/messages`,
            title: "ALERTING_MESSAGE_PL",
            component: module5254,
            exact: true
        },
        getIndexRoute({
            path,
            to: `${path}/rules`,
            exact: true
        })
    ];
};
