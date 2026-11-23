"use strict";
const forEach = require("unpacked/module-112.js").default.forEach;
const o = require("unpacked/module-128.js").default("forEach");
module.exports = o ? [].forEach : function(e, _param_1) {
    return forEach(this, e, _param_1);
};
