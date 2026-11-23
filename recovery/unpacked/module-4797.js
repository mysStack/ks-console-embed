import module21 from "./module-21.js";
const o = /[^\0-\u007E]/;
const i = /[.\u3002\uFF0E\uFF61]/g;
const a = "Overflow: input needs wider integers to process";
const u = module21(i.exec);
const f = module21("".charCodeAt);
const d = module21([].join);
const p = module21([].push);
const h = module21("".replace);
const v = module21("".split);
const g = module21("".toLowerCase);
const y = (e)=>e + 22 + 75 * (e < 26);
const m = (e, t, n)=>{
    let r = 0;
    e = n ? Math.floor(e / 700) : e >> 1;
    for(e += Math.floor(e / t); e > 455;){
        e = Math.floor(e / 35);
        r += 36;
    }
    return Math.floor(r + 36 * e / (e + 38));
};
const b = (e)=>{
    let t;
    let n;
    const r = [];
    const length = (e = ((e)=>{
        const t = [];
        for(let n = 0, r = e.length; n < r;){
            const o = f(e, n++);
            if (o >= 55296 && o <= 56319 && n < r) {
                const i = f(e, n++);
                if ((64512 & i) == 56320) {
                    p(t, ((1023 & o) << 10) + (1023 & i) + 65536);
                } else {
                    p(t, o);
                    n--;
                }
            } else {
                p(t, o);
            }
        }
        return t;
    })(e)).length;
    let i = 128;
    let u = 0;
    let h = 72;
    for(t = 0; t < e.length; t++){
        if ((n = e[t]) < 128) {
            p(r, String.fromCharCode(n));
        }
    }
    const r_length = r.length;
    let g = r_length;
    for(r_length && p(r, "-"); g < length;){
        let b = 2147483647;
        for(t = 0; t < e.length; t++){
            if ((n = e[t]) >= i && n < b) {
                b = n;
            }
        }
        const x = g + 1;
        if (b - i > Math.floor((2147483647 - u) / x)) {
            throw new RangeError(a);
        }
        u += (b - i) * x;
        i = b;
        for(t = 0; t < e.length; t++){
            if ((n = e[t]) < i && ++u > 2147483647) {
                throw new RangeError(a);
            }
            if (n === i) {
                let w = u;
                let _ = 36;
                while(true){
                    const C = _ <= h ? 1 : _ >= h + 26 ? 26 : _ - h;
                    if (w < C) {
                        break;
                    }
                    const O = w - C;
                    const E = 36 - C;
                    p(r, String.fromCharCode(y(C + O % E)));
                    w = Math.floor(O / E);
                    _ += 36;
                }
                p(r, String.fromCharCode(y(w)));
                h = m(u, x, g === r_length);
                u = 0;
                g++;
            }
        }
        u++;
        i++;
    }
    return d(r, "");
};
export default function(e) {
    let t;
    let n;
    const r = [];
    const a = v(h(g(e), i, "."), ".");
    for(t = 0; t < a.length; t++){
        n = a[t];
        p(r, u(o, n) ? `xn--${b(n)}` : n);
    }
    return d(r, ".");
};
