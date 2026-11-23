import module71 from "unpacked/module-71.js";
import module236 from "unpacked/module-236.js";
import module94 from "unpacked/module-94.js";
import module237 from "unpacked/module-237.js";
import module235 from "unpacked/module-235.js";
import module306 from "unpacked/module-306.js";
import module308 from "unpacked/module-308.js";
import module307 from "unpacked/module-307.js";
const { ANY } = module236;
export default ((e, t, n, d)=>{
    let p;
    let h;
    let v;
    let m;
    let g;
    e = new module71(e, d);
    t = new module94(t, d);
    switch(n){
        case ">":
            p = module235;
            h = module308;
            v = module306;
            m = ">";
            g = ">=";
            break;
        case "<":
            p = module306;
            h = module307;
            v = module235;
            m = "<";
            g = "<=";
            break;
        default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (module237(e, t, d)) {
        return false;
    }
    for(let r = 0; r < t.set.length; ++r){
        const n = t.set[r];
        let i = null;
        let l = null;
        n.forEach((e)=>{
            if (e.semver === ANY) {
                e = new module236(">=0.0.0");
            }
            i = i || e;
            l = l || e;
            if (p(e.semver, i.semver, d)) {
                i = e;
            } else if (v(e.semver, l.semver, d)) {
                l = e;
            }
        });
        if (i.operator === m || i.operator === g) {
            return false;
        }
        if ((!l.operator || l.operator === m) && h(e, l.semver)) {
            return false;
        }
        if (l.operator === g && v(e, l.semver)) {
            return false;
        }
    }
    return true;
});
