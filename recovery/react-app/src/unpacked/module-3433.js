import module3434 from "unpacked/module-3434.js";
import module3443 from "unpacked/module-3443.js";
import module3444 from "unpacked/module-3444.js";
import module1019 from "unpacked/module-1019.js";
import module986 from "unpacked/module-986.js";
import module1066 from "unpacked/module-1066.js";
import module1018 from "unpacked/module-1018.js";
import module3445 from "unpacked/module-3445.js";
const module3434_iterator = module3434.iterator;
const call = Function.prototype.call;
const p = {
    configurable: true,
    enumerable: true,
    writable: true,
    value: null
};
export default function(e, C, O) {
    let t;
    let n;
    let v;
    let g;
    let y;
    let m;
    let b;
    let x;
    let w;
    let _;
    e = Object(module1066(e));
    if (module1018(C)) {
        module986(C);
    }
    if (this && this !== Array && module3444(this)) {
        t = this;
    } else {
        if (!C) {
            if (module3443(e)) {
                if ((y = e.length) !== 1) {
                    return Array.apply(null, e);
                }
                g = new Array(1);
                g[0] = e[0];
                return g;
            }
            if (Array.isArray(e)) {
                g = new Array(y = e.length);
                for(n = 0; n < y; ++n){
                    g[n] = e[n];
                }
                return g;
            }
        }
        g = [];
    }
    if (!Array.isArray(e)) {
        if ((w = e[module3434_iterator]) !== undefined) {
            b = module986(w).call(e);
            if (t) {
                g = new t;
            }
            x = b.next();
            for(n = 0; !x.done;){
                _ = C ? call.call(C, O, x.value, n) : x.value;
                if (t) {
                    p.value = _;
                    Object.defineProperty(g, n, p);
                } else {
                    g[n] = _;
                }
                x = b.next();
                ++n;
            }
            y = n;
        } else if (module3445(e)) {
            y = e.length;
            if (t) {
                g = new t;
            }
            n = 0;
            for(v = 0; n < y; ++n){
                _ = e[n];
                if (n + 1 < y && (m = _.charCodeAt(0)) >= 55296 && m <= 56319) {
                    _ += e[++n];
                }
                _ = C ? call.call(C, O, _, v) : _;
                if (t) {
                    p.value = _;
                    Object.defineProperty(g, v, p);
                } else {
                    g[v] = _;
                }
                ++v;
            }
            y = v;
        }
    }
    if (y === undefined) {
        y = module1019(e.length);
        if (t) {
            g = new t(y);
        }
        for(n = 0; n < y; ++n){
            _ = C ? call.call(C, O, e[n], n) : e[n];
            if (t) {
                p.value = _;
                Object.defineProperty(g, n, p);
            } else {
                g[n] = _;
            }
        }
    }
    if (t) {
        p.value = null;
        g.length = y;
    }
    return g;
};
