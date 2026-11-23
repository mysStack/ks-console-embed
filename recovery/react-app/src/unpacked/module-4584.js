import module835 from "unpacked/module-835.js";
import module892 from "unpacked/module-892.js";
export default {
    run: function(e) {
        const t = module892.addDummyNode(e, "root", {}, "_root");
        const n = ((e)=>{
            const t = {};
            module835.forEach(e.children(), function(n) {
                (function n(o, i) {
                    const a = e.children(o);
                    if (a && a.length) {
                        module835.forEach(a, function(e) {
                            n(e, i + 1);
                        });
                    }
                    t[o] = i;
                })(n, 1);
            });
            return t;
        })(e);
        const i = module835.max(module835.values(n)) - 1;
        const a = 2 * i + 1;
        e.graph().nestingRoot = t;
        module835.forEach(e.edges(), function(t) {
            e.edge(t).minlen *= a;
        });
        const l = ((e)=>module835.reduce(e.edges(), function(t, n) {
                return t + e.edge(n).weight;
            }, 0))(e) + 1;
        module835.forEach(e.children(), function(u) {
            (function e(t, n, minlen_1, a, l, u, s) {
                const c = t.children(s);
                if (c.length) {
                    const f = module892.addBorderNode(t, "_bt");
                    const d = module892.addBorderNode(t, "_bb");
                    const p = t.node(s);
                    t.setParent(f, s);
                    p.borderTop = f;
                    t.setParent(d, s);
                    p.borderBottom = d;
                    module835.forEach(c, function(r) {
                        e(t, n, minlen_1, a, l, u, r);
                        const o = t.node(r);
                        const c = o.borderTop ? o.borderTop : r;
                        const p = o.borderBottom ? o.borderBottom : r;
                        const weight = o.borderTop ? a : 2 * a;
                        const minlen = c !== p ? 1 : l - u[s] + 1;
                        t.setEdge(f, c, {
                            weight,
                            minlen,
                            nestingEdge: true
                        });
                        t.setEdge(p, d, {
                            weight,
                            minlen,
                            nestingEdge: true
                        });
                    });
                    if (!t.parent(s)) {
                        t.setEdge(n, f, {
                            weight: 0,
                            minlen: l + u[s]
                        });
                    }
                } else {
                    if (s !== n) {
                        t.setEdge(n, s, {
                            weight: 0,
                            minlen: minlen_1
                        });
                    }
                }
            })(e, t, a, l, i, n, u);
        });
        e.graph().nodeRankFactor = a;
    },
    cleanup: function(e) {
        const t = e.graph();
        e.removeNode(t.nestingRoot);
        delete t.nestingRoot;
        module835.forEach(e.edges(), function(t) {
            if (e.edge(t).nestingEdge) {
                e.removeEdge(t);
            }
        });
    }
};
