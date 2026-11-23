import module812 from "./module-812.js";
import module112 from "./module-112.js";
import module4810 from "./module-4810.js";
const module112_filter = module112.filter;
const module812_aTypedArray = module812.aTypedArray;
module812.exportTypedArrayMethod("filter", function(e, _param_1) {
    const t = module112_filter(module812_aTypedArray(this), e, _param_1);
    return module4810(this, t);
});
