import module119 from "./module-119.js";
import module2173 from "./module-2173.js";
export default function(e, t) {
    const n = [];
    if (!e || !e.length) {
        return n;
    }
    let i = -1;
    const a = [];
    const e_length = e.length;
    for(t = module119(t, 3); ++i < e_length;){
        const u = e[i];
        if (t(u, i, e)) {
            n.push(u);
            a.push(i);
        }
    }
    module2173(e, a);
    return n;
};
