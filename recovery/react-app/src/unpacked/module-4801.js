import module4802 from "unpacked/module-4802.js";
export default function(e, t, n, i) {
    const a = +e;
    const l = Math.abs(a);
    const u = module4802(a);
    if (l < i) {
        return u * ((e)=>e + 4503599627370496 - 4503599627370496)(l / i / t) * i * t;
    }
    const s = (1 + t / 2.220446049250313e-16) * l;
    const c = s - (s - l);
    if (c > n || c != c) {
        return u * Infinity;
    }
    return u * c;
};
