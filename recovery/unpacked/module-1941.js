import module812 from "./module-812.js";
import module112 from "./module-112.js";
const module112_forEach = module112.forEach;
const module812_aTypedArray = module812.aTypedArray;
module812.exportTypedArrayMethod("forEach", function(e, _param_1) {
    module112_forEach(module812_aTypedArray(this), e, _param_1);
});
