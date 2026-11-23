import module8 from "./module-8.js";
import module209 from "./module-209.js";
import { f as f_1 } from "./module-115.js";
import module141 from "./module-141.js";
import module46 from "./module-46.js";
import module285 from "./module-285.js";
import module80 from "./module-80.js";
import module286 from "./module-286.js";
import module79 from "./module-79.js";
let r;
const p = module209("".slice);
const v = module286("startsWith");
module8({
    target: "String",
    proto: true,
    forced: !(!module79 && !v && (r = f_1(String.prototype, "startsWith"), r && !r.writable) || v)
}, {
    startsWith: function(e, _param_1) {
        const t = module46(module80(this));
        module285(e);
        const n = module141(Math.min(_param_1, t.length));
        const r = module46(e);
        return p(t, n, n + r.length) === r;
    }
});
