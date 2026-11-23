import module1239 from "./module-1239.js";
import module1426 from "./module-1426.js";
export default function(e) {
    let t = String(module1426(this));
    let n = "";
    let i = module1239(e);
    if (i < 0 || i == Infinity) {
        throw RangeError("Count can't be negative");
    }
    for(; i > 0; (i >>>= 1) && (t += t)){
        if (1 & i) {
            n += t;
        }
    }
    return n;
};
