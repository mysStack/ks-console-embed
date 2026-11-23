import module812 from "unpacked/module-812.js";
import module145 from "unpacked/module-145.js";
import module1611 from "unpacked/module-1611.js";
const module812_aTypedArray = module812.aTypedArray;
module812.exportTypedArrayMethod("lastIndexOf", function(e) {
    const arguments_length = arguments.length;
    return module145(module1611, module812_aTypedArray(this), arguments_length > 1 ? [
        e,
        arguments[1]
    ] : [
        e
    ]);
});
