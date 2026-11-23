import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module4978 from "./module-4978.js";
import module4983 from "./module-4983.js";
import module4989 from "./module-4989.js";
import module4992 from "./module-4992.js";
const path = "/:workspace/federatedprojects/:namespace/applications/:name";
const s = [
    {
        path: `${path}/components`,
        title: "RESOURCE_STATUS",
        component: module4978,
        exact: true
    },
    {
        path: `${path}/ingresses`,
        title: "EXTERNAL_ACCESS",
        component: module4983,
        exact: true
    },
    {
        path: `${path}/traffic`,
        title: "TRAFFIC_MANAGEMENT",
        component: module4989,
        exact: true
    },
    {
        path: `${path}/tracing`,
        title: "TRACING",
        component: module4992,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/components`,
        exact: true
    })
];
export default s;
