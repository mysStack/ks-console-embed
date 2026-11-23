import module21 from "unpacked/module-21.js";
import module141 from "unpacked/module-141.js";
import module46 from "unpacked/module-46.js";
import module507 from "unpacked/module-507.js";
import module80 from "unpacked/module-80.js";
const u = module21(module507);
const s = module21("".slice);
const f = (e)=>function(t, n, r) {
        let a;
        let f;
        const d = module46(module80(t));
        const p = module141(n);
        const d_length = d.length;
        const v = r === undefined ? " " : module46(r);
        if (p <= d_length || v === "") {
            return d;
        }
        if ((f = u(v, Math.ceil((a = p - d_length) / v.length))).length > a) {
            f = s(f, 0, a);
        }
        if (e) {
            return d + f;
        }
        return f + d;
    };
export default {
    start: f(false),
    end: f(true)
};
