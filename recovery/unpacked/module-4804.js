import module8 from "./module-8.js";
import module25 from "./module-25.js";
import module39 from "./module-39.js";
import module33 from "./module-33.js";
import module4805 from "./module-4805.js";
import module812 from "./module-812.js";
import module1453 from "./module-1453.js";
import module254 from "./module-254.js";
import module143 from "./module-143.js";
import module102 from "./module-102.js";
import module1526 from "./module-1526.js";
import module141 from "./module-141.js";
import module1455 from "./module-1455.js";
import module1933 from "./module-1933.js";
import module4807 from "./module-4807.js";
import module266 from "./module-266.js";
import module53 from "./module-53.js";
import module202 from "./module-202.js";
import module54 from "./module-54.js";
import module166 from "./module-166.js";
import module114 from "./module-114.js";
import module107 from "./module-107.js";
import module204 from "./module-204.js";
import { f as f_1 } from "./module-150.js";
import module4808 from "./module-4808.js";
import module112 from "./module-112.js";
import module269 from "./module-269.js";
import module113 from "./module-113.js";
import module70 from "./module-70.js";
import module115 from "./module-115.js";
import module1457 from "./module-1457.js";
import module101 from "./module-101.js";
import module206 from "./module-206.js";
const module112_forEach = module112.forEach;
const { get, set, enforce } = module101;
const H = module70.f;
const B = module115.f;
const module25_RangeError = module25.RangeError;
const module1453_ArrayBuffer = module1453.ArrayBuffer;
const V_prototype = module1453_ArrayBuffer.prototype;
const module1453_DataView = module1453.DataView;
const { NATIVE_ARRAY_BUFFER_VIEWS, TYPED_ARRAY_TAG, TypedArray, TypedArrayPrototype, isTypedArray } = module812;
const Y = (TypedArrayPrototype, t)=>{
    module113(TypedArrayPrototype, t, {
        configurable: true,
        get: function() {
            return get(this)[t];
        }
    });
};
const X = (e)=>{
    let t;
    return module107(V_prototype, e) || (t = module202(e)) === "ArrayBuffer" || t === "SharedArrayBuffer";
};
const J = (e, t)=>isTypedArray(e) && !module166(t) && t in e && module1526(+t) && t >= 0;
const getOwnPropertyDescriptor = function(e, t) {
    t = module266(t);
    if (J(e, t)) {
        return module143(2, e[t]);
    }
    return B(e, t);
};
const defineProperty = function(e, t, n) {
    t = module266(t);
    if (!(J(e, t) && module54(n) && module53(n, "value")) || module53(n, "get") || module53(n, "set") || n.configurable || module53(n, "writable") && !n.writable || module53(n, "enumerable") && !n.enumerable) {
        return H(e, t, n);
    }
    e[t] = n.value;
    return e;
};
if (module33) {
    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
        module115.f = getOwnPropertyDescriptor;
        module70.f = defineProperty;
        Y(TypedArrayPrototype, "buffer");
        Y(TypedArrayPrototype, "byteOffset");
        Y(TypedArrayPrototype, "byteLength");
        Y(TypedArrayPrototype, "length");
    }
    module8({
        target: "Object",
        stat: true,
        forced: !NATIVE_ARRAY_BUFFER_VIEWS
    }, {
        getOwnPropertyDescriptor,
        defineProperty
    });
    module.exports = function(e, t, n) {
        const a = e.match(/\d+/)[0] / 8;
        const u = `${e + (n ? "Clamped" : "")}Array`;
        const s = `get${e}`;
        const f = `set${e}`;
        const p = module25[u];
        let m = p;
        let b = m && m.prototype;
        const x = {};
        const _ = (e, t)=>{
            H(e, t, {
                get: function() {
                    return ((e, t)=>{
                        const n = get(e);
                        return n.view[s](t * a + n.byteOffset, true);
                    })(this, t);
                },
                set: function(e) {
                    return ((e, t, r)=>{
                        const o = get(e);
                        o.view[f](t * a + o.byteOffset, n ? module4807(r) : r, true);
                    })(this, t, e);
                },
                enumerable: true
            });
        };
        if (NATIVE_ARRAY_BUFFER_VIEWS) {
            if (module4805) {
                m = t(function(e, t, n, r) {
                    module254(e, b);
                    return module206(module54(t) ? X(t) ? r !== undefined ? new p(t, module1933(n, a), r) : n !== undefined ? new p(t, module1933(n, a)) : new p(t) : isTypedArray(t) ? module1457(m, t) : module39(module4808, m, t) : new p(module1455(t)), e, m);
                });
                if (module204) {
                    module204(m, TypedArray);
                }
                module112_forEach(f_1(p), function(e) {
                    if (!(e in m)) {
                        module102(m, e, p[e]);
                    }
                });
                m.prototype = b;
            }
        } else {
            m = t(function(e, t, n, r) {
                module254(e, b);
                let buffer;
                let byteLength;
                let length;
                let s = 0;
                let byteOffset = 0;
                if (module54(t)) {
                    if (!X(t)) {
                        if (isTypedArray(t)) {
                            return module1457(m, t);
                        }
                        return module39(module4808, m, t);
                    }
                    buffer = t;
                    byteOffset = module1933(n, a);
                    const d = t.byteLength;
                    if (r === undefined) {
                        if (d % a) {
                            throw new module25_RangeError("Wrong length");
                        }
                        if ((byteLength = d - byteOffset) < 0) {
                            throw new module25_RangeError("Wrong length");
                        }
                    } else if ((byteLength = module141(r) * a) + byteOffset > d) {
                        throw new module25_RangeError("Wrong length");
                    }
                    length = byteLength / a;
                } else {
                    length = module1455(t);
                    buffer = new module1453_ArrayBuffer(byteLength = length * a);
                }
                set(e, {
                    buffer,
                    byteOffset,
                    byteLength,
                    length,
                    view: new module1453_DataView(buffer)
                });
                while(s < length){
                    _(e, s++);
                }
            });
            if (module204) {
                module204(m, TypedArray);
            }
            b = m.prototype = module114(TypedArrayPrototype);
        }
        if (b.constructor !== m) {
            module102(b, "constructor", m);
        }
        enforce(b).TypedArrayConstructor = m;
        if (TYPED_ARRAY_TAG) {
            module102(b, TYPED_ARRAY_TAG, u);
        }
        const forced = m !== p;
        x[u] = m;
        module8({
            global: true,
            constructor: true,
            forced,
            sham: !NATIVE_ARRAY_BUFFER_VIEWS
        }, x);
        if (!("BYTES_PER_ELEMENT" in m)) {
            module102(m, "BYTES_PER_ELEMENT", a);
        }
        if (!("BYTES_PER_ELEMENT" in b)) {
            module102(b, "BYTES_PER_ELEMENT", a);
        }
        module269(u);
    };
} else {
    module.exports = function() {};
}
