"use strict";
const r = require("./module-70.js").f;
const module53 = require("./module-53.js").default;
const a = require("./module-40.js").default("toStringTag");
module.exports = function(e, value, n) {
    if (e && !n) {
        e = e.prototype;
    }
    if (e && !module53(e, a)) {
        r(e, a, {
            configurable: true,
            value
        });
    }
};
