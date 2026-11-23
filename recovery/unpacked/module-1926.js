import module67 from "./module-67.js";
import module21 from "./module-21.js";
import module46 from "./module-46.js";
import module328 from "./module-328.js";
const l = URLSearchParams;
const l_prototype = l.prototype;
const s = module21(l_prototype.getAll);
const c = module21(l_prototype.has);
const f = new l("a=1");
if (!(!f.has("a", 2) && f.has("a", undefined))) {
    module67(l_prototype, "has", function(e) {
        const arguments_length = arguments.length;
        const n = arguments_length < 2 ? undefined : arguments[1];
        if (arguments_length && n === undefined) {
            return c(this, e);
        }
        const r = s(this, e);
        module328(arguments_length, 1);
        const o = module46(n);
        for(let l = 0; l < r.length;){
            if (r[l++] === o) {
                return true;
            }
        }
        return false;
    }, {
        enumerable: true,
        unsafe: true
    });
}
