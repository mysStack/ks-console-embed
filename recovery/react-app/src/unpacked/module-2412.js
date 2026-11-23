export default function(e, t) {
    if (e == null) {
        return {};
    }
    let n;
    let r;
    const o = {};
    const i = Object.keys(e);
    for(r = 0; r < i.length; r++){
        n = i[r];
        if (!(t.indexOf(n) >= 0)) {
            o[n] = e[n];
        }
    }
    return o;
};
