import module835 from "unpacked/module-835.js";
import module921 from "unpacked/module-921.js";
const module921_Graph = module921.Graph;
export default function(e, t, n) {
    const root = ((e)=>{
        let t;
        while(e.hasNode(t = module835.uniqueId("_root")));
        return t;
    })(e);
    const a = new module921_Graph({
        compound: true
    }).setGraph({
        root
    }).setDefaultNodeLabel(function(t) {
        return e.node(t);
    });
    module835.forEach(e.nodes(), function(o) {
        const l = e.node(o);
        const u = e.parent(o);
        if (l.rank === t || l.minRank <= t && t <= l.maxRank) {
            a.setNode(o);
            a.setParent(o, u || root);
            module835.forEach(e[n](o), function(t) {
                const n = t.v === o ? t.w : t.v;
                const i = a.edge(n, o);
                const l = module835.isUndefined(i) ? 0 : i.weight;
                a.setEdge(n, o, {
                    weight: e.edge(t).weight + l
                });
            });
            if (module835.has(l, "minRank")) {
                a.setNode(o, {
                    borderLeft: l.borderLeft[t],
                    borderRight: l.borderRight[t]
                });
            }
        }
    });
    return a;
};
