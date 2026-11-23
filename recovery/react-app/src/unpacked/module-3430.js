import module3431 from "unpacked/module-3431.js";
import module1018 from "unpacked/module-1018.js";
import module986 from "unpacked/module-986.js";
let r;
const slice = Array.prototype.slice;
r = function(e) {
    return this.map((t, n)=>{
        if (t) {
            return t(e[n]);
        }
        return e[n];
    }).concat(slice.call(e, this.length));
};
export default function(e) {
    (e = module3431(e)).forEach((e)=>{
        if (module1018(e)) {
            module986(e);
        }
    });
    return r.bind(e);
};
