import module19 from "unpacked/module-19.js";
import module35 from "unpacked/module-35.js";
const a = /#|\.prototype\./;
const i = function(e, t) {
    const n = s[l(e)];
    return n === c || n !== u && (module35(t) ? module19(t) : !!t);
};
var l = i.normalize = function(e) {
    return String(e).replace(a, ".").toLowerCase();
};
var s = i.data = {};
var u = i.NATIVE = "N";
var c = i.POLYFILL = "P";
export default i;
