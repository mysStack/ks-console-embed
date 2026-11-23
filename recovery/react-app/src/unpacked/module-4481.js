const module1076 = require("unpacked/module-1076.js").default;
const module1237 = require("unpacked/module-1237.js").default;
const check = function(e, t) {
    module1237(e);
    if (!module1076(t) && t !== null) {
        throw TypeError(`${t}: can't set as prototype!`);
    }
};
module.exports = {
    set: Object.setPrototypeOf || ("__proto__" in {} ? ((e, r)=>{
        let t = false;
        try {
            (r = require("unpacked/module-1879.js").default(Function.call, require("unpacked/module-1881.js").f(Object.prototype, "__proto__").set, 2))(e, []);
            t = !(e instanceof Array);
        } catch (e) {
            t = true;
        }
        return function(e, n) {
            check(e, n);
            if (t) {
                e.__proto__ = n;
            } else {
                r(e, n);
            }
            return e;
        };
    })({}) : undefined),
    check
};
