const o = function(e) {
    return e;
};
export const PLACE_HOLDER = {
    "@@functional/placeholder": true
};
const a = (e)=>e === PLACE_HOLDER;
const l = (e)=>function t() {
        if (arguments.length === 0 || arguments.length === 1 && a(arguments.length <= 0 ? undefined : arguments[0])) {
            return t;
        }
        return e(...arguments);
    };
export const curry = function(e) {
    return function e(t, n) {
        if (t === 1) {
            return n;
        }
        return l((...u)=>{
            const length = u.filter((e)=>e !== PLACE_HOLDER).length;
            if (length >= t) {
                return n(...u);
            }
            return e(t - length, l((...t)=>{
                const i = u.map((e)=>{
                    if (a(e)) {
                        return t.shift();
                    }
                    return e;
                });
                return n(...[
                    ...i
                ].concat(t));
            }));
        });
    }(e.length, e);
};
export const range = function(e, t) {
    const n = [];
    for(let r = e; r < t; ++r){
        n[r - e] = r;
    }
    return n;
};
export const map = curry(function(e, t) {
    if (Array.isArray(t)) {
        return t.map(e);
    }
    return Object.keys(t).map((e)=>t[e]).map(e);
});
export const compose = function(...t_1) {
    if (!t_1.length) {
        return o;
    }
    const [i, ...a] = t_1.reverse();
    return function() {
        return a.reduce((acc, item)=>item(acc), i(...arguments));
    };
};
export const reverse = function(e) {
    if (Array.isArray(e)) {
        return e.reverse();
    }
    return e.split("").reverse.join("");
};
export const memoize = function(e) {
    let t = null;
    let n = null;
    return function(...o) {
        if (t && o.every((e, n)=>e === t[n])) {
            return n;
        }
        t = o;
        return n = e(...o);
    };
};
