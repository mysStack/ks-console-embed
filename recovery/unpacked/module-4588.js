import module835 from "./module-835.js";
export default function(e) {
    const t = {};
    const n = module835.filter(e.nodes(), function(t) {
        return !e.children(t).length;
    });
    const o = module835.max(module835.map(n, function(t) {
        return e.node(t).rank;
    }));
    const i = module835.map(module835.range(o + 1), function() {
        return [];
    });
    const a = module835.sortBy(n, function(t) {
        return e.node(t).rank;
    });
    module835.forEach(a, function n(o) {
        if (!module835.has(t, o)) {
            t[o] = true;
            const a = e.node(o);
            i[a.rank].push(o);
            module835.forEach(e.successors(o), n);
        }
    });
    return i;
};
