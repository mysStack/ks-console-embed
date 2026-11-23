import module798 from "./module-798.js";
import { decimal } from "./module-1105.js";
export default function(e, t) {
    module798(e);
    t = t || {};
    const n = new RegExp(`^(?:[-+])?(?:[0-9]+)?(?:\\${t.locale ? decimal[t.locale] : "."}[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?\$`);
    if (e === "" || e === "." || e === "," || e === "-" || e === "+") {
        return false;
    }
    const r = parseFloat(e.replace(",", "."));
    return n.test(e) && (!t.hasOwnProperty("min") || r >= t.min) && (!t.hasOwnProperty("max") || r <= t.max) && (!t.hasOwnProperty("lt") || r < t.lt) && (!t.hasOwnProperty("gt") || r > t.gt);
};
export const locales = Object.keys(decimal);
