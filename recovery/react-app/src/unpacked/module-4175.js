import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module4176 from "unpacked/module-4176.js";
import module4183 from "unpacked/module-4183.js";
export default function(path) {
    return [
        {
            path: `${path}/rules`,
            title: "ALERTING_RULE",
            component: module4176,
            exact: true
        },
        {
            path: `${path}/messages`,
            title: "ALERTING_MESSAGE_PL",
            component: module4183,
            exact: true
        },
        getIndexRoute({
            path,
            to: `${path}/rules`,
            exact: true
        })
    ];
};
