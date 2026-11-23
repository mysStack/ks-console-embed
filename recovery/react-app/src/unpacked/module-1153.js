import module514 from "./module-514.js";
import module208 from "./module-208.js";
import module255 from "./module-255.js";
import module125 from "./module-125.js";
export default function(e, t, n) {
    e = module125(e);
    n = n == null ? 0 : module514(module255(n), 0, e.length);
    t = module208(t);
    return e.slice(n, n + t.length) == t;
};
