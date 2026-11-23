function n(e, t, n) {
    if (e instanceof RegExp) {
        e = r(e, n);
    }
    if (t instanceof RegExp) {
        t = r(t, n);
    }
    const i = o(e, t, n);
    return i && {
        start: i[0],
        end: i[1],
        pre: n.slice(0, i[0]),
        body: n.slice(i[0] + e.length, i[1]),
        post: n.slice(i[1] + t.length)
    };
}
function r(e, t) {
    const n = t.match(e);
    if (n) {
        return n[0];
    }
    return null;
}
function o(e, t, n) {
    let r;
    let o;
    let i;
    let a;
    let l;
    let u = n.indexOf(e);
    let s = n.indexOf(t, u + 1);
    let c = u;
    if (u >= 0 && s > 0) {
        r = [];
        for(i = n.length; c >= 0 && !l;){
            if (c == u) {
                r.push(c);
                u = n.indexOf(e, c + 1);
            } else if (r.length == 1) {
                l = [
                    r.pop(),
                    s
                ];
            } else {
                if ((o = r.pop()) < i) {
                    i = o;
                    a = s;
                }
                s = n.indexOf(t, c + 1);
            }
            c = u < s && u >= 0 ? u : s;
        }
        if (r.length) {
            l = [
                i,
                a
            ];
        }
    }
    return l;
}
export default n;
n.range = o;
