import module4852 from "unpacked/module-4852.js";
import module1972 from "unpacked/module-1972.js";
import module1973 from "unpacked/module-1973.js";
export default function(e, t, n, a, l, u, s, c, f, d) {
    const p = 8 & t;
    t |= p ? 32 : 64;
    if (!(4 & (t &= ~(p ? 64 : 32)))) {
        t &= -4;
    }
    const h = [
        e,
        t,
        l,
        p ? u : undefined,
        p ? s : undefined,
        p ? undefined : u,
        p ? undefined : s,
        c,
        f,
        d
    ];
    const v = n(...h);
    if (module4852(e)) {
        module1972(v, h);
    }
    v.placeholder = a;
    return module1973(v, e, t);
};
