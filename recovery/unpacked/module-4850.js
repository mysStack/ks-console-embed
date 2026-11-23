import module490 from "./module-490.js";
import module1249 from "./module-1249.js";
import module1966 from "./module-1966.js";
import module1969 from "./module-1969.js";
import module1460 from "./module-1460.js";
import module1250 from "./module-1250.js";
import module100 from "./module-100.js";
export default function(e, t, n) {
    const c = module1249(e);
    return function o() {
        let arguments_length = arguments.length;
        const d = Array(arguments_length);
        for(var p = arguments_length, h = module1460(o); p--;){
            d[p] = arguments[p];
        }
        const v = arguments_length < 3 && d[0] !== h && d[arguments_length - 1] !== h ? [] : module1250(d, h);
        if ((arguments_length -= v.length) < n) {
            return module1969(e, t, module1966, o.placeholder, undefined, d, v, undefined, undefined, n - arguments_length);
        }
        const g = this && this !== module100 && this instanceof o ? c : e;
        return module490(g, this, d);
    };
};
