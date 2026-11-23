import module39 from "./module-39.js";
import module54 from "./module-54.js";
import module166 from "./module-166.js";
import module126 from "./module-126.js";
import module533 from "./module-533.js";
import module40 from "./module-40.js";
const c = module40("toPrimitive");
export default function(e, t) {
    if (!module54(e) || module166(e)) {
        return e;
    }
    let n;
    const s = module126(e, c);
    if (s) {
        if (t === undefined) {
            t = "default";
        }
        n = module39(s, e, t);
        if (!module54(n) || module166(n)) {
            return n;
        }
        throw new TypeError("Can't convert object to primitive value");
    }
    if (t === undefined) {
        t = "number";
    }
    return module533(e, t);
};
