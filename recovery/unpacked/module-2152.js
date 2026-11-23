import module2153 from "./module-2153.js";
import module329 from "./module-329.js";
import module515 from "./module-515.js";
export default function(e) {
    return function(t, n, a) {
        if (a && typeof a !== "number" && module329(t, n, a)) {
            a = undefined;
            n = undefined;
        }
        t = module515(t);
        if (n === undefined) {
            n = t;
            t = 0;
        } else {
            n = module515(n);
        }
        a = a === undefined ? t < n ? 1 : -1 : module515(a);
        return module2153(t, n, a, e);
    };
};
