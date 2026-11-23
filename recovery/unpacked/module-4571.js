import module835 from "./module-835.js";
import module4577 from "./module-4577.js";
import module4580 from "./module-4580.js";
import module4581 from "./module-4581.js";
import module892 from "./module-892.js";
import module4583 from "./module-4583.js";
import module4584 from "./module-4584.js";
import module4585 from "./module-4585.js";
import module4586 from "./module-4586.js";
import module4587 from "./module-4587.js";
import module4596 from "./module-4596.js";
import module921 from "./module-921.js";
const { normalizeRanks, removeEmptyRanks } = module892;
const module921_Graph = module921.Graph;
export default function(e, t) {
    const n = t && t.debugTiming ? _l.time : _l.notime;
    n("layout", function() {
        const t = n("  buildLayoutGraph", function() {
            return ((e)=>{
                const t = new module921_Graph({
                    multigraph: true,
                    compound: true
                });
                const n = M(e.graph());
                t.setGraph(module835.merge({}, m, E(n, y), module835.pick(n, b)));
                module835.forEach(e.nodes(), function(n) {
                    const o = M(e.node(n));
                    t.setNode(n, module835.defaults(E(o, x), w));
                    t.setParent(n, e.parent(n));
                });
                module835.forEach(e.edges(), function(n) {
                    const o = M(e.edge(n));
                    t.setEdge(n, module835.merge({}, C, E(o, _), module835.pick(o, O)));
                });
                return t;
            })(e);
        });
        n("  runLayout", function() {
            ((e, t)=>{
                t("    makeSpaceForEdgeLabels", function() {
                    ((e)=>{
                        const t = e.graph();
                        t.ranksep /= 2;
                        module835.forEach(e.edges(), function(n) {
                            const r = e.edge(n);
                            r.minlen *= 2;
                            if (r.labelpos.toLowerCase() !== "c") {
                                if (t.rankdir === "TB" || t.rankdir === "BT") {
                                    r.width += r.labeloffset;
                                } else {
                                    r.height += r.labeloffset;
                                }
                            }
                        });
                    })(e);
                });
                t("    removeSelfEdges", function() {
                    ((e)=>{
                        module835.forEach(e.edges(), function(t) {
                            if (t.v === t.w) {
                                const n = e.node(t.v);
                                if (!n.selfEdges) {
                                    n.selfEdges = [];
                                }
                                n.selfEdges.push({
                                    e: t,
                                    label: e.edge(t)
                                });
                                e.removeEdge(t);
                            }
                        });
                    })(e);
                });
                t("    acyclic", function() {
                    module4577.run(e);
                });
                t("    nestingGraph.run", function() {
                    module4584.run(e);
                });
                t("    rank", function() {
                    module4581(_l.asNonCompoundGraph(e));
                });
                t("    injectEdgeLabelProxies", function() {
                    ((e)=>{
                        module835.forEach(e.edges(), function(t) {
                            const n = e.edge(t);
                            if (n.width && n.height) {
                                const r = e.node(t.v);
                                const o = {
                                    rank: (e.node(t.w).rank - r.rank) / 2 + r.rank,
                                    e: t
                                };
                                _l.addDummyNode(e, "edge-proxy", o, "_ep");
                            }
                        });
                    })(e);
                });
                t("    removeEmptyRanks", function() {
                    removeEmptyRanks(e);
                });
                t("    nestingGraph.cleanup", function() {
                    module4584.cleanup(e);
                });
                t("    normalizeRanks", function() {
                    normalizeRanks(e);
                });
                t("    assignRankMinMax", function() {
                    ((e)=>{
                        let t = 0;
                        module835.forEach(e.nodes(), function(n) {
                            const o = e.node(n);
                            if (o.borderTop) {
                                o.minRank = e.node(o.borderTop).rank;
                                o.maxRank = e.node(o.borderBottom).rank;
                                t = module835.max(t, o.maxRank);
                            }
                        });
                        e.graph().maxRank = t;
                    })(e);
                });
                t("    removeEdgeLabelProxies", function() {
                    ((e)=>{
                        module835.forEach(e.nodes(), function(t) {
                            const n = e.node(t);
                            if (n.dummy === "edge-proxy") {
                                e.edge(n.e).labelRank = n.rank;
                                e.removeNode(t);
                            }
                        });
                    })(e);
                });
                t("    normalize.run", function() {
                    module4580.run(e);
                });
                t("    parentDummyChains", function() {
                    module4583(e);
                });
                t("    addBorderSegments", function() {
                    module4585(e);
                });
                t("    order", function() {
                    module4587(e);
                });
                t("    insertSelfEdges", function() {
                    ((e)=>{
                        const t = _l.buildLayerMatrix(e);
                        module835.forEach(t, function(t) {
                            let n = 0;
                            module835.forEach(t, function(t, o) {
                                const i = e.node(t);
                                i.order = o + n;
                                module835.forEach(i.selfEdges, function(t) {
                                    _l.addDummyNode(e, "selfedge", {
                                        width: t.label.width,
                                        height: t.label.height,
                                        rank: i.rank,
                                        order: o + ++n,
                                        e: t.e,
                                        label: t.label
                                    }, "_se");
                                });
                                delete i.selfEdges;
                            });
                        });
                    })(e);
                });
                t("    adjustCoordinateSystem", function() {
                    module4586.adjust(e);
                });
                t("    position", function() {
                    module4596(e);
                });
                t("    positionSelfEdges", function() {
                    ((e)=>{
                        module835.forEach(e.nodes(), function(t) {
                            const n = e.node(t);
                            if (n.dummy === "selfedge") {
                                const r = e.node(n.e.v);
                                const o = r.x + r.width / 2;
                                const y_1 = r.y;
                                const a = n.x - o;
                                const l = r.height / 2;
                                e.setEdge(n.e, n.label);
                                e.removeNode(t);
                                n.label.points = [
                                    {
                                        x: o + 2 * a / 3,
                                        y: y_1 - l
                                    },
                                    {
                                        x: o + 5 * a / 6,
                                        y: y_1 - l
                                    },
                                    {
                                        x: o + a,
                                        y: y_1
                                    },
                                    {
                                        x: o + 5 * a / 6,
                                        y: y_1 + l
                                    },
                                    {
                                        x: o + 2 * a / 3,
                                        y: y_1 + l
                                    }
                                ];
                                n.label.x = n.x;
                                n.label.y = n.y;
                            }
                        });
                    })(e);
                });
                t("    removeBorderNodes", function() {
                    ((e)=>{
                        module835.forEach(e.nodes(), function(t) {
                            if (e.children(t).length) {
                                const n = e.node(t);
                                const o = e.node(n.borderTop);
                                const i = e.node(n.borderBottom);
                                const a = e.node(module835.last(n.borderLeft));
                                const l = e.node(module835.last(n.borderRight));
                                n.width = Math.abs(l.x - a.x);
                                n.height = Math.abs(i.y - o.y);
                                n.x = a.x + n.width / 2;
                                n.y = o.y + n.height / 2;
                            }
                        });
                        module835.forEach(e.nodes(), function(t) {
                            if (e.node(t).dummy === "border") {
                                e.removeNode(t);
                            }
                        });
                    })(e);
                });
                t("    normalize.undo", function() {
                    module4580.undo(e);
                });
                t("    fixupEdgeLabelCoords", function() {
                    ((e)=>{
                        module835.forEach(e.edges(), function(t) {
                            const n = e.edge(t);
                            if (module835.has(n, "x")) {
                                if (!(n.labelpos !== "l" && n.labelpos !== "r")) {
                                    n.width -= n.labeloffset;
                                }
                                switch(n.labelpos){
                                    case "l":
                                        n.x -= n.width / 2 + n.labeloffset;
                                        break;
                                    case "r":
                                        n.x += n.width / 2 + n.labeloffset;
                                }
                            }
                        });
                    })(e);
                });
                t("    undoCoordinateSystem", function() {
                    module4586.undo(e);
                });
                t("    translateGraph", function() {
                    ((e)=>{
                        let Number_POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
                        let n = 0;
                        let Number_POSITIVE_INFINITY_1 = Number.POSITIVE_INFINITY;
                        let i = 0;
                        const a = e.graph();
                        const l = a.marginx || 0;
                        const u = a.marginy || 0;
                        function s({ x, y, width, height }) {
                            Number_POSITIVE_INFINITY = Math.min(Number_POSITIVE_INFINITY, x - width / 2);
                            n = Math.max(n, x + width / 2);
                            Number_POSITIVE_INFINITY_1 = Math.min(Number_POSITIVE_INFINITY_1, y - height / 2);
                            i = Math.max(i, y + height / 2);
                        }
                        module835.forEach(e.nodes(), function(t) {
                            s(e.node(t));
                        });
                        module835.forEach(e.edges(), function(t) {
                            const n = e.edge(t);
                            if (module835.has(n, "x")) {
                                s(n);
                            }
                        });
                        Number_POSITIVE_INFINITY -= l;
                        Number_POSITIVE_INFINITY_1 -= u;
                        module835.forEach(e.nodes(), function(n) {
                            const r = e.node(n);
                            r.x -= Number_POSITIVE_INFINITY;
                            r.y -= Number_POSITIVE_INFINITY_1;
                        });
                        module835.forEach(e.edges(), function(n) {
                            const i = e.edge(n);
                            module835.forEach(i.points, function(e) {
                                e.x -= Number_POSITIVE_INFINITY;
                                e.y -= Number_POSITIVE_INFINITY_1;
                            });
                            if (module835.has(i, "x")) {
                                i.x -= Number_POSITIVE_INFINITY;
                            }
                            if (module835.has(i, "y")) {
                                i.y -= Number_POSITIVE_INFINITY_1;
                            }
                        });
                        a.width = n - Number_POSITIVE_INFINITY + l;
                        a.height = i - Number_POSITIVE_INFINITY_1 + u;
                    })(e);
                });
                t("    assignNodeIntersects", function() {
                    ((e)=>{
                        module835.forEach(e.edges(), function(t) {
                            let n;
                            let r;
                            const o = e.edge(t);
                            const i = e.node(t.v);
                            const a = e.node(t.w);
                            if (o.points) {
                                n = o.points[0];
                                r = o.points[o.points.length - 1];
                            } else {
                                o.points = [];
                                n = a;
                                r = i;
                            }
                            o.points.unshift(_l.intersectRect(i, n));
                            o.points.push(_l.intersectRect(a, r));
                        });
                    })(e);
                });
                t("    reversePoints", function() {
                    ((e)=>{
                        module835.forEach(e.edges(), function(t) {
                            const n = e.edge(t);
                            if (n.reversed) {
                                n.points.reverse();
                            }
                        });
                    })(e);
                });
                t("    acyclic.undo", function() {
                    module4577.undo(e);
                });
            })(t, n);
        });
        n("  updateInputGraph", function() {
            ((e, t)=>{
                module835.forEach(e.nodes(), function(n) {
                    const r = e.node(n);
                    const o = t.node(n);
                    if (r) {
                        r.x = o.x;
                        r.y = o.y;
                        if (t.children(n).length) {
                            r.width = o.width;
                            r.height = o.height;
                        }
                    }
                });
                module835.forEach(e.edges(), function(n) {
                    const o = e.edge(n);
                    const i = t.edge(n);
                    o.points = i.points;
                    if (module835.has(i, "x")) {
                        o.x = i.x;
                        o.y = i.y;
                    }
                });
                e.graph().width = t.graph().width;
                e.graph().height = t.graph().height;
            })(e, t);
        });
    });
};
var y = [
    "nodesep",
    "edgesep",
    "ranksep",
    "marginx",
    "marginy"
];
var m = {
    ranksep: 50,
    edgesep: 20,
    nodesep: 50,
    rankdir: "tb"
};
var b = [
    "acyclicer",
    "ranker",
    "rankdir",
    "align"
];
var x = [
    "width",
    "height"
];
var w = {
    width: 0,
    height: 0
};
var _ = [
    "minlen",
    "weight",
    "width",
    "height",
    "labeloffset"
];
var C = {
    minlen: 1,
    weight: 1,
    width: 0,
    height: 0,
    labeloffset: 10,
    labelpos: "r"
};
var O = [
    "labelpos"
];
function E(e, t) {
    return module835.mapValues(module835.pick(e, t), Number);
}
function M(e) {
    const t = {};
    module835.forEach(e, function(e, n) {
        t[n.toLowerCase()] = e;
    });
    return t;
}
