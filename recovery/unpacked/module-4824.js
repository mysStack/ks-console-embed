import module99 from "./module-99.js";
import module111 from "./module-111.js";
export default function(e, t, n, a) {
    const l = module99(e);
    const u = module111(n);
    const s = u < 0 ? l + u : u;
    if (s >= l || s < 0) {
        throw new RangeError("Incorrect index");
    }
    const c = new t(l);
    for(let f = 0; f < l; f++){
        c[f] = f === s ? a : e[f];
    }
    return c;
};
