export default {
    pack: function(e, t, n) {
        let s;
        let c;
        let f;
        const d = Array(n);
        let p = 8 * n - t - 1;
        const h = (1 << p) - 1;
        const v = h >> 1;
        const g = t === 23 ? 2 ** -24 - 2 ** -77 : 0;
        const y = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
        let m = 0;
        for((e = Math.abs(e)) != e || e === Infinity ? (c = e != e ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (f = 2 ** -s) < 1 && (s--, f *= 2), (e += s + v >= 1 ? g / f : g * 2 ** (1 - v)) * f >= 2 && (s++, f /= 2), s + v >= h ? (c = 0, s = h) : s + v >= 1 ? (c = (e * f - 1) * 2 ** t, s += v) : (c = e * 2 ** (v - 1) * 2 ** t, s = 0)); t >= 8;){
            d[m++] = 255 & c;
            c /= 256;
            t -= 8;
        }
        s = s << t | c;
        for(p += t; p > 0;){
            d[m++] = 255 & s;
            s /= 256;
            p -= 8;
        }
        d[--m] |= 128 * y;
        return d;
    },
    unpack: function(e, t) {
        let n;
        const e_length = e.length;
        const o = 8 * e_length - t - 1;
        const a = (1 << o) - 1;
        const l = a >> 1;
        let u = o - 7;
        let s = e_length - 1;
        let c = e[s--];
        let f = 127 & c;
        for(c >>= 7; u > 0;){
            f = 256 * f + e[s--];
            u -= 8;
        }
        n = f & (1 << -u) - 1;
        f >>= -u;
        for(u += t; u > 0;){
            n = 256 * n + e[s--];
            u -= 8;
        }
        if (f === 0) {
            f = 1 - l;
        } else {
            if (f === a) {
                if (n) {
                    return NaN;
                }
                if (c) {
                    return -Infinity;
                }
                return Infinity;
            }
            n += 2 ** t;
            f -= l;
        }
        return (c ? -1 : 1) * n * 2 ** (f - t);
    }
};
