import module25 from "unpacked/module-25.js";
import module145 from "unpacked/module-145.js";
import module812 from "unpacked/module-812.js";
import module19 from "unpacked/module-19.js";
import module124 from "unpacked/module-124.js";
const module25_Int8Array = module25.Int8Array;
const { aTypedArray, exportTypedArrayMethod } = module812;
const toLocaleString = [].toLocaleString;
const d = !!module25_Int8Array && module19(function() {
    toLocaleString.call(new module25_Int8Array(1));
});
exportTypedArrayMethod("toLocaleString", function() {
    return module145(toLocaleString, d ? module124(aTypedArray(this)) : aTypedArray(this), module124(arguments));
}, module19(function() {
    return [
        1,
        2
    ].toLocaleString() !== new module25_Int8Array([
        1,
        2
    ]).toLocaleString();
}) || !module19(function() {
    module25_Int8Array.prototype.toLocaleString.call([
        1,
        2
    ]);
}));
