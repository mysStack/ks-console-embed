import module265 from "./module-265.js";
import module155 from "./module-155.js";
import module211 from "./module-211.js";
import module76 from "./module-76.js";
import module156 from "./module-156.js";
export default function(e, t, n, s) {
    if (!module76(e)) {
        return e;
    }
    for(let u = -1, c = (t = module155(t, e)).length, f = c - 1, d = e; d != null && ++u < c;){
        const p = module156(t[u]);
        let h = n;
        if (p === "__proto__" || p === "constructor" || p === "prototype") {
            return e;
        }
        if (u != f) {
            const v = d[p];
            if ((h = s ? s(v, p, d) : undefined) === undefined) {
                h = module76(v) ? v : module211(t[u + 1]) ? [] : {};
            }
        }
        module265(d, p, h);
        d = d[p];
    }
    return e;
};
