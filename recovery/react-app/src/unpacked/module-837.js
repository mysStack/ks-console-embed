const hasOwnProperty = Object.prototype.hasOwnProperty;
const a = typeof Element !== "undefined";
export default function(e, t) {
    try {
        return function e(t, n) {
            if (t === n) {
                return true;
            }
            if (t && n && typeof t === "object" && typeof n === "object") {
                let l;
                let u;
                let s;
                const c = Array.isArray(t);
                const f = Array.isArray(n);
                if (c && f) {
                    if ((u = t.length) != n.length) {
                        return false;
                    }
                    for(l = u; l-- != 0;){
                        if (!e(t[l], n[l])) {
                            return false;
                        }
                    }
                    return true;
                }
                if (c != f) {
                    return false;
                }
                const d = t instanceof Date;
                const p = n instanceof Date;
                if (d != p) {
                    return false;
                }
                if (d && p) {
                    return t.getTime() == n.getTime();
                }
                const h = t instanceof RegExp;
                const v = n instanceof RegExp;
                if (h != v) {
                    return false;
                }
                if (h && v) {
                    return t.toString() == n.toString();
                }
                const g = Object.keys(t);
                if ((u = g.length) !== Object.keys(n).length) {
                    return false;
                }
                for(l = u; l-- != 0;){
                    if (!hasOwnProperty.call(n, g[l])) {
                        return false;
                    }
                }
                if (a && t instanceof Element && n instanceof Element) {
                    return t === n;
                }
                for(l = u; l-- != 0;){
                    if (!((s = g[l]) === "_owner" && t.$$typeof || e(t[s], n[s]))) {
                        return false;
                    }
                }
                return true;
            }
            return t != t && n != n;
        }(e, t);
    } catch (error) {
        if (error.message && error.message.match(/stack|recursion/i) || error.number === -2146828260) {
            console.warn("Warning: react-fast-compare does not handle circular references.", error.name, error.message);
            return false;
        }
        throw error;
    }
};
