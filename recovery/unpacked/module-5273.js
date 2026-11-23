import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module2004 from "./module-2004.js";
import module2002 from "./module-2002.js";
import module5274 from "./module-5274.js";
import module5276 from "./module-5276.js";
import module5278 from "./module-5278.js";
import module5279 from "./module-5279.js";
import module5288 from "./module-5288.js";
import module5290 from "./module-5290.js";
import module5291 from "./module-5291.js";
import module5293 from "./module-5293.js";
import module5294 from "./module-5294.js";
const path = "/node-groups/clusters/:cluster/:group";
const y = [
    {
        path: "/list",
        component: module5276,
        exact: true
    },
    {
        path: `${path}/edgeippool/:name`,
        component: module2002,
        exact: true
    },
    {
        path,
        component: module5278,
        routes: [
            {
                path: `${path}/roles/:name`,
                component: module5291
            },
            {
                component: module5279,
                routes: [
                    {
                        path: `${path}/nodes`,
                        component: module5288,
                        exact: true
                    },
                    {
                        path: `${path}/projects`,
                        component: module5274,
                        exact: true
                    },
                    {
                        path: `${path}/roles`,
                        component: module5290,
                        exact: true
                    },
                    {
                        path: `${path}/members`,
                        component: module5293,
                        exact: true
                    },
                    {
                        path: `${path}/base-info`,
                        component: module5294
                    },
                    {
                        path: `${path}/edgeippool`,
                        component: module2004,
                        exact: true
                    },
                    getIndexRoute({
                        path,
                        to: `${path}/nodes`,
                        exact: true
                    })
                ]
            }
        ]
    }
];
export default y;
