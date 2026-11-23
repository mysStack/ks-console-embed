import module21 from "./module-21.js";
import module812 from "./module-812.js";
import module_4809 from "./module-4809.js";
const i = module21(module_4809);
const module812_aTypedArray = module812.aTypedArray;
module812.exportTypedArrayMethod("copyWithin", function(e, t, _param_2) {
    return i(module812_aTypedArray(this), e, t, _param_2);
});
