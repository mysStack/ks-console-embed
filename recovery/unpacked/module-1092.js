import module8 from "./module-8.js";
import module39 from "./module-39.js";
import module21 from "./module-21.js";
import module80 from "./module-80.js";
import module35 from "./module-35.js";
import module103 from "./module-103.js";
import module343 from "./module-343.js";
import module46 from "./module-46.js";
import module126 from "./module-126.js";
import module351 from "./module-351.js";
import module509 from "./module-509.js";
import module40 from "./module-40.js";
import module79 from "./module-79.js";
const g = module40("replace");
const m = module21("".indexOf);
const b = module21("".replace);
const x = module21("".slice);
module8({
    target: "String",
    proto: true
}, {
    replaceAll: function(e, t) {
        let n;
        let r;
        let i;
        let h;
        let _;
        let C;
        let O;
        let E;
        let M;
        const S = module80(this);
        let A = 0;
        let k = 0;
        let j = "";
        if (!module103(e)) {
            if ((n = module343(e)) && (r = module46(module80(module351(e))), !~m(r, "g"))) {
                throw new TypeError("`.replaceAll` does not allow non-global regexes");
            }
            if (i = module126(e, g)) {
                return module39(i, e, S, t);
            }
            if (module79 && n) {
                return b(module46(S), e, t);
            }
        }
        h = module46(S);
        _ = module46(e);
        if (!(C = module35(t))) {
            t = module46(t);
        }
        O = _.length;
        E = Math.max(1, O);
        for(A = m(h, _); A !== -1;){
            M = C ? module46(t(_, A, h)) : module509(_, h, A, [], undefined, t);
            j += x(h, k, A) + M;
            k = A + O;
            A = A + E > h.length ? -1 : m(h, _, A + E);
        }
        if (k < h.length) {
            j += x(h, k);
        }
        return j;
    }
});
