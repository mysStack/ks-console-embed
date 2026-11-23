import module1964 from "./module-1964.js";
import module4849 from "./module-4849.js";
import module4850 from "./module-4850.js";
import module1966 from "./module-1966.js";
import module4861 from "./module-4861.js";
import module1970 from "./module-1970.js";
import module4862 from "./module-4862.js";
import module1972 from "./module-1972.js";
import module1973 from "./module-1973.js";
import module255 from "./module-255.js";
export default function(e, t, n, h, v, g, y, m) {
    const b = 2 & t;
    if (!b && typeof e !== "function") {
        throw new TypeError("Expected a function");
    }
    let x = h ? h.length : 0;
    if (!x) {
        t &= -97;
        v = undefined;
        h = undefined;
    }
    y = y === undefined ? y : Math.max(module255(y), 0);
    m = m === undefined ? m : module255(m);
    x -= v ? v.length : 0;
    if (64 & t) {
        var w = h;
        var _ = v;
        v = undefined;
        h = undefined;
    }
    const C = b ? undefined : module1970(e);
    const O = [
        e,
        t,
        n,
        h,
        v,
        w,
        _,
        g,
        y,
        m
    ];
    if (C) {
        module4862(O, C);
    }
    e = O[0];
    t = O[1];
    n = O[2];
    h = O[3];
    v = O[4];
    if (!(m = O[9] = O[9] === undefined ? b ? 0 : e.length : Math.max(O[9] - x, 0)) && 24 & t) {
        t &= -25;
    }
    if (t && t != 1) {
        E = t == 8 || t == 16 ? module4850(e, t, m) : t != 32 && t != 33 || v.length ? module1966(...O) : module4861(e, t, n, h);
    } else {
        var E = module4849(e, t, n);
    }
    return module1973((C ? module1964 : module1972)(E, O), e, t);
};
