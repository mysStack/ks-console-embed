import module142 from "./module-142.js";
import module39 from "./module-39.js";
import module77 from "./module-77.js";
import module590 from "./module-590.js";
import module347 from "./module-347.js";
import module222 from "./module-222.js";
import module99 from "./module-99.js";
import module178 from "./module-178.js";
import module339 from "./module-339.js";
import module262 from "./module-262.js";
export default function(e) {
    const t = module77(e);
    const n = module222(this);
    const arguments_length = arguments.length;
    let v = arguments_length > 1 ? arguments[1] : undefined;
    const m = v !== undefined;
    if (m) {
        v = module142(v, arguments_length > 2 ? arguments[2] : undefined);
    }
    let g;
    let y;
    let b;
    let C;
    let w;
    let _;
    const x = module262(t);
    let M = 0;
    if (!x || this === Array && module347(x)) {
        g = module99(t);
        for(y = n ? new this(g) : Array(g); g > M; M++){
            _ = m ? v(t[M], M) : t[M];
            module178(y, M, _);
        }
    } else {
        y = n ? new this : [];
        for(w = (C = module339(t, x)).next; !(b = module39(w, C)).done; M++){
            _ = m ? module590(C, v, [
                b.value,
                M
            ], true) : b.value;
            module178(y, M, _);
        }
    }
    y.length = M;
    return y;
};
