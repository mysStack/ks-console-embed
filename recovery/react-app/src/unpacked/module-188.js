import module39 from "./module-39.js";
import module226 from "./module-226.js";
import module50 from "./module-50.js";
import module103 from "./module-103.js";
import module80 from "./module-80.js";
import module763 from "./module-763.js";
import module46 from "./module-46.js";
import module126 from "./module-126.js";
import module227 from "./module-227.js";
module226("search", function(e, t, n) {
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
            const r_lastIndex = r.lastIndex;
            if (!module763(r_lastIndex, 0)) {
                r.lastIndex = 0;
            }
            const c = module227(r, o);
            if (!module763(r.lastIndex, r_lastIndex)) {
                r.lastIndex = r_lastIndex;
            }
            if (c === null) {
                return -1;
            }
            return c.index;
        }
    ];
});
