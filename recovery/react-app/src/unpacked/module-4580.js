import module835 from "unpacked/module-835.js";
import module892 from "unpacked/module-892.js";
export default {
    run: function(e) {
        e.graph().dummyChains = [];
        module835.forEach(e.edges(), function(t) {
            ((e, edgeObj)=>{
                let n;
                let r;
                let i;
                let edgeObj_v = edgeObj.v;
                let rank = e.node(edgeObj_v).rank;
                const edgeObj_w = edgeObj.w;
                const rank_1 = e.node(edgeObj_w).rank;
                const t_name = edgeObj.name;
                const edgeLabel = e.edge(edgeObj);
                const f_labelRank = edgeLabel.labelRank;
                if (rank_1 !== rank + 1) {
                    e.removeEdge(edgeObj);
                    i = 0;
                    ++rank;
                    for(; rank < rank_1; ++i, ++rank){
                        edgeLabel.points = [];
                        r = {
                            width: 0,
                            height: 0,
                            edgeLabel,
                            edgeObj,
                            rank
                        };
                        n = module892.addDummyNode(e, "edge", r, "_d");
                        if (rank === f_labelRank) {
                            r.width = edgeLabel.width;
                            r.height = edgeLabel.height;
                            r.dummy = "edge-label";
                            r.labelpos = edgeLabel.labelpos;
                        }
                        e.setEdge(edgeObj_v, n, {
                            weight: edgeLabel.weight
                        }, t_name);
                        if (i === 0) {
                            e.graph().dummyChains.push(n);
                        }
                        edgeObj_v = n;
                    }
                    e.setEdge(edgeObj_v, edgeObj_w, {
                        weight: edgeLabel.weight
                    }, t_name);
                }
            })(e, t);
        });
    },
    undo: function(e) {
        module835.forEach(e.graph().dummyChains, function(t) {
            let n;
            let r = e.node(t);
            const r_edgeLabel = r.edgeLabel;
            for(e.setEdge(r.edgeObj, r_edgeLabel); r.dummy;){
                n = e.successors(t)[0];
                e.removeNode(t);
                r_edgeLabel.points.push({
                    x: r.x,
                    y: r.y
                });
                if (r.dummy === "edge-label") {
                    r_edgeLabel.x = r.x;
                    r_edgeLabel.y = r.y;
                    r_edgeLabel.width = r.width;
                    r_edgeLabel.height = r.height;
                }
                t = n;
                r = e.node(t);
            }
        });
    }
};
