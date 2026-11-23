import module8 from "unpacked/module-8.js";
import module21 from "unpacked/module-21.js";
import module111 from "unpacked/module-111.js";
import module387 from "unpacked/module-387.js";
import module507 from "unpacked/module-507.js";
import module19 from "unpacked/module-19.js";
const d = module21(module507);
const p = module21("".slice);
const h = module21(1..toFixed);
const v = (e, t, n)=>{
    if (t === 0) {
        return n;
    }
    if (t % 2 == 1) {
        return v(e, t - 1, n * e);
    }
    return v(e * e, t / 2, n);
};
const m = (e, t, n)=>{
    for(let r = -1, o = n; ++r < 6;){
        o += t * e[r];
        e[r] = o % 10000000;
        o = Math.floor(o / 10000000);
    }
};
const g = (e, t)=>{
    for(let n = 6, r = 0; --n >= 0;){
        r += e[n];
        e[n] = Math.floor(r / t);
        r = r % t * 10000000;
    }
};
const y = (e)=>{
    for(var t = 6, n = ""; --t >= 0;){
        if (n !== "" || t === 0 || e[t] !== 0) {
            const r = String(e[t]);
            n = n === "" ? r : n + d("0", 7 - r.length) + r;
        }
    }
    return n;
};
module8({
    target: "Number",
    proto: true,
    forced: module19(function() {
        return h(0.00008, 3) !== "0.000" || h(0.9, 0) !== "1" || h(1.255, 2) !== "1.25" || h(1000000000000000100, 0) !== "1000000000000000128";
    }) || !module19(function() {
        h({});
    })
}, {
    toFixed: function(e) {
        let t;
        let n;
        let r;
        let o;
        let l = module387(this);
        const s = module111(e);
        const f = [
            0,
            0,
            0,
            0,
            0,
            0
        ];
        let h = "";
        let b = "0";
        if (s < 0 || s > 20) {
            throw new RangeError("Incorrect fraction digits");
        }
        if (l != l) {
            return "NaN";
        }
        if (l <= -1e+21 || l >= 1e+21) {
            return String(l);
        }
        if (l < 0) {
            h = "-";
            l = -l;
        }
        if (l > 1e-21) {
            n = (t = ((e)=>{
                let t = 0;
                for(var n = e; n >= 4096;){
                    t += 12;
                    n /= 4096;
                }
                while(n >= 2){
                    t += 1;
                    n /= 2;
                }
                return t;
            })(l * v(2, 69, 1)) - 69) < 0 ? l * v(2, -t, 1) : l / v(2, t, 1);
            n *= 4503599627370496;
            if ((t = 52 - t) > 0) {
                m(f, 0, n);
                for(r = s; r >= 7;){
                    m(f, 10000000, 0);
                    r -= 7;
                }
                m(f, v(10, r, 1), 0);
                for(r = t - 1; r >= 23;){
                    g(f, 1 << 23);
                    r -= 23;
                }
                g(f, 1 << r);
                m(f, 1, 1);
                g(f, 2);
                b = y(f);
            } else {
                m(f, 0, n);
                m(f, 1 << -t, 0);
                b = y(f) + d("0", s);
            }
        }
        if (s > 0) {
            return h + ((o = b.length) <= s ? `0.${d("0", s - o)}${b}` : `${p(b, 0, o - s)}.${p(b, o - s)}`);
        }
        return h + b;
    }
});
