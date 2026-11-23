import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module3927 from "./module-3927.js";
import module3930 from "./module-3930.js";
export default function(path) {
    return [
        {
            path: `${path}/rules`,
            title: "ALERTING_RULE",
            component: module3927,
            exact: true
        },
        {
            path: `${path}/messages`,
            title: "ALERTING_MESSAGE_PL",
            component: module3930,
            exact: true
        },
        getIndexRoute({
            path,
            to: `${path}/rules`,
            exact: true
        })
    ];
};
