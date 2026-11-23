import module8 from "unpacked/module-8.js";
import module79 from "unpacked/module-79.js";
import module33 from "unpacked/module-33.js";
import module25 from "unpacked/module-25.js";
import module384 from "unpacked/module-384.js";
import module21 from "unpacked/module-21.js";
import module174 from "unpacked/module-174.js";
import module53 from "unpacked/module-53.js";
import module206 from "unpacked/module-206.js";
import module107 from "unpacked/module-107.js";
import module166 from "unpacked/module-166.js";
import module267 from "unpacked/module-267.js";
import module19 from "unpacked/module-19.js";
import { f as f_1 } from "unpacked/module-150.js";
import { f as f_2 } from "unpacked/module-115.js";
import { f as f_3 } from "unpacked/module-70.js";
import module387 from "unpacked/module-387.js";
import module214 from "unpacked/module-214.js";
const module214_trim = module214.trim;
const module25_Number = module25.Number;
const module384_Number = module384.Number;
const w_prototype = module25_Number.prototype;
const module25_TypeError = module25.TypeError;
const E = module21("".slice);
const k = module21("".charCodeAt);
const O = (e)=>{
    const t = module267(e, "number");
    if (typeof t === "bigint") {
        return t;
    }
    return S(t);
};
var S = (e)=>{
    let t;
    let n;
    let r;
    let o;
    let a;
    let i;
    let l;
    let s;
    let u = module267(e, "number");
    if (module166(u)) {
        throw new module25_TypeError("Cannot convert a Symbol value to a number");
    }
    if (typeof u === "string" && u.length > 2) {
        u = module214_trim(u);
        if ((t = k(u, 0)) === 43 || t === 45) {
            if ((n = k(u, 2)) === 88 || n === 120) {
                return NaN;
            }
        } else if (t === 48) {
            switch(k(u, 1)){
                case 66:
                case 98:
                    r = 2;
                    o = 49;
                    break;
                case 79:
                case 111:
                    r = 8;
                    o = 55;
                    break;
                default:
                    return +u;
            }
            i = (a = E(u, 2)).length;
            for(l = 0; l < i; l++){
                if ((s = k(a, l)) < 48 || s > o) {
                    return NaN;
                }
            }
            return parseInt(a, r);
        }
    }
    return +u;
};
const forced = module174("Number", !module25_Number(" 0o1") || !module25_Number("0b1") || module25_Number("+0x1"));
const z = (e)=>module107(w_prototype, e) && module19(function() {
        module387(e);
    });
const Number = function(e) {
    const t = arguments.length < 1 ? 0 : module25_Number(O(e));
    if (z(this)) {
        return module206(Object(t), this, Number);
    }
    return t;
};
Number.prototype = w_prototype;
if (forced && !module79) {
    w_prototype.constructor = Number;
}
module8({
    global: true,
    constructor: true,
    wrap: true,
    forced
}, {
    Number
});
const T = (Number, t)=>{
    let n;
    for(let r = module33 ? f_1(t) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), o = 0; r.length > o; o++){
        if (module53(t, n = r[o]) && !module53(Number, n)) {
            f_3(Number, n, f_2(t, n));
        }
    }
};
if (module79 && module384_Number) {
    T(module384.Number, module384_Number);
}
if (forced || module79) {
    T(module384.Number, module25_Number);
}
