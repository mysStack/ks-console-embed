import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module3785 from "pages/clusters/containers/Monitor/Resource/Usage";
import module3792 from "pages/clusters/containers/Monitor/Resource/Ranking";
const path = "/clusters/:cluster/monitor-resource";
const c = [
    {
        path: `${path}/usage`,
        title: "RESOURCE_USAGE",
        component: module3785,
        exact: true
    },
    {
        path: `${path}/ranking`,
        title: "USAGE_RANKING",
        component: module3792,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/usage`,
        exact: true
    })
];
export default c;
