import { a as a_1 } from "unpacked/module-894.js";
import { a as a_2 } from "unpacked/module-841.js";
export const a = function(e) {
    if (!a_2(e)) {
        return false;
    }
    const t = a_1(e);
    return t == "[object Function]" || t == "[object GeneratorFunction]" || t == "[object AsyncFunction]" || t == "[object Proxy]";
};
