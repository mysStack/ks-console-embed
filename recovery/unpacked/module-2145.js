import module1507 from "./module-1507.js";
import { compose, map, memoize, range, reverse } from "./module-1508.js";
import module2146 from "./module-2146.js";
function s([n, r]) {
    let o = n;
    let i = r;
    if (n > r) {
        o = r;
        i = n;
    }
    return [
        o,
        i
    ];
}
function c(e, t, n) {
    if (e.lte(0)) {
        return new module1507(0);
    }
    const o = module2146.getDigitCount(e.toNumber());
    const a = new module1507(10).pow(o);
    const l = e.div(a);
    const u = o !== 1 ? 0.05 : 0.1;
    const s = new module1507(Math.ceil(l.div(u).toNumber())).add(n).mul(u).mul(a);
    if (t) {
        return s;
    }
    return new module1507(Math.ceil(s));
}
function f(e, t, n) {
    let a = 1;
    let l = new module1507(e);
    if (!l.isint() && n) {
        const u = Math.abs(e);
        if (u < 1) {
            a = new module1507(10).pow(module2146.getDigitCount(e) - 1);
            l = new module1507(Math.floor(l.div(a).toNumber())).mul(a);
        } else if (u > 1) {
            l = new module1507(Math.floor(e));
        }
    } else {
        if (e === 0) {
            l = new module1507(Math.floor((t - 1) / 2));
        } else if (!n) {
            l = new module1507(Math.floor(e));
        }
    }
    const s = Math.floor((t - 1) / 2);
    return compose(map(function(e) {
        return l.add(new module1507(e - s).mul(a)).toNumber();
    }), range)(0, t);
}
function d(e, t, n, o, i = 0) {
    if (!Number.isFinite((t - e) / (n - 1))) {
        return {
            step: new module1507(0),
            tickMin: new module1507(0),
            tickMax: new module1507(0)
        };
    }
    let a;
    const step = c(new module1507(t).sub(e).div(n - 1), o, i);
    a = e <= 0 && t >= 0 ? new module1507(0) : (a = new module1507(e).add(t).div(2)).sub(new module1507(a).mod(step));
    let u = Math.ceil(a.sub(e).div(step).toNumber());
    let s = Math.ceil(new module1507(t).sub(a).div(step).toNumber());
    const f = u + s + 1;
    if (f > n) {
        return d(e, t, n, o, i + 1);
    }
    if (f < n) {
        s = t > 0 ? s + (n - f) : s;
        u = t > 0 ? u : u + (n - f);
    }
    return {
        step,
        tickMin: a.sub(new module1507(u).mul(step)),
        tickMax: a.add(new module1507(s).mul(step))
    };
}
export const getNiceTickValues = memoize(function([n, a], c = 6, p = true) {
    const h = Math.max(c, 2);
    const v = s([
        n,
        a
    ]);
    const [y, m] = v;
    if (y === -Infinity || m === Infinity) {
        const b = m === Infinity ? [
            y,
            ...range(0, c - 1).map(()=>Infinity)
        ] : [
            ...range(0, c - 1).map(()=>-Infinity),
            m
        ];
        if (n > a) {
            return reverse(b);
        }
        return b;
    }
    if (y === m) {
        return f(y, c, p);
    }
    const x = d(y, m, h, p);
    const { step, tickMin, tickMax } = x;
    const O = module2146.rangeStep(tickMin, tickMax.add(new module1507(0.1).mul(step)), step);
    if (n > a) {
        return reverse(O);
    }
    return O;
});
export const getTickValues = memoize(function([n, i], a = 6, l = true) {
    const d = Math.max(a, 2);
    const p = s([
        n,
        i
    ]);
    const [v, g] = p;
    if (v === -Infinity || g === Infinity) {
        return [
            n,
            i
        ];
    }
    if (v === g) {
        return f(v, a, l);
    }
    const y = c(new module1507(g).sub(v).div(d - 1), l, 0);
    const m = compose(map(function(e) {
        return new module1507(v).add(new module1507(e).mul(y)).toNumber();
    }), range);
    const b = m(0, d).filter((e)=>e >= v && e <= g);
    if (n > i) {
        return reverse(b);
    }
    return b;
});
export const getTickValuesFixedDomain = memoize(function([a, f], t, d = true) {
    const p = s([
        a,
        f
    ]);
    const [v, g] = p;
    if (v === -Infinity || g === Infinity) {
        return [
            a,
            f
        ];
    }
    if (v === g) {
        return [
            v
        ];
    }
    const y = Math.max(t, 2);
    const m = c(new module1507(g).sub(v).div(y - 1), d, 0);
    const b = [
        ...module2146.rangeStep(new module1507(v), new module1507(g).sub(new module1507(0.99).mul(m)), m),
        g
    ];
    if (a > f) {
        return reverse(b);
    }
    return b;
});
