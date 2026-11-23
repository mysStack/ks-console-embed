import module835 from "./module-835.js";
import module921 from "./module-921.js";
import module1245 from "./module-1245.js";
const module921_Graph = module921.Graph;
const module1245_slack = module1245.slack;
function a(e, t) {
    module835.forEach(e.nodes(), function n(o) {
        module835.forEach(t.nodeEdges(o), function(r) {
            const a = r.v;
            const l = o === a ? r.w : a;
            if (!(e.hasNode(l) || module1245_slack(t, r))) {
                e.setNode(l, {});
                e.setEdge(o, l, {});
                n(l);
            }
        });
    });
    return e.nodeCount();
}
function l(e, t) {
    return module835.minBy(t.edges(), function(n) {
        if (e.hasNode(n.v) !== e.hasNode(n.w)) {
            return module1245_slack(t, n);
        }
    });
}
function u(e, t, n) {
    module835.forEach(e.nodes(), function(e) {
        t.node(e).rank += n;
    });
}
export default function(e) {
    let t;
    let n;
    const r = new module921_Graph({
        directed: false
    });
    const s = e.nodes()[0];
    const c = e.nodeCount();
    for(r.setNode(s, {}); a(r, e) < c;){
        t = l(r, e);
        n = r.hasNode(t.v) ? module1245_slack(e, t) : -module1245_slack(e, t);
        u(r, e, n);
    }
    return r;
};
