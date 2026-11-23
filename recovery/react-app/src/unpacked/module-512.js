import module228 from "./module-228.js";
import module393 from "./module-393.js";
import module354 from "./module-354.js";
import module625 from "./module-625.js";
import module76 from "./module-76.js";
import module161 from "./module-161.js";
import module400 from "./module-400.js";
export default (function e(t, n, c, f, d) {
    if (t !== n) {
        module354(n, function(a, s) {
            if (!d) {
                d = new module228;
            }
            if (module76(a)) {
                module625(t, n, s, c, e, f, d);
            } else {
                let p = f ? f(module400(t, s), a, `${s}`, t, n, d) : undefined;
                if (p === undefined) {
                    p = a;
                }
                module393(t, s, p);
            }
        }, module161);
    }
});
