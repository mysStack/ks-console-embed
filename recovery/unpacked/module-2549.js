import module883 from "./module-883.js";
import module798 from "./module-798.js";
(function(e, t = null) {
    module798(e);
    const n = f(e);
    if ((t = module883(t || {}, c)).returnScore) {
        return d(n, t);
    }
    return n.length >= t.minLength && n.lowercaseCount >= t.minLowercase && n.uppercaseCount >= t.minUppercase && n.numberCount >= t.minNumbers && n.symbolCount >= t.minSymbols;
});
var a = /^[A-Z]$/;
var l = /^[a-z]$/;
var u = /^[0-9]$/;
var s = /^[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/;
var c = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    returnScore: false,
    pointsPerUnique: 1,
    pointsPerRepeat: 0.5,
    pointsForContainingLower: 10,
    pointsForContainingUpper: 10,
    pointsForContainingNumber: 10,
    pointsForContainingSymbol: 10
};
function f(e) {
    let t;
    let n;
    t = e;
    n = {};
    Array.from(t).forEach((e)=>{
        if (n[e]) {
            n[e] += 1;
        } else {
            n[e] = 1;
        }
    });
    const r = n;
    const o = {
        length: e.length,
        uniqueChars: Object.keys(r).length,
        uppercaseCount: 0,
        lowercaseCount: 0,
        numberCount: 0,
        symbolCount: 0
    };
    Object.keys(r).forEach((e)=>{
        if (a.test(e)) {
            o.uppercaseCount += r[e];
        } else if (l.test(e)) {
            o.lowercaseCount += r[e];
        } else if (u.test(e)) {
            o.numberCount += r[e];
        } else if (s.test(e)) {
            o.symbolCount += r[e];
        }
    });
    return o;
}
function d(e, t) {
    let n = 0;
    n += e.uniqueChars * t.pointsPerUnique;
    n += (e.length - e.uniqueChars) * t.pointsPerRepeat;
    if (e.lowercaseCount > 0) {
        n += t.pointsForContainingLower;
    }
    if (e.uppercaseCount > 0) {
        n += t.pointsForContainingUpper;
    }
    if (e.numberCount > 0) {
        n += t.pointsForContainingNumber;
    }
    if (e.symbolCount > 0) {
        n += t.pointsForContainingSymbol;
    }
    return n;
}
export default exports.default;
