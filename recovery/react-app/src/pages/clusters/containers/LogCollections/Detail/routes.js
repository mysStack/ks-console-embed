import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import component from "pages/clusters/containers/LogCollections/Detail/Configuration";
const path = "/clusters/:cluster/log-collections/:component/:name";
const i = [
    {
        path: `${path}/resource-status`,
        title: "RESOURCE_STATUS",
        component,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/resource-status`,
        exact: true
    })
];
export default i;
