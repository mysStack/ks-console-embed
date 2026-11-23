function r(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
export default function(e, t, n, a) {
    t = t || "&";
    n = n || "=";
    const i = {};
    if (typeof e !== "string" || e.length === 0) {
        return i;
    }
    const l = /\+/g;
    e = e.split(t);
    let s = 1000;
    if (a && typeof a.maxKeys === "number") {
        s = a.maxKeys;
    }
    let e_length = e.length;
    if (s > 0 && e_length > s) {
        e_length = s;
    }
    for(let c = 0; c < e_length; ++c){
        let f;
        let d;
        let p;
        let h;
        const v = e[c].replace(l, "%20");
        const m = v.indexOf(n);
        if (m >= 0) {
            f = v.substr(0, m);
            d = v.substr(m + 1);
        } else {
            f = v;
            d = "";
        }
        p = decodeURIComponent(f);
        h = decodeURIComponent(d);
        if (r(i, p)) {
            if (o(i[p])) {
                i[p].push(h);
            } else {
                i[p] = [
                    i[p],
                    h
                ];
            }
        } else {
            i[p] = h;
        }
    }
    return i;
};
var o = Array.isArray || ((e)=>Object.prototype.toString.call(e) === "[object Array]");
