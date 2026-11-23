import "./module-12.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-86.js";
import "./module-18.js";
import "./module-16.js";
import "./module-27.js";
import "./module-190.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-316.js";
import "./module-85.js";
import "./module-7.js";
import "./module-31.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module63 from "./module-63.js";
import module857 from "./module-857.js";
import module321 from "./module-321.js";
import module1892 from "./module-1892.js";
const p = {
    rankdir: "LR",
    nodesep: "60",
    ranksep: "240"
};
export const processData = function(e, t) {
    if (e && e.edges) {
        e.edges = processEdges(e.edges);
    }
    return ((e)=>{
        const t = new module1892.graphlib.Graph({
            multigraph: true,
            compound: true
        });
        t.setGraph(p);
        t.setDefaultEdgeLabel(function() {
            return {};
        });
        t.setDefaultNodeLabel(function() {
            return {};
        });
        const a = module321(e, "name");
        const r = {};
        e.forEach((a)=>{
            const n = a.nodes.filter((e)=>e.data.workload);
            let height = 203 * n.length + 12 * (n.length - 1) + 56;
            const isGateway = a.name.indexOf("kubesphere") !== -1 || a.name === "unknown";
            if (isGateway) {
                height = 52;
            }
            if (n.length > 0) {
                t.setNode(a.name, {
                    name: a.name,
                    width: 226,
                    height,
                    workloadNum: n.length,
                    isGateway
                });
            }
            a.workloads = n;
            a.edges.out.forEach((n)=>{
                const l = e.find((e)=>e.ids.includes(n.data.target));
                if (l && l.name) {
                    t.setEdge(a.name, l.name, {
                        id: n.data.id,
                        out: a.edges.out,
                        name: a.name,
                        targetName: l.name
                    });
                    r[n.data.id] = n;
                }
            });
        });
        module1892.layout(t);
        const n = [];
        const edges = [];
        t.nodes().forEach((e)=>{
            const position = t.node(e);
            if (position.workloadNum > 1) {
                position.y -= 110 * (position.workloadNum - 1);
            }
            n.push({
                ...a[e],
                position
            });
        });
        t.edges().forEach((e)=>{
            const n = t.edge(e);
            const u = t.node(n.name);
            const o = t.node(n.targetName);
            const i = r[n.id];
            const c = n.out.filter((e)=>e.data.target === i.data.target);
            let length = n.points.length;
            if (length > 0) {
                if (length === 3) {
                    n.points = [
                        n.points[0],
                        n.points[length - 1]
                    ];
                    length = n.points.length;
                }
                if (u.isGateway) {
                    edges.push({
                        ...i,
                        position: {
                            points: [
                                {
                                    x: u.x + u.width + -20,
                                    y: u.y + u.height / 2 + 36
                                },
                                {
                                    x: o.x,
                                    y: o.y + o.height / 2 + 36
                                }
                            ]
                        }
                    });
                } else {
                    const f = a[n.name].workloads.map((e)=>e.data.id);
                    c.forEach((e)=>{
                        const t = f.indexOf(e.data.source);
                        const position = {
                            points: [
                                {
                                    x: u.x + u.width,
                                    y: u.y + 220 * (t + 0.5) + 36
                                },
                                {
                                    x: o.x,
                                    y: o.y + o.height / 2 + 30 * (t + 1)
                                }
                            ]
                        };
                        edges.push({
                            ...e,
                            position
                        });
                    });
                }
            }
        });
        return {
            nodes: n,
            edges
        };
    })((({ nodes = [], edges = [] } = {}, l = {})=>{
        if (module63(nodes)) {
            return [];
        }
        const u = [];
        const c = {};
        for(let s = 0; s < nodes.length; s++){
            if (nodes[s].data.isRoot) {
                u.push(nodes[s]);
            }
            c[nodes[s].data.id] = nodes[s];
        }
        const f = [];
        const d = module857(nodes, "data.app");
        Object.keys(d).forEach((e)=>{
            const t = d[e];
            const ids = t.map((e)=>e.data.id);
            const r = [];
            const out = [];
            const inner = [];
            for (const c of edges){
                const s = c.data;
                const { source, target } = s;
                if (ids.includes(source) && ids.includes(target)) {
                    inner.push(c);
                } else if (!ids.includes(source) && ids.includes(target)) {
                    r.push(c);
                } else if (ids.includes(source) && !ids.includes(target)) {
                    out.push(c);
                }
            }
            f.push({
                name: e,
                ids,
                nodes: t,
                health: l[e] || {},
                edges: {
                    in: r,
                    out,
                    inner
                }
            });
        });
        return f;
    })(e, t));
};
export var processEdges = function(e) {
    if (module63(e)) {
        return [];
    }
    const t = {};
    e.forEach((e)=>{
        if (t[e.data.id]) {
            const a = module26(t[e.data.id], "data.traffic", {});
            const r = module26(e, "data.traffic", {});
            if (a.protocol === "tcp" || r.protocol === "tcp") {
                const n = Number(module26(a, "rates.tcp", 0));
                const o = Number(module26(r, "rates.tcp", 0));
                module74(a, "rates.tcp", (n + o).toFixed(2));
            }
        } else {
            t[e.data.id] = e;
        }
    });
    return Object.values(t);
};
