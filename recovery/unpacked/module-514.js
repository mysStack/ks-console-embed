export default function(e, t, n) {
    if (e == e) {
        if (n !== undefined) {
            e = e <= n ? e : n;
        }
        if (t !== undefined) {
            e = e >= t ? e : t;
        }
    }
    return e;
};
