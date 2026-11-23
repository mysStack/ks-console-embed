import module21 from "unpacked/module-21.js";
import module89 from "unpacked/module-89.js";
import module54 from "unpacked/module-54.js";
import module53 from "unpacked/module-53.js";
import module124 from "unpacked/module-124.js";
import module172 from "unpacked/module-172.js";
const c = module21([].concat);
const f = module21([].join);
const d = {};
const p = (e, t, n)=>{
    if (!module53(d, t)) {
        const r = [];
        for(let o = 0; o < t; o++){
            r[o] = `a[${o}]`;
        }
        d[t] = Function("C,a", `return new C(${f(r, ",")})`);
    }
    return d[t](e, n);
};
export default module172 ? Function.bind : function(e) {
    const t = module89(this);
    const t_prototype = t.prototype;
    const r = module124(arguments, 1);
    const i = function() {
        const n = c(r, module124(arguments));
        if (this instanceof i) {
            return p(t, n.length, n);
        }
        return t.apply(e, n);
    };
    if (module54(t_prototype)) {
        i.prototype = t_prototype;
    }
    return i;
};
