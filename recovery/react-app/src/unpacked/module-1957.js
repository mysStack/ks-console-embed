import module812 from "unpacked/module-812.js";
import module19 from "unpacked/module-19.js";
import module25 from "unpacked/module-25.js";
import module21 from "unpacked/module-21.js";
const module812_exportTypedArrayMethod = module812.exportTypedArrayMethod;
const module25_Uint8Array = module25.Uint8Array;
const u = module25_Uint8Array && module25_Uint8Array.prototype || {};
let toString = [].toString;
const c = module21([].join);
if (module19(function() {
    toString.call({});
})) {
    toString = function() {
        return c(this);
    };
}
const f = u.toString !== toString;
module812_exportTypedArrayMethod("toString", toString, f);
