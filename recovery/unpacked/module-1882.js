const module1238 = require("./module-1238.js").default;
const module1425 = require("./module-1425.js").default;
const i = require("./module-4485.js").default(false);
const a = require("./module-1883.js")("IE_PROTO");
module.exports = function(e, t) {
    let n;
    const l = module1425(e);
    let u = 0;
    const s = [];
    for(n in l){
        if (n != a && module1238(l, n)) {
            s.push(n);
        }
    }
    while(t.length > u){
        if (module1238(l, n = t[u++])) {
            if (!~i(s, n)) {
                s.push(n);
            }
        }
    }
    return s;
};
