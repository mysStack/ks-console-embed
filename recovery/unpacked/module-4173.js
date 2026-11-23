import "./module-15.js";
import module4174 from "./module-4174.js";
import module4186 from "./module-4186.js";
import module4190 from "./module-4190.js";
import module4191 from "./module-4191.js";
import module4192 from "./module-4192.js";
import module4193 from "./module-4193.js";
import module4194 from "./module-4194.js";
import module4195 from "./module-4195.js";
import module4196 from "./module-4196.js";
import module4197 from "./module-4197.js";
import module4201 from "./module-4201.js";
import module4206 from "./module-4206.js";
import module4208 from "./module-4208.js";
import module4212 from "./module-4212.js";
import module4216 from "./module-4216.js";
import module4217 from "./module-4217.js";
import module4218 from "./module-4218.js";
import module4229 from "./module-4229.js";
import module4239 from "./module-4239.js";
import module4247 from "./module-4247.js";
import module4251 from "./module-4251.js";
import module4255 from "./module-4255.js";
import module4260 from "./module-4260.js";
const A = "/whizard-telemetry/:cluster";
const P = [
    {
        path: `${A}/nodes/:node`,
        component: module4218
    },
    {
        path: `${A}/edgenodes/:node`,
        component: module4229
    },
    {
        path: `${A}/customresources/:name`,
        component: module4251
    },
    {
        path: [
            `${A}/alert-rules/builtin/:name`,
            `${A}/alert-rules/:name`
        ],
        component: module4174
    },
    {
        path: `${A}/log-collections/:component/:name`,
        component: module4255
    },
    {
        path: `${A}/gateways/:component/:gatewayName`,
        component: module4260
    },
    {
        path: `${A}/storageclasses/:name`,
        component: module4247
    },
    {
        path: `${A}/pv/:name`,
        component: module4216
    },
    {
        path: `${A}/volume-snapshot-content/:name`,
        component: module4208
    },
    {
        path: `${A}/volume-snapshot-classes/:name`,
        component: module4212
    },
    {
        path: `${A}/projects/:namespace`,
        component: module4217,
        routes: [
            {
                path: `${A}/projects/:namespace/deployments/:name`,
                component: module4206
            },
            {
                path: `${A}/projects/:namespace/statefulsets/:name`,
                component: module4201
            },
            {
                path: `${A}/projects/:namespace/daemonsets/:name`,
                component: module4197
            },
            {
                path: `${A}/projects/:namespace/jobs/:name`,
                component: module4196
            },
            {
                path: `${A}/projects/:namespace/cronjobs/:name`,
                component: module4195
            },
            {
                path: `${A}/projects/:namespace/services/:name`,
                component: module4194
            },
            {
                path: `${A}/projects/:namespace/ingresses/:name`,
                component: module4192
            },
            {
                path: `${A}/projects/:namespace/pods/:podName/containers/:containerName`,
                component: module4191
            },
            {
                path: `${A}/projects/:namespace/pods/:podName`,
                component: module4193
            },
            {
                path: `${A}/projects/:namespace/volume-snapshots/:name`,
                component: module4186
            },
            {
                path: `${A}/projects/:namespace/volumes/:name`,
                component: module4190
            },
            {
                path: `${A}/projects/:namespace`,
                component: module4239
            }
        ]
    }
];
export default P;
