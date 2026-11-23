(function(n) {
    let r;
    ((n, o)=>{
        module.exports = ((n)=>{
            "use strict";
            let fromUint8Array;
            const Base64_1 = (n = n || {}).Base64;
            const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            const l = ((e)=>{
                const t = {};
                for(let n = 0, r = e.length; n < r; n++){
                    t[e.charAt(n)] = n;
                }
                return t;
            })(i);
            const u = function(e) {
                if (e.length < 2) {
                    if ((t = e.charCodeAt(0)) < 128) {
                        return e;
                    }
                    if (t < 2048) {
                        return String.fromCharCode(192 | t >>> 6) + String.fromCharCode(128 | 63 & t);
                    }
                    return String.fromCharCode(224 | t >>> 12 & 15) + String.fromCharCode(128 | t >>> 6 & 63) + String.fromCharCode(128 | 63 & t);
                }
                var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                return String.fromCharCode(240 | t >>> 18 & 7) + String.fromCharCode(128 | t >>> 12 & 63) + String.fromCharCode(128 | t >>> 6 & 63) + String.fromCharCode(128 | 63 & t);
            };
            const c = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
            const utob = function(e) {
                return e.replace(c, u);
            };
            const d = function(e) {
                const t = [
                    0,
                    2,
                    1
                ][e.length % 3];
                const n = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
                return [
                    i.charAt(n >>> 18),
                    i.charAt(n >>> 12 & 63),
                    t >= 2 ? "=" : i.charAt(n >>> 6 & 63),
                    t >= 1 ? "=" : i.charAt(63 & n)
                ].join("");
            };
            const btoa = n.btoa && typeof n.btoa === "function" ? function(e) {
                return n.btoa(e);
            } : function(e) {
                if (e.match(/[^\x00-\xFF]/)) {
                    throw new RangeError("The string contains invalid characters.");
                }
                return e.replace(/[\s\S]{1,3}/g, d);
            };
            const h = (e)=>btoa(utob(String(e)));
            const v = (e)=>e.replace(/[+\/]/g, (e)=>{
                    if (e == "+") {
                        return "-";
                    }
                    return "_";
                }).replace(/=/g, "");
            const m = function(e, t) {
                if (t) {
                    return v(h(e));
                }
                return h(e);
            };
            if (n.Uint8Array) {
                fromUint8Array = function(e, t) {
                    let n = "";
                    for(let r = 0, o = e.length; r < o; r += 3){
                        const a = e[r];
                        const l = e[r + 1];
                        const s = e[r + 2];
                        const u = a << 16 | l << 8 | s;
                        n += i.charAt(u >>> 18) + i.charAt(u >>> 12 & 63) + (l !== undefined ? i.charAt(u >>> 6 & 63) : "=") + (s !== undefined ? i.charAt(63 & u) : "=");
                    }
                    if (t) {
                        return v(n);
                    }
                    return n;
                };
            }
            let toUint8Array;
            const y = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
            const b = function(e) {
                switch(e.length){
                    case 4:
                        const t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                        return String.fromCharCode(55296 + (t >>> 10)) + String.fromCharCode(56320 + (1023 & t));
                    case 3:
                        return String.fromCharCode((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
                    default:
                        return String.fromCharCode((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
                }
            };
            const btou = function(e) {
                return e.replace(y, b);
            };
            const w = function(e) {
                const e_length = e.length;
                const n = e_length % 4;
                const r = (e_length > 0 ? l[e.charAt(0)] << 18 : 0) | (e_length > 1 ? l[e.charAt(1)] << 12 : 0) | (e_length > 2 ? l[e.charAt(2)] << 6 : 0) | (e_length > 3 ? l[e.charAt(3)] : 0);
                const o = [
                    String.fromCharCode(r >>> 16),
                    String.fromCharCode(r >>> 8 & 255),
                    String.fromCharCode(255 & r)
                ];
                o.length -= [
                    0,
                    0,
                    2,
                    1
                ][n];
                return o.join("");
            };
            const _ = n.atob && typeof n.atob === "function" ? (e)=>n.atob(e) : (e)=>e.replace(/\S{1,4}/g, w);
            const atob = function(e) {
                return _(String(e).replace(/[^A-Za-z0-9\+\/]/g, ""));
            };
            const M = (e)=>String(e).replace(/[-_]/g, (e)=>{
                    if (e == "-") {
                        return "+";
                    }
                    return "/";
                }).replace(/[^A-Za-z0-9\+\/]/g, "");
            const E = function(e) {
                return ((e)=>btou(_(e)))(M(e));
            };
            if (n.Uint8Array) {
                toUint8Array = function(e) {
                    return Uint8Array.from(atob(M(e)), function(e) {
                        return e.charCodeAt(0);
                    });
                };
            }
            n.Base64 = {
                VERSION: "2.6.4",
                atob,
                btoa,
                fromBase64: E,
                toBase64: m,
                utob,
                encode: m,
                encodeURI: function(e) {
                    return m(e, true);
                },
                btou,
                decode: E,
                noConflict: function() {
                    const n_Base64 = n.Base64;
                    n.Base64 = Base64_1;
                    return n_Base64;
                },
                fromUint8Array,
                toUint8Array
            };
            if (typeof Object.defineProperty === "function") {
                const k = (value)=>({
                        value,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    });
                n.Base64.extendString = function() {
                    Object.defineProperty(String.prototype, "fromBase64", k(function() {
                        return E(this);
                    }));
                    Object.defineProperty(String.prototype, "toBase64", k(function(e) {
                        return m(this, e);
                    }));
                    Object.defineProperty(String.prototype, "toBase64URI", k(function() {
                        return m(this, true);
                    }));
                };
            }
            if (n.Meteor) {
                Base64 = n.Base64;
            }
            if (module.exports) {
                module.exports.Base64 = n.Base64;
            } else if ((r = (()=>n.Base64).apply(exports, [])) !== undefined) {
                module.exports = r;
            }
            return {
                Base64: n.Base64
            };
        })(n);
    })(typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : n !== undefined ? n : this);
}).call(this, require("./module-69.js").default);
