import "./module-15.js";
import "./module-5.js";
import module61 from "./module-61.js";
import { getIndexRoute } from "./module-317.js";
import module4044 from "./module-4044.js";
import module4046 from "./module-4046.js";
import module4050 from "./module-4050.js";
import module4051 from "./module-4051.js";
import module4078 from "./module-4078.js";
import module4110 from "./module-4110.js";
import module4111 from "./module-4111.js";
import module4116 from "./module-4116.js";
import module4117 from "./module-4117.js";
import module4123 from "./module-4123.js";
import module4125 from "./module-4125.js";
import module4127 from "./module-4127.js";
import module4128 from "./module-4128.js";
import module4129 from "./module-4129.js";
import module4130 from "./module-4130.js";
import module4131 from "./module-4131.js";
import module4132 from "./module-4132.js";
import module4133 from "./module-4133.js";
import module4134 from "./module-4134.js";
import module4136 from "./module-4136.js";
import module4137 from "./module-4137.js";
import module4152 from "./module-4152.js";
import module4166 from "./module-4166.js";
import module4171 from "./module-4171.js";
import module4172 from "./module-4172.js";
import module4173 from "./module-4173.js";
import module4281 from "./module-4281.js";
import module4287 from "./module-4287.js";
import module4289 from "./module-4289.js";
import module4298 from "./module-4298.js";
import module4322 from "./module-4322.js";
import module4324 from "./module-4324.js";
import module4325 from "./module-4325.js";
import module4326 from "./module-4326.js";
import module4327 from "./module-4327.js";
import module4332 from "./module-4332.js";
export const PATH = "/whizard-telemetry/:cluster";
export const METRICS_PATH = "/whizard-telemetry/metrics";
const B = [
    getIndexRoute({
        path: "/whizard-telemetry",
        to: "/whizard-telemetry/metrics/overview",
        exact: true
    }),
    {
        path: [
            `${METRICS_PATH}/alerting/builtin-rules/:name`,
            `${METRICS_PATH}/alerting/custom-rules/:name`
        ],
        component: module4332
    },
    {
        path: METRICS_PATH,
        component: module4287,
        routes: [
            {
                path: `${METRICS_PATH}/overview`,
                component: module4298
            },
            {
                path: `${METRICS_PATH}/ranking`,
                component: module4289
            },
            {
                path: `${METRICS_PATH}/alerting/builtin-alerts`,
                component: module4326
            },
            {
                path: `${METRICS_PATH}/alerting/custom-alerts`,
                component: module4325
            },
            {
                path: `${METRICS_PATH}/alerting/builtin-rules`,
                component: module4324
            },
            {
                path: `${METRICS_PATH}/alerting/custom-rules`,
                component: module4322
            },
            {
                path: `${METRICS_PATH}/pods`,
                component: module4327
            },
            getIndexRoute({
                path: METRICS_PATH,
                to: `${METRICS_PATH}/overview`,
                exact: true
            }),
            getIndexRoute({
                path: `${METRICS_PATH}/alerting`,
                to: `${METRICS_PATH}/alerting/builtin-alerts`,
                exact: true
            }),
            getIndexRoute({
                path: "*",
                to: "/404",
                exact: true
            })
        ]
    },
    {
        path: PATH,
        component: module4050,
        routes: [].concat(module61(module4173), [
            {
                path: "",
                component: module4051,
                routes: [
                    {
                        path: `${PATH}/overview`,
                        component: module4078,
                        exact: true
                    },
                    {
                        path: `${PATH}/nodes`,
                        component: module4123
                    },
                    {
                        path: `${PATH}/edgenodes`,
                        component: module4125,
                        exact: true
                    },
                    {
                        path: `${PATH}/projects`,
                        component: module4127,
                        exact: true
                    },
                    {
                        path: `${PATH}/customresources`,
                        component: module4128,
                        exact: true
                    },
                    {
                        path: `${PATH}/deployments`,
                        component: module4129,
                        exact: true
                    },
                    {
                        path: `${PATH}/statefulsets`,
                        component: module4130,
                        exact: true
                    },
                    {
                        path: `${PATH}/daemonsets`,
                        component: module4131,
                        exact: true
                    },
                    {
                        path: `${PATH}/jobs`,
                        component: module4132,
                        exact: true
                    },
                    {
                        path: `${PATH}/cronjobs`,
                        component: module4133,
                        exact: true
                    },
                    {
                        path: `${PATH}/pods`,
                        component: module4134,
                        exact: true
                    },
                    {
                        path: `${PATH}/services`,
                        component: module4136,
                        exact: true
                    },
                    {
                        path: `${PATH}/ingresses`,
                        component: module4172,
                        exact: true
                    },
                    {
                        path: `${PATH}/storageclasses`,
                        component: module4110,
                        exact: true
                    },
                    {
                        path: `${PATH}/volumes`,
                        component: module4117
                    },
                    {
                        path: `${PATH}/volume-snapshots`,
                        component: module4111
                    },
                    {
                        path: `${PATH}/volume-snapshot-classes`,
                        component: module4116
                    },
                    {
                        path: `${PATH}/monitor-cluster`,
                        component: module4137
                    },
                    {
                        path: `${PATH}/monitor-resource`,
                        component: module4152
                    },
                    {
                        path: `${PATH}/alerts`,
                        component: module4044
                    },
                    {
                        path: `${PATH}/alert-rules`,
                        component: module4046
                    },
                    {
                        path: `${PATH}/storageclasses`,
                        component: module4110,
                        exact: true
                    },
                    {
                        path: `${PATH}/snapshots/:namespace?`,
                        component: module4111
                    },
                    {
                        path: `${PATH}/log-collections/:component`,
                        component: module4166
                    },
                    {
                        path: `${PATH}/custom-monitoring`,
                        component: module4171,
                        exact: true
                    },
                    {
                        path: `${PATH}/gateways/:component`,
                        component: module4281,
                        exact: true
                    },
                    getIndexRoute({
                        path: PATH,
                        to: `${PATH}/overview`,
                        exact: true
                    }),
                    getIndexRoute({
                        path: `${PATH}/workloads`,
                        to: `${PATH}/deployments`,
                        exact: true
                    }),
                    getIndexRoute({
                        path: `${PATH}/log-collections`,
                        to: `${PATH}/log-collections/logging`,
                        exact: true
                    }),
                    getIndexRoute({
                        path: `${PATH}/gateways`,
                        to: `${PATH}/gateways/cluster`,
                        exact: true
                    }),
                    getIndexRoute({
                        path: "*",
                        to: "/404",
                        exact: true
                    })
                ]
            }
        ])
    }
];
export default B;
