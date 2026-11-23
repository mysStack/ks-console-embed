import module835 from "./module-835.js";
import module4591 from "./module-4591.js";
import module4592 from "./module-4592.js";
import module4593 from "./module-4593.js";
export default (function e(t, n, l, u) {
    let s = t.children(n);
    const c = t.node(n);
    const f = c ? c.borderLeft : undefined;
    const d = c ? c.borderRight : undefined;
    const p = {};
    if (f) {
        s = module835.filter(s, function(e) {
            return e !== f && e !== d;
        });
    }
    const h = module4591(t, s);
    module835.forEach(h, function(n) {
        if (t.children(n.v).length) {
            const o = e(t, n.v, l, u);
            p[n.v] = o;
            if (module835.has(o, "barycenter")) {
                i = n;
                a = o;
                if (module835.isUndefined(i.barycenter)) {
                    i.barycenter = a.barycenter;
                    i.weight = a.weight;
                } else {
                    i.barycenter = (i.barycenter * i.weight + a.barycenter * a.weight) / (i.weight + a.weight);
                    i.weight += a.weight;
                }
            }
        }
        var i;
        var a;
    });
    const v = module4592(h, l);
    ((e, t)=>{
        module835.forEach(e, function(e) {
            e.vs = module835.flatten(e.vs.map((e)=>{
                if (t[e]) {
                    return t[e].vs;
                }
                return e;
            }), true);
        });
    })(v, p);
    const g = module4593(v, u);
    if (f && (g.vs = module835.flatten([
        f,
        g.vs,
        d
    ], true), t.predecessors(f).length)) {
        const y = t.node(t.predecessors(f)[0]);
        const m = t.node(t.predecessors(d)[0]);
        if (!module835.has(g, "barycenter")) {
            g.barycenter = 0;
            g.weight = 0;
        }
        g.barycenter = (g.barycenter * g.weight + y.order + m.order) / (g.weight + 2);
        g.weight += 2;
    }
    return g;
});
