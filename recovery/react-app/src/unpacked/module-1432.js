import module8 from "unpacked/module-8.js";
import module1887 from "unpacked/module-1887.js";
import module78 from "unpacked/module-78.js";
import module19 from "unpacked/module-19.js";
import module114 from "unpacked/module-114.js";
import module143 from "unpacked/module-143.js";
import { f as f_1 } from "unpacked/module-70.js";
import module67 from "unpacked/module-67.js";
import module113 from "unpacked/module-113.js";
import module53 from "unpacked/module-53.js";
import module254 from "unpacked/module-254.js";
import module50 from "unpacked/module-50.js";
import module510 from "unpacked/module-510.js";
import module341 from "unpacked/module-341.js";
import module1888 from "unpacked/module-1888.js";
import module489 from "unpacked/module-489.js";
import module101 from "unpacked/module-101.js";
import module33 from "unpacked/module-33.js";
import module79 from "unpacked/module-79.js";
const _ = module78("Error");
const C = module78("DOMException") || (()=>{
    try {
        (new (module78("MessageChannel") || module1887("worker_threads").MessageChannel)).port1.postMessage(new WeakMap);
    } catch (error) {
        if (error.name === "DATA_CLONE_ERR" && error.code === 25) {
            return error.constructor;
        }
    }
})();
const O = C && C.prototype;
const __prototype = _.prototype;
const module101_set = module101.set;
const S = module101.getterFor("DOMException");
const A = "stack" in new _("DOMException");
const k = (e)=>{
    if (module53(module1888, e) && module1888[e].m) {
        return module1888[e].c;
    }
    return 0;
};
const j = function(...args) {
    module254(this, T);
    const args_length = args.length;
    const message = module341(args_length < 1 ? undefined : args[0]);
    const n = module341(args_length < 2 ? undefined : args[1], "Error");
    const code = k(n);
    module101_set(this, {
        type: "DOMException",
        name: n,
        message,
        code
    });
    if (!module33) {
        this.name = n;
        this.message = message;
        this.code = code;
    }
    if (A) {
        const o = new _(message);
        o.name = "DOMException";
        f_1(this, "stack", module143(1, module489(o.stack, 1)));
    }
};
var T = j.prototype = module114(__prototype);
const P = (get)=>({
        enumerable: true,
        configurable: true,
        get
    });
const L = (e)=>P(function() {
        return S(this)[e];
    });
if (module33) {
    module113(T, "code", L("code"));
    module113(T, "message", L("message"));
    module113(T, "name", L("name"));
}
f_1(T, "constructor", module143(1, j));
const z = module19(function() {
    return !(new C instanceof _);
});
const N = z || module19(function() {
    return __prototype.toString !== module510 || String(new C(1, 2)) !== "2: 1";
});
const D = z || module19(function() {
    return new C(1, "DataCloneError").code !== 25;
});
const I = z || C.DATA_CLONE_ERR !== 25 || O.DATA_CLONE_ERR !== 25;
const forced = module79 ? N || D || I : z;
module8({
    global: true,
    constructor: true,
    forced
}, {
    DOMException: forced ? j : C
});
const H = module78("DOMException");
const H_prototype = H.prototype;
if (N && (module79 || C === H)) {
    module67(H_prototype, "toString", module510);
}
if (D && module33 && C === H) {
    module113(H_prototype, "code", P(function() {
        return k(module50(this).name);
    }));
}
for(const F in module1888){
    if (module53(module1888, F)) {
        const V = module1888[F];
        const $ = V.s;
        const U = module143(6, V.c);
        if (!module53(H, $)) {
            f_1(H, $, U);
        }
        if (!module53(H_prototype, $)) {
            f_1(H_prototype, $, U);
        }
    }
}
