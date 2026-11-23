import module1019 from "./module-1019.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
export default function(e) {
    let t;
    let n = 0;
    let a = 1;
    let l = Object.create(null);
    let u = Object.create(null);
    let s = 0;
    e = module1019(e);
    return {
        hit: function(r) {
            const o = u[r];
            const c = ++s;
            l[c] = r;
            u[r] = c;
            if (!o) {
                if (++n <= e) {
                    return;
                }
                r = l[a];
                t(r);
                return r;
            }
            delete l[o];
            if (a === o) {
                while(!hasOwnProperty.call(l, ++a)){
                    continue;
                }
            }
        },
        delete: t = function(e) {
            const t = u[e];
            if (t && (delete l[t], delete u[e], --n, a === t)) {
                if (!n) {
                    s = 0;
                    return void (a = 1);
                }
                while(!hasOwnProperty.call(l, ++a)){
                    continue;
                }
            }
        },
        clear: function() {
            n = 0;
            a = 1;
            l = Object.create(null);
            u = Object.create(null);
            s = 0;
        }
    };
};
