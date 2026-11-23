import module21 from "unpacked/module-21.js";
import module67 from "unpacked/module-67.js";
const i = module21(Date.prototype.toString);
const l = module21(Date.prototype.getTime);
if (String(new Date(NaN)) !== "Invalid Date") {
    module67(Date.prototype, "toString", function() {
        const e = l(this);
        if (e == e) {
            return i(this);
        }
        return "Invalid Date";
    });
}
