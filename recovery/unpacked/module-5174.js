import "./module-15.js";
import "./module-5.js";
import module61 from "./module-61.js";
import { getIndexRoute } from "./module-317.js";
import module5175 from "./module-5175.js";
import module5177 from "./module-5177.js";
import module5181 from "./module-5181.js";
import module5183 from "./module-5183.js";
import module5186 from "./module-5186.js";
import module5187 from "./module-5187.js";
import module5188 from "./module-5188.js";
import module5190 from "./module-5190.js";
import module5191 from "./module-5191.js";
import module5194 from "./module-5194.js";
import module5198 from "./module-5198.js";
import module5199 from "./module-5199.js";
import module5200 from "./module-5200.js";
import module5201 from "./module-5201.js";
import module5202 from "./module-5202.js";
import module5215 from "./module-5215.js";
import module5216 from "./module-5216.js";
import module5217 from "./module-5217.js";
import module5218 from "./module-5218.js";
import module5220 from "./module-5220.js";
import module5225 from "./module-5225.js";
import module5226 from "./module-5226.js";
import module5270 from "./module-5270.js";
import module5271 from "./module-5271.js";
import module2004 from "./module-2004.js";
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
