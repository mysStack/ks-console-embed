import { a as a_1 } from "./module-905.js";
export const a = function(e, t, n) {
    t = Math.max(t === undefined ? e.length - 1 : t, 0);
    return function() {
        const i = arguments;
        for(var a = -1, l = Math.max(i.length - t, 0), u = Array(l); ++a < l;){
            u[a] = i[t + a];
        }
        a = -1;
        const s = Array(t + 1);
        while(++a < t){
            s[a] = i[a];
        }
        s[t] = n(u);
        return a_1(e, this, s);
    };
};
