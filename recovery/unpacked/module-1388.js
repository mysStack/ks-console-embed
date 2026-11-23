import "./module-15.js";
import "./module-5.js";
import "./module-87.js";
import "./module-48.js";
import "./module-140.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-64.js";
import module31 from "./module-31.js";
import "./module-28.js";
import "./module-4.js";
import "./module-251.js";
import "./module-252.js";
import "./module-193.js";
import module195 from "./module-195.js";
export const markAll = function(e = "", t = [], a = mark) {
    if (t.length) {
        return t.reduce((acc, item)=>acc.reduce((acc_1, item_1)=>acc_1.concat(a(item_1, item)), []), [
            e
        ]);
    }
    return [
        e
    ];
};
export const esMark = function(e = "", t = "", a = "hightLighted") {
    if (!module195(e)) {
        return e;
    }
    const r = t.match(/\w+|[\u4e00-\u9fa5]/g) || [];
    const n = r.reduce((acc, item)=>{
        const a = acc.slice(-1);
        const r = i.test(item);
        const n = i.test(a);
        return `${acc}[^\\w\\u4e00-\\u9fa5]{${r || n ? 0 : 1},}${item}`;
    }, "");
    if (!n) {
        return [
            e
        ];
    }
    const u = new RegExp(n, "ig");
    return markStrAsArray(e, u, a);
};
var u = /[|\\{}()[\]^$+*?.]/g;
export function mark(e = "", t = "", a = "hightLighted") {
    if (!module195(e)) {
        return e;
    }
    if (!t) {
        return [
            e
        ];
    }
    const r = t.replace(u, "\\$&");
    const n = new RegExp(r, "ig");
    return markStrAsArray(e, n, a);
}
var i = /[\u4e00-\u9fa5]/;
export function markStrAsArray(e, t, a = "hightLighted") {
    const r = [
        e
    ];
    let l = 0;
    e.replace(t, (e, t)=>{
        const u = r.length - 1;
        const o = r[u];
        const i = t - l;
        const c = o.slice(0, i);
        const s = o.slice(i + e.length);
        r[u] = c;
        r.push(module31({}, a, e), s);
        l += t + e.length;
    });
    return r;
}
