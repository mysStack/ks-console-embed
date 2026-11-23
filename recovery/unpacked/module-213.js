import module142 from "./module-142.js";
import module39 from "./module-39.js";
import module50 from "./module-50.js";
import module149 from "./module-149.js";
import module347 from "./module-347.js";
import module99 from "./module-99.js";
import module107 from "./module-107.js";
import module339 from "./module-339.js";
import module262 from "./module-262.js";
import module223 from "./module-223.js";
const h = function(e, t) {
    this.stopped = e;
    this.result = t;
};
const h_prototype = h.prototype;
export default function(e, t, n) {
    let m;
    let g;
    let y;
    let b;
    let C;
    let w;
    let _;
    const x = n && n.that;
    const M = !(!n || !n.AS_ENTRIES);
    const E = !(!n || !n.IS_RECORD);
    const k = !(!n || !n.IS_ITERATOR);
    const O = !(!n || !n.INTERRUPTED);
    const S = module142(t, x);
    const L = function(e) {
        if (m) {
            module223(m, "normal", e);
        }
        return new h(true, e);
    };
    const z = (e)=>{
        if (M) {
            module50(e);
            if (O) {
                return S(e[0], e[1], L);
            }
            return S(e[0], e[1]);
        }
        if (O) {
            return S(e, L);
        }
        return S(e);
    };
    if (E) {
        m = e.iterator;
    } else if (k) {
        m = e;
    } else {
        if (!(g = module262(e))) {
            throw new TypeError(`${module149(e)} is not iterable`);
        }
        if (module347(g)) {
            y = 0;
            for(b = module99(e); b > y; y++){
                if ((C = z(e[y])) && module107(h_prototype, C)) {
                    return C;
                }
            }
            return new h(false);
        }
        m = module339(e, g);
    }
    for(w = E ? e.next : m.next; !(_ = module39(w, m)).done;){
        try {
            C = z(_.value);
        } catch (error) {
            module223(m, "throw", error);
        }
        if (typeof C === "object" && C && module107(h_prototype, C)) {
            return C;
        }
    }
    return new h(false);
};
