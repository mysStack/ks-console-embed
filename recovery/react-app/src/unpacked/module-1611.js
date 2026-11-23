import module145 from "unpacked/module-145.js";
import module90 from "unpacked/module-90.js";
import module111 from "unpacked/module-111.js";
import module99 from "unpacked/module-99.js";
import module128 from "unpacked/module-128.js";
const lastIndexOf = [].lastIndexOf;
const c = !!lastIndexOf && 1 / [
    1
].lastIndexOf(1, -0) < 0;
const f = module128("lastIndexOf");
const d = c || !f;
export default d ? function(e) {
    if (c) {
        return module145(lastIndexOf, this, arguments) || 0;
    }
    const t = module90(this);
    const n = module99(t);
    if (n === 0) {
        return -1;
    }
    let l = n - 1;
    if (arguments.length > 1) {
        l = Math.min(l, module111(arguments[1]));
    }
    if (l < 0) {
        l = n + l;
    }
    for(; l >= 0; l--){
        if (l in t && t[l] === e) {
            return l || 0;
        }
    }
    return -1;
} : lastIndexOf;
