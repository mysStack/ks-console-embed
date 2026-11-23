import module39 from "./module-39.js";
import module226 from "./module-226.js";
import module50 from "./module-50.js";
import module103 from "./module-103.js";
import module141 from "./module-141.js";
import module46 from "./module-46.js";
import module80 from "./module-80.js";
import module126 from "./module-126.js";
import module292 from "./module-292.js";
import module227 from "./module-227.js";
module226("match", function(e, t, n) {
    return [
        function(t) {
            const n = module80(this);
            const o = module103(t) ? undefined : module126(t, e);
            if (o) {
                return module39(o, t, n);
            }
            return new RegExp(t)[e](module46(n));
        },
        function(e) {
            const r = module50(this);
            const o = module46(e);
            const i = n(t, r, o);
            if (i.done) {
                return i.value;
            }
            if (!r.global) {
                return module227(r, o);
            }
            const r_unicode = r.unicode;
            r.lastIndex = 0;
            let c;
            const p = [];
            let h = 0;
            while((c = module227(r, o)) !== null){
                const v = module46(c[0]);
                p[h] = v;
                if (v === "") {
                    r.lastIndex = module292(o, module141(r.lastIndex), r_unicode);
                }
                h++;
            }
            if (h === 0) {
                return null;
            }
            return p;
        }
    ];
});
