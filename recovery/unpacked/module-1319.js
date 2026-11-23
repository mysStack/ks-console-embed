import module798 from "./module-798.js";
(function(e, t) {
    module798(e);
    const n = (t = t || {}).hasOwnProperty("allow_leading_zeroes") && !t.allow_leading_zeroes ? i : a;
    const r = !t.hasOwnProperty("min") || e >= t.min;
    const l = !t.hasOwnProperty("max") || e <= t.max;
    const u = !t.hasOwnProperty("lt") || e < t.lt;
    const s = !t.hasOwnProperty("gt") || e > t.gt;
    return n.test(e) && r && l && u && s;
});
var i = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
var a = /^[-+]?[0-9]+$/;
export default exports.default;
