export function a(e, t) {
    if (e == null) {
        return {};
    }
    let n;
    let r;
    const o = {};
    const a = Object.keys(e);
    for(r = 0; r < a.length; r++){
        n = a[r];
        if (!(t.indexOf(n) >= 0)) {
            o[n] = e[n];
        }
    }
    return o;
}
