import module812 from "unpacked/module-812.js";
import module99 from "unpacked/module-99.js";
import module111 from "unpacked/module-111.js";
const module812_aTypedArray = module812.aTypedArray;
module812.exportTypedArrayMethod("at", function(e) {
    const t = module812_aTypedArray(this);
    const n = module99(t);
    const r = module111(e);
    const l = r >= 0 ? r : n + r;
    if (l < 0 || l >= n) {
        return undefined;
    }
    return t[l];
});
