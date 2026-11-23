import module1454 from "./module-1454.js";
import module33 from "./module-33.js";
import module25 from "./module-25.js";
import module35 from "./module-35.js";
import module54 from "./module-54.js";
import module53 from "./module-53.js";
import module202 from "./module-202.js";
import module149 from "./module-149.js";
import module102 from "./module-102.js";
import module67 from "./module-67.js";
import module113 from "./module-113.js";
import module107 from "./module-107.js";
import module260 from "./module-260.js";
import module204 from "./module-204.js";
import module40 from "./module-40.js";
import module212 from "./module-212.js";
import module101 from "./module-101.js";
let r;
let o;
let i;
const { enforce, get } = module101;
const module25_Int8Array = module25.Int8Array;
const M = module25_Int8Array && module25_Int8Array.prototype;
const module25_Uint8ClampedArray = module25.Uint8ClampedArray;
const A = module25_Uint8ClampedArray && module25_Uint8ClampedArray.prototype;
let TypedArray = module25_Int8Array && module260(module25_Int8Array);
let TypedArrayPrototype = M && module260(M);
const module25_TypeError = module25.TypeError;
const L = module40("toStringTag");
const z = module212("TYPED_ARRAY_TAG");
let NATIVE_ARRAY_BUFFER_VIEWS = module1454 && !!module204 && module202(module25.opera) !== "Opera";
let D = false;
const I = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
};
const R = {
    BigInt64Array: 8,
    BigUint64Array: 8
};
const getTypedArrayConstructor = function(e) {
    const t = module260(e);
    if (module54(t)) {
        const n = get(t);
        if (n && module53(n, "TypedArrayConstructor")) {
            return n.TypedArrayConstructor;
        }
        return getTypedArrayConstructor(t);
    }
};
const isTypedArray = function(e) {
    if (!module54(e)) {
        return false;
    }
    const t = module202(e);
    return module53(I, t) || module53(R, t);
};
for(r in I){
    if (i = (o = module25[r]) && o.prototype) {
        enforce(i).TypedArrayConstructor = o;
    } else {
        NATIVE_ARRAY_BUFFER_VIEWS = false;
    }
}
for(r in R){
    if (i = (o = module25[r]) && o.prototype) {
        enforce(i).TypedArrayConstructor = o;
    }
}
if ((!NATIVE_ARRAY_BUFFER_VIEWS || !module35(TypedArray) || TypedArray === Function.prototype) && (TypedArray = function() {
    throw new module25_TypeError("Incorrect invocation");
}, NATIVE_ARRAY_BUFFER_VIEWS)) {
    for(r in I){
        if (module25[r]) {
            module204(module25[r], TypedArray);
        }
    }
}
if ((!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === Object.prototype) && (TypedArrayPrototype = TypedArray.prototype, NATIVE_ARRAY_BUFFER_VIEWS)) {
    for(r in I){
        if (module25[r]) {
            module204(module25[r].prototype, TypedArrayPrototype);
        }
    }
}
if (NATIVE_ARRAY_BUFFER_VIEWS && module260(A) !== TypedArrayPrototype) {
    module204(A, TypedArrayPrototype);
}
if (module33 && !module53(TypedArrayPrototype, L)) {
    D = true;
    module113(TypedArrayPrototype, L, {
        configurable: true,
        get: function() {
            if (module54(this)) {
                return this[z];
            }
        }
    });
    for(r in I){
        if (module25[r]) {
            module102(module25[r], z, r);
        }
    }
}
export default {
    NATIVE_ARRAY_BUFFER_VIEWS,
    TYPED_ARRAY_TAG: D && z,
    aTypedArray: function(e) {
        if (isTypedArray(e)) {
            return e;
        }
        throw new module25_TypeError("Target is not a typed array");
    },
    aTypedArrayConstructor: function(e) {
        if (module35(e) && (!module204 || module107(TypedArray, e))) {
            return e;
        }
        throw new module25_TypeError(`${module149(e)} is not a typed array constructor`);
    },
    exportTypedArrayMethod: function(e, t, n, r) {
        if (module33) {
            if (n) {
                for(const o in I){
                    const i = module25[o];
                    if (i && module53(i.prototype, e)) {
                        try {
                            delete i.prototype[e];
                        } catch (n) {
                            try {
                                i.prototype[e] = t;
                            } catch (e) {}
                        }
                    }
                }
            }
            if (!(TypedArrayPrototype[e] && !n)) {
                module67(TypedArrayPrototype, e, n ? t : NATIVE_ARRAY_BUFFER_VIEWS && M[e] || t, r);
            }
        }
    },
    exportTypedArrayStaticMethod: function(e, t, n) {
        let r;
        let o;
        if (module33) {
            if (module204) {
                if (n) {
                    for(r in I){
                        if ((o = module25[r]) && module53(o, e)) {
                            try {
                                delete o[e];
                            } catch (e) {}
                        }
                    }
                }
                if (TypedArray[e] && !n) {
                    return;
                }
                try {
                    return module67(TypedArray, e, n ? t : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[e] || t);
                } catch (e) {}
            }
            for(r in I){
                if (!(!(o = module25[r]) || o[e] && !n)) {
                    module67(o, e, t);
                }
            }
        }
    },
    getTypedArrayConstructor,
    isView: function(e) {
        if (!module54(e)) {
            return false;
        }
        const t = module202(e);
        return t === "DataView" || module53(I, t) || module53(R, t);
    },
    isTypedArray,
    TypedArray,
    TypedArrayPrototype
};
