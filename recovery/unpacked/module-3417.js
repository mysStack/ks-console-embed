import module3418 from "./module-3418.js";
import module1066 from "./module-1066.js";
export default function(e, t) {
    let n;
    let a;
    let l;
    const u = Math.max(arguments.length, 2);
    e = Object(module1066(e));
    l = function(r) {
        try {
            e[r] = t[r];
        } catch (error) {
            if (!n) {
                n = error;
            }
        }
    };
    for(a = 1; a < u; ++a){
        module3418(t = arguments[a]).forEach(l);
    }
    if (n !== undefined) {
        throw n;
    }
    return e;
};
