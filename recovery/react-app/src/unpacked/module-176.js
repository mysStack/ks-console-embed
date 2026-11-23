import module25 from "unpacked/module-25.js";
import module153 from "unpacked/module-153.js";
import module35 from "unpacked/module-35.js";
import module174 from "unpacked/module-174.js";
import module282 from "unpacked/module-282.js";
import module40 from "unpacked/module-40.js";
import module501 from "unpacked/module-501.js";
import module346 from "unpacked/module-346.js";
import module79 from "unpacked/module-79.js";
import module146 from "unpacked/module-146.js";
const p = module153 && module153.prototype;
const h = module40("species");
let SUBCLASSING = false;
const REJECTION_EVENT = module35(module25.PromiseRejectionEvent);
const CONSTRUCTOR = module174("Promise", function() {
    const e = module282(module153);
    const t = e !== String(module153);
    if (!t && module146 === 66) {
        return true;
    }
    if (module79 && (!p.catch || !p.finally)) {
        return true;
    }
    if (!module146 || module146 < 51 || !/native code/.test(e)) {
        const n = new module153(function(e) {
            e(1);
        });
        const r = function(e) {
            e(function() {}, function() {});
        };
        (n.constructor = {})[h] = r;
        if (!(SUBCLASSING = n.then(()=>{}) instanceof r)) {
            return true;
        }
    }
    return !t && (module501 || module346) && !REJECTION_EVENT;
});
export default {
    CONSTRUCTOR,
    REJECTION_EVENT,
    SUBCLASSING
};
