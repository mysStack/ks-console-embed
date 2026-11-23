import module89 from "./module-89.js";
import module77 from "./module-77.js";
import module165 from "./module-165.js";
import module99 from "./module-99.js";
const s = "Reduce of empty array with no initial value";
const u = (e)=>function(t, n, u, c) {
        const f = module77(t);
        const d = module165(f);
        const p = module99(f);
        module89(n);
        if (p === 0 && u < 2) {
            throw new TypeError(s);
        }
        let h = e ? p - 1 : 0;
        const v = e ? -1 : 1;
        if (u < 2) {
            while(true){
                if (h in d) {
                    c = d[h];
                    h += v;
                    break;
                }
                h += v;
                if (e ? h < 0 : p <= h) {
                    throw new TypeError(s);
                }
            }
        }
        for(; e ? h >= 0 : p > h; h += v){
            if (h in d) {
                c = n(c, d[h], h, f);
            }
        }
        return c;
    };
export default {
    left: u(false),
    right: u(true)
};
