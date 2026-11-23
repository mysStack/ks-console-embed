import module490 from "unpacked/module-490.js";
import module1249 from "unpacked/module-1249.js";
import module100 from "unpacked/module-100.js";
export default function(e, t, n, a) {
    const l = 1 & t;
    const u = module1249(e);
    return function t() {
        let o = -1;
        let arguments_length = arguments.length;
        for(var c = -1, f = a.length, d = Array(f + arguments_length), p = this && this !== module100 && this instanceof t ? u : e; ++c < f;){
            d[c] = a[c];
        }
        while(arguments_length--){
            d[c++] = arguments[++o];
        }
        return module490(p, l ? n : this, d);
    };
};
