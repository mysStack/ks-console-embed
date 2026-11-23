import "unpacked/module-15.js";
import "unpacked/module-5.js";
import module61 from "unpacked/module-61.js";
import { getIndexRoute } from "utils/router.config";
import module4512 from "pages/projects/applications-database";
import module4516 from "pages/projects/layout";
import module4517 from "pages/projects/overview";
import module4541 from "pages/projects/composing";
import module4542 from "pages/projects/containers/Applications/OPApps";
import module4543 from "pages/projects/applications-others";
import module4544 from "pages/projects/deployments";
import module4545 from "pages/projects/statefulsets";
import module4546 from "pages/projects/daemonsets";
import module4547 from "pages/projects/pods";
import module4549 from "pages/projects/jobs";
import module4550 from "pages/projects/s2ibuilders";
import module4551 from "pages/projects/cronjobs";
import module4552 from "pages/projects/containers/Services";
import module1900 from "pages/projects/containers/GrayRelease";
import module4621 from "pages/projects/ingresses";
import module4623 from "pages/projects/volumes";
import module4625 from "pages/projects/volume-snapshots";
import module4627 from "pages/projects/containers/BaseInfo";
import module4630 from "pages/projects/configmaps";
import module4631 from "pages/projects/serviceaccounts";
import module4632 from "pages/projects/secrets";
import module4634 from "pages/projects/microservices";
import module4640 from "pages/projects/configurations";
import module4641 from "pages/projects/microservicegateways";
import module4645 from "pages/projects/servicerouting";
import module4646 from "pages/projects/containers/Roles";
import module4647 from "pages/projects/containers/Members";
import module4648 from "pages/projects/log-collections";
import module1785 from "pages/projects/alert-rules";
import module1783 from "pages/projects/alerts";
import module4651 from "pages/projects/custom-monitoring";
import module4654 from "pages/projects/containers/Network/Policies";
import module4661 from "pages/projects/edgeappsets";
import module4664 from "pages/projects/node-groups";
import module4668 from "pages/projects/routes/grayrelease";
import module4715 from "pages/projects/detail-routes";
import module4930 from "pages/projects/gateways";
import module4932 from "pages/projects/custom-scaling";
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
