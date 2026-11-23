import module78 from "./module-78.js";
import module21 from "./module-21.js";
import module150 from "./module-150.js";
import module221 from "./module-221.js";
import module50 from "./module-50.js";
const s = module21([].concat);
export default module78("Reflect", "ownKeys") || function(e) {
    const t = module150.f(module50(e));
    const n = module221.f;
    if (n) {
        return s(t, n(e));
    }
    return t;
};
