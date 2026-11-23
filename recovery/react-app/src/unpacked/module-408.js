import module155 from "./module-155.js";
import module180 from "./module-180.js";
import module60 from "./module-60.js";
import module211 from "./module-211.js";
import module297 from "./module-297.js";
import module156 from "./module-156.js";
export default function(e, t, n) {
    for(var u = -1, c = (t = module155(t, e)).length, f = false; ++u < c;){
        var d = module156(t[u]);
        if (!(f = e != null && n(e, d))) {
            break;
        }
        e = e[d];
    }
    if (f || ++u != c) {
        return f;
    }
    return !!(c = e == null ? 0 : e.length) && module297(c) && module211(d, c) && (module60(e) || module180(e));
};
