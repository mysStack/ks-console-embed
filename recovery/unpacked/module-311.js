let r;
r = function() {
    "use strict";
    function e(t) {
        return (e = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e;
        } : function(e) {
            if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
                return "symbol";
            }
            return typeof e;
        })(t);
    }
    function t(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function n(e, t) {
        for (const r of t){
            r.enumerable = r.enumerable || false;
            r.configurable = true;
            if ("value" in r) {
                r.writable = true;
            }
            Object.defineProperty(e, r.key, r);
        }
    }
    function r(e, t, r) {
        if (t) {
            n(e.prototype, t);
        }
        if (r) {
            n(e, r);
        }
        return e;
    }
    function o(e, t, n) {
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
    }
    function a(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            let r = Object.getOwnPropertySymbols(e);
            if (t) {
                r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
            }
            n.push.apply(n, r);
        }
        return n;
    }
    function i(e) {
        for(let t = 1; t < arguments.length; t++){
            var n = arguments[t] ?? {};
            if (t % 2) {
                a(Object(n), true).forEach((t)=>{
                    o(e, t, n[t]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
            } else {
                a(Object(n)).forEach((t)=>{
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
        }
        return e;
    }
    function l(e, t) {
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: true,
                configurable: true
            }
        });
        if (t) {
            ((e, t)=>{
                (Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e;
                })(e, t);
            })(e, t);
        }
    }
    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function u(e, t) {
        if (!t || typeof t !== "object" && typeof t !== "function") {
            return ((e)=>{
                if (e === undefined) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return e;
            })(e);
        }
        return t;
    }
    function c(e) {
        const t = (()=>{
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
                Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                return true;
            } catch (e) {
                return false;
            }
        })();
        return function() {
            let n;
            const r = s(e);
            if (t) {
                const o = s(this).constructor;
                n = Reflect.construct(r, arguments, o);
            } else {
                n = r.apply(this, arguments);
            }
            return u(this, n);
        };
    }
    function f(e) {
        return ((e)=>{
            if (Array.isArray(e)) {
                return d(e);
            }
        })(e) || ((e)=>{
            if (typeof Symbol !== "undefined" && Symbol.iterator in Object(e)) {
                return Array.from(e);
            }
        })(e) || ((e, t)=>{
            if (e) {
                if (typeof e === "string") {
                    return d(e, t);
                }
                let n = Object.prototype.toString.call(e).slice(8, -1);
                if (n === "Object" && e.constructor) {
                    n = e.constructor.name;
                }
                if (n === "Map" || n === "Set") {
                    return Array.from(e);
                }
                if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                    return d(e, t);
                }
                return undefined;
            }
        })(e) || (()=>{
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        })();
    }
    function d(e, t) {
        if (t == null || t > e.length) {
            t = e.length;
        }
        for(var n = 0, r = new Array(t); n < t; n++){
            r[n] = e[n];
        }
        return r;
    }
    function p(e) {
        if (Array.isArray) {
            return Array.isArray(e);
        }
        return b(e) === "[object Array]";
    }
    function h(e) {
        return typeof e === "string";
    }
    function v(e) {
        return typeof e === "number";
    }
    function m(t) {
        return e(t) === "object";
    }
    function g(e) {
        return e != null;
    }
    function y(e) {
        return !e.trim().length;
    }
    function b(e) {
        if (e == null) {
            if (e === undefined) {
                return "[object Undefined]";
            }
            return "[object Null]";
        }
        return Object.prototype.toString.call(e);
    }
    const C = (e)=>`Invalid value for key ${e}`;
    const w = (e)=>`Pattern length exceeds max of ${e}.`;
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const x = (()=>{
        function e(n) {
            const _this = this;
            t(this, e);
            this._keys = [];
            this._keyMap = {};
            let o = 0;
            n.forEach((e)=>{
                const t = M(e);
                o += t.weight;
                _this._keys.push(t);
                _this._keyMap[t.id] = t;
                o += t.weight;
            });
            this._keys.forEach((e)=>{
                e.weight /= o;
            });
        }
        r(e, [
            {
                key: "get",
                value: function(e) {
                    return this._keyMap[e];
                }
            },
            {
                key: "keys",
                value: function() {
                    return this._keys;
                }
            },
            {
                key: "toJSON",
                value: function() {
                    return JSON.stringify(this._keys);
                }
            }
        ]);
        return e;
    })();
    function M(e) {
        let path = null;
        let id = null;
        let src = null;
        let weight = 1;
        if (h(e) || p(e)) {
            src = e;
            path = E(e);
            id = k(e);
        } else {
            if (!hasOwnProperty.call(e, "name")) {
                throw new Error(`Missing name property in key`);
            }
            const a = e.name;
            src = a;
            if (hasOwnProperty.call(e, "weight") && (weight = e.weight) <= 0) {
                throw new Error(((e)=>`Property 'weight' in key '${e}' must be a positive integer`)(a));
            }
            path = E(a);
            id = k(a);
        }
        return {
            path,
            id,
            weight,
            src
        };
    }
    function E(e) {
        if (p(e)) {
            return e;
        }
        return e.split(".");
    }
    function k(e) {
        if (p(e)) {
            return e.join(".");
        }
        return e;
    }
    const O = i({}, {
        isCaseSensitive: false,
        includeScore: false,
        keys: [],
        shouldSort: true,
        sortFn: function(e, t) {
            if (e.score === t.score) {
                if (e.idx < t.idx) {
                    return -1;
                }
                return 1;
            }
            if (e.score < t.score) {
                return -1;
            }
            return 1;
        }
    }, {}, {
        includeMatches: false,
        findAllMatches: false,
        minMatchCharLength: 1
    }, {}, {
        location: 0,
        threshold: 0.6,
        distance: 100
    }, {}, {
        useExtendedSearch: false,
        getFn: function(e, t) {
            const n = [];
            let r = false;
            (function e(t, o, a) {
                if (g(t)) {
                    if (o[a]) {
                        const i = t[o[a]];
                        if (!g(i)) {
                            return;
                        }
                        if (a === o.length - 1 && (h(i) || v(i) || ((e)=>e === true || e === false || ((e)=>m(e) && e !== null)(e) && b(e) == "[object Boolean]")(i))) {
                            n.push(((e)=>{
                                if (e == null) {
                                    return "";
                                }
                                return ((e)=>{
                                    if (typeof e === "string") {
                                        return e;
                                    }
                                    const t = `${e}`;
                                    if (t == "0" && 1 / e == -Infinity) {
                                        return "-0";
                                    }
                                    return t;
                                })(e);
                            })(i));
                        } else if (p(i)) {
                            r = true;
                            for(let l = 0, s = i.length; l < s; l += 1){
                                e(i[l], o, a + 1);
                            }
                        } else {
                            if (o.length) {
                                e(i, o, a + 1);
                            }
                        }
                    } else {
                        n.push(t);
                    }
                }
            })(e, h(t) ? t.split(".") : t, 0);
            if (r) {
                return n;
            }
            return n[0];
        },
        ignoreLocation: false,
        ignoreFieldNorm: false
    });
    const S = /[^ ]+/g;
    function L(e = 3) {
        const map = new Map;
        const n = 10 ** e;
        return {
            get: function(e) {
                const length = e.match(S).length;
                if (map.has(length)) {
                    return map.get(length);
                }
                const o = 1 / Math.sqrt(length);
                const a = parseFloat(Math.round(o * n) / n);
                map.set(length, a);
                return a;
            },
            clear: function() {
                map.clear();
            }
        };
    }
    const z = (()=>{
        function e({ getFn = O.getFn } = {}) {
            t(this, e);
            this.norm = L(3);
            this.getFn = getFn;
            this.isCreated = false;
            this.setIndexRecords();
        }
        r(e, [
            {
                key: "setSources",
                value: function(e = []) {
                    this.docs = e;
                }
            },
            {
                key: "setIndexRecords",
                value: function(e = []) {
                    this.records = e;
                }
            },
            {
                key: "setKeys",
                value: function(t = []) {
                    const _this = this;
                    this.keys = t;
                    this._keysMap = {};
                    t.forEach((t, n)=>{
                        _this._keysMap[t.id] = n;
                    });
                }
            },
            {
                key: "create",
                value: function() {
                    const _this = this;
                    if (!this.isCreated && this.docs.length) {
                        this.isCreated = true;
                        if (h(this.docs[0])) {
                            this.docs.forEach((t, n)=>{
                                _this._addString(t, n);
                            });
                        } else {
                            this.docs.forEach((t, n)=>{
                                _this._addObject(t, n);
                            });
                        }
                        this.norm.clear();
                    }
                }
            },
            {
                key: "add",
                value: function(e) {
                    const t = this.size();
                    if (h(e)) {
                        this._addString(e, t);
                    } else {
                        this._addObject(e, t);
                    }
                }
            },
            {
                key: "removeAt",
                value: function(e) {
                    this.records.splice(e, 1);
                    for(let t = e, n = this.size(); t < n; t += 1){
                        this.records[t].i -= 1;
                    }
                }
            },
            {
                key: "getValueForItemAtKeyId",
                value: function(e, t) {
                    return e[this._keysMap[t]];
                }
            },
            {
                key: "size",
                value: function() {
                    return this.records.length;
                }
            },
            {
                key: "_addString",
                value: function(v_1, t) {
                    if (g(v_1) && !y(v_1)) {
                        const n = {
                            v: v_1,
                            i: t,
                            n: this.norm.get(v_1)
                        };
                        this.records.push(n);
                    }
                }
            },
            {
                key: "_addObject",
                value: function(e, t) {
                    const _this = this;
                    const r = {
                        i: t,
                        $: {}
                    };
                    this.keys.forEach((t, o)=>{
                        const a = _this.getFn(e, t.path);
                        if (g(a)) {
                            if (p(a)) {
                                (()=>{
                                    const e = [];
                                    for(var t = [
                                        {
                                            nestedArrIndex: -1,
                                            value: a
                                        }
                                    ]; t.length;){
                                        const i = t.pop();
                                        const { nestedArrIndex, value } = i;
                                        if (g(value)) {
                                            if (h(value) && !y(value)) {
                                                const u = {
                                                    v: value,
                                                    i: nestedArrIndex,
                                                    n: _this.norm.get(value)
                                                };
                                                e.push(u);
                                            } else {
                                                if (p(value)) {
                                                    value.forEach((value_1, nestedArrIndex_1)=>{
                                                        t.push({
                                                            nestedArrIndex: nestedArrIndex_1,
                                                            value: value_1
                                                        });
                                                    });
                                                }
                                            }
                                        }
                                    }
                                    r.$[o] = e;
                                })();
                            } else if (!y(a)) {
                                const i = {
                                    v: a,
                                    n: _this.norm.get(a)
                                };
                                r.$[o] = i;
                            }
                        }
                    });
                    this.records.push(r);
                }
            },
            {
                key: "toJSON",
                value: function() {
                    return {
                        keys: this.keys,
                        records: this.records
                    };
                }
            }
        ]);
        return e;
    })();
    function D(e, t, { getFn = O.getFn } = {}) {
        const a = new z({
            getFn
        });
        a.setKeys(e.map(M));
        a.setSources(t);
        a.create();
        return a;
    }
    function T(pattern, { errors = 0, currentLocation = 0, expectedLocation = 0, distance = O.distance, ignoreLocation = O.ignoreLocation } = {}) {
        const d = errors / pattern.length;
        if (ignoreLocation) {
            return d;
        }
        const p = Math.abs(expectedLocation - currentLocation);
        if (distance) {
            return d + p / distance;
        }
        if (p) {
            return 1;
        }
        return d;
    }
    function V(e = [], t = O.minMatchCharLength) {
        const n = [];
        let r = -1;
        let o = -1;
        for(var a = 0, i = e.length; a < i; a += 1){
            const l = e[a];
            if (l && r === -1) {
                r = a;
            } else if (!(l || r === -1)) {
                if ((o = a - 1) - r + 1 >= t) {
                    n.push([
                        r,
                        o
                    ]);
                }
                r = -1;
            }
        }
        if (e[a - 1] && a - r >= t) {
            n.push([
                r,
                a - 1
            ]);
        }
        return n;
    }
    function H(e) {
        const t = {};
        for(let n = 0, r = e.length; n < r; n += 1){
            const o = e.charAt(n);
            t[o] = (t[o] || 0) | 1 << r - n - 1;
        }
        return t;
    }
    const P = (()=>{
        function e(n, o = {}) {
            const _this = this;
            const o_location = o.location;
            const i = o_location === undefined ? O.location : o_location;
            const o_threshold = o.threshold;
            const s = o_threshold === undefined ? O.threshold : o_threshold;
            const o_distance = o.distance;
            const c = o_distance === undefined ? O.distance : o_distance;
            const o_includeMatches = o.includeMatches;
            const d = o_includeMatches === undefined ? O.includeMatches : o_includeMatches;
            const o_findAllMatches = o.findAllMatches;
            const h = o_findAllMatches === undefined ? O.findAllMatches : o_findAllMatches;
            const o_minMatchCharLength = o.minMatchCharLength;
            const m = o_minMatchCharLength === undefined ? O.minMatchCharLength : o_minMatchCharLength;
            const o_isCaseSensitive = o.isCaseSensitive;
            const isCaseSensitive = o_isCaseSensitive === undefined ? O.isCaseSensitive : o_isCaseSensitive;
            const o_ignoreLocation = o.ignoreLocation;
            const C = o_ignoreLocation === undefined ? O.ignoreLocation : o_ignoreLocation;
            t(this, e);
            this.options = {
                location: i,
                threshold: s,
                distance: c,
                includeMatches: d,
                findAllMatches: h,
                minMatchCharLength: m,
                isCaseSensitive,
                ignoreLocation: C
            };
            this.pattern = isCaseSensitive ? n : n.toLowerCase();
            this.chunks = [];
            if (this.pattern.length) {
                const w = (e, startIndex)=>{
                    _this.chunks.push({
                        pattern: e,
                        alphabet: H(e),
                        startIndex
                    });
                };
                const _ = this.pattern.length;
                if (_ > 32) {
                    for(var x = 0, M = _ % 32, E = _ - M; x < E;){
                        w(this.pattern.substr(x, 32), x);
                        x += 32;
                    }
                    if (M) {
                        const k = _ - 32;
                        w(this.pattern.substr(k), k);
                    }
                } else {
                    w(this.pattern, 0);
                }
            }
        }
        r(e, [
            {
                key: "searchIn",
                value: function(e) {
                    const options = this.options;
                    const { isCaseSensitive, includeMatches } = options;
                    if (!isCaseSensitive) {
                        e = e.toLowerCase();
                    }
                    if (this.pattern === e) {
                        const o = {
                            isMatch: true,
                            score: 0
                        };
                        if (includeMatches) {
                            o.indices = [
                                [
                                    0,
                                    e.length - 1
                                ]
                            ];
                        }
                        return o;
                    }
                    const options_1 = this.options;
                    const { location, distance, threshold, findAllMatches, minMatchCharLength, ignoreLocation } = options_1;
                    let p = [];
                    let h = 0;
                    let v = false;
                    this.chunks.forEach(({ pattern, alphabet, startIndex })=>{
                        const m = ((e, pattern_1, alphabet_1, { location = O.location, distance = O.distance, threshold = O.threshold, findAllMatches = O.findAllMatches, minMatchCharLength = O.minMatchCharLength, includeMatches = O.includeMatches, ignoreLocation = O.ignoreLocation } = {})=>{
                            if (pattern_1.length > 32) {
                                throw new Error(w(32));
                            }
                            let y;
                            const t_length = pattern_1.length;
                            const e_length = e.length;
                            const _ = Math.max(0, Math.min(location, e_length));
                            let x = threshold;
                            for(var M = _, E = minMatchCharLength > 1 || includeMatches, k = E ? Array(e_length) : []; (y = e.indexOf(pattern_1, M)) > -1;){
                                const S = T(pattern_1, {
                                    currentLocation: y,
                                    expectedLocation: _,
                                    distance,
                                    ignoreLocation
                                });
                                x = Math.min(S, x);
                                M = y + t_length;
                                if (E) {
                                    for(let L = 0; L < t_length;){
                                        k[y + L] = 1;
                                        L += 1;
                                    }
                                }
                            }
                            M = -1;
                            let z = [];
                            let D = 1;
                            let H = t_length + e_length;
                            const P = 1 << t_length - 1;
                            for(let errors = 0; errors < t_length; errors += 1){
                                for(var R = 0, j = H; R < j;){
                                    const N = T(pattern_1, {
                                        errors,
                                        currentLocation: _ + j,
                                        expectedLocation: _,
                                        distance,
                                        ignoreLocation
                                    });
                                    if (N <= x) {
                                        R = j;
                                    } else {
                                        H = j;
                                    }
                                    j = Math.floor((H - R) / 2 + R);
                                }
                                H = j;
                                let I = Math.max(1, _ - j + 1);
                                const B = findAllMatches ? e_length : Math.min(_ + j, e_length) + t_length;
                                const U = Array(B + 2);
                                U[B + 1] = (1 << errors) - 1;
                                for(let F = B; F >= I; F -= 1){
                                    const Z = F - 1;
                                    const q = alphabet_1[e.charAt(Z)];
                                    if (E) {
                                        k[Z] = +!!q;
                                    }
                                    U[F] = (U[F + 1] << 1 | 1) & q;
                                    if (errors) {
                                        U[F] |= (z[F + 1] | z[F]) << 1 | 1 | z[F + 1];
                                    }
                                    if (U[F] & P && (D = T(pattern_1, {
                                        errors,
                                        currentLocation: Z,
                                        expectedLocation: _,
                                        distance,
                                        ignoreLocation
                                    })) <= x) {
                                        x = D;
                                        if ((M = Z) <= _) {
                                            break;
                                        }
                                        I = Math.max(1, 2 * _ - M);
                                    }
                                }
                                const W = T(pattern_1, {
                                    errors: errors + 1,
                                    currentLocation: _,
                                    expectedLocation: _,
                                    distance,
                                    ignoreLocation
                                });
                                if (W > x) {
                                    break;
                                }
                                z = U;
                            }
                            const G = {
                                isMatch: M >= 0,
                                score: Math.max(0.001, D)
                            };
                            if (E) {
                                const Y = V(k, minMatchCharLength);
                                if (Y.length) {
                                    if (includeMatches) {
                                        G.indices = Y;
                                    }
                                } else {
                                    G.isMatch = false;
                                }
                            }
                            return G;
                        })(e, pattern, alphabet, {
                            location: location + startIndex,
                            distance,
                            threshold,
                            findAllMatches,
                            minMatchCharLength,
                            includeMatches,
                            ignoreLocation
                        });
                        const { isMatch, score, indices } = m;
                        if (isMatch) {
                            v = true;
                        }
                        h += score;
                        if (isMatch && indices) {
                            p = [].concat(f(p), f(indices));
                        }
                    });
                    const m = {
                        isMatch: v,
                        score: v ? h / this.chunks.length : 1
                    };
                    if (v && includeMatches) {
                        m.indices = p;
                    }
                    return m;
                }
            }
        ]);
        return e;
    })();
    const A = (()=>{
        function e(n) {
            t(this, e);
            this.pattern = n;
        }
        r(e, [
            {
                key: "search",
                value: function() {}
            }
        ], [
            {
                key: "isMultiMatch",
                value: function(e) {
                    return R(e, this.multiRegex);
                }
            },
            {
                key: "isSingleMatch",
                value: function(e) {
                    return R(e, this.singleRegex);
                }
            }
        ]);
        return e;
    })();
    function R(e, t) {
        const n = e.match(t);
        if (n) {
            return n[1];
        }
        return null;
    }
    const j = ((e)=>{
        l(o, e);
        var n = c(o);
        function o(e) {
            t(this, o);
            return n.call(this, e);
        }
        r(o, [
            {
                key: "search",
                value: function(e) {
                    const t = e === this.pattern;
                    return {
                        isMatch: t,
                        score: t ? 0 : 1,
                        indices: [
                            0,
                            this.pattern.length - 1
                        ]
                    };
                }
            }
        ], [
            {
                key: "type",
                get: function() {
                    return "exact";
                }
            },
            {
                key: "multiRegex",
                get: function() {
                    return /^="(.*)"$/;
                }
            },
            {
                key: "singleRegex",
                get: function() {
                    return /^=(.*)$/;
                }
            }
        ]);
        return o;
    })(A);
    const N = ((e)=>{
        l(o, e);
        var n = c(o);
        function o(e) {
            t(this, o);
            return n.call(this, e);
        }
        r(o, [
            {
                key: "search",
                value: function(e) {
                    const t = e.indexOf(this.pattern) === -1;
                    return {
                        isMatch: t,
                        score: t ? 0 : 1,
                        indices: [
                            0,
                            e.length - 1
                        ]
                    };
                }
            }
        ], [
            {
                key: "type",
                get: function() {
                    return "inverse-exact";
                }
            },
            {
                key: "multiRegex",
                get: function() {
                    return /^!"(.*)"$/;
                }
            },
            {
                key: "singleRegex",
                get: function() {
                    return /^!(.*)$/;
                }
            }
        ]);
        return o;
    })(A);
    const I = ((e)=>{
        l(o, e);
        var n = c(o);
        function o(e) {
            t(this, o);
            return n.call(this, e);
        }
        r(o, [
            {
                key: "search",
                value: function(e) {
                    const t = e.startsWith(this.pattern);
                    return {
                        isMatch: t,
                        score: t ? 0 : 1,
                        indices: [
                            0,
                            this.pattern.length - 1
                        ]
                    };
                }
            }
        ], [
            {
                key: "type",
                get: function() {
                    return "prefix-exact";
                }
            },
            {
                key: "multiRegex",
                get: function() {
                    return /^\^"(.*)"$/;
                }
            },
            {
                key: "singleRegex",
                get: function() {
                    return /^\^(.*)$/;
                }
            }
        ]);
        return o;
    })(A);
    const B = ((e)=>{
        l(o, e);
        var n = c(o);
        function o(e) {
            t(this, o);
            return n.call(this, e);
        }
        r(o, [
            {
                key: "search",
                value: function(e) {
                    const t = !e.startsWith(this.pattern);
                    return {
                        isMatch: t,
                        score: t ? 0 : 1,
                        indices: [
                            0,
                            e.length - 1
                        ]
                    };
                }
            }
        ], [
            {
                key: "type",
                get: function() {
                    return "inverse-prefix-exact";
                }
            },
            {
                key: "multiRegex",
                get: function() {
                    return /^!\^"(.*)"$/;
                }
            },
            {
                key: "singleRegex",
                get: function() {
                    return /^!\^(.*)$/;
                }
            }
        ]);
        return o;
    })(A);
    const U = ((e)=>{
        l(o, e);
        var n = c(o);
        function o(e) {
            t(this, o);
            return n.call(this, e);
        }
        r(o, [
            {
                key: "search",
                value: function(e) {
                    const t = e.endsWith(this.pattern);
                    return {
                        isMatch: t,
                        score: t ? 0 : 1,
                        indices: [
                            e.length - this.pattern.length,
                            e.length - 1
                        ]
                    };
                }
            }
        ], [
            {
                key: "type",
                get: function() {
                    return "suffix-exact";
                }
            },
            {
                key: "multiRegex",
                get: function() {
                    return /^"(.*)"\$$/;
                }
            },
            {
                key: "singleRegex",
                get: function() {
                    return /^(.*)\$$/;
                }
            }
        ]);
        return o;
    })(A);
    const F = ((e)=>{
        l(o, e);
        var n = c(o);
        function o(e) {
            t(this, o);
            return n.call(this, e);
        }
        r(o, [
            {
                key: "search",
                value: function(e) {
                    const t = !e.endsWith(this.pattern);
                    return {
                        isMatch: t,
                        score: t ? 0 : 1,
                        indices: [
                            0,
                            e.length - 1
                        ]
                    };
                }
            }
        ], [
            {
                key: "type",
                get: function() {
                    return "inverse-suffix-exact";
                }
            },
            {
                key: "multiRegex",
                get: function() {
                    return /^!"(.*)"\$$/;
                }
            },
            {
                key: "singleRegex",
                get: function() {
                    return /^!(.*)\$$/;
                }
            }
        ]);
        return o;
    })(A);
    const Z = ((e)=>{
        l(o, e);
        var n = c(o);
        function o(e, a = {}) {
            let r;
            const a_location = a.location;
            const l = a_location === undefined ? O.location : a_location;
            const a_threshold = a.threshold;
            const u = a_threshold === undefined ? O.threshold : a_threshold;
            const a_distance = a.distance;
            const f = a_distance === undefined ? O.distance : a_distance;
            const a_includeMatches = a.includeMatches;
            const p = a_includeMatches === undefined ? O.includeMatches : a_includeMatches;
            const a_findAllMatches = a.findAllMatches;
            const v = a_findAllMatches === undefined ? O.findAllMatches : a_findAllMatches;
            const a_minMatchCharLength = a.minMatchCharLength;
            const g = a_minMatchCharLength === undefined ? O.minMatchCharLength : a_minMatchCharLength;
            const a_isCaseSensitive = a.isCaseSensitive;
            const isCaseSensitive = a_isCaseSensitive === undefined ? O.isCaseSensitive : a_isCaseSensitive;
            const a_ignoreLocation = a.ignoreLocation;
            const w = a_ignoreLocation === undefined ? O.ignoreLocation : a_ignoreLocation;
            t(this, o);
            r = n.call(this, e);
            r._bitapSearch = new P(e, {
                location: l,
                threshold: u,
                distance: f,
                includeMatches: p,
                findAllMatches: v,
                minMatchCharLength: g,
                isCaseSensitive,
                ignoreLocation: w
            });
            return r;
        }
        r(o, [
            {
                key: "search",
                value: function(e) {
                    return this._bitapSearch.searchIn(e);
                }
            }
        ], [
            {
                key: "type",
                get: function() {
                    return "fuzzy";
                }
            },
            {
                key: "multiRegex",
                get: function() {
                    return /^"(.*)"$/;
                }
            },
            {
                key: "singleRegex",
                get: function() {
                    return /^(.*)$/;
                }
            }
        ]);
        return o;
    })(A);
    const q = ((e)=>{
        l(o, e);
        var n = c(o);
        function o(e) {
            t(this, o);
            return n.call(this, e);
        }
        r(o, [
            {
                key: "search",
                value: function(e) {
                    let t;
                    for(var n = 0, indices = [], o = this.pattern.length; (t = e.indexOf(this.pattern, n)) > -1;){
                        n = t + o;
                        indices.push([
                            t,
                            n - 1
                        ]);
                    }
                    const a = !!indices.length;
                    return {
                        isMatch: a,
                        score: a ? 0 : 1,
                        indices
                    };
                }
            }
        ], [
            {
                key: "type",
                get: function() {
                    return "include";
                }
            },
            {
                key: "multiRegex",
                get: function() {
                    return /^'"(.*)"$/;
                }
            },
            {
                key: "singleRegex",
                get: function() {
                    return /^'(.*)$/;
                }
            }
        ]);
        return o;
    })(A);
    const W = [
        j,
        q,
        I,
        B,
        F,
        U,
        N,
        Z
    ];
    const W_length = W.length;
    const Y = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
    function $(pattern, t = {}) {
        return pattern.split("|").map((e)=>{
            const n = e.trim().split(Y).filter((e)=>e && !!e.trim());
            const r = [];
            for(let o = 0, a = n.length; o < a; o += 1){
                const i = n[o];
                for(var l = false, s = -1; !l && ++s < W_length;){
                    const u = W[s];
                    const c = u.isMultiMatch(i);
                    if (c) {
                        r.push(new u(c, t));
                        l = true;
                    }
                }
                if (!l) {
                    for(s = -1; ++s < W_length;){
                        const f = W[s];
                        const d = f.isSingleMatch(i);
                        if (d) {
                            r.push(new f(d, t));
                            break;
                        }
                    }
                }
            }
            return r;
        });
    }
    const K = new Set([
        Z.type,
        q.type
    ]);
    const J = (()=>{
        function e(n, { isCaseSensitive = O.isCaseSensitive, includeMatches = O.includeMatches, minMatchCharLength = O.minMatchCharLength, ignoreLocation = O.ignoreLocation, findAllMatches = O.findAllMatches, location = O.location, threshold = O.threshold, distance = O.distance } = {}) {
            t(this, e);
            this.query = null;
            this.options = {
                isCaseSensitive,
                includeMatches,
                minMatchCharLength,
                findAllMatches,
                ignoreLocation,
                location,
                threshold,
                distance
            };
            this.pattern = isCaseSensitive ? n : n.toLowerCase();
            this.query = $(this.pattern, this.options);
        }
        r(e, [
            {
                key: "searchIn",
                value: function(e) {
                    const query = this.query;
                    if (!query) {
                        return {
                            isMatch: false,
                            score: 1
                        };
                    }
                    const options = this.options;
                    const n_includeMatches = options.includeMatches;
                    e = options.isCaseSensitive ? e : e.toLowerCase();
                    let o = 0;
                    let a = [];
                    let i = 0;
                    for(let l = 0, s = query.length; l < s; l += 1){
                        const u = query[l];
                        a.length = 0;
                        o = 0;
                        for(let c = 0, d = u.length; c < d; c += 1){
                            const p = u[c];
                            const h = p.search(e);
                            const { isMatch, indices, score } = h;
                            if (!isMatch) {
                                i = 0;
                                o = 0;
                                a.length = 0;
                                break;
                            }
                            o += 1;
                            i += score;
                            if (n_includeMatches) {
                                const y = p.constructor.type;
                                if (K.has(y)) {
                                    a = [].concat(f(a), f(indices));
                                } else {
                                    a.push(indices);
                                }
                            }
                        }
                        if (o) {
                            const b = {
                                isMatch: true,
                                score: i / o
                            };
                            if (n_includeMatches) {
                                b.indices = a;
                            }
                            return b;
                        }
                    }
                    return {
                        isMatch: false,
                        score: 1
                    };
                }
            }
        ], [
            {
                key: "condition",
                value: function(e, t) {
                    return t.useExtendedSearch;
                }
            }
        ]);
        return e;
    })();
    const Q = [];
    function X(e, t) {
        for(let n = 0, r = Q.length; n < r; n += 1){
            const o = Q[n];
            if (o.condition(e, t)) {
                return new o(e, t);
            }
        }
        return new P(e, t);
    }
    const ee = "$and";
    const te = "$path";
    const ne = (e)=>!(!e[ee] && !e.$or);
    const re = (e)=>!!e[te];
    const oe = (e)=>!p(e) && m(e) && !ne(e);
    const ae = (e)=>o({}, ee, Object.keys(e).map((t)=>o({}, t, e[t])));
    function ie(e, { ignoreFieldNorm = O.ignoreFieldNorm }) {
        e.forEach((e)=>{
            let t = 1;
            e.matches.forEach(({ key, norm, score })=>{
                const i = key ? key.weight : null;
                t *= (score === 0 && i ? Number.EPSILON : score) ** ((i || 1) * (ignoreFieldNorm ? 1 : norm));
            });
            e.score = t;
        });
    }
    function le({ matches }, t) {
        t.matches = [];
        if (g(matches)) {
            matches.forEach((e)=>{
                if (g(e.indices) && e.indices.length) {
                    const n = {
                        indices: e.indices,
                        value: e.value
                    };
                    if (e.key) {
                        n.key = e.key.src;
                    }
                    if (e.idx > -1) {
                        n.refIndex = e.idx;
                    }
                    t.matches.push(n);
                }
            });
        }
    }
    function se(e, t) {
        t.score = e.score;
    }
    function ue(e, _docs, { includeMatches = O.includeMatches, includeScore = O.includeScore } = {}) {
        const l = [];
        if (includeMatches) {
            l.push(le);
        }
        if (includeScore) {
            l.push(se);
        }
        return e.map((e)=>{
            const e_idx = e.idx;
            const r = {
                item: _docs[e_idx],
                refIndex: e_idx
            };
            if (l.length) {
                l.forEach((t)=>{
                    t(e, r);
                });
            }
            return r;
        });
    }
    const ce = (()=>{
        function e(n, r = {}, o) {
            t(this, e);
            this.options = i({}, O, {}, r);
            this.options.useExtendedSearch;
            this._keyStore = new x(this.options.keys);
            this.setCollection(n, o);
        }
        r(e, [
            {
                key: "setCollection",
                value: function(e, t) {
                    this._docs = e;
                    if (t && !(t instanceof z)) {
                        throw new Error("Incorrect 'index' type");
                    }
                    this._myIndex = t || D(this.options.keys, this._docs, {
                        getFn: this.options.getFn
                    });
                }
            },
            {
                key: "add",
                value: function(e) {
                    if (g(e)) {
                        this._docs.push(e);
                        this._myIndex.add(e);
                    }
                }
            },
            {
                key: "remove",
                value: function(e = function() {
                    return false;
                }) {
                    const t = [];
                    for(let n = 0, r = this._docs.length; n < r; n += 1){
                        const o = this._docs[n];
                        if (e(o, n)) {
                            this.removeAt(n);
                            n -= 1;
                            r -= 1;
                            t.push(o);
                        }
                    }
                    return t;
                }
            },
            {
                key: "removeAt",
                value: function(e) {
                    this._docs.splice(e, 1);
                    this._myIndex.removeAt(e);
                }
            },
            {
                key: "getIndex",
                value: function() {
                    return this._myIndex;
                }
            },
            {
                key: "search",
                value: function(e, { limit = -1 } = {}) {
                    const options = this.options;
                    const { includeMatches, includeScore, shouldSort, sortFn, ignoreFieldNorm } = options;
                    let c = h(e) ? h(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
                    ie(c, {
                        ignoreFieldNorm
                    });
                    if (shouldSort) {
                        c.sort(sortFn);
                    }
                    if (v(limit) && limit > -1) {
                        c = c.slice(0, limit);
                    }
                    return ue(c, this._docs, {
                        includeMatches,
                        includeScore
                    });
                }
            },
            {
                key: "_searchStringList",
                value: function(e) {
                    const t = X(e, this.options);
                    const records = this._myIndex.records;
                    const r = [];
                    records.forEach(({ v, i: i_1, n: n_1 })=>{
                        if (g(v)) {
                            const i = t.searchIn(v);
                            const { isMatch, score, indices } = i;
                            if (isMatch) {
                                r.push({
                                    item: v,
                                    idx: i_1,
                                    matches: [
                                        {
                                            score,
                                            value: v,
                                            norm: n_1,
                                            indices
                                        }
                                    ]
                                });
                            }
                        }
                    });
                    return r;
                }
            },
            {
                key: "_searchLogical",
                value: function(e) {
                    const _this = this;
                    const n = ((e, t, { auto } = {})=>{
                        const o = auto === undefined || auto;
                        const a = function e(n) {
                            const r = Object.keys(n);
                            const a = re(n);
                            if (!a && r.length > 1 && !ne(n)) {
                                return e(ae(n));
                            }
                            if (oe(n)) {
                                const i = a ? n[te] : r[0];
                                const l = a ? n.$val : n[i];
                                if (!h(l)) {
                                    throw new Error(C(i));
                                }
                                const s = {
                                    keyId: k(i),
                                    pattern: l
                                };
                                if (o) {
                                    s.searcher = X(l, t);
                                }
                                return s;
                            }
                            const u = {
                                children: [],
                                operator: r[0]
                            };
                            r.forEach((t)=>{
                                const r = n[t];
                                if (p(r)) {
                                    r.forEach((t)=>{
                                        u.children.push(e(t));
                                    });
                                }
                            });
                            return u;
                        };
                        if (!ne(e)) {
                            e = ae(e);
                        }
                        return a(e);
                    })(e, this.options);
                    const records = this._myIndex.records;
                    const o = {};
                    const a = [];
                    records.forEach(({ $, i })=>{
                        if (g($)) {
                            const l = function e(n, item, idx) {
                                if (!n.children) {
                                    const { keyId, searcher } = n;
                                    const l = _this._findMatches({
                                        key: _this._keyStore.get(keyId),
                                        value: _this._myIndex.getValueForItemAtKeyId(item, keyId),
                                        searcher
                                    });
                                    if (l && l.length) {
                                        return [
                                            {
                                                idx,
                                                item,
                                                matches: l
                                            }
                                        ];
                                    }
                                    return [];
                                }
                                switch(n.operator){
                                    case ee:
                                        const s = [];
                                        for(let u = 0, c = n.children.length; u < c; u += 1){
                                            const d = e(n.children[u], item, idx);
                                            if (!d.length) {
                                                return [];
                                            }
                                            s.push.apply(s, f(d));
                                        }
                                        return s;
                                    case "$or":
                                        const p = [];
                                        for(let h = 0, v = n.children.length; h < v; h += 1){
                                            const m = e(n.children[h], item, idx);
                                            if (m.length) {
                                                p.push.apply(p, f(m));
                                                break;
                                            }
                                        }
                                        return p;
                                }
                            }(n, $, i);
                            if (l.length) {
                                if (!o[i]) {
                                    o[i] = {
                                        idx: i,
                                        item: $,
                                        matches: []
                                    };
                                    a.push(o[i]);
                                }
                                l.forEach((e)=>{
                                    let t;
                                    const e_matches = e.matches;
                                    (t = o[i].matches).push.apply(t, f(e_matches));
                                });
                            }
                        }
                    });
                    return a;
                }
            },
            {
                key: "_searchObjectList",
                value: function(e) {
                    const _this = this;
                    const searcher = X(e, this.options);
                    const _myIndex = this._myIndex;
                    const { keys, records } = _myIndex;
                    const i = [];
                    records.forEach(({ $, i: i_1 })=>{
                        if (g($)) {
                            const l = [];
                            keys.forEach((key, o)=>{
                                l.push.apply(l, f(_this._findMatches({
                                    key,
                                    value: $[o],
                                    searcher
                                })));
                            });
                            if (l.length) {
                                i.push({
                                    idx: i_1,
                                    item: $,
                                    matches: l
                                });
                            }
                        }
                    });
                    return i;
                }
            },
            {
                key: "_findMatches",
                value: function({ key, value, searcher }) {
                    if (!g(value)) {
                        return [];
                    }
                    const o = [];
                    if (p(value)) {
                        value.forEach(({ v, i: i_1, n: n_1 })=>{
                            if (g(v)) {
                                const l = searcher.searchIn(v);
                                const { isMatch, score, indices } = l;
                                if (isMatch) {
                                    o.push({
                                        score,
                                        key,
                                        value: v,
                                        idx: i_1,
                                        norm: n_1,
                                        indices
                                    });
                                }
                            }
                        });
                    } else {
                        const { v, n: n_1 } = value;
                        const l = searcher.searchIn(v);
                        const { isMatch, score, indices } = l;
                        if (isMatch) {
                            o.push({
                                score,
                                key,
                                value: v,
                                norm: n_1,
                                indices
                            });
                        }
                    }
                    return o;
                }
            }
        ]);
        return e;
    })();
    ce.version = "6.4.6";
    ce.createIndex = D;
    ce.parseIndex = function({ keys, records }, { getFn = O.getFn } = {}) {
        const i = new z({
            getFn
        });
        i.setKeys(keys);
        i.setIndexRecords(records);
        return i;
    };
    ce.config = O;
    (function() {
        Q.push(...arguments);
    })(J);
    return ce;
};
export default r();
