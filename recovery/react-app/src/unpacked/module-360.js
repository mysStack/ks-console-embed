import module228 from "./module-228.js";
import module479 from "./module-479.js";
import module265 from "./module-265.js";
import module691 from "./module-691.js";
import module692 from "./module-692.js";
import module395 from "./module-395.js";
import module337 from "./module-337.js";
import module693 from "./module-693.js";
import module694 from "./module-694.js";
import module411 from "./module-411.js";
import module302 from "./module-302.js";
import module164 from "./module-164.js";
import module695 from "./module-695.js";
import module696 from "./module-696.js";
import module398 from "./module-398.js";
import module60 from "./module-60.js";
import module170 from "./module-170.js";
import module700 from "./module-700.js";
import module76 from "./module-76.js";
import module702 from "./module-702.js";
import module122 from "./module-122.js";
import module161 from "./module-161.js";
const E = {};
E["[object Arguments]"] = E["[object Array]"] = E["[object ArrayBuffer]"] = E["[object DataView]"] = E["[object Boolean]"] = E["[object Date]"] = E["[object Float32Array]"] = E["[object Float64Array]"] = E["[object Int8Array]"] = E["[object Int16Array]"] = E["[object Int32Array]"] = E["[object Map]"] = E["[object Number]"] = E["[object Object]"] = E["[object RegExp]"] = E["[object Set]"] = E["[object String]"] = E["[object Symbol]"] = E["[object Uint8Array]"] = E["[object Uint8ClampedArray]"] = E["[object Uint16Array]"] = E["[object Uint32Array]"] = true;
E["[object Error]"] = E["[object Function]"] = E["[object WeakMap]"] = false;
export default (function e(t, n, k, O, S, L) {
    let z;
    const D = 1 & n;
    const T = 2 & n;
    const V = 4 & n;
    if (k) {
        z = S ? k(t, O, S, L) : k(t);
    }
    if (z !== undefined) {
        return z;
    }
    if (!module76(t)) {
        return t;
    }
    const H = module60(t);
    if (H) {
        z = module695(t);
        if (!D) {
            return module337(t, z);
        }
    } else {
        const P = module164(t);
        const A = P == "[object Function]" || P == "[object GeneratorFunction]";
        if (module170(t)) {
            return module395(t, D);
        }
        if (P == "[object Object]" || P == "[object Arguments]" || A && !S) {
            z = T || A ? {} : module398(t);
            if (!D) {
                if (T) {
                    return module694(t, module692(z, t));
                }
                return module693(t, module691(z, t));
            }
        } else {
            if (!E[P]) {
                if (S) {
                    return t;
                }
                return {};
            }
            z = module696(t, P, D);
        }
    }
    if (!L) {
        L = new module228;
    }
    const R = L.get(t);
    if (R) {
        return R;
    }
    L.set(t, z);
    if (module702(t)) {
        t.forEach((r)=>{
            z.add(e(r, n, k, r, t, L));
        });
    } else if (module700(t)) {
        t.forEach((r, o)=>{
            z.set(o, e(r, n, k, o, t, L));
        });
    }
    const j = H ? undefined : (V ? T ? module302 : module411 : T ? module161 : module122)(t);
    module479(j || t, function(r, o) {
        if (j) {
            r = t[o = r];
        }
        module265(z, o, e(r, n, k, o, t, L));
    });
    return z;
});
