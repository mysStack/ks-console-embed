"use strict";
const module50 = require("unpacked/module-50.js").default;
const module345 = require("unpacked/module-345.js").default;
const module103 = require("unpacked/module-103.js").default;
const i = require("unpacked/module-40.js").default("species");
module.exports = function(e, t) {
    let n;
    const constructor = module50(e).constructor;
    if (constructor === undefined || module103(n = module50(constructor)[i])) {
        return t;
    }
    return module345(n);
};
