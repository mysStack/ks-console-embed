export default function(e, t, r, o) {
    let i = -1;
    const e_length = e.length;
    const r_length = r.length;
    for(var u = -1, s = t.length, c = Math.max(e_length - r_length, 0), f = Array(s + c), d = !o; ++u < s;){
        f[u] = t[u];
    }
    while(++i < r_length){
        if (d || i < e_length) {
            f[r[i]] = e[i];
        }
    }
    while(c--){
        f[u++] = e[i++];
    }
    return f;
};
