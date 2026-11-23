import module835 from "unpacked/module-835.js";
import module892 from "unpacked/module-892.js";
function i(e, t, n) {
    let o;
    while(t.length && (o = module835.last(t)).i <= n){
        t.pop();
        e.push(o.vs);
        n++;
    }
    return n;
}
export default function(e, t) {
    let n;
    const a = module892.partition(e, function(e) {
        return module835.has(e, "barycenter");
    });
    const a_lhs = a.lhs;
    const u = module835.sortBy(a.rhs, function(e) {
        return -e.i;
    });
    const s = [];
    let c = 0;
    let f = 0;
    let d = 0;
    a_lhs.sort((n = !!t, (e, t)=>{
        if (e.barycenter < t.barycenter) {
            return -1;
        }
        if (e.barycenter > t.barycenter) {
            return 1;
        }
        if (n) {
            return t.i - e.i;
        }
        return e.i - t.i;
    }));
    d = i(s, u, d);
    module835.forEach(a_lhs, function(e) {
        d += e.vs.length;
        s.push(e.vs);
        c += e.barycenter * e.weight;
        f += e.weight;
        d = i(s, u, d);
    });
    const p = {
        vs: module835.flatten(s, true)
    };
    if (f) {
        p.barycenter = c / f;
        p.weight = f;
    }
    return p;
};
