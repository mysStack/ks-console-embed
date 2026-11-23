import module1967 from "unpacked/module-1967.js";
import module1968 from "unpacked/module-1968.js";
import module4851 from "unpacked/module-4851.js";
import module1249 from "unpacked/module-1249.js";
import module1969 from "unpacked/module-1969.js";
import module1460 from "unpacked/module-1460.js";
import module4860 from "unpacked/module-4860.js";
import module1250 from "unpacked/module-1250.js";
import module100 from "unpacked/module-100.js";
export default (function e(t, n, d, p, h, v, g, y, m, b) {
    const x = 128 & n;
    const w = 1 & n;
    const _ = 2 & n;
    const C = 24 & n;
    const O = 512 & n;
    const E = _ ? undefined : module1249(t);
    return function M() {
        let arguments_length = arguments.length;
        let A = Array(arguments_length);
        for(let k = arguments_length; k--;){
            A[k] = arguments[k];
        }
        if (C) {
            var j = module1460(M);
            var T = module4851(A, j);
        }
        if (p) {
            A = module1967(A, p, h, C);
        }
        if (v) {
            A = module1968(A, v, g, C);
        }
        arguments_length -= T;
        if (C && arguments_length < b) {
            const P = module1250(A, j);
            return module1969(t, n, e, M.placeholder, d, A, P, y, m, b - arguments_length);
        }
        const L = w ? d : this;
        let z = _ ? L[t] : t;
        arguments_length = A.length;
        if (y) {
            A = module4860(A, y);
        } else if (O && arguments_length > 1) {
            A.reverse();
        }
        if (x && m < arguments_length) {
            A.length = m;
        }
        if (this && this !== module100 && this instanceof M) {
            z = E || module1249(z);
        }
        return z.apply(L, A);
    };
});
