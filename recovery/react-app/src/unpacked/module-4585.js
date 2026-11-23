import module835 from "unpacked/module-835.js";
import module892 from "unpacked/module-892.js";
function i(e, borderType, n, r, i, rank) {
    const l = {
        width: 0,
        height: 0,
        rank,
        borderType
    };
    const u = i[borderType][rank - 1];
    const s = module892.addDummyNode(e, "border", l, n);
    i[borderType][rank] = s;
    e.setParent(s, r);
    if (u) {
        e.setEdge(u, s, {
            weight: 1
        });
    }
}
export default function(e) {
    module835.forEach(e.children(), function t(n) {
        const o = e.children(n);
        const a = e.node(n);
        if (o.length) {
            module835.forEach(o, t);
        }
        if (module835.has(a, "minRank")) {
            a.borderLeft = [];
            a.borderRight = [];
            for(let l = a.minRank, u = a.maxRank + 1; l < u; ++l){
                i(e, "borderLeft", "_bl", n, a, l);
                i(e, "borderRight", "_br", n, a, l);
            }
        }
    });
};
