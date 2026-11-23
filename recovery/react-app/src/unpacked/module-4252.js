import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import component from "unpacked/module-4253.js";
const path = "/clusters/:cluster/customresources/:name";
const o = [
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
export default o;
