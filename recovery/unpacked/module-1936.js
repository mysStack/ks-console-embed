import module812 from "./module-812.js";
import module112 from "./module-112.js";
const module112_every = module112.every;
const module812_aTypedArray = module812.aTypedArray;
module812.exportTypedArrayMethod("every", function(e, _param_1) {
    return module112_every(module812_aTypedArray(this), e, _param_1);
});
