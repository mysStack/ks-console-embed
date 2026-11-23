"use strict";
const r = require("unpacked/module-40.js").default("match");
module.exports = function(e) {
    const t = /./;
    try {
        "/./"[e](t);
    } catch (n) {
        try {
            t[r] = false;
            return "/./"[e](t);
        } catch (e) {}
    }
    return false;
};
