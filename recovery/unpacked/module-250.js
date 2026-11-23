import module217 from "./module-217.js";
import module108 from "./module-108.js";
import module195 from "./module-195.js";
import module255 from "./module-255.js";
import module480 from "./module-480.js";
export default function(e, t, n, u) {
    e = module108(e) ? e : module480(e);
    n = n && !u ? module255(n) : 0;
    const e_length = e.length;
    if (n < 0) {
        n = Math.max(e_length + n, 0);
    }
    if (module195(e)) {
        return n <= e_length && e.indexOf(t, n) > -1;
    }
    return !!e_length && module217(e, t, n) > -1;
};
