import module116 from "./module-116.js";
import module76 from "./module-76.js";
export default function(e) {
    if (!module76(e)) {
        return false;
    }
    const t = module116(e);
    return t == "[object Function]" || t == "[object GeneratorFunction]" || t == "[object AsyncFunction]" || t == "[object Proxy]";
};
