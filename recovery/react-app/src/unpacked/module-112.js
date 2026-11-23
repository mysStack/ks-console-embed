import module142 from "unpacked/module-142.js";
import module21 from "unpacked/module-21.js";
import module165 from "unpacked/module-165.js";
import module77 from "unpacked/module-77.js";
import module99 from "unpacked/module-99.js";
import module259 from "unpacked/module-259.js";
const u = module21([].push);
const c = (e)=>{
    const t = e === 1;
    const n = e === 2;
    const o = e === 3;
    const c = e === 4;
    const f = e === 6;
    const d = e === 7;
    const p = e === 5 || f;
    return function(h, v, m, g) {
        let y;
        let b;
        const C = module77(h);
        const w = module165(C);
        for(var _ = module99(w), x = module142(v, m), M = 0, E = g || module259, k = t ? E(h, _) : n || d ? E(h, 0) : undefined; _ > M; M++){
            if ((p || M in w) && (b = x(y = w[M], M, C), e)) {
                if (t) {
                    k[M] = b;
                } else if (b) {
                    switch(e){
                        case 3:
                            return true;
                        case 5:
                            return y;
                        case 6:
                            return M;
                        case 2:
                            u(k, y);
                    }
                } else {
                    switch(e){
                        case 4:
                            return false;
                        case 7:
                            u(k, y);
                    }
                }
            }
        }
        if (f) {
            return -1;
        }
        if (o || c) {
            return c;
        }
        return k;
    };
};
export default {
    forEach: c(0),
    map: c(1),
    filter: c(2),
    some: c(3),
    every: c(4),
    find: c(5),
    findIndex: c(6),
    filterReject: c(7)
};
