import module835 from "./module-835.js";
function o(e) {
    module835.forEach(e.nodes(), function(t) {
        i(e.node(t));
    });
    module835.forEach(e.edges(), function(t) {
        i(e.edge(t));
    });
}
function i(e) {
    const e_width = e.width;
    e.width = e.height;
    e.height = e_width;
}
function a(e) {
    e.y = -e.y;
}
function l(e) {
    const t = e.x;
    e.x = e.y;
    e.y = t;
}
export default {
    adjust: function(e) {
        const t = e.graph().rankdir.toLowerCase();
        if (!(t !== "lr" && t !== "rl")) {
            o(e);
        }
    },
    undo: function(e) {
        const t = e.graph().rankdir.toLowerCase();
        if (!(t !== "bt" && t !== "rl")) {
            ((e)=>{
                module835.forEach(e.nodes(), function(t) {
                    a(e.node(t));
                });
                module835.forEach(e.edges(), function(t) {
                    const n = e.edge(t);
                    module835.forEach(n.points, a);
                    if (module835.has(n, "y")) {
                        a(n);
                    }
                });
            })(e);
        }
        if (!(t !== "lr" && t !== "rl")) {
            ((e)=>{
                module835.forEach(e.nodes(), function(t) {
                    l(e.node(t));
                });
                module835.forEach(e.edges(), function(t) {
                    const n = e.edge(t);
                    module835.forEach(n.points, l);
                    if (module835.has(n, "x")) {
                        l(n);
                    }
                });
            })(e);
            o(e);
        }
    }
};
