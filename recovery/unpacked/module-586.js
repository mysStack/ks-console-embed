import module8 from "./module-8.js";
import module78 from "./module-78.js";
import module53 from "./module-53.js";
import module46 from "./module-46.js";
import module152 from "./module-152.js";
import module385 from "./module-385.js";
const u = module152("string-to-symbol-registry");
const c = module152("symbol-to-string-registry");
module8({
    target: "Symbol",
    stat: true,
    forced: !module385
}, {
    for: function(e) {
        const t = module46(e);
        if (module53(u, t)) {
            return u[t];
        }
        const n = module78("Symbol")(t);
        u[t] = n;
        c[n] = t;
        return n;
    }
});
