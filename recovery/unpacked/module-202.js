"use strict";
const module284 = require("./module-284.js");
const module35 = require("./module-35.js").default;
const module91 = require("./module-91.js").default;
const i = require("./module-40.js").default("toStringTag");
const s = module91(function() {
    return arguments;
}()) === "Arguments";
module.exports = module284 ? module91 : function(e) {
    let t;
    let n;
    let r;
    if (e === undefined) {
        return "Undefined";
    }
    if (e === null) {
        return "Null";
    }
    if (typeof (n = ((e, t)=>{
        try {
            return e[t];
        } catch (e) {}
    })(t = Object(e), i)) === "string") {
        return n;
    }
    if (s) {
        return module91(t);
    }
    if ((r = module91(t)) === "Object" && module35(t.callee)) {
        return "Arguments";
    }
    return r;
};
