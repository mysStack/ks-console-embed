import "./module-15.js";
import "./module-5.js";
import module61 from "./module-61.js";
import { getIndexRoute } from "./module-317.js";
import module4934 from "./module-4934.js";
import module4935 from "./module-4935.js";
import module4950 from "./module-4950.js";
import module4951 from "./module-4951.js";
import module4953 from "./module-4953.js";
import module4954 from "./module-4954.js";
import module4955 from "./module-4955.js";
import module4956 from "./module-4956.js";
import module4958 from "./module-4958.js";
import module4963 from "./module-4963.js";
import module4964 from "./module-4964.js";
import module4965 from "./module-4965.js";
import module4971 from "./module-4971.js";
import module4974 from "./module-4974.js";
import module4975 from "./module-4975.js";
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
