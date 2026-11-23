import module479 from "unpacked/module-479.js";
import module474 from "unpacked/module-474.js";
import module335 from "unpacked/module-335.js";
import module119 from "unpacked/module-119.js";
import module273 from "unpacked/module-273.js";
import module60 from "unpacked/module-60.js";
import module170 from "unpacked/module-170.js";
import module194 from "unpacked/module-194.js";
import module76 from "unpacked/module-76.js";
import module216 from "unpacked/module-216.js";
export default function(e, t, n) {
    const p = module60(e);
    const h = p || module170(e) || module216(e);
    t = module119(t, 4);
    if (n == null) {
        const v = e && e.constructor;
        n = h ? p ? new v : [] : module76(e) && module194(v) ? module474(module273(e)) : {};
    }
    (h ? module479 : module335)(e, function(e, r, o) {
        return t(n, e, r, o);
    });
    return n;
};
