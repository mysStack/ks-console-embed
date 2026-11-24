import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-30.js";
import "unpacked/module-38.js";
import "unpacked/module-32.js";
import * as module553 from "unpacked/module-553.js";
import module769 from "core/BaseLayout";
import module771 from "pages/login";
const lazy = module553.lazy;
const l = lazy(function() {
    return import("pages/console/App");
});
const s = lazy(function() {
    return import("pages/clusters/App");
});
const u = lazy(function() {
    return import("pages/whizard-telemetry/App");
});
const c = lazy(function() {
    return import("pages/access/App");
});
const f = lazy(function() {
    return import("pages/workspaces/App");
});
const d = lazy(function() {
    return import("pages/projects/App");
});
const p = lazy(function() {
    return import("pages/fedprojects/App");
});
const h = lazy(function() {
    return import("pages/devops/App");
});
const v = lazy(function() {
    return import("pages/settings/App");
});
const m = lazy(function() {
    return import("pages/edgewize/App");
});
const g = lazy(function() {
    return import("pages/node-groups/App");
});
const terminalPage = lazy(function() {
    return import("pages/terminal");
});
const y = [
    {
        path: "/login",
        component: module771,
        exact: true
    },
    {
        path: "/terminal",
        component: terminalPage
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
