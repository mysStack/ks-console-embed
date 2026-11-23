import { a as a_1 } from "./module-1188.js";
const o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const i = /\\(\\)?/g;
export const a = ((e)=>{
    const t = a_1(function(e) {
        const t = [];
        if (e.charCodeAt(0) === 46) {
            t.push("");
        }
        e.replace(o, (e, n, r, o)=>{
            t.push(r ? o.replace(i, "$1") : n || e);
        });
        return t;
    }, function(e) {
        if (t_cache.size === 500) {
            t_cache.clear();
        }
        return e;
    });
    var t_cache = t.cache;
    return t;
})();
