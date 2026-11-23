import module835 from "unpacked/module-835.js";
import module4578 from "unpacked/module-4578.js";
export default {
    run: function(e) {
        const t = e.graph().acyclicer === "greedy" ? module4578(e, ((e)=>function(t) {
                return e.edge(t).weight;
            })(e)) : ((e)=>{
            const t = [];
            const n = {};
            const o = {};
            module835.forEach(e.nodes(), function i(a) {
                if (!module835.has(o, a)) {
                    o[a] = true;
                    n[a] = true;
                    module835.forEach(e.outEdges(a), function(e) {
                        if (module835.has(n, e.w)) {
                            t.push(e);
                        } else {
                            i(e.w);
                        }
                    });
                    delete n[a];
                }
            });
            return t;
        })(e);
        module835.forEach(t, function(t) {
            const n = e.edge(t);
            e.removeEdge(t);
            n.forwardName = t.name;
            n.reversed = true;
            e.setEdge(t.w, t.v, n, module835.uniqueId("rev"));
        });
    },
    undo: function(e) {
        module835.forEach(e.edges(), function(t) {
            const n = e.edge(t);
            if (n.reversed) {
                e.removeEdge(t);
                const r = n.forwardName;
                delete n.reversed;
                delete n.forwardName;
                e.setEdge(t.w, t.v, n, r);
            }
        });
    }
};
