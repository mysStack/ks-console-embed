import module890 from "./module-890.js";
import { isEmptyValue } from "./module-850.js";
export default function(e, t, n, r, a) {
    const l = [];
    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
        if (isEmptyValue(t) && !e.required) {
            return n();
        }
        module890.required(e, t, r, l, a);
        if (t) {
            module890.enum(e, t, r, l, a);
        }
    }
    n(l);
};
