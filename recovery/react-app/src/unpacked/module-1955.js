import module812 from "unpacked/module-812.js";
import module141 from "unpacked/module-141.js";
import module256 from "unpacked/module-256.js";
import module1248 from "unpacked/module-1248.js";
const module812_aTypedArray = module812.aTypedArray;
module812.exportTypedArrayMethod("subarray", function(e, t) {
    const n = module812_aTypedArray(this);
    const n_length = n.length;
    const u = module256(e, n_length);
    return new (module1248(n))(n.buffer, n.byteOffset + u * n.BYTES_PER_ELEMENT, module141((t === undefined ? n_length : module256(t, n_length)) - u));
});
