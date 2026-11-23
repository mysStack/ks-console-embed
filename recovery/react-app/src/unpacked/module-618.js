import module231 from "./module-231.js";
export default function(e, t) {
    const __data__ = this.__data__;
    this.size += this.has(e) ? 0 : 1;
    __data__[e] = module231 && t === undefined ? "__lodash_hash_undefined__" : t;
    return this;
};
