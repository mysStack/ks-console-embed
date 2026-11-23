import module8 from "unpacked/module-8.js";
import module209 from "unpacked/module-209.js";
import { f as f_1 } from "unpacked/module-115.js";
import module141 from "unpacked/module-141.js";
import module46 from "unpacked/module-46.js";
import module285 from "unpacked/module-285.js";
import module80 from "unpacked/module-80.js";
import module286 from "unpacked/module-286.js";
import module79 from "unpacked/module-79.js";
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
