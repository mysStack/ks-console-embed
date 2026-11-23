import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module4431 from "unpacked/module-4431.js";
import module4435 from "unpacked/module-4435.js";
const path = "/workspaces/:workspace/edge-apps/:name";
const c = [
    {
        path: `${path}/versions`,
        title: "APP_TEMPLATE_VERSION",
        component: module4431,
        exact: true
    },
    {
        path: `${path}/instances`,
        title: "APP_TEMPLATE_INSTANCES",
        component: module4435,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/versions`,
        exact: true
    })
];
export default c;
