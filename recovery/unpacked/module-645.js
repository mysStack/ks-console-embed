import module228 from "./module-228.js";
import module357 from "./module-357.js";
export default function(e, t, n, a) {
    let n_length = n.length;
    const l = n_length;
    const s = !a;
    if (e == null) {
        return !l;
    }
    for(e = Object(e); n_length--;){
        var u = n[n_length];
        if (s && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) {
            return false;
        }
    }
    while(++n_length < l){
        const c = (u = n[n_length])[0];
        const f = e[c];
        const d = u[1];
        if (s && u[2]) {
            if (f === undefined && !(c in e)) {
                return false;
            }
        } else {
            const p = new module228;
            if (a) var h = a(f, d, c, e, t, p);
            if (!(h === undefined ? module357(d, f, 3, a, p) : h)) {
                return false;
            }
        }
    }
    return true;
};
