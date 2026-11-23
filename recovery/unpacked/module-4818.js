import module812 from "./module-812.js";
import module1962 from "./module-1962.js";
const module1962_findLast = module1962.findLast;
const module812_aTypedArray = module812.aTypedArray;
module812.exportTypedArrayMethod("findLast", function(e, _param_1) {
    return module1962_findLast(module812_aTypedArray(this), e, _param_1);
});
