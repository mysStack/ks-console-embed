import module909 from "unpacked/module-909.js";
import module1895 from "unpacked/module-1895.js";
export default function(e, t, n, r) {
    return ((e, t, n, r)=>{
        let i;
        let a;
        const l = {};
        const u = new module1895;
        const s = function(e) {
            const t = e.v !== i ? e.v : e.w;
            const r = l[t];
            const o = n(e);
            const s = a.distance + o;
            if (o < 0) {
                throw new Error(`dijkstra does not allow negative edge weights. Bad edge: ${e} Weight: ${o}`);
            }
            if (s < r.distance) {
                r.distance = s;
                r.predecessor = i;
                u.decrease(t, s);
            }
        };
        for(e.nodes().forEach((e)=>{
            const distance = e === t ? 0 : Number.POSITIVE_INFINITY;
            l[e] = {
                distance
            };
            u.add(e, distance);
        }); u.size() > 0 && (i = u.removeMin(), (a = l[i]).distance !== Number.POSITIVE_INFINITY);){
            r(i).forEach(s);
        }
        return l;
    })(e, String(t), n || i, r || ((t)=>e.outEdges(t)));
};
var i = module909.constant(1);
