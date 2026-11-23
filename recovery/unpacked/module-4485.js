import module1425 from "./module-1425.js";
import module4486 from "./module-4486.js";
import module4487 from "./module-4487.js";
export default function(e) {
    return function(t, n, a) {
        let l;
        const u = module1425(t);
        const s = module4486(u.length);
        let c = module4487(a, s);
        if (e && n != n) {
            while(s > c){
                if ((l = u[c++]) != l) {
                    return true;
                }
            }
        } else {
            for(; s > c; c++){
                if ((e || c in u) && u[c] === n) {
                    return e || c || 0;
                }
            }
        }
        return !e && -1;
    };
};
