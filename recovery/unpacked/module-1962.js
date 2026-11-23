import module142 from "./module-142.js";
import module165 from "./module-165.js";
import module77 from "./module-77.js";
import module99 from "./module-99.js";
const l = (e)=>{
    const t = e === 1;
    return function(n, l, u) {
        let s;
        const c = module77(n);
        const f = module165(c);
        for(let d = module99(f), p = module142(l, u); d-- > 0;){
            if (p(s = f[d], d, c)) {
                switch(e){
                    case 0:
                        return s;
                    case 1:
                        return d;
                }
            }
        }
        if (t) {
            return -1;
        }
    };
};
export default {
    findLast: l(0),
    findLastIndex: l(1)
};
