"use strict";
((t)=>{
    let n;
    const r = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol) {
            return "symbol";
        }
        return typeof e;
    };
    n = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 60103;
    const jsx = function(e, props, r, o) {
        const a = e && e.defaultProps;
        const i = arguments.length - 3;
        if (!(props || i === 0)) {
            props = {};
        }
        if (props && a) {
            for(const l in a){
                if (props[l] === undefined) {
                    props[l] = a[l];
                }
            }
        } else {
            if (!props) {
                props = a || {};
            }
        }
        if (i === 1) {
            props.children = o;
        } else if (i > 1) {
            const s = Array(i);
            for(let u = 0; u < i; u++){
                s[u] = arguments[u + 3];
            }
            props.children = s;
        }
        return {
            $$typeof: n,
            type: e,
            key: r === undefined ? null : `${r}`,
            ref: null,
            props,
            _owner: null
        };
    };
    const createClass = (()=>{
        function e(e, t) {
            for (const r of t){
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) {
                    r.writable = true;
                }
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            if (n) {
                e(t.prototype, n);
            }
            if (r) {
                e(t, r);
            }
            return t;
        };
    })();
    const defineProperty = function(e, t, n) {
        if (t in e) {
            Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            e[t] = n;
        }
        return e;
    };
    const l = Object.assign || function(e) {
        for(let t = 1; t < arguments.length; t++){
            const n = arguments[t];
            for(const r in n){
                if (Object.prototype.hasOwnProperty.call(n, r)) {
                    e[r] = n[r];
                }
            }
        }
        return e;
    };
    const selfGlobal = t === undefined ? self : t;
    const u = Object.freeze({
        jsx,
        asyncToGenerator: function(e) {
            return function() {
                const t = e.apply(this, arguments);
                return new Promise((resolve, reject)=>(function r(o, a) {
                        try {
                            var i = t[o](a);
                            var l = i.value;
                        } catch (error) {
                            return void reject(error);
                        }
                        if (!i.done) {
                            return Promise.resolve(l).then((e)=>r("next", e), (e)=>r("throw", e));
                        }
                        resolve(l);
                    })("next"));
            };
        },
        classCallCheck: function(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        },
        createClass,
        defineEnumerableProperties: function(e, t) {
            for(const n in t){
                const r = t[n];
                r.configurable = r.enumerable = true;
                if ("value" in r) {
                    r.writable = true;
                }
                Object.defineProperty(e, n, r);
            }
            return e;
        },
        defaults: function(e, t) {
            for(let n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++){
                const o = n[r];
                const a = Object.getOwnPropertyDescriptor(t, o);
                if (a && a.configurable && e[o] === undefined) {
                    Object.defineProperty(e, o, a);
                }
            }
            return e;
        },
        defineProperty,
        get: function e(t, n, r) {
            if (t === null) {
                t = Function.prototype;
            }
            const o = Object.getOwnPropertyDescriptor(t, n);
            if (o === undefined) {
                const a = Object.getPrototypeOf(t);
                if (a === null) {
                    return undefined;
                }
                return e(a, n, r);
            }
            if ("value" in o) {
                return o.value;
            }
            const o_get = o.get;
            if (o_get !== undefined) {
                return o_get.call(r);
            }
        },
        inherits: function(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`);
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) {
                if (Object.setPrototypeOf) {
                    Object.setPrototypeOf(e, t);
                } else {
                    e.__proto__ = t;
                }
            }
        },
        interopRequireDefault: function(e) {
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        },
        interopRequireWildcard: function(e) {
            if (e && e.__esModule) {
                return e;
            }
            const t = {};
            if (e != null) {
                for(const n in e){
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        t[n] = e[n];
                    }
                }
            }
            t.default = e;
            return t;
        },
        newArrowCheck: function(e, t) {
            if (e !== t) {
                throw new TypeError("Cannot instantiate an arrow function");
            }
        },
        objectDestructuringEmpty: function(e) {
            if (e == null) {
                throw new TypeError("Cannot destructure undefined");
            }
        },
        objectWithoutProperties: function(e, t) {
            const n = {};
            for(const r in e){
                if (!(t.indexOf(r) >= 0)) {
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        n[r] = e[r];
                    }
                }
            }
            return n;
        },
        possibleConstructorReturn: function(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            if (!t || typeof t !== "object" && typeof t !== "function") {
                return e;
            }
            return t;
        },
        selfGlobal,
        set: function e(t, n, r, o) {
            const a = Object.getOwnPropertyDescriptor(t, n);
            if (a === undefined) {
                const i = Object.getPrototypeOf(t);
                if (i !== null) {
                    e(i, n, r, o);
                }
            } else if ("value" in a && a.writable) {
                a.value = r;
            } else {
                const l = a.set;
                if (l !== undefined) {
                    l.call(o, r);
                }
            }
            return r;
        },
        slicedToArray: function(e, t) {
            if (Array.isArray(e)) {
                return e;
            }
            if (Symbol.iterator in Object(e)) {
                return ((e, t)=>{
                    const n = [];
                    let r = true;
                    let o = false;
                    let a;
                    try {
                        for(var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = true);
                    } catch (error) {
                        o = true;
                        a = error;
                    } finally{
                        try {
                            if (!r && l.return) {
                                l.return();
                            }
                        } finally{
                            if (o) {
                                throw a;
                            }
                        }
                    }
                    return n;
                })(e, t);
            }
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        },
        slicedToArrayLoose: function(e, t) {
            if (Array.isArray(e)) {
                return e;
            }
            if (Symbol.iterator in Object(e)) {
                for(var n, r = [], o = e[Symbol.iterator](); !(n = o.next()).done && (r.push(n.value), !t || r.length !== t););
                return r;
            }
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        },
        taggedTemplateLiteral: function(e, t) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }));
        },
        taggedTemplateLiteralLoose: function(e, t) {
            e.raw = t;
            return e;
        },
        temporalRef: function(e, t, n) {
            if (e === n) {
                throw new ReferenceError(`${t} is not defined - temporal dead zone`);
            }
            return e;
        },
        temporalUndefined: {},
        toArray: function(e) {
            if (Array.isArray(e)) {
                return e;
            }
            return Array.from(e);
        },
        toConsumableArray: function(e) {
            if (Array.isArray(e)) {
                for(var t = 0, n = Array(e.length); t < e.length; t++){
                    n[t] = e[t];
                }
                return n;
            }
            return Array.from(e);
        },
        typeof: r,
        extends: l,
        instanceof: function(e, t) {
            if (t != null && typeof Symbol !== "undefined" && t[Symbol.hasInstance]) {
                return t[Symbol.hasInstance](e);
            }
            return e instanceof t;
        }
    });
    const c = (()=>{
        const e = function() {};
        try {
            Object.defineProperty(e, "a", {
                get: function() {
                    return 1;
                }
            });
            Object.defineProperty(e, "prototype", {
                writable: false
            });
            return e.a === 1 && e.prototype instanceof Object;
        } catch (e) {
            return false;
        }
    })();
    const f = !c && !Object.prototype.__defineGetter__;
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const p = c ? Object.defineProperty : (e, t, n)=>{
        if ("get" in n && e.__defineGetter__) {
            e.__defineGetter__(t, n.get);
        } else if (!(hasOwnProperty.call(e, t) && !("value" in n))) {
            e[t] = n.value;
        }
    };
    const h = Array.prototype.indexOf || function(e, ...args) {
        const _this = this;
        if (!_this.length) {
            return -1;
        }
        for(let n = args[0] || 0, r = _this.length; n < r; n++){
            if (_this[n] === e) {
                return n;
            }
        }
        return -1;
    };
    const v = Object.create || ((e, t)=>{
        let n;
        function r() {}
        r.prototype = e;
        n = new r;
        for(const o in t){
            if (hasOwnProperty.call(t, o)) {
                p(n, o, t[o]);
            }
        }
        return n;
    });
    const slice = Array.prototype.slice;
    const concat = Array.prototype.concat;
    const push = Array.prototype.push;
    const join = Array.prototype.join;
    const shift = Array.prototype.shift;
    const w = Function.prototype.bind || function(e) {
        const _this = this;
        const n = slice.call(arguments, 1);
        _this.length;
        return function() {
            return _this.apply(e, concat.call(n, slice.call(arguments)));
        };
    };
    const _ = v(null);
    const x = Math.random();
    function M(e) {
        for(const t in e){
            if (e instanceof M || hasOwnProperty.call(e, t)) {
                p(this, t, {
                    value: e[t],
                    enumerable: true,
                    writable: true,
                    configurable: true
                });
            }
        }
    }
    function E() {
        p(this, "length", {
            writable: true,
            value: 0
        });
        if (arguments.length) {
            push.apply(this, slice.call(arguments));
        }
    }
    function k() {
        if (_.disableRegExpRestore) {
            return function() {};
        }
        const e = {
            lastMatch: RegExp.lastMatch || "",
            leftContext: RegExp.leftContext,
            multiline: RegExp.multiline,
            input: RegExp.input
        };
        let t = false;
        for(let n = 1; n <= 9; n++){
            t = (e[`\$${n}`] = RegExp[`\$${n}`]) || t;
        }
        return function() {
            const n = /[.?*+^$[\]\\(){}|-]/g;
            let r = e.lastMatch.replace(n, "\\$&");
            const o = new E;
            if (t) {
                for(let a = 1; a <= 9; a++){
                    let i = e[`\$${a}`];
                    if (i) {
                        i = i.replace(n, "\\$&");
                        r = r.replace(i, `(${i})`);
                    } else {
                        r = `()${r}`;
                    }
                    push.call(o, r.slice(0, r.indexOf("(") + 1));
                    r = r.slice(r.indexOf("(") + 1);
                }
            }
            let l = join.call(o, "") + r;
            l = l.replace(/(\\\(|\\\)|[^()])+/g, (e)=>`[\\s\\S]{${e.replace("\\", "").length}}`);
            const s = new RegExp(l, e.multiline ? "gm" : "g");
            s.lastIndex = e.leftContext.length;
            s.exec(e.input);
        };
    }
    function O(e) {
        if (e === null) {
            throw new TypeError("Cannot convert null or undefined to object");
        }
        if ((e === undefined ? "undefined" : u.typeof(e)) === "object") {
            return e;
        }
        return Object(e);
    }
    function S(e) {
        if (typeof e === "number") {
            return e;
        }
        return Number(e);
    }
    function L(e) {
        if (hasOwnProperty.call(e, "__getInternalProperties")) {
            return e.__getInternalProperties(x);
        }
        return v(null);
    }
    M.prototype = v(null);
    E.prototype = v(null);
    const z = RegExp("^(?:(?:[a-z]{2,3}(?:-[a-z]{3}(?:-[a-z]{3}){0,2})?|[a-z]{4}|[a-z]{5,8})(?:-[a-z]{4})?(?:-(?:[a-z]{2}|\\d{3}))?(?:-(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3}))*(?:-[0-9a-wy-z](?:-[a-z0-9]{2,8})+)*(?:-x(?:-[a-z0-9]{1,8})+)?|x(?:-[a-z0-9]{1,8})+|(?:(?:en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))|(?:art-lojban|cel-gaulish|no-bok|no-nyn|zh-(?:guoyu|hakka|min|min-nan|xiang))))$", "i");
    const D = RegExp("^(?!x).*?-((?:[a-z0-9]{5,8}|\\d[a-z0-9]{3}))-(?:\\w{4,8}-(?!x-))*\\1\\b", "i");
    const T = RegExp("^(?!x).*?-([0-9a-wy-z])-(?:\\w+-(?!x-))*\\1\\b", "i");
    const V = RegExp("-[0-9a-wy-z](?:-[a-z0-9]{2,8})+", "ig");
    let H;
    const P = {
        tags: {
            "art-lojban": "jbo",
            "i-ami": "ami",
            "i-bnn": "bnn",
            "i-hak": "hak",
            "i-klingon": "tlh",
            "i-lux": "lb",
            "i-navajo": "nv",
            "i-pwn": "pwn",
            "i-tao": "tao",
            "i-tay": "tay",
            "i-tsu": "tsu",
            "no-bok": "nb",
            "no-nyn": "nn",
            "sgn-BE-FR": "sfb",
            "sgn-BE-NL": "vgt",
            "sgn-CH-DE": "sgg",
            "zh-guoyu": "cmn",
            "zh-hakka": "hak",
            "zh-min-nan": "nan",
            "zh-xiang": "hsn",
            "sgn-BR": "bzs",
            "sgn-CO": "csn",
            "sgn-DE": "gsg",
            "sgn-DK": "dsl",
            "sgn-ES": "ssp",
            "sgn-FR": "fsl",
            "sgn-GB": "bfi",
            "sgn-GR": "gss",
            "sgn-IE": "isg",
            "sgn-IT": "ise",
            "sgn-JP": "jsl",
            "sgn-MX": "mfs",
            "sgn-NI": "ncs",
            "sgn-NL": "dse",
            "sgn-NO": "nsl",
            "sgn-PT": "psr",
            "sgn-SE": "swl",
            "sgn-US": "ase",
            "sgn-ZA": "sfs",
            "zh-cmn": "cmn",
            "zh-cmn-Hans": "cmn-Hans",
            "zh-cmn-Hant": "cmn-Hant",
            "zh-gan": "gan",
            "zh-wuu": "wuu",
            "zh-yue": "yue"
        },
        subtags: {
            BU: "MM",
            DD: "DE",
            FX: "FR",
            TP: "TL",
            YD: "YE",
            ZR: "CD",
            heploc: "alalc97",
            in: "id",
            iw: "he",
            ji: "yi",
            jw: "jv",
            mo: "ro",
            ayx: "nun",
            bjd: "drl",
            ccq: "rki",
            cjr: "mom",
            cka: "cmr",
            cmk: "xch",
            drh: "khk",
            drw: "prs",
            gav: "dev",
            hrr: "jal",
            ibi: "opa",
            kgh: "kml",
            lcq: "ppr",
            mst: "mry",
            myt: "mry",
            sca: "hle",
            tie: "ras",
            tkk: "twm",
            tlw: "weo",
            tnf: "prs",
            ybd: "rki",
            yma: "lrr"
        },
        extLang: {
            aao: [
                "aao",
                "ar"
            ],
            abh: [
                "abh",
                "ar"
            ],
            abv: [
                "abv",
                "ar"
            ],
            acm: [
                "acm",
                "ar"
            ],
            acq: [
                "acq",
                "ar"
            ],
            acw: [
                "acw",
                "ar"
            ],
            acx: [
                "acx",
                "ar"
            ],
            acy: [
                "acy",
                "ar"
            ],
            adf: [
                "adf",
                "ar"
            ],
            ads: [
                "ads",
                "sgn"
            ],
            aeb: [
                "aeb",
                "ar"
            ],
            aec: [
                "aec",
                "ar"
            ],
            aed: [
                "aed",
                "sgn"
            ],
            aen: [
                "aen",
                "sgn"
            ],
            afb: [
                "afb",
                "ar"
            ],
            afg: [
                "afg",
                "sgn"
            ],
            ajp: [
                "ajp",
                "ar"
            ],
            apc: [
                "apc",
                "ar"
            ],
            apd: [
                "apd",
                "ar"
            ],
            arb: [
                "arb",
                "ar"
            ],
            arq: [
                "arq",
                "ar"
            ],
            ars: [
                "ars",
                "ar"
            ],
            ary: [
                "ary",
                "ar"
            ],
            arz: [
                "arz",
                "ar"
            ],
            ase: [
                "ase",
                "sgn"
            ],
            asf: [
                "asf",
                "sgn"
            ],
            asp: [
                "asp",
                "sgn"
            ],
            asq: [
                "asq",
                "sgn"
            ],
            asw: [
                "asw",
                "sgn"
            ],
            auz: [
                "auz",
                "ar"
            ],
            avl: [
                "avl",
                "ar"
            ],
            ayh: [
                "ayh",
                "ar"
            ],
            ayl: [
                "ayl",
                "ar"
            ],
            ayn: [
                "ayn",
                "ar"
            ],
            ayp: [
                "ayp",
                "ar"
            ],
            bbz: [
                "bbz",
                "ar"
            ],
            bfi: [
                "bfi",
                "sgn"
            ],
            bfk: [
                "bfk",
                "sgn"
            ],
            bjn: [
                "bjn",
                "ms"
            ],
            bog: [
                "bog",
                "sgn"
            ],
            bqn: [
                "bqn",
                "sgn"
            ],
            bqy: [
                "bqy",
                "sgn"
            ],
            btj: [
                "btj",
                "ms"
            ],
            bve: [
                "bve",
                "ms"
            ],
            bvl: [
                "bvl",
                "sgn"
            ],
            bvu: [
                "bvu",
                "ms"
            ],
            bzs: [
                "bzs",
                "sgn"
            ],
            cdo: [
                "cdo",
                "zh"
            ],
            cds: [
                "cds",
                "sgn"
            ],
            cjy: [
                "cjy",
                "zh"
            ],
            cmn: [
                "cmn",
                "zh"
            ],
            coa: [
                "coa",
                "ms"
            ],
            cpx: [
                "cpx",
                "zh"
            ],
            csc: [
                "csc",
                "sgn"
            ],
            csd: [
                "csd",
                "sgn"
            ],
            cse: [
                "cse",
                "sgn"
            ],
            csf: [
                "csf",
                "sgn"
            ],
            csg: [
                "csg",
                "sgn"
            ],
            csl: [
                "csl",
                "sgn"
            ],
            csn: [
                "csn",
                "sgn"
            ],
            csq: [
                "csq",
                "sgn"
            ],
            csr: [
                "csr",
                "sgn"
            ],
            czh: [
                "czh",
                "zh"
            ],
            czo: [
                "czo",
                "zh"
            ],
            doq: [
                "doq",
                "sgn"
            ],
            dse: [
                "dse",
                "sgn"
            ],
            dsl: [
                "dsl",
                "sgn"
            ],
            dup: [
                "dup",
                "ms"
            ],
            ecs: [
                "ecs",
                "sgn"
            ],
            esl: [
                "esl",
                "sgn"
            ],
            esn: [
                "esn",
                "sgn"
            ],
            eso: [
                "eso",
                "sgn"
            ],
            eth: [
                "eth",
                "sgn"
            ],
            fcs: [
                "fcs",
                "sgn"
            ],
            fse: [
                "fse",
                "sgn"
            ],
            fsl: [
                "fsl",
                "sgn"
            ],
            fss: [
                "fss",
                "sgn"
            ],
            gan: [
                "gan",
                "zh"
            ],
            gds: [
                "gds",
                "sgn"
            ],
            gom: [
                "gom",
                "kok"
            ],
            gse: [
                "gse",
                "sgn"
            ],
            gsg: [
                "gsg",
                "sgn"
            ],
            gsm: [
                "gsm",
                "sgn"
            ],
            gss: [
                "gss",
                "sgn"
            ],
            gus: [
                "gus",
                "sgn"
            ],
            hab: [
                "hab",
                "sgn"
            ],
            haf: [
                "haf",
                "sgn"
            ],
            hak: [
                "hak",
                "zh"
            ],
            hds: [
                "hds",
                "sgn"
            ],
            hji: [
                "hji",
                "ms"
            ],
            hks: [
                "hks",
                "sgn"
            ],
            hos: [
                "hos",
                "sgn"
            ],
            hps: [
                "hps",
                "sgn"
            ],
            hsh: [
                "hsh",
                "sgn"
            ],
            hsl: [
                "hsl",
                "sgn"
            ],
            hsn: [
                "hsn",
                "zh"
            ],
            icl: [
                "icl",
                "sgn"
            ],
            ils: [
                "ils",
                "sgn"
            ],
            inl: [
                "inl",
                "sgn"
            ],
            ins: [
                "ins",
                "sgn"
            ],
            ise: [
                "ise",
                "sgn"
            ],
            isg: [
                "isg",
                "sgn"
            ],
            isr: [
                "isr",
                "sgn"
            ],
            jak: [
                "jak",
                "ms"
            ],
            jax: [
                "jax",
                "ms"
            ],
            jcs: [
                "jcs",
                "sgn"
            ],
            jhs: [
                "jhs",
                "sgn"
            ],
            jls: [
                "jls",
                "sgn"
            ],
            jos: [
                "jos",
                "sgn"
            ],
            jsl: [
                "jsl",
                "sgn"
            ],
            jus: [
                "jus",
                "sgn"
            ],
            kgi: [
                "kgi",
                "sgn"
            ],
            knn: [
                "knn",
                "kok"
            ],
            kvb: [
                "kvb",
                "ms"
            ],
            kvk: [
                "kvk",
                "sgn"
            ],
            kvr: [
                "kvr",
                "ms"
            ],
            kxd: [
                "kxd",
                "ms"
            ],
            lbs: [
                "lbs",
                "sgn"
            ],
            lce: [
                "lce",
                "ms"
            ],
            lcf: [
                "lcf",
                "ms"
            ],
            liw: [
                "liw",
                "ms"
            ],
            lls: [
                "lls",
                "sgn"
            ],
            lsg: [
                "lsg",
                "sgn"
            ],
            lsl: [
                "lsl",
                "sgn"
            ],
            lso: [
                "lso",
                "sgn"
            ],
            lsp: [
                "lsp",
                "sgn"
            ],
            lst: [
                "lst",
                "sgn"
            ],
            lsy: [
                "lsy",
                "sgn"
            ],
            ltg: [
                "ltg",
                "lv"
            ],
            lvs: [
                "lvs",
                "lv"
            ],
            lzh: [
                "lzh",
                "zh"
            ],
            max: [
                "max",
                "ms"
            ],
            mdl: [
                "mdl",
                "sgn"
            ],
            meo: [
                "meo",
                "ms"
            ],
            mfa: [
                "mfa",
                "ms"
            ],
            mfb: [
                "mfb",
                "ms"
            ],
            mfs: [
                "mfs",
                "sgn"
            ],
            min: [
                "min",
                "ms"
            ],
            mnp: [
                "mnp",
                "zh"
            ],
            mqg: [
                "mqg",
                "ms"
            ],
            mre: [
                "mre",
                "sgn"
            ],
            msd: [
                "msd",
                "sgn"
            ],
            msi: [
                "msi",
                "ms"
            ],
            msr: [
                "msr",
                "sgn"
            ],
            mui: [
                "mui",
                "ms"
            ],
            mzc: [
                "mzc",
                "sgn"
            ],
            mzg: [
                "mzg",
                "sgn"
            ],
            mzy: [
                "mzy",
                "sgn"
            ],
            nan: [
                "nan",
                "zh"
            ],
            nbs: [
                "nbs",
                "sgn"
            ],
            ncs: [
                "ncs",
                "sgn"
            ],
            nsi: [
                "nsi",
                "sgn"
            ],
            nsl: [
                "nsl",
                "sgn"
            ],
            nsp: [
                "nsp",
                "sgn"
            ],
            nsr: [
                "nsr",
                "sgn"
            ],
            nzs: [
                "nzs",
                "sgn"
            ],
            okl: [
                "okl",
                "sgn"
            ],
            orn: [
                "orn",
                "ms"
            ],
            ors: [
                "ors",
                "ms"
            ],
            pel: [
                "pel",
                "ms"
            ],
            pga: [
                "pga",
                "ar"
            ],
            pks: [
                "pks",
                "sgn"
            ],
            prl: [
                "prl",
                "sgn"
            ],
            prz: [
                "prz",
                "sgn"
            ],
            psc: [
                "psc",
                "sgn"
            ],
            psd: [
                "psd",
                "sgn"
            ],
            pse: [
                "pse",
                "ms"
            ],
            psg: [
                "psg",
                "sgn"
            ],
            psl: [
                "psl",
                "sgn"
            ],
            pso: [
                "pso",
                "sgn"
            ],
            psp: [
                "psp",
                "sgn"
            ],
            psr: [
                "psr",
                "sgn"
            ],
            pys: [
                "pys",
                "sgn"
            ],
            rms: [
                "rms",
                "sgn"
            ],
            rsi: [
                "rsi",
                "sgn"
            ],
            rsl: [
                "rsl",
                "sgn"
            ],
            sdl: [
                "sdl",
                "sgn"
            ],
            sfb: [
                "sfb",
                "sgn"
            ],
            sfs: [
                "sfs",
                "sgn"
            ],
            sgg: [
                "sgg",
                "sgn"
            ],
            sgx: [
                "sgx",
                "sgn"
            ],
            shu: [
                "shu",
                "ar"
            ],
            slf: [
                "slf",
                "sgn"
            ],
            sls: [
                "sls",
                "sgn"
            ],
            sqk: [
                "sqk",
                "sgn"
            ],
            sqs: [
                "sqs",
                "sgn"
            ],
            ssh: [
                "ssh",
                "ar"
            ],
            ssp: [
                "ssp",
                "sgn"
            ],
            ssr: [
                "ssr",
                "sgn"
            ],
            svk: [
                "svk",
                "sgn"
            ],
            swc: [
                "swc",
                "sw"
            ],
            swh: [
                "swh",
                "sw"
            ],
            swl: [
                "swl",
                "sgn"
            ],
            syy: [
                "syy",
                "sgn"
            ],
            tmw: [
                "tmw",
                "ms"
            ],
            tse: [
                "tse",
                "sgn"
            ],
            tsm: [
                "tsm",
                "sgn"
            ],
            tsq: [
                "tsq",
                "sgn"
            ],
            tss: [
                "tss",
                "sgn"
            ],
            tsy: [
                "tsy",
                "sgn"
            ],
            tza: [
                "tza",
                "sgn"
            ],
            ugn: [
                "ugn",
                "sgn"
            ],
            ugy: [
                "ugy",
                "sgn"
            ],
            ukl: [
                "ukl",
                "sgn"
            ],
            uks: [
                "uks",
                "sgn"
            ],
            urk: [
                "urk",
                "ms"
            ],
            uzn: [
                "uzn",
                "uz"
            ],
            uzs: [
                "uzs",
                "uz"
            ],
            vgt: [
                "vgt",
                "sgn"
            ],
            vkk: [
                "vkk",
                "ms"
            ],
            vkt: [
                "vkt",
                "ms"
            ],
            vsi: [
                "vsi",
                "sgn"
            ],
            vsl: [
                "vsl",
                "sgn"
            ],
            vsv: [
                "vsv",
                "sgn"
            ],
            wuu: [
                "wuu",
                "zh"
            ],
            xki: [
                "xki",
                "sgn"
            ],
            xml: [
                "xml",
                "sgn"
            ],
            xmm: [
                "xmm",
                "ms"
            ],
            xms: [
                "xms",
                "sgn"
            ],
            yds: [
                "yds",
                "sgn"
            ],
            ysl: [
                "ysl",
                "sgn"
            ],
            yue: [
                "yue",
                "zh"
            ],
            zib: [
                "zib",
                "sgn"
            ],
            zlm: [
                "zlm",
                "ms"
            ],
            zmi: [
                "zmi",
                "ms"
            ],
            zsl: [
                "zsl",
                "sgn"
            ],
            zsm: [
                "zsm",
                "ms"
            ]
        }
    };
    function A(e) {
        for(let t = e.length; t--;){
            const n = e.charAt(t);
            if (n >= "a" && n <= "z") {
                e = e.slice(0, t) + n.toUpperCase() + e.slice(t + 1);
            }
        }
        return e;
    }
    function R(e) {
        return !!z.test(e) && !D.test(e) && !T.test(e);
    }
    function j(e) {
        let t;
        let n;
        for(let r = 1, o = (n = (e = e.toLowerCase()).split("-")).length; r < o; r++){
            if (n[r].length === 2) {
                n[r] = n[r].toUpperCase();
            } else if (n[r].length === 4) {
                n[r] = n[r].charAt(0).toUpperCase() + n[r].slice(1);
            } else if (n[r].length === 1 && n[r] !== "x") {
                break;
            }
        }
        if ((t = (e = join.call(n, "-")).match(V)) && t.length > 1) {
            t.sort();
            e = e.replace(RegExp(`(?:${V.source})+`, "i"), join.call(t, ""));
        }
        if (hasOwnProperty.call(P.tags, e)) {
            e = P.tags[e];
        }
        for(let a = 1, i = (n = e.split("-")).length; a < i; a++){
            if (hasOwnProperty.call(P.subtags, n[a])) {
                n[a] = P.subtags[n[a]];
            } else if (hasOwnProperty.call(P.extLang, n[a])) {
                n[a] = P.extLang[n[a]][0];
                if (a === 1 && P.extLang[n[1]][1] === n[0]) {
                    n = slice.call(n, a++);
                    i -= 1;
                }
            }
        }
        return join.call(n, "-");
    }
    const N = /^[A-Z]{3}$/;
    const I = /-u(?:-[0-9a-z]{2,8})+/gi;
    function B(e) {
        if (e === undefined) {
            return new E;
        }
        const t = new E;
        const n = O(e = typeof e === "string" ? [
            e
        ] : e);
        for(let r = ((e)=>{
            const t = ((e)=>{
                const t = S(e);
                if (isNaN(t)) {
                    return 0;
                }
                if (t === 0 || t === -0 || t === Infinity || t === -Infinity) {
                    return t;
                }
                if (t < 0) {
                    return -1 * Math.floor(Math.abs(t));
                }
                return Math.floor(Math.abs(t));
            })(e);
            if (t <= 0) {
                return 0;
            }
            if (t === Infinity) {
                return 2 ** 53 - 1;
            }
            return Math.min(t, 2 ** 53 - 1);
        })(n.length), o = 0; o < r;){
            const a = String(o);
            if (a in n) {
                const i = n[a];
                if (i === null || typeof i !== "string" && (i === undefined ? "undefined" : u.typeof(i)) !== "object") {
                    throw new TypeError("String or Object type expected");
                }
                let l = String(i);
                if (!R(l)) {
                    throw new RangeError(`'${l}' is not a structurally valid language tag`);
                }
                l = j(l);
                if (h.call(t, l) === -1) {
                    push.call(t, l);
                }
            }
            o++;
        }
        return t;
    }
    function U(e, t) {
        for(let n = t; n;){
            if (h.call(e, n) > -1) {
                return n;
            }
            let r = n.lastIndexOf("-");
            if (r < 0) {
                return;
            }
            if (r >= 2 && n.charAt(r - 2) === "-") {
                r -= 2;
            }
            n = n.substring(0, r);
        }
    }
    function F(e, t) {
        for(var n = 0, r = t.length, o, a, i; n < r && !o;){
            a = t[n];
            o = U(e, i = String(a).replace(I, ""));
            n++;
        }
        const l = new M;
        if (o !== undefined) {
            l["[[locale]]"] = o;
            if (String(a) !== String(i)) {
                const s = a.match(I)[0];
                const u = a.indexOf("-u-");
                l["[[extension]]"] = s;
                l["[[extensionIndex]]"] = u;
            }
        } else {
            l["[[locale]]"] = H;
        }
        return l;
    }
    function Z(e, t, n, r, o) {
        if (e.length === 0) {
            throw new ReferenceError("No locale data has been provided for this object yet.");
        }
        let a;
        let i = (a = n["[[localeMatcher]]"] === "lookup" ? F(e, t) : ((e, t)=>F(e, t))(e, t))["[[locale]]"];
        let l;
        let s;
        if (hasOwnProperty.call(a, "[[extension]]")) {
            const u = a["[[extension]]"];
            s = (l = String.prototype.split.call(u, "-")).length;
        }
        const c = new M;
        c["[[dataLocale]]"] = i;
        let f = "-u";
        for(let p = 0, v = r.length; p < v;){
            const m = r[p];
            const g = o[i][m];
            let y = g[0];
            let b = "";
            const C = h;
            if (l !== undefined) {
                const w = C.call(l, m);
                if (w !== -1) {
                    if (w + 1 < s && l[w + 1].length > 2) {
                        const _ = l[w + 1];
                        if (C.call(g, _) !== -1) {
                            b = `-${m}-${y = _}`;
                        }
                    } else {
                        if (C(g, "true") !== -1) {
                            y = "true";
                        }
                    }
                }
            }
            if (hasOwnProperty.call(n, `[[${m}]]`)) {
                const x = n[`[[${m}]]`];
                if (C.call(g, x) !== -1 && x !== y) {
                    y = x;
                    b = "";
                }
            }
            c[`[[${m}]]`] = y;
            f += b;
            p++;
        }
        if (f.length > 2) {
            const E = i.indexOf("-x-");
            if (E === -1) {
                i += f;
            } else {
                const k = i.substring(0, E);
                const O = i.substring(E);
                i = k + f + O;
            }
            i = j(i);
        }
        c["[[locale]]"] = i;
        return c;
    }
    function q(e, t) {
        for(var n = t.length, r = new E, o = 0; o < n;){
            const a = t[o];
            if (U(e, String(a).replace(I, "")) !== undefined) {
                push.call(r, a);
            }
            o++;
        }
        return slice.call(r);
    }
    function W(e, t, n) {
        let r;
        let o;
        if (n !== undefined && (o = (n = new M(O(n))).localeMatcher) !== undefined && (o = String(o)) !== "lookup" && o !== "best fit") {
            throw new RangeError('matcher should be "lookup" or "best fit"');
        }
        for(const a in r = o === undefined || o === "best fit" ? ((e, t)=>q(e, t))(e, t) : q(e, t)){
            if (hasOwnProperty.call(r, a)) {
                p(r, a, {
                    writable: false,
                    configurable: false,
                    value: r[a]
                });
            }
        }
        p(r, "length", {
            writable: false
        });
        return r;
    }
    function G(e, t, n, r, o) {
        let a = e[t];
        if (a !== undefined) {
            a = n === "boolean" ? Boolean(a) : n === "string" ? String(a) : a;
            if (r !== undefined && h.call(r, a) === -1) {
                throw new RangeError(`'${a}' is not an allowed value for \`${t}\``);
            }
            return a;
        }
        return o;
    }
    function Y(e, t, n, r, o) {
        let a = e[t];
        if (a !== undefined) {
            a = Number(a);
            if (isNaN(a) || a < n || a > r) {
                throw new RangeError("Value is not a number or outside accepted range");
            }
            return Math.floor(a);
        }
        return o;
    }
    const $ = {};
    Object.defineProperty($, "getCanonicalLocales", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function(e) {
            const t = B(e);
            const n = [];
            for(let r = t.length, o = 0; o < r;){
                n[o] = t[o];
                o++;
            }
            return n;
        }
    });
    const K = {
        BHD: 3,
        BYR: 0,
        XOF: 0,
        BIF: 0,
        XAF: 0,
        CLF: 4,
        CLP: 0,
        KMF: 0,
        DJF: 0,
        XPF: 0,
        GNF: 0,
        ISK: 0,
        IQD: 3,
        JPY: 0,
        JOD: 3,
        KRW: 0,
        KWD: 3,
        LYD: 3,
        OMR: 3,
        PYG: 0,
        RWF: 0,
        TND: 3,
        UGX: 0,
        UYI: 0,
        VUV: 0,
        VND: 0
    };
    function J(e, t) {
        if (this && this !== $) {
            return Q(O(this), e, t);
        }
        return new $.NumberFormat(e, t);
    }
    function Q(e, t, n) {
        const r = L(e);
        const o = k();
        if (r["[[initializedIntlObject]]"] === true) {
            throw new TypeError("`this` object has already been initialized as an Intl object");
        }
        p(e, "__getInternalProperties", {
            value: function(...args) {
                if (args[0] === x) {
                    return r;
                }
            }
        });
        r["[[initializedIntlObject]]"] = true;
        const a = B(t);
        n = n === undefined ? {} : O(n);
        const i = new M;
        const l = G(n, "localeMatcher", "string", new E("lookup", "best fit"), "best fit");
        i["[[localeMatcher]]"] = l;
        const s = _.NumberFormat["[[localeData]]"];
        const u = Z(_.NumberFormat["[[availableLocales]]"], a, i, _.NumberFormat["[[relevantExtensionKeys]]"], s);
        r["[[locale]]"] = u["[[locale]]"];
        r["[[numberingSystem]]"] = u["[[nu]]"];
        r["[[dataLocale]]"] = u["[[dataLocale]]"];
        const c = u["[[dataLocale]]"];
        const d = G(n, "style", "string", new E("decimal", "percent", "currency"), "decimal");
        r["[[style]]"] = d;
        let h;
        let v = G(n, "currency", "string");
        if (v !== undefined && (h = A(String(v)), N.test(h) === false)) {
            throw new RangeError(`'${v}' is not a valid currency code`);
        }
        if (d === "currency" && v === undefined) {
            throw new TypeError("Currency code is required when style is currency");
        }
        let m;
        if (d === "currency") {
            v = v.toUpperCase();
            r["[[currency]]"] = v;
            m = ((e)=>{
                if (K[e] !== undefined) {
                    return K[e];
                }
                return 2;
            })(v);
        }
        const g = G(n, "currencyDisplay", "string", new E("code", "symbol", "name"), "symbol");
        if (d === "currency") {
            r["[[currencyDisplay]]"] = g;
        }
        const y = Y(n, "minimumIntegerDigits", 1, 21, 1);
        r["[[minimumIntegerDigits]]"] = y;
        const b = Y(n, "minimumFractionDigits", 0, 20, d === "currency" ? m : 0);
        r["[[minimumFractionDigits]]"] = b;
        const C = Y(n, "maximumFractionDigits", b, 20, d === "currency" ? Math.max(b, m) : d === "percent" ? Math.max(b, 0) : Math.max(b, 3));
        r["[[maximumFractionDigits]]"] = C;
        let n_minimumSignificantDigits = n.minimumSignificantDigits;
        let n_maximumSignificantDigits = n.maximumSignificantDigits;
        if (!(n_minimumSignificantDigits === undefined && n_maximumSignificantDigits === undefined)) {
            n_minimumSignificantDigits = Y(n, "minimumSignificantDigits", 1, 21, 1);
            n_maximumSignificantDigits = Y(n, "maximumSignificantDigits", n_minimumSignificantDigits, 21, 21);
            r["[[minimumSignificantDigits]]"] = n_minimumSignificantDigits;
            r["[[maximumSignificantDigits]]"] = n_maximumSignificantDigits;
        }
        const z = G(n, "useGrouping", "boolean", undefined, true);
        r["[[useGrouping]]"] = z;
        const D = s[c].patterns[d];
        r["[[positivePattern]]"] = D.positivePattern;
        r["[[negativePattern]]"] = D.negativePattern;
        r["[[boundFormat]]"] = undefined;
        r["[[initializedNumberFormat]]"] = true;
        if (f) {
            e.format = X.call(e);
        }
        o();
        return e;
    }
    function X() {
        const e = this !== null && u.typeof(this) === "object" && L(this);
        if (!e || !e["[[initializedNumberFormat]]"]) {
            throw new TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.");
        }
        if (e["[[boundFormat]]"] === undefined) {
            const t = w.call(function(e) {
                return ne(this, Number(e));
            }, this);
            e["[[boundFormat]]"] = t;
        }
        return e["[[boundFormat]]"];
    }
    function ee(e, t) {
        for(var n = te(e, t), r = [], o = 0, a = 0; n.length > a; a++){
            const i = n[a];
            const l = {};
            l.type = i["[[type]]"];
            l.value = i["[[value]]"];
            r[o] = l;
            o += 1;
        }
        return r;
    }
    function te(e, t) {
        const n = L(e);
        const { "[[dataLocale]]": dataLocale, "[[numberingSystem]]": numberingSystem } = n;
        const a = _.NumberFormat["[[localeData]]"][dataLocale];
        const i = a.symbols[numberingSystem] || a.symbols.latn;
        let l;
        if (!isNaN(t) && t < 0) {
            t = -t;
            l = n["[[negativePattern]]"];
        } else {
            l = n["[[positivePattern]]"];
        }
        const s = new E;
        for(var u = l.indexOf("{", 0), c = 0, f = 0, p = l.length; u > -1 && u < p;){
            if ((c = l.indexOf("}", u)) === -1) {
                throw new Error;
            }
            if (u > f) {
                const h = l.substring(f, u);
                push.call(s, {
                    "[[type]]": "literal",
                    "[[value]]": h
                });
            }
            const v = l.substring(u + 1, c);
            if (v === "number") {
                if (isNaN(t)) {
                    const m = i.nan;
                    push.call(s, {
                        "[[type]]": "nan",
                        "[[value]]": m
                    });
                } else if (isFinite(t)) {
                    if (n["[[style]]"] === "percent" && isFinite(t)) {
                        t *= 100;
                    }
                    var g;
                    g = hasOwnProperty.call(n, "[[minimumSignificantDigits]]") && hasOwnProperty.call(n, "[[maximumSignificantDigits]]") ? re(t, n["[[minimumSignificantDigits]]"], n["[[maximumSignificantDigits]]"]) : oe(t, n["[[minimumIntegerDigits]]"], n["[[minimumFractionDigits]]"], n["[[maximumFractionDigits]]"]);
                    if (ae[numberingSystem]) {
                        (()=>{
                            const e = ae[numberingSystem];
                            g = String(g).replace(/\d/g, (t)=>e[t]);
                        })();
                    } else {
                        g = String(g);
                    }
                    let b;
                    let w;
                    const x = g.indexOf(".", 0);
                    if (x > 0) {
                        b = g.substring(0, x);
                        w = g.substring(x + 1, x.length);
                    } else {
                        b = g;
                        w = undefined;
                    }
                    if (n["[[useGrouping]]"] === true) {
                        const M = i.group;
                        const k = [];
                        const O = a.patterns.primaryGroupSize || 3;
                        const S = a.patterns.secondaryGroupSize || O;
                        if (b.length > O) {
                            const z = b.length - O;
                            let D = z % S;
                            const T = b.slice(0, D);
                            for(T.length && push.call(k, T); D < z;){
                                push.call(k, b.slice(D, D + S));
                                D += S;
                            }
                            push.call(k, b.slice(z));
                        } else {
                            push.call(k, b);
                        }
                        if (k.length === 0) {
                            throw new Error;
                        }
                        while(k.length){
                            const V = shift.call(k);
                            push.call(s, {
                                "[[type]]": "integer",
                                "[[value]]": V
                            });
                            if (k.length) {
                                push.call(s, {
                                    "[[type]]": "group",
                                    "[[value]]": M
                                });
                            }
                        }
                    } else {
                        push.call(s, {
                            "[[type]]": "integer",
                            "[[value]]": b
                        });
                    }
                    if (w !== undefined) {
                        const H = i.decimal;
                        push.call(s, {
                            "[[type]]": "decimal",
                            "[[value]]": H
                        });
                        push.call(s, {
                            "[[type]]": "fraction",
                            "[[value]]": w
                        });
                    }
                } else {
                    const P = i.infinity;
                    push.call(s, {
                        "[[type]]": "infinity",
                        "[[value]]": P
                    });
                }
            } else if (v === "plusSign") {
                const A = i.plusSign;
                push.call(s, {
                    "[[type]]": "plusSign",
                    "[[value]]": A
                });
            } else if (v === "minusSign") {
                const R = i.minusSign;
                push.call(s, {
                    "[[type]]": "minusSign",
                    "[[value]]": R
                });
            } else if (v === "percentSign" && n["[[style]]"] === "percent") {
                const j = i.percentSign;
                push.call(s, {
                    "[[type]]": "literal",
                    "[[value]]": j
                });
            } else if (v === "currency" && n["[[style]]"] === "currency") {
                const N = n["[[currency]]"];
                let I;
                if (n["[[currencyDisplay]]"] === "code") {
                    I = N;
                } else if (n["[[currencyDisplay]]"] === "symbol") {
                    I = a.currencies[N] || N;
                } else if (n["[[currencyDisplay]]"] === "name") {
                    I = N;
                }
                push.call(s, {
                    "[[type]]": "currency",
                    "[[value]]": I
                });
            } else {
                const B = l.substring(u, c);
                push.call(s, {
                    "[[type]]": "literal",
                    "[[value]]": B
                });
            }
            f = c + 1;
            u = l.indexOf("{", f);
        }
        if (f < p) {
            const U = l.substring(f, p);
            push.call(s, {
                "[[type]]": "literal",
                "[[value]]": U
            });
        }
        return s;
    }
    function ne(e, t) {
        for(var n = te(e, t), r = "", o = 0; n.length > o; o++){
            r += n[o]["[[value]]"];
        }
        return r;
    }
    function re(e, t, n) {
        const r = n;
        let o;
        let a;
        if (e === 0) {
            o = join.call(Array(r + 1), "0");
            a = 0;
        } else {
            a = ((e)=>{
                if (typeof Math.log10 === "function") {
                    return Math.floor(Math.log10(e));
                }
                const t = Math.round(Math.log(e) * Math.LOG10E);
                return t - (Number(`1e${t}`) > e);
            })(Math.abs(e));
            const i = Math.round(Math.exp(Math.abs(a - r + 1) * Math.LN10));
            o = String(Math.round(a - r + 1 < 0 ? e * i : e / i));
        }
        if (a >= r) {
            return o + join.call(Array(a - r + 1 + 1), "0");
        }
        if (a === r - 1) {
            return o;
        }
        if (a >= 0) {
            o = `${o.slice(0, a + 1)}.${o.slice(a + 1)}`;
        } else if (a < 0) {
            o = `0.${join.call(Array(1 - (a + 1)), "0")}${o}`;
        }
        if (o.indexOf(".") >= 0 && n > t) {
            for(let l = n - t; l > 0 && o.charAt(o.length - 1) === "0";){
                o = o.slice(0, -1);
                l--;
            }
            if (o.charAt(o.length - 1) === ".") {
                o = o.slice(0, -1);
            }
        }
        return o;
    }
    function oe(e, t, n, r) {
        let o;
        const a = r;
        const i = 10 ** a * e;
        let l = i === 0 ? "0" : i.toFixed(0);
        const s = (o = l.indexOf("e")) > -1 ? l.slice(o + 1) : 0;
        if (s) {
            l = l.slice(0, o).replace(".", "");
            l += join.call(Array(s - (l.length - 1) + 1), "0");
        }
        let u;
        if (a !== 0) {
            let c = l.length;
            if (c <= a) {
                l = join.call(Array(a + 1 - c + 1), "0") + l;
                c = a + 1;
            }
            const f = l.substring(0, c - a);
            const d = l.substring(c - a, l.length);
            l = `${f}.${d}`;
            u = f.length;
        } else {
            u = l.length;
        }
        for(let p = r - n; p > 0 && l.slice(-1) === "0";){
            l = l.slice(0, -1);
            p--;
        }
        if (l.slice(-1) === ".") {
            l = l.slice(0, -1);
        }
        if (u < t) {
            l = join.call(Array(t - u + 1), "0") + l;
        }
        return l;
    }
    p($, "NumberFormat", {
        configurable: true,
        writable: true,
        value: J
    });
    p($.NumberFormat, "prototype", {
        writable: false
    });
    _.NumberFormat = {
        "[[availableLocales]]": [],
        "[[relevantExtensionKeys]]": [
            "nu"
        ],
        "[[localeData]]": {}
    };
    p($.NumberFormat, "supportedLocalesOf", {
        configurable: true,
        writable: true,
        value: w.call(function(e, n) {
            if (!hasOwnProperty.call(this, "[[availableLocales]]")) {
                throw new TypeError("supportedLocalesOf() is not a constructor");
            }
            const t = k();
            const r = this["[[availableLocales]]"];
            const o = B(e);
            t();
            return W(r, o, n);
        }, _.NumberFormat)
    });
    p($.NumberFormat.prototype, "format", {
        configurable: true,
        get: X
    });
    Object.defineProperty($.NumberFormat.prototype, "formatToParts", {
        configurable: true,
        enumerable: false,
        writable: true,
        value: function(...args) {
            const e = args.length <= 0 || args[0] === undefined ? undefined : args[0];
            const t = this !== null && u.typeof(this) === "object" && L(this);
            if (!t || !t["[[initializedNumberFormat]]"]) {
                throw new TypeError("`this` value for formatToParts() is not an initialized Intl.NumberFormat object.");
            }
            const n = Number(e);
            return ee(this, n);
        }
    });
    var ae = {
        arab: [
            "٠",
            "١",
            "٢",
            "٣",
            "٤",
            "٥",
            "٦",
            "٧",
            "٨",
            "٩"
        ],
        arabext: [
            "۰",
            "۱",
            "۲",
            "۳",
            "۴",
            "۵",
            "۶",
            "۷",
            "۸",
            "۹"
        ],
        bali: [
            "᭐",
            "᭑",
            "᭒",
            "᭓",
            "᭔",
            "᭕",
            "᭖",
            "᭗",
            "᭘",
            "᭙"
        ],
        beng: [
            "০",
            "১",
            "২",
            "৩",
            "৪",
            "৫",
            "৬",
            "৭",
            "৮",
            "৯"
        ],
        deva: [
            "०",
            "१",
            "२",
            "३",
            "४",
            "५",
            "६",
            "७",
            "८",
            "९"
        ],
        fullwide: [
            "０",
            "１",
            "２",
            "３",
            "４",
            "５",
            "６",
            "７",
            "８",
            "９"
        ],
        gujr: [
            "૦",
            "૧",
            "૨",
            "૩",
            "૪",
            "૫",
            "૬",
            "૭",
            "૮",
            "૯"
        ],
        guru: [
            "੦",
            "੧",
            "੨",
            "੩",
            "੪",
            "੫",
            "੬",
            "੭",
            "੮",
            "੯"
        ],
        hanidec: [
            "〇",
            "一",
            "二",
            "三",
            "四",
            "五",
            "六",
            "七",
            "八",
            "九"
        ],
        khmr: [
            "០",
            "១",
            "២",
            "៣",
            "៤",
            "៥",
            "៦",
            "៧",
            "៨",
            "៩"
        ],
        knda: [
            "೦",
            "೧",
            "೨",
            "೩",
            "೪",
            "೫",
            "೬",
            "೭",
            "೮",
            "೯"
        ],
        laoo: [
            "໐",
            "໑",
            "໒",
            "໓",
            "໔",
            "໕",
            "໖",
            "໗",
            "໘",
            "໙"
        ],
        latn: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
        ],
        limb: [
            "᥆",
            "᥇",
            "᥈",
            "᥉",
            "᥊",
            "᥋",
            "᥌",
            "᥍",
            "᥎",
            "᥏"
        ],
        mlym: [
            "൦",
            "൧",
            "൨",
            "൩",
            "൪",
            "൫",
            "൬",
            "൭",
            "൮",
            "൯"
        ],
        mong: [
            "᠐",
            "᠑",
            "᠒",
            "᠓",
            "᠔",
            "᠕",
            "᠖",
            "᠗",
            "᠘",
            "᠙"
        ],
        mymr: [
            "၀",
            "၁",
            "၂",
            "၃",
            "၄",
            "၅",
            "၆",
            "၇",
            "၈",
            "၉"
        ],
        orya: [
            "୦",
            "୧",
            "୨",
            "୩",
            "୪",
            "୫",
            "୬",
            "୭",
            "୮",
            "୯"
        ],
        tamldec: [
            "௦",
            "௧",
            "௨",
            "௩",
            "௪",
            "௫",
            "௬",
            "௭",
            "௮",
            "௯"
        ],
        telu: [
            "౦",
            "౧",
            "౨",
            "౩",
            "౪",
            "౫",
            "౬",
            "౭",
            "౮",
            "౯"
        ],
        thai: [
            "๐",
            "๑",
            "๒",
            "๓",
            "๔",
            "๕",
            "๖",
            "๗",
            "๘",
            "๙"
        ],
        tibt: [
            "༠",
            "༡",
            "༢",
            "༣",
            "༤",
            "༥",
            "༦",
            "༧",
            "༨",
            "༩"
        ]
    };
    p($.NumberFormat.prototype, "resolvedOptions", {
        configurable: true,
        writable: true,
        value: function() {
            let e;
            const t = new M;
            const n = [
                "locale",
                "numberingSystem",
                "style",
                "currency",
                "currencyDisplay",
                "minimumIntegerDigits",
                "minimumFractionDigits",
                "maximumFractionDigits",
                "minimumSignificantDigits",
                "maximumSignificantDigits",
                "useGrouping"
            ];
            const r = this !== null && u.typeof(this) === "object" && L(this);
            if (!r || !r["[[initializedNumberFormat]]"]) {
                throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.");
            }
            for(let o = 0, a = n.length; o < a; o++){
                if (hasOwnProperty.call(r, e = `[[${n[o]}]]`)) {
                    t[n[o]] = {
                        value: r[e],
                        writable: true,
                        configurable: true,
                        enumerable: true
                    };
                }
            }
            return v({}, t);
        }
    });
    const ie = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
    const le = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    const se = /[rqQASjJgwWIQq]/;
    const ue = [
        "era",
        "year",
        "month",
        "day",
        "weekday",
        "quarter"
    ];
    const ce = [
        "hour",
        "minute",
        "second",
        "hour12",
        "timeZoneName"
    ];
    function fe(e) {
        for(let t = 0; t < ce.length; t += 1){
            if (e.hasOwnProperty(ce[t])) {
                return false;
            }
        }
        return true;
    }
    function de(e) {
        for(let t = 0; t < ue.length; t += 1){
            if (e.hasOwnProperty(ue[t])) {
                return false;
            }
        }
        return true;
    }
    function pe(e, t) {
        const n = {
            _: {}
        };
        for(let r = 0; r < ue.length; r += 1){
            if (e[ue[r]]) {
                n[ue[r]] = e[ue[r]];
            }
            if (e._[ue[r]]) {
                n._[ue[r]] = e._[ue[r]];
            }
        }
        for(let o = 0; o < ce.length; o += 1){
            if (t[ce[o]]) {
                n[ce[o]] = t[ce[o]];
            }
            if (t._[ce[o]]) {
                n._[ce[o]] = t._[ce[o]];
            }
        }
        return n;
    }
    function he(e) {
        e.pattern12 = e.extendedPattern.replace(/'([^']*)'/g, (e, t)=>t || "'");
        e.pattern = e.pattern12.replace("{ampm}", "").replace(le, "");
        return e;
    }
    function ve(e, t) {
        switch(e.charAt(0)){
            case "G":
                t.era = [
                    "short",
                    "short",
                    "short",
                    "long",
                    "narrow"
                ][e.length - 1];
                return "{era}";
            case "y":
            case "Y":
            case "u":
            case "U":
            case "r":
                t.year = e.length === 2 ? "2-digit" : "numeric";
                return "{year}";
            case "Q":
            case "q":
                t.quarter = [
                    "numeric",
                    "2-digit",
                    "short",
                    "long",
                    "narrow"
                ][e.length - 1];
                return "{quarter}";
            case "M":
            case "L":
                t.month = [
                    "numeric",
                    "2-digit",
                    "short",
                    "long",
                    "narrow"
                ][e.length - 1];
                return "{month}";
            case "w":
                t.week = e.length === 2 ? "2-digit" : "numeric";
                return "{weekday}";
            case "W":
                t.week = "numeric";
                return "{weekday}";
            case "d":
                t.day = e.length === 2 ? "2-digit" : "numeric";
                return "{day}";
            case "D":
            case "F":
            case "g":
                t.day = "numeric";
                return "{day}";
            case "E":
                t.weekday = [
                    "short",
                    "short",
                    "short",
                    "long",
                    "narrow",
                    "short"
                ][e.length - 1];
                return "{weekday}";
            case "e":
                t.weekday = [
                    "numeric",
                    "2-digit",
                    "short",
                    "long",
                    "narrow",
                    "short"
                ][e.length - 1];
                return "{weekday}";
            case "c":
                t.weekday = [
                    "numeric",
                    undefined,
                    "short",
                    "long",
                    "narrow",
                    "short"
                ][e.length - 1];
                return "{weekday}";
            case "a":
            case "b":
            case "B":
                t.hour12 = true;
                return "{ampm}";
            case "h":
            case "H":
                t.hour = e.length === 2 ? "2-digit" : "numeric";
                return "{hour}";
            case "k":
            case "K":
                t.hour12 = true;
                t.hour = e.length === 2 ? "2-digit" : "numeric";
                return "{hour}";
            case "m":
                t.minute = e.length === 2 ? "2-digit" : "numeric";
                return "{minute}";
            case "s":
                t.second = e.length === 2 ? "2-digit" : "numeric";
                return "{second}";
            case "S":
            case "A":
                t.second = "numeric";
                return "{second}";
            case "z":
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
                t.timeZoneName = e.length < 4 ? "short" : "long";
                return "{timeZoneName}";
        }
    }
    function me(e, originalPattern) {
        if (!se.test(originalPattern)) {
            const n = {
                originalPattern,
                _: {}
            };
            n.extendedPattern = originalPattern.replace(ie, (e)=>ve(e, n._));
            e.replace(ie, (e)=>ve(e, n));
            return he(n);
        }
    }
    const ge = {
        second: {
            numeric: "s",
            "2-digit": "ss"
        },
        minute: {
            numeric: "m",
            "2-digit": "mm"
        },
        year: {
            numeric: "y",
            "2-digit": "yy"
        },
        day: {
            numeric: "d",
            "2-digit": "dd"
        },
        month: {
            numeric: "L",
            "2-digit": "LL",
            narrow: "LLLLL",
            short: "LLL",
            long: "LLLL"
        },
        weekday: {
            narrow: "ccccc",
            short: "ccc",
            long: "cccc"
        }
    };
    const ye = v(null, {
        narrow: {},
        short: {},
        long: {}
    });
    function be(e, t, n, r, o) {
        const a = e[t] && e[t][n] ? e[t][n] : e.gregory[n];
        const i = {
            narrow: [
                "short",
                "long"
            ],
            short: [
                "long",
                "narrow"
            ],
            long: [
                "short",
                "narrow"
            ]
        };
        const l = hasOwnProperty.call(a, r) ? a[r] : hasOwnProperty.call(a, i[r][0]) ? a[i[r][0]] : a[i[r][1]];
        if (o !== null) {
            return l[o];
        }
        return l;
    }
    function Ce(e, t) {
        if (this && this !== $) {
            return we(O(this), e, t);
        }
        return new $.DateTimeFormat(e, t);
    }
    function we(e, t, n) {
        const r = L(e);
        const o = k();
        if (r["[[initializedIntlObject]]"] === true) {
            throw new TypeError("`this` object has already been initialized as an Intl object");
        }
        p(e, "__getInternalProperties", {
            value: function(...args) {
                if (args[0] === x) {
                    return r;
                }
            }
        });
        r["[[initializedIntlObject]]"] = true;
        const a = B(t);
        n = xe(n, "any", "date");
        let l = new M;
        let s = G(n, "localeMatcher", "string", new E("lookup", "best fit"), "best fit");
        l["[[localeMatcher]]"] = s;
        const __DateTimeFormat = _.DateTimeFormat;
        const c = __DateTimeFormat["[[localeData]]"];
        const v = Z(__DateTimeFormat["[[availableLocales]]"], a, l, __DateTimeFormat["[[relevantExtensionKeys]]"], c);
        r["[[locale]]"] = v["[[locale]]"];
        r["[[calendar]]"] = v["[[ca]]"];
        r["[[numberingSystem]]"] = v["[[nu]]"];
        r["[[dataLocale]]"] = v["[[dataLocale]]"];
        const m = v["[[dataLocale]]"];
        let n_timeZone = n.timeZone;
        if (n_timeZone !== undefined && (n_timeZone = A(n_timeZone)) !== "UTC") {
            throw new RangeError("timeZone is not supported.");
        }
        r["[[timeZone]]"] = n_timeZone;
        l = new M;
        for(const y in _e){
            if (hasOwnProperty.call(_e, y)) {
                const b = G(n, y, "string", _e[y]);
                l[`[[${y}]]`] = b;
            }
        }
        let C;
        const w = c[m];
        const O = ((e)=>{
            if (Object.prototype.toString.call(e) === "[object Array]") {
                return e;
            }
            return ((e)=>{
                const { availableFormats, timeFormats, dateFormats } = e;
                const o = [];
                let a;
                let i;
                let l;
                let s;
                let u;
                const c = [];
                const f = [];
                for(a in availableFormats){
                    if (availableFormats.hasOwnProperty(a) && (l = me(a, i = availableFormats[a]))) {
                        o.push(l);
                        if (fe(l)) {
                            f.push(l);
                        } else if (de(l)) {
                            c.push(l);
                        }
                    }
                }
                for(a in timeFormats){
                    if (timeFormats.hasOwnProperty(a) && (l = me(a, i = timeFormats[a]))) {
                        o.push(l);
                        c.push(l);
                    }
                }
                for(a in dateFormats){
                    if (dateFormats.hasOwnProperty(a) && (l = me(a, i = dateFormats[a]))) {
                        o.push(l);
                        f.push(l);
                    }
                }
                for(s = 0; s < c.length; s += 1){
                    for(u = 0; u < f.length; u += 1){
                        i = f[u].month === "long" ? f[u].weekday ? e.full : e.long : f[u].month === "short" ? e.medium : e.short;
                        l = pe(f[u], c[s]);
                        l.originalPattern = i;
                        l.extendedPattern = i.replace("{0}", c[s].extendedPattern).replace("{1}", f[u].extendedPattern).replace(/^[,\s]+|[,\s]+$/gi, "");
                        o.push(he(l));
                    }
                }
                return o;
            })(e);
        })(w.formats);
        s = G(n, "formatMatcher", "string", new E("basic", "best fit"), "best fit");
        w.formats = O;
        if (s === "basic") {
            C = ((e, t)=>{
                let n = -Infinity;
                let r;
                for(let o = 0, a = t.length; o < a;){
                    const i = t[o];
                    let l = 0;
                    for(const s in _e){
                        if (hasOwnProperty.call(_e, s)) {
                            const u = e[`[[${s}]]`];
                            const c = hasOwnProperty.call(i, s) ? i[s] : undefined;
                            if (u === undefined && c !== undefined) {
                                l -= 20;
                            } else if (u !== undefined && c === undefined) {
                                l -= 120;
                            } else {
                                const f = [
                                    "2-digit",
                                    "numeric",
                                    "narrow",
                                    "short",
                                    "long"
                                ];
                                const p = h.call(f, u);
                                const v = h.call(f, c);
                                const m = Math.max(Math.min(v - p, 2), -2);
                                switch(m){
                                    case 2:
                                        l -= 6;
                                        break;
                                    case 1:
                                        l -= 3;
                                        break;
                                    case -1:
                                        l -= 6;
                                        break;
                                    default:
                                        if (m === -2) {
                                            l -= 8;
                                        }
                                }
                            }
                        }
                    }
                    if (l > n) {
                        n = l;
                        r = i;
                    }
                    o++;
                }
                return r;
            })(l, O);
        } else {
            const S = G(n, "hour12", "boolean");
            l.hour12 = S === undefined ? w.hour12 : S;
            C = ((e, t)=>{
                const n = [];
                for(const r in _e){
                    if (hasOwnProperty.call(_e, r) && e[`[[${r}]]`] !== undefined) {
                        n.push(r);
                    }
                }
                if (n.length === 1) {
                    const o = ((e, t)=>{
                        let n;
                        if (ge[e] && ge[e][t]) {
                            n = {
                                originalPattern: ge[e][t],
                                _: defineProperty({}, e, t),
                                extendedPattern: `{${e}}`
                            };
                            defineProperty(n, e, t);
                            defineProperty(n, "pattern12", `{${e}}`);
                            defineProperty(n, "pattern", `{${e}}`);
                            return n;
                        }
                    })(n[0], e[`[[${n[0]}]]`]);
                    if (o) {
                        return o;
                    }
                }
                let a = -Infinity;
                let l;
                for(let s = 0, u = t.length; s < u;){
                    const c = t[s];
                    let f = 0;
                    for(const p in _e){
                        if (hasOwnProperty.call(_e, p)) {
                            const v = e[`[[${p}]]`];
                            const m = hasOwnProperty.call(c, p) ? c[p] : undefined;
                            if (v !== (hasOwnProperty.call(c._, p) ? c._[p] : undefined)) {
                                f -= 2;
                            }
                            if (v === undefined && m !== undefined) {
                                f -= 20;
                            } else if (v !== undefined && m === undefined) {
                                f -= 120;
                            } else {
                                const g = [
                                    "2-digit",
                                    "numeric",
                                    "narrow",
                                    "short",
                                    "long"
                                ];
                                const y = h.call(g, v);
                                const b = h.call(g, m);
                                const C = Math.max(Math.min(b - y, 2), -2);
                                if (b <= 1 && y >= 2 || b >= 2 && y <= 1) {
                                    if (C > 0) {
                                        f -= 6;
                                    } else if (C < 0) {
                                        f -= 8;
                                    }
                                } else if (C > 1) {
                                    f -= 3;
                                } else if (C < -1) {
                                    f -= 6;
                                }
                            }
                        }
                    }
                    if (c._.hour12 !== e.hour12) {
                        f -= 1;
                    }
                    if (f > a) {
                        a = f;
                        l = c;
                    }
                    s++;
                }
                return l;
            })(l, O);
        }
        for(const z in _e){
            if (hasOwnProperty.call(_e, z) && hasOwnProperty.call(C, z)) {
                let D = C[z];
                D = C._ && hasOwnProperty.call(C._, z) ? C._[z] : D;
                r[`[[${z}]]`] = D;
            }
        }
        let T;
        let V = G(n, "hour12", "boolean");
        if (r["[[hour]]"]) {
            V = V === undefined ? w.hour12 : V;
            r["[[hour12]]"] = V;
            if (V === true) {
                const H = w.hourNo0;
                r["[[hourNo0]]"] = H;
                T = C.pattern12;
            } else {
                T = C.pattern;
            }
        } else {
            T = C.pattern;
        }
        r["[[pattern]]"] = T;
        r["[[boundFormat]]"] = undefined;
        r["[[initializedDateTimeFormat]]"] = true;
        if (f) {
            e.format = Me.call(e);
        }
        o();
        return e;
    }
    p($, "DateTimeFormat", {
        configurable: true,
        writable: true,
        value: Ce
    });
    p(Ce, "prototype", {
        writable: false
    });
    var _e = {
        weekday: [
            "narrow",
            "short",
            "long"
        ],
        era: [
            "narrow",
            "short",
            "long"
        ],
        year: [
            "2-digit",
            "numeric"
        ],
        month: [
            "2-digit",
            "numeric",
            "narrow",
            "short",
            "long"
        ],
        day: [
            "2-digit",
            "numeric"
        ],
        hour: [
            "2-digit",
            "numeric"
        ],
        minute: [
            "2-digit",
            "numeric"
        ],
        second: [
            "2-digit",
            "numeric"
        ],
        timeZoneName: [
            "short",
            "long"
        ]
    };
    function xe(e, t, n) {
        if (e === undefined) {
            e = null;
        } else {
            const r = O(e);
            e = new M;
            for(const o in r){
                e[o] = r[o];
            }
        }
        e = v(e);
        let a = true;
        if (!(t !== "date" && t !== "any" || e.weekday === undefined && e.year === undefined && e.month === undefined && e.day === undefined)) {
            a = false;
        }
        if (!(t !== "time" && t !== "any" || e.hour === undefined && e.minute === undefined && e.second === undefined)) {
            a = false;
        }
        if (!(!a || n !== "date" && n !== "all")) {
            e.year = e.month = e.day = "numeric";
        }
        if (!(!a || n !== "time" && n !== "all")) {
            e.hour = e.minute = e.second = "numeric";
        }
        return e;
    }
    function Me() {
        const e = this !== null && u.typeof(this) === "object" && L(this);
        if (!e || !e["[[initializedDateTimeFormat]]"]) {
            throw new TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.");
        }
        if (e["[[boundFormat]]"] === undefined) {
            const t = w.call(function(...args) {
                const e = args.length <= 0 || args[0] === undefined ? undefined : args[0];
                const t = e === undefined ? Date.now() : S(e);
                return ke(this, t);
            }, this);
            e["[[boundFormat]]"] = t;
        }
        return e["[[boundFormat]]"];
    }
    function Ee(e, t) {
        if (!isFinite(t)) {
            throw new RangeError("Invalid valid date passed to format");
        }
        const n = e.__getInternalProperties(x);
        k();
        let r;
        let o;
        let a;
        let i;
        const l = n["[[locale]]"];
        const s = new $.NumberFormat([
            l
        ], {
            useGrouping: false
        });
        const u = new $.NumberFormat([
            l
        ], {
            minimumIntegerDigits: 2,
            useGrouping: false
        });
        r = t;
        n["[[calendar]]"];
        o = n["[[timeZone]]"];
        const c = new M({
            "[[weekday]]": (a = new Date(r))[`${i = `get${o || ""}`}Day`](),
            "[[era]]": +(a[`${i}FullYear`]() >= 0),
            "[[year]]": a[`${i}FullYear`](),
            "[[month]]": a[`${i}Month`](),
            "[[day]]": a[`${i}Date`](),
            "[[hour]]": a[`${i}Hours`](),
            "[[minute]]": a[`${i}Minutes`](),
            "[[second]]": a[`${i}Seconds`](),
            "[[inDST]]": false
        });
        const f = n["[[pattern]]"];
        const d = new E;
        let p = 0;
        for(var h = f.indexOf("{"), v = 0, m = n["[[dataLocale]]"], g = _.DateTimeFormat["[[localeData]]"][m].calendars, b = n["[[calendar]]"]; h !== -1;){
            let C;
            if ((v = f.indexOf("}", h)) === -1) {
                throw new Error("Unclosed pattern");
            }
            if (h > p) {
                push.call(d, {
                    type: "literal",
                    value: f.substring(p, h)
                });
            }
            const w = f.substring(h + 1, v);
            if (_e.hasOwnProperty(w)) {
                const O = n[`[[${w}]]`];
                let S = c[`[[${w}]]`];
                if (w === "year" && S <= 0) {
                    S = 1 - S;
                } else if (w === "month") {
                    S++;
                } else if (w === "hour" && n["[[hour12]]"] === true && (S %= 12) == 0 && n["[[hourNo0]]"] === true) {
                    S = 12;
                }
                if (O === "numeric") {
                    C = ne(s, S);
                } else if (O === "2-digit") {
                    if ((C = ne(u, S)).length > 2) {
                        C = C.slice(-2);
                    }
                } else if (O in ye) {
                    switch(w){
                        case "month":
                            C = be(g, b, "months", O, c[`[[${w}]]`]);
                            break;
                        case "weekday":
                            try {
                                C = be(g, b, "days", O, c[`[[${w}]]`]);
                            } catch (e) {
                                throw new Error(`Could not find weekday data for locale ${l}`);
                            }
                            break;
                        case "timeZoneName":
                            C = "";
                            break;
                        case "era":
                            try {
                                C = be(g, b, "eras", O, c[`[[${w}]]`]);
                            } catch (e) {
                                throw new Error(`Could not find era data for locale ${l}`);
                            }
                            break;
                        default:
                            C = c[`[[${w}]]`];
                    }
                }
                push.call(d, {
                    type: w,
                    value: C
                });
            } else {
                if (w === "ampm") {
                    C = be(g, b, "dayPeriods", c["[[hour]]"] > 11 ? "pm" : "am", null);
                    push.call(d, {
                        type: "dayPeriod",
                        value: C
                    });
                } else {
                    push.call(d, {
                        type: "literal",
                        value: f.substring(h, v + 1)
                    });
                }
            }
            p = v + 1;
            h = f.indexOf("{", p);
        }
        if (v < f.length - 1) {
            push.call(d, {
                type: "literal",
                value: f.substr(v + 1)
            });
        }
        return d;
    }
    function ke(e, t) {
        for(var n = Ee(e, t), r = "", o = 0; n.length > o; o++){
            r += n[o].value;
        }
        return r;
    }
    function Oe(e, t) {
        for(var n = Ee(e, t), r = [], o = 0; n.length > o; o++){
            const a = n[o];
            r.push({
                type: a.type,
                value: a.value
            });
        }
        return r;
    }
    _.DateTimeFormat = {
        "[[availableLocales]]": [],
        "[[relevantExtensionKeys]]": [
            "ca",
            "nu"
        ],
        "[[localeData]]": {}
    };
    p($.DateTimeFormat, "supportedLocalesOf", {
        configurable: true,
        writable: true,
        value: w.call(function(e, n) {
            if (!hasOwnProperty.call(this, "[[availableLocales]]")) {
                throw new TypeError("supportedLocalesOf() is not a constructor");
            }
            const t = k();
            const r = this["[[availableLocales]]"];
            const o = B(e);
            t();
            return W(r, o, n);
        }, _.NumberFormat)
    });
    p($.DateTimeFormat.prototype, "format", {
        configurable: true,
        get: Me
    });
    Object.defineProperty($.DateTimeFormat.prototype, "formatToParts", {
        enumerable: false,
        writable: true,
        configurable: true,
        value: function(...args) {
            const e = args.length <= 0 || args[0] === undefined ? undefined : args[0];
            const t = this !== null && u.typeof(this) === "object" && L(this);
            if (!t || !t["[[initializedDateTimeFormat]]"]) {
                throw new TypeError("`this` value for formatToParts() is not an initialized Intl.DateTimeFormat object.");
            }
            const n = e === undefined ? Date.now() : S(e);
            return Oe(this, n);
        }
    });
    p($.DateTimeFormat.prototype, "resolvedOptions", {
        writable: true,
        configurable: true,
        value: function() {
            let e;
            const t = new M;
            const n = [
                "locale",
                "calendar",
                "numberingSystem",
                "timeZone",
                "hour12",
                "weekday",
                "era",
                "year",
                "month",
                "day",
                "hour",
                "minute",
                "second",
                "timeZoneName"
            ];
            const r = this !== null && u.typeof(this) === "object" && L(this);
            if (!r || !r["[[initializedDateTimeFormat]]"]) {
                throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.");
            }
            for(let o = 0, a = n.length; o < a; o++){
                if (hasOwnProperty.call(r, e = `[[${n[o]}]]`)) {
                    t[n[o]] = {
                        value: r[e],
                        writable: true,
                        configurable: true,
                        enumerable: true
                    };
                }
            }
            return v({}, t);
        }
    });
    const Se = $.__localeSensitiveProtos = {
        Number: {},
        Date: {}
    };
    Se.Number.toLocaleString = function(...args) {
        if (Object.prototype.toString.call(this) !== "[object Number]") {
            throw new TypeError("`this` value must be a number for Number.prototype.toLocaleString()");
        }
        return ne(new J(args[0], args[1]), this);
    };
    Se.Date.toLocaleString = function(t, n) {
        if (Object.prototype.toString.call(this) !== "[object Date]") {
            throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()");
        }
        const e = +this;
        if (isNaN(e)) {
            return "Invalid Date";
        }
        const r = new Ce(t, n = xe(n, "any", "all"));
        return ke(r, e);
    };
    Se.Date.toLocaleDateString = function(t, n) {
        if (Object.prototype.toString.call(this) !== "[object Date]") {
            throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()");
        }
        const e = +this;
        if (isNaN(e)) {
            return "Invalid Date";
        }
        const r = new Ce(t, n = xe(n, "date", "date"));
        return ke(r, e);
    };
    Se.Date.toLocaleTimeString = function(t, n) {
        if (Object.prototype.toString.call(this) !== "[object Date]") {
            throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()");
        }
        const e = +this;
        if (isNaN(e)) {
            return "Invalid Date";
        }
        const r = new Ce(t, n = xe(n, "time", "time"));
        return ke(r, e);
    };
    p($, "__applyLocaleSensitivePrototypes", {
        writable: true,
        configurable: true,
        value: function() {
            p(Number.prototype, "toLocaleString", {
                writable: true,
                configurable: true,
                value: Se.Number.toLocaleString
            });
            p(Date.prototype, "toLocaleString", {
                writable: true,
                configurable: true,
                value: Se.Date.toLocaleString
            });
            for(const e in Se.Date){
                if (hasOwnProperty.call(Se.Date, e)) {
                    p(Date.prototype, e, {
                        writable: true,
                        configurable: true,
                        value: Se.Date[e]
                    });
                }
            }
        }
    });
    p($, "__addLocaleData", {
        value: function(e) {
            if (!R(e.locale)) {
                throw new Error("Object passed doesn't identify itself with a valid language tag");
            }
            ((e, t)=>{
                if (!e.number) {
                    throw new Error("Object passed doesn't contain locale data for Intl.NumberFormat");
                }
                let n;
                const r = [
                    t
                ];
                const o = t.split("-");
                for(o.length > 2 && o[1].length === 4 && push.call(r, `${o[0]}-${o[2]}`); n = shift.call(r);){
                    push.call(_.NumberFormat["[[availableLocales]]"], n);
                    _.NumberFormat["[[localeData]]"][n] = e.number;
                    if (e.date) {
                        e.date.nu = e.number.nu;
                        push.call(_.DateTimeFormat["[[availableLocales]]"], n);
                        _.DateTimeFormat["[[localeData]]"][n] = e.date;
                    }
                }
                if (H === undefined) {
                    ((e)=>{
                        H = e;
                    })(t);
                }
            })(e, e.locale);
        }
    });
    p($, "__disableRegExpRestore", {
        value: function() {
            _.disableRegExpRestore = true;
        }
    });
    module.exports = $;
})(require("./module-69.js").default);
