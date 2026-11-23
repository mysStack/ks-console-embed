import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import component from "pages/clusters/containers/CustomResources/Detail/ResourceStatus";
const path = "/clusters/:cluster/customresources/:name";
const i = [
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
export default i;
