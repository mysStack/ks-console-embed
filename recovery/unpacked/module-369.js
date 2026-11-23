import module21 from "./module-21.js";
import module53 from "./module-53.js";
import module90 from "./module-90.js";
import module258 from "./module-258.js";
import module173 from "./module-173.js";
const module258_indexOf = module258.indexOf;
const s = module21([].push);
export default function(e, t) {
    let n;
    const r = module90(e);
    let u = 0;
    const c = [];
    for(n in r){
        if (!module53(module173, n) && module53(r, n)) {
            s(c, n);
        }
    }
    while(t.length > u){
        if (module53(r, n = t[u++])) {
            if (!~module258_indexOf(c, n)) {
                s(c, n);
            }
        }
    }
    return c;
};
