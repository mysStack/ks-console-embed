export const a = function(e, t) {
    for(var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r;){
        const a = e[n];
        if (t(a, n, e)) {
            i[o++] = a;
        }
    }
    return i;
};
