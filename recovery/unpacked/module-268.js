import module53 from "./module-53.js";
import module368 from "./module-368.js";
import module115 from "./module-115.js";
import module70 from "./module-70.js";
export default function(e, t, n) {
    for(let l = module368(t), s = module70.f, u = module115.f, c = 0; c < l.length; c++){
        const f = l[c];
        if (!(module53(e, f) || n && module53(n, f))) {
            s(e, f, u(t, f));
        }
    }
};
