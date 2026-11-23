import { isEmptyValue } from "./module-850.js";
import module890 from "./module-890.js";
export default function(e, t, n, r, a) {
    const l = [];
    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
        if (isEmptyValue(t) && !e.required) {
            return n();
        }
        module890.required(e, t, r, l, a);
        if (t !== undefined) {
            module890.type(e, t, r, l, a);
        }
    }
    n(l);
};
