import module909 from "./module-909.js";
export default function(e) {
    let t;
    const n = {};
    const o = [];
    function i(o) {
        if (!module909.has(n, o)) {
            n[o] = true;
            t.push(o);
            module909.each(e.successors(o), i);
            module909.each(e.predecessors(o), i);
        }
    }
    module909.each(e.nodes(), function(e) {
        t = [];
        i(e);
        if (t.length) {
            o.push(t);
        }
    });
    return o;
};
