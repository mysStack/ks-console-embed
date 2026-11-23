import module812 from "unpacked/module-812.js";
import module1280 from "unpacked/module-1280.js";
import module1456 from "unpacked/module-1456.js";
import module202 from "unpacked/module-202.js";
import module39 from "unpacked/module-39.js";
import module21 from "unpacked/module-21.js";
import module19 from "unpacked/module-19.js";
const { aTypedArray, exportTypedArrayMethod } = module812;
const d = module21("".slice);
exportTypedArrayMethod("fill", function(e) {
    const arguments_length = arguments.length;
    aTypedArray(this);
    const n = d(module202(this), 0, 3) === "Big" ? module1456(e) : +e;
    return module39(module1280, this, n, arguments_length > 1 ? arguments[1] : undefined, arguments_length > 2 ? arguments[2] : undefined);
}, module19(function() {
    let e = 0;
    new Int8Array(2).fill({
        valueOf: function() {
            return e++;
        }
    });
    return e !== 1;
}));
