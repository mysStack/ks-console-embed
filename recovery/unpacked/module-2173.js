import module361 from "./module-361.js";
import module211 from "./module-211.js";
const splice = Array.prototype.splice;
export default function(e, t) {
    for(let n = e ? t.length : 0, a = n - 1; n--;){
        const l = t[n];
        if (n == a || l !== u) {
            var u = l;
            if (module211(l)) {
                splice.call(e, l, 1);
            } else {
                module361(e, l);
            }
        }
    }
    return e;
};
