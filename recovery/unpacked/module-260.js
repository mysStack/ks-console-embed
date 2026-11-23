import module53 from "./module-53.js";
import module35 from "./module-35.js";
import module77 from "./module-77.js";
import module220 from "./module-220.js";
import module537 from "./module-537.js";
const s = module220("IE_PROTO");
export default module537 ? Object.getPrototypeOf : function(e) {
    const t = module77(e);
    if (module53(t, s)) {
        return t[s];
    }
    const t_constructor = t.constructor;
    if (module35(t_constructor) && t instanceof t_constructor) {
        return t_constructor.prototype;
    }
    if (t instanceof Object) {
        return Object.prototype;
    }
    return null;
};
