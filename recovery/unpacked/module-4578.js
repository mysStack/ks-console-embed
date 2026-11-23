import module835 from "./module-835.js";
import module921 from "./module-921.js";
import module4579 from "./module-4579.js";
const module921_Graph = module921.Graph;
export default function(e, t) {
    if (e.nodeCount() <= 1) {
        return [];
    }
    const n = ((e, t)=>{
        const graph = new module921_Graph;
        let a = 0;
        let l = 0;
        module835.forEach(e.nodes(), function(v) {
            graph.setNode(v, {
                v,
                in: 0,
                out: 0
            });
        });
        module835.forEach(e.edges(), function(e) {
            const r = graph.edge(e.v, e.w) || 0;
            const o = t(e);
            const i = r + o;
            graph.setEdge(e.v, e.w, i);
            l = Math.max(l, graph.node(e.v).out += o);
            a = Math.max(a, graph.node(e.w).in += o);
        });
        const buckets = module835.range(l + a + 3).map(()=>new module4579);
        const zeroIdx = a + 1;
        module835.forEach(graph.nodes(), function(e) {
            u(buckets, zeroIdx, graph.node(e));
        });
        return {
            graph,
            buckets,
            zeroIdx
        };
    })(e, t || a);
    const s = ((e, t, n)=>{
        let r;
        let o = [];
        const i = t[t.length - 1];
        const a = t[0];
        while(e.nodeCount()){
            while(r = a.dequeue()){
                l(e, t, n, r);
            }
            while(r = i.dequeue()){
                l(e, t, n, r);
            }
            if (e.nodeCount()) {
                for(let u = t.length - 2; u > 0; --u){
                    if (r = t[u].dequeue()) {
                        o = o.concat(l(e, t, n, r, true));
                        break;
                    }
                }
            }
        }
        return o;
    })(n.graph, n.buckets, n.zeroIdx);
    return module835.flatten(module835.map(s, function(t) {
        return e.outEdges(t.v, t.w);
    }), true);
};
var a = module835.constant(1);
function l(e, t, n, o, i) {
    const a = i ? [] : undefined;
    module835.forEach(e.inEdges(o.v), function(r) {
        const o = e.edge(r);
        const l = e.node(r.v);
        if (i) {
            a.push({
                v: r.v,
                w: r.w
            });
        }
        l.out -= o;
        u(t, n, l);
    });
    module835.forEach(e.outEdges(o.v), function(r) {
        const o = e.edge(r);
        const i = r.w;
        const a = e.node(i);
        a.in -= o;
        u(t, n, a);
    });
    e.removeNode(o.v);
    return a;
}
function u(e, t, n) {
    if (n.out) {
        if (n.in) {
            e[n.out - n.in + t].enqueue(n);
        } else {
            e[e.length - 1].enqueue(n);
        }
    } else {
        e[0].enqueue(n);
    }
}
