import module1021 from "unpacked/module-1021.js";
import module1751 from "unpacked/module-1751.js";
import module1203 from "unpacked/module-1203.js";
import module3440 from "unpacked/module-3440.js";
import module3441 from "unpacked/module-3441.js";
import module3442 from "unpacked/module-3442.js";
let r;
let o;
let i;
let module1203_Symbol = module1203.Symbol;
if (typeof module1203_Symbol === "function") {
    try {
        String(module1203_Symbol());
        i = true;
    } catch (e) {}
} else {
    module1203_Symbol = null;
}
o = function(e) {
    if (this instanceof o) {
        throw new TypeError("Symbol is not a constructor");
    }
    return r(e);
};
export default r = function e(t) {
    let n;
    if (this instanceof e) {
        throw new TypeError("Symbol is not a constructor");
    }
    if (i) {
        return module1203_Symbol(t);
    }
    n = Object.create(o.prototype);
    t = t === undefined ? "" : String(t);
    return Object.defineProperties(n, {
        __description__: module1021("", t),
        __name__: module1021("", module3440(t))
    });
};
module3441(r);
module3442(r);
Object.defineProperties(o.prototype, {
    constructor: module1021(r),
    toString: module1021("", function() {
        return this.__name__;
    })
});
Object.defineProperties(r.prototype, {
    toString: module1021(function() {
        return `Symbol (${module1751(this).__description__})`;
    }),
    valueOf: module1021(function() {
        return module1751(this);
    })
});
Object.defineProperty(r.prototype, r.toPrimitive, module1021("", function() {
    const e = module1751(this);
    if (typeof e === "symbol") {
        return e;
    }
    return e.toString();
}));
Object.defineProperty(r.prototype, r.toStringTag, module1021("c", "Symbol"));
Object.defineProperty(o.prototype, r.toStringTag, module1021("c", r.prototype[r.toStringTag]));
Object.defineProperty(o.prototype, r.toPrimitive, module1021("c", r.prototype[r.toPrimitive]));
