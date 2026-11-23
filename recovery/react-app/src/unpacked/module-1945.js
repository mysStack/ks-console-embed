import module812 from "unpacked/module-812.js";
import module21 from "unpacked/module-21.js";
const { aTypedArray, exportTypedArrayMethod } = module812;
const l = module21([].join);
exportTypedArrayMethod("join", function(e) {
    return l(aTypedArray(this), e);
});
