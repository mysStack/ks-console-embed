import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module821 from "unpacked/module-821.js";
import module4736 from "unpacked/module-4736.js";
export default function(path) {
    return [
        {
            path: `${path}/resource-status`,
            title: "RESOURCE_STATUS",
            component: module4736,
            exact: true
        },
        {
            path: `${path}/metadata`,
            title: "METADATA",
            component: module821,
            exact: true
        },
        getIndexRoute({
            path,
            to: `${path}/resource-status`,
            exact: true
        })
    ];
};
