"use strict";
require("./module-15.js");
const module20 = require("./module-20.js").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
const module317 = require("./module-317.js");
const o = module20(require("./module-1023.js"));
const i = module20(require("./module-1073.js"));
const component = require("./module-52.js").withProps(o.default, {
    roleType: "devops"
});
exports.default = function(path) {
    return [
        {
            path: `${path}/authorizations`,
            title: "PERMISSION_PL",
            component,
            exact: true
        },
        {
            path: `${path}/users`,
            title: "AUTHORIZED_USER_PL",
            component: i.default,
            exact: true
        },
        module317.getIndexRoute({
            path,
            to: `${path}/authorizations`,
            exact: true
        })
    ];
};
