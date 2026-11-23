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
import module5227 from "./module-5227.js";
import module5233 from "./module-5233.js";
import module5237 from "./module-5237.js";
import module5238 from "./module-5238.js";
import module5249 from "./module-5249.js";
import module5257 from "./module-5257.js";
import module2002 from "./module-2002.js";
const C = "/v2/edgewize/clusters/:cluster";
const N = [
    {
        path: `${C}/nodes/:node`,
        component: module5238
    },
    {
        path: `${C}/fota/:node`,
        component: module5233
    },
    {
        path: [
            `${C}/rule-group/builtin/:name`,
            `${C}/rule-group/:name`
        ],
        component: module5249
    },
    {
        path: `${C}/roles/:name`,
        component: module5257
    },
    {
        path: `${C}/edgeippool/:name`,
        component: module2002
    },
    {
        path: `${C}/projects/:namespace`,
        component: module5237,
        routes: [
            {
                path: `${C}/projects/:namespace/deployments/:name`,
                component: module1216
            },
            {
                path: `${C}/projects/:namespace/statefulsets/:name`,
                component: module1402
            },
            {
                path: `${C}/projects/:namespace/daemonsets/:name`,
                component: module1221
            },
            {
                path: `${C}/projects/:namespace/jobs/:name`,
                component: module1222
            },
            {
                path: `${C}/projects/:namespace/cronjobs/:name`,
                component: module1224
            },
            {
                path: `${C}/projects/:namespace/services/:name`,
                component: module1225
            },
            {
                path: `${C}/projects/:namespace/ingresses/:name`,
                component: module1227
            },
            {
                path: `${C}/projects/:namespace/secrets/:name`,
                component: module1404
            },
            {
                path: `${C}/projects/:namespace/configmaps/:name`,
                component: module1405
            },
            {
                path: `${C}/projects/:namespace/serviceaccounts/:name`,
                component: module1406
            },
            {
                path: `${C}/projects/:namespace/pods/:podName/containers/:containerName`,
                component: module1229
            },
            {
                path: `${C}/projects/:namespace/pods/:podName`,
                component: module1228
            },
            {
                path: `${C}/projects/:namespace/volume-snapshots/:name`,
                component: module1409
            },
            {
                path: `${C}/projects/:namespace/volumes/:name`,
                component: module1230
            },
            {
                path: `${C}/projects/:namespace/networkpolicies/:name`,
                component: module1830
            },
            {
                path: `${C}/projects/:namespace`,
                component: module5227
            }
        ]
    }
];
export default N;
