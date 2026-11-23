import module1249 from "./module-1249.js";
import module100 from "./module-100.js";
export default function(e, t, n) {
    const i = 1 & t;
    const a = module1249(e);
    return function t() {
        const r = this && this !== module100 && this instanceof t ? a : e;
        return r.apply(i ? n : this, arguments);
    };
};
