import module8 from "./module-8.js";
import module53 from "./module-53.js";
import module166 from "./module-166.js";
import module149 from "./module-149.js";
import module152 from "./module-152.js";
import module385 from "./module-385.js";
const u = module152("symbol-to-string-registry");
module8({
    target: "Symbol",
    stat: true,
    forced: !module385
}, {
    keyFor: function(e) {
        if (!module166(e)) {
            throw new TypeError(`${module149(e)} is not a symbol`);
        }
        if (module53(u, e)) {
            return u[e];
        }
    }
});
