import "unpacked/module-15.js";
import "unpacked/module-5.js";
import module61 from "unpacked/module-61.js";
import { getIndexRoute } from "utils/router.config";
import module5175 from "pages/edgewize/alerts";
import module5177 from "pages/edgewize/rule-group";
import module5181 from "pages/edgewize/secrets";
import module5183 from "pages/edgewize/node-groups";
import module5186 from "pages/edgewize/projects";
import module5187 from "pages/edgewize/jobs";
import module5188 from "pages/edgewize/pods";
import module5190 from "pages/edgewize/configmaps";
import module5191 from "pages/edgewize/fota";
import module5194 from "pages/edgewize/Clusters";
import module5198 from "pages/edgewize/services";
import module5199 from "pages/edgewize/cronjobs";
import module5200 from "pages/edgewize/layout";
import module5201 from "pages/edgewize/inner";
import module5202 from "pages/edgewize/resource-usage";
import module5215 from "pages/edgewize/daemonsets";
import module5216 from "pages/edgewize/deployments";
import module5217 from "pages/edgewize/statefulsets";
import module5218 from "pages/edgewize/nodes";
import module5220 from "pages/edgewize/base-info";
import module5225 from "pages/edgewize/members";
import module5226 from "unpacked/module-5226.js";
import module5270 from "pages/edgewize/roles";
import module5271 from "pages/edgewize/create";
import module2004 from "pages/node-groups/edgeippool";
const path = "/v2/edgewize/clusters/:cluster";
const w = [
    {
        path: "/v2/edgewize",
        component: module5194,
        exact: true
    },
    {
        path: "/workspaces/:workspace/v2/edgewize",
        component: module5194,
        exact: true
    },
    {
        path: "/v2/edgewize/create",
        component: module5271,
        exact: true
    },
    {
        path,
        component: module5200,
        routes: [].concat(module61(module5226), [
            {
                component: module5201,
                routes: [
                    {
                        path: `${path}/fota`,
                        component: module5191,
                        exact: true
                    },
                    {
                        path: `${path}/nodes`,
                        component: module5218,
                        exact: true
                    },
                    {
                        path: `${path}/node-groups`,
                        component: module5183,
                        exact: true
                    },
                    {
                        path: `${path}/projects`,
                        component: module5186,
                        exact: true
                    },
                    {
                        path: `${path}/deployments`,
                        component: module5216,
                        exact: true
                    },
                    {
                        path: `${path}/statefulsets`,
                        component: module5217,
                        exact: true
                    },
                    {
                        path: `${path}/daemonsets`,
                        component: module5215,
                        exact: true
                    },
                    {
                        path: `${path}/jobs`,
                        component: module5187,
                        exact: true
                    },
                    {
                        path: `${path}/cronjobs`,
                        component: module5199,
                        exact: true
                    },
                    {
                        path: `${path}/pods`,
                        component: module5188,
                        exact: true
                    },
                    {
                        path: `${path}/services`,
                        component: module5198,
                        exact: true
                    },
                    {
                        path: `${path}/secrets`,
                        component: module5181,
                        exact: true
                    },
                    {
                        path: `${path}/configmaps`,
                        component: module5190,
                        exact: true
                    },
                    {
                        path: `${path}/resource-usage`,
                        component: module5202
                    },
                    {
                        path: `${path}/alerts`,
                        component: module5175,
                        exact: true
                    },
                    {
                        path: `${path}/rule-group`,
                        component: module5177,
                        exact: true
                    },
                    {
                        path: `${path}/base-info`,
                        component: module5220,
                        exact: true
                    },
                    {
                        path: `${path}/members`,
                        component: module5225,
                        exact: true
                    },
                    {
                        path: `${path}/roles`,
                        component: module5270,
                        exact: true
                    },
                    {
                        path: `${path}/edgeippool`,
                        component: module2004,
                        exact: true
                    },
                    getIndexRoute({
                        path,
                        to: `${path}/fota`,
                        exact: true
                    }),
                    getIndexRoute({
                        path: `${path}/workloads`,
                        to: `${path}/deployments`,
                        exact: true
                    })
                ]
            }
        ])
    }
];
export default w;
