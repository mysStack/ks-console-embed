import { a as a_1 } from "unpacked/module-1277.js";
const o = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
const i = new RegExp(o.source, "g");
export const a = function(e, t) {
    let n;
    let a;
    let l;
    let u = o.lastIndex = i.lastIndex = 0;
    let i_1 = -1;
    const c = [];
    const f = [];
    e += "";
    for(t += ""; (n = o.exec(e)) && (a = i.exec(t));){
        if ((l = a.index) > u) {
            l = t.slice(u, l);
            if (c[i_1]) {
                c[i_1] += l;
            } else {
                c[++i_1] = l;
            }
        }
        if ((n = n[0]) === (a = a[0])) {
            if (c[i_1]) {
                c[i_1] += a;
            } else {
                c[++i_1] = a;
            }
        } else {
            c[++i_1] = null;
            f.push({
                i: i_1,
                x: a_1(n, a)
            });
        }
        u = i.lastIndex;
    }
    if (u < t.length) {
        l = t.slice(u);
        if (c[i_1]) {
            c[i_1] += l;
        } else {
            c[++i_1] = l;
        }
    }
    if (c.length < 2) {
        if (f[0]) {
            return ((e)=>function(t) {
                    return `${e(t)}`;
                })(f[0].x);
        }
        return ((e)=>function() {
                return e;
            })(t);
    }
    t = f.length;
    return function(e) {
        let n;
        for(let r = 0; r < t; ++r){
            c[(n = f[r]).i] = n.x(e);
        }
        return c.join("");
    };
};
