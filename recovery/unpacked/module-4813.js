import module33 from "./module-33.js";
import module113 from "./module-113.js";
import module1958 from "./module-1958.js";
if (module33 && !("detached" in ArrayBuffer.prototype)) {
    module113(ArrayBuffer.prototype, "detached", {
        configurable: true,
        get: function() {
            return module1958(this);
        }
    });
}
