import module155 from "./module-155.js";
import module156 from "./module-156.js";
export default function(e, t) {
    for(var n = 0, a = (t = module155(t, e)).length; e != null && n < a;){
        e = e[module156(t[n++])];
    }
    if (n && n == a) {
        return e;
    }
};
