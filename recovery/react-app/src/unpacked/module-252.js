import module33 from "./module-33.js";
import module225 from "./module-225.js";
import module91 from "./module-91.js";
import module113 from "./module-113.js";
import module101 from "./module-101.js";
const module225_MISSED_STICKY = module225.MISSED_STICKY;
const module101_get = module101.get;
if (module33 && module225_MISSED_STICKY) {
    module113(RegExp.prototype, "sticky", {
        configurable: true,
        get: function() {
            if (this !== RegExp.prototype) {
                if (module91(this) === "RegExp") {
                    return !!module101_get(this).sticky;
                }
                throw new TypeError("Incompatible receiver, RegExp required");
            }
        }
    });
}
