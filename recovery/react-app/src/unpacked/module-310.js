const hasOwnProperty = Object.prototype.hasOwnProperty;
const a = (()=>{
    const e = [];
    for(let t = 0; t < 256; ++t){
        e.push(`%${((t < 16 ? "0" : "") + t.toString(16)).toUpperCase()}`);
    }
    return e;
})();
const arrayToObject = function(e, t) {
    const n = t && t.plainObjects ? Object.create(null) : {};
    for(let r = 0; r < e.length; ++r){
        if (e[r] !== undefined) {
            n[r] = e[r];
        }
    }
    return n;
};
export default {
    arrayToObject,
    assign: function(e, t) {
        return Object.keys(t).reduce((acc, key)=>{
            acc[key] = t[key];
            return acc;
        }, e);
    },
    combine: function(e, t) {
        return [].concat(e, t);
    },
    compact: function(o) {
        for(var t = [
            {
                obj: {
                    o
                },
                prop: "o"
            }
        ], n = [], r = 0; r < t.length; ++r){
            const a = t[r];
            const obj = a.obj[a.prop];
            for(let l = Object.keys(obj), s = 0; s < l.length; ++s){
                const prop = l[s];
                const c = obj[prop];
                if (typeof c === "object" && c !== null && n.indexOf(c) === -1) {
                    t.push({
                        obj,
                        prop
                    });
                    n.push(c);
                }
            }
        }
        ((e)=>{
            while(e.length > 1){
                const t = e.pop();
                const n = t.obj[t.prop];
                if (Array.isArray(n)) {
                    const r = [];
                    for(let a = 0; a < n.length; ++a){
                        if (n[a] !== undefined) {
                            r.push(n[a]);
                        }
                    }
                    t.obj[t.prop] = r;
                }
            }
        })(t);
        return o;
    },
    decode: function(e, t, n) {
        const r = e.replace(/\+/g, " ");
        if (n === "iso-8859-1") {
            return r.replace(/%[0-9a-f]{2}/gi, unescape);
        }
        try {
            return decodeURIComponent(r);
        } catch (e) {
            return r;
        }
    },
    encode: function(e, t, n) {
        if (e.length === 0) {
            return e;
        }
        let r = e;
        if (typeof e === "symbol") {
            r = Symbol.prototype.toString.call(e);
        } else if (typeof e !== "string") {
            r = String(e);
        }
        if (n === "iso-8859-1") {
            return escape(r).replace(/%u[0-9a-f]{4}/gi, (e)=>`%26%23${parseInt(e.slice(2), 16)}%3B`);
        }
        let o = "";
        for(let i = 0; i < r.length; ++i){
            let l = r.charCodeAt(i);
            if (l === 45 || l === 46 || l === 95 || l === 126 || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122) {
                o += r.charAt(i);
            } else if (l < 128) {
                o += a[l];
            } else if (l < 2048) {
                o += a[192 | l >> 6] + a[128 | 63 & l];
            } else if (l < 55296 || l >= 57344) {
                o += a[224 | l >> 12] + a[128 | l >> 6 & 63] + a[128 | 63 & l];
            } else {
                i += 1;
                l = 65536 + ((1023 & l) << 10 | 1023 & r.charCodeAt(i));
                o += a[240 | l >> 18] + a[128 | l >> 12 & 63] + a[128 | l >> 6 & 63] + a[128 | 63 & l];
            }
        }
        return o;
    },
    isBuffer: function(e) {
        return !(!e || typeof e !== "object" || !(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e)));
    },
    isRegExp: function(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]";
    },
    maybeMap: function(e, t) {
        if (Array.isArray(e)) {
            const n = [];
            for(let r = 0; r < e.length; r += 1){
                n.push(t(e[r]));
            }
            return n;
        }
        return t(e);
    },
    merge: function e(t, n, a) {
        if (!n) {
            return t;
        }
        if (typeof n !== "object") {
            if (Array.isArray(t)) {
                t.push(n);
            } else {
                if (!t || typeof t !== "object") {
                    return [
                        t,
                        n
                    ];
                }
                if (a && (a.plainObjects || a.allowPrototypes) || !hasOwnProperty.call(Object.prototype, n)) {
                    t[n] = true;
                }
            }
            return t;
        }
        if (!t || typeof t !== "object") {
            return [
                t
            ].concat(n);
        }
        let l = t;
        if (Array.isArray(t) && !Array.isArray(n)) {
            l = arrayToObject(t, a);
        }
        if (Array.isArray(t) && Array.isArray(n)) {
            n.forEach((n, o)=>{
                if (hasOwnProperty.call(t, o)) {
                    const i = t[o];
                    if (i && typeof i === "object" && n && typeof n === "object") {
                        t[o] = e(i, n, a);
                    } else {
                        t.push(n);
                    }
                } else {
                    t[o] = n;
                }
            });
            return t;
        }
        return Object.keys(n).reduce((acc, key)=>{
            const i = n[key];
            if (hasOwnProperty.call(acc, key)) {
                acc[key] = e(acc[key], i, a);
            } else {
                acc[key] = i;
            }
            return acc;
        }, l);
    }
};
