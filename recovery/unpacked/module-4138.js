import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module4139 from "./module-4139.js";
import module4141 from "./module-4141.js";
import module4144 from "./module-4144.js";
import module4146 from "./module-4146.js";
import module4148 from "./module-4148.js";
import module4150 from "./module-4150.js";
const path = "/whizard-telemetry/:cluster/monitor-cluster";
const f = [
    {
        path: `${path}/overview`,
        title: "Overview",
        component: module4139,
        exact: true
    },
    {
        path: `${path}/resource`,
        title: "PHYSICAL_RESOURCES_MONITORING",
        component: module4141,
        exact: true
    },
    {
        path: `${path}/etcd`,
        title: "ETCD_MONITORING",
        component: module4144,
        requireETCD: true,
        exact: true
    },
    {
        path: `${path}/api-server`,
        title: "API_SERVER_MONITORING",
        component: module4146,
        exact: true
    },
    {
        path: `${path}/scheduler`,
        title: "SCHEDULER_MONITORING",
        component: module4148,
        exact: true
    },
    {
        path: `${path}/ranking`,
        title: "RESOURCE_USAGE_RANKING",
        component: module4150,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/overview`,
        exact: true
    })
];
export default f;
