"use strict";
const module822 = require("./module-822.js").default;
const module1239 = require("./module-1239.js").default;
const module1884 = require("./module-1884.js").default;
const module4493 = require("./module-4493.js").default;
const toFixed = 1..toFixed;
const s = [
    0,
    0,
    0,
    0,
    0,
    0
];
const c = "Number.toFixed: incorrect invocation!";
const f = function(e, t) {
    for(let n = -1, r = t; ++n < 6;){
        r += e * s[n];
        s[n] = r % 10000000;
        r = Math.floor(r / 10000000);
    }
};
const d = function(e) {
    for(let t = 6, n = 0; --t >= 0;){
        n += s[t];
        s[t] = Math.floor(n / e);
        n = n % e * 10000000;
    }
};
const p = function() {
    for(var e = 6, t = ""; --e >= 0;){
        if (t !== "" || e === 0 || s[e] !== 0) {
            const n = String(s[e]);
            t = t === "" ? n : t + module4493.call("0", 7 - n.length) + n;
        }
    }
    return t;
};
const h = function(e, t, n) {
    if (t === 0) {
        return n;
    }
    if (t % 2 == 1) {
        return h(e, t - 1, n * e);
    }
    return h(e * e, t / 2, n);
};
module822(module822.P + module822.F * (!!toFixed && (0.00008.toFixed(3) !== "0.000" || 0.9.toFixed(0) !== "1" || 1.255.toFixed(2) !== "1.25" || 1000000000000000100..toFixed(0) !== "1000000000000000128") || !require("./module-990.js").default(function() {
    toFixed.call({});
})), "Number", {
    toFixed: function(e) {
        let t;
        let n;
        let r;
        let l;
        let u = module1884(this, c);
        const s = module1239(e);
        let v = "";
        let g = "0";
        if (s < 0 || s > 20) {
            throw RangeError(c);
        }
        if (u != u) {
            return "NaN";
        }
        if (u <= -1e+21 || u >= 1e+21) {
            return String(u);
        }
        if (u < 0) {
            v = "-";
            u = -u;
        }
        if (u > 1e-21) {
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
            })(u * h(2, 69, 1)) - 69) < 0 ? u * h(2, -t, 1) : u / h(2, t, 1);
            n *= 4503599627370496;
            if ((t = 52 - t) > 0) {
                f(0, n);
                for(r = s; r >= 7;){
                    f(10000000, 0);
                    r -= 7;
                }
                f(h(10, r, 1), 0);
                for(r = t - 1; r >= 23;){
                    d(1 << 23);
                    r -= 23;
                }
                d(1 << r);
                f(1, 1);
                d(2);
                g = p();
            } else {
                f(0, n);
                f(1 << -t, 0);
                g = p() + module4493.call("0", s);
            }
        }
        if (s > 0) {
            return v + ((l = g.length) <= s ? `0.${module4493.call("0", s - l)}${g}` : `${g.slice(0, l - s)}.${g.slice(l - s)}`);
        }
        return v + g;
    }
});
