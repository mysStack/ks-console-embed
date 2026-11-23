export default function(e, t, n) {
    let r;
    n(e, function(e, n, o) {
        if (t(e, n, o)) {
            r = n;
            return false;
        }
    });
    return r;
};
