import module835 from "./module-835.js";
import module921 from "./module-921.js";
const module921_Graph = module921.Graph;
function addDummyNode(e, t, n, o) {
    let i;
    do {
        i = module835.uniqueId(o);
    }while (e.hasNode(i))
    n.dummy = t;
    e.setNode(i, n);
    return i;
}
function maxRank(e) {
    return module835.max(module835.map(e.nodes(), function(t) {
        const rank = e.node(t).rank;
        if (!module835.isUndefined(rank)) {
            return rank;
        }
    }));
}
export default {
    addDummyNode,
    simplify: function(e) {
        const t = (new module921_Graph).setGraph(e.graph());
        module835.forEach(e.nodes(), function(n) {
            t.setNode(n, e.node(n));
        });
        module835.forEach(e.edges(), function(n) {
            const r = t.edge(n.v, n.w) || {
                weight: 0,
                minlen: 1
            };
            const o = e.edge(n);
            t.setEdge(n.v, n.w, {
                weight: r.weight + o.weight,
                minlen: Math.max(r.minlen, o.minlen)
            });
        });
        return t;
    },
    asNonCompoundGraph: function(e) {
        const t = new module921_Graph({
            multigraph: e.isMultigraph()
        }).setGraph(e.graph());
        module835.forEach(e.nodes(), function(n) {
            if (!e.children(n).length) {
                t.setNode(n, e.node(n));
            }
        });
        module835.forEach(e.edges(), function(n) {
            t.setEdge(n, e.edge(n));
        });
        return t;
    },
    successorWeights: function(e) {
        const t = module835.map(e.nodes(), function(t) {
            const n = {};
            module835.forEach(e.outEdges(t), function(t) {
                n[t.w] = (n[t.w] || 0) + e.edge(t).weight;
            });
            return n;
        });
        return module835.zipObject(e.nodes(), t);
    },
    predecessorWeights: function(e) {
        const t = module835.map(e.nodes(), function(t) {
            const n = {};
            module835.forEach(e.inEdges(t), function(t) {
                n[t.v] = (n[t.v] || 0) + e.edge(t).weight;
            });
            return n;
        });
        return module835.zipObject(e.nodes(), t);
    },
    intersectRect: function(e, t) {
        let n;
        let r;
        const { x, y } = e;
        const a = t.x - x;
        const l = t.y - y;
        let u = e.width / 2;
        let s = e.height / 2;
        if (!a && !l) {
            throw new Error("Not possible to find intersection inside of the rectangle");
        }
        if (Math.abs(l) * u > Math.abs(a) * s) {
            if (l < 0) {
                s = -s;
            }
            n = s * a / l;
            r = s;
        } else {
            if (a < 0) {
                u = -u;
            }
            n = u;
            r = u * l / a;
        }
        return {
            x: x + n,
            y: y + r
        };
    },
    buildLayerMatrix: function(e) {
        const t = module835.map(module835.range(maxRank(e) + 1), function() {
            return [];
        });
        module835.forEach(e.nodes(), function(n) {
            const o = e.node(n);
            const o_rank = o.rank;
            if (!module835.isUndefined(o_rank)) {
                t[o_rank][o.order] = n;
            }
        });
        return t;
    },
    normalizeRanks: function(e) {
        const t = module835.min(module835.map(e.nodes(), function(t) {
            return e.node(t).rank;
        }));
        module835.forEach(e.nodes(), function(n) {
            const o = e.node(n);
            if (module835.has(o, "rank")) {
                o.rank -= t;
            }
        });
    },
    removeEmptyRanks: function(e) {
        const t = module835.min(module835.map(e.nodes(), function(t) {
            return e.node(t).rank;
        }));
        const n = [];
        module835.forEach(e.nodes(), function(r) {
            const o = e.node(r).rank - t;
            if (!n[o]) {
                n[o] = [];
            }
            n[o].push(r);
        });
        let o = 0;
        const nodeRankFactor = e.graph().nodeRankFactor;
        module835.forEach(n, function(t, n) {
            if (module835.isUndefined(t) && n % nodeRankFactor != 0) {
                --o;
            } else if (o) {
                module835.forEach(t, function(t) {
                    e.node(t).rank += o;
                });
            }
        });
    },
    addBorderNode: function(e, t, n, r) {
        const o = {
            width: 0,
            height: 0
        };
        if (arguments.length >= 4) {
            o.rank = n;
            o.order = r;
        }
        return addDummyNode(e, "border", o, t);
    },
    maxRank,
    partition: function(e, t) {
        const n = {
            lhs: [],
            rhs: []
        };
        module835.forEach(e, function(e) {
            if (t(e)) {
                n.lhs.push(e);
            } else {
                n.rhs.push(e);
            }
        });
        return n;
    },
    time: function(e, t) {
        const n = module835.now();
        try {
            return t();
        } finally{
            console.log(`${e} time: ${module835.now() - n}ms`);
        }
    },
    notime: function(e, t) {
        return t();
    }
};
