import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module815 from "unpacked/module-815.js";
import module4718 from "unpacked/module-4718.js";
import module4719 from "unpacked/module-4719.js";
export default function(path) {
    return [
        {
            path: `${path}/instances`,
            title: "INSTANCE_PL",
            component: module4719,
            exact: true
        },
        {
            path: `${path}/metadata`,
            title: "METADATA",
            component: module4718,
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
            to: `${path}/instances`,
            exact: true
        })
    ];
};
