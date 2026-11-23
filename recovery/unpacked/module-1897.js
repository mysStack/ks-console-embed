import module909 from "./module-909.js";
function o(e) {
    const t = {};
    const n = {};
    const o = [];
    module909.each(e.sinks(), function a(l) {
        if (module909.has(n, l)) {
            throw new i;
        }
        if (!module909.has(t, l)) {
            n[l] = true;
            t[l] = true;
            module909.each(e.predecessors(l), a);
            delete n[l];
            o.push(l);
        }
    });
    if (module909.size(t) !== e.nodeCount()) {
        throw new i;
    }
    return o;
}
function i() {}
export default o;
o.CycleException = i;
i.prototype = new Error;
