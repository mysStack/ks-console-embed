import module3450 from "unpacked/module-3450.js";
import module1019 from "unpacked/module-1019.js";
import module1066 from "unpacked/module-1066.js";
const indexOf = Array.prototype.indexOf;
const hasOwnProperty = Object.prototype.hasOwnProperty;
export default function(e) {
    let t;
    let n;
    let c;
    let f;
    if (!module3450(e)) {
        return indexOf.apply(this, arguments);
    }
    n = module1019(module1066(this).length);
    c = arguments[1];
    for(t = c = isNaN(c) ? 0 : c >= 0 ? Math.floor(c) : module1019(this.length) - Math.floor(Math.abs(c)); t < n; ++t){
        if (hasOwnProperty.call(this, t) && (f = this[t], module3450(f))) {
            return t;
        }
    }
    return -1;
};
