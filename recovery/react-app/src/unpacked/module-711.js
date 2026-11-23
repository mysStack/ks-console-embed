import module119 from "./module-119.js";
import module108 from "./module-108.js";
import module122 from "./module-122.js";
export default function(e) {
    return function(t, n, i) {
        const l = Object(t);
        if (!module108(t)) {
            var s = module119(n, 3);
            t = module122(t);
            n = function(e) {
                return s(l[e], e, l);
            };
        }
        const u = e(t, n, i);
        if (u > -1) {
            return l[s ? t[u] : u];
        }
    };
};
