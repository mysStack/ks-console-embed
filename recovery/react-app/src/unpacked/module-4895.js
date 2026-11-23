import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module4896 from "unpacked/module-4896.js";
import module4903 from "unpacked/module-4903.js";
import module4904 from "unpacked/module-4904.js";
import module4905 from "unpacked/module-4905.js";
import module4906 from "unpacked/module-4906.js";
export default function(path) {
    return [
        {
            path: `${path}/records`,
            title: "RUN_RECORDS",
            component: module4896,
            excat: true
        },
        {
            path: `${path}/resource-status`,
            title: "RESOURCE_STATUS",
            component: module4903,
            excat: true
        },
        {
            path: `${path}/image-artifacts`,
            title: "IMAGE_ARTIFACTS",
            component: module4906,
            excat: true
        },
        {
            path: `${path}/env`,
            title: "ENVIRONMENT_VARIABLE_PL",
            component: module4904,
            excat: true
        },
        {
            path: `${path}/events`,
            title: "EVENT_PL",
            component: module4905,
            excat: true
        },
        getIndexRoute({
            path,
            to: `${path}/records`,
            exact: true
        })
    ];
};
