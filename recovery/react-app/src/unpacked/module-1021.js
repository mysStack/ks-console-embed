import module1750 from "unpacked/module-1750.js";
import module3422 from "unpacked/module-3422.js";
import module1747 from "unpacked/module-1747.js";
import module1745 from "unpacked/module-1745.js";
import module3426 from "unpacked/module-3426.js";
(module.exports = function(e, t) {
    let n;
    let o;
    let writable;
    let s;
    let c;
    if (arguments.length < 2 || typeof e !== "string") {
        s = t;
        t = e;
        e = null;
    } else {
        s = arguments[2];
    }
    if (module1750(e)) {
        n = module3426.call(e, "c");
        o = module3426.call(e, "e");
        writable = module3426.call(e, "w");
    } else {
        writable = true;
        n = true;
        o = false;
    }
    c = {
        value: t,
        configurable: n,
        enumerable: o,
        writable
    };
    if (s) {
        return module1747(module1745(s), c);
    }
    return c;
}).gs = function(e, get, set, ...args) {
    let u;
    let s;
    let c;
    let f;
    if (typeof e !== "string") {
        c = set;
        set = get;
        get = e;
        e = null;
    } else {
        c = args[0];
    }
    if (module1750(get)) {
        if (module3422(get)) {
            if (module1750(set)) {
                if (!module3422(set)) {
                    c = set;
                    set = undefined;
                }
            } else {
                set = undefined;
            }
        } else {
            c = get;
            set = undefined;
            get = undefined;
        }
    } else {
        get = undefined;
    }
    if (module1750(e)) {
        u = module3426.call(e, "c");
        s = module3426.call(e, "e");
    } else {
        u = true;
        s = false;
    }
    f = {
        get,
        set,
        configurable: u,
        enumerable: s
    };
    if (c) {
        return module1747(module1745(c), f);
    }
    return f;
};
