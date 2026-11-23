export default function(e, t) {
    for(var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r;){
        o[n] = t(e[n], n, e);
    }
    return o;
};
