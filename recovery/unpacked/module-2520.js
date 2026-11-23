import module798 from "./module-798.js";
(function e(t, n) {
    module798(t);
    const r = String(n?.version || n);
    if (!(n != null && n.version || n)) {
        return e(t, {
            version: 10
        }) || e(t, {
            version: 13
        });
    }
    const u = t.replace(/[\s-]+/g, "");
    let s = 0;
    if (r === "10") {
        if (!i.test(u)) {
            return false;
        }
        for(let c = 0; c < r - 1; c++){
            s += (c + 1) * u.charAt(c);
        }
        if (u.charAt(9) === "X") {
            s += 100;
        } else {
            s += 10 * u.charAt(9);
        }
        if (s % 11 == 0) {
            return true;
        }
    } else if (r === "13") {
        if (!a.test(u)) {
            return false;
        }
        for(let f = 0; f < 12; f++){
            s += l[f % 2] * u.charAt(f);
        }
        if (u.charAt(12) - (10 - s % 10) % 10 == 0) {
            return true;
        }
    }
    return false;
});
var i = /^(?:[0-9]{9}X|[0-9]{10})$/;
var a = /^(?:[0-9]{13})$/;
var l = [
    1,
    3
];
export default exports.default;
