export default function(e, t, r, o) {
    for(var i = -1, a = e.length, l = -1, u = r.length, s = -1, c = t.length, f = Math.max(a - u, 0), d = Array(f + c), p = !o; ++i < f;){
        d[i] = e[i];
    }
    const h = i;
    while(++s < c){
        d[h + s] = t[s];
    }
    while(++l < u){
        if (p || i < a) {
            d[h + r[l]] = e[i++];
        }
    }
    return d;
};
