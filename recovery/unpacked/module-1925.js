import module67 from "./module-67.js";
import module21 from "./module-21.js";
import module46 from "./module-46.js";
import module328 from "./module-328.js";
const l = URLSearchParams;
const l_prototype = l.prototype;
const s = module21(l_prototype.append);
const c = module21(l_prototype.delete);
const f = module21(l_prototype.forEach);
const d = module21([].push);
const p = new l("a=1&a=2&b=3");
p.delete("a", 1);
p.delete("b", undefined);
if (`${p}` != "a=2") {
    module67(l_prototype, "delete", function(e) {
        const arguments_length = arguments.length;
        const n = arguments_length < 2 ? undefined : arguments[1];
        if (arguments_length && n === undefined) {
            return c(this, e);
        }
        const r = [];
        f(this, function(value, key) {
            d(r, {
                key,
                value
            });
        });
        module328(arguments_length, 1);
        let o;
        const l = module46(e);
        const u = module46(n);
        for(var p = 0, h = 0, v = false, g = r.length; p < g;){
            o = r[p++];
            if (v || o.key === l) {
                v = true;
                c(this, o.key);
            } else {
                h++;
            }
        }
        while(h < g){
            if (!((o = r[h++]).key === l && o.value === u)) {
                s(this, o.key, o.value);
            }
        }
    }, {
        enumerable: true,
        unsafe: true
    });
}
