import module21 from "./module-21.js";
import module111 from "./module-111.js";
import module46 from "./module-46.js";
import module80 from "./module-80.js";
const l = module21("".charAt);
const s = module21("".charCodeAt);
const u = module21("".slice);
const c = (e)=>function(t, n) {
        let r;
        let c;
        const f = module46(module80(t));
        const d = module111(n);
        const f_length = f.length;
        if (d < 0 || d >= f_length) {
            if (e) {
                return "";
            }
            return undefined;
        }
        if ((r = s(f, d)) < 55296 || r > 56319 || d + 1 === f_length || (c = s(f, d + 1)) < 56320 || c > 57343) {
            if (e) {
                return l(f, d);
            }
            return r;
        }
        if (e) {
            return u(f, d, d + 2);
        }
        return c - 56320 + (r - 55296 << 10) + 65536;
    };
export default {
    codeAt: c(false),
    charAt: c(true)
};
