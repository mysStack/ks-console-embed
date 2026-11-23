import "unpacked/module-15.js";
import "unpacked/module-5.js";
import module61 from "unpacked/module-61.js";
import { getIndexRoute } from "utils/router.config";
import module4044 from "pages/whizard-telemetry/alerts";
import module4046 from "pages/whizard-telemetry/alert-rules";
import module4050 from "pages/whizard-telemetry/layout";
import module4051 from "pages/whizard-telemetry/inner";
import module4078 from "pages/whizard-telemetry/overview";
import module4110 from "pages/whizard-telemetry/storageclasses";
import module4111 from "pages/whizard-telemetry/volume-snapshots";
import module4116 from "pages/whizard-telemetry/volume-snapshot-classes";
import module4117 from "pages/whizard-telemetry/volumes";
import module4123 from "pages/whizard-telemetry/nodes";
import module4125 from "pages/whizard-telemetry/edgenodes";
import module4127 from "pages/whizard-telemetry/projects";
import module4128 from "pages/whizard-telemetry/customresources";
import module4129 from "pages/whizard-telemetry/deployments";
import module4130 from "pages/whizard-telemetry/statefulsets";
import module4131 from "pages/whizard-telemetry/daemonsets";
import module4132 from "pages/whizard-telemetry/jobs";
import module4133 from "pages/whizard-telemetry/cronjobs";
import module4134 from "pages/whizard-telemetry/pods";
import module4136 from "pages/whizard-telemetry/services";
import module4137 from "pages/whizard-telemetry/monitor-cluster";
import module4152 from "pages/whizard-telemetry/monitor-resource";
import module4166 from "pages/whizard-telemetry/log-collections";
import module4171 from "pages/whizard-telemetry/custom-monitoring";
import module4172 from "pages/whizard-telemetry/ingresses";
import module4173 from "pages/whizard-telemetry/detail-routes";
import module4281 from "pages/whizard-telemetry/gateways";
import module4287 from "pages/whizard-telemetry/metrics/layout";
import module4289 from "pages/whizard-telemetry/metrics/ranking";
import module4298 from "pages/whizard-telemetry/metrics/overview";
import module4322 from "pages/whizard-telemetry/metrics/custom-rules";
import module4324 from "pages/whizard-telemetry/metrics/builtin-rules";
import module4325 from "pages/whizard-telemetry/metrics/custom-alerts";
import module4326 from "pages/whizard-telemetry/metrics/builtin-alerts";
import module4327 from "pages/whizard-telemetry/metrics/pods";
import module4332 from "pages/whizard-telemetry/metrics/alerting/rules/Detail";
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
