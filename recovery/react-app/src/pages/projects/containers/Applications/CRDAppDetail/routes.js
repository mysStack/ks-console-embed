import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module4744 from "pages/projects/containers/Applications/CRDAppDetail/Components";
import module4751 from "pages/projects/containers/Applications/CRDAppDetail/TrafficManangement/index";
import module4774 from "pages/projects/containers/Applications/CRDAppDetail/GrayRelease";
import module4776 from "pages/projects/containers/Applications/CRDAppDetail/Tracing/index";
const path = "/:workspace/clusters/:cluster/projects/:namespace/composing/:name";
const u = [
    {
        path: `${path}/components`,
        title: "RESOURCE_STATUS",
        component: module4744,
        exact: true
    },
    {
        path: `${path}/traffic`,
        title: "TRAFFIC_MONITORING",
        component: module4751,
        clusterModule: "servicemesh",
        exact: true
    },
    {
        path: `${path}/grayrelease`,
        title: "GRAYSCALE_RELEASE",
        component: module4774,
        clusterModule: "servicemesh",
        exact: true
    },
    {
        path: `${path}/tracing`,
        title: "TRACING",
        component: module4776,
        clusterModule: "servicemesh",
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/components`,
        exact: true
    })
];
export default u;
