import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import component from "unpacked/module-4926.js";
export default function(path) {
    return [
        {
            path: `${path}/resources`,
            title: "RESOURCE_STATUS",
            component,
            exact: true
        },
        getIndexRoute({
            path,
            to: `${path}/resources`,
            exact: true
        })
    ];
};
