import module812 from "unpacked/module-812.js";
import module21 from "unpacked/module-21.js";
import module89 from "unpacked/module-89.js";
import module1457 from "unpacked/module-1457.js";
const { aTypedArray, getTypedArrayConstructor, exportTypedArrayMethod } = module812;
const c = module21(module812.TypedArrayPrototype.sort);
exportTypedArrayMethod("toSorted", function(e) {
    if (e !== undefined) {
        module89(e);
    }
    const t = aTypedArray(this);
    const n = module1457(getTypedArrayConstructor(t), t);
    return c(n, e);
});
