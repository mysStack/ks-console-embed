import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-138.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-316.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-31.js";
import module1892 from "unpacked/module-1892.js";
import module1517 from "unpacked/module-1517.js";
import module1283 from "unpacked/module-1283.js";
import module446 from "unpacked/module-446.js";
export const processTopology = function(e) {
    const t = new module1892.graphlib.Graph;
    t.setGraph({
        ranksep: "100",
        marginx: 20,
        marginy: 20
    });
    t.setDefaultEdgeLabel(function() {
        return {};
    });
    Object.keys(e).forEach((a)=>{
        t.setNode(a, {
            label: e[a].label,
            width: 150,
            height: 100
        });
        if (e[a].adjacency) {
            e[a].adjacency.forEach((e)=>{
                const minlen = a === e ? 1 : 0;
                t.setEdge(a, e, {
                    id: `${a}-${e}`,
                    minlen
                });
            });
        }
    });
    module1892.layout(t);
    t.nodes().forEach((a)=>{
        const r = t.node(a);
        e[a].x = r.x;
        e[a].y = r.y;
        e[a].degree = 0;
    });
    t.edges().forEach((t)=>{
        if (t.v === t.w) {
            e[t.v].degree += 1;
        } else {
            e[t.v].degree += 1;
            e[t.w].degree += 1;
        }
    });
    const edges = t.edges().map((e)=>{
        const points = t.edge(e).points;
        return {
            ...e,
            points
        };
    });
    const r = t.graph();
    const { width, height } = r;
    const d = {
        width,
        height,
        gWidth: width,
        gHeight: height,
        nodes: Object.values(e),
        edges
    };
    return ((e)=>{
        const t = {
            ...e
        };
        const a = e.gHeight || e.height;
        const r = e.gWidth || e.width;
        const n = a ? r / a : 1;
        let e_nodes = e.nodes;
        const i = e_nodes.filter((e)=>e.degree === 0);
        if (i.length) {
            let d;
            let f;
            const p = e_nodes.filter((e)=>e.degree !== 0);
            if (p.length > 0) {
                if (n < 1) {
                    d = module1517(p, function(e) {
                        return e.x;
                    }).x;
                    f = module1283(p, function(e) {
                        return e.y;
                    }).y;
                    if (d) {
                        d += 200;
                    }
                } else {
                    d = module1283(p, function(e) {
                        return e.x;
                    }).x;
                    if (f = module1517(p, function(e) {
                        return e.y;
                    }).y) {
                        f += 150;
                    }
                }
            }
            d = d || 75;
            f = f || 50;
            let x;
            let y;
            const v = Math.ceil(Math.sqrt(i.length));
            let g = 0;
            let _ = 0;
            e_nodes = (e_nodes = module446(e_nodes, function(e) {
                return e.rank;
            })).map((e)=>{
                if (i.find((t)=>t.id === e.id)) {
                    if (_ === v) {
                        _ = 0;
                        g += 1;
                    }
                    x = 200 * _ + d;
                    y = 150 * g + f;
                    _ += 1;
                    return Object.assign(e, {
                        x,
                        y
                    });
                }
                return e;
            });
            t.width = Math.max(e.width, x + 75 + 50);
            t.height = Math.max(e.height, y + 50 + 50);
            t.nodes = e_nodes;
        }
        return t;
    })(d);
};
