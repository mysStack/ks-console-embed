import module25 from "unpacked/module-25.js";
import module145 from "unpacked/module-145.js";
import module35 from "unpacked/module-35.js";
import module705 from "unpacked/module-705.js";
import module117 from "unpacked/module-117.js";
import module124 from "unpacked/module-124.js";
import module328 from "unpacked/module-328.js";
let r;
const module25_Function = module25.Function;
const d = /MSIE .\./.test(module117) || module705 && ((r = module25.Bun.version.split(".")).length < 3 || r[0] === "0" && (r[1] < 3 || r[1] === "3" && r[2] === "0"));
export default function(e, t) {
    const n = t ? 2 : 1;
    if (d) {
        return function(r, o) {
            const l = module328(arguments.length, 1) > n;
            const s = module35(r) ? r : module25_Function(r);
            const d = l ? module124(arguments, n) : [];
            const p = l ? function() {
                module145(s, this, d);
            } : s;
            if (t) {
                return e(p, o);
            }
            return e(p);
        };
    }
    return e;
};
