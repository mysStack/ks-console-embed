import module835 from "./module-835.js";
function o(e, t, n) {
    const o = module835.zipObject(n, module835.map(n, function(e, t) {
        return t;
    }));
    const i = module835.flatten(module835.map(t, function(t) {
        return module835.sortBy(module835.map(e.outEdges(t), function(t) {
            return {
                pos: o[t.w],
                weight: e.edge(t).weight
            };
        }), "pos");
    }), true);
    for(var a = 1; a < n.length;){
        a <<= 1;
    }
    const l = 2 * a - 1;
    a -= 1;
    const u = module835.map(new Array(l), function() {
        return 0;
    });
    let s = 0;
    module835.forEach(i.forEach((e)=>{
        let t = e.pos + a;
        u[t] += e.weight;
        let n = 0;
        while(t > 0){
            if (t % 2) {
                n += u[t + 1];
            }
            u[t = t - 1 >> 1] += e.weight;
        }
        s += e.weight * n;
    }));
    return s;
}
export default function(e, t) {
    let n = 0;
    for(let r = 1; r < t.length; ++r){
        n += o(e, t[r - 1], t[r]);
    }
    return n;
};
