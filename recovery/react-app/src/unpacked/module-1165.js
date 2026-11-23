import module274 from "./module-274.js";
import module330 from "./module-330.js";
import module337 from "./module-337.js";
import module60 from "./module-60.js";
export default function() {
    const arguments_length = arguments.length;
    if (!arguments_length) {
        return [];
    }
    const t = Array(arguments_length - 1);
    const n = arguments[0];
    for(let l = arguments_length; l--;){
        t[l - 1] = arguments[l];
    }
    return module274(module60(n) ? module337(n) : [
        n
    ], module330(t, 1));
};
