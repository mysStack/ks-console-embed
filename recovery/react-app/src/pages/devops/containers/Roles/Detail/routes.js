"use strict";
require("unpacked/module-15.js");
const module20 = require("utils/babel-helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
const module317 = require("utils/router.config");
const o = module20(require("pages/access/containers/Roles/Detail/AuthorizationList"));
const i = module20(require("pages/access/containers/Roles/Detail/AuthorizedUsers"));
const component = require("utils/index").withProps(o.default, {
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
