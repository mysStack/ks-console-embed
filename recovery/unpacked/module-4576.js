export default function(e, t, n) {
    for(var r = -1, o = e.length, i = t.length, a = {}; ++r < o;){
        const l = r < i ? t[r] : undefined;
        n(a, e[r], l);
    }
    return a;
};
