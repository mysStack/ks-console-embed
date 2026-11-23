import module8 from "./module-8.js";
import module25 from "./module-25.js";
import module21 from "./module-21.js";
import module174 from "./module-174.js";
import module67 from "./module-67.js";
import module420 from "./module-420.js";
import module213 from "./module-213.js";
import module254 from "./module-254.js";
import module35 from "./module-35.js";
import module103 from "./module-103.js";
import module54 from "./module-54.js";
import module19 from "./module-19.js";
import module271 from "./module-271.js";
import module123 from "./module-123.js";
import module206 from "./module-206.js";
export default function(e, t, n) {
    const AS_ENTRIES = e.indexOf("Map") !== -1;
    const b = e.indexOf("Weak") !== -1;
    const C = AS_ENTRIES ? "set" : "add";
    const w = module25[e];
    const _ = w && w.prototype;
    let x = w;
    const M = {};
    const E = (e)=>{
        const t = module21(_[e]);
        module67(_, e, e === "add" ? function(e) {
            t(this, e === 0 ? 0 : e);
            return this;
        } : e === "delete" ? function(e) {
            return !(b && !module54(e)) && t(this, e === 0 ? 0 : e);
        } : e === "get" ? function(e) {
            if (b && !module54(e)) {
                return undefined;
            }
            return t(this, e === 0 ? 0 : e);
        } : e === "has" ? function(e) {
            return !(b && !module54(e)) && t(this, e === 0 ? 0 : e);
        } : function(e, n) {
            t(this, e === 0 ? 0 : e, n);
            return this;
        });
    };
    if (module174(e, !module35(w) || !(b || _.forEach && !module19(function() {
        (new w).entries().next();
    })))) {
        x = n.getConstructor(t, e, AS_ENTRIES, C);
        module420.enable();
    } else if (module174(e, true)) {
        const k = new x;
        const O = k[C](b ? {} : -0, 1) !== k;
        const S = module19(function() {
            k.has(1);
        });
        const L = module271(function(e) {
            new w(e);
        });
        const z = !b && module19(function() {
            const e = new w;
            for(let t = 5; t--;){
                e[C](t, t);
            }
            return !e.has(-0);
        });
        if (!L) {
            x = t(function(e, t) {
                module254(e, _);
                const that = module206(new w, e, x);
                if (!module103(t)) {
                    module213(t, that[C], {
                        that,
                        AS_ENTRIES
                    });
                }
                return that;
            });
            x.prototype = _;
            _.constructor = x;
        }
        if (S || z) {
            E("delete");
            E("has");
            if (AS_ENTRIES) {
                E("get");
            }
        }
        if (z || O) {
            E(C);
        }
        if (b && _.clear) {
            delete _.clear;
        }
    }
    M[e] = x;
    module8({
        global: true,
        constructor: true,
        forced: x !== w
    }, M);
    module123(x, e);
    if (!b) {
        n.setStrong(x, e, AS_ENTRIES);
    }
    return x;
};
