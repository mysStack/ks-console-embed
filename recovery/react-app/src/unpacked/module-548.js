import module8 from "unpacked/module-8.js";
import module79 from "unpacked/module-79.js";
import module176 from "unpacked/module-176.js";
import module153 from "unpacked/module-153.js";
import module78 from "unpacked/module-78.js";
import module35 from "unpacked/module-35.js";
import module67 from "unpacked/module-67.js";
const module176_CONSTRUCTOR = module176.CONSTRUCTOR;
const c = module153 && module153.prototype;
module8({
    target: "Promise",
    proto: true,
    forced: module176_CONSTRUCTOR,
    real: true
}, {
    catch: function(e) {
        return this.then(undefined, e);
    }
});
if (!module79 && module35(module153)) {
    const f = module78("Promise").prototype.catch;
    if (c.catch !== f) {
        module67(c, "catch", f, {
            unsafe: true
        });
    }
}
