import module612 from "./module-612.js";
import module619 from "./module-619.js";
import module621 from "./module-621.js";
import module622 from "./module-622.js";
import module623 from "./module-623.js";
function s(e) {
    let t = -1;
    const n = e == null ? 0 : e.length;
    for(this.clear(); ++t < n;){
        const r = e[t];
        this.set(r[0], r[1]);
    }
}
s.prototype.clear = module612;
s.prototype.delete = module619;
s.prototype.get = module621;
s.prototype.has = module622;
s.prototype.set = module623;
export default s;
