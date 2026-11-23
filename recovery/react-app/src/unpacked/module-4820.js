import module4821 from "unpacked/module-4821.js";
import module812 from "unpacked/module-812.js";
const { aTypedArray, exportTypedArrayMethod, getTypedArrayConstructor } = module812;
exportTypedArrayMethod("toReversed", function() {
    return module4821(aTypedArray(this), getTypedArrayConstructor(this));
});
