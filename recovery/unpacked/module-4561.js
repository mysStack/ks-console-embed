import module909 from "./module-909.js";
import module1442 from "./module-1442.js";
function i(e) {
    return module909.map(e.nodes(), function(v) {
        const n = e.node(v);
        const o = e.parent(v);
        const i = {
            v
        };
        if (!module909.isUndefined(n)) {
            i.value = n;
        }
        if (!module909.isUndefined(o)) {
            i.parent = o;
        }
        return i;
    });
}
function a(e) {
    return module909.map(e.edges(), function(t) {
        const n = e.edge(t);
        const o = {
            v: t.v,
            w: t.w
        };
        if (!module909.isUndefined(t.name)) {
            o.name = t.name;
        }
        if (!module909.isUndefined(n)) {
            o.value = n;
        }
        return o;
    });
}
export default {
    write: function(e) {
        const t = {
            options: {
                directed: e.isDirected(),
                multigraph: e.isMultigraph(),
                compound: e.isCompound()
            },
            nodes: i(e),
            edges: a(e)
        };
        if (!module909.isUndefined(e.graph())) {
            t.value = module909.clone(e.graph());
        }
        return t;
    },
    read: function(e) {
        const t = new module1442(e.options).setGraph(e.value);
        module909.each(e.nodes, function(e) {
            t.setNode(e.v, e.value);
            if (e.parent) {
                t.setParent(e.v, e.parent);
            }
        });
        module909.each(e.edges, function(e) {
            t.setEdge({
                v: e.v,
                w: e.w,
                name: e.name
            }, e.value);
        });
        return t;
    }
};
