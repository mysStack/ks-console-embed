import module25 from "unpacked/module-25.js";
import module209 from "unpacked/module-209.js";
import module19 from "unpacked/module-19.js";
import module89 from "unpacked/module-89.js";
import module488 from "unpacked/module-488.js";
import module812 from "unpacked/module-812.js";
import module504 from "unpacked/module-504.js";
import module505 from "unpacked/module-505.js";
import module146 from "unpacked/module-146.js";
import module506 from "unpacked/module-506.js";
const { aTypedArray, exportTypedArrayMethod } = module812;
const module25_Uint16Array = module25.Uint16Array;
const g = module25_Uint16Array && module209(module25_Uint16Array.prototype.sort);
const y = !(!g || module19(function() {
    g(new module25_Uint16Array(2), null);
}) && module19(function() {
    g(new module25_Uint16Array(2), {});
}));
const m = !!g && !module19(function() {
    if (module146) {
        return module146 < 74;
    }
    if (module504) {
        return module504 < 67;
    }
    if (module505) {
        return true;
    }
    if (module506) {
        return module506 < 602;
    }
    let e;
    let t;
    const n = new module25_Uint16Array(516);
    const r = Array(516);
    for(e = 0; e < 516; e++){
        t = e % 4;
        n[e] = 515 - e;
        r[e] = e - 2 * t + 3;
    }
    g(n, function(e, t) {
        return (e / 4 | 0) - (t / 4 | 0);
    });
    for(e = 0; e < 516; e++){
        if (n[e] !== r[e]) {
            return true;
        }
    }
});
exportTypedArrayMethod("sort", function(e) {
    if (e !== undefined) {
        module89(e);
    }
    if (m) {
        return g(this, e);
    }
    return module488(aTypedArray(this), ((e)=>function(t, n) {
            if (e !== undefined) {
                return +e(t, n) || 0;
            }
            if (n != n) {
                return -1;
            }
            if (t != t) {
                return 1;
            }
            if (t === 0 && n === 0) {
                if (1 / t > 0 && 1 / n < 0) {
                    return 1;
                }
                return -1;
            }
            return t > n;
        })(e));
}, !m || y);
