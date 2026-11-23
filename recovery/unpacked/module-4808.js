import module142 from "./module-142.js";
import module39 from "./module-39.js";
import module345 from "./module-345.js";
import module77 from "./module-77.js";
import module99 from "./module-99.js";
import module339 from "./module-339.js";
import module262 from "./module-262.js";
import module347 from "./module-347.js";
import module1934 from "./module-1934.js";
import module812 from "./module-812.js";
import module1456 from "./module-1456.js";
const module812_aTypedArrayConstructor = module812.aTypedArrayConstructor;
export default function(e) {
    let t;
    let n;
    let h;
    let v;
    let g;
    let y;
    let m;
    let b;
    const x = module345(this);
    let w = module77(e);
    const arguments_length = arguments.length;
    let C = arguments_length > 1 ? arguments[1] : undefined;
    const O = C !== undefined;
    const E = module262(w);
    if (E && !module347(E)) {
        b = (m = module339(w, E)).next;
        for(w = []; !(y = module39(b, m)).done;){
            w.push(y.value);
        }
    }
    if (O && arguments_length > 2) {
        C = module142(C, arguments[2]);
    }
    n = module99(w);
    h = new (module812_aTypedArrayConstructor(x))(n);
    v = module1934(h);
    for(t = 0; n > t; t++){
        g = O ? C(w[t], t) : w[t];
        h[t] = v ? module1456(g) : +g;
    }
    return h;
};
