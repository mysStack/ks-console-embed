import module835 from "./module-835.js";
import module892 from "./module-892.js";
import module4597 from "./module-4597.js";
const module4597_positionX = module4597.positionX;
export default function(e) {
    ((e)=>{
        const t = module892.buildLayerMatrix(e);
        const ranksep = e.graph().ranksep;
        let i = 0;
        module835.forEach(t, function(t) {
            const o = module835.max(module835.map(t, function(t) {
                return e.node(t).height;
            }));
            module835.forEach(t, function(t) {
                e.node(t).y = i + o / 2;
            });
            i += o + ranksep;
        });
    })(e = module892.asNonCompoundGraph(e));
    module835.forEach(module4597_positionX(e), function(t, n) {
        e.node(n).x = t;
    });
};
