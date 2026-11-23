import { a as a_1 } from "./module-894.js";
import { a as a_2 } from "./module-1055.js";
import { a as a_3 } from "./module-840.js";
import { a as a_4 } from "./module-906.js";
const a = {};
a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = true;
a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = false;
const u = require(1056);
const s = u.a && u.a.isTypedArray;
const c = s ? a_4(s) : function(e) {
    return a_3(e) && a_2(e.length) && !!a[a_1(e)];
};
export { c as a };
