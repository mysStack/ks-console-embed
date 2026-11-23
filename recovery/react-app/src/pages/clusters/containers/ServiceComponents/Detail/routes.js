import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import component from "pages/clusters/containers/ServiceComponents/Detail/ServiceDetails";
const path = "/clusters/:cluster/components/:namespace/:name";
const i = [
    {
        path: `${path}/service-details`,
        title: "POD_PL",
        component,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/service-details`,
        exact: true
    })
];
export default i;
