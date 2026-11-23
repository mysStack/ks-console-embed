"use strict";
const module33 = require("./module-33.js").default;
const module365 = require("./module-365.js").default;
const module366 = require("./module-366.js").default;
const module50 = require("./module-50.js").default;
const module266 = require("./module-266.js").default;
exports.f = module33 ? module366 ? function(e, t, n) {
    module50(e);
    t = module266(t);
    module50(n);
    if (typeof e === "function" && t === "prototype" && "value" in n && "writable" in n && !n.writable) {
        const r = Object.getOwnPropertyDescriptor(e, t);
        if (r && r.writable) {
            e[t] = n.value;
            n = {
                configurable: "configurable" in n ? n.configurable : r.configurable,
                enumerable: "enumerable" in n ? n.enumerable : r.enumerable,
                writable: false
            };
        }
    }
    return Object.defineProperty(e, t, n);
} : Object.defineProperty : function(e, t, n) {
    module50(e);
    t = module266(t);
    module50(n);
    if (module365) {
        try {
            return Object.defineProperty(e, t, n);
        } catch (e) {}
    }
    if ("get" in n || "set" in n) {
        throw new TypeError("Accessors not supported");
    }
    if ("value" in n) {
        e[t] = n.value;
    }
    return e;
};
