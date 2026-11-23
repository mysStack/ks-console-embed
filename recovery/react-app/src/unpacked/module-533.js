import module39 from "./module-39.js";
import module35 from "./module-35.js";
import module54 from "./module-54.js";
export default function(e, t) {
    let n;
    let l;
    if (t === "string" && module35(n = e.toString) && !module54(l = module39(n, e))) {
        return l;
    }
    if (module35(n = e.valueOf) && !module54(l = module39(n, e))) {
        return l;
    }
    if (t !== "string" && module35(n = e.toString) && !module54(l = module39(n, e))) {
        return l;
    }
    throw new TypeError("Can't convert object to primitive value");
};
