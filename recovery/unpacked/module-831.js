((t)=>{
    const n = ()=>{
        "use strict";
        const toString = Function.prototype.toString;
        const hasOwnProperty = Object.prototype.hasOwnProperty;
        const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
        const f = typeof Object.getOwnPropertySymbols === "function";
        const d = typeof WeakMap === "function";
        const p = (t, r)=>{
            if (!t.constructor) {
                return Object.create(null);
            }
            const t_constructor = t.constructor;
            const i = t.__proto__ || Object.getPrototypeOf(t);
            if (t_constructor === r.Object) {
                if (i === r.Object.prototype) {
                    return {};
                }
                return Object.create(i);
            }
            if (~toString.call(t_constructor).indexOf("[native code]")) {
                try {
                    return new t_constructor;
                } catch (e) {}
            }
            return Object.create(i);
        };
        const h = function(e, t, n, r) {
            const o = p(e, t);
            r.set(e, o);
            for(const i in e){
                if (hasOwnProperty.call(e, i)) {
                    o[i] = n(e[i], r);
                }
            }
            if (f) {
                const l = Object.getOwnPropertySymbols(e);
                const u = l.length;
                if (u) {
                    for(let d = 0, h; d < u; d++){
                        h = l[d];
                        if (propertyIsEnumerable.call(e, h)) {
                            o[h] = n(e[h], r);
                        }
                    }
                }
            }
            return o;
        };
        const v = function(e, t, n, l) {
            const u = p(e, t);
            l.set(e, u);
            const s = f ? Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)) : Object.getOwnPropertyNames(e);
            const s_length = s.length;
            if (s_length) {
                for(let d = 0, h, v; d < s_length; d++){
                    if ((h = s[d]) !== "callee" && h !== "caller") {
                        if (v = Object.getOwnPropertyDescriptor(e, h)) {
                            if (!(v.get || v.set)) {
                                v.value = n(e[h], l);
                            }
                            try {
                                Object.defineProperty(u, h, v);
                            } catch (e) {
                                u[h] = v.value;
                            }
                        } else {
                            u[h] = n(e[h], l);
                        }
                    }
                }
            }
            return u;
        };
        const y = typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : t !== undefined ? t : void (console && console.error && console.error('Unable to locate global object, returning "this".'));
        function m(e, t) {
            const r = !(!t || !t.isStrict);
            const o = t && t.realm || y;
            const i = r ? v : h;
            const a = function(e, t) {
                if (!e || typeof e !== "object") {
                    return e;
                }
                if (t.has(e)) {
                    return t.get(e);
                }
                let n;
                let l;
                let u;
                const e_constructor = e.constructor;
                if (e_constructor === o.Object) {
                    return i(e, o, a, t);
                }
                if (Array.isArray(e)) {
                    if (r) {
                        return v(e, o, a, t);
                    }
                    const c = e.length;
                    n = new e_constructor;
                    t.set(e, n);
                    for(let f = 0; f < c; f++){
                        n[f] = a(e[f], t);
                    }
                    return n;
                }
                if (e instanceof o.Date) {
                    return new e_constructor(e.getTime());
                }
                if (e instanceof o.RegExp) {
                    n = new e_constructor(e.source, e.flags || (u = "", (l = e).global && (u += "g"), l.ignoreCase && (u += "i"), l.multiline && (u += "m"), l.unicode && (u += "u"), l.sticky && (u += "y"), u));
                    n.lastIndex = e.lastIndex;
                    return n;
                }
                if (o.Map && e instanceof o.Map) {
                    n = new e_constructor;
                    t.set(e, n);
                    e.forEach((e, r)=>{
                        n.set(r, a(e, t));
                    });
                    return n;
                }
                if (o.Set && e instanceof o.Set) {
                    n = new e_constructor;
                    t.set(e, n);
                    e.forEach((e)=>{
                        n.add(a(e, t));
                    });
                    return n;
                }
                if (o.Blob && e instanceof o.Blob) {
                    return n = new Blob([
                        e
                    ], {
                        type: e.type
                    });
                }
                if (o.Buffer && o.Buffer.isBuffer(e)) {
                    n = o.Buffer.allocUnsafe ? o.Buffer.allocUnsafe(e.length) : new e_constructor(e.length);
                    t.set(e, n);
                    e.copy(n);
                    return n;
                }
                if (o.ArrayBuffer) {
                    if (o.ArrayBuffer.isView(e)) {
                        n = new e_constructor(e.buffer.slice(0));
                        t.set(e, n);
                        return n;
                    }
                    if (e instanceof o.ArrayBuffer) {
                        n = e.slice(0);
                        t.set(e, n);
                        return n;
                    }
                }
                if (typeof e.then === "function" || e instanceof Error || o.WeakMap && e instanceof o.WeakMap || o.WeakSet && e instanceof o.WeakSet) {
                    return e;
                }
                return i(e, o, a, t);
            };
            return a(e, (()=>{
                if (d) {
                    return new WeakMap;
                }
                var e = Object.create({
                    has: function(t) {
                        return !!~e._keys.indexOf(t);
                    },
                    set: function(t, n) {
                        e._keys.push(t);
                        e._values.push(n);
                    },
                    get: function(t) {
                        return e._values[e._keys.indexOf(t)];
                    }
                });
                e._keys = [];
                e._values = [];
                return e;
            })());
        }
        m.strict = function(e, t) {
            return m(e, {
                isStrict: true,
                realm: t ? t.realm : undefined
            });
        };
        return m;
    };
    module.exports = n();
})(require("./module-69.js").default);
