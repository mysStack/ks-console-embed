import module964 from "unpacked/module-964.js";
import module1139 from "unpacked/module-1139.js";
import module1872 from "unpacked/module-1872.js";
import module1876 from "unpacked/module-1876.js";
import module1879 from "unpacked/module-1879.js";
const u = function(e, t, n) {
    let s;
    let c;
    let f;
    let d;
    const p = e & u.F;
    const h = e & u.G;
    const v = e & u.S;
    const g = e & u.P;
    const y = e & u.B;
    const m = h ? module964 : v ? module964[t] || (module964[t] = {}) : (module964[t] || {}).prototype;
    const b = h ? module1139 : module1139[t] || (module1139[t] = {});
    const x = b.prototype || (b.prototype = {});
    if (h) {
        n = t;
    }
    for(s in n){
        f = ((c = !p && m && m[s] !== undefined) ? m : n)[s];
        d = y && c ? module1879(f, module964) : g && typeof f === "function" ? module1879(Function.call, f) : f;
        if (m) {
            module1876(m, s, f, e & u.U);
        }
        if (b[s] != f) {
            module1872(b, s, d);
        }
        if (g && x[s] != f) {
            x[s] = f;
        }
    }
};
module964.core = module1139;
u.F = 1;
u.G = 2;
u.S = 4;
u.P = 8;
u.B = 16;
u.W = 32;
u.U = 64;
u.R = 128;
export default u;
