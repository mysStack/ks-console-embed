import "./module-15.js";
import module1216 from "./module-1216.js";
import module1402 from "./module-1402.js";
import module1221 from "./module-1221.js";
import module1222 from "./module-1222.js";
import module1224 from "./module-1224.js";
import module1225 from "./module-1225.js";
import module1227 from "./module-1227.js";
import module1404 from "./module-1404.js";
import module1405 from "./module-1405.js";
import module1406 from "./module-1406.js";
import module1228 from "./module-1228.js";
import module1229 from "./module-1229.js";
import module1830 from "./module-1830.js";
import module1230 from "./module-1230.js";
import module1409 from "./module-1409.js";
import { ClusterAlertPolicyDetail } from "./module-1833.js";
import module3933 from "./module-3933.js";
import module3937 from "./module-3937.js";
import module1835 from "./module-1835.js";
import module3946 from "./module-3946.js";
import module3947 from "./module-3947.js";
import module3959 from "./module-3959.js";
import module3969 from "./module-3969.js";
import module3991 from "./module-3991.js";
import module3995 from "./module-3995.js";
import module3998 from "./module-3998.js";
import module4002 from "./module-4002.js";
import module4007 from "./module-4007.js";
import module4012 from "./module-4012.js";
import module1234 from "./module-1234.js";
const w = "/clusters/:cluster";
const L = [
    {
        path: `${w}/nodes/:node`,
        component: module3947
    },
    {
        path: `${w}/edgenodes/:node`,
        component: module3959
    },
    {
        path: `${w}/customresources/:name`,
        component: module3998
    },
    {
        path: `${w}/roles/:name`,
        component: module4002
    },
    {
        path: [
            `${w}/alert-rules/builtin/:name`,
            `${w}/alert-rules/:name`
        ],
        component: ClusterAlertPolicyDetail
    },
    {
        path: `${w}/log-collections/:component/:name`,
        component: module4007
    },
    {
        path: `${w}/components/:namespace/:name`,
        component: module3995
    },
    {
        path: `${w}/gateways/:component/:gatewayName`,
        component: module1234
    },
    {
        path: `${w}/storageclasses/:name`,
        component: module3991
    },
    {
        path: `${w}/ippools/:name`,
        component: module4012
    },
    {
        path: `${w}/pv/:name`,
        component: module1835
    },
    {
        path: `${w}/volume-snapshot-content/:name`,
        component: module3933
    },
    {
        path: `${w}/volume-snapshot-classes/:name`,
        component: module3937
    },
    {
        path: `${w}/projects/:namespace`,
        component: module3946,
        routes: [
            {
                path: `${w}/projects/:namespace/deployments/:name`,
                component: module1216
            },
            {
                path: `${w}/projects/:namespace/statefulsets/:name`,
                component: module1402
            },
            {
                path: `${w}/projects/:namespace/daemonsets/:name`,
                component: module1221
            },
            {
                path: `${w}/projects/:namespace/jobs/:name`,
                component: module1222
            },
            {
                path: `${w}/projects/:namespace/cronjobs/:name`,
                component: module1224
            },
            {
                path: `${w}/projects/:namespace/services/:name`,
                component: module1225
            },
            {
                path: `${w}/projects/:namespace/ingresses/:name`,
                component: module1227
            },
            {
                path: `${w}/projects/:namespace/secrets/:name`,
                component: module1404
            },
            {
                path: `${w}/projects/:namespace/configmaps/:name`,
                component: module1405
            },
            {
                path: `${w}/projects/:namespace/serviceaccounts/:name`,
                component: module1406
            },
            {
                path: `${w}/projects/:namespace/pods/:podName/containers/:containerName`,
                component: module1229
            },
            {
                path: `${w}/projects/:namespace/pods/:podName`,
                component: module1228
            },
            {
                path: `${w}/projects/:namespace/volume-snapshots/:name`,
                component: module1409
            },
            {
                path: `${w}/projects/:namespace/volumes/:name`,
                component: module1230
            },
            {
                path: `${w}/projects/:namespace/networkpolicies/:name`,
                component: module1830
            },
            {
                path: `${w}/projects/:namespace`,
                component: module3969
            }
        ]
    }
];
export default L;
