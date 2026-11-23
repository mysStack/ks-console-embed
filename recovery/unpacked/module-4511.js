import "./module-15.js";
import "./module-5.js";
import module61 from "./module-61.js";
import { getIndexRoute } from "./module-317.js";
import module4512 from "./module-4512.js";
import module4516 from "./module-4516.js";
import module4517 from "./module-4517.js";
import module4541 from "./module-4541.js";
import module4542 from "./module-4542.js";
import module4543 from "./module-4543.js";
import module4544 from "./module-4544.js";
import module4545 from "./module-4545.js";
import module4546 from "./module-4546.js";
import module4547 from "./module-4547.js";
import module4549 from "./module-4549.js";
import module4550 from "./module-4550.js";
import module4551 from "./module-4551.js";
import module4552 from "./module-4552.js";
import module1900 from "./module-1900.js";
import module4621 from "./module-4621.js";
import module4623 from "./module-4623.js";
import module4625 from "./module-4625.js";
import module4627 from "./module-4627.js";
import module4630 from "./module-4630.js";
import module4631 from "./module-4631.js";
import module4632 from "./module-4632.js";
import module4634 from "./module-4634.js";
import module4640 from "./module-4640.js";
import module4641 from "./module-4641.js";
import module4645 from "./module-4645.js";
import module4646 from "./module-4646.js";
import module4647 from "./module-4647.js";
import module4648 from "./module-4648.js";
import module1785 from "./module-1785.js";
import module1783 from "./module-1783.js";
import module4651 from "./module-4651.js";
import module4654 from "./module-4654.js";
import module4661 from "./module-4661.js";
import module4664 from "./module-4664.js";
import module4668 from "./module-4668.js";
import module4715 from "./module-4715.js";
import module4930 from "./module-4930.js";
import module4932 from "./module-4932.js";
const path = "/:workspace/clusters/:cluster/projects/:namespace";
const z = [].concat(module61(module4715(path)), [
    {
        path,
        component: module4516,
        routes: [].concat(module61(module4668), [
            {
                path: `${path}/overview`,
                component: module4517,
                exact: true
            },
            {
                path: `${path}/edgeappsets`,
                component: module4661,
                exact: true
            },
            {
                path: `${path}/applications/others`,
                component: module4543,
                exact: true
            },
            {
                path: `${path}/applications/database`,
                component: module4512,
                exact: true
            },
            {
                path: `${path}/applications/template`,
                component: module4542,
                exact: true
            },
            {
                path: `${path}/deployments`,
                component: module4544,
                exact: true
            },
            {
                path: `${path}/statefulsets`,
                component: module4545,
                exact: true
            },
            {
                path: `${path}/daemonsets`,
                component: module4546,
                exact: true
            },
            {
                path: `${path}/pods`,
                component: module4547,
                exact: true
            },
            {
                path: `${path}/jobs`,
                component: module4549,
                exact: true
            },
            {
                path: `${path}/s2ibuilders`,
                component: module4550,
                exact: true
            },
            {
                path: `${path}/cronjobs`,
                component: module4551,
                exact: true
            },
            {
                path: `${path}/services`,
                component: module4552,
                exact: true
            },
            {
                path: `${path}/grayrelease`,
                component: module1900,
                exact: true
            },
            {
                path: `${path}/composing`,
                component: module4541,
                exact: true
            },
            {
                path: `${path}/ingresses`,
                component: module4621,
                exact: true
            },
            {
                path: `${path}/volumes`,
                component: module4623,
                exact: true
            },
            {
                path: `${path}/volume-snapshots`,
                component: module4625,
                exact: true
            },
            {
                path: `${path}/base-info`,
                component: module4627,
                exact: true
            },
            {
                path: `${path}/networkpolicies`,
                component: module4654,
                exact: true
            },
            {
                path: `${path}/configmaps`,
                component: module4630,
                exact: true
            },
            {
                path: `${path}/serviceaccounts`,
                component: module4631,
                exact: true
            },
            {
                path: `${path}/secrets`,
                component: module4632,
                exact: true
            },
            {
                path: `${path}/microservices`,
                component: module4634,
                exact: true
            },
            {
                path: `${path}/configurations`,
                component: module4640,
                exact: true
            },
            {
                path: `${path}/microservicegateways`,
                component: module4641,
                exact: true
            },
            {
                path: `${path}/servicerouting`,
                component: module4645,
                exact: true
            },
            {
                path: `${path}/roles`,
                component: module4646,
                exact: true
            },
            {
                path: `${path}/members`,
                component: module4647,
                exact: true
            },
            {
                path: `${path}/log-collections`,
                component: module4648,
                exact: true
            },
            {
                path: `${path}/gateways`,
                component: module4930,
                exact: true
            },
            {
                path: `${path}/alert-rules`,
                component: module1785,
                exact: true
            },
            {
                path: `${path}/alerts`,
                component: module1783,
                exact: true
            },
            {
                path: `${path}/custom-monitoring`,
                component: module4651,
                exact: true,
                clusterModule: "whizard-monitoring"
            },
            {
                path: `${path}/custom-scaling`,
                component: module4932,
                exact: true
            },
            {
                path: `${path}/node-groups`,
                component: module4664,
                exact: true
            },
            getIndexRoute({
                path: `${path}/workloads`,
                to: `${path}/deployments`,
                exact: true
            }),
            getIndexRoute({
                path: `${path}/applications`,
                to: `${path}/applications/template`,
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
        ])
    }
]);
export default z;
