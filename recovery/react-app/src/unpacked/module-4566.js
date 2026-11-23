import module909 from "unpacked/module-909.js";
export default function(e, t, n) {
    return ((e, t, n)=>{
        const r = {};
        const o = e.nodes();
        o.forEach((predecessor)=>{
            r[predecessor] = {};
            r[predecessor][predecessor] = {
                distance: 0
            };
            o.forEach((t)=>{
                if (predecessor !== t) {
                    r[predecessor][t] = {
                        distance: Number.POSITIVE_INFINITY
                    };
                }
            });
            n(predecessor).forEach((n)=>{
                const o = n.v === predecessor ? n.w : n.v;
                const distance = t(n);
                r[predecessor][o] = {
                    distance,
                    predecessor
                };
            });
        });
        o.forEach((e)=>{
            const t = r[e];
            o.forEach((n)=>{
                const i = r[n];
                o.forEach((n)=>{
                    const r = i[e];
                    const o = t[n];
                    const a = i[n];
                    const l = r.distance + o.distance;
                    if (l < a.distance) {
                        a.distance = l;
                        a.predecessor = o.predecessor;
                    }
                });
            });
        });
        return r;
    })(e, t || o, n || ((t)=>e.outEdges(t)));
};
var o = module909.constant(1);
