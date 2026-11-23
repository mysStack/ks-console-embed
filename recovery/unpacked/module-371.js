"use strict";
const module33 = require("./module-33.js").default;
const module19 = require("./module-19.js").default;
const module21 = require("./module-21.js").default;
const module260 = require("./module-260.js").default;
const module175 = require("./module-175.js").default;
const module90 = require("./module-90.js").default;
const u = module21(require("./module-218.js").f);
const c = module21([].push);
const f = module33 && module19(function() {
    const e = Object.create(null);
    e[2] = 2;
    return !u(e, 2);
});
const d = function(e) {
    return function(t) {
        let n;
        const o = module90(t);
        const a = module175(o);
        const d = f && module260(o) === null;
        for(var p = a.length, h = 0, v = []; p > h;){
            n = a[h++];
            if (!(module33 && !(d ? n in o : u(o, n)))) {
                c(v, e ? [
                    n,
                    o[n]
                ] : o[n]);
            }
        }
        return v;
    };
};
module.exports = {
    entries: d(true),
    values: d(false)
};
