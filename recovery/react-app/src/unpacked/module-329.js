import module169 from "./module-169.js";
import module108 from "./module-108.js";
import module211 from "./module-211.js";
import module76 from "./module-76.js";
export default function(e, t, n) {
    if (!module76(n)) {
        return false;
    }
    const l = typeof t;
    return !!(l == "number" ? module108(n) && module211(t, n.length) : l == "string" && t in n) && module169(n[t], e);
};
