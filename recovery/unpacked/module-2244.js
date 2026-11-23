export default function(e, t, n, r) {
    let o = -1;
    const i = e == null ? 0 : e.length;
    for(r && i && (n = e[++o]); ++o < i;){
        n = t(n, e[o], o, e);
    }
    return n;
};
