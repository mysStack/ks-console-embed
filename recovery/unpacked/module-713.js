export default function(e, t, n, r) {
    for(let o = -1, a = e == null ? 0 : e.length; ++o < a;){
        const i = e[o];
        t(r, i, n(i), e);
    }
    return r;
};
