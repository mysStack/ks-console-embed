import module21 from "./module-21.js";
import module80 from "./module-80.js";
import module46 from "./module-46.js";
import module224 from "./module-224.js";
const l = module21("".replace);
const s = RegExp(`^[${module224}]+`);
const u = RegExp(`(^|[^${module224}])[${module224}]+\$`);
const c = (e)=>function(t) {
        let n = module46(module80(t));
        if (1 & e) {
            n = l(n, s, "");
        }
        if (2 & e) {
            n = l(n, u, "$1");
        }
        return n;
    };
export default {
    start: c(1),
    end: c(2),
    trim: c(3)
};
