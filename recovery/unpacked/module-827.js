import module26 from "./module-26.js";
import module60 from "./module-60.js";
import module926 from "./module-926.js";
import module459 from "./module-459.js";
import module195 from "./module-195.js";
export const mathSign = function(e) {
    if (e === 0) {
        return 0;
    }
    if (e > 0) {
        return 1;
    }
    return -1;
};
export const isPercent = function(e) {
    return module195(e) && e.indexOf("%") === e.length - 1;
};
export const isNumber = function(e) {
    return module459(e) && !module926(e);
};
export const isNumOrStr = function(e) {
    return isNumber(e) || module195(e);
};
let f = 0;
export const uniqueId = function(e) {
    const t = ++f;
    return `${e || ""}${t}`;
};
export const getPercentValue = function(e, t, r = 0) {
    let n;
    const o = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
    if (!isNumber(e) && !module195(e)) {
        return r;
    }
    if (isPercent(e)) {
        const a = e.indexOf("%");
        n = t * parseFloat(e.slice(0, a)) / 100;
    } else {
        n = +e;
    }
    if (module926(n)) {
        n = r;
    }
    if (o && n > t) {
        n = t;
    }
    return n;
};
export const getAnyElementOfObject = function(e) {
    if (!e) {
        return null;
    }
    const t = Object.keys(e);
    if (t && t.length) {
        return e[t[0]];
    }
    return null;
};
export const hasDuplicate = function(e) {
    if (!module60(e)) {
        return false;
    }
    for(let t = e.length, n = {}, r = 0; r < t; r++){
        if (n[e[r]]) {
            return true;
        }
        n[e[r]] = true;
    }
    return false;
};
export const interpolateNumber = function(e, t) {
    if (isNumber(e) && isNumber(t)) {
        return function(n) {
            return e + n * (t - e);
        };
    }
    return function() {
        return t;
    };
};
export const findEntryInArray = function(e, t, n) {
    if (e && e.length) {
        return e.find((e)=>e && (typeof t === "function" ? t(e) : module26(e, t)) === n);
    }
    return null;
};
export const getLinearRegression = function(e) {
    if (!e || !e.length) {
        return null;
    }
    for(var t = e.length, n = 0, r = 0, o = 0, i = 0, xmin = Infinity, xmax = -Infinity, u = 0; u < t; u++){
        n += e[u].cx;
        r += e[u].cy;
        o += e[u].cx * e[u].cy;
        i += e[u].cx * e[u].cx;
        xmin = Math.min(xmin, e[u].cx);
        xmax = Math.max(xmax, e[u].cx);
    }
    const a_1 = t * i != n * n ? (t * o - n * r) / (t * i - n * n) : 0;
    return {
        xmin,
        xmax,
        a: a_1,
        b: (r - a_1 * n) / t
    };
};
