import module8 from "./module-8.js";
import module21 from "./module-21.js";
import module89 from "./module-89.js";
import module77 from "./module-77.js";
import module99 from "./module-99.js";
import module340 from "./module-340.js";
import module46 from "./module-46.js";
import module19 from "./module-19.js";
import module488 from "./module-488.js";
import module128 from "./module-128.js";
import module504 from "./module-504.js";
import module505 from "./module-505.js";
import module146 from "./module-146.js";
import module506 from "./module-506.js";
const g = [];
const y = module21(g.sort);
const b = module21(g.push);
const C = module19(function() {
    g.sort(undefined);
});
const w = module19(function() {
    g.sort(null);
});
const _ = module128("sort");
const x = !module19(function() {
    if (module146) {
        return module146 < 70;
    }
    if (!(module504 && module504 > 3)) {
        if (module505) {
            return true;
        }
        if (module506) {
            return module506 < 603;
        }
        let e;
        let t;
        let v_1;
        let r;
        let o = "";
        for(e = 65; e < 76; e++){
            t = String.fromCharCode(e);
            switch(e){
                case 66:
                case 69:
                case 70:
                case 72:
                    v_1 = 3;
                    break;
                case 68:
                case 71:
                    v_1 = 4;
                    break;
                default:
                    v_1 = 2;
            }
            for(r = 0; r < 47; r++){
                g.push({
                    k: t + r,
                    v: v_1
                });
            }
        }
        g.sort((e, t)=>t.v - e.v);
        for(r = 0; r < g.length; r++){
            t = g[r].k.charAt(0);
            if (o.charAt(o.length - 1) !== t) {
                o += t;
            }
        }
        return o !== "DGBEFHACIJK";
    }
});
module8({
    target: "Array",
    proto: true,
    forced: C || !w || !_ || !x
}, {
    sort: function(e) {
        if (e !== undefined) {
            module89(e);
        }
        const t = module77(this);
        if (x) {
            if (e === undefined) {
                return y(t);
            }
            return y(t, e);
        }
        let n;
        let r;
        const o = [];
        const c = module99(t);
        for(r = 0; r < c; r++){
            if (r in t) {
                b(o, t[r]);
            }
        }
        module488(o, ((e)=>function(t, n) {
                if (n === undefined) {
                    return -1;
                }
                if (t === undefined) {
                    return 1;
                }
                if (e !== undefined) {
                    return +e(t, n) || 0;
                }
                if (module46(t) > module46(n)) {
                    return 1;
                }
                return -1;
            })(e));
        n = module99(o);
        for(r = 0; r < n;){
            t[r] = o[r++];
        }
        while(r < c){
            module340(t, r++);
        }
        return t;
    }
});
