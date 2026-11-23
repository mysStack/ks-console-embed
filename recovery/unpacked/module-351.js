import module39 from "./module-39.js";
import module53 from "./module-53.js";
import module107 from "./module-107.js";
import module388 from "./module-388.js";
export default function(e) {
    const e_flags = e.flags;
    if (e_flags !== undefined || "flags" in RegExp.prototype || module53(e, "flags") || !module107(RegExp.prototype, e)) {
        return e_flags;
    }
    return module39(module388, e);
};
