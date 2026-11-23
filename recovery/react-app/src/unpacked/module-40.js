import module25 from "./module-25.js";
import module152 from "./module-152.js";
import module53 from "./module-53.js";
import module212 from "./module-212.js";
import module151 from "./module-151.js";
import module364 from "./module-364.js";
const module25_Symbol = module25.Symbol;
const c = module152("wks");
const f = module364 ? module25_Symbol.for || module25_Symbol : module25_Symbol && module25_Symbol.withoutSetter || module212;
export default function(e) {
    if (!module53(c, e)) {
        c[e] = module151 && module53(module25_Symbol, e) ? module25_Symbol[e] : f(`Symbol.${e}`);
    }
    return c[e];
};
