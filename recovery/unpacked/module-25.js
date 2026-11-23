"use strict";
(function(t) {
    const n = (e)=>e && e.Math === Math && e;
    module.exports = n(typeof globalThis === "object" && globalThis) || n(typeof window === "object" && window) || n(typeof self === "object" && self) || n(typeof t === "object" && t) || n(typeof this === "object" && this) || function() {
        return this;
    }() || Function("return this")();
}).call(this, require("./module-69.js").default);
