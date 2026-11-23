import module1422 from "unpacked/module-1422.js";
const i = 2 ** -52;
const a = 2 ** -23;
const l = 2 ** 127 * (2 - a);
const u = 2 ** -126;
export default Math.fround || function(e) {
    let t;
    let n;
    const o = Math.abs(e);
    const s = module1422(e);
    if (o < u) {
        return s * (o / u / a + 1 / i - 1 / i) * u * a;
    }
    if ((n = (t = (1 + a / i) * o) - (t - o)) > l || n != n) {
        return s * Infinity;
    }
    return s * n;
};
