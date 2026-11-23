import module835 from "./module-835.js";
export default function(e, t) {
    return module835.map(t, function(v) {
        const n = e.inEdges(v);
        if (n.length) {
            const o = module835.reduce(n, function(t, n) {
                const r = e.edge(n);
                const o = e.node(n.v);
                return {
                    sum: t.sum + r.weight * o.order,
                    weight: t.weight + r.weight
                };
            }, {
                sum: 0,
                weight: 0
            });
            return {
                v,
                barycenter: o.sum / o.weight,
                weight: o.weight
            };
        }
        return {
            v
        };
    });
};
