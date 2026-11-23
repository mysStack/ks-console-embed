import "unpacked/module-15.js";
import "unpacked/module-5.js";
import module61 from "unpacked/module-61.js";
import { getIndexRoute } from "utils/router.config";
import module4934 from "pages/fedprojects/layout";
import module4935 from "pages/fedprojects/containers/Overview";
import module4950 from "pages/fedprojects/applications";
import module4951 from "pages/fedprojects/deployments";
import module4953 from "pages/fedprojects/statefulsets";
import module4954 from "pages/fedprojects/services";
import module4955 from "pages/fedprojects/ingresses";
import module4956 from "pages/fedprojects/volumes";
import module4958 from "pages/fedprojects/base-info";
import module4963 from "pages/fedprojects/configmaps";
import module4964 from "pages/fedprojects/secrets";
import module4965 from "pages/fedprojects/quota";
import module4971 from "pages/fedprojects/log-collections";
import module4974 from "pages/fedprojects/gateways";
import module4975 from "pages/fedprojects/detail-routes";
const path = "/:workspace/federatedprojects/:namespace";
const O = [].concat(module61(module4975(path)), [
    {
        path,
        component: module4934,
        routes: [
            {
                path: `${path}/overview`,
                component: module4935,
                exact: true
            },
            {
                path: `${path}/applications`,
                component: module4950,
                exact: true
            },
            {
                path: `${path}/deployments`,
                component: module4951,
                exact: true
            },
            {
                path: `${path}/statefulsets`,
                component: module4953,
                exact: true
            },
            {
                path: `${path}/services`,
                component: module4954,
                exact: true
            },
            {
                path: `${path}/ingresses`,
                component: module4955,
                exact: true
            },
            {
                path: `${path}/volumes`,
                component: module4956,
                exact: true
            },
            {
                path: `${path}/base-info`,
                component: module4958,
                exact: true
            },
            {
                path: `${path}/configmaps`,
                component: module4963,
                exact: true
            },
            {
                path: `${path}/secrets`,
                component: module4964,
                exact: true
            },
            {
                path: `${path}/quota`,
                component: module4965,
                exact: true
            },
            {
                path: `${path}/gateways`,
                component: module4974,
                exact: true
            },
            {
                path: `${path}/log-collections`,
                component: module4971,
                exact: true
            },
            getIndexRoute({
                path: `${path}/workloads`,
                to: `${path}/deployments`,
                exact: true
            }),
            getIndexRoute({
                path,
                to: `${path}/overview`,
                exact: true
            }),
            getIndexRoute({
                path: "*",
                to: "/404",
                exact: true
            })
        ]
    }
]);
export default O;
