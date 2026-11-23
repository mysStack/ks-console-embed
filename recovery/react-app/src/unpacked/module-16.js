import module33 from "unpacked/module-33.js";
import module167 from "unpacked/module-167.js";
import module21 from "unpacked/module-21.js";
import module113 from "unpacked/module-113.js";
const module167_EXISTS = module167.EXISTS;
const s = module21(Function.prototype.toString);
const u = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
const c = module21(u.exec);
if (module33 && !module167_EXISTS) {
    module113(Function.prototype, "name", {
        configurable: true,
        get: function() {
            try {
                return c(u, s(this))[1];
            } catch (e) {
                return "";
            }
        }
    });
}
