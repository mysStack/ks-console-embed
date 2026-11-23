"use strict";
const module964 = require("./module-964.js").default;
const module1238 = require("./module-1238.js").default;
const module1424 = require("./module-1424.js").default;
const module4480 = require("./module-4480.js").default;
const module1421 = require("./module-1421.js").default;
const module990 = require("./module-990.js").default;
const s = require("./module-4484.js").f;
const c = require("./module-1881.js").f;
const f = require("./module-1420.js").f;
const trim = require("./module-1428.js").default.trim;
let module964_Number = module964.Number;
const h = module964_Number;
const p_prototype = module964_Number.prototype;
const g = module1424(require("./module-4488.js")(p_prototype)) == "Number";
const y = "trim" in String.prototype;
const m = function(e) {
    let t = module1421(e, false);
    if (typeof t === "string" && t.length > 2) {
        let n;
        let r;
        let o;
        const i = (t = y ? t.trim() : trim(t, 3)).charCodeAt(0);
        if (i === 43 || i === 45) {
            if ((n = t.charCodeAt(2)) === 88 || n === 120) {
                return NaN;
            }
        } else if (i === 48) {
            switch(t.charCodeAt(1)){
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
                    return +t;
            }
            let a;
            const u = t.slice(2);
            for(let s = 0, c = u.length; s < c; s++){
                if ((a = u.charCodeAt(s)) < 48 || a > o) {
                    return NaN;
                }
            }
            return parseInt(u, r);
        }
    }
    return +t;
};
if (!module964_Number(" 0o1") || !module964_Number("0b1") || module964_Number("+0x1")) {
    module964_Number = function(e) {
        const t = arguments.length < 1 ? 0 : e;
        const _this = this;
        if (_this instanceof module964_Number && (g ? module990(function() {
            p_prototype.valueOf.call(_this);
        }) : module1424(_this) != "Number")) {
            return module4480(new h(m(t)), _this, module964_Number);
        }
        return m(t);
    };
    let b;
    for(let x = require("./module-1077.js") ? s(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), w = 0; x.length > w; w++){
        if (module1238(h, b = x[w]) && !module1238(module964_Number, b)) {
            f(module964_Number, b, c(h, b));
        }
    }
    module964_Number.prototype = p_prototype;
    p_prototype.constructor = module964_Number;
    require("./module-1876.js")(module964, "Number", module964_Number);
}
