import module909 from "unpacked/module-909.js";
import module1442 from "unpacked/module-1442.js";
import module1895 from "unpacked/module-1895.js";
export default function(e, t) {
    let n;
    const a = new module1442;
    const l = {};
    const u = new module1895;
    function s(e) {
        const r = e.v === n ? e.w : e.v;
        const o = u.priority(r);
        if (o !== undefined) {
            const i = t(e);
            if (i < o) {
                l[r] = n;
                u.decrease(r, i);
            }
        }
    }
    if (e.nodeCount() === 0) {
        return a;
    }
    module909.each(e.nodes(), function(e) {
        u.add(e, Number.POSITIVE_INFINITY);
        a.setNode(e);
    });
    u.decrease(e.nodes()[0], 0);
    let c = false;
    while(u.size() > 0){
        n = u.removeMin();
        if (module909.has(l, n)) {
            a.setEdge(n, l[n]);
        } else {
            if (c) {
                throw new Error(`Input graph is not connected: ${e}`);
            }
            c = true;
        }
        e.nodeEdges(n).forEach(s);
    }
    return a;
};
