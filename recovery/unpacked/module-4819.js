import module812 from "./module-812.js";
import module1962 from "./module-1962.js";
const module1962_findLastIndex = module1962.findLastIndex;
const module812_aTypedArray = module812.aTypedArray;
module812.exportTypedArrayMethod("findLastIndex", function(e, _param_1) {
    return module1962_findLastIndex(module812_aTypedArray(this), e, _param_1);
});
