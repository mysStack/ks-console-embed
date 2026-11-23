import module835 from "./module-835.js";
import module1899 from "./module-1899.js";
import module1245 from "./module-1245.js";
import module921 from "./module-921.js";
import module892 from "./module-892.js";
const { slack, longestPath } = module1245;
const preorder = module921.alg.preorder;
const postorder = module921.alg.postorder;
const module892_simplify = module892.simplify;
function c(e) {
    e = module892_simplify(e);
    longestPath(e);
    let t;
    const n = module1899(e);
    p(n);
    f(n, e);
    while(t = v(n)){
        y(n, e, t, g(n, e, t));
    }
}
function f(e, t) {
    let n = postorder(e, e.nodes());
    n = n.slice(0, n.length - 1);
    module835.forEach(n, function(n) {
        ((e, t, n)=>{
            const parent = e.node(n).parent;
            e.edge(n, parent).cutvalue = d(e, t, n);
        })(e, t, n);
    });
}
function d(e, t, n) {
    const parent = e.node(n).parent;
    let i = true;
    let a = t.edge(n, parent);
    let l = 0;
    if (!a) {
        i = false;
        a = t.edge(parent, n);
    }
    l = a.weight;
    module835.forEach(t.nodeEdges(n), function(r) {
        let a;
        let u;
        const s = r.v === n;
        const c = s ? r.w : r.v;
        if (c !== parent) {
            const f = s === i;
            const d = t.edge(r).weight;
            l += f ? d : -d;
            a = n;
            u = c;
            if (e.hasEdge(a, u)) {
                const p = e.edge(n, c).cutvalue;
                l += f ? -p : p;
            }
        }
    });
    return l;
}
function p(e, t) {
    if (arguments.length < 2) {
        t = e.nodes()[0];
    }
    h(e, {}, 1, t);
}
function h(e, t, n, o, i) {
    const a = n;
    const l = e.node(o);
    t[o] = true;
    module835.forEach(e.neighbors(o), function(i) {
        if (!module835.has(t, i)) {
            n = h(e, t, n, i, o);
        }
    });
    l.low = a;
    l.lim = n++;
    if (i) {
        l.parent = i;
    } else {
        delete l.parent;
    }
    return n;
}
function v(e) {
    return module835.find(e.edges(), function(t) {
        return e.edge(t).cutvalue < 0;
    });
}
function g(e, t, n) {
    let o = n.v;
    let a = n.w;
    if (!t.hasEdge(o, a)) {
        o = n.w;
        a = n.v;
    }
    const l = e.node(o);
    const u = e.node(a);
    let s = l;
    let c = false;
    if (l.lim > u.lim) {
        s = u;
        c = true;
    }
    const f = module835.filter(t.edges(), function(t) {
        return c === m(e, e.node(t.v), s) && c !== m(e, e.node(t.w), s);
    });
    return module835.minBy(f, function(e) {
        return slack(t, e);
    });
}
function y(e, t, { v, w }, o) {
    e.removeEdge(v, w);
    e.setEdge(o.v, o.w, {});
    p(e);
    f(e, t);
    ((e, t)=>{
        const n = module835.find(e.nodes(), function(e) {
            return !t.node(e).parent;
        });
        let o = preorder(e, n);
        o = o.slice(1);
        module835.forEach(o, function(n) {
            const parent = e.node(n).parent;
            let o = t.edge(n, parent);
            let i = false;
            if (!o) {
                o = t.edge(parent, n);
                i = true;
            }
            t.node(n).rank = t.node(parent).rank + (i ? o.minlen : -o.minlen);
        });
    })(e, t);
}
function m(e, t, n) {
    return n.low <= t.lim && t.lim <= n.lim;
}
export default c;
c.initLowLimValues = p;
c.initCutValues = f;
c.calcCutValue = d;
c.leaveEdge = v;
c.enterEdge = g;
c.exchangeEdges = y;
