import module25 from "./module-25.js";
import module39 from "./module-39.js";
import module812 from "./module-812.js";
import module99 from "./module-99.js";
import module1933 from "./module-1933.js";
import module77 from "./module-77.js";
import module19 from "./module-19.js";
const { RangeError, Int8Array } = module25;
const d = Int8Array && Int8Array.prototype;
const p = d && d.set;
const { aTypedArray, exportTypedArrayMethod } = module812;
const g = !module19(function() {
    const e = new Uint8ClampedArray(2);
    module39(p, e, {
        length: 1,
        0: 3
    }, 1);
    return e[1] !== 3;
});
const y = g && module812.NATIVE_ARRAY_BUFFER_VIEWS && module19(function() {
    const e = new Int8Array(2);
    e.set(1);
    e.set("2", 1);
    return e[0] !== 0 || e[1] !== 2;
});
exportTypedArrayMethod("set", function(e, _param_1) {
    aTypedArray(this);
    const t = module1933(_param_1, 1);
    const n = module77(e);
    if (g) {
        return module39(p, this, n, t);
    }
    const length = this.length;
    const i = module99(n);
    let s = 0;
    if (i + t > length) {
        throw new RangeError("Wrong length");
    }
    while(s < i){
        this[t + s] = n[s++];
    }
}, !g || y);
