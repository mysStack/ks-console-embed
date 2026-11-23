import module812 from "./module-812.js";
import module1248 from "./module-1248.js";
import module19 from "./module-19.js";
import module124 from "./module-124.js";
const module812_aTypedArray = module812.aTypedArray;
module812.exportTypedArrayMethod("slice", function(e, t) {
    const n = module124(module812_aTypedArray(this), e, t);
    const r = module1248(this);
    for(var i = 0, u = n.length, s = new r(u); u > i;){
        s[i] = n[i++];
    }
    return s;
}, module19(function() {
    new Int8Array(1).slice();
}));
