import { a } from "unpacked/module-1468.js";
class o {
    constructor(e){
        let t = -1;
        const n = e == null ? 0 : e.length;
        for(this.__data__ = new a; ++t < n;){
            this.add(e[t]);
        }
    }
    has(e) {
        return this.__data__.has(e);
    }
}
o.prototype.add = o.prototype.push = function(e) {
    this.__data__.set(e, "__lodash_hash_undefined__");
    return this;
};
export { o as a };
