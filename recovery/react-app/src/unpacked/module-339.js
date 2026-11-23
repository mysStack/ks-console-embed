import module39 from "./module-39.js";
import module89 from "./module-89.js";
import module50 from "./module-50.js";
import module149 from "./module-149.js";
import module262 from "./module-262.js";
export default function(e, t) {
    const n = arguments.length < 2 ? module262(e) : t;
    if (module89(n)) {
        return module50(module39(n, e));
    }
    throw new TypeError(`${module149(e)} is not iterable`);
};
