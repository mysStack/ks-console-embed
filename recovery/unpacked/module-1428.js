import module822 from "./module-822.js";
import module1426 from "./module-1426.js";
import module990 from "./module-990.js";
import module1429 from "./module-1429.js";
const l = `[${module1429}]`;
const u = RegExp(`^${l}${l}*`);
const s = RegExp(`${l + l}*\$`);
const c = function(e, t, n) {
    const o = {};
    const l = module990(function() {
        return !!module1429[e]() || "​"[e]() != "​";
    });
    const u = o[e] = l ? t(f) : module1429[e];
    if (n) {
        o[n] = u;
    }
    module822(module822.P + module822.F * l, "String", o);
};
var f = c.trim = function(e, t) {
    e = String(module1426(e));
    if (1 & t) {
        e = e.replace(u, "");
    }
    if (2 & t) {
        e = e.replace(s, "");
    }
    return e;
};
export default c;
