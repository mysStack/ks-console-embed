((e, r)=>{
    let o;
    ((i)=>{
        exports && exports.nodeType;
        e && e.nodeType;
        const a = typeof r === "object" && r;
        a.global !== a && a.window !== a && a.self;
        let l;
        const u = 2147483647;
        const s = /^xn--/;
        const c = /[^\x20-\x7E]/;
        const f = /[\x2E\u3002\uFF0E\uFF61]/g;
        const d = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
        };
        function v(e) {
            throw new RangeError(d[e]);
        }
        function g(e, t) {
            for(var n = e.length, r = []; n--;){
                r[n] = t(e[n]);
            }
            return r;
        }
        function y(e, t) {
            const n = e.split("@");
            let r = "";
            if (n.length > 1) {
                r = `${n[0]}@`;
                e = n[1];
            }
            return r + g((e = e.replace(f, ".")).split("."), t).join(".");
        }
        function m(e) {
            let t;
            let n;
            const r = [];
            for(let o = 0, i = e.length; o < i;){
                if ((t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i) {
                    if ((64512 & (n = e.charCodeAt(o++))) == 56320) {
                        r.push(((1023 & t) << 10) + (1023 & n) + 65536);
                    } else {
                        r.push(t);
                        o--;
                    }
                } else {
                    r.push(t);
                }
            }
            return r;
        }
        function b(e) {
            return g(e, (e)=>{
                let t = "";
                if (e > 65535) {
                    t += String.fromCharCode((e -= 65536) >>> 10 & 1023 | 55296);
                    e = 56320 | 1023 & e;
                }
                return t + String.fromCharCode(e);
            }).join("");
        }
        function x(e, t) {
            return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
        }
        function w(e, t, n) {
            let r = 0;
            e = n ? Math.floor(e / 700) : e >> 1;
            for(e += Math.floor(e / t); e > 455; r += 36){
                e = Math.floor(e / 35);
            }
            return Math.floor(r + 36 * e / (e + 38));
        }
        function _(e) {
            let t;
            let n;
            let r;
            let o;
            let i;
            let a;
            let l;
            let s;
            let c;
            let f;
            let d;
            const h = [];
            const e_length = e.length;
            let y = 0;
            let m = 128;
            let x = 72;
            if ((n = e.lastIndexOf("-")) < 0) {
                n = 0;
            }
            for(r = 0; r < n; ++r){
                if (e.charCodeAt(r) >= 128) {
                    v("not-basic");
                }
                h.push(e.charCodeAt(r));
            }
            for(o = n > 0 ? n + 1 : 0; o < e_length;){
                i = y;
                a = 1;
                for(l = 36; o >= e_length && v("invalid-input"), ((s = (d = e.charCodeAt(o++)) - 48 < 10 ? d - 22 : d - 65 < 26 ? d - 65 : d - 97 < 26 ? d - 97 : 36) >= 36 || s > Math.floor((u - y) / a)) && v("overflow"), y += s * a, !(s < (c = l <= x ? 1 : l >= x + 26 ? 26 : l - x)); l += 36){
                    if (a > Math.floor(u / (f = 36 - c))) {
                        v("overflow");
                    }
                    a *= f;
                }
                x = w(y - i, t = h.length + 1, i == 0);
                if (Math.floor(y / t) > u - m) {
                    v("overflow");
                }
                m += Math.floor(y / t);
                y %= t;
                h.splice(y++, 0, m);
            }
            return b(h);
        }
        function C(e) {
            let t;
            let n;
            let r;
            let o;
            let i;
            let a;
            let l;
            let s;
            let c;
            let f;
            let d;
            let g;
            let y;
            let b;
            let _;
            const C = [];
            g = (e = m(e)).length;
            t = 128;
            n = 0;
            i = 72;
            for(a = 0; a < g; ++a){
                if ((d = e[a]) < 128) {
                    C.push(String.fromCharCode(d));
                }
            }
            r = o = C.length;
            if (o) {
                C.push("-");
            }
            while(r < g){
                l = u;
                for(a = 0; a < g; ++a){
                    if ((d = e[a]) >= t && d < l) {
                        l = d;
                    }
                }
                if (l - t > Math.floor((u - n) / (y = r + 1))) {
                    v("overflow");
                }
                n += (l - t) * y;
                t = l;
                for(a = 0; a < g; ++a){
                    if ((d = e[a]) < t && ++n > u) {
                        v("overflow");
                    }
                    if (d == t) {
                        s = n;
                        for(c = 36; !(s < (f = c <= i ? 1 : c >= i + 26 ? 26 : c - i)); c += 36){
                            _ = s - f;
                            b = 36 - f;
                            C.push(String.fromCharCode(x(f + _ % b, 0)));
                            s = Math.floor(_ / b);
                        }
                        C.push(String.fromCharCode(x(s, 0)));
                        i = w(n, y, r == o);
                        n = 0;
                        ++r;
                    }
                }
                ++n;
                ++t;
            }
            return C.join("");
        }
        l = {
            version: "1.4.1",
            ucs2: {
                decode: m,
                encode: b
            },
            decode: _,
            encode: C,
            toASCII: function(e) {
                return y(e, function(e) {
                    if (c.test(e)) {
                        return `xn--${C(e)}`;
                    }
                    return e;
                });
            },
            toUnicode: function(e) {
                return y(e, function(e) {
                    if (s.test(e)) {
                        return _(e.slice(4).toLowerCase());
                    }
                    return e;
                });
            }
        };
        if ((o = (()=>l)(require, exports, e)) !== undefined) {
            e.exports = o;
        }
    })();
})(require("./module-139.js").default(module), require("./module-69.js").default);
