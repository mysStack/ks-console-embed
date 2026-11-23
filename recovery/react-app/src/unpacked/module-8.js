import module25 from "unpacked/module-25.js";
import { f as f_1 } from "unpacked/module-115.js";
import module102 from "unpacked/module-102.js";
import module67 from "unpacked/module-67.js";
import module281 from "unpacked/module-281.js";
import module268 from "unpacked/module-268.js";
import module174 from "unpacked/module-174.js";
export default function(e, t) {
    let n;
    let c;
    let f;
    let d;
    let p;
    const { target, global, stat } = e;
    if (n = global ? module25 : stat ? module25[target] || module281(target, {}) : module25[target] && module25[target].prototype) {
        for(c in t){
            d = t[c];
            f = e.dontCallGetSet ? (p = f_1(n, c)) && p.value : n[c];
            if (!module174(global ? c : target + (stat ? "." : "#") + c, e.forced) && f !== undefined) {
                if (typeof d == typeof f) {
                    continue;
                }
                module268(d, f);
            }
            if (e.sham || f && f.sham) {
                module102(d, "sham", true);
            }
            module67(n, c, d, e);
        }
    }
};
