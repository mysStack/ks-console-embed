import module713 from "./module-713.js";
import module714 from "./module-714.js";
import module119 from "./module-119.js";
import module60 from "./module-60.js";
export default function(e, t) {
    return function(n, l) {
        const s = module60(n) ? module713 : module714;
        const u = t ? t() : {};
        return s(n, e, module119(l, 2), u);
    };
};
