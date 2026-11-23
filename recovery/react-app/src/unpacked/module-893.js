import { a as a_1 } from "unpacked/module-1140.js";
import { a as a_2 } from "unpacked/module-1441.js";
import { a as a_3 } from "unpacked/module-1142.js";
import { a as a_4, c } from "unpacked/module-1259.js";
import { a as a_5 } from "unpacked/module-1440.js";
export { a as creator } from "unpacked/module-1140.js";
export { a as matcher } from "unpacked/module-1437.js";
export { a as mouse } from "unpacked/module-1890.js";
export { a as namespace } from "unpacked/module-1241.js";
export { a as namespaces } from "unpacked/module-1242.js";
export { a as clientPoint } from "unpacked/module-1142.js";
export { a as select } from "unpacked/module-1441.js";
export { b as selection } from "unpacked/module-1259.js";
export { a as selector } from "unpacked/module-1243.js";
export { a as selectorAll } from "unpacked/module-1438.js";
export { b as style } from "unpacked/module-1439.js";
export { a as touch } from "unpacked/module-1891.js";
export { a as window } from "unpacked/module-1244.js";
export { c as event } from "unpacked/module-1141.js";
export { a as customEvent } from "unpacked/module-1141.js";
export const create = function(e) {
    return a_2(a_1(e).call(document.documentElement));
};
let a = 0;
export function local() {
    return new constructor;
}
function constructor() {
    this._ = `@${(++a).toString(36)}`;
}
constructor.prototype = local.prototype = {
    constructor,
    get: function(e) {
        for(var t = this._; !(t in e);){
            if (!(e = e.parentNode)) {
                return;
            }
        }
        return e[t];
    },
    set: function(e, t) {
        return e[this._] = t;
    },
    remove: function(e) {
        return this._ in e && delete e[this._];
    },
    toString: function() {
        return this._;
    }
};
export const selectAll = function(e) {
    if (typeof e === "string") {
        return new a_4([
            document.querySelectorAll(e)
        ], [
            document.documentElement
        ]);
    }
    return new a_4([
        e ?? []
    ], c);
};
export const touches = function(e, t) {
    if (t == null) {
        t = a_5().touches;
    }
    for(var n = 0, r = t ? t.length : 0, o = new Array(r); n < r; ++n){
        o[n] = a_3(e, t[n]);
    }
    return o;
};
