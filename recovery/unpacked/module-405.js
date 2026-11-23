import module181 from "./module-181.js";
import module406 from "./module-406.js";
import module155 from "./module-155.js";
export default function(e, t, n) {
    for(var i = -1, l = t.length, s = {}; ++i < l;){
        const u = t[i];
        const c = module181(e, u);
        if (n(c, u)) {
            module406(s, module155(u, e), c);
        }
    }
    return s;
};
