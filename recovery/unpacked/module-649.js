import module154 from "./module-154.js";
import module397 from "./module-397.js";
import module169 from "./module-169.js";
import module410 from "./module-410.js";
import module519 from "./module-519.js";
import module300 from "./module-300.js";
const u = module154 ? module154.prototype : undefined;
const c = u ? u.valueOf : undefined;
export default function(e, t, n, r, u, f, d) {
    switch(n){
        case "[object DataView]":
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) {
                return false;
            }
            e = e.buffer;
            t = t.buffer;
        case "[object ArrayBuffer]":
            return !(e.byteLength != t.byteLength || !f(new module397(e), new module397(t)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
            return module169(+e, +t);
        case "[object Error]":
            return e.name == t.name && e.message == t.message;
        case "[object RegExp]":
        case "[object String]":
            return e == `${t}`;
        case "[object Map]":
            var p = module519;
        case "[object Set]":
            const h = 1 & r;
            if (!p) {
                p = module300;
            }
            if (e.size != t.size && !h) {
                return false;
            }
            const v = d.get(e);
            if (v) {
                return v == t;
            }
            r |= 2;
            d.set(e, t);
            const m = module410(p(e), p(t), r, u, f, d);
            d.delete(e);
            return m;
        case "[object Symbol]":
            if (c) {
                return c.call(e) == c.call(t);
            }
    }
    return false;
};
