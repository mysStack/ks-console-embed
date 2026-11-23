import "unpacked/module-15.js";
import module4174 from "pages/whizard-telemetry/alert-rules/Detail";
import module4186 from "pages/whizard-telemetry/projects/volume-snapshots/Detail";
import module4190 from "pages/whizard-telemetry/projects/volumes/Detail";
import module4191 from "pages/whizard-telemetry/projects/pods/ContainerDetail";
import module4192 from "pages/whizard-telemetry/projects/ingresses/Detail";
import module4193 from "pages/whizard-telemetry/projects/pods/Detail";
import module4194 from "pages/whizard-telemetry/projects/services/Detail";
import module4195 from "pages/whizard-telemetry/projects/cronjobs/Detail";
import module4196 from "pages/whizard-telemetry/projects/jobs/Detail";
import module4197 from "pages/whizard-telemetry/projects/daemonsets/Detail";
import module4201 from "pages/whizard-telemetry/projects/statefulsets/Detail";
import module4206 from "pages/whizard-telemetry/projects/deployments/Detail";
import module4208 from "pages/whizard-telemetry/volume-snapshot-content/Detail";
import module4212 from "pages/whizard-telemetry/volume-snapshot-classes/Detail";
import module4216 from "pages/whizard-telemetry/pv/Detail";
import module4217 from "pages/whizard-telemetry/projects/Layout";
import module4218 from "pages/whizard-telemetry/nodes/Detail";
import module4229 from "pages/whizard-telemetry/edgenodes/Detail";
import module4239 from "pages/whizard-telemetry/projects/Detail";
import module4247 from "pages/whizard-telemetry/storageclasses/Detail";
import module4251 from "pages/whizard-telemetry/customresources/Detail";
import module4255 from "pages/whizard-telemetry/log-collections/Detail";
import module4260 from "pages/whizard-telemetry/gateways/Detail";
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
