function r(start) {
    return {
        start,
        count: 1
    };
}
function o(e, t) {
    e.end = t;
    e.step = t - e.start;
    e.count = 2;
}
function a(e, t, n) {
    if (t) {
        if (t.count === 2) {
            e.push(r(t.start));
            e.push(r(t.end));
        } else {
            e.push(t);
        }
    }
    if (n) {
        e.push(n);
    }
}
export default function(e) {
    const t = [];
    let n;
    for (const l of e){
        if (typeof l !== "number") {
            a(t, n, r(l));
            n = undefined;
        } else if (n) {
            if (n.count === 1) {
                o(n, l);
            } else if (n.step === l - n.end) {
                n.count++;
                n.end = l;
            } else if (n.count === 2) {
                t.push(r(n.start));
                o(n = r(n.end), l);
            } else {
                a(t, n);
                n = r(l);
            }
        } else {
            n = r(l);
        }
    }
    a(t, n);
    return t;
};
