const module1420 = require("./module-1420.js");
const module1237 = require("./module-1237.js").default;
const module4490 = require("./module-4490.js").default;
module.exports = require("./module-1077.js") ? Object.defineProperties : function(e, t) {
    module1237(e);
    let n;
    const a = module4490(t);
    for(let l = a.length, u = 0; l > u;){
        module1420.f(e, n = a[u++], t[n]);
    }
    return e;
};
