import module8 from "./module-8.js";
import module78 from "./module-78.js";
import module145 from "./module-145.js";
import module422 from "./module-422.js";
import module345 from "./module-345.js";
import module50 from "./module-50.js";
import module54 from "./module-54.js";
import module114 from "./module-114.js";
import module19 from "./module-19.js";
const d = module78("Reflect", "construct");
const push = [].push;
const v = module19(function() {
    function e() {}
    return !(d(function() {}, [], e) instanceof e);
});
const m = !module19(function() {
    d(function() {});
});
const g = v || m;
module8({
    target: "Reflect",
    stat: true,
    forced: g,
    sham: g
}, {
    construct: function(e, t) {
        module345(e);
        module50(t);
        const n = arguments.length < 3 ? e : module345(arguments[2]);
        if (m && !v) {
            return d(e, t, n);
        }
        if (e === n) {
            switch(t.length){
                case 0:
                    return new e;
                case 1:
                    return new e(t[0]);
                case 2:
                    return new e(t[0], t[1]);
                case 3:
                    return new e(t[0], t[1], t[2]);
                case 4:
                    return new e(t[0], t[1], t[2], t[3]);
            }
            const r = [
                null
            ];
            module145(push, r, t);
            return new (module145(module422, e, r));
        }
        const n_prototype = n.prototype;
        const f = module114(module54(n_prototype) ? n_prototype : Object.prototype);
        const g = module145(e, f, t);
        if (module54(g)) {
            return g;
        }
        return f;
    }
});
