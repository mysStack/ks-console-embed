import module8 from "./module-8.js";
import module19 from "./module-19.js";
import module127 from "./module-127.js";
import module54 from "./module-54.js";
import module77 from "./module-77.js";
import module99 from "./module-99.js";
import module263 from "./module-263.js";
import module178 from "./module-178.js";
import module259 from "./module-259.js";
import module179 from "./module-179.js";
import module40 from "./module-40.js";
import module146 from "./module-146.js";
const v = module40("isConcatSpreadable");
const m = module146 >= 51 || !module19(function() {
    const e = [];
    e[v] = false;
    return e.concat()[0] !== e;
});
const g = (e)=>{
    if (!module54(e)) {
        return false;
    }
    const t = e[v];
    if (t !== undefined) {
        return !!t;
    }
    return module127(e);
};
module8({
    target: "Array",
    proto: true,
    arity: 1,
    forced: !m || !module179("concat")
}, {
    concat: function(e) {
        let t;
        let n;
        let r;
        let o;
        let a;
        const i = module77(this);
        const d = module259(i, 0);
        let p = 0;
        t = -1;
        for(r = arguments.length; t < r; t++){
            if (g(a = t === -1 ? i : arguments[t])) {
                o = module99(a);
                module263(p + o);
                for(n = 0; n < o; n++, p++){
                    if (n in a) {
                        module178(d, p, a[n]);
                    }
                }
            } else {
                module263(p + 1);
                module178(d, p++, a);
            }
        }
        d.length = p;
        return d;
    }
});
