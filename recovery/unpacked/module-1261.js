import { a as a_1 } from "./module-897.js";
const o = (__data__, t)=>{
    for(let n = __data__.length; n--;){
        if (a_1(__data__[n][0], t)) {
            return n;
        }
    }
    return -1;
};
const splice = Array.prototype.splice;
class a {
    constructor(e){
        let t = -1;
        const n = e == null ? 0 : e.length;
        for(this.clear(); ++t < n;){
            const r = e[t];
            this.set(r[0], r[1]);
        }
    }
    clear() {
        this.__data__ = [];
        this.size = 0;
    }
    delete(e) {
        const __data__ = this.__data__;
        const n = o(__data__, e);
        return !(n < 0 || (n == __data__.length - 1 ? __data__.pop() : splice.call(__data__, n, 1), --this.size, 0));
    }
    get(e) {
        const __data__ = this.__data__;
        const n = o(__data__, e);
        if (n < 0) {
            return undefined;
        }
        return __data__[n][1];
    }
    has(e) {
        return o(this.__data__, e) > -1;
    }
    set(e, t) {
        const __data__ = this.__data__;
        const r = o(__data__, e);
        if (r < 0) {
            ++this.size;
            __data__.push([
                e,
                t
            ]);
        } else {
            __data__[r][1] = t;
        }
        return this;
    }
}
export { a };
