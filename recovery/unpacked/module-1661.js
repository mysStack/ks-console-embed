import { a as a_1 } from "./module-979.js";
import { a as a_2 } from "./module-993.js";
import { a as a_3 } from "./module-808.js";
import { a as a_4 } from "./module-956.js";
import { a as a_5 } from "./module-1055.js";
import { a as a_6 } from "./module-941.js";
export const a = function(e, t, n) {
    for(var s = -1, c = (t = a_1(t, e)).length, f = false; ++s < c;){
        var d = a_6(t[s]);
        if (!(f = e != null && n(e, d))) {
            break;
        }
        e = e[d];
    }
    if (f || ++s != c) {
        return f;
    }
    return !!(c = e == null ? 0 : e.length) && a_5(c) && a_4(d, c) && (a_3(e) || a_2(e));
};
