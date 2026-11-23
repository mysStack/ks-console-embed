import "unpacked/module-15.js";
import "unpacked/module-5.js";
import module61 from "unpacked/module-61.js";
import { getIndexRoute } from "utils/router.config";
import module4354 from "pages/workspaces/layout";
import module4355 from "pages/workspaces/containers/BaseInfo";
import module4358 from "pages/workspaces/quota";
import module4362 from "pages/workspaces/containers/Roles";
import module4363 from "pages/workspaces/containers/Members";
import module4364 from "pages/workspaces/containers/Groups";
import module4382 from "pages/workspaces/projects";
import module4384 from "pages/workspaces/federatedprojects";
import module4385 from "pages/workspaces/containers/DevOps";
import module4386 from "pages/workspaces/containers/Apps";
import module4388 from "pages/workspaces/containers/Repos";
import module4389 from "pages/workspaces/gateways";
import module4392 from "pages/workspaces/edge-apps";
import module4393 from "pages/workspaces/detail-routes";
import module4441 from "pages/workspaces/routes/overview";
const path = "/workspaces/:workspace";
const b = [].concat(module61(module4393), [
    {
        path,
        component: module4354,
        routes: [].concat(module61(module4441), [
            {
                path: `${path}/federatedprojects`,
                component: module4384,
                exact: true
            },
            {
                path: `${path}/projects`,
                component: module4382,
                exact: true
            },
            {
                path: `${path}/devops`,
                component: module4385,
                exact: true
            },
            {
                path: `${path}/edge-apps`,
                component: module4392,
                exact: true
            },
            {
                path: `${path}/apps`,
                component: module4386,
                exact: true
            },
            {
                path: `${path}/base-info`,
                component: module4355,
                exact: true
            },
            {
                path: `${path}/repos`,
                component: module4388,
                exact: true
            },
            {
                path: `${path}/quota`,
                component: module4358,
                exact: true
            },
            {
                path: `${path}/roles`,
                component: module4362,
                exact: true
            },
            {
                path: `${path}/members`,
                component: module4363,
                exact: true
            },
            {
                path: `${path}/groups`,
                component: module4364,
                exact: true
            },
            {
                path: `${path}/gateways/:component`,
                component: module4389,
                exact: true
            },
            getIndexRoute({
                path: `${path}/gateways`,
                to: `${path}/gateways/workspace`,
                exact: true
            })
        ])
    }
]);
export default b;
