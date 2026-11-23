import module1747 from "unpacked/module-1747.js";
import module3421 from "unpacked/module-3421.js";
import module1018 from "unpacked/module-1018.js";
export default function(t, l, u) {
    const n = new Error(t);
    if (!module1018(u)) {
        if (module3421(l)) {
            u = l;
            l = null;
        }
    }
    if (module1018(u)) {
        module1747(n, u);
    }
    if (module1018(l)) {
        n.code = l;
    }
    if (Error.captureStackTrace) {
        Error.captureStackTrace(n, module.exports);
    }
    return n;
};
