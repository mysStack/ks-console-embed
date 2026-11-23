let _webpackDefault = {};
let r;
((o)=>{
    "use strict";
    let i;
    const a = "[big.js] ";
    const l = `${a}Invalid `;
    const u = `${l}decimal places`;
    const s = {};
    const c = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    function f(e, t, n, r) {
        const o = e.c;
        let i = e.e + t + 1;
        if (i < o.length) {
            if (n === 1) {
                r = o[i] >= 5;
            } else if (n === 2) {
                r = o[i] > 5 || o[i] == 5 && (r || i < 0 || o[i + 1] !== undefined || 1 & o[i - 1]);
            } else if (n === 3) {
                r = r || !!o[0];
            } else {
                r = false;
                if (n !== 0) {
                    throw Error("[big.js] Invalid rounding mode");
                }
            }
            if (i < 1) {
                o.length = 1;
                if (r) {
                    e.e = -t;
                    o[0] = 1;
                } else {
                    o[0] = e.e = 0;
                }
            } else {
                o.length = i--;
                if (r) {
                    while(++o[i] > 9){
                        o[i] = 0;
                        if (!i--) {
                            ++e.e;
                            o.unshift(1);
                        }
                    }
                }
                for(i = o.length; !o[--i];){
                    o.pop();
                }
            }
        } else if (n < 0 || n > 3 || n !== ~~n) {
            throw Error("[big.js] Invalid rounding mode");
        }
        return e;
    }
    function d(e, t, n, r) {
        let o;
        let i;
        const e_constructor = e.constructor;
        const s = !e.c[0];
        if (n !== undefined) {
            if (n !== ~~n || n < (t == 3) || n > 1000000) {
                throw Error(t == 3 ? `${l}precision` : u);
            }
            n = r - (e = new e_constructor(e)).e;
            if (e.c.length > ++r) {
                f(e, n, e_constructor.RM);
            }
            if (t == 2) {
                r = e.e + n + 1;
            }
            while(e.c.length < r){
                e.c.push(0);
            }
        }
        o = e.e;
        n = (i = e.c.join("")).length;
        if (t != 2 && (t == 1 || t == 3 && r <= o || o <= e_constructor.NE || o >= e_constructor.PE)) {
            i = i.charAt(0) + (n > 1 ? `.${i.slice(1)}` : "") + (o < 0 ? "e" : "e+") + o;
        } else if (o < 0) {
            while(++o){
                i = `0${i}`;
            }
            i = `0.${i}`;
        } else if (o > 0) {
            if (++o > n) {
                for(o -= n; o--;){
                    i += "0";
                }
            } else {
                if (o < n) {
                    i = `${i.slice(0, o)}.${i.slice(o)}`;
                }
            }
        } else {
            if (n > 1) {
                i = `${i.charAt(0)}.${i.slice(1)}`;
            }
        }
        if (e.s < 0 && (!s || t == 4)) {
            return `-${i}`;
        }
        return i;
    }
    s.abs = function() {
        const e = new this.constructor(this);
        e.s = 1;
        return e;
    };
    s.cmp = function(e) {
        let t;
        const _this = this;
        const r = _this.c;
        const o = (e = new _this.constructor(e)).c;
        let i = _this.s;
        let a = e.s;
        let l = _this.e;
        let u = e.e;
        if (!r[0] || !o[0]) {
            if (r[0]) {
                return i;
            }
            if (o[0]) {
                return -a;
            }
            return 0;
        }
        if (i != a) {
            return i;
        }
        t = i < 0;
        if (l != u) {
            if (l > u ^ t) {
                return 1;
            }
            return -1;
        }
        a = (l = r.length) < (u = o.length) ? l : u;
        for(i = -1; ++i < a;){
            if (r[i] != o[i]) {
                if (r[i] > o[i] ^ t) {
                    return 1;
                }
                return -1;
            }
        }
        if (l == u) {
            return 0;
        }
        if (l > u ^ t) {
            return 1;
        }
        return -1;
    };
    s.div = function(e) {
        const _this = this;
        const { constructor, c: c_1 } = _this;
        const o = (e = new constructor(e)).c;
        let i = _this.s == e.s ? 1 : -1;
        const constructor_DP = constructor.DP;
        if (constructor_DP !== ~~constructor_DP || constructor_DP < 0 || constructor_DP > 1000000) {
            throw Error(u);
        }
        if (!o[0]) {
            throw Error("[big.js] Division by zero");
        }
        if (!c_1[0]) {
            return new constructor(0 * i);
        }
        let l;
        let s;
        let c;
        let d;
        let p;
        const h = o.slice();
        let v = l = o.length;
        const c_1_length = c_1.length;
        let y = c_1.slice(0, l);
        let y_length = y.length;
        const b = e;
        const x = b.c = [];
        let w = 0;
        const _ = constructor_DP + (b.e = _this.e - e.e) + 1;
        b.s = i;
        i = _ < 0 ? 0 : _;
        h.unshift(0);
        while(y_length++ < l){
            y.push(0);
        }
        do {
            for(c = 0; c < 10; c++){
                if (l != (y_length = y.length)) {
                    d = l > y_length ? 1 : -1;
                } else {
                    p = -1;
                    for(d = 0; ++p < l;){
                        if (o[p] != y[p]) {
                            d = o[p] > y[p] ? 1 : -1;
                            break;
                        }
                    }
                }
                if (!(d < 0)) {
                    break;
                }
                for(s = y_length == l ? o : h; y_length;){
                    if (y[--y_length] < s[y_length]) {
                        for(p = y_length; p && !y[--p];){
                            y[p] = 9;
                        }
                        --y[p];
                        y[y_length] += 10;
                    }
                    y[y_length] -= s[y_length];
                }
                while(!y[0]){
                    y.shift();
                }
            }
            x[w++] = d ? c : ++c;
            if (y[0] && d) {
                y[y_length] = c_1[v] || 0;
            } else {
                y = [
                    c_1[v]
                ];
            }
        }while ((v++ < c_1_length || y[0] !== undefined) && i--)
        if (!(x[0] || w == 1)) {
            x.shift();
            b.e--;
        }
        if (w > _) {
            f(b, constructor_DP, constructor.RM, y[0] !== undefined);
        }
        return b;
    };
    s.eq = function(e) {
        return !this.cmp(e);
    };
    s.gt = function(e) {
        return this.cmp(e) > 0;
    };
    s.gte = function(e) {
        return this.cmp(e) > -1;
    };
    s.lt = function(e) {
        return this.cmp(e) < 0;
    };
    s.lte = function(e) {
        return this.cmp(e) < 1;
    };
    s.minus = s.sub = function(e) {
        let t;
        let n;
        let r;
        let o;
        const _this = this;
        const constructor = _this.constructor;
        let l = _this.s;
        let u = (e = new constructor(e)).s;
        if (l != u) {
            e.s = -u;
            return _this.plus(e);
        }
        let s = _this.c.slice();
        const c = _this.e;
        let f = e.c;
        let d = e.e;
        if (!s[0] || !f[0]) {
            if (f[0]) {
                e.s = -u;
                return e;
            }
            return new constructor(s[0] ? _this : 0);
        }
        if (l = c - d) {
            if (o = l < 0) {
                l = -l;
                r = s;
            } else {
                d = c;
                r = f;
            }
            r.reverse();
            for(u = l; u--;){
                r.push(0);
            }
            r.reverse();
        } else {
            n = ((o = s.length < f.length) ? s : f).length;
            for(l = u = 0; u < n; u++){
                if (s[u] != f[u]) {
                    o = s[u] < f[u];
                    break;
                }
            }
        }
        if (o) {
            r = s;
            s = f;
            f = r;
            e.s = -e.s;
        }
        if ((u = (n = f.length) - (t = s.length)) > 0) {
            while(u--){
                s[t++] = 0;
            }
        }
        for(u = t; n > l;){
            if (s[--n] < f[n]) {
                for(t = n; t && !s[--t];){
                    s[t] = 9;
                }
                --s[t];
                s[n] += 10;
            }
            s[n] -= f[n];
        }
        while(s[--u] === 0){
            s.pop();
        }
        while(s[0] === 0){
            s.shift();
            --d;
        }
        if (!s[0]) {
            e.s = 1;
            s = [
                d = 0
            ];
        }
        e.c = s;
        e.e = d;
        return e;
    };
    s.mod = function(e) {
        let t;
        let n = this;
        const n_constructor = n.constructor;
        let o = n.s;
        let i = (e = new n_constructor(e)).s;
        if (!e.c[0]) {
            throw Error("[big.js] Division by zero");
        }
        n.s = e.s = 1;
        t = e.cmp(n) == 1;
        n.s = o;
        e.s = i;
        if (t) {
            return new n_constructor(n);
        }
        o = n_constructor.DP;
        i = n_constructor.RM;
        n_constructor.DP = n_constructor.RM = 0;
        n = n.div(e);
        n_constructor.DP = o;
        n_constructor.RM = i;
        return this.minus(n.times(e));
    };
    s.plus = s.add = function(e) {
        let t;
        const _this = this;
        const constructor = _this.constructor;
        let o = _this.s;
        let i = (e = new constructor(e)).s;
        if (o != i) {
            e.s = -i;
            return _this.minus(e);
        }
        const a = _this.e;
        let l = _this.c;
        let u = e.e;
        let s = e.c;
        if (!l[0] || !s[0]) {
            if (s[0]) {
                return e;
            }
            return new constructor(l[0] ? _this : 0 * o);
        }
        l = l.slice();
        if (o = a - u) {
            if (o > 0) {
                u = a;
                t = s;
            } else {
                o = -o;
                t = l;
            }
            t.reverse();
            while(o--){
                t.push(0);
            }
            t.reverse();
        }
        if (l.length - s.length < 0) {
            t = s;
            s = l;
            l = t;
        }
        o = s.length;
        for(i = 0; o; l[o] %= 10){
            i = (l[--o] = l[o] + s[o] + i) / 10 | 0;
        }
        if (i) {
            l.unshift(i);
            ++u;
        }
        for(o = l.length; l[--o] === 0;){
            l.pop();
        }
        e.c = l;
        e.e = u;
        return e;
    };
    s.pow = function(e) {
        let t = this;
        const n = new t.constructor(1);
        let r = n;
        const o = e < 0;
        if (e !== ~~e || e < -1000000 || e > 1000000) {
            throw Error(`${l}exponent`);
        }
        for(o && (e = -e); 1 & e && (r = r.times(t)), e >>= 1;){
            t = t.times(t);
        }
        if (o) {
            return n.div(r);
        }
        return r;
    };
    s.round = function(e, t) {
        const constructor = this.constructor;
        if (e === undefined) {
            e = 0;
        } else if (e !== ~~e || e < -1000000 || e > 1000000) {
            throw Error(u);
        }
        return f(new constructor(this), e, t === undefined ? constructor.RM : t);
    };
    s.sqrt = function() {
        let e;
        let t;
        let n;
        const _this = this;
        const constructor = _this.constructor;
        let i = _this.s;
        let l = _this.e;
        const u = new constructor(0.5);
        if (!_this.c[0]) {
            return new constructor(_this);
        }
        if (i < 0) {
            throw Error(`${a}No square root`);
        }
        if ((i = Math.sqrt(`${_this}`)) === 0 || i === Infinity) {
            if (!((t = _this.c.join("")).length + l & 1)) {
                t += "0";
            }
            l = ((l + 1) / 2 | 0) - (l < 0 || 1 & l);
            e = new constructor(((i = Math.sqrt(t)) == Infinity ? "1e" : (i = i.toExponential()).slice(0, i.indexOf("e") + 1)) + l);
        } else {
            e = new constructor(i);
        }
        l = e.e + (constructor.DP += 4);
        do {
            n = e;
            e = u.times(n.plus(_this.div(n)));
        }while (n.c.slice(0, l).join("") !== e.c.slice(0, l).join(""))
        return f(e, constructor.DP -= 4, constructor.RM);
    };
    s.times = s.mul = function(e) {
        let t;
        const _this = this;
        const constructor = _this.constructor;
        let o = _this.c;
        let i = (e = new constructor(e)).c;
        let o_length = o.length;
        let i_length = i.length;
        let u = _this.e;
        let s = e.e;
        e.s = _this.s == e.s ? 1 : -1;
        if (!o[0] || !i[0]) {
            return new constructor(0 * e.s);
        }
        e.e = u + s;
        if (o_length < i_length) {
            t = o;
            o = i;
            i = t;
            s = o_length;
            o_length = i_length;
            i_length = s;
        }
        for(t = new Array(s = o_length + i_length); s--;){
            t[s] = 0;
        }
        for(u = i_length; u--;){
            i_length = 0;
            for(s = o_length + u; s > u;){
                i_length = t[s] + i[u] * o[s - u - 1] + i_length;
                t[s--] = i_length % 10;
                i_length = i_length / 10 | 0;
            }
            t[s] = (t[s] + i_length) % 10;
        }
        if (i_length) {
            ++e.e;
        } else {
            t.shift();
        }
        for(u = t.length; !t[--u];){
            t.pop();
        }
        e.c = t;
        return e;
    };
    s.toExponential = function(e) {
        return d(this, 1, e, e);
    };
    s.toFixed = function(e) {
        return d(this, 2, e, this.e + e);
    };
    s.toPrecision = function(e) {
        return d(this, 3, e, e - 1);
    };
    s.toString = function() {
        return d(this);
    };
    s.valueOf = s.toJSON = function() {
        return d(this, 4);
    };
    i = function e() {
        function t(n) {
            const _this = this;
            if (!(_this instanceof t)) {
                if (n === undefined) {
                    return e();
                }
                return new t(n);
            }
            if (n instanceof t) {
                _this.s = n.s;
                _this.e = n.e;
                _this.c = n.c.slice();
            } else {
                ((_this_1, t)=>{
                    let n;
                    let r;
                    let o;
                    if (t === 0 && 1 / t < 0) {
                        t = "-0";
                    } else if (!c.test(t += "")) {
                        throw Error(`${l}number`);
                    }
                    _this_1.s = t.charAt(0) == "-" ? (t = t.slice(1), -1) : 1;
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
                    o = t.length;
                    for(r = 0; r < o && t.charAt(r) == "0";){
                        ++r;
                    }
                    if (r == o) {
                        _this_1.c = [
                            _this_1.e = 0
                        ];
                    } else {
                        while(o > 0 && t.charAt(--o) == "0");
                        _this_1.e = n - r - 1;
                        _this_1.c = [];
                        for(n = 0; r <= o;){
                            _this_1.c[n++] = +t.charAt(r++);
                        }
                    }
                })(_this, n);
            }
            _this.constructor = t;
        }
        t.prototype = s;
        t.DP = 20;
        t.RM = 1;
        t.NE = -7;
        t.PE = 21;
        t.version = "5.2.2";
        return t;
    }();
    i.default = i.Big = i;
    if ((r = i) !== undefined) {
        _webpackDefault = r;
    }
})();
export default _webpackDefault;
