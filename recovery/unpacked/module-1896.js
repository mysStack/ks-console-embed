import module909 from "./module-909.js";
export default function(e) {
    let lowlink = 0;
    const n = [];
    const o = {};
    const i = [];
    e.nodes().forEach((a)=>{
        if (!module909.has(o, a)) {
            (function a(l) {
                const u = o[l] = {
                    onStack: true,
                    lowlink,
                    index: lowlink++
                };
                n.push(l);
                e.successors(l).forEach((e)=>{
                    if (module909.has(o, e)) {
                        if (o[e].onStack) {
                            u.lowlink = Math.min(u.lowlink, o[e].index);
                        }
                    } else {
                        a(e);
                        u.lowlink = Math.min(u.lowlink, o[e].lowlink);
                    }
                });
                if (u.lowlink === u.index) {
                    let s;
                    const c = [];
                    do {
                        s = n.pop();
                        o[s].onStack = false;
                        c.push(s);
                    }while (l !== s)
                    i.push(c);
                }
            })(a);
        }
    });
    return i;
};
