function r(e) {
    if (Array.isArray) {
        return Array.isArray(e);
    }
    return c(e) === "[object Array]";
}
function o(e) {
    return typeof e === "string";
}
function i(e) {
    return typeof e === "number";
}
function a(e) {
    return e === true || e === false || ((e)=>l(e) && e !== null)(e) && c(e) == "[object Boolean]";
}
function l(e) {
    return typeof e === "object";
}
function u(e) {
    return e != null;
}
function s(e) {
    return !e.trim().length;
}
function c(e) {
    if (e == null) {
        if (e === undefined) {
            return "[object Undefined]";
        }
        return "[object Null]";
    }
    return Object.prototype.toString.call(e);
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
class d {
    constructor(e){
        this._keys = [];
        this._keyMap = {};
        let t = 0;
        e.forEach((e)=>{
            let n = p(e);
            t += n.weight;
            this._keys.push(n);
            this._keyMap[n.id] = n;
            t += n.weight;
        });
        this._keys.forEach((e)=>{
            e.weight /= t;
        });
    }
    get(e) {
        return this._keyMap[e];
    }
    keys() {
        return this._keys;
    }
    toJSON() {
        return JSON.stringify(this._keys);
    }
}
function p(e) {
    let path = null;
    let id = null;
    let src = null;
    let weight = 1;
    if (o(e) || r(e)) {
        src = e;
        path = h(e);
        id = v(e);
    } else {
        if (!hasOwnProperty.call(e, "name")) {
            throw new Error("Missing name property in key");
        }
        const r = e.name;
        src = r;
        if (hasOwnProperty.call(e, "weight") && (weight = e.weight, weight <= 0)) {
            throw new Error(((e)=>`Property 'weight' in key '${e}' must be a positive integer`)(r));
        }
        path = h(r);
        id = v(r);
    }
    return {
        path,
        id,
        weight,
        src
    };
}
function h(e) {
    if (r(e)) {
        return e;
    }
    return e.split(".");
}
function v(e) {
    if (r(e)) {
        return e.join(".");
    }
    return e;
}
const g = {
    isCaseSensitive: false,
    includeScore: false,
    keys: [],
    shouldSort: true,
    sortFn: (e, t)=>{
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
    },
    includeMatches: false,
    findAllMatches: false,
    minMatchCharLength: 1,
    location: 0,
    threshold: 0.6,
    distance: 100,
    useExtendedSearch: false,
    getFn: function(e, t) {
        let n = [];
        let l = false;
        const s = (e, t, c)=>{
            if (u(e)) {
                if (t[c]) {
                    const f = e[t[c]];
                    if (!u(f)) {
                        return;
                    }
                    if (c === t.length - 1 && (o(f) || i(f) || a(f))) {
                        n.push(((e)=>{
                            if (e == null) {
                                return "";
                            }
                            return ((e)=>{
                                if (typeof e === "string") {
                                    return e;
                                }
                                let t = `${e}`;
                                if (t == "0" && 1 / e == -Infinity) {
                                    return "-0";
                                }
                                return t;
                            })(e);
                        })(f));
                    } else if (r(f)) {
                        l = true;
                        for(let e = 0, n = f.length; e < n; e += 1){
                            s(f[e], t, c + 1);
                        }
                    } else {
                        if (t.length) {
                            s(f, t, c + 1);
                        }
                    }
                } else {
                    n.push(e);
                }
            }
        };
        s(e, o(t) ? t.split(".") : t, 0);
        if (l) {
            return n;
        }
        return n[0];
    },
    ignoreLocation: false,
    ignoreFieldNorm: false
};
const y = /[^ ]+/g;
class m {
    constructor({ getFn = g.getFn } = {}){
        this.norm = ((e = 3)=>{
            const map = new Map;
            const n = 10 ** e;
            return {
                get (e) {
                    const length = e.match(y).length;
                    if (map.has(length)) {
                        return map.get(length);
                    }
                    const o = 1 / Math.sqrt(length);
                    const i = parseFloat(Math.round(o * n) / n);
                    map.set(length, i);
                    return i;
                },
                clear () {
                    map.clear();
                }
            };
        })(3);
        this.getFn = getFn;
        this.isCreated = false;
        this.setIndexRecords();
    }
    setSources(e = []) {
        this.docs = e;
    }
    setIndexRecords(e = []) {
        this.records = e;
    }
    setKeys(e = []) {
        this.keys = e;
        this._keysMap = {};
        e.forEach((e, t)=>{
            this._keysMap[e.id] = t;
        });
    }
    create() {
        if (!this.isCreated && this.docs.length) {
            this.isCreated = true;
            if (o(this.docs[0])) {
                this.docs.forEach((e, t)=>{
                    this._addString(e, t);
                });
            } else {
                this.docs.forEach((e, t)=>{
                    this._addObject(e, t);
                });
            }
            this.norm.clear();
        }
    }
    add(e) {
        const t = this.size();
        if (o(e)) {
            this._addString(e, t);
        } else {
            this._addObject(e, t);
        }
    }
    removeAt(e) {
        this.records.splice(e, 1);
        for(let t = e, n = this.size(); t < n; t += 1){
            this.records[t].i -= 1;
        }
    }
    getValueForItemAtKeyId(e, t) {
        return e[this._keysMap[t]];
    }
    size() {
        return this.records.length;
    }
    _addString(v_1, t) {
        if (!u(v_1) || s(v_1)) {
            return;
        }
        let n = {
            v: v_1,
            i: t,
            n: this.norm.get(v_1)
        };
        this.records.push(n);
    }
    _addObject(e, t) {
        let n = {
            i: t,
            $: {}
        };
        this.keys.forEach((t, i)=>{
            let a = this.getFn(e, t.path);
            if (u(a)) {
                if (r(a)) {
                    let e = [];
                    const t = [
                        {
                            nestedArrIndex: -1,
                            value: a
                        }
                    ];
                    while(t.length){
                        const { nestedArrIndex, value } = t.pop();
                        if (u(value)) {
                            if (o(value) && !s(value)) {
                                let t = {
                                    v: value,
                                    i: nestedArrIndex,
                                    n: this.norm.get(value)
                                };
                                e.push(t);
                            } else {
                                if (r(value)) {
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
                    n.$[i] = e;
                } else if (!s(a)) {
                    let e = {
                        v: a,
                        n: this.norm.get(a)
                    };
                    n.$[i] = e;
                }
            }
        });
        this.records.push(n);
    }
    toJSON() {
        return {
            keys: this.keys,
            records: this.records
        };
    }
}
function b(e, t, { getFn = g.getFn } = {}) {
    const r = new m({
        getFn
    });
    r.setKeys(e.map(p));
    r.setSources(t);
    r.create();
    return r;
}
function x(pattern, { errors = 0, currentLocation = 0, expectedLocation = 0, distance = g.distance, ignoreLocation = g.ignoreLocation } = {}) {
    const a = errors / pattern.length;
    if (ignoreLocation) {
        return a;
    }
    const l = Math.abs(expectedLocation - currentLocation);
    if (distance) {
        return a + l / distance;
    }
    if (l) {
        return 1;
    }
    return a;
}
function w(e, pattern, alphabet, { location = g.location, distance = g.distance, threshold = g.threshold, findAllMatches = g.findAllMatches, minMatchCharLength = g.minMatchCharLength, includeMatches = g.includeMatches, ignoreLocation = g.ignoreLocation } = {}) {
    if (pattern.length > 32) {
        throw new Error("Pattern length exceeds max of 32.");
    }
    const t_length = pattern.length;
    const e_length = e.length;
    const d = Math.max(0, Math.min(location, e_length));
    let p = threshold;
    let h = d;
    const v = minMatchCharLength > 1 || includeMatches;
    const y = v ? Array(e_length) : [];
    let m;
    while((m = e.indexOf(pattern, h)) > -1){
        let e = x(pattern, {
            currentLocation: m,
            expectedLocation: d,
            distance,
            ignoreLocation
        });
        p = Math.min(e, p);
        h = m + t_length;
        if (v) {
            let e = 0;
            while(e < t_length){
                y[m + e] = 1;
                e += 1;
            }
        }
    }
    h = -1;
    let b = [];
    let w = 1;
    let _ = t_length + e_length;
    const C = 1 << t_length - 1;
    for(let errors = 0; errors < t_length; errors += 1){
        let r = 0;
        let i = _;
        while(r < i){
            if (x(pattern, {
                errors,
                currentLocation: d + i,
                expectedLocation: d,
                distance,
                ignoreLocation
            }) <= p) {
                r = i;
            } else {
                _ = i;
            }
            i = Math.floor((_ - r) / 2 + r);
        }
        _ = i;
        let l = Math.max(1, d - i + 1);
        let u = findAllMatches ? e_length : Math.min(d + i, e_length) + t_length;
        let m = Array(u + 2);
        m[u + 1] = (1 << errors) - 1;
        for(let a = u; a >= l; a -= 1){
            let r = a - 1;
            let i = alphabet[e.charAt(r)];
            if (v) {
                y[r] = +!!i;
            }
            m[a] = (m[a + 1] << 1 | 1) & i;
            if (errors) {
                m[a] |= (b[a + 1] | b[a]) << 1 | 1 | b[a + 1];
            }
            if (m[a] & C && (w = x(pattern, {
                errors,
                currentLocation: r,
                expectedLocation: d,
                distance,
                ignoreLocation
            }), w <= p)) {
                p = w;
                h = r;
                if (h <= d) {
                    break;
                }
                l = Math.max(1, 2 * d - h);
            }
        }
        if (x(pattern, {
            errors: errors + 1,
            currentLocation: d,
            expectedLocation: d,
            distance,
            ignoreLocation
        }) > p) {
            break;
        }
        b = m;
    }
    const O = {
        isMatch: h >= 0,
        score: Math.max(0.001, w)
    };
    if (v) {
        const e = ((e = [], t = g.minMatchCharLength)=>{
            let n = [];
            let r = -1;
            let o = -1;
            let i = 0;
            for(let a = e.length; i < a; i += 1){
                let a = e[i];
                if (a && r === -1) {
                    r = i;
                } else if (!(a || r === -1)) {
                    o = i - 1;
                    if (o - r + 1 >= t) {
                        n.push([
                            r,
                            o
                        ]);
                    }
                    r = -1;
                }
            }
            if (e[i - 1] && i - r >= t) {
                n.push([
                    r,
                    i - 1
                ]);
            }
            return n;
        })(y, minMatchCharLength);
        if (e.length) {
            if (includeMatches) {
                O.indices = e;
            }
        } else {
            O.isMatch = false;
        }
    }
    return O;
}
function _(e) {
    let t = {};
    for(let n = 0, r = e.length; n < r; n += 1){
        const o = e.charAt(n);
        t[o] = (t[o] || 0) | 1 << r - n - 1;
    }
    return t;
}
class C {
    constructor(e, { location = g.location, threshold = g.threshold, distance = g.distance, includeMatches = g.includeMatches, findAllMatches = g.findAllMatches, minMatchCharLength = g.minMatchCharLength, isCaseSensitive = g.isCaseSensitive, ignoreLocation = g.ignoreLocation } = {}){
        this.options = {
            location,
            threshold,
            distance,
            includeMatches,
            findAllMatches,
            minMatchCharLength,
            isCaseSensitive,
            ignoreLocation
        };
        this.pattern = isCaseSensitive ? e : e.toLowerCase();
        this.chunks = [];
        if (!this.pattern.length) {
            return;
        }
        const s = (e, startIndex)=>{
            this.chunks.push({
                pattern: e,
                alphabet: _(e),
                startIndex
            });
        };
        const c = this.pattern.length;
        if (c > 32) {
            let e = 0;
            const t = c % 32;
            const n = c - t;
            while(e < n){
                s(this.pattern.substr(e, 32), e);
                e += 32;
            }
            if (t) {
                const e = c - 32;
                s(this.pattern.substr(e), e);
            }
        } else {
            s(this.pattern, 0);
        }
    }
    searchIn(e) {
        const { isCaseSensitive, includeMatches } = this.options;
        if (!isCaseSensitive) {
            e = e.toLowerCase();
        }
        if (this.pattern === e) {
            let t = {
                isMatch: true,
                score: 0
            };
            if (includeMatches) {
                t.indices = [
                    [
                        0,
                        e.length - 1
                    ]
                ];
            }
            return t;
        }
        const { location, distance, threshold, findAllMatches, minMatchCharLength, ignoreLocation } = this.options;
        let s = [];
        let c = 0;
        let f = false;
        this.chunks.forEach(({ pattern, alphabet, startIndex })=>{
            const { isMatch, score, indices } = w(e, pattern, alphabet, {
                location: location + startIndex,
                distance,
                threshold,
                findAllMatches,
                minMatchCharLength,
                includeMatches,
                ignoreLocation
            });
            if (isMatch) {
                f = true;
            }
            c += score;
            if (isMatch && indices) {
                s = [
                    ...s,
                    ...indices
                ];
            }
        });
        let d = {
            isMatch: f,
            score: f ? c / this.chunks.length : 1
        };
        if (f && includeMatches) {
            d.indices = s;
        }
        return d;
    }
}
class O {
    constructor(e){
        this.pattern = e;
    }
    static isMultiMatch(e) {
        return E(e, this.multiRegex);
    }
    static isSingleMatch(e) {
        return E(e, this.singleRegex);
    }
    search() {}
}
function E(e, t) {
    const n = e.match(t);
    if (n) {
        return n[1];
    }
    return null;
}
class M extends O {
    constructor(e, { location = g.location, threshold = g.threshold, distance = g.distance, includeMatches = g.includeMatches, findAllMatches = g.findAllMatches, minMatchCharLength = g.minMatchCharLength, isCaseSensitive = g.isCaseSensitive, ignoreLocation = g.ignoreLocation } = {}){
        super(e);
        this._bitapSearch = new C(e, {
            location,
            threshold,
            distance,
            includeMatches,
            findAllMatches,
            minMatchCharLength,
            isCaseSensitive,
            ignoreLocation
        });
    }
    static get type() {
        return "fuzzy";
    }
    static get multiRegex() {
        return /^"(.*)"$/;
    }
    static get singleRegex() {
        return /^(.*)$/;
    }
    search(e) {
        return this._bitapSearch.searchIn(e);
    }
}
class S extends O {
    constructor(e){
        super(e);
    }
    static get type() {
        return "include";
    }
    static get multiRegex() {
        return /^'"(.*)"$/;
    }
    static get singleRegex() {
        return /^'(.*)$/;
    }
    search(e) {
        let t;
        let n = 0;
        const indices = [];
        const length = this.pattern.length;
        while((t = e.indexOf(this.pattern, n)) > -1){
            n = t + length;
            indices.push([
                t,
                n - 1
            ]);
        }
        const i = !!indices.length;
        return {
            isMatch: i,
            score: i ? 0 : 1,
            indices
        };
    }
}
const A = [
    class extends O {
        constructor(e){
            super(e);
        }
        static get type() {
            return "exact";
        }
        static get multiRegex() {
            return /^="(.*)"$/;
        }
        static get singleRegex() {
            return /^=(.*)$/;
        }
        search(e) {
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
    },
    S,
    class extends O {
        constructor(e){
            super(e);
        }
        static get type() {
            return "prefix-exact";
        }
        static get multiRegex() {
            return /^\^"(.*)"$/;
        }
        static get singleRegex() {
            return /^\^(.*)$/;
        }
        search(e) {
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
    },
    class extends O {
        constructor(e){
            super(e);
        }
        static get type() {
            return "inverse-prefix-exact";
        }
        static get multiRegex() {
            return /^!\^"(.*)"$/;
        }
        static get singleRegex() {
            return /^!\^(.*)$/;
        }
        search(e) {
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
    },
    class extends O {
        constructor(e){
            super(e);
        }
        static get type() {
            return "inverse-suffix-exact";
        }
        static get multiRegex() {
            return /^!"(.*)"\$$/;
        }
        static get singleRegex() {
            return /^!(.*)\$$/;
        }
        search(e) {
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
    },
    class extends O {
        constructor(e){
            super(e);
        }
        static get type() {
            return "suffix-exact";
        }
        static get multiRegex() {
            return /^"(.*)"\$$/;
        }
        static get singleRegex() {
            return /^(.*)\$$/;
        }
        search(e) {
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
    },
    class extends O {
        constructor(e){
            super(e);
        }
        static get type() {
            return "inverse-exact";
        }
        static get multiRegex() {
            return /^!"(.*)"$/;
        }
        static get singleRegex() {
            return /^!(.*)$/;
        }
        search(e) {
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
    },
    M
];
const A_length = A.length;
const j = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
const T = new Set([
    M.type,
    S.type
]);
const P = [];
function L(e, t) {
    for(let n = 0, r = P.length; n < r; n += 1){
        let r = P[n];
        if (r.condition(e, t)) {
            return new r(e, t);
        }
    }
    return new C(e, t);
}
const z = "$and";
const N = "$path";
const D = (e)=>!(!e[z] && !e.$or);
const I = (e)=>({
        [z]: Object.keys(e).map((t)=>({
                [t]: e[t]
            }))
    });
function R(e, t, { auto = true } = {}) {
    const i = (e)=>{
        let a = Object.keys(e);
        const u = ((e)=>!!e[N])(e);
        if (!u && a.length > 1 && !D(e)) {
            return i(I(e));
        }
        if (((e)=>!r(e) && l(e) && !D(e))(e)) {
            const r = u ? e[N] : a[0];
            const i = u ? e.$val : e[r];
            if (!o(i)) {
                throw new Error(((e)=>`Invalid value for key ${e}`)(r));
            }
            const l = {
                keyId: v(r),
                pattern: i
            };
            if (auto) {
                l.searcher = L(i, t);
            }
            return l;
        }
        let s = {
            children: [],
            operator: a[0]
        };
        a.forEach((t)=>{
            const n = e[t];
            if (r(n)) {
                n.forEach((e)=>{
                    s.children.push(i(e));
                });
            }
        });
        return s;
    };
    if (!D(e)) {
        e = I(e);
    }
    return i(e);
}
function H({ matches }, t) {
    t.matches = [];
    if (u(matches)) {
        matches.forEach((e)=>{
            if (!u(e.indices) || !e.indices.length) {
                return;
            }
            const { indices, value } = e;
            let o = {
                indices,
                value
            };
            if (e.key) {
                o.key = e.key.src;
            }
            if (e.idx > -1) {
                o.refIndex = e.idx;
            }
            t.matches.push(o);
        });
    }
}
function B(e, t) {
    t.score = e.score;
}
class F {
    constructor(e, t = {}, n){
        this.options = {
            ...g,
            ...t
        };
        this.options.useExtendedSearch;
        this._keyStore = new d(this.options.keys);
        this.setCollection(e, n);
    }
    setCollection(e, t) {
        this._docs = e;
        if (t && !(t instanceof m)) {
            throw new Error("Incorrect 'index' type");
        }
        this._myIndex = t || b(this.options.keys, this._docs, {
            getFn: this.options.getFn
        });
    }
    add(e) {
        if (u(e)) {
            this._docs.push(e);
            this._myIndex.add(e);
        }
    }
    remove(e = ()=>false) {
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
    removeAt(e) {
        this._docs.splice(e, 1);
        this._myIndex.removeAt(e);
    }
    getIndex() {
        return this._myIndex;
    }
    search(e, { limit = -1 } = {}) {
        const { includeMatches, includeScore, shouldSort, sortFn, ignoreFieldNorm } = this.options;
        let s = o(e) ? o(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
        ((e, { ignoreFieldNorm = g.ignoreFieldNorm })=>{
            e.forEach((e)=>{
                let n = 1;
                e.matches.forEach(({ key, norm, score })=>{
                    const i = key ? key.weight : null;
                    n *= (score === 0 && i ? Number.EPSILON : score) ** ((i || 1) * (ignoreFieldNorm ? 1 : norm));
                });
                e.score = n;
            });
        })(s, {
            ignoreFieldNorm
        });
        if (shouldSort) {
            s.sort(sortFn);
        }
        if (i(limit) && limit > -1) {
            s = s.slice(0, limit);
        }
        return ((e, t, { includeMatches = g.includeMatches, includeScore = g.includeScore } = {})=>{
            const o = [];
            if (includeMatches) {
                o.push(H);
            }
            if (includeScore) {
                o.push(B);
            }
            return e.map((e)=>{
                const { idx } = e;
                const r = {
                    item: t[idx],
                    refIndex: idx
                };
                if (o.length) {
                    o.forEach((t)=>{
                        t(e, r);
                    });
                }
                return r;
            });
        })(s, this._docs, {
            includeMatches,
            includeScore
        });
    }
    _searchStringList(e) {
        const t = L(e, this.options);
        const { records } = this._myIndex;
        const r = [];
        records.forEach(({ v, i: i_1, n: n_1 })=>{
            if (!u(v)) {
                return;
            }
            const { isMatch, score, indices } = t.searchIn(v);
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
        });
        return r;
    }
    _searchLogical(e) {
        const t = R(e, this.options);
        const n = (e, item, idx)=>{
            if (!e.children) {
                const { keyId, searcher } = e;
                const i = this._findMatches({
                    key: this._keyStore.get(keyId),
                    value: this._myIndex.getValueForItemAtKeyId(item, keyId),
                    searcher
                });
                if (i && i.length) {
                    return [
                        {
                            idx,
                            item,
                            matches: i
                        }
                    ];
                }
                return [];
            }
            switch(e.operator){
                case z:
                    {
                        const o = [];
                        for(let i = 0, a = e.children.length; i < a; i += 1){
                            const child = e.children[i];
                            const l = n(child, item, idx);
                            if (!l.length) {
                                return [];
                            }
                            o.push(...l);
                        }
                        return o;
                    }
                case "$or":
                    {
                        const o = [];
                        for(let i = 0, a = e.children.length; i < a; i += 1){
                            const child = e.children[i];
                            const l = n(child, item, idx);
                            if (l.length) {
                                o.push(...l);
                                break;
                            }
                        }
                        return o;
                    }
            }
        };
        const records = this._myIndex.records;
        const o = {};
        const i = [];
        records.forEach(({ $, i: i_1 })=>{
            if (u($)) {
                let a = n(t, $, i_1);
                if (a.length) {
                    if (!o[i_1]) {
                        o[i_1] = {
                            idx: i_1,
                            item: $,
                            matches: []
                        };
                        i.push(o[i_1]);
                    }
                    a.forEach(({ matches })=>{
                        o[i_1].matches.push(...matches);
                    });
                }
            }
        });
        return i;
    }
    _searchObjectList(e) {
        const searcher = L(e, this.options);
        const { keys, records } = this._myIndex;
        const o = [];
        records.forEach(({ $, i: i_1 })=>{
            if (!u($)) {
                return;
            }
            let i = [];
            keys.forEach((key, r)=>{
                i.push(...this._findMatches({
                    key,
                    value: $[r],
                    searcher
                }));
            });
            if (i.length) {
                o.push({
                    idx: i_1,
                    item: $,
                    matches: i
                });
            }
        });
        return o;
    }
    _findMatches({ key, value, searcher }) {
        if (!u(value)) {
            return [];
        }
        let o = [];
        if (r(value)) {
            value.forEach(({ v, i: i_1, n: norm })=>{
                if (!u(v)) {
                    return;
                }
                const { isMatch, score, indices } = searcher.searchIn(v);
                if (isMatch) {
                    o.push({
                        score,
                        key,
                        value: v,
                        idx: i_1,
                        norm,
                        indices
                    });
                }
            });
        } else {
            const { v, n: n_1 } = value;
            const { isMatch, score, indices } = searcher.searchIn(v);
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
F.version = "6.4.6";
F.createIndex = b;
F.parseIndex = function({ keys, records }, { getFn = g.getFn } = {}) {
    const o = new m({
        getFn
    });
    o.setKeys(keys);
    o.setIndexRecords(records);
    return o;
};
F.config = g;
F.parseQuery = R;
((...e)=>{
    P.push(...e);
})(class {
    constructor(e, { isCaseSensitive = g.isCaseSensitive, includeMatches = g.includeMatches, minMatchCharLength = g.minMatchCharLength, ignoreLocation = g.ignoreLocation, findAllMatches = g.findAllMatches, location = g.location, threshold = g.threshold, distance = g.distance } = {}){
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
        this.pattern = isCaseSensitive ? e : e.toLowerCase();
        this.query = ((e, t = {})=>e.split("|").map((e)=>{
                let n = e.trim().split(j).filter((e)=>e && !!e.trim());
                let r = [];
                for(let o = 0, i = n.length; o < i; o += 1){
                    const e = n[o];
                    let i = false;
                    let a = -1;
                    while(!i && ++a < A_length){
                        const n = A[a];
                        let o = n.isMultiMatch(e);
                        if (o) {
                            r.push(new n(o, t));
                            i = true;
                        }
                    }
                    if (!i) {
                        for(a = -1; ++a < A_length;){
                            const n = A[a];
                            let o = n.isSingleMatch(e);
                            if (o) {
                                r.push(new n(o, t));
                                break;
                            }
                        }
                    }
                }
                return r;
            }))(this.pattern, this.options);
    }
    static condition(e, t) {
        return t.useExtendedSearch;
    }
    searchIn(e) {
        const query = this.query;
        if (!query) {
            return {
                isMatch: false,
                score: 1
            };
        }
        const { includeMatches, isCaseSensitive } = this.options;
        e = isCaseSensitive ? e : e.toLowerCase();
        let o = 0;
        let i = [];
        let a = 0;
        for(let l = 0, u = query.length; l < u; l += 1){
            const r = query[l];
            i.length = 0;
            o = 0;
            for(let t = 0, l = r.length; t < l; t += 1){
                const l = r[t];
                const { isMatch, indices, score } = l.search(e);
                if (!isMatch) {
                    a = 0;
                    o = 0;
                    i.length = 0;
                    break;
                }
                o += 1;
                a += score;
                if (includeMatches) {
                    const e = l.constructor.type;
                    if (T.has(e)) {
                        i = [
                            ...i,
                            ...indices
                        ];
                    } else {
                        i.push(indices);
                    }
                }
            }
            if (o) {
                let e = {
                    isMatch: true,
                    score: a / o
                };
                if (includeMatches) {
                    e.indices = i;
                }
                return e;
            }
        }
        return {
            isMatch: false,
            score: 1
        };
    }
});
export default F;
