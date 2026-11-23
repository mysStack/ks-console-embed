import module835 from "unpacked/module-835.js";
export default function(e, t) {
    const n = {};
    module835.forEach(e, function(e, i) {
        const o = n[e.v] = {
            indegree: 0,
            in: [],
            out: [],
            vs: [
                e.v
            ],
            i
        };
        if (!module835.isUndefined(e.barycenter)) {
            o.barycenter = e.barycenter;
            o.weight = e.weight;
        }
    });
    module835.forEach(t.edges(), function(e) {
        const t = n[e.v];
        const o = n[e.w];
        if (!(module835.isUndefined(t) || module835.isUndefined(o))) {
            o.indegree++;
            t.out.push(n[e.w]);
        }
    });
    return ((e)=>{
        const t = [];
        function n(e) {
            return function(t) {
                if (!t.merged) {
                    if (module835.isUndefined(t.barycenter) || module835.isUndefined(e.barycenter) || t.barycenter >= e.barycenter) {
                        ((e, t)=>{
                            let n = 0;
                            let r = 0;
                            if (e.weight) {
                                n += e.barycenter * e.weight;
                                r += e.weight;
                            }
                            if (t.weight) {
                                n += t.barycenter * t.weight;
                                r += t.weight;
                            }
                            e.vs = t.vs.concat(e.vs);
                            e.barycenter = n / r;
                            e.weight = r;
                            e.i = Math.min(t.i, e.i);
                            t.merged = true;
                        })(e, t);
                    }
                }
            };
        }
        function o(t) {
            return function(n) {
                n.in.push(t);
                if (--n.indegree == 0) {
                    e.push(n);
                }
            };
        }
        while(e.length){
            const i = e.pop();
            t.push(i);
            module835.forEach(i.in.reverse(), n(i));
            module835.forEach(i.out, o(i));
        }
        return module835.map(module835.filter(t, function(e) {
            return !e.merged;
        }), function(e) {
            return module835.pick(e, [
                "vs",
                "i",
                "barycenter",
                "weight"
            ]);
        });
    })(module835.filter(n, function(e) {
        return !e.indegree;
    }));
};
