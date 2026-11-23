module.exports = (()=>{
    "use strict";
    let t;
    let r;
    function o() {
        return t.apply(null, arguments);
    }
    function a(e) {
        return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
    }
    function i(e) {
        return e != null && Object.prototype.toString.call(e) === "[object Object]";
    }
    function l(e) {
        return e === undefined;
    }
    function s(e) {
        return typeof e === "number" || Object.prototype.toString.call(e) === "[object Number]";
    }
    function u(e) {
        return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    function c(e, t) {
        let n;
        const r = [];
        for(n = 0; n < e.length; ++n){
            r.push(t(e[n], n));
        }
        return r;
    }
    function f(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }
    function d(e, t) {
        for(const n in t){
            if (f(t, n)) {
                e[n] = t[n];
            }
        }
        if (f(t, "toString")) {
            e.toString = t.toString;
        }
        if (f(t, "valueOf")) {
            e.valueOf = t.valueOf;
        }
        return e;
    }
    function p(e, t, n, r) {
        return bt(e, t, n, r, true).utc();
    }
    function h(e) {
        if (e._pf == null) {
            e._pf = {
                empty: false,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: false,
                invalidMonth: null,
                invalidFormat: false,
                userInvalidated: false,
                iso: false,
                parsedDateParts: [],
                meridiem: null,
                rfc2822: false,
                weekdayMismatch: false
            };
        }
        return e._pf;
    }
    function v(e) {
        if (e._isValid == null) {
            const t = h(e);
            const n = r.call(t.parsedDateParts, function(e) {
                return e != null;
            });
            let o = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
            if (e._strict) {
                o = o && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === undefined;
            }
            if (Object.isFrozen != null && Object.isFrozen(e)) {
                return o;
            }
            e._isValid = o;
        }
        return e._isValid;
    }
    function m(e) {
        const t = p(NaN);
        if (e != null) {
            d(h(t), e);
        } else {
            h(t).userInvalidated = true;
        }
        return t;
    }
    r = Array.prototype.some ? Array.prototype.some : function(e) {
        const t = Object(this);
        for(let n = t.length >>> 0, r = 0; r < n; r++){
            if (r in t && e.call(this, t[r], r, t)) {
                return true;
            }
        }
        return false;
    };
    const g = o.momentProperties = [];
    function y(e, t) {
        let n;
        let r;
        let o;
        if (!l(t._isAMomentObject)) {
            e._isAMomentObject = t._isAMomentObject;
        }
        if (!l(t._i)) {
            e._i = t._i;
        }
        if (!l(t._f)) {
            e._f = t._f;
        }
        if (!l(t._l)) {
            e._l = t._l;
        }
        if (!l(t._strict)) {
            e._strict = t._strict;
        }
        if (!l(t._tzm)) {
            e._tzm = t._tzm;
        }
        if (!l(t._isUTC)) {
            e._isUTC = t._isUTC;
        }
        if (!l(t._offset)) {
            e._offset = t._offset;
        }
        if (!l(t._pf)) {
            e._pf = h(t);
        }
        if (!l(t._locale)) {
            e._locale = t._locale;
        }
        if (g.length > 0) {
            for(n = 0; n < g.length; n++){
                if (!l(o = t[r = g[n]])) {
                    e[r] = o;
                }
            }
        }
        return e;
    }
    let b = false;
    function C(e) {
        y(this, e);
        this._d = new Date(e._d != null ? e._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        if (b === false) {
            b = true;
            o.updateOffset(this);
            b = false;
        }
    }
    function w(e) {
        return e instanceof C || e != null && e._isAMomentObject != null;
    }
    function _(e) {
        if (e < 0) {
            return Math.ceil(e) || 0;
        }
        return Math.floor(e);
    }
    function x(e) {
        const t = +e;
        let n = 0;
        if (t !== 0 && isFinite(t)) {
            n = _(t);
        }
        return n;
    }
    function M(e, t, n) {
        let r;
        const o = Math.min(e.length, t.length);
        const a = Math.abs(e.length - t.length);
        let i = 0;
        for(r = 0; r < o; r++){
            if (n && e[r] !== t[r] || !n && x(e[r]) !== x(t[r])) {
                i++;
            }
        }
        return i + a;
    }
    function E(e) {
        if (o.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
            console.warn(`Deprecation warning: ${e}`);
        }
    }
    function k(e, t) {
        let n = true;
        return d(function() {
            if (o.deprecationHandler != null) {
                o.deprecationHandler(null, e);
            }
            if (n) {
                let r;
                const a = [];
                for(let i = 0; i < arguments.length; i++){
                    r = "";
                    if (typeof arguments[i] === "object") {
                        r += `
[${i}] `;
                        for(const l in arguments[0]){
                            r += `${l}: ${arguments[0][l]}, `;
                        }
                        r = r.slice(0, -2);
                    } else {
                        r = arguments[i];
                    }
                    a.push(r);
                }
                E(`${e}
Arguments: ${Array.prototype.slice.call(a).join("")}
${(new Error).stack}`);
                n = false;
            }
            return t.apply(this, arguments);
        }, t);
    }
    let O;
    const S = {};
    function L(e, t) {
        if (o.deprecationHandler != null) {
            o.deprecationHandler(e, t);
        }
        if (!S[e]) {
            E(t);
            S[e] = true;
        }
    }
    function z(e) {
        return e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
    }
    function D(e, t) {
        let n;
        const r = d({}, e);
        for(n in t){
            if (f(t, n)) {
                if (i(e[n]) && i(t[n])) {
                    r[n] = {};
                    d(r[n], e[n]);
                    d(r[n], t[n]);
                } else if (t[n] != null) {
                    r[n] = t[n];
                } else {
                    delete r[n];
                }
            }
        }
        for(n in e){
            if (f(e, n) && !f(t, n) && i(e[n])) {
                r[n] = d({}, r[n]);
            }
        }
        return r;
    }
    function T(e) {
        if (e != null) {
            this.set(e);
        }
    }
    o.suppressDeprecationWarnings = false;
    o.deprecationHandler = null;
    O = Object.keys ? Object.keys : function(e) {
        let t;
        const n = [];
        for(t in e){
            if (f(e, t)) {
                n.push(t);
            }
        }
        return n;
    };
    const V = {};
    function H(e, t) {
        const n = e.toLowerCase();
        V[n] = V[`${n}s`] = V[t] = e;
    }
    function P(e) {
        if (typeof e === "string") {
            return V[e] || V[e.toLowerCase()];
        }
    }
    function A(e) {
        let t;
        let n;
        const r = {};
        for(n in e){
            if (f(e, n) && (t = P(n))) {
                r[t] = e[n];
            }
        }
        return r;
    }
    const R = {};
    function j(e, t) {
        R[e] = t;
    }
    function N(e, t, n) {
        const r = `${Math.abs(e)}`;
        const o = t - r.length;
        return (e >= 0 ? n ? "+" : "" : "-") + (10 ** Math.max(0, o)).toString().substr(1) + r;
    }
    const I = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
    const B = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    const U = {};
    const F = {};
    function Z(e, t, n, r) {
        let o = r;
        if (typeof r === "string") {
            o = function() {
                return this[r]();
            };
        }
        if (e) {
            F[e] = o;
        }
        if (t) {
            F[t[0]] = function() {
                return N(o.apply(this, arguments), t[1], t[2]);
            };
        }
        if (n) {
            F[n] = function() {
                return this.localeData().ordinal(o.apply(this, arguments), e);
            };
        }
    }
    function q(e, t) {
        if (e.isValid()) {
            t = W(t, e.localeData());
            U[t] = U[t] || ((e)=>{
                let t;
                let n;
                let r;
                const o = e.match(I);
                t = 0;
                for(n = o.length; t < n; t++){
                    if (F[o[t]]) {
                        o[t] = F[o[t]];
                    } else {
                        o[t] = (r = o[t]).match(/\[[\s\S]/) ? r.replace(/^\[|\]$/g, "") : r.replace(/\\/g, "");
                    }
                }
                return function(t) {
                    let r;
                    let a = "";
                    for(r = 0; r < n; r++){
                        a += z(o[r]) ? o[r].call(t, e) : o[r];
                    }
                    return a;
                };
            })(t);
            return U[t](e);
        }
        return e.localeData().invalidDate();
    }
    function W(e, t) {
        let n = 5;
        function r(e) {
            return t.longDateFormat(e) || e;
        }
        for(B.lastIndex = 0; n >= 0 && B.test(e);){
            e = e.replace(B, r);
            B.lastIndex = 0;
            n -= 1;
        }
        return e;
    }
    const G = /\d/;
    const Y = /\d\d/;
    const $ = /\d{3}/;
    const K = /\d{4}/;
    const J = /[+-]?\d{6}/;
    const Q = /\d\d?/;
    const X = /\d\d\d\d?/;
    const ee = /\d\d\d\d\d\d?/;
    const te = /\d{1,3}/;
    const ne = /\d{1,4}/;
    const re = /[+-]?\d{1,6}/;
    const oe = /\d+/;
    const ae = /[+-]?\d+/;
    const ie = /Z|[+-]\d\d:?\d\d/gi;
    const le = /Z|[+-]\d\d(?::?\d\d)?/gi;
    const se = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
    const ue = {};
    function ce(e, t, n) {
        ue[e] = z(t) ? t : function(e, r) {
            if (e && n) {
                return n;
            }
            return t;
        };
    }
    function fe(e, t) {
        if (f(ue, e)) {
            return ue[e](t._strict, t._locale);
        }
        return new RegExp(de(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (e, t, n, r, o)=>t || n || r || o)));
    }
    function de(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    const pe = {};
    function he(e, t) {
        let n;
        let r = t;
        if (typeof e === "string") {
            e = [
                e
            ];
        }
        if (s(t)) {
            r = function(e, n) {
                n[t] = x(e);
            };
        }
        for(n = 0; n < e.length; n++){
            pe[e[n]] = r;
        }
    }
    function ve(e, t) {
        he(e, function(e, n, r, o) {
            r._w = r._w || {};
            t(e, r._w, r, o);
        });
    }
    function me(e) {
        if (ge(e)) {
            return 366;
        }
        return 365;
    }
    function ge(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
    }
    Z("Y", 0, 0, function() {
        const e = this.year();
        if (e <= 9999) {
            return `${e}`;
        }
        return `+${e}`;
    });
    Z(0, [
        "YY",
        2
    ], 0, function() {
        return this.year() % 100;
    });
    Z(0, [
        "YYYY",
        4
    ], 0, "year");
    Z(0, [
        "YYYYY",
        5
    ], 0, "year");
    Z(0, [
        "YYYYYY",
        6,
        true
    ], 0, "year");
    H("year", "y");
    j("year", 1);
    ce("Y", ae);
    ce("YY", Q, Y);
    ce("YYYY", ne, K);
    ce("YYYYY", re, J);
    ce("YYYYYY", re, J);
    he([
        "YYYYY",
        "YYYYYY"
    ], 0);
    he("YYYY", function(e, t) {
        t[0] = e.length === 2 ? o.parseTwoDigitYear(e) : x(e);
    });
    he("YY", function(e, t) {
        t[0] = o.parseTwoDigitYear(e);
    });
    he("Y", function(e, t) {
        t[0] = parseInt(e, 10);
    });
    o.parseTwoDigitYear = function(e) {
        return x(e) + (x(e) > 68 ? 1900 : 2000);
    };
    let ye;
    const be = Ce("FullYear", true);
    function Ce(e, t) {
        return function(n) {
            if (n != null) {
                _e(this, e, n);
                o.updateOffset(this, t);
                return this;
            }
            return we(this, e);
        };
    }
    function we(e, t) {
        if (e.isValid()) {
            return e._d[`get${e._isUTC ? "UTC" : ""}${t}`]();
        }
        return NaN;
    }
    function _e(e, t, n) {
        if (e.isValid() && !isNaN(n)) {
            if (t === "FullYear" && ge(e.year()) && e.month() === 1 && e.date() === 29) {
                e._d[`set${e._isUTC ? "UTC" : ""}${t}`](n, e.month(), xe(n, e.month()));
            } else {
                e._d[`set${e._isUTC ? "UTC" : ""}${t}`](n);
            }
        }
    }
    function xe(e, t) {
        if (isNaN(e) || isNaN(t)) {
            return NaN;
        }
        const n = (t % 12 + 12) % 12;
        e += (t - n) / 12;
        if (n === 1) {
            if (ge(e)) {
                return 29;
            }
            return 28;
        }
        return 31 - n % 7 % 2;
    }
    ye = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
        let t;
        for(t = 0; t < this.length; ++t){
            if (this[t] === e) {
                return t;
            }
        }
        return -1;
    };
    Z("M", [
        "MM",
        2
    ], "Mo", function() {
        return this.month() + 1;
    });
    Z("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e);
    });
    Z("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e);
    });
    H("month", "M");
    j("month", 8);
    ce("M", Q);
    ce("MM", Q, Y);
    ce("MMM", function(e, t) {
        return t.monthsShortRegex(e);
    });
    ce("MMMM", function(e, t) {
        return t.monthsRegex(e);
    });
    he([
        "M",
        "MM"
    ], function(e, t) {
        t[1] = x(e) - 1;
    });
    he([
        "MMM",
        "MMMM"
    ], function(e, t, n, r) {
        const o = n._locale.monthsParse(e, r, n._strict);
        if (o != null) {
            t[1] = o;
        } else {
            h(n).invalidMonth = e;
        }
    });
    const Me = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    const months = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
    const monthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
    function Oe(e, t) {
        let n;
        if (!e.isValid()) {
            return e;
        }
        if (typeof t === "string") {
            if (/^\d+$/.test(t)) {
                t = x(t);
            } else if (!s(t = e.localeData().monthsParse(t))) {
                return e;
            }
        }
        n = Math.min(e.date(), xe(e.year(), t));
        e._d[`set${e._isUTC ? "UTC" : ""}Month`](t, n);
        return e;
    }
    function Se(e) {
        if (e != null) {
            Oe(this, e);
            o.updateOffset(this, true);
            return this;
        }
        return we(this, "Month");
    }
    const Le = se;
    const ze = se;
    function De() {
        function e(e, t) {
            return t.length - e.length;
        }
        let t;
        let n;
        const r = [];
        const o = [];
        const a = [];
        for(t = 0; t < 12; t++){
            n = p([
                2000,
                t
            ]);
            r.push(this.monthsShort(n, ""));
            o.push(this.months(n, ""));
            a.push(this.months(n, ""));
            a.push(this.monthsShort(n, ""));
        }
        r.sort(e);
        o.sort(e);
        a.sort(e);
        for(t = 0; t < 12; t++){
            r[t] = de(r[t]);
            o[t] = de(o[t]);
        }
        for(t = 0; t < 24; t++){
            a[t] = de(a[t]);
        }
        this._monthsRegex = new RegExp(`^(${a.join("|")})`, "i");
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp(`^(${o.join("|")})`, "i");
        this._monthsShortStrictRegex = new RegExp(`^(${r.join("|")})`, "i");
    }
    function Te(e) {
        let t;
        if (e < 100 && e >= 0) {
            const n = Array.prototype.slice.call(arguments);
            n[0] = e + 400;
            t = new Date(Date.UTC.apply(null, n));
            if (isFinite(t.getUTCFullYear())) {
                t.setUTCFullYear(e);
            }
        } else {
            t = new Date(Date.UTC.apply(null, arguments));
        }
        return t;
    }
    function Ve(e, t, n) {
        const r = 7 + t - n;
        return -(7 + Te(e, 0, r).getUTCDay() - t) % 7 + r - 1;
    }
    function He(e, t, n, r, o) {
        let a;
        let dayOfYear;
        const l = 1 + 7 * (t - 1) + (7 + n - r) % 7 + Ve(e, r, o);
        dayOfYear = l <= 0 ? me(a = e - 1) + l : l > me(e) ? (a = e + 1, l - me(e)) : (a = e, l);
        return {
            year: a,
            dayOfYear
        };
    }
    function Pe(e, t, n) {
        let week;
        let o;
        const a = Ve(e.year(), t, n);
        const i = Math.floor((e.dayOfYear() - a - 1) / 7) + 1;
        if (i < 1) {
            week = i + Ae(o = e.year() - 1, t, n);
        } else if (i > Ae(e.year(), t, n)) {
            week = i - Ae(e.year(), t, n);
            o = e.year() + 1;
        } else {
            o = e.year();
            week = i;
        }
        return {
            week,
            year: o
        };
    }
    function Ae(e, t, n) {
        const r = Ve(e, t, n);
        const o = Ve(e + 1, t, n);
        return (me(e) - r + o) / 7;
    }
    function Re(e, dow) {
        return e.slice(dow, 7).concat(e.slice(0, dow));
    }
    Z("w", [
        "ww",
        2
    ], "wo", "week");
    Z("W", [
        "WW",
        2
    ], "Wo", "isoWeek");
    H("week", "w");
    H("isoWeek", "W");
    j("week", 5);
    j("isoWeek", 5);
    ce("w", Q);
    ce("ww", Q, Y);
    ce("W", Q);
    ce("WW", Q, Y);
    ve([
        "w",
        "ww",
        "W",
        "WW"
    ], (e, t, n, r)=>{
        t[r.substr(0, 1)] = x(e);
    });
    Z("d", 0, "do", "day");
    Z("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e);
    });
    Z("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e);
    });
    Z("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e);
    });
    Z("e", 0, 0, "weekday");
    Z("E", 0, 0, "isoWeekday");
    H("day", "d");
    H("weekday", "e");
    H("isoWeekday", "E");
    j("day", 11);
    j("weekday", 11);
    j("isoWeekday", 11);
    ce("d", Q);
    ce("e", Q);
    ce("E", Q);
    ce("dd", function(e, t) {
        return t.weekdaysMinRegex(e);
    });
    ce("ddd", function(e, t) {
        return t.weekdaysShortRegex(e);
    });
    ce("dddd", function(e, t) {
        return t.weekdaysRegex(e);
    });
    ve([
        "dd",
        "ddd",
        "dddd"
    ], (e, t, n, r)=>{
        const o = n._locale.weekdaysParse(e, r, n._strict);
        if (o != null) {
            t.d = o;
        } else {
            h(n).invalidWeekday = e;
        }
    });
    ve([
        "d",
        "e",
        "E"
    ], (e, t, n, r)=>{
        t[r] = x(e);
    });
    const weekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
    const weekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
    const weekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    const Be = se;
    const Ue = se;
    const Fe = se;
    function Ze() {
        function e(e, t) {
            return t.length - e.length;
        }
        let t;
        let n;
        let r;
        let o;
        let a;
        const i = [];
        const l = [];
        const s = [];
        const u = [];
        for(t = 0; t < 7; t++){
            n = p([
                2000,
                1
            ]).day(t);
            r = this.weekdaysMin(n, "");
            o = this.weekdaysShort(n, "");
            a = this.weekdays(n, "");
            i.push(r);
            l.push(o);
            s.push(a);
            u.push(r);
            u.push(o);
            u.push(a);
        }
        i.sort(e);
        l.sort(e);
        s.sort(e);
        u.sort(e);
        for(t = 0; t < 7; t++){
            l[t] = de(l[t]);
            s[t] = de(s[t]);
            u[t] = de(u[t]);
        }
        this._weekdaysRegex = new RegExp(`^(${u.join("|")})`, "i");
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp(`^(${s.join("|")})`, "i");
        this._weekdaysShortStrictRegex = new RegExp(`^(${l.join("|")})`, "i");
        this._weekdaysMinStrictRegex = new RegExp(`^(${i.join("|")})`, "i");
    }
    function qe() {
        return this.hours() % 12 || 12;
    }
    function We(e, t) {
        Z(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t);
        });
    }
    function Ge(e, t) {
        return t._meridiemParse;
    }
    Z("H", [
        "HH",
        2
    ], 0, "hour");
    Z("h", [
        "hh",
        2
    ], 0, qe);
    Z("k", [
        "kk",
        2
    ], 0, function() {
        return this.hours() || 24;
    });
    Z("hmm", 0, 0, function() {
        return `${qe.apply(this)}${N(this.minutes(), 2)}`;
    });
    Z("hmmss", 0, 0, function() {
        return `${qe.apply(this)}${N(this.minutes(), 2)}${N(this.seconds(), 2)}`;
    });
    Z("Hmm", 0, 0, function() {
        return `${this.hours()}${N(this.minutes(), 2)}`;
    });
    Z("Hmmss", 0, 0, function() {
        return `${this.hours()}${N(this.minutes(), 2)}${N(this.seconds(), 2)}`;
    });
    We("a", true);
    We("A", false);
    H("hour", "h");
    j("hour", 13);
    ce("a", Ge);
    ce("A", Ge);
    ce("H", Q);
    ce("h", Q);
    ce("k", Q);
    ce("HH", Q, Y);
    ce("hh", Q, Y);
    ce("kk", Q, Y);
    ce("hmm", X);
    ce("hmmss", ee);
    ce("Hmm", X);
    ce("Hmmss", ee);
    he([
        "H",
        "HH"
    ], 3);
    he([
        "k",
        "kk"
    ], function(e, t, n) {
        const r = x(e);
        t[3] = r === 24 ? 0 : r;
    });
    he([
        "a",
        "A"
    ], function(e, t, n) {
        n._isPm = n._locale.isPM(e);
        n._meridiem = e;
    });
    he([
        "h",
        "hh"
    ], function(e, t, n) {
        t[3] = x(e);
        h(n).bigHour = true;
    });
    he("hmm", function(e, t, n) {
        const r = e.length - 2;
        t[3] = x(e.substr(0, r));
        t[4] = x(e.substr(r));
        h(n).bigHour = true;
    });
    he("hmmss", function(e, t, n) {
        const r = e.length - 4;
        const o = e.length - 2;
        t[3] = x(e.substr(0, r));
        t[4] = x(e.substr(r, 2));
        t[5] = x(e.substr(o));
        h(n).bigHour = true;
    });
    he("Hmm", function(e, t, n) {
        const r = e.length - 2;
        t[3] = x(e.substr(0, r));
        t[4] = x(e.substr(r));
    });
    he("Hmmss", function(e, t, n) {
        const r = e.length - 4;
        const o = e.length - 2;
        t[3] = x(e.substr(0, r));
        t[4] = x(e.substr(r, 2));
        t[5] = x(e.substr(o));
    });
    let Ye;
    const $e = Ce("Hours", true);
    const Ke = {
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        months,
        monthsShort,
        week: {
            dow: 0,
            doy: 6
        },
        weekdays,
        weekdaysMin,
        weekdaysShort,
        meridiemParse: /[ap]\.?m?\.?/i
    };
    const Je = {};
    const Qe = {};
    function Xe(e) {
        if (e) {
            return e.toLowerCase().replace("_", "-");
        }
        return e;
    }
    function et(t) {
        let r = null;
        if (!Je[t] && module !== undefined && module && module.exports) {
            try {
                r = Ye._abbr;
                require("unpacked/module-661.js")(`./${t}`);
                tt(r);
            } catch (t) {}
        }
        return Je[t];
    }
    function tt(e, t) {
        let n;
        if (e) {
            if (n = l(t) ? rt(e) : nt(e, t)) {
                Ye = n;
            } else if (typeof console !== "undefined" && console.warn) {
                console.warn(`Locale ${e} not found. Did you forget to load it?`);
            }
        }
        return Ye._abbr;
    }
    function nt(e, config) {
        if (config === null) {
            delete Je[e];
            return null;
        }
        let n;
        let r = Ke;
        config.abbr = e;
        if (Je[e] != null) {
            L("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
            r = Je[e]._config;
        } else if (config.parentLocale != null) {
            if (Je[config.parentLocale] != null) {
                r = Je[config.parentLocale]._config;
            } else {
                if ((n = et(config.parentLocale)) == null) {
                    if (!Qe[config.parentLocale]) {
                        Qe[config.parentLocale] = [];
                    }
                    Qe[config.parentLocale].push({
                        name: e,
                        config
                    });
                    return null;
                }
                r = n._config;
            }
        }
        Je[e] = new T(D(r, config));
        if (Qe[e]) {
            Qe[e].forEach((e)=>{
                nt(e.name, e.config);
            });
        }
        tt(e);
        return Je[e];
    }
    function rt(e) {
        let t;
        if (e && e._locale && e._locale._abbr) {
            e = e._locale._abbr;
        }
        if (!e) {
            return Ye;
        }
        if (!a(e)) {
            if (t = et(e)) {
                return t;
            }
            e = [
                e
            ];
        }
        return ((e)=>{
            let t;
            let n;
            let r;
            let o;
            for(let a = 0; a < e.length;){
                t = (o = Xe(e[a]).split("-")).length;
                for(n = (n = Xe(e[a + 1])) ? n.split("-") : null; t > 0;){
                    if (r = et(o.slice(0, t).join("-"))) {
                        return r;
                    }
                    if (n && n.length >= t && M(o, n, true) >= t - 1) {
                        break;
                    }
                    t--;
                }
                a++;
            }
            return Ye;
        })(e);
    }
    function ot(e) {
        let t;
        const n = e._a;
        if (n && h(e).overflow === -2) {
            t = n[1] < 0 || n[1] > 11 ? 1 : n[2] < 1 || n[2] > xe(n[0], n[1]) ? 2 : n[3] < 0 || n[3] > 24 || n[3] === 24 && (n[4] !== 0 || n[5] !== 0 || n[6] !== 0) ? 3 : n[4] < 0 || n[4] > 59 ? 4 : n[5] < 0 || n[5] > 59 ? 5 : n[6] < 0 || n[6] > 999 ? 6 : -1;
            if (h(e)._overflowDayOfYear && (t < 0 || t > 2)) {
                t = 2;
            }
            if (h(e)._overflowWeeks && t === -1) {
                t = 7;
            }
            if (h(e)._overflowWeekday && t === -1) {
                t = 8;
            }
            h(e).overflow = t;
        }
        return e;
    }
    function at(e, t, n) {
        return e ?? t ?? n;
    }
    function it(e) {
        let t;
        let n;
        let r;
        let a;
        let i;
        const l = [];
        if (!e._d) {
            let s;
            let u;
            s = e;
            u = new Date(o.now());
            r = s._useUTC ? [
                u.getUTCFullYear(),
                u.getUTCMonth(),
                u.getUTCDate()
            ] : [
                u.getFullYear(),
                u.getMonth(),
                u.getDate()
            ];
            if (e._w && e._a[2] == null && e._a[1] == null) {
                ((e)=>{
                    let t;
                    let n;
                    let r;
                    let o;
                    let a;
                    let i;
                    let l;
                    let s;
                    if ((t = e._w).GG != null || t.W != null || t.E != null) {
                        a = 1;
                        i = 4;
                        n = at(t.GG, e._a[0], Pe(Ct(), 1, 4).year);
                        r = at(t.W, 1);
                        if ((o = at(t.E, 1)) < 1 || o > 7) {
                            s = true;
                        }
                    } else {
                        a = e._locale._week.dow;
                        i = e._locale._week.doy;
                        const u = Pe(Ct(), a, i);
                        n = at(t.gg, e._a[0], u.year);
                        r = at(t.w, u.week);
                        if (t.d != null) {
                            if ((o = t.d) < 0 || o > 6) {
                                s = true;
                            }
                        } else if (t.e != null) {
                            o = t.e + a;
                            if (t.e < 0 || t.e > 6) {
                                s = true;
                            }
                        } else {
                            o = a;
                        }
                    }
                    if (r < 1 || r > Ae(n, a, i)) {
                        h(e)._overflowWeeks = true;
                    } else if (s != null) {
                        h(e)._overflowWeekday = true;
                    } else {
                        l = He(n, r, o, a, i);
                        e._a[0] = l.year;
                        e._dayOfYear = l.dayOfYear;
                    }
                })(e);
            }
            if (e._dayOfYear != null) {
                i = at(e._a[0], r[0]);
                if (e._dayOfYear > me(i) || e._dayOfYear === 0) {
                    h(e)._overflowDayOfYear = true;
                }
                n = Te(i, 0, e._dayOfYear);
                e._a[1] = n.getUTCMonth();
                e._a[2] = n.getUTCDate();
            }
            for(t = 0; t < 3 && e._a[t] == null; ++t){
                e._a[t] = l[t] = r[t];
            }
            for(; t < 7; t++){
                e._a[t] = l[t] = e._a[t] ?? (t === 2 ? 1 : 0);
            }
            if (e._a[3] === 24 && e._a[4] === 0 && e._a[5] === 0 && e._a[6] === 0) {
                e._nextDay = true;
                e._a[3] = 0;
            }
            e._d = (e._useUTC ? Te : function(e, t, n, r, o, a, i) {
                let l;
                if (e < 100 && e >= 0) {
                    l = new Date(e + 400, t, n, r, o, a, i);
                    if (isFinite(l.getFullYear())) {
                        l.setFullYear(e);
                    }
                } else {
                    l = new Date(e, t, n, r, o, a, i);
                }
                return l;
            }).apply(null, l);
            a = e._useUTC ? e._d.getUTCDay() : e._d.getDay();
            if (e._tzm != null) {
                e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm);
            }
            if (e._nextDay) {
                e._a[3] = 24;
            }
            if (e._w && e._w.d !== undefined && e._w.d !== a) {
                h(e).weekdayMismatch = true;
            }
        }
    }
    const lt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    const st = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    const ut = /Z|[+-]\d\d(?::?\d\d)?/;
    const ct = [
        [
            "YYYYYY-MM-DD",
            /[+-]\d{6}-\d\d-\d\d/
        ],
        [
            "YYYY-MM-DD",
            /\d{4}-\d\d-\d\d/
        ],
        [
            "GGGG-[W]WW-E",
            /\d{4}-W\d\d-\d/
        ],
        [
            "GGGG-[W]WW",
            /\d{4}-W\d\d/,
            false
        ],
        [
            "YYYY-DDD",
            /\d{4}-\d{3}/
        ],
        [
            "YYYY-MM",
            /\d{4}-\d\d/,
            false
        ],
        [
            "YYYYYYMMDD",
            /[+-]\d{10}/
        ],
        [
            "YYYYMMDD",
            /\d{8}/
        ],
        [
            "GGGG[W]WWE",
            /\d{4}W\d{3}/
        ],
        [
            "GGGG[W]WW",
            /\d{4}W\d{2}/,
            false
        ],
        [
            "YYYYDDD",
            /\d{7}/
        ]
    ];
    const ft = [
        [
            "HH:mm:ss.SSSS",
            /\d\d:\d\d:\d\d\.\d+/
        ],
        [
            "HH:mm:ss,SSSS",
            /\d\d:\d\d:\d\d,\d+/
        ],
        [
            "HH:mm:ss",
            /\d\d:\d\d:\d\d/
        ],
        [
            "HH:mm",
            /\d\d:\d\d/
        ],
        [
            "HHmmss.SSSS",
            /\d\d\d\d\d\d\.\d+/
        ],
        [
            "HHmmss,SSSS",
            /\d\d\d\d\d\d,\d+/
        ],
        [
            "HHmmss",
            /\d\d\d\d\d\d/
        ],
        [
            "HHmm",
            /\d\d\d\d/
        ],
        [
            "HH",
            /\d\d/
        ]
    ];
    const dt = /^\/?Date\((\-?\d+)/i;
    function pt(e) {
        let t;
        let n;
        let r;
        let o;
        let a;
        let i;
        const l = e._i;
        const s = lt.exec(l) || st.exec(l);
        if (s) {
            h(e).iso = true;
            t = 0;
            for(n = ct.length; t < n; t++){
                if (ct[t][1].exec(s[1])) {
                    o = ct[t][0];
                    r = ct[t][2] !== false;
                    break;
                }
            }
            if (o == null) {
                return void (e._isValid = false);
            }
            if (s[3]) {
                t = 0;
                for(n = ft.length; t < n; t++){
                    if (ft[t][1].exec(s[3])) {
                        a = (s[2] || " ") + ft[t][0];
                        break;
                    }
                }
                if (a == null) {
                    return void (e._isValid = false);
                }
            }
            if (!r && a != null) {
                return void (e._isValid = false);
            }
            if (s[4]) {
                if (!ut.exec(s[4])) {
                    return void (e._isValid = false);
                }
                i = "Z";
            }
            e._f = o + (a || "") + (i || "");
            gt(e);
        } else {
            e._isValid = false;
        }
    }
    const ht = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
    const vt = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    function mt(e) {
        let t;
        let n;
        let r;
        const o = ht.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        if (o) {
            const a = ((e, t, n, r, o, a)=>{
                const i = [
                    ((e)=>{
                        const t = parseInt(e, 10);
                        if (t <= 49) {
                            return 2000 + t;
                        }
                        if (t <= 999) {
                            return 1900 + t;
                        }
                        return t;
                    })(e),
                    monthsShort.indexOf(t),
                    parseInt(n, 10),
                    parseInt(r, 10),
                    parseInt(o, 10)
                ];
                if (a) {
                    i.push(parseInt(a, 10));
                }
                return i;
            })(o[4], o[3], o[2], o[5], o[6], o[7]);
            n = a;
            r = e;
            if ((t = o[1]) && weekdaysShort.indexOf(t) !== new Date(n[0], n[1], n[2]).getDay() && (h(r).weekdayMismatch = true, !(r._isValid = false))) {
                return;
            }
            e._a = a;
            e._tzm = ((e, t, n)=>{
                if (e) {
                    return vt[e];
                }
                if (t) {
                    return 0;
                }
                const r = parseInt(n, 10);
                const o = r % 100;
                return (r - o) / 100 * 60 + o;
            })(o[8], o[9], o[10]);
            e._d = Te.apply(null, e._a);
            e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm);
            h(e).rfc2822 = true;
        } else {
            e._isValid = false;
        }
    }
    function gt(e) {
        if (e._f !== o.ISO_8601) {
            if (e._f !== o.RFC_2822) {
                e._a = [];
                h(e).empty = true;
                let t;
                let n;
                let r;
                let a;
                let i;
                let l;
                let s;
                let u;
                let c = `${e._i}`;
                const d = c.length;
                let p = 0;
                r = W(e._f, e._locale).match(I) || [];
                for(t = 0; t < r.length; t++){
                    a = r[t];
                    if (n = (c.match(fe(a, e)) || [])[0]) {
                        if ((i = c.substr(0, c.indexOf(n))).length > 0) {
                            h(e).unusedInput.push(i);
                        }
                        c = c.slice(c.indexOf(n) + n.length);
                        p += n.length;
                    }
                    if (F[a]) {
                        if (n) {
                            h(e).empty = false;
                        } else {
                            h(e).unusedTokens.push(a);
                        }
                        l = a;
                        u = e;
                        if ((s = n) != null && f(pe, l)) {
                            pe[l](s, u._a, u, l);
                        }
                    } else if (e._strict && !n) {
                        h(e).unusedTokens.push(a);
                    }
                }
                h(e).charsLeftOver = d - p;
                if (c.length > 0) {
                    h(e).unusedInput.push(c);
                }
                if (e._a[3] <= 12 && h(e).bigHour === true && e._a[3] > 0) {
                    h(e).bigHour = undefined;
                }
                h(e).parsedDateParts = e._a.slice(0);
                h(e).meridiem = e._meridiem;
                e._a[3] = ((e, t, n)=>{
                    let r;
                    if (n == null) {
                        return t;
                    }
                    if (e.meridiemHour != null) {
                        return e.meridiemHour(t, n);
                    }
                    if (e.isPM != null) {
                        if ((r = e.isPM(n)) && t < 12) {
                            t += 12;
                        }
                        if (!(r || t !== 12)) {
                            t = 0;
                        }
                    }
                    return t;
                })(e._locale, e._a[3], e._meridiem);
                it(e);
                ot(e);
            } else {
                mt(e);
            }
        } else {
            pt(e);
        }
    }
    function yt(e) {
        let t;
        let n;
        let r;
        let f;
        let p = e._i;
        const g = e._f;
        e._locale = e._locale || rt(e._l);
        if (p === null || g === undefined && p === "") {
            return m({
                nullInput: true
            });
        }
        if (typeof p === "string") {
            e._i = p = e._locale.preparse(p);
        }
        if (w(p)) {
            return new C(ot(p));
        }
        return u(p) ? e._d = p : a(g) ? ((e)=>{
            let t;
            let n;
            let r;
            let o;
            let a;
            if (e._f.length === 0) {
                h(e).invalidFormat = true;
                return e._d = new Date(NaN);
            }
            for(o = 0; o < e._f.length; o++){
                a = 0;
                t = y({}, e);
                if (e._useUTC != null) {
                    t._useUTC = e._useUTC;
                }
                t._f = e._f[o];
                gt(t);
                if (v(t)) {
                    a += h(t).charsLeftOver;
                    a += 10 * h(t).unusedTokens.length;
                    h(t).score = a;
                    if (r == null || a < r) {
                        r = a;
                        n = t;
                    }
                }
            }
            d(e, n || t);
        })(e) : g ? gt(e) : l(n = (t = e)._i) ? t._d = new Date(o.now()) : u(n) ? t._d = new Date(n.valueOf()) : typeof n === "string" ? (r = t, (f = dt.exec(r._i)) === null ? (pt(r), r._isValid === false && (delete r._isValid, mt(r), r._isValid === false && (delete r._isValid, o.createFromInputFallback(r)))) : r._d = new Date(+f[1])) : a(n) ? (t._a = c(n.slice(0), (e)=>parseInt(e, 10)), it(t)) : i(n) ? ((e)=>{
            if (!e._d) {
                const t = A(e._i);
                e._a = c([
                    t.year,
                    t.month,
                    t.day || t.date,
                    t.hour,
                    t.minute,
                    t.second,
                    t.millisecond
                ], (e)=>e && parseInt(e, 10));
                it(e);
            }
        })(t) : s(n) ? t._d = new Date(n) : o.createFromInputFallback(t), v(e) || (e._d = null), e;
    }
    function bt(e, t, n, r, o) {
        let l;
        const s = {};
        if (!(n !== true && n !== false)) {
            r = n;
            n = undefined;
        }
        if (i(e) && ((e)=>{
            if (Object.getOwnPropertyNames) {
                return Object.getOwnPropertyNames(e).length === 0;
            }
            let t;
            for(t in e){
                if (e.hasOwnProperty(t)) {
                    return false;
                }
            }
            return true;
        })(e) || a(e) && e.length === 0) {
            e = undefined;
        }
        s._isAMomentObject = true;
        s._useUTC = s._isUTC = o;
        s._l = n;
        s._i = e;
        s._f = t;
        s._strict = r;
        if ((l = new C(ot(yt(s))))._nextDay) {
            l.add(1, "d");
            l._nextDay = undefined;
        }
        return l;
    }
    function Ct(e, t, n, r) {
        return bt(e, t, n, r, false);
    }
    o.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
    });
    o.ISO_8601 = function() {};
    o.RFC_2822 = function() {};
    const wt = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        const e = Ct.apply(null, arguments);
        if (this.isValid() && e.isValid()) {
            if (e < this) {
                return this;
            }
            return e;
        }
        return m();
    });
    const _t = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        const e = Ct.apply(null, arguments);
        if (this.isValid() && e.isValid()) {
            if (this < e) {
                return this;
            }
            return e;
        }
        return m();
    });
    function xt(e, t) {
        let n;
        let r;
        if (t.length === 1 && a(t[0])) {
            t = t[0];
        }
        if (!t.length) {
            return Ct();
        }
        n = t[0];
        for(r = 1; r < t.length; ++r){
            if (!(t[r].isValid() && !t[r][e](n))) {
                n = t[r];
            }
        }
        return n;
    }
    const Mt = [
        "year",
        "quarter",
        "month",
        "week",
        "day",
        "hour",
        "minute",
        "second",
        "millisecond"
    ];
    function Et(e) {
        const t = A(e);
        const n = t.year || 0;
        const r = t.quarter || 0;
        const o = t.month || 0;
        const a = t.week || t.isoWeek || 0;
        const i = t.day || 0;
        const l = t.hour || 0;
        const s = t.minute || 0;
        const u = t.second || 0;
        const c = t.millisecond || 0;
        this._isValid = ((e)=>{
            for(const t in e){
                if (ye.call(Mt, t) === -1 || e[t] != null && isNaN(e[t])) {
                    return false;
                }
            }
            let n = false;
            for(let r = 0; r < Mt.length; ++r){
                if (e[Mt[r]]) {
                    if (n) {
                        return false;
                    }
                    if (parseFloat(e[Mt[r]]) !== x(e[Mt[r]])) {
                        n = true;
                    }
                }
            }
            return true;
        })(t);
        this._milliseconds = +c + 1000 * u + 60000 * s + 1000 * l * 60 * 60;
        this._days = +i + 7 * a;
        this._months = +o + 3 * r + 12 * n;
        this._data = {};
        this._locale = rt();
        this._bubble();
    }
    function kt(e) {
        return e instanceof Et;
    }
    function Ot(e) {
        if (e < 0) {
            return -1 * Math.round(-1 * e);
        }
        return Math.round(e);
    }
    function St(e, t) {
        Z(e, 0, 0, function() {
            let e = this.utcOffset();
            let n = "+";
            if (e < 0) {
                e = -e;
                n = "-";
            }
            return n + N(~~(e / 60), 2) + t + N(~~e % 60, 2);
        });
    }
    St("Z", ":");
    St("ZZ", "");
    ce("Z", le);
    ce("ZZ", le);
    he([
        "Z",
        "ZZ"
    ], function(e, t, n) {
        n._useUTC = true;
        n._tzm = zt(le, e);
    });
    var Lt = /([\+\-]|\d\d)/gi;
    function zt(e, t) {
        const n = (t || "").match(e);
        if (n === null) {
            return null;
        }
        const r = `${n[n.length - 1] || []}`.match(Lt) || [
            "-",
            0,
            0
        ];
        const o = 60 * r[1] + x(r[2]);
        if (o === 0) {
            return 0;
        }
        if (r[0] === "+") {
            return o;
        }
        return -o;
    }
    function Dt(e, t) {
        let n;
        let r;
        if (t._isUTC) {
            n = t.clone();
            r = (w(e) || u(e) ? e.valueOf() : Ct(e).valueOf()) - n.valueOf();
            n._d.setTime(n._d.valueOf() + r);
            o.updateOffset(n, false);
            return n;
        }
        return Ct(e).local();
    }
    function Tt(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
    }
    function Vt() {
        return !!this.isValid() && this._isUTC && this._offset === 0;
    }
    o.updateOffset = function() {};
    const Ht = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
    const Pt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function At(e, t) {
        let n;
        let r;
        let o;
        let a = e;
        let i = null;
        if (kt(e)) {
            a = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months
            };
        } else if (s(e)) {
            a = {};
            if (t) {
                a[t] = e;
            } else {
                a.milliseconds = e;
            }
        } else if (i = Ht.exec(e)) {
            n = i[1] === "-" ? -1 : 1;
            a = {
                y: 0,
                d: x(i[2]) * n,
                h: x(i[3]) * n,
                m: x(i[4]) * n,
                s: x(i[5]) * n,
                ms: x(Ot(1000 * i[6])) * n
            };
        } else if (i = Pt.exec(e)) {
            n = i[1] === "-" ? -1 : 1;
            a = {
                y: Rt(i[2], n),
                M: Rt(i[3], n),
                w: Rt(i[4], n),
                d: Rt(i[5], n),
                h: Rt(i[6], n),
                m: Rt(i[7], n),
                s: Rt(i[8], n)
            };
        } else if (a == null) {
            a = {};
        } else if (typeof a === "object" && ("from" in a || "to" in a)) {
            o = ((e, t)=>{
                let n;
                if (e.isValid() && t.isValid()) {
                    t = Dt(t, e);
                    if (e.isBefore(t)) {
                        n = jt(e, t);
                    } else {
                        (n = jt(t, e)).milliseconds = -n.milliseconds;
                        n.months = -n.months;
                    }
                    return n;
                }
                return {
                    milliseconds: 0,
                    months: 0
                };
            })(Ct(a.from), Ct(a.to));
            a = {};
            a.ms = o.milliseconds;
            a.M = o.months;
        }
        r = new Et(a);
        if (kt(e) && f(e, "_locale")) {
            r._locale = e._locale;
        }
        return r;
    }
    function Rt(e, t) {
        const n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t;
    }
    function jt(e, t) {
        const n = {};
        n.months = t.month() - e.month() + 12 * (t.year() - e.year());
        if (e.clone().add(n.months, "M").isAfter(t)) {
            --n.months;
        }
        n.milliseconds = +t - +e.clone().add(n.months, "M");
        return n;
    }
    function Nt(e, t) {
        return function(n, r) {
            let o;
            if (!(r === null || isNaN(+r))) {
                L(t, `moment().${t}(period, number) is deprecated. Please use moment().${t}(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.`);
                o = n;
                n = r;
                r = o;
            }
            It(this, At(n = typeof n === "string" ? +n : n, r), e);
            return this;
        };
    }
    function It(e, t, n, r) {
        const t__milliseconds = t._milliseconds;
        const i = Ot(t._days);
        const l = Ot(t._months);
        if (e.isValid()) {
            r = r == null || r;
            if (l) {
                Oe(e, we(e, "Month") + l * n);
            }
            if (i) {
                _e(e, "Date", we(e, "Date") + i * n);
            }
            if (t__milliseconds) {
                e._d.setTime(e._d.valueOf() + t__milliseconds * n);
            }
            if (r) {
                o.updateOffset(e, i || l);
            }
        }
    }
    At.fn = Et.prototype;
    At.invalid = function() {
        return At(NaN);
    };
    const Bt = Nt(1, "add");
    const Ut = Nt(-1, "subtract");
    function Ft(e, t) {
        const n = 12 * (t.year() - e.year()) + (t.month() - e.month());
        const r = e.clone().add(n, "months");
        return -(n + (t - r < 0 ? (t - r) / (r - e.clone().add(n - 1, "months")) : (t - r) / (e.clone().add(n + 1, "months") - r))) || 0;
    }
    function Zt(e) {
        let t;
        if (e === undefined) {
            return this._locale._abbr;
        }
        if ((t = rt(e)) != null) {
            this._locale = t;
        }
        return this;
    }
    o.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    o.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    const qt = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        if (e === undefined) {
            return this.localeData();
        }
        return this.locale(e);
    });
    function Wt() {
        return this._locale;
    }
    const Gt = 12622780800000;
    function Yt(e, t) {
        return (e % t + t) % t;
    }
    function $t(e, t, n) {
        if (e < 100 && e >= 0) {
            return new Date(e + 400, t, n) - Gt;
        }
        return new Date(e, t, n).valueOf();
    }
    function Kt(e, t, n) {
        if (e < 100 && e >= 0) {
            return Date.UTC(e + 400, t, n) - Gt;
        }
        return Date.UTC(e, t, n);
    }
    function Jt(e, t) {
        Z(0, [
            e,
            e.length
        ], 0, t);
    }
    function Qt(e, t, n, r, o) {
        let a;
        if (e == null) {
            return Pe(this, r, o).year;
        }
        if ((a = Ae(e, r, o)) < t) {
            t = a;
        }
        return (function(e, t, n, r, o) {
            const a = He(e, t, n, r, o);
            const i = Te(a.year, 0, a.dayOfYear);
            this.year(i.getUTCFullYear());
            this.month(i.getUTCMonth());
            this.date(i.getUTCDate());
            return this;
        }).call(this, e, t, n, r, o);
    }
    Z(0, [
        "gg",
        2
    ], 0, function() {
        return this.weekYear() % 100;
    });
    Z(0, [
        "GG",
        2
    ], 0, function() {
        return this.isoWeekYear() % 100;
    });
    Jt("gggg", "weekYear");
    Jt("ggggg", "weekYear");
    Jt("GGGG", "isoWeekYear");
    Jt("GGGGG", "isoWeekYear");
    H("weekYear", "gg");
    H("isoWeekYear", "GG");
    j("weekYear", 1);
    j("isoWeekYear", 1);
    ce("G", ae);
    ce("g", ae);
    ce("GG", Q, Y);
    ce("gg", Q, Y);
    ce("GGGG", ne, K);
    ce("gggg", ne, K);
    ce("GGGGG", re, J);
    ce("ggggg", re, J);
    ve([
        "gggg",
        "ggggg",
        "GGGG",
        "GGGGG"
    ], (e, t, n, r)=>{
        t[r.substr(0, 2)] = x(e);
    });
    ve([
        "gg",
        "GG"
    ], (e, t, n, r)=>{
        t[r] = o.parseTwoDigitYear(e);
    });
    Z("Q", 0, "Qo", "quarter");
    H("quarter", "Q");
    j("quarter", 7);
    ce("Q", G);
    he("Q", function(e, t) {
        t[1] = 3 * (x(e) - 1);
    });
    Z("D", [
        "DD",
        2
    ], "Do", "date");
    H("date", "D");
    j("date", 9);
    ce("D", Q);
    ce("DD", Q, Y);
    ce("Do", function(e, t) {
        if (e) {
            return t._dayOfMonthOrdinalParse || t._ordinalParse;
        }
        return t._dayOfMonthOrdinalParseLenient;
    });
    he([
        "D",
        "DD"
    ], 2);
    he("Do", function(e, t) {
        t[2] = x(e.match(Q)[0]);
    });
    const Xt = Ce("Date", true);
    Z("DDD", [
        "DDDD",
        3
    ], "DDDo", "dayOfYear");
    H("dayOfYear", "DDD");
    j("dayOfYear", 4);
    ce("DDD", te);
    ce("DDDD", $);
    he([
        "DDD",
        "DDDD"
    ], function(e, t, n) {
        n._dayOfYear = x(e);
    });
    Z("m", [
        "mm",
        2
    ], 0, "minute");
    H("minute", "m");
    j("minute", 14);
    ce("m", Q);
    ce("mm", Q, Y);
    he([
        "m",
        "mm"
    ], 4);
    const en = Ce("Minutes", false);
    Z("s", [
        "ss",
        2
    ], 0, "second");
    H("second", "s");
    j("second", 15);
    ce("s", Q);
    ce("ss", Q, Y);
    he([
        "s",
        "ss"
    ], 5);
    let tn;
    const nn = Ce("Seconds", false);
    Z("S", 0, 0, function() {
        return ~~(this.millisecond() / 100);
    });
    Z(0, [
        "SS",
        2
    ], 0, function() {
        return ~~(this.millisecond() / 10);
    });
    Z(0, [
        "SSS",
        3
    ], 0, "millisecond");
    Z(0, [
        "SSSS",
        4
    ], 0, function() {
        return 10 * this.millisecond();
    });
    Z(0, [
        "SSSSS",
        5
    ], 0, function() {
        return 100 * this.millisecond();
    });
    Z(0, [
        "SSSSSS",
        6
    ], 0, function() {
        return 1000 * this.millisecond();
    });
    Z(0, [
        "SSSSSSS",
        7
    ], 0, function() {
        return 10000 * this.millisecond();
    });
    Z(0, [
        "SSSSSSSS",
        8
    ], 0, function() {
        return 100000 * this.millisecond();
    });
    Z(0, [
        "SSSSSSSSS",
        9
    ], 0, function() {
        return 1000000 * this.millisecond();
    });
    H("millisecond", "ms");
    j("millisecond", 16);
    ce("S", te, G);
    ce("SS", te, Y);
    ce("SSS", te, $);
    for(tn = "SSSS"; tn.length <= 9; tn += "S"){
        ce(tn, oe);
    }
    function rn(e, t) {
        t[6] = x(1000 * `0.${e}`);
    }
    for(tn = "S"; tn.length <= 9; tn += "S"){
        he(tn, rn);
    }
    const on = Ce("Milliseconds", false);
    Z("z", 0, 0, "zoneAbbr");
    Z("zz", 0, 0, "zoneName");
    const C_prototype = C.prototype;
    function ln(e) {
        return e;
    }
    C_prototype.add = Bt;
    C_prototype.calendar = function(e, t) {
        const n = e || Ct();
        const r = Dt(n, this).startOf("day");
        const a = o.calendarFormat(this, r) || "sameElse";
        const i = t && (z(t[a]) ? t[a].call(this, n) : t[a]);
        return this.format(i || this.localeData().calendar(a, this, Ct(n)));
    };
    C_prototype.clone = function() {
        return new C(this);
    };
    C_prototype.diff = function(e, t, n) {
        let r;
        let o;
        let a;
        if (!this.isValid()) {
            return NaN;
        }
        if (!(r = Dt(e, this)).isValid()) {
            return NaN;
        }
        o = 60000 * (r.utcOffset() - this.utcOffset());
        switch(t = P(t)){
            case "year":
                a = Ft(this, r) / 12;
                break;
            case "month":
                a = Ft(this, r);
                break;
            case "quarter":
                a = Ft(this, r) / 3;
                break;
            case "second":
                a = (this - r) / 1000;
                break;
            case "minute":
                a = (this - r) / 60000;
                break;
            case "hour":
                a = (this - r) / 3600000;
                break;
            case "day":
                a = (this - r - o) / 86400000;
                break;
            case "week":
                a = (this - r - o) / 604800000;
                break;
            default:
                a = this - r;
        }
        if (n) {
            return a;
        }
        return _(a);
    };
    C_prototype.endOf = function(e) {
        let t;
        if ((e = P(e)) === undefined || e === "millisecond" || !this.isValid()) {
            return this;
        }
        const n = this._isUTC ? Kt : $t;
        switch(e){
            case "year":
                t = n(this.year() + 1, 0, 1) - 1;
                break;
            case "quarter":
                t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case "month":
                t = n(this.year(), this.month() + 1, 1) - 1;
                break;
            case "week":
                t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case "isoWeek":
                t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case "day":
            case "date":
                t = n(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case "hour":
                t = this._d.valueOf();
                t += 3600000 - Yt(t + (this._isUTC ? 0 : 60000 * this.utcOffset()), 3600000) - 1;
                break;
            case "minute":
                t = this._d.valueOf();
                t += 60000 - Yt(t, 60000) - 1;
                break;
            case "second":
                t = this._d.valueOf();
                t += 1000 - Yt(t, 1000) - 1;
        }
        this._d.setTime(t);
        o.updateOffset(this, true);
        return this;
    };
    C_prototype.format = function(e) {
        if (!e) {
            e = this.isUtc() ? o.defaultFormatUtc : o.defaultFormat;
        }
        const t = q(this, e);
        return this.localeData().postformat(t);
    };
    C_prototype.from = function(from, t) {
        if (this.isValid() && (w(from) && from.isValid() || Ct(from).isValid())) {
            return At({
                to: this,
                from
            }).locale(this.locale()).humanize(!t);
        }
        return this.localeData().invalidDate();
    };
    C_prototype.fromNow = function(e) {
        return this.from(Ct(), e);
    };
    C_prototype.to = function(to, t) {
        if (this.isValid() && (w(to) && to.isValid() || Ct(to).isValid())) {
            return At({
                from: this,
                to
            }).locale(this.locale()).humanize(!t);
        }
        return this.localeData().invalidDate();
    };
    C_prototype.toNow = function(e) {
        return this.to(Ct(), e);
    };
    C_prototype.get = function(e) {
        if (z(this[e = P(e)])) {
            return this[e]();
        }
        return this;
    };
    C_prototype.invalidAt = function() {
        return h(this).overflow;
    };
    C_prototype.isAfter = function(e, t) {
        const n = w(e) ? e : Ct(e);
        return !(!this.isValid() || !n.isValid()) && ((t = P(t) || "millisecond") === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf());
    };
    C_prototype.isBefore = function(e, t) {
        const n = w(e) ? e : Ct(e);
        return !(!this.isValid() || !n.isValid()) && ((t = P(t) || "millisecond") === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf());
    };
    C_prototype.isBetween = function(e, t, n, r) {
        const o = w(e) ? e : Ct(e);
        const a = w(t) ? t : Ct(t);
        return !!(this.isValid() && o.isValid() && a.isValid()) && ((r = r || "()")[0] === "(" ? this.isAfter(o, n) : !this.isBefore(o, n)) && (r[1] === ")" ? this.isBefore(a, n) : !this.isAfter(a, n));
    };
    C_prototype.isSame = function(e, t) {
        let n;
        const r = w(e) ? e : Ct(e);
        return !(!this.isValid() || !r.isValid()) && ((t = P(t) || "millisecond") === "millisecond" ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()));
    };
    C_prototype.isSameOrAfter = function(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t);
    };
    C_prototype.isSameOrBefore = function(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t);
    };
    C_prototype.isValid = function() {
        return v(this);
    };
    C_prototype.lang = qt;
    C_prototype.locale = Zt;
    C_prototype.localeData = Wt;
    C_prototype.max = _t;
    C_prototype.min = wt;
    C_prototype.parsingFlags = function() {
        return d({}, h(this));
    };
    C_prototype.set = function(e, t) {
        if (typeof e === "object") {
            for(let n = ((e)=>{
                const t = [];
                for(const unit in e){
                    t.push({
                        unit,
                        priority: R[unit]
                    });
                }
                t.sort((e, t)=>e.priority - t.priority);
                return t;
            })(e = A(e)), r = 0; r < n.length; r++){
                this[n[r].unit](e[n[r].unit]);
            }
        } else if (z(this[e = P(e)])) {
            return this[e](t);
        }
        return this;
    };
    C_prototype.startOf = function(e) {
        let t;
        if ((e = P(e)) === undefined || e === "millisecond" || !this.isValid()) {
            return this;
        }
        const n = this._isUTC ? Kt : $t;
        switch(e){
            case "year":
                t = n(this.year(), 0, 1);
                break;
            case "quarter":
                t = n(this.year(), this.month() - this.month() % 3, 1);
                break;
            case "month":
                t = n(this.year(), this.month(), 1);
                break;
            case "week":
                t = n(this.year(), this.month(), this.date() - this.weekday());
                break;
            case "isoWeek":
                t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case "day":
            case "date":
                t = n(this.year(), this.month(), this.date());
                break;
            case "hour":
                t = this._d.valueOf();
                t -= Yt(t + (this._isUTC ? 0 : 60000 * this.utcOffset()), 3600000);
                break;
            case "minute":
                t = this._d.valueOf();
                t -= Yt(t, 60000);
                break;
            case "second":
                t = this._d.valueOf();
                t -= Yt(t, 1000);
        }
        this._d.setTime(t);
        o.updateOffset(this, true);
        return this;
    };
    C_prototype.subtract = Ut;
    C_prototype.toArray = function() {
        const _this = this;
        return [
            _this.year(),
            _this.month(),
            _this.date(),
            _this.hour(),
            _this.minute(),
            _this.second(),
            _this.millisecond()
        ];
    };
    C_prototype.toObject = function() {
        const _this = this;
        return {
            years: _this.year(),
            months: _this.month(),
            date: _this.date(),
            hours: _this.hours(),
            minutes: _this.minutes(),
            seconds: _this.seconds(),
            milliseconds: _this.milliseconds()
        };
    };
    C_prototype.toDate = function() {
        return new Date(this.valueOf());
    };
    C_prototype.toISOString = function(e) {
        if (!this.isValid()) {
            return null;
        }
        const t = e !== true;
        const n = t ? this.clone().utc() : this;
        if (n.year() < 0 || n.year() > 9999) {
            return q(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");
        }
        if (z(Date.prototype.toISOString)) {
            if (t) {
                return this.toDate().toISOString();
            }
            return new Date(this.valueOf() + 60 * this.utcOffset() * 1000).toISOString().replace("Z", q(n, "Z"));
        }
        return q(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
    };
    C_prototype.inspect = function() {
        if (!this.isValid()) {
            return `moment.invalid(/* ${this._i} */)`;
        }
        let e = "moment";
        let t = "";
        if (!this.isLocal()) {
            e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
            t = "Z";
        }
        const n = `[${e}("]`;
        const r = this.year() >= 0 && this.year() <= 9999 ? "YYYY" : "YYYYYY";
        const o = `${t}[")]`;
        return this.format(`${n + r}-MM-DD[T]HH:mm:ss.SSS${o}`);
    };
    C_prototype.toJSON = function() {
        if (this.isValid()) {
            return this.toISOString();
        }
        return null;
    };
    C_prototype.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    };
    C_prototype.unix = function() {
        return Math.floor(this.valueOf() / 1000);
    };
    C_prototype.valueOf = function() {
        return this._d.valueOf() - 60000 * (this._offset || 0);
    };
    C_prototype.creationData = function() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    };
    C_prototype.year = be;
    C_prototype.isLeapYear = function() {
        return ge(this.year());
    };
    C_prototype.weekYear = function(e) {
        return Qt.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    };
    C_prototype.isoWeekYear = function(e) {
        return Qt.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
    };
    C_prototype.quarter = C_prototype.quarters = function(e) {
        if (e == null) {
            return Math.ceil((this.month() + 1) / 3);
        }
        return this.month(3 * (e - 1) + this.month() % 3);
    };
    C_prototype.month = Se;
    C_prototype.daysInMonth = function() {
        return xe(this.year(), this.month());
    };
    C_prototype.week = C_prototype.weeks = function(e) {
        const t = this.localeData().week(this);
        if (e == null) {
            return t;
        }
        return this.add(7 * (e - t), "d");
    };
    C_prototype.isoWeek = C_prototype.isoWeeks = function(e) {
        const week = Pe(this, 1, 4).week;
        if (e == null) {
            return week;
        }
        return this.add(7 * (e - week), "d");
    };
    C_prototype.weeksInYear = function() {
        const _week = this.localeData()._week;
        return Ae(this.year(), _week.dow, _week.doy);
    };
    C_prototype.isoWeeksInYear = function() {
        return Ae(this.year(), 1, 4);
    };
    C_prototype.date = Xt;
    C_prototype.day = C_prototype.days = function(e) {
        if (!this.isValid()) {
            if (e != null) {
                return this;
            }
            return NaN;
        }
        let t;
        let n;
        const r = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (e != null) {
            t = e;
            n = this.localeData();
            e = typeof t !== "string" ? t : isNaN(t) ? typeof (t = n.weekdaysParse(t)) === "number" ? t : null : parseInt(t, 10);
            return this.add(e - r, "d");
        }
        return r;
    };
    C_prototype.weekday = function(e) {
        if (!this.isValid()) {
            if (e != null) {
                return this;
            }
            return NaN;
        }
        const t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        if (e == null) {
            return t;
        }
        return this.add(e - t, "d");
    };
    C_prototype.isoWeekday = function(e) {
        if (!this.isValid()) {
            if (e != null) {
                return this;
            }
            return NaN;
        }
        if (e == null) {
            return this.day() || 7;
        }
        let t;
        let n;
        t = e;
        n = this.localeData();
        const r = typeof t === "string" ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t;
        return this.day(this.day() % 7 ? r : r - 7);
    };
    C_prototype.dayOfYear = function(e) {
        const t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 86400000) + 1;
        if (e == null) {
            return t;
        }
        return this.add(e - t, "d");
    };
    C_prototype.hour = C_prototype.hours = $e;
    C_prototype.minute = C_prototype.minutes = en;
    C_prototype.second = C_prototype.seconds = nn;
    C_prototype.millisecond = C_prototype.milliseconds = on;
    C_prototype.utcOffset = function(e, t, n) {
        let r;
        const a = this._offset || 0;
        if (!this.isValid()) {
            if (e != null) {
                return this;
            }
            return NaN;
        }
        if (e == null) {
            if (this._isUTC) {
                return a;
            }
            return Tt(this);
        }
        if (typeof e === "string") {
            if ((e = zt(le, e)) === null) {
                return this;
            }
        } else {
            if (Math.abs(e) < 16 && !n) {
                e *= 60;
            }
        }
        if (!this._isUTC && t) {
            r = Tt(this);
        }
        this._offset = e;
        this._isUTC = true;
        if (r != null) {
            this.add(r, "m");
        }
        if (a !== e) {
            if (!t || this._changeInProgress) {
                It(this, At(e - a, "m"), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                o.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    };
    C_prototype.utc = function(e) {
        return this.utcOffset(0, e);
    };
    C_prototype.local = function(e) {
        if (this._isUTC) {
            this.utcOffset(0, e);
            this._isUTC = false;
            if (e) {
                this.subtract(Tt(this), "m");
            }
        }
        return this;
    };
    C_prototype.parseZone = function() {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === "string") {
            const e = zt(ie, this._i);
            if (e != null) {
                this.utcOffset(e);
            } else {
                this.utcOffset(0, true);
            }
        }
        return this;
    };
    C_prototype.hasAlignedHourOffset = function(e) {
        return !!this.isValid() && (e = e ? Ct(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0);
    };
    C_prototype.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    };
    C_prototype.isLocal = function() {
        return !!this.isValid() && !this._isUTC;
    };
    C_prototype.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC;
    };
    C_prototype.isUtc = Vt;
    C_prototype.isUTC = Vt;
    C_prototype.zoneAbbr = function() {
        if (this._isUTC) {
            return "UTC";
        }
        return "";
    };
    C_prototype.zoneName = function() {
        if (this._isUTC) {
            return "Coordinated Universal Time";
        }
        return "";
    };
    C_prototype.dates = k("dates accessor is deprecated. Use date instead.", Xt);
    C_prototype.months = k("months accessor is deprecated. Use month instead", Se);
    C_prototype.years = k("years accessor is deprecated. Use year instead", be);
    C_prototype.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
        if (e != null) {
            if (typeof e !== "string") {
                e = -e;
            }
            this.utcOffset(e, t);
            return this;
        }
        return -this.utcOffset();
    });
    C_prototype.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        if (!l(this._isDSTShifted)) {
            return this._isDSTShifted;
        }
        let e = {};
        y(e, this);
        if ((e = yt(e))._a) {
            const t = e._isUTC ? p(e._a) : Ct(e._a);
            this._isDSTShifted = this.isValid() && M(e._a, t.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }
        return this._isDSTShifted;
    });
    const T_prototype = T.prototype;
    function un(e, t, n, r) {
        const o = rt();
        const a = p().set(r, t);
        return o[n](a, e);
    }
    function cn(e, t, n) {
        if (s(e)) {
            t = e;
            e = undefined;
        }
        e = e || "";
        if (t != null) {
            return un(e, t, n, "month");
        }
        let r;
        const o = [];
        for(r = 0; r < 12; r++){
            o[r] = un(e, r, n, "month");
        }
        return o;
    }
    function fn(e, t, n, r) {
        if (typeof e === "boolean") {
            if (s(t)) {
                n = t;
                t = undefined;
            }
        } else {
            t = e;
            e = false;
            if (s(n = t)) {
                n = t;
                t = undefined;
            }
        }
        t = t || "";
        let o;
        const a = rt();
        const i = e ? a._week.dow : 0;
        if (n != null) {
            return un(t, (n + i) % 7, r, "day");
        }
        const l = [];
        for(o = 0; o < 7; o++){
            l[o] = un(t, (o + i) % 7, r, "day");
        }
        return l;
    }
    T_prototype.calendar = function(e, t, n) {
        const r = this._calendar[e] || this._calendar.sameElse;
        if (z(r)) {
            return r.call(t, n);
        }
        return r;
    };
    T_prototype.longDateFormat = function(e) {
        const t = this._longDateFormat[e];
        const n = this._longDateFormat[e.toUpperCase()];
        if (t || !n) {
            return t;
        }
        this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, (e)=>e.slice(1));
        return this._longDateFormat[e];
    };
    T_prototype.invalidDate = function() {
        return this._invalidDate;
    };
    T_prototype.ordinal = function(e) {
        return this._ordinal.replace("%d", e);
    };
    T_prototype.preparse = ln;
    T_prototype.postformat = ln;
    T_prototype.relativeTime = function(e, t, n, r) {
        const o = this._relativeTime[n];
        if (z(o)) {
            return o(e, t, n, r);
        }
        return o.replace(/%d/i, e);
    };
    T_prototype.pastFuture = function(e, t) {
        const n = this._relativeTime[e > 0 ? "future" : "past"];
        if (z(n)) {
            return n(t);
        }
        return n.replace(/%s/i, t);
    };
    T_prototype.set = function(e) {
        let t;
        let n;
        for(n in e){
            if (z(t = e[n])) {
                this[n] = t;
            } else {
                this[`_${n}`] = t;
            }
        }
        this._config = e;
        this._dayOfMonthOrdinalParseLenient = new RegExp(`${this._dayOfMonthOrdinalParse.source || this._ordinalParse.source}|${/\d{1,2}/.source}`);
    };
    T_prototype.months = function(e, t) {
        if (e) {
            if (a(this._months)) {
                return this._months[e.month()];
            }
            return this._months[(this._months.isFormat || Me).test(t) ? "format" : "standalone"][e.month()];
        }
        if (a(this._months)) {
            return this._months;
        }
        return this._months.standalone;
    };
    T_prototype.monthsShort = function(e, t) {
        if (e) {
            if (a(this._monthsShort)) {
                return this._monthsShort[e.month()];
            }
            return this._monthsShort[Me.test(t) ? "format" : "standalone"][e.month()];
        }
        if (a(this._monthsShort)) {
            return this._monthsShort;
        }
        return this._monthsShort.standalone;
    };
    T_prototype.monthsParse = function(e, t, n) {
        let r;
        let o;
        let a;
        if (this._monthsParseExact) {
            return (function(e, t, n) {
                let r;
                let o;
                let a;
                const i = e.toLocaleLowerCase();
                if (!this._monthsParse) {
                    this._monthsParse = [];
                    this._longMonthsParse = [];
                    this._shortMonthsParse = [];
                    for(r = 0; r < 12; ++r){
                        a = p([
                            2000,
                            r
                        ]);
                        this._shortMonthsParse[r] = this.monthsShort(a, "").toLocaleLowerCase();
                        this._longMonthsParse[r] = this.months(a, "").toLocaleLowerCase();
                    }
                }
                if (n) {
                    if (t === "MMM") {
                        if ((o = ye.call(this._shortMonthsParse, i)) !== -1) {
                            return o;
                        }
                        return null;
                    }
                    if ((o = ye.call(this._longMonthsParse, i)) !== -1) {
                        return o;
                    }
                    return null;
                }
                if (t === "MMM") {
                    if ((o = ye.call(this._shortMonthsParse, i)) !== -1 || (o = ye.call(this._longMonthsParse, i)) !== -1) {
                        return o;
                    }
                    return null;
                }
                if ((o = ye.call(this._longMonthsParse, i)) !== -1 || (o = ye.call(this._shortMonthsParse, i)) !== -1) {
                    return o;
                }
                return null;
            }).call(this, e, t, n);
        }
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }
        for(r = 0; r < 12; r++){
            o = p([
                2000,
                r
            ]);
            if (n && !this._longMonthsParse[r]) {
                this._longMonthsParse[r] = new RegExp(`^${this.months(o, "").replace(".", "")}\$`, "i");
                this._shortMonthsParse[r] = new RegExp(`^${this.monthsShort(o, "").replace(".", "")}\$`, "i");
            }
            if (!(n || this._monthsParse[r])) {
                a = `^${this.months(o, "")}|^${this.monthsShort(o, "")}`;
                this._monthsParse[r] = new RegExp(a.replace(".", ""), "i");
            }
            if (n && t === "MMMM" && this._longMonthsParse[r].test(e)) {
                return r;
            }
            if (n && t === "MMM" && this._shortMonthsParse[r].test(e)) {
                return r;
            }
            if (!n && this._monthsParse[r].test(e)) {
                return r;
            }
        }
    };
    T_prototype.monthsRegex = function(e) {
        if (this._monthsParseExact) {
            if (!f(this, "_monthsRegex")) {
                De.call(this);
            }
            if (e) {
                return this._monthsStrictRegex;
            }
            return this._monthsRegex;
        }
        if (!f(this, "_monthsRegex")) {
            this._monthsRegex = ze;
        }
        if (this._monthsStrictRegex && e) {
            return this._monthsStrictRegex;
        }
        return this._monthsRegex;
    };
    T_prototype.monthsShortRegex = function(e) {
        if (this._monthsParseExact) {
            if (!f(this, "_monthsRegex")) {
                De.call(this);
            }
            if (e) {
                return this._monthsShortStrictRegex;
            }
            return this._monthsShortRegex;
        }
        if (!f(this, "_monthsShortRegex")) {
            this._monthsShortRegex = Le;
        }
        if (this._monthsShortStrictRegex && e) {
            return this._monthsShortStrictRegex;
        }
        return this._monthsShortRegex;
    };
    T_prototype.week = function(e) {
        return Pe(e, this._week.dow, this._week.doy).week;
    };
    T_prototype.firstDayOfYear = function() {
        return this._week.doy;
    };
    T_prototype.firstDayOfWeek = function() {
        return this._week.dow;
    };
    T_prototype.weekdays = function(e, t) {
        const n = a(this._weekdays) ? this._weekdays : this._weekdays[e && e !== true && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
        if (e === true) {
            return Re(n, this._week.dow);
        }
        if (e) {
            return n[e.day()];
        }
        return n;
    };
    T_prototype.weekdaysMin = function(e) {
        if (e === true) {
            return Re(this._weekdaysMin, this._week.dow);
        }
        if (e) {
            return this._weekdaysMin[e.day()];
        }
        return this._weekdaysMin;
    };
    T_prototype.weekdaysShort = function(e) {
        if (e === true) {
            return Re(this._weekdaysShort, this._week.dow);
        }
        if (e) {
            return this._weekdaysShort[e.day()];
        }
        return this._weekdaysShort;
    };
    T_prototype.weekdaysParse = function(e, t, n) {
        let r;
        let o;
        let a;
        if (this._weekdaysParseExact) {
            return (function(e, t, n) {
                let r;
                let o;
                let a;
                const i = e.toLocaleLowerCase();
                if (!this._weekdaysParse) {
                    this._weekdaysParse = [];
                    this._shortWeekdaysParse = [];
                    this._minWeekdaysParse = [];
                    for(r = 0; r < 7; ++r){
                        a = p([
                            2000,
                            1
                        ]).day(r);
                        this._minWeekdaysParse[r] = this.weekdaysMin(a, "").toLocaleLowerCase();
                        this._shortWeekdaysParse[r] = this.weekdaysShort(a, "").toLocaleLowerCase();
                        this._weekdaysParse[r] = this.weekdays(a, "").toLocaleLowerCase();
                    }
                }
                if (n) {
                    if (t === "dddd") {
                        if ((o = ye.call(this._weekdaysParse, i)) !== -1) {
                            return o;
                        }
                        return null;
                    }
                    if (t === "ddd") {
                        if ((o = ye.call(this._shortWeekdaysParse, i)) !== -1) {
                            return o;
                        }
                        return null;
                    }
                    if ((o = ye.call(this._minWeekdaysParse, i)) !== -1) {
                        return o;
                    }
                    return null;
                }
                if (t === "dddd") {
                    if ((o = ye.call(this._weekdaysParse, i)) !== -1 || (o = ye.call(this._shortWeekdaysParse, i)) !== -1 || (o = ye.call(this._minWeekdaysParse, i)) !== -1) {
                        return o;
                    }
                    return null;
                }
                if (t === "ddd") {
                    if ((o = ye.call(this._shortWeekdaysParse, i)) !== -1 || (o = ye.call(this._weekdaysParse, i)) !== -1 || (o = ye.call(this._minWeekdaysParse, i)) !== -1) {
                        return o;
                    }
                    return null;
                }
                if ((o = ye.call(this._minWeekdaysParse, i)) !== -1 || (o = ye.call(this._weekdaysParse, i)) !== -1 || (o = ye.call(this._shortWeekdaysParse, i)) !== -1) {
                    return o;
                }
                return null;
            }).call(this, e, t, n);
        }
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }
        for(r = 0; r < 7; r++){
            o = p([
                2000,
                1
            ]).day(r);
            if (n && !this._fullWeekdaysParse[r]) {
                this._fullWeekdaysParse[r] = new RegExp(`^${this.weekdays(o, "").replace(".", "\\.?")}\$`, "i");
                this._shortWeekdaysParse[r] = new RegExp(`^${this.weekdaysShort(o, "").replace(".", "\\.?")}\$`, "i");
                this._minWeekdaysParse[r] = new RegExp(`^${this.weekdaysMin(o, "").replace(".", "\\.?")}\$`, "i");
            }
            if (!this._weekdaysParse[r]) {
                a = `^${this.weekdays(o, "")}|^${this.weekdaysShort(o, "")}|^${this.weekdaysMin(o, "")}`;
                this._weekdaysParse[r] = new RegExp(a.replace(".", ""), "i");
            }
            if (n && t === "dddd" && this._fullWeekdaysParse[r].test(e)) {
                return r;
            }
            if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e)) {
                return r;
            }
            if (n && t === "dd" && this._minWeekdaysParse[r].test(e)) {
                return r;
            }
            if (!n && this._weekdaysParse[r].test(e)) {
                return r;
            }
        }
    };
    T_prototype.weekdaysRegex = function(e) {
        if (this._weekdaysParseExact) {
            if (!f(this, "_weekdaysRegex")) {
                Ze.call(this);
            }
            if (e) {
                return this._weekdaysStrictRegex;
            }
            return this._weekdaysRegex;
        }
        if (!f(this, "_weekdaysRegex")) {
            this._weekdaysRegex = Be;
        }
        if (this._weekdaysStrictRegex && e) {
            return this._weekdaysStrictRegex;
        }
        return this._weekdaysRegex;
    };
    T_prototype.weekdaysShortRegex = function(e) {
        if (this._weekdaysParseExact) {
            if (!f(this, "_weekdaysRegex")) {
                Ze.call(this);
            }
            if (e) {
                return this._weekdaysShortStrictRegex;
            }
            return this._weekdaysShortRegex;
        }
        if (!f(this, "_weekdaysShortRegex")) {
            this._weekdaysShortRegex = Ue;
        }
        if (this._weekdaysShortStrictRegex && e) {
            return this._weekdaysShortStrictRegex;
        }
        return this._weekdaysShortRegex;
    };
    T_prototype.weekdaysMinRegex = function(e) {
        if (this._weekdaysParseExact) {
            if (!f(this, "_weekdaysRegex")) {
                Ze.call(this);
            }
            if (e) {
                return this._weekdaysMinStrictRegex;
            }
            return this._weekdaysMinRegex;
        }
        if (!f(this, "_weekdaysMinRegex")) {
            this._weekdaysMinRegex = Fe;
        }
        if (this._weekdaysMinStrictRegex && e) {
            return this._weekdaysMinStrictRegex;
        }
        return this._weekdaysMinRegex;
    };
    T_prototype.isPM = function(e) {
        return `${e}`.toLowerCase().charAt(0) === "p";
    };
    T_prototype.meridiem = function(e, t, n) {
        if (e > 11) {
            if (n) {
                return "pm";
            }
            return "PM";
        }
        if (n) {
            return "am";
        }
        return "AM";
    };
    tt("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            const t = e % 10;
            return e + (x(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th");
        }
    });
    o.lang = k("moment.lang is deprecated. Use moment.locale instead.", tt);
    o.langData = k("moment.langData is deprecated. Use moment.localeData instead.", rt);
    function pn(e, t, n, r) {
        const o = At(t, n);
        e._milliseconds += r * o._milliseconds;
        e._days += r * o._days;
        e._months += r * o._months;
        return e._bubble();
    }
    function hn(e) {
        if (e < 0) {
            return Math.floor(e);
        }
        return Math.ceil(e);
    }
    function vn(e) {
        return 4800 * e / 146097;
    }
    function mn(e) {
        return 146097 * e / 4800;
    }
    function gn(e) {
        return function() {
            return this.as(e);
        };
    }
    const yn = gn("ms");
    const bn = gn("s");
    const Cn = gn("m");
    const wn = gn("h");
    const _n = gn("d");
    const xn = gn("w");
    const Mn = gn("M");
    const En = gn("Q");
    const kn = gn("y");
    function On(e) {
        return function() {
            if (this.isValid()) {
                return this._data[e];
            }
            return NaN;
        };
    }
    const Sn = On("milliseconds");
    const Ln = On("seconds");
    const zn = On("minutes");
    const Dn = On("hours");
    const Tn = On("days");
    const Vn = On("months");
    const Hn = On("years");
    let Math_round = Math.round;
    const An = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    };
    function jn(e) {
        return (e > 0) - (e < 0) || +e;
    }
    function Nn() {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }
        let e;
        let t;
        let n = Math.abs(this._milliseconds) / 1000;
        const r = Math.abs(this._days);
        let o = Math.abs(this._months);
        t = _((e = _(n / 60)) / 60);
        n %= 60;
        e %= 60;
        const a = _(o / 12);
        const i = o %= 12;
        const l = r;
        const s = t;
        const u = e;
        const c = n ? n.toFixed(3).replace(/\.?0+$/, "") : "";
        const f = this.asSeconds();
        if (!f) {
            return "P0D";
        }
        const d = f < 0 ? "-" : "";
        const p = jn(this._months) !== jn(f) ? "-" : "";
        const h = jn(this._days) !== jn(f) ? "-" : "";
        const v = jn(this._milliseconds) !== jn(f) ? "-" : "";
        return `${d}P${a ? `${p + a}Y` : ""}${i ? `${p + i}M` : ""}${l ? `${h + l}D` : ""}${s || u || c ? "T" : ""}${s ? `${v + s}H` : ""}${u ? `${v + u}M` : ""}${c ? `${v + c}S` : ""}`;
    }
    const Et_prototype = Et.prototype;
    Et_prototype.isValid = function() {
        return this._isValid;
    };
    Et_prototype.abs = function() {
        const _data = this._data;
        this._milliseconds = Math.abs(this._milliseconds);
        this._days = Math.abs(this._days);
        this._months = Math.abs(this._months);
        _data.milliseconds = Math.abs(_data.milliseconds);
        _data.seconds = Math.abs(_data.seconds);
        _data.minutes = Math.abs(_data.minutes);
        _data.hours = Math.abs(_data.hours);
        _data.months = Math.abs(_data.months);
        _data.years = Math.abs(_data.years);
        return this;
    };
    Et_prototype.add = function(e, t) {
        return pn(this, e, t, 1);
    };
    Et_prototype.subtract = function(e, t) {
        return pn(this, e, t, -1);
    };
    Et_prototype.as = function(e) {
        if (!this.isValid()) {
            return NaN;
        }
        let t;
        let n;
        const _milliseconds = this._milliseconds;
        if ((e = P(e)) === "month" || e === "quarter" || e === "year") {
            t = this._days + _milliseconds / 86400000;
            n = this._months + vn(t);
            switch(e){
                case "month":
                    return n;
                case "quarter":
                    return n / 3;
                case "year":
                    return n / 12;
            }
        } else {
            t = this._days + Math.round(mn(this._months));
            switch(e){
                case "week":
                    return t / 7 + _milliseconds / 604800000;
                case "day":
                    return t + _milliseconds / 86400000;
                case "hour":
                    return 24 * t + _milliseconds / 3600000;
                case "minute":
                    return 1440 * t + _milliseconds / 60000;
                case "second":
                    return 86400 * t + _milliseconds / 1000;
                case "millisecond":
                    return Math.floor(86400000 * t) + _milliseconds;
                default:
                    throw new Error(`Unknown unit ${e}`);
            }
        }
    };
    Et_prototype.asMilliseconds = yn;
    Et_prototype.asSeconds = bn;
    Et_prototype.asMinutes = Cn;
    Et_prototype.asHours = wn;
    Et_prototype.asDays = _n;
    Et_prototype.asWeeks = xn;
    Et_prototype.asMonths = Mn;
    Et_prototype.asQuarters = En;
    Et_prototype.asYears = kn;
    Et_prototype.valueOf = function() {
        if (this.isValid()) {
            return this._milliseconds + 86400000 * this._days + this._months % 12 * 2592000000 + 31536000000 * x(this._months / 12);
        }
        return NaN;
    };
    Et_prototype._bubble = function() {
        let e;
        let t;
        let n;
        let r;
        let o;
        let _milliseconds = this._milliseconds;
        let _days = this._days;
        let _months = this._months;
        const _data = this._data;
        if (!(_milliseconds >= 0 && _days >= 0 && _months >= 0 || _milliseconds <= 0 && _days <= 0 && _months <= 0)) {
            _milliseconds += 86400000 * hn(mn(_months) + _days);
            _days = 0;
            _months = 0;
        }
        _data.milliseconds = _milliseconds % 1000;
        e = _(_milliseconds / 1000);
        _data.seconds = e % 60;
        t = _(e / 60);
        _data.minutes = t % 60;
        n = _(t / 60);
        _data.hours = n % 24;
        _months += o = _(vn(_days += _(n / 24)));
        _days -= hn(mn(o));
        r = _(_months / 12);
        _months %= 12;
        _data.days = _days;
        _data.months = _months;
        _data.years = r;
        return this;
    };
    Et_prototype.clone = function() {
        return At(this);
    };
    Et_prototype.get = function(e) {
        e = P(e);
        if (this.isValid()) {
            return this[`${e}s`]();
        }
        return NaN;
    };
    Et_prototype.milliseconds = Sn;
    Et_prototype.seconds = Ln;
    Et_prototype.minutes = zn;
    Et_prototype.hours = Dn;
    Et_prototype.days = Tn;
    Et_prototype.weeks = function() {
        return _(this.days() / 7);
    };
    Et_prototype.months = Vn;
    Et_prototype.years = Hn;
    Et_prototype.humanize = function(e) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }
        let t;
        let n;
        let r;
        let o;
        let a;
        let i;
        let l;
        let s;
        let u;
        let c;
        const f = this.localeData();
        t = !e;
        n = f;
        r = At(this).abs();
        o = Math_round(r.as("s"));
        a = Math_round(r.as("m"));
        i = Math_round(r.as("h"));
        l = Math_round(r.as("d"));
        s = Math_round(r.as("M"));
        u = Math_round(r.as("y"));
        c = o <= An.ss && [
            "s",
            o
        ] || o < An.s && [
            "ss",
            o
        ] || a <= 1 && [
            "m"
        ] || a < An.m && [
            "mm",
            a
        ] || i <= 1 && [
            "h"
        ] || i < An.h && [
            "hh",
            i
        ] || l <= 1 && [
            "d"
        ] || l < An.d && [
            "dd",
            l
        ] || s <= 1 && [
            "M"
        ] || s < An.M && [
            "MM",
            s
        ] || u <= 1 && [
            "y"
        ] || [
            "yy",
            u
        ];
        c[2] = t;
        c[3] = +this > 0;
        c[4] = n;
        let d = ((e, t, n, r, o)=>o.relativeTime(t || 1, !!n, e, r)).apply(null, c);
        if (e) {
            d = f.pastFuture(+this, d);
        }
        return f.postformat(d);
    };
    Et_prototype.toISOString = Nn;
    Et_prototype.toString = Nn;
    Et_prototype.toJSON = Nn;
    Et_prototype.locale = Zt;
    Et_prototype.localeData = Wt;
    Et_prototype.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Nn);
    Et_prototype.lang = qt;
    Z("X", 0, 0, "unix");
    Z("x", 0, 0, "valueOf");
    ce("x", ae);
    ce("X", /[+-]?\d+(\.\d{1,3})?/);
    he("X", function(e, t, n) {
        n._d = new Date(1000 * parseFloat(e, 10));
    });
    he("x", function(e, t, n) {
        n._d = new Date(x(e));
    });
    o.version = "2.24.0";
    t = Ct;
    o.fn = C_prototype;
    o.min = function() {
        return xt("isBefore", Array.prototype.slice.call(arguments, 0));
    };
    o.max = function() {
        return xt("isAfter", Array.prototype.slice.call(arguments, 0));
    };
    o.now = function() {
        if (Date.now) {
            return Date.now();
        }
        return +new Date;
    };
    o.utc = p;
    o.unix = function(e) {
        return Ct(1000 * e);
    };
    o.months = function(e, t) {
        return cn(e, t, "months");
    };
    o.isDate = u;
    o.locale = tt;
    o.invalid = m;
    o.duration = At;
    o.isMoment = w;
    o.weekdays = function(e, t, n) {
        return fn(e, t, n, "weekdays");
    };
    o.parseZone = function() {
        return Ct.apply(null, arguments).parseZone();
    };
    o.localeData = rt;
    o.isDuration = kt;
    o.monthsShort = function(e, t) {
        return cn(e, t, "monthsShort");
    };
    o.weekdaysMin = function(e, t, n) {
        return fn(e, t, n, "weekdaysMin");
    };
    o.defineLocale = nt;
    o.updateLocale = function(e, t) {
        if (t != null) {
            let n;
            let r;
            let o = Ke;
            if ((r = et(e)) != null) {
                o = r._config;
            }
            n = new T(t = D(o, t));
            n.parentLocale = Je[e];
            Je[e] = n;
            tt(e);
        } else {
            if (Je[e] != null) {
                if (Je[e].parentLocale != null) {
                    Je[e] = Je[e].parentLocale;
                } else if (Je[e] != null) {
                    delete Je[e];
                }
            }
        }
        return Je[e];
    };
    o.locales = function() {
        return O(Je);
    };
    o.weekdaysShort = function(e, t, n) {
        return fn(e, t, n, "weekdaysShort");
    };
    o.normalizeUnits = P;
    o.relativeTimeRounding = function(e) {
        if (e === undefined) {
            return Math_round;
        }
        return typeof e === "function" && (Math_round = e, true);
    };
    o.relativeTimeThreshold = function(e, t) {
        return An[e] !== undefined && (t === undefined ? An[e] : (An[e] = t, e === "s" && (An.ss = t - 1), true));
    };
    o.calendarFormat = function(e, t) {
        const n = e.diff(t, "days", true);
        if (n < -6) {
            return "sameElse";
        }
        if (n < -1) {
            return "lastWeek";
        }
        if (n < 0) {
            return "lastDay";
        }
        if (n < 1) {
            return "sameDay";
        }
        if (n < 2) {
            return "nextDay";
        }
        if (n < 7) {
            return "nextWeek";
        }
        return "sameElse";
    };
    o.prototype = C_prototype;
    o.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    };
    return o;
})();
