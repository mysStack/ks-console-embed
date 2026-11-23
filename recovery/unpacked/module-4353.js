import "./module-15.js";
import "./module-5.js";
import module61 from "./module-61.js";
import { getIndexRoute } from "./module-317.js";
import module4354 from "./module-4354.js";
import module4355 from "./module-4355.js";
import module4358 from "./module-4358.js";
import module4362 from "./module-4362.js";
import module4363 from "./module-4363.js";
import module4364 from "./module-4364.js";
import module4382 from "./module-4382.js";
import module4384 from "./module-4384.js";
import module4385 from "./module-4385.js";
import module4386 from "./module-4386.js";
import module4388 from "./module-4388.js";
import module4389 from "./module-4389.js";
import module4392 from "./module-4392.js";
import module4393 from "./module-4393.js";
import module4441 from "./module-4441.js";
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
