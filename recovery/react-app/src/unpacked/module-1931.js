import module8 from "unpacked/module-8.js";
import module209 from "unpacked/module-209.js";
import module19 from "unpacked/module-19.js";
import module1453 from "unpacked/module-1453.js";
import module50 from "unpacked/module-50.js";
import module256 from "unpacked/module-256.js";
import module141 from "unpacked/module-141.js";
import module261 from "unpacked/module-261.js";
const { ArrayBuffer, DataView } = module1453;
const DataView_prototype = DataView.prototype;
const h = module209(ArrayBuffer.prototype.slice);
const v = module209(DataView_prototype.getUint8);
const g = module209(DataView_prototype.setUint8);
module8({
    target: "ArrayBuffer",
    proto: true,
    unsafe: true,
    forced: module19(function() {
        return !new ArrayBuffer(2).slice(1, undefined).byteLength;
    })
}, {
    slice: function(e, t) {
        if (h && t === undefined) {
            return h(module50(this), e);
        }
        const byteLength = module50(this).byteLength;
        for(var r = module256(e, byteLength), o = module256(t === undefined ? byteLength : t, byteLength), i = new (module261(this, ArrayBuffer))(module141(o - r)), a = new DataView(this), p = new DataView(i), y = 0; r < o;){
            g(p, y++, v(a, r++));
        }
        return i;
    }
});
