import module8 from "./module-8.js";
import module21 from "./module-21.js";
import module173 from "./module-173.js";
import module54 from "./module-54.js";
import module53 from "./module-53.js";
import { f as f_1 } from "./module-70.js";
import module150 from "./module-150.js";
import module350 from "./module-350.js";
import module667 from "./module-667.js";
import module212 from "./module-212.js";
import module669 from "./module-669.js";
let h = false;
const v = module212("meta");
let m = 0;
const g = (e)=>{
    f_1(e, v, {
        value: {
            objectID: `O${m++}`,
            weakData: {}
        }
    });
};
var y = {
    enable: function() {
        y.enable = function() {};
        h = true;
        const e = module150.f;
        const t = module21([].splice);
        const n = {};
        n[v] = 1;
        if (e(n).length) {
            module150.f = function(n) {
                const r = e(n);
                for(let o = 0, a = r.length; o < a; o++){
                    if (r[o] === v) {
                        t(r, o, 1);
                        break;
                    }
                }
                return r;
            };
            module8({
                target: "Object",
                stat: true,
                forced: true
            }, {
                getOwnPropertyNames: module350.f
            });
        }
    },
    fastKey: function(e, t) {
        if (!module54(e)) {
            if (typeof e === "symbol") {
                return e;
            }
            return (typeof e === "string" ? "S" : "P") + e;
        }
        if (!module53(e, v)) {
            if (!module667(e)) {
                return "F";
            }
            if (!t) {
                return "E";
            }
            g(e);
        }
        return e[v].objectID;
    },
    getWeakData: function(e, t) {
        if (!module53(e, v)) {
            if (!module667(e)) {
                return true;
            }
            if (!t) {
                return false;
            }
            g(e);
        }
        return e[v].weakData;
    },
    onFreeze: function(e) {
        if (module669 && h && module667(e) && !module53(e, v)) {
            g(e);
        }
        return e;
    }
};
export default y;
module173[v] = true;
