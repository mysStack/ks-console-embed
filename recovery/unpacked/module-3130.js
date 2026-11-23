import module890 from "./module-890.js";
import { isEmptyValue } from "./module-850.js";
export default function(e, t, n, r, a) {
    const e_type = e.type;
    const u = [];
    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
        if (isEmptyValue(t, e_type) && !e.required) {
            return n();
        }
        module890.required(e, t, r, u, a, e_type);
        if (!isEmptyValue(t, e_type)) {
            module890.type(e, t, r, u, a);
        }
    }
    n(u);
};
