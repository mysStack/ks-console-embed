import module77 from "unpacked/module-77.js";
import module256 from "unpacked/module-256.js";
import module99 from "unpacked/module-99.js";
import module340 from "unpacked/module-340.js";
export default [].copyWithin || function(e, t, f) {
    const n = module77(this);
    const u = module99(n);
    let s = module256(e, u);
    let c = module256(t, u);
    let d = Math.min((f === undefined ? u : module256(f, u)) - c, u - s);
    let p = 1;
    for(c < s && s < c + d && (p = -1, c += d - 1, s += d - 1); d-- > 0;){
        if (c in n) {
            n[s] = n[c];
        } else {
            module340(n, s);
        }
        s += p;
        c += p;
    }
    return n;
};
