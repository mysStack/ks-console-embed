import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module4744 from "./module-4744.js";
import module4751 from "./module-4751.js";
import module4774 from "./module-4774.js";
import module4776 from "./module-4776.js";
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
