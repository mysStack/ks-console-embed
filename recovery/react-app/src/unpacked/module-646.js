import module228 from "./module-228.js";
import module410 from "./module-410.js";
import module649 from "./module-649.js";
import module650 from "./module-650.js";
import module164 from "./module-164.js";
import module60 from "./module-60.js";
import module170 from "./module-170.js";
import module216 from "./module-216.js";
const f = "[object Object]";
const hasOwnProperty = Object.prototype.hasOwnProperty;
export default function(e, t, n, p, h, v) {
    let m = module60(e);
    const g = module60(t);
    let y = m ? "[object Array]" : module164(e);
    let b = g ? "[object Array]" : module164(t);
    let C = (y = y == "[object Arguments]" ? f : y) == f;
    const w = (b = b == "[object Arguments]" ? f : b) == f;
    const _ = y == b;
    if (_ && module170(e)) {
        if (!module170(t)) {
            return false;
        }
        m = true;
        C = false;
    }
    if (_ && !C) {
        if (!v) {
            v = new module228;
        }
        if (m || module216(e)) {
            return module410(e, t, n, p, h, v);
        }
        return module649(e, t, y, n, p, h, v);
    }
    if (!(1 & n)) {
        const x = C && hasOwnProperty.call(e, "__wrapped__");
        const M = w && hasOwnProperty.call(t, "__wrapped__");
        if (x || M) {
            const E = x ? e.value() : e;
            const k = M ? t.value() : t;
            if (!v) {
                v = new module228;
            }
            return h(E, k, n, p, v);
        }
    }
    return !!_ && (v || (v = new module228), module650(e, t, n, p, h, v));
};
