import { a as a_1 } from "./module-1659.js";
import { a as a_2 } from "./module-849.js";
export const a = function(e) {
    const t = a_2(e);
    for(let n = t.length; n--;){
        const i = t[n];
        const a = e[i];
        t[n] = [
            i,
            a,
            a_1(a)
        ];
    }
    return t;
};
