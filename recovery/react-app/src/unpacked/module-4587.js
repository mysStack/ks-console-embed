import module835 from "unpacked/module-835.js";
import module4588 from "unpacked/module-4588.js";
import module4589 from "unpacked/module-4589.js";
import module4590 from "unpacked/module-4590.js";
import module4594 from "unpacked/module-4594.js";
import module4595 from "unpacked/module-4595.js";
import module921 from "unpacked/module-921.js";
import module892 from "unpacked/module-892.js";
const module921_Graph = module921.Graph;
function f(e, t, n) {
    return module835.map(t, function(t) {
        return module4594(e, t, n);
    });
}
function d(e, t) {
    const n = new module921_Graph;
    module835.forEach(e, function(e) {
        const root = e.graph().root;
        const i = module4590(e, root, n, t);
        module835.forEach(i.vs, function(t, n) {
            e.node(t).order = n;
        });
        module4595(e, n, i.vs);
    });
}
function p(e, t) {
    module835.forEach(t, function(t) {
        module835.forEach(t, function(t, n) {
            e.node(t).order = n;
        });
    });
}
export default function(e) {
    const t = module892.maxRank(e);
    const n = f(e, module835.range(1, t + 1), "inEdges");
    const a = f(e, module835.range(t - 1, -1, -1), "outEdges");
    let l = module4588(e);
    p(e, l);
    let u;
    let Number_POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    for(let h = 0, v = 0; v < 4; ++h, ++v){
        d(h % 2 ? n : a, h % 4 >= 2);
        l = module892.buildLayerMatrix(e);
        const g = module4589(e, l);
        if (g < Number_POSITIVE_INFINITY) {
            v = 0;
            u = module835.cloneDeep(l);
            Number_POSITIVE_INFINITY = g;
        }
    }
    p(e, u);
};
