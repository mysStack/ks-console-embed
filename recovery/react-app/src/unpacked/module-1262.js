import { a as a_1 } from "unpacked/module-1261.js";
import { a as a_2 } from "unpacked/module-1341.js";
import { a as a_3 } from "unpacked/module-1468.js";
class a {
    constructor(e){
        const t = this.__data__ = new a_1(e);
        this.size = t.size;
    }
    clear() {
        this.__data__ = new a_1;
        this.size = 0;
    }
    delete(e) {
        const __data__ = this.__data__;
        const n = __data__.delete(e);
        this.size = __data__.size;
        return n;
    }
    get(e) {
        return this.__data__.get(e);
    }
    has(e) {
        return this.__data__.has(e);
    }
    set(e, t) {
        let __data__ = this.__data__;
        if (__data__ instanceof a_1) {
            const a = __data__.__data__;
            if (!a_2 || a.length < 199) {
                a.push([
                    e,
                    t
                ]);
                this.size = ++__data__.size;
                return this;
            }
            __data__ = this.__data__ = new a_3(a);
        }
        __data__.set(e, t);
        this.size = __data__.size;
        return this;
    }
}
export { a };
