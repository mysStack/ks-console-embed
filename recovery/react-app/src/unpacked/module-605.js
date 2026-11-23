import module229 from "./module-229.js";
import module294 from "./module-294.js";
import module295 from "./module-295.js";
export default function(e, t) {
    let __data__ = this.__data__;
    if (__data__ instanceof module229) {
        const i = __data__.__data__;
        if (!module294 || i.length < 199) {
            i.push([
                e,
                t
            ]);
            this.size = ++__data__.size;
            return this;
        }
        __data__ = this.__data__ = new module295(i);
    }
    __data__.set(e, t);
    this.size = __data__.size;
    return this;
};
