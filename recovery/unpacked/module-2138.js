function r(e, t, n) {
    if (e instanceof RegExp) {
        e = o(e, n);
    }
    if (t instanceof RegExp) {
        t = o(t, n);
    }
    const r = i(e, t, n);
    return r && {
        start: r[0],
        end: r[1],
        pre: n.slice(0, r[0]),
        body: n.slice(r[0] + e.length, r[1]),
        post: n.slice(r[1] + t.length)
    };
}
function o(e, t) {
    const n = t.match(e);
    if (n) {
        return n[0];
    }
    return null;
}
function i(e, t, n) {
    let r;
    let o;
    let i;
    let a;
    let l;
    let u = n.indexOf(e);
    let s = n.indexOf(t, u + 1);
    let c = u;
    if (u >= 0 && s > 0) {
        if (e === t) {
            return [
                u,
                s
            ];
        }
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
export default r;
r.range = i;
