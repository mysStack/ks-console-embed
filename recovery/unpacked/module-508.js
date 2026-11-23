import module33 from "./module-33.js";
import module21 from "./module-21.js";
import module39 from "./module-39.js";
import module19 from "./module-19.js";
import module175 from "./module-175.js";
import module221 from "./module-221.js";
import module218 from "./module-218.js";
import module77 from "./module-77.js";
import module165 from "./module-165.js";
const h = module21([].concat);
export default !Object.assign || module19(function() {
    if (module33 && ({
        b: 1,
        ...Object.assign(Object.defineProperty({}, "a", {
            enumerable: true,
            get: function() {
                Object.defineProperty(this, "b", {
                    value: 3,
                    enumerable: false
                });
            }
        }), {
            b: 2
        })
    }).b !== 1) {
        return true;
    }
    const e = {};
    const t = {};
    const n = Symbol("assign detection");
    e[n] = 7;
    "abcdefghijklmnopqrst".split("").forEach((e)=>{
        t[e] = e;
    });
    return ({
        ...e
    })[n] !== 7 || module175({
        ...t
    }).join("") !== "abcdefghijklmnopqrst";
}) ? function(e, t) {
    const n = module77(e);
    for(let o = arguments.length, i = 1, d = module221.f, p = module218.f; o > i;){
        let v;
        const m = module165(arguments[i++]);
        const g = d ? h(module175(m), d(m)) : module175(m);
        for(let y = g.length, b = 0; y > b;){
            v = g[b++];
            if (!(module33 && !module39(p, m, v))) {
                n[v] = m[v];
            }
        }
    }
    return n;
} : Object.assign;
