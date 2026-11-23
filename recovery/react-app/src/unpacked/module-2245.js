export default function(e, t, n, r, o) {
    o(e, function(e, o, i) {
        n = r ? (r = false, e) : t(n, e, o, i);
    });
    return n;
};
