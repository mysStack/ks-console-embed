import module25 from "unpacked/module-25.js";
import module21 from "unpacked/module-21.js";
import module33 from "unpacked/module-33.js";
import module1454 from "unpacked/module-1454.js";
import module167 from "unpacked/module-167.js";
import module102 from "unpacked/module-102.js";
import module113 from "unpacked/module-113.js";
import module493 from "unpacked/module-493.js";
import module19 from "unpacked/module-19.js";
import module254 from "unpacked/module-254.js";
import module111 from "unpacked/module-111.js";
import module141 from "unpacked/module-141.js";
import module1455 from "unpacked/module-1455.js";
import module4800 from "unpacked/module-4800.js";
import module4803 from "unpacked/module-4803.js";
import module260 from "unpacked/module-260.js";
import module204 from "unpacked/module-204.js";
import module1280 from "unpacked/module-1280.js";
import module124 from "unpacked/module-124.js";
import module206 from "unpacked/module-206.js";
import module268 from "unpacked/module-268.js";
import module123 from "unpacked/module-123.js";
import module101 from "unpacked/module-101.js";
const { PROPER, CONFIGURABLE } = module167;
const A = module101.getterFor("ArrayBuffer");
const k = module101.getterFor("DataView");
const module101_set = module101.set;
const module25_ArrayBuffer = module25.ArrayBuffer;
let ArrayBuffer = module25_ArrayBuffer;
let L = ArrayBuffer && ArrayBuffer.prototype;
let module25_DataView = module25.DataView;
let N = module25_DataView && module25_DataView.prototype;
const { Array, RangeError } = module25;
const H = module21(module1280);
const B = module21([].reverse);
const { pack, unpack } = module4803;
const $ = function(e) {
    return [
        255 & e
    ];
};
const U = function(e) {
    return [
        255 & e,
        e >> 8 & 255
    ];
};
const Z = function(e) {
    return [
        255 & e,
        e >> 8 & 255,
        e >> 16 & 255,
        e >> 24 & 255
    ];
};
const W = (e)=>e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0];
const K = function(e) {
    return pack(module4800(e), 23, 4);
};
const G = function(e) {
    return pack(e, 52, 8);
};
const q = (e, t, n)=>{
    module113(e.prototype, t, {
        configurable: true,
        get: function() {
            return n(this)[t];
        }
    });
};
const Y = (e, t, n, r)=>{
    const o = k(e);
    const i = module1455(n);
    const a = !!r;
    if (i + t > o.byteLength) {
        throw new RangeError("Wrong index");
    }
    const o_bytes = o.bytes;
    const u = i + o.byteOffset;
    const s = module124(o_bytes, u, u + t);
    if (a) {
        return s;
    }
    return B(s);
};
const X = (e, t, n, r, o, i)=>{
    const a = k(e);
    const l = module1455(n);
    const u = r(+o);
    const s = !!i;
    if (l + t > a.byteLength) {
        throw new RangeError("Wrong index");
    }
    const a_bytes = a.bytes;
    const f = l + a.byteOffset;
    for(let d = 0; d < t; d++){
        a_bytes[f + d] = u[s ? d : t - d - 1];
    }
};
if (module1454) {
    const J = PROPER && module25_ArrayBuffer.name !== "ArrayBuffer";
    if (module19(function() {
        module25_ArrayBuffer(1);
    }) && module19(function() {
        new module25_ArrayBuffer(-1);
    }) && !module19(function() {
        new module25_ArrayBuffer;
        new module25_ArrayBuffer(1.5);
        new module25_ArrayBuffer(NaN);
        return module25_ArrayBuffer.length !== 1 || J && !CONFIGURABLE;
    })) {
        if (J && CONFIGURABLE) {
            module102(module25_ArrayBuffer, "name", "ArrayBuffer");
        }
    } else {
        ArrayBuffer = function(e) {
            module254(this, L);
            return module206(new module25_ArrayBuffer(module1455(e)), this, ArrayBuffer);
        };
        ArrayBuffer.prototype = L;
        L.constructor = ArrayBuffer;
        module268(ArrayBuffer, module25_ArrayBuffer);
    }
    if (module204 && module260(N) !== Object.prototype) {
        module204(N, Object.prototype);
    }
    const Q = new module25_DataView(new ArrayBuffer(2));
    const ee = module21(N.setInt8);
    Q.setInt8(0, 2147483648);
    Q.setInt8(1, 2147483649);
    if (!(!Q.getInt8(0) && Q.getInt8(1))) {
        module493(N, {
            setInt8: function(e, t) {
                ee(this, e, t << 24 >> 24);
            },
            setUint8: function(e, t) {
                ee(this, e, t << 24 >> 24);
            }
        }, {
            unsafe: true
        });
    }
} else {
    L = (ArrayBuffer = function(e) {
        module254(this, L);
        const t = module1455(e);
        module101_set(this, {
            type: "ArrayBuffer",
            bytes: H(Array(t), 0),
            byteLength: t
        });
        if (!module33) {
            this.byteLength = t;
            this.detached = false;
        }
    }).prototype;
    N = (module25_DataView = function(buffer, t, n) {
        module254(this, N);
        module254(buffer, L);
        const r = A(buffer);
        const r_byteLength = r.byteLength;
        const byteOffset = module111(t);
        if (byteOffset < 0 || byteOffset > r_byteLength) {
            throw new RangeError("Wrong offset");
        }
        if (byteOffset + (n = n === undefined ? r_byteLength - byteOffset : module141(n)) > r_byteLength) {
            throw new RangeError("Wrong length");
        }
        module101_set(this, {
            type: "DataView",
            buffer,
            byteLength: n,
            byteOffset,
            bytes: r.bytes
        });
        if (!module33) {
            this.buffer = buffer;
            this.byteLength = n;
            this.byteOffset = byteOffset;
        }
    }).prototype;
    if (module33) {
        q(ArrayBuffer, "byteLength", A);
        q(module25_DataView, "buffer", k);
        q(module25_DataView, "byteLength", k);
        q(module25_DataView, "byteOffset", k);
    }
    module493(N, {
        getInt8: function(e) {
            return Y(this, 1, e)[0] << 24 >> 24;
        },
        getUint8: function(e) {
            return Y(this, 1, e)[0];
        },
        getInt16: function(e) {
            const t = Y(this, 2, e, arguments.length > 1 && arguments[1]);
            return (t[1] << 8 | t[0]) << 16 >> 16;
        },
        getUint16: function(e) {
            const t = Y(this, 2, e, arguments.length > 1 && arguments[1]);
            return t[1] << 8 | t[0];
        },
        getInt32: function(e) {
            return W(Y(this, 4, e, arguments.length > 1 && arguments[1]));
        },
        getUint32: function(e) {
            return W(Y(this, 4, e, arguments.length > 1 && arguments[1])) >>> 0;
        },
        getFloat32: function(e) {
            return unpack(Y(this, 4, e, arguments.length > 1 && arguments[1]), 23);
        },
        getFloat64: function(e) {
            return unpack(Y(this, 8, e, arguments.length > 1 && arguments[1]), 52);
        },
        setInt8: function(e, t) {
            X(this, 1, e, $, t);
        },
        setUint8: function(e, t) {
            X(this, 1, e, $, t);
        },
        setInt16: function(e, t) {
            X(this, 2, e, U, t, arguments.length > 2 && arguments[2]);
        },
        setUint16: function(e, t) {
            X(this, 2, e, U, t, arguments.length > 2 && arguments[2]);
        },
        setInt32: function(e, t) {
            X(this, 4, e, Z, t, arguments.length > 2 && arguments[2]);
        },
        setUint32: function(e, t) {
            X(this, 4, e, Z, t, arguments.length > 2 && arguments[2]);
        },
        setFloat32: function(e, t) {
            X(this, 4, e, K, t, arguments.length > 2 && arguments[2]);
        },
        setFloat64: function(e, t) {
            X(this, 8, e, G, t, arguments.length > 2 && arguments[2]);
        }
    });
}
module123(ArrayBuffer, "ArrayBuffer");
module123(module25_DataView, "DataView");
export default {
    ArrayBuffer,
    DataView: module25_DataView
};
