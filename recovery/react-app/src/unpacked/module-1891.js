import { a as a_1 } from "unpacked/module-1440.js";
import { a as a_2 } from "unpacked/module-1142.js";
export const a = function(e, t, n) {
    if (arguments.length < 3) {
        n = t;
        t = a_1().changedTouches;
    }
    let i;
    for(let a = 0, l = t ? t.length : 0; a < l; ++a){
        if ((i = t[a]).identifier === n) {
            return a_2(e, i);
        }
    }
    return null;
};
