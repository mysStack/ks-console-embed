import module909 from "unpacked/module-909.js";
export default function(e, t, n) {
    if (!module909.isArray(t)) {
        t = [
            t
        ];
    }
    const o = (e.isDirected() ? e.successors : e.neighbors).bind(e);
    const i = [];
    const a = {};
    module909.each(t, function(t) {
        if (!e.hasNode(t)) {
            throw new Error(`Graph does not have node: ${t}`);
        }
        (function e(t, n, o, i, a, l) {
            if (!module909.has(i, n)) {
                i[n] = true;
                if (!o) {
                    l.push(n);
                }
                module909.each(a(n), function(n) {
                    e(t, n, o, i, a, l);
                });
                if (o) {
                    l.push(n);
                }
            }
        })(e, t, n === "post", a, o, i);
    });
    return i;
};
