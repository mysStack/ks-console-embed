import module4824 from "unpacked/module-4824.js";
import module812 from "unpacked/module-812.js";
import module1934 from "unpacked/module-1934.js";
import module111 from "unpacked/module-111.js";
import module1456 from "unpacked/module-1456.js";
const { aTypedArray, getTypedArrayConstructor, exportTypedArrayMethod } = module812;
const f = !!(()=>{
    try {
        new Int8Array(1).with(2, {
            valueOf: function() {
                throw 8;
            }
        });
    } catch (error) {
        return error === 8;
    }
})();
exportTypedArrayMethod("with", {
    with: function(e, t) {
        const n = aTypedArray(this);
        const o = module111(e);
        const c = module1934(n) ? module1456(t) : +t;
        return module4824(n, getTypedArrayConstructor(n), o, c);
    }
}.with, !f);
