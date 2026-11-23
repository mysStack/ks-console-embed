import module835 from "./module-835.js";
import module892 from "./module-892.js";
import module921 from "./module-921.js";
const module921_Graph = module921.Graph;
export default {
    debugOrdering: function(e) {
        const t = module892.buildLayerMatrix(e);
        const n = new module921_Graph({
            compound: true,
            multigraph: true
        }).setGraph({});
        module835.forEach(e.nodes(), function(label) {
            n.setNode(label, {
                label
            });
            n.setParent(label, `layer${e.node(label).rank}`);
        });
        module835.forEach(e.edges(), function(e) {
            n.setEdge(e.v, e.w, {}, e.name);
        });
        module835.forEach(t, function(e, t) {
            const o = `layer${t}`;
            n.setNode(o, {
                rank: "same"
            });
            module835.reduce(e, function(e, t) {
                n.setEdge(e, t, {
                    style: "invis"
                });
                return t;
            });
        });
        return n;
    }
};
