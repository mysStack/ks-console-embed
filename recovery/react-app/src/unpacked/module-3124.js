import module890 from "unpacked/module-890.js";
import { isEmptyValue } from "unpacked/module-850.js";
export default function(e, t, n, r, a) {
    const l = [];
    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
        if (isEmptyValue(t, "array") && !e.required) {
            return n();
        }
        module890.required(e, t, r, l, a, "array");
        if (!isEmptyValue(t, "array")) {
            module890.type(e, t, r, l, a);
            module890.range(e, t, r, l, a);
        }
    }
    n(l);
};
