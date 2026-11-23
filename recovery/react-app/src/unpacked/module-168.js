"use strict";
const module89 = require("unpacked/module-89.js").default;
const a = function(e) {
    let t;
    let n;
    this.promise = new e(function(e, r) {
        if (t !== undefined || n !== undefined) {
            throw new TypeError("Bad Promise constructor");
        }
        t = e;
        n = r;
    });
    this.resolve = module89(t);
    this.reject = module89(n);
};
module.exports.f = function(e) {
    return new a(e);
};
