import module33 from "./module-33.js";
import module21 from "./module-21.js";
import module113 from "./module-113.js";
const URLSearchParams_prototype = URLSearchParams.prototype;
const l = module21(URLSearchParams_prototype.forEach);
if (module33 && !("size" in URLSearchParams_prototype)) {
    module113(URLSearchParams_prototype, "size", {
        get: function() {
            let e = 0;
            l(this, function() {
                e++;
            });
            return e;
        },
        configurable: true,
        enumerable: true
    });
}
