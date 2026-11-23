import module25 from "unpacked/module-25.js";
import module21 from "unpacked/module-21.js";
import module338 from "unpacked/module-338.js";
import module1455 from "unpacked/module-1455.js";
import module1958 from "unpacked/module-1958.js";
import module1959 from "unpacked/module-1959.js";
import module4815 from "unpacked/module-4815.js";
import module1961 from "unpacked/module-1961.js";
const { structuredClone, ArrayBuffer, DataView, TypeError } = module25;
const ArrayBuffer_prototype = ArrayBuffer.prototype;
const DataView_prototype = DataView.prototype;
const m = module21(ArrayBuffer_prototype.slice);
const b = module338(ArrayBuffer_prototype, "resizable", "get");
const x = module338(ArrayBuffer_prototype, "maxByteLength", "get");
const w = module21(DataView_prototype.getInt8);
const _ = module21(DataView_prototype.setInt8);
export default (module1961 || module4815) && function(e, t, n) {
    let r;
    const o = module1959(e);
    const i = t === undefined ? o : module1455(t);
    const g = !b || !b(e);
    if (module1958(e)) {
        throw new TypeError("ArrayBuffer is detached");
    }
    if (module1961 && (e = structuredClone(e, {
        transfer: [
            e
        ]
    }), o === i && (n || g))) {
        return e;
    }
    if (o >= i && (!n || g)) {
        r = m(e, 0, i);
    } else {
        const y = n && !g && x ? {
            maxByteLength: x(e)
        } : undefined;
        r = new ArrayBuffer(i, y);
        const C = new DataView(e);
        const O = new DataView(r);
        for(let E = Math.min(i, o), M = 0; M < E; M++){
            _(O, M, w(C, M));
        }
    }
    if (!module1961) {
        module4815(e);
    }
    return r;
};
