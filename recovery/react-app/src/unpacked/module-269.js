import module78 from "unpacked/module-78.js";
import module113 from "unpacked/module-113.js";
import module40 from "unpacked/module-40.js";
import module33 from "unpacked/module-33.js";
const l = module40("species");
export default function(e) {
    const t = module78(e);
    if (module33 && t && !t[l]) {
        module113(t, l, {
            configurable: true,
            get: function() {
                return this;
            }
        });
    }
};
