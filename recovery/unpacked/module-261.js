"use strict";
const module50 = require("./module-50.js").default;
const module345 = require("./module-345.js").default;
const module103 = require("./module-103.js").default;
const i = require("./module-40.js").default("species");
module.exports = function(e, t) {
    let n;
    const constructor = module50(e).constructor;
    if (constructor === undefined || module103(n = module50(constructor)[i])) {
        return t;
    }
    return module345(n);
};
