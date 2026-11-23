import module812 from "./module-812.js";
import module112 from "./module-112.js";
import module1248 from "./module-1248.js";
const module112_map = module112.map;
const module812_aTypedArray = module812.aTypedArray;
module812.exportTypedArrayMethod("map", function(e, _param_1) {
    return module112_map(module812_aTypedArray(this), e, _param_1, function(e, t) {
        return new (module1248(e))(t);
    });
});
