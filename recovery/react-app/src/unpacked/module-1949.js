import module812 from "unpacked/module-812.js";
import module487 from "unpacked/module-487.js";
const module487_right = module487.right;
const module812_aTypedArray = module812.aTypedArray;
module812.exportTypedArrayMethod("reduceRight", function(e) {
    const arguments_length = arguments.length;
    return module487_right(module812_aTypedArray(this), e, arguments_length, arguments_length > 1 ? arguments[1] : undefined);
});
