"use strict";
const module33 = require("./module-33.js").default;
const module366 = require("./module-366.js").default;
const module70 = require("./module-70.js");
const module50 = require("./module-50.js").default;
const module90 = require("./module-90.js").default;
const module175 = require("./module-175.js").default;
exports.f = module33 && !module366 ? Object.defineProperties : function(e, t) {
    module50(e);
    let n;
    const r = module90(t);
    const o = module175(t);
    for(let u = o.length, c = 0; u > c;){
        module70.f(e, n = o[c++], r[n]);
    }
    return e;
};
