import module835 from "unpacked/module-835.js";
import module921 from "unpacked/module-921.js";
import module892 from "unpacked/module-892.js";
const module921_Graph = module921.Graph;
function findType1Conflicts(e, t) {
    const n = {};
    module835.reduce(t, function(t, o) {
        let i = 0;
        let a = 0;
        const t_length = t.length;
        const s = module835.last(o);
        module835.forEach(o, function(t, c) {
            const f = ((e, t)=>{
                if (e.node(t).dummy) {
                    return module835.find(e.predecessors(t), function(t) {
                        return e.node(t).dummy;
                    });
                }
            })(e, t);
            const d = f ? e.node(f).order : t_length;
            if (f || t === s) {
                module835.forEach(o.slice(a, c + 1), function(t) {
                    module835.forEach(e.predecessors(t), function(r) {
                        const o = e.node(r);
                        const o_order = o.order;
                        if (!(!(o_order < i || d < o_order) || o.dummy && e.node(t).dummy)) {
                            addConflict(n, r, t);
                        }
                    });
                });
                a = c + 1;
                i = d;
            }
        });
        return o;
    });
    return n;
}
function findType2Conflicts(e, t) {
    const n = {};
    function o(t, o, i, a, l) {
        let s;
        module835.forEach(module835.range(o, i), function(o) {
            s = t[o];
            if (e.node(s).dummy) {
                module835.forEach(e.predecessors(s), function(t) {
                    const r = e.node(t);
                    if (r.dummy && (r.order < a || r.order > l)) {
                        addConflict(n, t, s);
                    }
                });
            }
        });
    }
    module835.reduce(t, function(t, n) {
        let i;
        let a = -1;
        let l = 0;
        module835.forEach(n, function(r, u) {
            if (e.node(r).dummy === "border") {
                const s = e.predecessors(r);
                if (s.length) {
                    i = e.node(s[0]).order;
                    o(n, l, u, a, i);
                    l = u;
                    a = i;
                }
            }
            o(n, l, n.length, i, t.length);
        });
        return n;
    });
    return n;
}
function addConflict(e, t, n) {
    if (t > n) {
        const r = t;
        t = n;
        n = r;
    }
    let o = e[t];
    if (!o) {
        e[t] = o = {};
    }
    o[n] = true;
}
function hasConflict(e, t, n) {
    if (t > n) {
        const o = t;
        t = n;
        n = o;
    }
    return module835.has(e[t], n);
}
function verticalAlignment(e, t, n, o) {
    const root = {};
    const align = {};
    const l = {};
    module835.forEach(t, function(e) {
        module835.forEach(e, function(e, t) {
            root[e] = e;
            align[e] = e;
            l[e] = t;
        });
    });
    module835.forEach(t, function(e) {
        let t = -1;
        module835.forEach(e, function(e) {
            let u = o(e);
            if (u.length) {
                const c = ((u = module835.sortBy(u, function(e) {
                    return l[e];
                })).length - 1) / 2;
                for(let f = Math.floor(c), d = Math.ceil(c); f <= d; ++f){
                    const p = u[f];
                    if (align[e] === e && t < l[p] && !hasConflict(n, e, p)) {
                        align[p] = e;
                        align[e] = root[e] = root[p];
                        t = l[p];
                    }
                }
            }
        });
    });
    return {
        root,
        align
    };
}
function horizontalCompaction(e, t, n, i, a) {
    const l = {};
    const u = ((e, t, n, i)=>{
        const a = new module921_Graph;
        const l = e.graph();
        const u = ((e, t, n)=>function(o, i, a) {
                let l;
                const u = o.node(i);
                const s = o.node(a);
                let c = 0;
                c += u.width / 2;
                if (module835.has(u, "labelpos")) {
                    switch(u.labelpos.toLowerCase()){
                        case "l":
                            l = -u.width / 2;
                            break;
                        case "r":
                            l = u.width / 2;
                    }
                }
                if (l) {
                    c += n ? l : -l;
                }
                l = 0;
                c += (u.dummy ? t : e) / 2;
                c += (s.dummy ? t : e) / 2;
                c += s.width / 2;
                if (module835.has(s, "labelpos")) {
                    switch(s.labelpos.toLowerCase()){
                        case "l":
                            l = s.width / 2;
                            break;
                        case "r":
                            l = -s.width / 2;
                    }
                }
                if (l) {
                    c += n ? l : -l;
                }
                l = 0;
                return c;
            })(l.nodesep, l.edgesep, i);
        module835.forEach(t, function(t) {
            let o;
            module835.forEach(t, function(t) {
                const r = n[t];
                a.setNode(r);
                if (o) {
                    const i = n[o];
                    const l = a.edge(i, r);
                    a.setEdge(i, r, Math.max(u(e, t, o), l || 0));
                }
                o = t;
            });
        });
        return a;
    })(e, t, n, a);
    const s = a ? "borderLeft" : "borderRight";
    function c(e, t) {
        let n = u.nodes();
        for(let r = n.pop(), o = {}; r;){
            if (o[r]) {
                e(r);
            } else {
                o[r] = true;
                n.push(r);
                n = n.concat(t(r));
            }
            r = n.pop();
        }
    }
    c((e)=>{
        l[e] = u.inEdges(e).reduce((acc, item)=>Math.max(acc, l[item.v] + u.edge(item)), 0);
    }, u.predecessors.bind(u));
    c((t)=>{
        const n = u.outEdges(t).reduce((acc, item)=>Math.min(acc, l[item.w] - u.edge(item)), Number.POSITIVE_INFINITY);
        const r = e.node(t);
        if (n !== Number.POSITIVE_INFINITY && r.borderType !== s) {
            l[t] = Math.max(l[t], n);
        }
    }, u.successors.bind(u));
    module835.forEach(i, function(e) {
        l[e] = l[n[e]];
    });
    return l;
}
function findSmallestWidthAlignment(e, t) {
    return module835.minBy(module835.values(t), function(t) {
        let Number_NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
        let Number_POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
        module835.forIn(t, function(t, r) {
            const i = ((e, t)=>e.node(t).width)(e, r) / 2;
            Number_NEGATIVE_INFINITY = Math.max(t + i, Number_NEGATIVE_INFINITY);
            Number_POSITIVE_INFINITY = Math.min(t - i, Number_POSITIVE_INFINITY);
        });
        return Number_NEGATIVE_INFINITY - Number_POSITIVE_INFINITY;
    });
}
function alignCoordinates(e, t) {
    const n = module835.values(t);
    const o = module835.min(n);
    const i = module835.max(n);
    module835.forEach([
        "u",
        "d"
    ], function(n) {
        module835.forEach([
            "l",
            "r"
        ], function(a) {
            let l;
            const u = n + a;
            const s = e[u];
            if (s !== t) {
                const c = module835.values(s);
                if (l = a === "l" ? o - module835.min(c) : i - module835.max(c)) {
                    e[u] = module835.mapValues(s, function(e) {
                        return e + l;
                    });
                }
            }
        });
    });
}
function balance(e, t) {
    return module835.mapValues(e.ul, function(n, o) {
        if (t) {
            return e[t.toLowerCase()][o];
        }
        const i = module835.sortBy(module835.map(e, o));
        return (i[1] + i[2]) / 2;
    });
}
export default {
    positionX: function(e) {
        let t;
        const n = module892.buildLayerMatrix(e);
        const o = module835.merge(findType1Conflicts(e, n), findType2Conflicts(e, n));
        const u = {};
        module835.forEach([
            "u",
            "d"
        ], function(i) {
            t = i === "u" ? n : module835.values(n).reverse();
            module835.forEach([
                "l",
                "r"
            ], function(n) {
                if (n === "r") {
                    t = module835.map(t, function(e) {
                        return module835.values(e).reverse();
                    });
                }
                const a = (i === "u" ? e.predecessors : e.successors).bind(e);
                const l = verticalAlignment(0, t, o, a);
                let s = horizontalCompaction(e, t, l.root, l.align, n === "r");
                if (n === "r") {
                    s = module835.mapValues(s, function(e) {
                        return -e;
                    });
                }
                u[i + n] = s;
            });
        });
        const s = findSmallestWidthAlignment(e, u);
        alignCoordinates(u, s);
        return balance(u, e.graph().align);
    },
    findType1Conflicts,
    findType2Conflicts,
    addConflict,
    hasConflict,
    verticalAlignment,
    horizontalCompaction,
    alignCoordinates,
    findSmallestWidthAlignment,
    balance
};
