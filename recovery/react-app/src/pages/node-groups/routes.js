import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module2004 from "pages/node-groups/edgeippool";
import module2002 from "pages/node-groups/edgeippool/Detail";
import module5274 from "pages/node-groups/projects";
import module5276 from "pages/node-groups/List";
import module5278 from "pages/node-groups/layout";
import module5279 from "pages/node-groups/inner";
import module5288 from "pages/node-groups/nodes";
import module5290 from "pages/node-groups/roles";
import module5291 from "pages/node-groups/roles/Detail";
import module5293 from "pages/node-groups/members";
import module5294 from "pages/node-groups/base-info";
const path = "/node-groups/clusters/:cluster/:group";
const y = [
    {
        path: "/node-groups",
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
