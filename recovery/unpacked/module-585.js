import module39 from "./module-39.js";
import module78 from "./module-78.js";
import module40 from "./module-40.js";
import module67 from "./module-67.js";
export default function() {
    const e = module78("Symbol");
    const t = e && e.prototype;
    const n = t && t.valueOf;
    const l = module40("toPrimitive");
    if (t && !t[l]) {
        module67(t, l, function(e) {
            return module39(n, this);
        }, {
            arity: 1
        });
    }
};
