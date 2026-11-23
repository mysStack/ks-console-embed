(function(t) {
    let n;
    const r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    const o = /^\w*$/;
    const i = /^\./;
    const a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    const l = /\\(\\)?/g;
    const u = /^\[object .+?Constructor\]$/;
    const s = typeof t === "object" && t && t.Object === Object && t;
    const c = typeof self === "object" && self && self.Object === Object && self;
    const f = s || c || Function("return this")();
    const v = f["__core-js_shared__"];
    const g = (n = /[^.]+$/.exec(v && v.keys && v.keys.IE_PROTO || "")) ? `Symbol(src)_1.${n}` : "";
    const toString = Function.prototype.toString;
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const toString_1 = Object.prototype.toString;
    const x = RegExp(`^${toString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?")}\$`);
    const f_Symbol = f.Symbol;
    const splice = Array.prototype.splice;
    const C = L(f, "Map");
    const O = L(Object, "create");
    const E = f_Symbol ? f_Symbol.prototype : undefined;
    const M = E ? E.toString : undefined;
    class S {
        constructor(e){
            let t = -1;
            const n = e ? e.length : 0;
            for(this.clear(); ++t < n;){
                const r = e[t];
                this.set(r[0], r[1]);
            }
        }
        clear() {
            this.__data__ = O ? O(null) : {};
        }
        delete(e) {
            return this.has(e) && delete this.__data__[e];
        }
        get(e) {
            const __data__ = this.__data__;
            if (O) {
                const n = __data__[e];
                if (n === "__lodash_hash_undefined__") {
                    return undefined;
                }
                return n;
            }
            if (hasOwnProperty.call(__data__, e)) {
                return __data__[e];
            }
        }
        has(e) {
            const __data__ = this.__data__;
            if (O) {
                return __data__[e] !== undefined;
            }
            return hasOwnProperty.call(__data__, e);
        }
        set(e, t) {
            this.__data__[e] = O && t === undefined ? "__lodash_hash_undefined__" : t;
            return this;
        }
    }
    class A {
        constructor(e){
            let t = -1;
            const n = e ? e.length : 0;
            for(this.clear(); ++t < n;){
                const r = e[t];
                this.set(r[0], r[1]);
            }
        }
        clear() {
            this.__data__ = [];
        }
        delete(e) {
            const __data__ = this.__data__;
            const n = j(__data__, e);
            return !(n < 0 || (n == __data__.length - 1 ? __data__.pop() : splice.call(__data__, n, 1), 0));
        }
        get(e) {
            const __data__ = this.__data__;
            const n = j(__data__, e);
            if (n < 0) {
                return undefined;
            }
            return __data__[n][1];
        }
        has(e) {
            return j(this.__data__, e) > -1;
        }
        set(e, t) {
            const __data__ = this.__data__;
            const r = j(__data__, e);
            if (r < 0) {
                __data__.push([
                    e,
                    t
                ]);
            } else {
                __data__[r][1] = t;
            }
            return this;
        }
    }
    class k {
        constructor(e){
            let t = -1;
            const n = e ? e.length : 0;
            for(this.clear(); ++t < n;){
                const r = e[t];
                this.set(r[0], r[1]);
            }
        }
        clear() {
            this.__data__ = {
                hash: new S,
                map: new (C || A),
                string: new S
            };
        }
        delete(e) {
            return P(this, e).delete(e);
        }
        get(e) {
            return P(this, e).get(e);
        }
        has(e) {
            return P(this, e).has(e);
        }
        set(e, t) {
            P(this, e).set(e, t);
            return this;
        }
    }
    function j(__data__, t) {
        let n;
        let r;
        for(let o = __data__.length; o--;){
            if ((n = __data__[o][0]) === (r = t) || n != n && r != r) {
                return o;
            }
        }
        return -1;
    }
    function T(e, t) {
        let n;
        for(var i = 0, a = (t = ((e, t)=>{
            if (Array_isArray(e)) {
                return false;
            }
            const n = typeof e;
            return !(n != "number" && n != "symbol" && n != "boolean" && e != null && !H(e)) || o.test(e) || !r.test(e) || t != null && e in Object(t);
        })(t, e) ? [
            t
        ] : Array_isArray(n = t) ? n : z(n)).length; e != null && i < a;){
            e = e[N(t[i++])];
        }
        if (i && i == a) {
            return e;
        }
    }
    function P(e, t) {
        let n;
        let r;
        const e___data__ = e.__data__;
        if ((r = typeof (n = t)) == "string" || r == "number" || r == "symbol" || r == "boolean" ? n !== "__proto__" : n === null) {
            return e___data__[typeof t === "string" ? "string" : "hash"];
        }
        return e___data__.map;
    }
    function L(e, t) {
        const n = ((e, t)=>e?.[t])(e, t);
        if (((e)=>{
            return !(!R(e) || (t = e, g && g in t)) && (((e)=>{
                const t = R(e) ? toString_1.call(e) : "";
                return t == "[object Function]" || t == "[object GeneratorFunction]";
            })(e) || ((e)=>{
                let t = false;
                if (e != null && typeof e.toString !== "function") {
                    try {
                        t = !!`${e}`;
                    } catch (e) {}
                }
                return t;
            })(e) ? x : u).test(((e)=>{
                if (e != null) {
                    try {
                        return toString.call(e);
                    } catch (e) {}
                    try {
                        return `${e}`;
                    } catch (e) {}
                }
                return "";
            })(e));
            var t;
        })(n)) {
            return n;
        }
    }
    var z = D((e)=>{
        let t;
        e = (t = e) == null ? "" : ((e)=>{
            if (typeof e === "string") {
                return e;
            }
            if (H(e)) {
                if (M) {
                    return M.call(e);
                }
                return "";
            }
            const t = `${e}`;
            if (t == "0" && 1 / e == -Infinity) {
                return "-0";
            }
            return t;
        })(t);
        const n = [];
        if (i.test(e)) {
            n.push("");
        }
        e.replace(a, (e, t, r, o)=>{
            n.push(r ? o.replace(l, "$1") : t || e);
        });
        return n;
    });
    function N(e) {
        if (typeof e === "string" || H(e)) {
            return e;
        }
        const t = `${e}`;
        if (t == "0" && 1 / e == -Infinity) {
            return "-0";
        }
        return t;
    }
    function D(e, t) {
        if (typeof e !== "function" || t && typeof t !== "function") {
            throw new TypeError("Expected a function");
        }
        const n = function() {
            const r = arguments;
            const o = t ? t.apply(this, r) : r[0];
            const n_cache = n.cache;
            if (n_cache.has(o)) {
                return n_cache.get(o);
            }
            const a = e.apply(this, r);
            n.cache = n_cache.set(o, a);
            return a;
        };
        n.cache = new (D.Cache || k);
        return n;
    }
    D.Cache = k;
    var Array_isArray = Array.isArray;
    function R(e) {
        const t = typeof e;
        return !!e && (t == "object" || t == "function");
    }
    function H(e) {
        return typeof e === "symbol" || ((e)=>!!e && typeof e === "object")(e) && toString_1.call(e) == "[object Symbol]";
    }
    module.exports = function(e, t, n) {
        const r = e == null ? undefined : T(e, t);
        if (r === undefined) {
            return n;
        }
        return r;
    };
}).call(this, require("./module-69.js").default);
