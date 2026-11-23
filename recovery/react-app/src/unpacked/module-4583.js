import module835 from "unpacked/module-835.js";
export default function(e) {
    const t = ((e)=>{
        const t = {};
        let n = 0;
        module835.forEach(e.children(), function o(i) {
            const low = n;
            module835.forEach(e.children(i), o);
            t[i] = {
                low,
                lim: n++
            };
        });
        return t;
    })(e);
    module835.forEach(e.graph().dummyChains, function(n) {
        let r = e.node(n);
        for(let o = r.edgeObj, i = ((e, t, n, r)=>{
            let o;
            let lca;
            const a = [];
            const l = [];
            const u = Math.min(t[n].low, t[r].low);
            const s = Math.max(t[n].lim, t[r].lim);
            o = n;
            do {
                o = e.parent(o);
                a.push(o);
            }while (o && (t[o].low > u || s > t[o].lim))
            lca = o;
            for(o = r; (o = e.parent(o)) !== lca;){
                l.push(o);
            }
            return {
                path: a.concat(l.reverse()),
                lca
            };
        })(e, t, o.v, o.w), a = i.path, l = i.lca, u = 0, s = a[u], c = true; n !== o.w;){
            r = e.node(n);
            if (c) {
                while((s = a[u]) !== l && e.node(s).maxRank < r.rank){
                    u++;
                }
                if (s === l) {
                    c = false;
                }
            }
            if (!c) {
                while(u < a.length - 1 && e.node(s = a[u + 1]).minRank <= r.rank){
                    u++;
                }
                s = a[u];
            }
            e.setParent(n, s);
            n = e.successors(n)[0];
        }
    });
};
