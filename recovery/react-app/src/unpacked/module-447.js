import module514 from "./module-514.js";
import module208 from "./module-208.js";
import module255 from "./module-255.js";
import module125 from "./module-125.js";
export default function(e, t, n) {
    e = module125(e);
    t = module208(t);
    const e_length = e.length;
    const s = n = n === undefined ? e_length : module514(module255(n), 0, e_length);
    return (n -= t.length) >= 0 && e.slice(n, s) == t;
};
