import module1854 from "./module-1854.js";
import module1855 from "./module-1855.js";
let r;
let o;
let l = 0;
let u = 0;
export default function(e, t, n) {
    let s = t && n || 0;
    const c = t || [];
    let f = (e = e || {}).node || r;
    let d = e.clockseq !== undefined ? e.clockseq : o;
    if (f == null || d == null) {
        const p = module1854();
        if (f == null) {
            f = r = [
                1 | p[0],
                p[1],
                p[2],
                p[3],
                p[4],
                p[5]
            ];
        }
        if (d == null) {
            d = o = 16383 & (p[6] << 8 | p[7]);
        }
    }
    let h = e.msecs !== undefined ? e.msecs : (new Date).getTime();
    let v = e.nsecs !== undefined ? e.nsecs : u + 1;
    const g = h - l + (v - u) / 10000;
    if (g < 0 && e.clockseq === undefined) {
        d = d + 1 & 16383;
    }
    if ((g < 0 || h > l) && e.nsecs === undefined) {
        v = 0;
    }
    if (v >= 10000) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    }
    l = h;
    u = v;
    o = d;
    const y = (10000 * (268435455 & (h += 12219292800000)) + v) % 4294967296;
    c[s++] = y >>> 24 & 255;
    c[s++] = y >>> 16 & 255;
    c[s++] = y >>> 8 & 255;
    c[s++] = 255 & y;
    const m = h / 4294967296 * 10000 & 268435455;
    c[s++] = m >>> 8 & 255;
    c[s++] = 255 & m;
    c[s++] = m >>> 24 & 15 | 16;
    c[s++] = m >>> 16 & 255;
    c[s++] = d >>> 8 | 128;
    c[s++] = 255 & d;
    for(let b = 0; b < 6; ++b){
        c[s + b] = f[b];
    }
    return t || module1855(c);
};
