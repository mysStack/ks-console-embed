import module90 from "./module-90.js";
import module256 from "./module-256.js";
import module99 from "./module-99.js";
const i = (e)=>function(t, n, i) {
        const l = module90(t);
        const s = module99(l);
        if (s === 0) {
            return !e && -1;
        }
        let u;
        let c = module256(i, s);
        if (e && n != n) {
            while(s > c){
                if ((u = l[c++]) != u) {
                    return true;
                }
            }
        } else {
            for(; s > c; c++){
                if ((e || c in l) && l[c] === n) {
                    return e || c || 0;
                }
            }
        }
        return !e && -1;
    };
export default {
    includes: i(true),
    indexOf: i(false)
};
