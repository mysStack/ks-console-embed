((t)=>{
    const n = /^\s+|\s+$/g;
    const r = /^[-+]0x[0-9a-f]+$/i;
    const o = /^0b[01]+$/i;
    const i = /^0o[0-7]+$/i;
    const _parseInt = parseInt;
    const l = typeof t === "object" && t && t.Object === Object && t;
    const u = typeof self === "object" && self && self.Object === Object && self;
    const s = l || u || Function("return this")();
    const toString = Object.prototype.toString;
    const p = ()=>s.Date.now();
    function h(e) {
        const t = typeof e;
        return !!e && (t == "object" || t == "function");
    }
    function v(e) {
        if (typeof e === "number") {
            return e;
        }
        if (((e)=>typeof e === "symbol" || ((e)=>!!e && typeof e === "object")(e) && toString.call(e) == "[object Symbol]")(e)) {
            return NaN;
        }
        if (h(e)) {
            const t = typeof e.valueOf === "function" ? e.valueOf() : e;
            e = h(t) ? `${t}` : t;
        }
        if (typeof e !== "string") {
            if (e === 0) {
                return e;
            }
            return +e;
        }
        e = e.replace(n, "");
        const l = o.test(e);
        if (l || i.test(e)) {
            return _parseInt(e.slice(2), l ? 2 : 8);
        }
        if (r.test(e)) {
            return NaN;
        }
        return +e;
    }
    module.exports = function(e, maxWait, n) {
        let leading = true;
        let trailing = true;
        if (typeof e !== "function") {
            throw new TypeError("Expected a function");
        }
        if (h(n)) {
            leading = "leading" in n ? !!n.leading : leading;
            trailing = "trailing" in n ? !!n.trailing : trailing;
        }
        return ((e, maxWait_1, n)=>{
            let r;
            let o;
            let i;
            let a;
            let l;
            let u;
            let s = 0;
            let c = false;
            let g = false;
            let y = true;
            if (typeof e !== "function") {
                throw new TypeError("Expected a function");
            }
            function m(t) {
                const n = r;
                const i = o;
                o = undefined;
                r = undefined;
                s = t;
                return a = e.apply(i, n);
            }
            function b(e) {
                s = e;
                l = setTimeout(w, maxWait_1);
                if (c) {
                    return m(e);
                }
                return a;
            }
            function x(e) {
                const n = e - u;
                return u === undefined || n >= maxWait_1 || n < 0 || g && e - s >= i;
            }
            function w() {
                const e = p();
                if (x(e)) {
                    return _(e);
                }
                l = setTimeout(w, ((e)=>{
                    const n = maxWait_1 - (e - u);
                    if (g) {
                        return Math.min(n, i - (e - s));
                    }
                    return n;
                })(e));
            }
            function _(e) {
                l = undefined;
                if (y && r) {
                    return m(e);
                }
                o = undefined;
                r = undefined;
                return a;
            }
            function C() {
                const e = p();
                const n = x(e);
                r = arguments;
                o = this;
                u = e;
                if (n) {
                    if (l === undefined) {
                        return b(u);
                    }
                    if (g) {
                        l = setTimeout(w, maxWait_1);
                        return m(u);
                    }
                }
                if (l === undefined) {
                    l = setTimeout(w, maxWait_1);
                }
                return a;
            }
            maxWait_1 = v(maxWait_1) || 0;
            if (h(n)) {
                c = !!n.leading;
                i = (g = "maxWait" in n) ? Math.max(v(n.maxWait) || 0, maxWait_1) : i;
                y = "trailing" in n ? !!n.trailing : y;
            }
            C.cancel = function() {
                if (l !== undefined) {
                    clearTimeout(l);
                }
                s = 0;
                l = undefined;
                o = undefined;
                u = undefined;
                r = undefined;
            };
            C.flush = function() {
                if (l === undefined) {
                    return a;
                }
                return _(p());
            };
            return C;
        })(e, maxWait, {
            leading,
            maxWait,
            trailing
        });
    };
})(require("./module-69.js").default);
