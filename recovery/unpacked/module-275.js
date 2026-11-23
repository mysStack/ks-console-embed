import module295 from "./module-295.js";
import module647 from "./module-647.js";
import module648 from "./module-648.js";
function i(e) {
    let t = -1;
    const n = e == null ? 0 : e.length;
    for(this.__data__ = new module295; ++t < n;){
        this.add(e[t]);
    }
}
i.prototype.add = i.prototype.push = module647;
i.prototype.has = module648;
export default i;
