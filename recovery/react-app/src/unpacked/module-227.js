import module39 from "unpacked/module-39.js";
import module50 from "unpacked/module-50.js";
import module35 from "unpacked/module-35.js";
import module91 from "unpacked/module-91.js";
import module291 from "unpacked/module-291.js";
export default function(e, t) {
    const e_exec = e.exec;
    if (module35(e_exec)) {
        const u = module39(e_exec, e, t);
        if (u !== null) {
            module50(u);
        }
        return u;
    }
    if (module91(e) === "RegExp") {
        return module39(module291, e, t);
    }
    throw new TypeError("RegExp#exec called on incompatible receiver");
};
