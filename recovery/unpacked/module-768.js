import "./module-15.js";
import "./module-4.js";
import "./module-22.js";
import "./module-30.js";
import "./module-38.js";
import "./module-32.js";
import { lazy } from "./module-553.js";
import module769 from "./module-769.js";
import module771 from "./module-771.js";
const l = lazy(function() {
    return import("./module-777.js");
});
const s = lazy(function() {
    return import("./module-778.js");
});
const u = lazy(function() {
    return import("./module-779.js");
});
const c = lazy(function() {
    return import("./module-780.js");
});
const f = lazy(function() {
    return import("./module-781.js");
});
const d = lazy(function() {
    return import("./module-782.js");
});
const p = lazy(function() {
    return import("./module-783.js");
});
const h = lazy(function() {
    return import("./module-784.js");
});
const v = lazy(function() {
    return import("./module-785.js");
});
const m = lazy(function() {
    return import("./module-786.js");
});
const g = lazy(function() {
    return import("./module-787.js");
});
const y = [
    {
        path: "/login",
        component: module771,
        exact: true
    },
    {
        component: module769,
        routes: [
            {
                path: "/clusters",
                component: s
            },
            {
                path: "/node-groups",
                component: g
            },
            {
                path: "/v2/edgewize",
                component: m
            },
            {
                path: "/whizard-telemetry",
                component: u
            },
            {
                path: "/access",
                component: c
            },
            {
                path: "/:workspace/clusters/:cluster/projects/:namespace",
                component: d
            },
            {
                path: "/:workspace/clusters/:cluster/devops/:devops",
                component: h
            },
            {
                path: "/:workspace/federatedprojects/:namespace",
                component: p
            },
            {
                path: "/workspaces/:workspace",
                component: f
            },
            {
                path: "/settings",
                component: v
            },
            {
                path: "*",
                component: l
            }
        ]
    }
];
export default y;
