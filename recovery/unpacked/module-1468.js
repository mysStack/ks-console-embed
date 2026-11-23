import { a as a_1 } from "./module-1028.js";
import { a as a_2 } from "./module-1261.js";
import { a as a_3 } from "./module-1341.js";
const o = a_1(Object, "create");
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwnProperty_1 = Object.prototype.hasOwnProperty;
class l {
    constructor(e){
        let t = -1;
        const n = e == null ? 0 : e.length;
        for(this.clear(); ++t < n;){
            const r = e[t];
            this.set(r[0], r[1]);
        }
    }
    clear() {
        this.__data__ = o ? o(null) : {};
        this.size = 0;
    }
    delete(e) {
        const t = this.has(e) && delete this.__data__[e];
        this.size -= t ? 1 : 0;
        return t;
    }
    get(e) {
        const __data__ = this.__data__;
        if (o) {
            const n = __data__[e];
            if (n === "__lodash_hash_undefined__") {
                return undefined;
            }
            return n;
        }
        if (hasOwnProperty.call(__data__, e)) {
            return __data__[e];
        }
    }
    has(e) {
        const __data__ = this.__data__;
        if (o) {
            return __data__[e] !== undefined;
        }
        return hasOwnProperty_1.call(__data__, e);
    }
    set(e, t) {
        const __data__ = this.__data__;
        this.size += this.has(e) ? 0 : 1;
        __data__[e] = o && t === undefined ? "__lodash_hash_undefined__" : t;
        return this;
    }
}
const u = l;
const f = ({ __data__ }, t)=>{
    if (((e)=>{
        const t = typeof e;
        if (t == "string" || t == "number" || t == "symbol" || t == "boolean") {
            return e !== "__proto__";
        }
        return e === null;
    })(t)) {
        return __data__[typeof t === "string" ? "string" : "hash"];
    }
    return __data__.map;
};
export class a {
    constructor(e){
        let t = -1;
        const n = e == null ? 0 : e.length;
        for(this.clear(); ++t < n;){
            const r = e[t];
            this.set(r[0], r[1]);
        }
    }
    clear() {
        this.size = 0;
        this.__data__ = {
            hash: new u,
            map: new (a_3 || a_2),
            string: new u
        };
    }
    delete(e) {
        const t = f(this, e).delete(e);
        this.size -= t ? 1 : 0;
        return t;
    }
    get(e) {
        return f(this, e).get(e);
    }
    has(e) {
        return f(this, e).has(e);
    }
    set(e, t) {
        const n = f(this, e);
        const n_size = n.size;
        n.set(e, t);
        this.size += n.size == n_size ? 0 : 1;
        return this;
    }
}
