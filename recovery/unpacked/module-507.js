import module111 from "./module-111.js";
import module46 from "./module-46.js";
import module80 from "./module-80.js";
export default function(e) {
    let t = module46(module80(this));
    let n = "";
    let l = module111(e);
    if (l < 0 || l === Infinity) {
        throw new RangeError("Wrong number of repetitions");
    }
    for(; l > 0; (l >>>= 1) && (t += t)){
        if (1 & l) {
            n += t;
        }
    }
    return n;
};
