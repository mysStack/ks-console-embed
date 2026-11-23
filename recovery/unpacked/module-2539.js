import module798 from "./module-798.js";
import module883 from "./module-883.js";
(function(e, t) {
    module798(e);
    t = module883(t, c);
    if (!e.includes(",")) {
        return false;
    }
    const n = e.split(",");
    return !(n[0].startsWith("(") && !n[1].endsWith(")") || n[1].endsWith(")") && !n[0].startsWith("(")) && (t.checkDMS ? u.test(n[0]) && s.test(n[1]) : a.test(n[0]) && l.test(n[1]));
});
var a = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
var l = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;
var u = /^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i;
var s = /^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i;
var c = {
    checkDMS: false
};
export default exports.default;
