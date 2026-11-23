const module100 = require("./module-100.js").default;
const o = exports && !exports.nodeType && exports;
const a = o && typeof module === "object" && module && !module.nodeType && module;
const i = a && a.exports === o ? module100.Buffer : undefined;
const l = i ? i.allocUnsafe : undefined;
module.exports = function(e, t) {
    if (t) {
        return e.slice();
    }
    const e_length = e.length;
    const r = l ? l(e_length) : new e.constructor(e_length);
    e.copy(r);
    return r;
};
