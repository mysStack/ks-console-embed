import module33 from "./module-33.js";
import module290 from "./module-290.js";
import module91 from "./module-91.js";
import module113 from "./module-113.js";
import module101 from "./module-101.js";
const module101_get = module101.get;
if (module33 && module290) {
    module113(RegExp.prototype, "dotAll", {
        configurable: true,
        get: function() {
            if (this !== RegExp.prototype) {
                if (module91(this) === "RegExp") {
                    return !!module101_get(this).dotAll;
                }
                throw new TypeError("Incompatible receiver, RegExp required");
            }
        }
    });
}
