export default function(e, t) {
    for(var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r;){
        const i = e[n];
        if (t(i, n, e)) {
            a[o++] = i;
        }
    }
    return a;
};
