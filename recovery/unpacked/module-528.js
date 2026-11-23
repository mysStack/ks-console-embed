import module331 from "./module-331.js";
import module108 from "./module-108.js";
export default function(e, t) {
    let n = -1;
    const a = module108(e) ? Array(e.length) : [];
    module331(e, function(e, r, o) {
        a[++n] = t(e, r, o);
    });
    return a;
};
