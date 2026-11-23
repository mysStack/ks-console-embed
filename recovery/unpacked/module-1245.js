import module835 from "./module-835.js";
export default {
    longestPath: function(e) {
        const t = {};
        module835.forEach(e.sources(), function n(o) {
            const i = e.node(o);
            if (module835.has(t, o)) {
                return i.rank;
            }
            t[o] = true;
            let a = module835.min(module835.map(e.outEdges(o), function(t) {
                return n(t.w) - e.edge(t).minlen;
            }));
            if (!(a !== Number.POSITIVE_INFINITY && a != null)) {
                a = 0;
            }
            return i.rank = a;
        });
    },
    slack: function(e, t) {
        return e.node(t.w).rank - e.node(t.v).rank - e.edge(t).minlen;
    }
};
