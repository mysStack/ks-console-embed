import module812 from "./module-812.js";
import module112 from "./module-112.js";
const module112_find = module112.find;
const module812_aTypedArray = module812.aTypedArray;
module812.exportTypedArrayMethod("find", function(e, _param_1) {
    return module112_find(module812_aTypedArray(this), e, _param_1);
});
