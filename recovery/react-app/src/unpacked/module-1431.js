import module8 from "unpacked/module-8.js";
import module25 from "unpacked/module-25.js";
import module78 from "unpacked/module-78.js";
import module21 from "unpacked/module-21.js";
import module39 from "unpacked/module-39.js";
import module19 from "unpacked/module-19.js";
import module46 from "unpacked/module-46.js";
import module328 from "unpacked/module-328.js";
import module4513 from "unpacked/module-4513.js";
const module4513_c2i = module4513.c2i;
const d = /[^\d+/a-z]/i;
const p = /[\t\n\f\r ]+/g;
const h = /[=]{1,2}$/;
const v = module78("atob");
const y = module21("".charAt);
const m = module21("".replace);
const b = module21(d.exec);
const x = !!v && !module19(function() {
    return v("aGk=") !== "hi";
});
const w = x && module19(function() {
    return v(" ") !== "";
});
const _ = x && !module19(function() {
    v("a");
});
const C = x && !module19(function() {
    v();
});
const O = x && v.length !== 1;
module8({
    global: true,
    bind: true,
    enumerable: true,
    forced: !x || w || _ || C || O
}, {
    atob: function(e) {
        module328(arguments.length, 1);
        if (x && !w && !_) {
            return module39(v, module25, e);
        }
        let t;
        let n;
        let r;
        let a = m(module46(e), p, "");
        let u = "";
        let C = 0;
        let O = 0;
        if (a.length % 4 == 0) {
            a = m(a, h, "");
        }
        if ((t = a.length) % 4 == 1 || b(d, a)) {
            throw new (module78("DOMException"))("The string is not correctly encoded", "InvalidCharacterError");
        }
        while(C < t){
            n = y(a, C++);
            r = O % 4 ? 64 * r + module4513_c2i[n] : module4513_c2i[n];
            if (O++ % 4) {
                u += String.fromCharCode(255 & r >> (-2 * O & 6));
            }
        }
        return u;
    }
});
