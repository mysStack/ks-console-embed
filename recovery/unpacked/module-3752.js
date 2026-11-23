import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module3753 from "./module-3753.js";
import module3772 from "./module-3772.js";
import module3774 from "./module-3774.js";
import module3776 from "./module-3776.js";
import module3778 from "./module-3778.js";
import module3780 from "./module-3780.js";
const path = "/clusters/:cluster/monitor-cluster";
const f = [
    {
        path: `${path}/overview`,
        title: "OVERVIEW",
        component: module3753,
        exact: true
    },
    {
        path: `${path}/resource`,
        title: "PHYSICAL_RESOURCES_MONITORING",
        component: module3772,
        exact: true
    },
    {
        path: `${path}/etcd`,
        title: "ETCD_MONITORING",
        component: module3774,
        requireETCD: true,
        exact: true
    },
    {
        path: `${path}/api-server`,
        title: "API_SERVER_MONITORING",
        component: module3776,
        exact: true
    },
    {
        path: `${path}/scheduler`,
        title: "SCHEDULER_MONITORING",
        component: module3778,
        exact: true
    },
    {
        path: `${path}/ranking`,
        title: "RESOURCE_USAGE_RANKING",
        component: module3780,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/overview`,
        exact: true
    })
];
export default f;
