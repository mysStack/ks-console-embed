export default function(e, t) {
    for(let n = -1, r = t.length, o = e.length; ++n < r;){
        e[o + n] = t[n];
    }
    return e;
};
