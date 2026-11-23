let _webpackDefault;
((Math_1)=>{
    const i = /^\s+/;
    const a = /\s+$/;
    let l = 0;
    const { round, min, max, random } = Math_1;
    function d(e, t) {
        t = t || {};
        if ((e = e || "") instanceof d) {
            return e;
        }
        if (!(this instanceof d)) {
            return new d(e, t);
        }
        const n = ((e)=>{
            let t;
            let n;
            let r;
            let l = {
                r: 0,
                g: 0,
                b: 0
            };
            let a_1 = 1;
            let f = null;
            let d = null;
            let p = null;
            let ok = false;
            let v = false;
            if (typeof e === "string") {
                e = ((e)=>{
                    e = e.replace(i, "").replace(a, "").toLowerCase();
                    let t;
                    let n = false;
                    if (j[e]) {
                        e = j[e];
                        n = true;
                    } else if (e == "transparent") {
                        return {
                            r: 0,
                            g: 0,
                            b: 0,
                            a: 0,
                            format: "name"
                        };
                    }
                    if (t = $.rgb.exec(e)) {
                        return {
                            r: t[1],
                            g: t[2],
                            b: t[3]
                        };
                    }
                    if (t = $.rgba.exec(e)) {
                        return {
                            r: t[1],
                            g: t[2],
                            b: t[3],
                            a: t[4]
                        };
                    }
                    if (t = $.hsl.exec(e)) {
                        return {
                            h: t[1],
                            s: t[2],
                            l: t[3]
                        };
                    }
                    if (t = $.hsla.exec(e)) {
                        return {
                            h: t[1],
                            s: t[2],
                            l: t[3],
                            a: t[4]
                        };
                    }
                    if (t = $.hsv.exec(e)) {
                        return {
                            h: t[1],
                            s: t[2],
                            v: t[3]
                        };
                    }
                    if (t = $.hsva.exec(e)) {
                        return {
                            h: t[1],
                            s: t[2],
                            v: t[3],
                            a: t[4]
                        };
                    }
                    if (t = $.hex8.exec(e)) {
                        return {
                            r: N(t[1]),
                            g: N(t[2]),
                            b: N(t[3]),
                            a: H(t[4]),
                            format: n ? "name" : "hex8"
                        };
                    }
                    if (t = $.hex6.exec(e)) {
                        return {
                            r: N(t[1]),
                            g: N(t[2]),
                            b: N(t[3]),
                            format: n ? "name" : "hex"
                        };
                    }
                    if (t = $.hex4.exec(e)) {
                        return {
                            r: N(`${t[1]}${t[1]}`),
                            g: N(`${t[2]}${t[2]}`),
                            b: N(`${t[3]}${t[3]}`),
                            a: H(`${t[4]}${t[4]}`),
                            format: n ? "name" : "hex8"
                        };
                    }
                    return !!(t = $.hex3.exec(e)) && {
                        r: N(`${t[1]}${t[1]}`),
                        g: N(`${t[2]}${t[2]}`),
                        b: N(`${t[3]}${t[3]}`),
                        format: n ? "name" : "hex"
                    };
                })(e);
            }
            if (typeof e === "object") {
                if (U(e.r) && U(e.g) && U(e.b)) {
                    t = e.r;
                    n = e.g;
                    r = e.b;
                    l = {
                        r: 255 * L(t, 255),
                        g: 255 * L(n, 255),
                        b: 255 * L(r, 255)
                    };
                    ok = true;
                    v = String(e.r).substr(-1) === "%" ? "prgb" : "rgb";
                } else if (U(e.h) && U(e.s) && U(e.v)) {
                    f = I(e.s);
                    d = I(e.v);
                    l = ((e, t, n)=>{
                        e = 6 * L(e, 360);
                        t = L(t, 100);
                        n = L(n, 100);
                        const r = Math_1.floor(e);
                        const i = e - r;
                        const a = n * (1 - t);
                        const l = n * (1 - i * t);
                        const u = n * (1 - (1 - i) * t);
                        const s = r % 6;
                        return {
                            r: 255 * [
                                n,
                                l,
                                a,
                                a,
                                u,
                                n
                            ][s],
                            g: 255 * [
                                u,
                                n,
                                n,
                                l,
                                a,
                                a
                            ][s],
                            b: 255 * [
                                a,
                                a,
                                u,
                                n,
                                n,
                                l
                            ][s]
                        };
                    })(e.h, f, d);
                    ok = true;
                    v = "hsv";
                } else if (U(e.h) && U(e.s) && U(e.l)) {
                    f = I(e.s);
                    p = I(e.l);
                    l = ((e, t, n)=>{
                        let r;
                        let o;
                        let i;
                        function a(e, t, n) {
                            if (n < 0) {
                                n += 1;
                            }
                            if (n > 1) {
                                n -= 1;
                            }
                            if (n < 1 / 6) {
                                return e + 6 * (t - e) * n;
                            }
                            if (n < 0.5) {
                                return t;
                            }
                            if (n < 2 / 3) {
                                return e + (t - e) * (2 / 3 - n) * 6;
                            }
                            return e;
                        }
                        e = L(e, 360);
                        t = L(t, 100);
                        n = L(n, 100);
                        if (t === 0) {
                            i = n;
                            o = n;
                            r = n;
                        } else {
                            const l = n < 0.5 ? n * (1 + t) : n + t - n * t;
                            const u = 2 * n - l;
                            r = a(u, l, e + 1 / 3);
                            o = a(u, l, e);
                            i = a(u, l, e - 1 / 3);
                        }
                        return {
                            r: 255 * r,
                            g: 255 * o,
                            b: 255 * i
                        };
                    })(e.h, f, p);
                    ok = true;
                    v = "hsl";
                }
                if (e.hasOwnProperty("a")) {
                    a_1 = e.a;
                }
            }
            a_1 = P(a_1);
            return {
                ok,
                format: e.format || v,
                r: min(255, max(l.r, 0)),
                g: min(255, max(l.g, 0)),
                b: min(255, max(l.b, 0)),
                a: a_1
            };
        })(e);
        this._originalInput = e;
        this._r = n.r;
        this._g = n.g;
        this._b = n.b;
        this._a = n.a;
        this._roundA = round(100 * this._a) / 100;
        this._format = t.format || n.format;
        this._gradientType = t.gradientType;
        if (this._r < 1) {
            this._r = round(this._r);
        }
        if (this._g < 1) {
            this._g = round(this._g);
        }
        if (this._b < 1) {
            this._b = round(this._b);
        }
        this._ok = n.ok;
        this._tc_id = l++;
    }
    function p(e, t, n) {
        e = L(e, 255);
        t = L(t, 255);
        n = L(n, 255);
        let r;
        let o;
        const i = max(e, t, n);
        const a = min(e, t, n);
        const l = (i + a) / 2;
        if (i == a) {
            o = 0;
            r = 0;
        } else {
            const u = i - a;
            o = l > 0.5 ? u / (2 - i - a) : u / (i + a);
            switch(i){
                case e:
                    r = (t - n) / u + (t < n ? 6 : 0);
                    break;
                case t:
                    r = (n - e) / u + 2;
                    break;
                case n:
                    r = (e - t) / u + 4;
            }
            r /= 6;
        }
        return {
            h: r,
            s: o,
            l
        };
    }
    function h(e, t, n) {
        e = L(e, 255);
        t = L(t, 255);
        n = L(n, 255);
        let r;
        let o;
        const i = max(e, t, n);
        const a = min(e, t, n);
        const v_1 = i;
        const u = i - a;
        o = i === 0 ? 0 : u / i;
        if (i == a) {
            r = 0;
        } else {
            switch(i){
                case e:
                    r = (t - n) / u + (t < n ? 6 : 0);
                    break;
                case t:
                    r = (n - e) / u + 2;
                    break;
                case n:
                    r = (e - t) / u + 4;
            }
            r /= 6;
        }
        return {
            h: r,
            s: o,
            v: v_1
        };
    }
    function v(e, t, n, r) {
        const o = [
            D(round(e).toString(16)),
            D(round(t).toString(16)),
            D(round(n).toString(16))
        ];
        if (r && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1)) {
            return o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0);
        }
        return o.join("");
    }
    function g(e, t, n, r) {
        return [
            D(R(r)),
            D(round(e).toString(16)),
            D(round(t).toString(16)),
            D(round(n).toString(16))
        ].join("");
    }
    function y(e, t) {
        t = t === 0 ? 0 : t || 10;
        const n = d(e).toHsl();
        n.s -= t / 100;
        n.s = z(n.s);
        return d(n);
    }
    function m(e, t) {
        t = t === 0 ? 0 : t || 10;
        const n = d(e).toHsl();
        n.s += t / 100;
        n.s = z(n.s);
        return d(n);
    }
    function b(e) {
        return d(e).desaturate(100);
    }
    function x(e, t) {
        t = t === 0 ? 0 : t || 10;
        const n = d(e).toHsl();
        n.l += t / 100;
        n.l = z(n.l);
        return d(n);
    }
    function w(e, t) {
        t = t === 0 ? 0 : t || 10;
        const n = d(e).toRgb();
        n.r = max(0, min(255, n.r - round(-t / 100 * 255)));
        n.g = max(0, min(255, n.g - round(-t / 100 * 255)));
        n.b = max(0, min(255, n.b - round(-t / 100 * 255)));
        return d(n);
    }
    function _(e, t) {
        t = t === 0 ? 0 : t || 10;
        const n = d(e).toHsl();
        n.l -= t / 100;
        n.l = z(n.l);
        return d(n);
    }
    function C(e, t) {
        const n = d(e).toHsl();
        const r = (n.h + t) % 360;
        n.h = r < 0 ? 360 + r : r;
        return d(n);
    }
    function O(e) {
        const t = d(e).toHsl();
        t.h = (t.h + 180) % 360;
        return d(t);
    }
    function E(e) {
        const t = d(e).toHsl();
        const n = t.h;
        return [
            d(e),
            d({
                h: (n + 120) % 360,
                s: t.s,
                l: t.l
            }),
            d({
                h: (n + 240) % 360,
                s: t.s,
                l: t.l
            })
        ];
    }
    function M(e) {
        const t = d(e).toHsl();
        const n = t.h;
        return [
            d(e),
            d({
                h: (n + 90) % 360,
                s: t.s,
                l: t.l
            }),
            d({
                h: (n + 180) % 360,
                s: t.s,
                l: t.l
            }),
            d({
                h: (n + 270) % 360,
                s: t.s,
                l: t.l
            })
        ];
    }
    function S(e) {
        const t = d(e).toHsl();
        const n = t.h;
        return [
            d(e),
            d({
                h: (n + 72) % 360,
                s: t.s,
                l: t.l
            }),
            d({
                h: (n + 216) % 360,
                s: t.s,
                l: t.l
            })
        ];
    }
    function A(e, t, n) {
        t = t || 6;
        n = n || 30;
        const r = d(e).toHsl();
        const o = 360 / n;
        const i = [
            d(e)
        ];
        for(r.h = (r.h - (o * t >> 1) + 720) % 360; --t;){
            r.h = (r.h + o) % 360;
            i.push(d(r));
        }
        return i;
    }
    function k(e, t) {
        t = t || 6;
        const n = d(e).toHsv();
        const { h, s } = n;
        let v_1 = n.v;
        const a = [];
        const l = 1 / t;
        while(t--){
            a.push(d({
                h,
                s,
                v: v_1
            }));
            v_1 = (v_1 + l) % 1;
        }
        return a;
    }
    d.prototype = {
        isDark: function() {
            return this.getBrightness() < 128;
        },
        isLight: function() {
            return !this.isDark();
        },
        isValid: function() {
            return this._ok;
        },
        getOriginalInput: function() {
            return this._originalInput;
        },
        getFormat: function() {
            return this._format;
        },
        getAlpha: function() {
            return this._a;
        },
        getBrightness: function() {
            const e = this.toRgb();
            return (299 * e.r + 587 * e.g + 114 * e.b) / 1000;
        },
        getLuminance: function() {
            let e;
            let t;
            let n;
            const r = this.toRgb();
            e = r.r / 255;
            t = r.g / 255;
            n = r.b / 255;
            return 0.2126 * (e <= 0.03928 ? e / 12.92 : Math_1.pow((e + 0.055) / 1.055, 2.4)) + 0.7152 * (t <= 0.03928 ? t / 12.92 : Math_1.pow((t + 0.055) / 1.055, 2.4)) + 0.0722 * (n <= 0.03928 ? n / 12.92 : Math_1.pow((n + 0.055) / 1.055, 2.4));
        },
        setAlpha: function(e) {
            this._a = P(e);
            this._roundA = round(100 * this._a) / 100;
            return this;
        },
        toHsv: function() {
            const e = h(this._r, this._g, this._b);
            return {
                h: 360 * e.h,
                s: e.s,
                v: e.v,
                a: this._a
            };
        },
        toHsvString: function() {
            const e = h(this._r, this._g, this._b);
            const t = round(360 * e.h);
            const n = round(100 * e.s);
            const r = round(100 * e.v);
            if (this._a == 1) {
                return `hsv(${t}, ${n}%, ${r}%)`;
            }
            return `hsva(${t}, ${n}%, ${r}%, ${this._roundA})`;
        },
        toHsl: function() {
            const e = p(this._r, this._g, this._b);
            return {
                h: 360 * e.h,
                s: e.s,
                l: e.l,
                a: this._a
            };
        },
        toHslString: function() {
            const e = p(this._r, this._g, this._b);
            const t = round(360 * e.h);
            const n = round(100 * e.s);
            const r = round(100 * e.l);
            if (this._a == 1) {
                return `hsl(${t}, ${n}%, ${r}%)`;
            }
            return `hsla(${t}, ${n}%, ${r}%, ${this._roundA})`;
        },
        toHex: function(e) {
            return v(this._r, this._g, this._b, e);
        },
        toHexString: function(e) {
            return `#${this.toHex(e)}`;
        },
        toHex8: function(e) {
            return ((e, t, n, r, o)=>{
                const i = [
                    D(round(e).toString(16)),
                    D(round(t).toString(16)),
                    D(round(n).toString(16)),
                    D(R(r))
                ];
                if (o && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) && i[3].charAt(0) == i[3].charAt(1)) {
                    return i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0);
                }
                return i.join("");
            })(this._r, this._g, this._b, this._a, e);
        },
        toHex8String: function(e) {
            return `#${this.toHex8(e)}`;
        },
        toRgb: function() {
            return {
                r: round(this._r),
                g: round(this._g),
                b: round(this._b),
                a: this._a
            };
        },
        toRgbString: function() {
            if (this._a == 1) {
                return `rgb(${round(this._r)}, ${round(this._g)}, ${round(this._b)})`;
            }
            return `rgba(${round(this._r)}, ${round(this._g)}, ${round(this._b)}, ${this._roundA})`;
        },
        toPercentageRgb: function() {
            return {
                r: `${round(100 * L(this._r, 255))}%`,
                g: `${round(100 * L(this._g, 255))}%`,
                b: `${round(100 * L(this._b, 255))}%`,
                a: this._a
            };
        },
        toPercentageRgbString: function() {
            if (this._a == 1) {
                return `rgb(${round(100 * L(this._r, 255))}%, ${round(100 * L(this._g, 255))}%, ${round(100 * L(this._b, 255))}%)`;
            }
            return `rgba(${round(100 * L(this._r, 255))}%, ${round(100 * L(this._g, 255))}%, ${round(100 * L(this._b, 255))}%, ${this._roundA})`;
        },
        toName: function() {
            if (this._a === 0) {
                return "transparent";
            }
            return !(this._a < 1) && (T[v(this._r, this._g, this._b, true)] || false);
        },
        toFilter: function(e) {
            const t = `#${g(this._r, this._g, this._b, this._a)}`;
            let n = t;
            const r = this._gradientType ? "GradientType = 1, " : "";
            if (e) {
                const o = d(e);
                n = `#${g(o._r, o._g, o._b, o._a)}`;
            }
            return `progid:DXImageTransform.Microsoft.gradient(${r}startColorstr=${t},endColorstr=${n})`;
        },
        toString: function(e) {
            const t = !!e;
            e = e || this._format;
            let n = false;
            const r = this._a < 1 && this._a >= 0;
            if (t || !r || e !== "hex" && e !== "hex6" && e !== "hex3" && e !== "hex4" && e !== "hex8" && e !== "name") {
                if (e === "rgb") {
                    n = this.toRgbString();
                }
                if (e === "prgb") {
                    n = this.toPercentageRgbString();
                }
                if (!(e !== "hex" && e !== "hex6")) {
                    n = this.toHexString();
                }
                if (e === "hex3") {
                    n = this.toHexString(true);
                }
                if (e === "hex4") {
                    n = this.toHex8String(true);
                }
                if (e === "hex8") {
                    n = this.toHex8String();
                }
                if (e === "name") {
                    n = this.toName();
                }
                if (e === "hsl") {
                    n = this.toHslString();
                }
                if (e === "hsv") {
                    n = this.toHsvString();
                }
                return n || this.toHexString();
            }
            if (e === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        },
        clone: function() {
            return d(this.toString());
        },
        _applyModification: function(e, t) {
            const n = e.apply(null, [
                this
            ].concat(Array.prototype.slice.call(t)));
            this._r = n._r;
            this._g = n._g;
            this._b = n._b;
            this.setAlpha(n._a);
            return this;
        },
        lighten: function() {
            return this._applyModification(x, arguments);
        },
        brighten: function() {
            return this._applyModification(w, arguments);
        },
        darken: function() {
            return this._applyModification(_, arguments);
        },
        desaturate: function() {
            return this._applyModification(y, arguments);
        },
        saturate: function() {
            return this._applyModification(m, arguments);
        },
        greyscale: function() {
            return this._applyModification(b, arguments);
        },
        spin: function() {
            return this._applyModification(C, arguments);
        },
        _applyCombination: function(e, t) {
            return e.apply(null, [
                this
            ].concat(Array.prototype.slice.call(t)));
        },
        analogous: function() {
            return this._applyCombination(A, arguments);
        },
        complement: function() {
            return this._applyCombination(O, arguments);
        },
        monochromatic: function() {
            return this._applyCombination(k, arguments);
        },
        splitcomplement: function() {
            return this._applyCombination(S, arguments);
        },
        triad: function() {
            return this._applyCombination(E, arguments);
        },
        tetrad: function() {
            return this._applyCombination(M, arguments);
        }
    };
    d.fromRatio = function(e, t) {
        if (typeof e === "object") {
            const n = {};
            for(const r in e){
                if (e.hasOwnProperty(r)) {
                    n[r] = r === "a" ? e[r] : I(e[r]);
                }
            }
            e = n;
        }
        return d(e, t);
    };
    d.equals = function(e, t) {
        return !(!e || !t) && d(e).toRgbString() == d(t).toRgbString();
    };
    d.random = function() {
        return d.fromRatio({
            r: random(),
            g: random(),
            b: random()
        });
    };
    d.mix = function(e, t, n) {
        n = n === 0 ? 0 : n || 50;
        const r = d(e).toRgb();
        const o = d(t).toRgb();
        const i = n / 100;
        return d({
            r: (o.r - r.r) * i + r.r,
            g: (o.g - r.g) * i + r.g,
            b: (o.b - r.b) * i + r.b,
            a: (o.a - r.a) * i + r.a
        });
    };
    d.readability = function(e, t) {
        const n = d(e);
        const r = d(t);
        return (Math_1.max(n.getLuminance(), r.getLuminance()) + 0.05) / (Math_1.min(n.getLuminance(), r.getLuminance()) + 0.05);
    };
    d.isReadable = function(e, t, n) {
        let r;
        let o;
        const i = d.readability(e, t);
        o = false;
        switch((r = ((e)=>{
            let t;
            let n;
            if ((t = ((e = e || {
                level: "AA",
                size: "small"
            }).level || "AA").toUpperCase()) !== "AA" && t !== "AAA") {
                t = "AA";
            }
            if ((n = (e.size || "small").toLowerCase()) !== "small" && n !== "large") {
                n = "small";
            }
            return {
                level: t,
                size: n
            };
        })(n)).level + r.size){
            case "AAsmall":
            case "AAAlarge":
                o = i >= 4.5;
                break;
            case "AAlarge":
                o = i >= 3;
                break;
            case "AAAsmall":
                o = i >= 7;
        }
        return o;
    };
    d.mostReadable = function(e, t, n) {
        let r;
        let o;
        let i;
        let a;
        let l = null;
        let u = 0;
        o = (n = n || {}).includeFallbackColors;
        i = n.level;
        a = n.size;
        for(let s = 0; s < t.length; s++){
            if ((r = d.readability(e, t[s])) > u) {
                u = r;
                l = d(t[s]);
            }
        }
        if (d.isReadable(e, l, {
            level: i,
            size: a
        }) || !o) {
            return l;
        }
        n.includeFallbackColors = false;
        return d.mostReadable(e, [
            "#fff",
            "#000"
        ], n);
    };
    var j = d.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
    };
    var T = d.hexNames = ((e)=>{
        const t = {};
        for(const n in e){
            if (e.hasOwnProperty(n)) {
                t[e[n]] = n;
            }
        }
        return t;
    })(j);
    function P(e) {
        e = parseFloat(e);
        if (isNaN(e) || e < 0 || e > 1) {
            e = 1;
        }
        return e;
    }
    function L(e, t) {
        if (((e)=>typeof e === "string" && e.indexOf(".") != -1 && parseFloat(e) === 1)(e)) {
            e = "100%";
        }
        const n = ((e)=>typeof e === "string" && e.indexOf("%") != -1)(e);
        e = min(t, max(0, parseFloat(e)));
        if (n) {
            e = parseInt(e * t, 10) / 100;
        }
        if (Math_1.abs(e - t) < 0.000001) {
            return 1;
        }
        return e % t / parseFloat(t);
    }
    function z(e) {
        return min(1, max(0, e));
    }
    function N(e) {
        return parseInt(e, 16);
    }
    function D(e) {
        if (e.length == 1) {
            return `0${e}`;
        }
        return `${e}`;
    }
    function I(e) {
        if (e <= 1) {
            e = `${100 * e}%`;
        }
        return e;
    }
    function R(e) {
        return Math_1.round(255 * parseFloat(e)).toString(16);
    }
    function H(e) {
        return N(e) / 255;
    }
    let B;
    let F;
    let V;
    F = `[\\s|\\(]+(${B = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)"})[,|\\s]+(${B})[,|\\s]+(${B})\\s*\\)?`;
    V = `[\\s|\\(]+(${B})[,|\\s]+(${B})[,|\\s]+(${B})[,|\\s]+(${B})\\s*\\)?`;
    var $ = {
        CSS_UNIT: new RegExp(B),
        rgb: new RegExp(`rgb${F}`),
        rgba: new RegExp(`rgba${V}`),
        hsl: new RegExp(`hsl${F}`),
        hsla: new RegExp(`hsla${V}`),
        hsv: new RegExp(`hsv${F}`),
        hsva: new RegExp(`hsva${V}`),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
    function U(e) {
        return !!$.CSS_UNIT.exec(e);
    }
    _webpackDefault = d;
})(Math);
export default _webpackDefault;
