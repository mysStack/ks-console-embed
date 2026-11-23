"use strict";
(function(e) {
    function n() {
        return (n = Object.assign || function(e) {
            for(let t = 1; t < arguments.length; t++){
                const n = arguments[t];
                for(const r in n){
                    if (Object.prototype.hasOwnProperty.call(n, r)) {
                        e[r] = n[r];
                    }
                }
            }
            return e;
        }).apply(this, arguments);
    }
    function r(e) {
        return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function o(e, t) {
        return (o = Object.setPrototypeOf || function(e, t) {
            e.__proto__ = t;
            return e;
        })(e, t);
    }
    function a() {
        if (typeof Reflect === "undefined" || !Reflect.construct) {
            return false;
        }
        if (Reflect.construct.sham) {
            return false;
        }
        if (typeof Proxy === "function") {
            return true;
        }
        try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    }
    function i(e, t, n) {
        return (i = a() ? Reflect.construct : function(e, t, n) {
            const r = [
                null
            ];
            r.push.apply(r, t);
            const a = new (Function.bind.apply(e, r));
            if (n) {
                o(a, n.prototype);
            }
            return a;
        }).apply(null, arguments);
    }
    function l(e) {
        const t = typeof Map === "function" ? new Map : undefined;
        return (l = function(e) {
            if (e === null || (n = e, Function.toString.call(n).indexOf("[native code]") === -1)) {
                return e;
            }
            var n;
            if (typeof e !== "function") {
                throw new TypeError("Super expression must either be null or a function");
            }
            if (t !== undefined) {
                if (t.has(e)) {
                    return t.get(e);
                }
                t.set(e, a);
            }
            function a() {
                return i(e, arguments, r(this).constructor);
            }
            a.prototype = Object.create(e.prototype, {
                constructor: {
                    value: a,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            return o(a, e);
        })(e);
    }
    const s = /%[sdj%]/g;
    function u(e) {
        if (!e || !e.length) {
            return null;
        }
        const t = {};
        e.forEach((e)=>{
            const e_field = e.field;
            t[e_field] = t[e_field] || [];
            t[e_field].push(e);
        });
        return t;
    }
    function c(...t) {
        let r = 1;
        const o = t[0];
        const t_length = t.length;
        if (typeof o === "function") {
            return o.apply(null, t.slice(1));
        }
        if (typeof o === "string") {
            const i = String(o).replace(s, (e)=>{
                if (e === "%%") {
                    return "%";
                }
                if (r >= t_length) {
                    return e;
                }
                switch(e){
                    case "%s":
                        return String(t[r++]);
                    case "%d":
                        return Number(t[r++]);
                    case "%j":
                        try {
                            return JSON.stringify(t[r++]);
                        } catch (e) {
                            return "[Circular]";
                        }
                        break;
                    default:
                        return e;
                }
            });
            return i;
        }
        return o;
    }
    function f(e, t) {
        return e == null || !(t !== "array" || !Array.isArray(e) || e.length) || !(!((e)=>e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern")(t) || typeof e !== "string" || e);
    }
    function d(e, t, n) {
        let r = 0;
        const e_length = e.length;
        (function a(i) {
            if (i && i.length) {
                n(i);
            } else {
                const l = r;
                r += 1;
                if (l < e_length) {
                    t(e[l], a);
                } else {
                    n([]);
                }
            }
        })([]);
    }
    e !== undefined && e.env;
    class p extends l(Error) {
        constructor(t, n){
            super("Async Validation Error");
            this.errors = t;
            this.fields = n;
        }
    }
    function h(e, t, n, r) {
        if (t.first) {
            const o = new Promise((resolve, reject)=>{
                d(((e)=>{
                    const t = [];
                    Object.keys(e).forEach((n)=>{
                        t.push.apply(t, e[n]);
                    });
                    return t;
                })(e), n, (e)=>{
                    r(e);
                    if (e.length) {
                        return reject(new p(e, u(e)));
                    }
                    return resolve();
                });
            });
            o.catch((e)=>e);
            return o;
        }
        let a = t.firstFields || [];
        if (a === true) {
            a = Object.keys(e);
        }
        const i = Object.keys(e);
        const i_length = i.length;
        let s = 0;
        const c = [];
        const f = new Promise((resolve, reject)=>{
            const f = function(e) {
                c.push.apply(c, e);
                if (++s === i_length) {
                    r(c);
                    if (c.length) {
                        return reject(new p(c, u(c)));
                    }
                    return resolve();
                }
            };
            if (!i.length) {
                r(c);
                resolve();
            }
            i.forEach((t)=>{
                const r = e[t];
                if (a.indexOf(t) !== -1) {
                    d(r, n, f);
                } else {
                    ((e, t, n)=>{
                        const r = [];
                        let o = 0;
                        const e_length = e.length;
                        function i(e) {
                            r.push.apply(r, e);
                            if (++o === e_length) {
                                n(r);
                            }
                        }
                        e.forEach((e)=>{
                            t(e, i);
                        });
                    })(r, n, f);
                }
            });
        });
        f.catch((e)=>e);
        return f;
    }
    function v(e) {
        return function(t) {
            if (t && t.message) {
                t.field = t.field || e.fullField;
                return t;
            }
            return {
                message: typeof t === "function" ? t() : t,
                field: t.field || e.fullField
            };
        };
    }
    function m(e, t) {
        if (t) {
            for(const r in t){
                if (t.hasOwnProperty(r)) {
                    const o = t[r];
                    if (typeof o === "object" && typeof e[r] === "object") {
                        e[r] = n({}, e[r], o);
                    } else {
                        e[r] = o;
                    }
                }
            }
        }
        return e;
    }
    function required(e, t, n, r, o, a) {
        if (!(!e.required || n.hasOwnProperty(e.field) && !f(t, a || e.type))) {
            r.push(c(o.messages.required, e.fullField));
        }
    }
    const y = {
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
        hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
    };
    var b = {
        integer: function(e) {
            return b.number(e) && parseInt(e, 10) === e;
        },
        float: function(e) {
            return b.number(e) && !b.integer(e);
        },
        array: function(e) {
            return Array.isArray(e);
        },
        regexp: function(e) {
            if (e instanceof RegExp) {
                return true;
            }
            try {
                return !!new RegExp(e);
            } catch (e) {
                return false;
            }
        },
        date: function(e) {
            return typeof e.getTime === "function" && typeof e.getMonth === "function" && typeof e.getYear === "function" && !isNaN(e.getTime());
        },
        number: function(e) {
            return !isNaN(e) && typeof e === "number";
        },
        object: function(e) {
            return typeof e === "object" && !b.array(e);
        },
        method: function(e) {
            return typeof e === "function";
        },
        email: function(e) {
            return typeof e === "string" && !!e.match(y.email) && e.length < 255;
        },
        url: function(e) {
            return typeof e === "string" && !!e.match(y.url);
        },
        hex: function(e) {
            return typeof e === "string" && !!e.match(y.hex);
        }
    };
    const C = {
        required,
        whitespace: function(e, t, n, r, o) {
            if (/^\s+$/.test(t) || t === "") {
                r.push(c(o.messages.whitespace, e.fullField));
            }
        },
        type: function(e, t, n, r, o) {
            if (e.required && t === undefined) {
                required(e, t, n, r, o);
            } else {
                const a = e.type;
                if ([
                    "integer",
                    "float",
                    "array",
                    "regexp",
                    "object",
                    "method",
                    "email",
                    "number",
                    "date",
                    "url",
                    "hex"
                ].indexOf(a) > -1) {
                    if (!b[a](t)) {
                        r.push(c(o.messages.types[a], e.fullField, e.type));
                    }
                } else if (a && typeof t !== e.type) {
                    r.push(c(o.messages.types[a], e.fullField, e.type));
                }
            }
        },
        range: function(e, t, n, r, o) {
            const a = typeof e.len === "number";
            const i = typeof e.min === "number";
            const l = typeof e.max === "number";
            let s = t;
            let u = null;
            const f = typeof t === "number";
            const d = typeof t === "string";
            const p = Array.isArray(t);
            if (f) {
                u = "number";
            } else if (d) {
                u = "string";
            } else if (p) {
                u = "array";
            }
            if (!u) {
                return false;
            }
            if (p) {
                s = t.length;
            }
            if (d) {
                s = t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length;
            }
            if (a) {
                if (s !== e.len) {
                    r.push(c(o.messages[u].len, e.fullField, e.len));
                }
            } else if (i && !l && s < e.min) {
                r.push(c(o.messages[u].min, e.fullField, e.min));
            } else if (l && !i && s > e.max) {
                r.push(c(o.messages[u].max, e.fullField, e.max));
            } else if (i && l && (s < e.min || s > e.max)) {
                r.push(c(o.messages[u].range, e.fullField, e.min, e.max));
            }
        },
        enum: function(e, t, n, r, o) {
            e.enum = Array.isArray(e.enum) ? e.enum : [];
            if (e.enum.indexOf(t) === -1) {
                r.push(c(o.messages.enum, e.fullField, e.enum.join(", ")));
            }
        },
        pattern: function(e, t, n, r, o) {
            if (e.pattern) {
                if (e.pattern instanceof RegExp) {
                    e.pattern.lastIndex = 0;
                    if (!e.pattern.test(t)) {
                        r.push(c(o.messages.pattern.mismatch, e.fullField, t, e.pattern));
                    }
                } else if (typeof e.pattern === "string") {
                    if (!new RegExp(e.pattern).test(t)) {
                        r.push(c(o.messages.pattern.mismatch, e.fullField, t, e.pattern));
                    }
                }
            }
        }
    };
    function w(e, t, n, r, o) {
        const e_type = e.type;
        const i = [];
        if (e.required || !e.required && r.hasOwnProperty(e.field)) {
            if (f(t, e_type) && !e.required) {
                return n();
            }
            C.required(e, t, r, i, o, e_type);
            if (!f(t, e_type)) {
                C.type(e, t, r, i, o);
            }
        }
        n(i);
    }
    const _ = {
        string: function(e, t, n, r, o) {
            const a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (f(t, "string") && !e.required) {
                    return n();
                }
                C.required(e, t, r, a, o, "string");
                if (!f(t, "string")) {
                    C.type(e, t, r, a, o);
                    C.range(e, t, r, a, o);
                    C.pattern(e, t, r, a, o);
                    if (e.whitespace === true) {
                        C.whitespace(e, t, r, a, o);
                    }
                }
            }
            n(a);
        },
        method: function(e, t, n, r, o) {
            const a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (f(t) && !e.required) {
                    return n();
                }
                C.required(e, t, r, a, o);
                if (t !== undefined) {
                    C.type(e, t, r, a, o);
                }
            }
            n(a);
        },
        number: function(e, t, n, r, o) {
            const a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (t === "") {
                    t = undefined;
                }
                if (f(t) && !e.required) {
                    return n();
                }
                C.required(e, t, r, a, o);
                if (t !== undefined) {
                    C.type(e, t, r, a, o);
                    C.range(e, t, r, a, o);
                }
            }
            n(a);
        },
        boolean: function(e, t, n, r, o) {
            const a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (f(t) && !e.required) {
                    return n();
                }
                C.required(e, t, r, a, o);
                if (t !== undefined) {
                    C.type(e, t, r, a, o);
                }
            }
            n(a);
        },
        regexp: function(e, t, n, r, o) {
            const a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (f(t) && !e.required) {
                    return n();
                }
                C.required(e, t, r, a, o);
                if (!f(t)) {
                    C.type(e, t, r, a, o);
                }
            }
            n(a);
        },
        integer: function(e, t, n, r, o) {
            const a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (f(t) && !e.required) {
                    return n();
                }
                C.required(e, t, r, a, o);
                if (t !== undefined) {
                    C.type(e, t, r, a, o);
                    C.range(e, t, r, a, o);
                }
            }
            n(a);
        },
        float: function(e, t, n, r, o) {
            const a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (f(t) && !e.required) {
                    return n();
                }
                C.required(e, t, r, a, o);
                if (t !== undefined) {
                    C.type(e, t, r, a, o);
                    C.range(e, t, r, a, o);
                }
            }
            n(a);
        },
        array: function(e, t, n, r, o) {
            const a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (t == null && !e.required) {
                    return n();
                }
                C.required(e, t, r, a, o, "array");
                if (t != null) {
                    C.type(e, t, r, a, o);
                    C.range(e, t, r, a, o);
                }
            }
            n(a);
        },
        object: function(e, t, n, r, o) {
            const a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (f(t) && !e.required) {
                    return n();
                }
                C.required(e, t, r, a, o);
                if (t !== undefined) {
                    C.type(e, t, r, a, o);
                }
            }
            n(a);
        },
        enum: function(e, t, n, r, o) {
            const a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (f(t) && !e.required) {
                    return n();
                }
                C.required(e, t, r, a, o);
                if (t !== undefined) {
                    C.enum(e, t, r, a, o);
                }
            }
            n(a);
        },
        pattern: function(e, t, n, r, o) {
            const a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (f(t, "string") && !e.required) {
                    return n();
                }
                C.required(e, t, r, a, o);
                if (!f(t, "string")) {
                    C.pattern(e, t, r, a, o);
                }
            }
            n(a);
        },
        date: function(e, t, n, r, o) {
            const a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (f(t, "date") && !e.required) {
                    return n();
                }
                let i;
                C.required(e, t, r, a, o);
                if (!f(t, "date")) {
                    i = t instanceof Date ? t : new Date(t);
                    C.type(e, i, r, a, o);
                    if (i) {
                        C.range(e, i.getTime(), r, a, o);
                    }
                }
            }
            n(a);
        },
        url: w,
        hex: w,
        email: w,
        required: function(e, t, n, r, o) {
            const a = [];
            const i = Array.isArray(t) ? "array" : typeof t;
            C.required(e, t, r, a, o, i);
            n(a);
        },
        any: function(e, t, n, r, o) {
            const a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (f(t) && !e.required) {
                    return n();
                }
                C.required(e, t, r, a, o);
            }
            n(a);
        }
    };
    function x() {
        return {
            default: "Validation error on field %s",
            required: "%s is required",
            enum: "%s must be one of %s",
            whitespace: "%s cannot be empty",
            date: {
                format: "%s date %s is invalid for format %s",
                parse: "%s date could not be parsed, %s is invalid ",
                invalid: "%s date %s is invalid"
            },
            types: {
                string: "%s is not a %s",
                method: "%s is not a %s (function)",
                array: "%s is not an %s",
                object: "%s is not an %s",
                number: "%s is not a %s",
                date: "%s is not a %s",
                boolean: "%s is not a %s",
                integer: "%s is not an %s",
                float: "%s is not a %s",
                regexp: "%s is not a valid %s",
                email: "%s is not a valid %s",
                url: "%s is not a valid %s",
                hex: "%s is not a valid %s"
            },
            string: {
                len: "%s must be exactly %s characters",
                min: "%s must be at least %s characters",
                max: "%s cannot be longer than %s characters",
                range: "%s must be between %s and %s characters"
            },
            number: {
                len: "%s must equal %s",
                min: "%s cannot be less than %s",
                max: "%s cannot be greater than %s",
                range: "%s must be between %s and %s"
            },
            array: {
                len: "%s must be exactly %s in length",
                min: "%s cannot be less than %s in length",
                max: "%s cannot be greater than %s in length",
                range: "%s must be between %s and %s in length"
            },
            pattern: {
                mismatch: "%s value %s does not match pattern %s"
            },
            clone: function() {
                const e = JSON.parse(JSON.stringify(this));
                e.clone = this.clone;
                return e;
            }
        };
    }
    const M = x();
    function E(e) {
        this.rules = null;
        this._messages = M;
        this.define(e);
    }
    E.prototype = {
        messages: function(e) {
            if (e) {
                this._messages = m(x(), e);
            }
            return this._messages;
        },
        define: function(e) {
            if (!e) {
                throw new Error("Cannot configure a schema with no rules");
            }
            if (typeof e !== "object" || Array.isArray(e)) {
                throw new Error("Rules must be an object");
            }
            let t;
            let n;
            this.rules = {};
            for(t in e){
                if (e.hasOwnProperty(t)) {
                    n = e[t];
                    this.rules[t] = Array.isArray(n) ? n : [
                        n
                    ];
                }
            }
        },
        validate: function(e, t = {}, r = function() {}) {
            const _this = this;
            let a;
            let i;
            let source = e;
            let s = t;
            let f = r;
            if (typeof s === "function") {
                f = s;
                s = {};
            }
            if (!this.rules || Object.keys(this.rules).length === 0) {
                if (f) {
                    f();
                }
                return Promise.resolve();
            }
            if (s.messages) {
                let d = this.messages();
                if (d === M) {
                    d = x();
                }
                m(d, s.messages);
                s.messages = d;
            } else {
                s.messages = this.messages();
            }
            const p = {};
            (s.keys || Object.keys(this.rules)).forEach((field)=>{
                a = _this.rules[field];
                i = source[field];
                a.forEach((r)=>{
                    let a = r;
                    if (typeof a.transform === "function") {
                        if (source === e) {
                            source = n({}, source);
                        }
                        i = source[field] = a.transform(i);
                    }
                    a = typeof a === "function" ? {
                        validator: a
                    } : n({}, a);
                    a.validator = _this.getValidationMethod(a);
                    a.field = field;
                    a.fullField = a.fullField || field;
                    a.type = _this.getType(a);
                    if (a.validator) {
                        p[field] = p[field] || [];
                        p[field].push({
                            rule: a,
                            value: i,
                            source,
                            field
                        });
                    }
                });
            });
            const g = {};
            return h(p, s, function(e, t) {
                let r;
                const e_rule = e.rule;
                let a = !(e_rule.type !== "object" && e_rule.type !== "array" || typeof e_rule.fields !== "object" && typeof e_rule.defaultField !== "object");
                function i(e, t) {
                    return n({}, t, {
                        fullField: `${e_rule.fullField}.${e}`
                    });
                }
                function l(r = []) {
                    let l = r;
                    if (!Array.isArray(l)) {
                        l = [
                            l
                        ];
                    }
                    if (!s.suppressWarning && l.length) {
                        E.warning("async-validator:", l);
                    }
                    if (l.length && e_rule.message !== undefined) {
                        l = [].concat(e_rule.message);
                    }
                    l = l.map(v(e_rule));
                    if (s.first && l.length) {
                        g[e_rule.field] = 1;
                        return t(l);
                    }
                    if (a) {
                        if (e_rule.required && !e.value) {
                            if (e_rule.message !== undefined) {
                                l = [].concat(e_rule.message).map(v(e_rule));
                            } else if (s.error) {
                                l = [
                                    s.error(e_rule, c(s.messages.required, e_rule.field))
                                ];
                            }
                            return t(l);
                        }
                        let u = {};
                        if (e_rule.defaultField) {
                            for(const f in e.value){
                                if (e.value.hasOwnProperty(f)) {
                                    u[f] = e_rule.defaultField;
                                }
                            }
                        }
                        for(const d in u = n({}, u, e.rule.fields)){
                            if (u.hasOwnProperty(d)) {
                                const p = Array.isArray(u[d]) ? u[d] : [
                                    u[d]
                                ];
                                u[d] = p.map(i.bind(null, d));
                            }
                        }
                        const h = new E(u);
                        h.messages(s.messages);
                        if (e.rule.options) {
                            e.rule.options.messages = s.messages;
                            e.rule.options.error = s.error;
                        }
                        h.validate(e.value, e.rule.options || s, function(e) {
                            const n = [];
                            if (l && l.length) {
                                n.push.apply(n, l);
                            }
                            if (e && e.length) {
                                n.push.apply(n, e);
                            }
                            t(n.length ? n : null);
                        });
                    } else {
                        t(l);
                    }
                }
                a = a && (e_rule.required || !e_rule.required && e.value);
                e_rule.field = e.field;
                if (e_rule.asyncValidator) {
                    r = e_rule.asyncValidator(e_rule, e.value, l, e.source, s);
                } else {
                    if (e_rule.validator) {
                        if ((r = e_rule.validator(e_rule, e.value, l, e.source, s)) === true) {
                            l();
                        } else if (r === false) {
                            l(e_rule.message || `${e_rule.field} fails`);
                        } else if (r instanceof Array) {
                            l(r);
                        } else if (r instanceof Error) {
                            l(r.message);
                        }
                    }
                }
                if (r && r.then) {
                    r.then(()=>l(), (e)=>l(e));
                }
            }, (e)=>{
                ((e)=>{
                    let t;
                    let n;
                    let r;
                    let o = [];
                    let a = {};
                    for(t = 0; t < e.length; t++){
                        n = e[t];
                        r = undefined;
                        if (Array.isArray(n)) {
                            o = (r = o).concat.apply(r, n);
                        } else {
                            o.push(n);
                        }
                    }
                    if (o.length) {
                        a = u(o);
                    } else {
                        o = null;
                        a = null;
                    }
                    f(o, a);
                })(e);
            });
        },
        getType: function(e) {
            if (e.type === undefined && e.pattern instanceof RegExp) {
                e.type = "pattern";
            }
            if (typeof e.validator !== "function" && e.type && !_.hasOwnProperty(e.type)) {
                throw new Error(c("Unknown rule type %s", e.type));
            }
            return e.type || "string";
        },
        getValidationMethod: function(e) {
            if (typeof e.validator === "function") {
                return e.validator;
            }
            const t = Object.keys(e);
            const n = t.indexOf("message");
            if (n !== -1) {
                t.splice(n, 1);
            }
            if (t.length === 1 && t[0] === "required") {
                return _.required;
            }
            return _[this.getType(e)] || false;
        }
    };
    E.register = function(e, t) {
        if (typeof t !== "function") {
            throw new Error("Cannot register a validator by type, validator is not a function");
        }
        _[e] = t;
    };
    E.warning = function() {};
    E.messages = M;
    E.validators = _;
    exports.a = E;
}).call(this, require("unpacked/module-257.js").default);
