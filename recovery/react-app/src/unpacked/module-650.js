import module411 from "./module-411.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
export default function(e, t, n, a, i, l) {
    const s = 1 & n;
    const u = module411(e);
    const u_length = u.length;
    if (u_length != module411(t).length && !s) {
        return false;
    }
    for(var f = u_length; f--;){
        var d = u[f];
        if (!(s ? d in t : hasOwnProperty.call(t, d))) {
            return false;
        }
    }
    const p = l.get(e);
    const h = l.get(t);
    if (p && h) {
        return p == t && h == e;
    }
    let v = true;
    l.set(e, t);
    l.set(t, e);
    let m = s;
    while(++f < u_length){
        const g = e[d = u[f]];
        const y = t[d];
        if (a) var b = s ? a(y, g, d, t, e, l) : a(g, y, d, e, t, l);
        if (!(b === undefined ? g === y || i(g, y, n, a, l) : b)) {
            v = false;
            break;
        }
        if (!m) {
            m = d == "constructor";
        }
    }
    if (v && !m) {
        const C = e.constructor;
        const w = t.constructor;
        if (!(C == w || !("constructor" in e) || !("constructor" in t) || typeof C === "function" && C instanceof C && typeof w === "function" && w instanceof w)) {
            v = false;
        }
    }
    l.delete(e);
    l.delete(t);
    return v;
};
