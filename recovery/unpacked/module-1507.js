let _webpackDefault = {};
let r;
((o)=>{
    "use strict";
    let i;
    let a = {
        precision: 20,
        rounding: 4,
        toExpNeg: -7,
        toExpPos: 21,
        LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    };
    let l = true;
    const u = "[DecimalError] ";
    const s = `${u}Invalid argument: `;
    const c = `${u}Exponent out of range: `;
    const p = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    const h = 10000000;
    const v = Math.floor(1286742750677284.5);
    const g = {};
    function y(_this, t) {
        let n;
        let r;
        let o;
        let i;
        let a;
        let u;
        let s;
        let c;
        const e_constructor = _this.constructor;
        const f_precision = e_constructor.precision;
        if (!_this.s || !t.s) {
            if (!t.s) {
                t = new e_constructor(_this);
            }
            if (l) {
                return S(t, f_precision);
            }
            return t;
        }
        s = _this.d;
        c = t.d;
        a = _this.e;
        o = t.e;
        s = s.slice();
        if (i = a - o) {
            if (i < 0) {
                r = s;
                i = -i;
                u = c.length;
            } else {
                r = c;
                o = a;
                u = s.length;
            }
            if (i > (u = (a = Math.ceil(f_precision / 7)) > u ? a + 1 : u + 1)) {
                i = u;
                r.length = 1;
            }
            r.reverse();
            while(i--){
                r.push(0);
            }
            r.reverse();
        }
        if ((u = s.length) - (i = c.length) < 0) {
            i = u;
            r = c;
            c = s;
            s = r;
        }
        for(n = 0; i;){
            n = (s[--i] = s[i] + c[i] + n) / h | 0;
            s[i] %= h;
        }
        if (n) {
            s.unshift(n);
            ++o;
        }
        for(u = s.length; s[--u] == 0;){
            s.pop();
        }
        t.d = s;
        t.e = o;
        if (l) {
            return S(t, f_precision);
        }
        return t;
    }
    function m(e, t, n) {
        if (e !== ~~e || e < t || e > n) {
            throw Error(s + e);
        }
    }
    function b(e) {
        let t;
        let n;
        let r;
        const o = e.length - 1;
        let i = "";
        let a = e[0];
        if (o > 0) {
            i += a;
            for(t = 1; t < o; t++){
                if (n = 7 - (r = `${e[t]}`).length) {
                    i += O(n);
                }
                i += r;
            }
            if (n = 7 - (r = `${a = e[t]}`).length) {
                i += O(n);
            }
        } else if (a === 0) {
            return "0";
        }
        while(a % 10 == 0){
            a /= 10;
        }
        return i + a;
    }
    g.absoluteValue = g.abs = function() {
        const e = new this.constructor(this);
        if (e.s) {
            e.s = 1;
        }
        return e;
    };
    g.comparedTo = g.cmp = function(e) {
        let t;
        let n;
        let r;
        let o;
        const _this = this;
        e = new _this.constructor(e);
        if (_this.s !== e.s) {
            return _this.s || -e.s;
        }
        if (_this.e !== e.e) {
            if (_this.e > e.e ^ _this.s < 0) {
                return 1;
            }
            return -1;
        }
        t = 0;
        for(n = (r = _this.d.length) < (o = e.d.length) ? r : o; t < n; ++t){
            if (_this.d[t] !== e.d[t]) {
                if (_this.d[t] > e.d[t] ^ _this.s < 0) {
                    return 1;
                }
                return -1;
            }
        }
        if (r === o) {
            return 0;
        }
        if (r > o ^ _this.s < 0) {
            return 1;
        }
        return -1;
    };
    g.decimalPlaces = g.dp = function() {
        const _this = this;
        let t = _this.d.length - 1;
        let n = 7 * (t - _this.e);
        if (t = _this.d[t]) {
            for(; t % 10 == 0; t /= 10){
                n--;
            }
        }
        if (n < 0) {
            return 0;
        }
        return n;
    };
    g.dividedBy = g.div = function(e) {
        return x(this, new this.constructor(e));
    };
    g.dividedToIntegerBy = g.idiv = function(e) {
        const constructor = this.constructor;
        return S(x(this, new constructor(e), 0, 1), constructor.precision);
    };
    g.equals = g.eq = function(e) {
        return !this.cmp(e);
    };
    g.exponent = function() {
        return _(this);
    };
    g.greaterThan = g.gt = function(e) {
        return this.cmp(e) > 0;
    };
    g.greaterThanOrEqualTo = g.gte = function(e) {
        return this.cmp(e) >= 0;
    };
    g.isInteger = g.isint = function() {
        return this.e > this.d.length - 2;
    };
    g.isNegative = g.isneg = function() {
        return this.s < 0;
    };
    g.isPositive = g.ispos = function() {
        return this.s > 0;
    };
    g.isZero = function() {
        return this.s === 0;
    };
    g.lessThan = g.lt = function(e) {
        return this.cmp(e) < 0;
    };
    g.lessThanOrEqualTo = g.lte = function(e) {
        return this.cmp(e) < 1;
    };
    g.logarithm = g.log = function(e) {
        let t;
        const _this = this;
        const constructor = _this.constructor;
        const r_precision = constructor.precision;
        const a = r_precision + 5;
        if (e === undefined) {
            e = new constructor(10);
        } else if ((e = new constructor(e)).s < 1 || e.eq(i)) {
            throw Error(`${u}NaN`);
        }
        if (_this.s < 1) {
            throw Error(u + (_this.s ? "NaN" : "-Infinity"));
        }
        if (_this.eq(i)) {
            return new constructor(0);
        }
        l = false;
        t = x(E(_this, a), E(e, a), a);
        l = true;
        return S(t, r_precision);
    };
    g.minus = g.sub = function(e) {
        const _this = this;
        e = new _this.constructor(e);
        if (_this.s == e.s) {
            return A(_this, e);
        }
        return y(_this, (e.s = -e.s, e));
    };
    g.modulo = g.mod = function(e) {
        let t;
        const _this = this;
        const constructor = _this.constructor;
        const r_precision = constructor.precision;
        if (!(e = new constructor(e)).s) {
            throw Error(`${u}NaN`);
        }
        if (_this.s) {
            l = false;
            t = x(_this, e, 0, 1).times(e);
            l = true;
            return _this.minus(t);
        }
        return S(new constructor(_this), r_precision);
    };
    g.naturalExponential = g.exp = function() {
        return w(this);
    };
    g.naturalLogarithm = g.ln = function() {
        return E(this);
    };
    g.negated = g.neg = function() {
        const e = new this.constructor(this);
        e.s = -e.s || 0;
        return e;
    };
    g.plus = g.add = function(e) {
        const _this = this;
        e = new _this.constructor(e);
        if (_this.s == e.s) {
            return y(_this, e);
        }
        return A(_this, (e.s = -e.s, e));
    };
    g.precision = g.sd = function(e) {
        let t;
        let n;
        let r;
        const _this = this;
        if (e !== undefined && e !== !!e && e !== 1 && e !== 0) {
            throw Error(s + e);
        }
        t = _(_this) + 1;
        n = 7 * (r = _this.d.length - 1) + 1;
        if (r = _this.d[r]) {
            for(; r % 10 == 0; r /= 10){
                n--;
            }
            for(r = _this.d[0]; r >= 10; r /= 10){
                n++;
            }
        }
        if (e && t > n) {
            return t;
        }
        return n;
    };
    g.squareRoot = g.sqrt = function() {
        let e;
        let t;
        let n;
        let r;
        let o;
        let i;
        let a;
        const _this = this;
        const constructor = _this.constructor;
        if (_this.s < 1) {
            if (!_this.s) {
                return new constructor(0);
            }
            throw Error(`${u}NaN`);
        }
        e = _(_this);
        l = false;
        if ((o = Math.sqrt(+_this)) == 0 || o == Infinity) {
            if (((t = b(_this.d)).length + e) % 2 == 0) {
                t += "0";
            }
            o = Math.sqrt(t);
            e = Math.floor((e + 1) / 2) - (e < 0 || e % 2);
            r = new constructor(t = o == Infinity ? `5e${e}` : (t = o.toExponential()).slice(0, t.indexOf("e") + 1) + e);
        } else {
            r = new constructor(o.toString());
        }
        for(o = a = (n = constructor.precision) + 3;;){
            r = (i = r).plus(x(_this, i, a + 2)).times(0.5);
            if (b(i.d).slice(0, a) === (t = b(r.d)).slice(0, a)) {
                t = t.slice(a - 3, a + 1);
                if (o == a && t == "4999") {
                    S(i, n + 1, 0);
                    if (i.times(i).eq(_this)) {
                        r = i;
                        break;
                    }
                } else if (t != "9999") {
                    break;
                }
                a += 4;
            }
        }
        l = true;
        return S(r, n);
    };
    g.times = g.mul = function(e) {
        let t;
        let n;
        let r;
        let o;
        let i;
        let a;
        let u;
        let s;
        let c;
        const _this = this;
        const constructor = _this.constructor;
        let p = _this.d;
        let v = (e = new constructor(e)).d;
        if (!_this.s || !e.s) {
            return new constructor(0);
        }
        e.s *= _this.s;
        n = _this.e + e.e;
        if ((s = p.length) < (c = v.length)) {
            i = p;
            p = v;
            v = i;
            a = s;
            s = c;
            c = a;
        }
        i = [];
        for(r = a = s + c; r--;){
            i.push(0);
        }
        for(r = c; --r >= 0;){
            t = 0;
            for(o = s + r; o > r;){
                u = i[o] + v[r] * p[o - r - 1] + t;
                i[o--] = u % h | 0;
                t = u / h | 0;
            }
            i[o] = (i[o] + t) % h | 0;
        }
        while(!i[--a]){
            i.pop();
        }
        if (t) {
            ++n;
        } else {
            i.shift();
        }
        e.d = i;
        e.e = n;
        if (l) {
            return S(e, constructor.precision);
        }
        return e;
    };
    g.toDecimalPlaces = g.todp = function(e, t) {
        let n = this;
        const n_constructor = n.constructor;
        n = new n_constructor(n);
        if (e === undefined) {
            return n;
        }
        m(e, 0, 1000000000);
        if (t === undefined) {
            t = n_constructor.rounding;
        } else {
            m(t, 0, 8);
        }
        return S(n, e + _(n) + 1, t);
    };
    g.toExponential = function(e, t) {
        let n;
        let r = this;
        const r_constructor = r.constructor;
        if (e === undefined) {
            n = k(r, true);
        } else {
            m(e, 0, 1000000000);
            if (t === undefined) {
                t = r_constructor.rounding;
            } else {
                m(t, 0, 8);
            }
            n = k(r = S(new r_constructor(r), e + 1, t), true, e + 1);
        }
        return n;
    };
    g.toFixed = function(e, t) {
        let n;
        let r;
        const _this = this;
        const constructor = _this.constructor;
        if (e === undefined) {
            return k(_this);
        }
        m(e, 0, 1000000000);
        if (t === undefined) {
            t = constructor.rounding;
        } else {
            m(t, 0, 8);
        }
        n = k((r = S(new constructor(_this), e + _(_this) + 1, t)).abs(), false, e + _(r) + 1);
        if (_this.isneg() && !_this.isZero()) {
            return `-${n}`;
        }
        return n;
    };
    g.toInteger = g.toint = function() {
        const _this = this;
        const constructor = _this.constructor;
        return S(new constructor(_this), _(_this) + 1, constructor.rounding);
    };
    g.toNumber = function() {
        return +this;
    };
    g.toPower = g.pow = function(e) {
        let t;
        let n;
        let r;
        let o;
        let a;
        let s;
        let c = this;
        const c_constructor = c.constructor;
        const p = +(e = new c_constructor(e));
        if (!e.s) {
            return new c_constructor(i);
        }
        if (!(c = new c_constructor(c)).s) {
            if (e.s < 1) {
                throw Error(`${u}Infinity`);
            }
            return c;
        }
        if (c.eq(i)) {
            return c;
        }
        r = c_constructor.precision;
        if (e.eq(i)) {
            return S(c, r);
        }
        s = (t = e.e) >= (n = e.d.length - 1);
        a = c.s;
        if (s) {
            if ((n = p < 0 ? -p : p) <= 9007199254740991) {
                o = new c_constructor(i);
                t = Math.ceil(r / 7 + 4);
                for(l = false; n % 2 && j((o = o.times(c)).d, t), (n = Math.floor(n / 2)) !== 0;){
                    j((c = c.times(c)).d, t);
                }
                l = true;
                if (e.s < 0) {
                    return new c_constructor(i).div(o);
                }
                return S(o, r);
            }
        } else if (a < 0) {
            throw Error(`${u}NaN`);
        }
        a = a < 0 && 1 & e.d[Math.max(t, n)] ? -1 : 1;
        c.s = 1;
        l = false;
        o = e.times(E(c, r + 12));
        l = true;
        o = w(o);
        o.s = a;
        return o;
    };
    g.toPrecision = function(e, t) {
        let n;
        let r;
        let o = this;
        const o_constructor = o.constructor;
        if (e === undefined) {
            r = k(o, (n = _(o)) <= o_constructor.toExpNeg || n >= o_constructor.toExpPos);
        } else {
            m(e, 1, 1000000000);
            if (t === undefined) {
                t = o_constructor.rounding;
            } else {
                m(t, 0, 8);
            }
            r = k(o = S(new o_constructor(o), e, t), e <= (n = _(o)) || n <= o_constructor.toExpNeg, e);
        }
        return r;
    };
    g.toSignificantDigits = g.tosd = function(e, t) {
        const constructor = this.constructor;
        if (e === undefined) {
            e = constructor.precision;
            t = constructor.rounding;
        } else {
            m(e, 1, 1000000000);
            if (t === undefined) {
                t = constructor.rounding;
            } else {
                m(t, 0, 8);
            }
        }
        return S(new constructor(this), e, t);
    };
    g.toString = g.valueOf = g.val = g.toJSON = function() {
        const _this = this;
        const t = _(_this);
        const constructor = _this.constructor;
        return k(_this, t <= constructor.toExpNeg || t >= constructor.toExpPos);
    };
    var x = (()=>{
        function e(e, t) {
            let n;
            let r = 0;
            let e_length = e.length;
            for(e = e.slice(); e_length--;){
                n = e[e_length] * t + r;
                e[e_length] = n % h | 0;
                r = n / h | 0;
            }
            if (r) {
                e.unshift(r);
            }
            return e;
        }
        function t(e, t, n, r) {
            let o;
            let i;
            if (n != r) {
                i = n > r ? 1 : -1;
            } else {
                for(o = i = 0; o < n; o++){
                    if (e[o] != t[o]) {
                        i = e[o] > t[o] ? 1 : -1;
                        break;
                    }
                }
            }
            return i;
        }
        function n(e, t, n) {
            let r = 0;
            while(n--){
                e[n] -= r;
                r = e[n] < t[n] ? 1 : 0;
                e[n] = r * h + e[n] - t[n];
            }
            while(!e[0] && e.length > 1){
                e.shift();
            }
        }
        return function(r, o, i, a) {
            let l;
            let s;
            let c;
            let f;
            let d;
            let p;
            let v;
            let g;
            let y;
            let m;
            let b;
            let x;
            let w;
            let C;
            let O;
            let E;
            let M;
            let A;
            const r_constructor = r.constructor;
            const j = r.s == o.s ? 1 : -1;
            let T = r.d;
            let P = o.d;
            if (!r.s) {
                return new r_constructor(r);
            }
            if (!o.s) {
                throw Error(`${u}Division by zero`);
            }
            s = r.e - o.e;
            M = P.length;
            O = T.length;
            g = (v = new r_constructor(j)).d = [];
            for(c = 0; P[c] == (T[c] || 0);){
                ++c;
            }
            if (P[c] > (T[c] || 0)) {
                --s;
            }
            if ((x = i == null ? i = r_constructor.precision : a ? i + (_(r) - _(o)) + 1 : i) < 0) {
                return new r_constructor(0);
            }
            x = x / 7 + 2 | 0;
            c = 0;
            if (M == 1) {
                f = 0;
                P = P[0];
                x++;
                for(; (c < O || f) && x--; c++){
                    w = f * h + (T[c] || 0);
                    g[c] = w / P | 0;
                    f = w % P | 0;
                }
            } else {
                if ((f = h / (P[0] + 1) | 0) > 1) {
                    P = e(P, f);
                    T = e(T, f);
                    M = P.length;
                    O = T.length;
                }
                C = M;
                for(m = (y = T.slice(0, M)).length; m < M;){
                    y[m++] = 0;
                }
                (A = P.slice()).unshift(0);
                E = P[0];
                if (P[1] >= h / 2) {
                    ++E;
                }
                do {
                    f = 0;
                    if ((l = t(P, y, M, m)) < 0) {
                        b = y[0];
                        if (M != m) {
                            b = b * h + (y[1] || 0);
                        }
                        if ((f = b / E | 0) > 1) {
                            if (f >= h) {
                                f = h - 1;
                            }
                            if ((l = t(d = e(P, f), y, p = d.length, m = y.length)) == 1) {
                                f--;
                                n(d, M < p ? A : P, p);
                            }
                        } else {
                            if (f == 0) {
                                f = 1;
                                l = 1;
                            }
                            d = P.slice();
                        }
                        if ((p = d.length) < m) {
                            d.unshift(0);
                        }
                        n(y, d, m);
                        if (l == -1 && (l = t(P, y, M, m = y.length)) < 1) {
                            f++;
                            n(y, M < m ? A : P, m);
                        }
                        m = y.length;
                    } else if (l === 0) {
                        f++;
                        y = [
                            0
                        ];
                    }
                    g[c++] = f;
                    if (l && y[0]) {
                        y[m++] = T[C] || 0;
                    } else {
                        y = [
                            T[C]
                        ];
                        m = 1;
                    }
                }while ((C++ < O || y[0] !== undefined) && x--)
            }
            if (!g[0]) {
                g.shift();
            }
            v.e = s;
            return S(v, a ? i + _(v) + 1 : i);
        };
    })();
    function w(e, t) {
        let n;
        let r;
        let o;
        let a;
        let u;
        let s = 0;
        let f = 0;
        const e_constructor = e.constructor;
        const p_precision = e_constructor.precision;
        if (_(e) > 16) {
            throw Error(c + _(e));
        }
        if (!e.s) {
            return new e_constructor(i);
        }
        if (t == null) {
            l = false;
            u = p_precision;
        } else {
            u = t;
        }
        for(a = new e_constructor(0.03125); e.abs().gte(0.1);){
            e = e.times(a);
            f += 5;
        }
        u += Math.log(Math.pow(2, f)) / Math.LN10 * 2 + 5 | 0;
        n = r = o = new e_constructor(i);
        for(e_constructor.precision = u;;){
            r = S(r.times(e), u);
            n = n.times(++s);
            if (b((a = o.plus(x(r, n, u))).d).slice(0, u) === b(o.d).slice(0, u)) {
                while(f--){
                    o = S(o.times(o), u);
                }
                e_constructor.precision = p_precision;
                if (t == null) {
                    l = true;
                    return S(o, p_precision);
                }
                return o;
            }
            o = a;
        }
    }
    function _(e) {
        let t = 7 * e.e;
        for(let n = e.d[0]; n >= 10; n /= 10){
            t++;
        }
        return t;
    }
    function C(e, t, n) {
        if (t > e.LN10.sd()) {
            l = true;
            if (n) {
                e.precision = n;
            }
            throw Error(`${u}LN10 precision limit exceeded`);
        }
        return S(new e(e.LN10), t);
    }
    function O(e) {
        let t = "";
        while(e--){
            t += "0";
        }
        return t;
    }
    function E(e, t) {
        let n;
        let r;
        let o;
        let a;
        let s;
        let c;
        let f;
        let d;
        let p;
        let h = 1;
        let v = e;
        const { d: d_1, constructor } = v;
        const constructor_precision = constructor.precision;
        if (v.s < 1) {
            throw Error(u + (v.s ? "NaN" : "-Infinity"));
        }
        if (v.eq(i)) {
            return new constructor(0);
        }
        if (t == null) {
            l = false;
            d = constructor_precision;
        } else {
            d = t;
        }
        if (v.eq(10)) {
            if (t == null) {
                l = true;
            }
            return C(constructor, d);
        }
        d += 10;
        constructor.precision = d;
        r = (n = b(d_1)).charAt(0);
        a = _(v);
        if (!(Math.abs(a) < 1500000000000000)) {
            f = C(constructor, d + 2, constructor_precision).times(`${a}`);
            v = E(new constructor(`${r}.${n.slice(1)}`), d - 10).plus(f);
            constructor.precision = constructor_precision;
            if (t == null) {
                l = true;
                return S(v, constructor_precision);
            }
            return v;
        }
        while(r < 7 && r != 1 || r == 1 && n.charAt(1) > 3){
            r = (n = b((v = v.times(e)).d)).charAt(0);
            h++;
        }
        a = _(v);
        if (r > 1) {
            v = new constructor(`0.${n}`);
            a++;
        } else {
            v = new constructor(`${r}.${n.slice(1)}`);
        }
        c = s = v = x(v.minus(i), v.plus(i), d);
        p = S(v.times(v), d);
        for(o = 3;;){
            s = S(s.times(p), d);
            if (b((f = c.plus(x(s, new constructor(o), d))).d).slice(0, d) === b(c.d).slice(0, d)) {
                c = c.times(2);
                if (a !== 0) {
                    c = c.plus(C(constructor, d + 2, constructor_precision).times(`${a}`));
                }
                c = x(c, new constructor(h), d);
                constructor.precision = constructor_precision;
                if (t == null) {
                    l = true;
                    return S(c, constructor_precision);
                }
                return c;
            }
            c = f;
            o += 2;
        }
    }
    function M(_this, t) {
        let n;
        let r;
        let o;
        if ((n = t.indexOf(".")) > -1) {
            t = t.replace(".", "");
        }
        if ((r = t.search(/e/i)) > 0) {
            if (n < 0) {
                n = r;
            }
            n += +t.slice(r + 1);
            t = t.substring(0, r);
        } else if (n < 0) {
            n = t.length;
        }
        for(r = 0; t.charCodeAt(r) === 48;){
            ++r;
        }
        for(o = t.length; t.charCodeAt(o - 1) === 48;){
            --o;
        }
        if (t = t.slice(r, o)) {
            o -= r;
            n = n - r - 1;
            _this.e = Math.floor(n / 7);
            _this.d = [];
            r = (n + 1) % 7;
            if (n < 0) {
                r += 7;
            }
            if (r < o) {
                if (r) {
                    _this.d.push(+t.slice(0, r));
                }
                for(o -= 7; r < o;){
                    _this.d.push(+t.slice(r, r += 7));
                }
                r = 7 - (t = t.slice(r)).length;
            } else {
                r -= o;
            }
            while(r--){
                t += "0";
            }
            _this.d.push(+t);
            if (l && (_this.e > v || _this.e < -v)) {
                throw Error(c + n);
            }
        } else {
            _this.s = 0;
            _this.e = 0;
            _this.d = [
                0
            ];
        }
        return _this;
    }
    function S(e, t, n) {
        let r;
        let o;
        let i;
        let a;
        let u;
        let s;
        let p;
        let g;
        const y = e.d;
        a = 1;
        for(i = y[0]; i >= 10; i /= 10){
            a++;
        }
        if ((r = t - a) < 0) {
            r += 7;
            o = t;
            p = y[g = 0];
        } else {
            if ((g = Math.ceil((r + 1) / 7)) >= (i = y.length)) {
                return e;
            }
            p = i = y[g];
            for(a = 1; i >= 10; i /= 10){
                a++;
            }
            o = (r %= 7) - 7 + a;
        }
        if (n !== undefined) {
            u = p / (i = Math.pow(10, a - o - 1)) % 10 | 0;
            s = t < 0 || y[g + 1] !== undefined || p % i;
            s = n < 4 ? (u || s) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (n == 4 || s || n == 6 && (r > 0 ? o > 0 ? p / Math.pow(10, a - o) : 0 : y[g - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7));
        }
        if (t < 1 || !y[0]) {
            if (s) {
                i = _(e);
                y.length = 1;
                t = t - i - 1;
                y[0] = Math.pow(10, (7 - t % 7) % 7);
                e.e = Math.floor(-t / 7) || 0;
            } else {
                y.length = 1;
                y[0] = e.e = e.s = 0;
            }
            return e;
        }
        if (r == 0) {
            y.length = g;
            i = 1;
            g--;
        } else {
            y.length = g + 1;
            i = Math.pow(10, 7 - r);
            y[g] = o > 0 ? (p / Math.pow(10, a - o) % Math.pow(10, o) | 0) * i : 0;
        }
        if (s) {
            while(true){
                if (g == 0) {
                    if ((y[0] += i) == h) {
                        y[0] = 1;
                        ++e.e;
                    }
                    break;
                }
                y[g] += i;
                if (y[g] != h) {
                    break;
                }
                y[g--] = 0;
                i = 1;
            }
        }
        for(r = y.length; y[--r] === 0;){
            y.pop();
        }
        if (l && (e.e > v || e.e < -v)) {
            throw Error(c + _(e));
        }
        return e;
    }
    function A(_this, t) {
        let n;
        let r;
        let o;
        let i;
        let a;
        let u;
        let s;
        let c;
        let f;
        let d;
        const e_constructor = _this.constructor;
        const p_precision = e_constructor.precision;
        if (!_this.s || !t.s) {
            if (t.s) {
                t.s = -t.s;
            } else {
                t = new e_constructor(_this);
            }
            if (l) {
                return S(t, p_precision);
            }
            return t;
        }
        s = _this.d;
        d = t.d;
        r = t.e;
        c = _this.e;
        s = s.slice();
        if (a = c - r) {
            if (f = a < 0) {
                n = s;
                a = -a;
                u = d.length;
            } else {
                n = d;
                r = c;
                u = s.length;
            }
            if (a > (o = Math.max(Math.ceil(p_precision / 7), u) + 2)) {
                a = o;
                n.length = 1;
            }
            n.reverse();
            for(o = a; o--;){
                n.push(0);
            }
            n.reverse();
        } else {
            if (f = (o = s.length) < (u = d.length)) {
                u = o;
            }
            for(o = 0; o < u; o++){
                if (s[o] != d[o]) {
                    f = s[o] < d[o];
                    break;
                }
            }
            a = 0;
        }
        if (f) {
            n = s;
            s = d;
            d = n;
            t.s = -t.s;
        }
        u = s.length;
        for(o = d.length - u; o > 0; --o){
            s[u++] = 0;
        }
        for(o = d.length; o > a;){
            if (s[--o] < d[o]) {
                for(i = o; i && s[--i] === 0;){
                    s[i] = h - 1;
                }
                --s[i];
                s[o] += h;
            }
            s[o] -= d[o];
        }
        while(s[--u] === 0){
            s.pop();
        }
        for(; s[0] === 0; s.shift()){
            --r;
        }
        if (s[0]) {
            t.d = s;
            t.e = r;
            if (l) {
                return S(t, p_precision);
            }
            return t;
        }
        return new e_constructor(0);
    }
    function k(e, t, n) {
        let r;
        const o = _(e);
        let i = b(e.d);
        const i_length = i.length;
        if (t) {
            if (n && (r = n - i_length) > 0) {
                i = `${i.charAt(0)}.${i.slice(1)}${O(r)}`;
            } else if (i_length > 1) {
                i = `${i.charAt(0)}.${i.slice(1)}`;
            }
            i = i + (o < 0 ? "e" : "e+") + o;
        } else if (o < 0) {
            i = `0.${O(-o - 1)}${i}`;
            if (n && (r = n - i_length) > 0) {
                i += O(r);
            }
        } else if (o >= i_length) {
            i += O(o + 1 - i_length);
            if (n && (r = n - o - 1) > 0) {
                i = `${i}.${O(r)}`;
            }
        } else {
            if ((r = o + 1) < i_length) {
                i = `${i.slice(0, r)}.${i.slice(r)}`;
            }
            if (n && (r = n - i_length) > 0) {
                if (o + 1 === i_length) {
                    i += ".";
                }
                i += O(r);
            }
        }
        if (e.s < 0) {
            return `-${i}`;
        }
        return i;
    }
    function j(e, t) {
        if (e.length > t) {
            e.length = t;
            return true;
        }
    }
    function T(e) {
        if (!e || typeof e !== "object") {
            throw Error(`${u}Object expected`);
        }
        let t;
        let n;
        let r;
        const o = [
            "precision",
            1,
            1000000000,
            "rounding",
            0,
            8,
            "toExpNeg",
            -Infinity,
            0,
            "toExpPos",
            0,
            Infinity
        ];
        for(t = 0; t < o.length; t += 3){
            if ((r = e[n = o[t]]) !== undefined) {
                if (!(Math.floor(r) === r && r >= o[t + 1] && r <= o[t + 2])) {
                    throw Error(`${s + n}: ${r}`);
                }
                this[n] = r;
            }
        }
        if ((r = e[n = "LN10"]) !== undefined) {
            if (r != Math.LN10) {
                throw Error(`${s + n}: ${r}`);
            }
            this[n] = new this(r);
        }
        return this;
    }
    a = function e(t) {
        let n;
        let r;
        let o;
        function i(e) {
            const _this = this;
            if (!(_this instanceof i)) {
                return new i(e);
            }
            _this.constructor = i;
            if (e instanceof i) {
                _this.s = e.s;
                _this.e = e.e;
                return void (_this.d = (e = e.d) ? e.slice() : e);
            }
            if (typeof e === "number") {
                if (0 * e != 0) {
                    throw Error(s + e);
                }
                if (e > 0) {
                    _this.s = 1;
                } else {
                    if (!(e < 0)) {
                        _this.s = 0;
                        _this.e = 0;
                        return void (_this.d = [
                            0
                        ]);
                    }
                    e = -e;
                    _this.s = -1;
                }
                if (e === ~~e && e < 10000000) {
                    _this.e = 0;
                    return void (_this.d = [
                        e
                    ]);
                }
                return M(_this, e.toString());
            }
            if (typeof e !== "string") {
                throw Error(s + e);
            }
            if (e.charCodeAt(0) === 45) {
                e = e.slice(1);
                _this.s = -1;
            } else {
                _this.s = 1;
            }
            if (!p.test(e)) {
                throw Error(s + e);
            }
            M(_this, e);
        }
        i.prototype = g;
        i.ROUND_UP = 0;
        i.ROUND_DOWN = 1;
        i.ROUND_CEIL = 2;
        i.ROUND_FLOOR = 3;
        i.ROUND_HALF_UP = 4;
        i.ROUND_HALF_DOWN = 5;
        i.ROUND_HALF_EVEN = 6;
        i.ROUND_HALF_CEIL = 7;
        i.ROUND_HALF_FLOOR = 8;
        i.clone = e;
        i.config = i.set = T;
        if (t === undefined) {
            t = {};
        }
        if (t) {
            o = [
                "precision",
                "rounding",
                "toExpNeg",
                "toExpPos",
                "LN10"
            ];
            for(n = 0; n < o.length;){
                if (!t.hasOwnProperty(r = o[n++])) {
                    t[r] = this[r];
                }
            }
        }
        i.config(t);
        return i;
    }(a);
    a.default = a.Decimal = a;
    i = new a(1);
    if ((r = a) !== undefined) {
        _webpackDefault = r;
    }
})();
export default _webpackDefault;
