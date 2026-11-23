import { a as a_1 } from "unpacked/module-979.js";
import { a as a_2 } from "unpacked/module-941.js";
export const a = function(e, t) {
    for(var n = 0, i = (t = a_1(t, e)).length; e != null && n < i;){
        e = e[a_2(t[n++])];
    }
    if (n && n == i) {
        return e;
    }
};
