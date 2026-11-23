import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module4334 from "unpacked/module-4334.js";
import module4337 from "unpacked/module-4337.js";
export default function(path) {
    return [
        {
            path: `${path}/rules`,
            title: "ALERTING_RULE",
            component: module4334,
            exact: true
        },
        {
            path: `${path}/messages`,
            title: "ALERTING_MESSAGE_PL",
            component: module4337,
            exact: true
        },
        getIndexRoute({
            path,
            to: `${path}/rules`,
            exact: true
        })
    ];
};
