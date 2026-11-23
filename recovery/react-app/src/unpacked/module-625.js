import module393 from "./module-393.js";
import module395 from "./module-395.js";
import module396 from "./module-396.js";
import module337 from "./module-337.js";
import module398 from "./module-398.js";
import module180 from "./module-180.js";
import module60 from "./module-60.js";
import module333 from "./module-333.js";
import module170 from "./module-170.js";
import module194 from "./module-194.js";
import module76 from "./module-76.js";
import module264 from "./module-264.js";
import module216 from "./module-216.js";
import module400 from "./module-400.js";
import module629 from "./module-629.js";
export default function(e, t, n, y, b, C, w) {
    const _ = module400(e, n);
    const x = module400(t, n);
    const M = w.get(x);
    if (M) {
        module393(e, n, M);
    } else {
        let E = C ? C(_, x, `${n}`, e, t, w) : undefined;
        let k = E === undefined;
        if (k) {
            const O = module60(x);
            const S = !O && module170(x);
            const L = !O && !S && module216(x);
            E = x;
            if (O || S || L) {
                if (module60(_)) {
                    E = _;
                } else if (module333(_)) {
                    E = module337(_);
                } else if (S) {
                    k = false;
                    E = module395(x, true);
                } else if (L) {
                    k = false;
                    E = module396(x, true);
                } else {
                    E = [];
                }
            } else if (module264(x) || module180(x)) {
                E = _;
                if (module180(_)) {
                    E = module629(_);
                } else if (!(module76(_) && !module194(_))) {
                    E = module398(x);
                }
            } else {
                k = false;
            }
        }
        if (k) {
            w.set(x, E);
            b(E, x, y, C, w);
            w.delete(x);
        }
        module393(e, n, E);
    }
};
