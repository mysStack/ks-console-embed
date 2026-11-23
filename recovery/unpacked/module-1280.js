import module77 from "./module-77.js";
import module256 from "./module-256.js";
import module99 from "./module-99.js";
export default function(e) {
    const t = module77(this);
    const n = module99(t);
    const arguments_length = arguments.length;
    for(let l = module256(arguments_length > 1 ? arguments[1] : undefined, n), u = arguments_length > 2 ? arguments[2] : undefined, s = u === undefined ? n : module256(u, n); s > l;){
        t[l++] = e;
    }
    return t;
};
