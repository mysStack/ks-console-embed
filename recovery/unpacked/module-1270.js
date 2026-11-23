export default (function e(t, n, r) {
    function o(a, l) {
        if (!n[a]) {
            if (!t[a]) {
                if (i) {
                    return i(a, true);
                }
                const u = new Error(`Cannot find module '${a}'`);
                u.code = "MODULE_NOT_FOUND";
                throw u;
            }
            const s = n[a] = {
                exports: {}
            };
            t[a][0].call(s.exports, function(e) {
                return o(t[a][1][e] || e);
            }, s, s.exports, e, t, n, r);
        }
        return n[a].exports;
    }
    var i = false;
    for(let a = 0; a < r.length; a++){
        o(r[a]);
    }
    return o;
})({
    1: [
        function(e, t, n) {
            "use strict";
            const r = e("./js-yaml/loader");
            const o = e("./js-yaml/dumper");
            function i(e) {
                return function() {
                    throw new Error(`Function ${e} is deprecated and cannot be used.`);
                };
            }
            t.exports.Type = e("./js-yaml/type");
            t.exports.Schema = e("./js-yaml/schema");
            t.exports.FAILSAFE_SCHEMA = e("./js-yaml/schema/failsafe");
            t.exports.JSON_SCHEMA = e("./js-yaml/schema/json");
            t.exports.CORE_SCHEMA = e("./js-yaml/schema/core");
            t.exports.DEFAULT_SAFE_SCHEMA = e("./js-yaml/schema/default_safe");
            t.exports.DEFAULT_FULL_SCHEMA = e("./js-yaml/schema/default_full");
            t.exports.load = r.load;
            t.exports.loadAll = r.loadAll;
            t.exports.safeLoad = r.safeLoad;
            t.exports.safeLoadAll = r.safeLoadAll;
            t.exports.dump = o.dump;
            t.exports.safeDump = o.safeDump;
            t.exports.YAMLException = e("./js-yaml/exception");
            t.exports.MINIMAL_SCHEMA = e("./js-yaml/schema/failsafe");
            t.exports.SAFE_SCHEMA = e("./js-yaml/schema/default_safe");
            t.exports.DEFAULT_SCHEMA = e("./js-yaml/schema/default_full");
            t.exports.scan = i("scan");
            t.exports.parse = i("parse");
            t.exports.compose = i("compose");
            t.exports.addConstructor = i("addConstructor");
        },
        {
            "./js-yaml/dumper": 3,
            "./js-yaml/exception": 4,
            "./js-yaml/loader": 5,
            "./js-yaml/schema": 7,
            "./js-yaml/schema/core": 8,
            "./js-yaml/schema/default_full": 9,
            "./js-yaml/schema/default_safe": 10,
            "./js-yaml/schema/failsafe": 11,
            "./js-yaml/schema/json": 12,
            "./js-yaml/type": 13
        }
    ],
    2: [
        function(e, t, n) {
            "use strict";
            function r(e) {
                return e == null;
            }
            t.exports.isNothing = r;
            t.exports.isObject = function(e) {
                return typeof e === "object" && e !== null;
            };
            t.exports.toArray = function(e) {
                if (Array.isArray(e)) {
                    return e;
                }
                if (r(e)) {
                    return [];
                }
                return [
                    e
                ];
            };
            t.exports.repeat = function(e, t) {
                let n;
                let r = "";
                for(n = 0; n < t; n += 1){
                    r += e;
                }
                return r;
            };
            t.exports.isNegativeZero = function(e) {
                return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
            };
            t.exports.extend = function(e, t) {
                let n;
                let r;
                let o;
                let i;
                if (t) {
                    n = 0;
                    for(r = (i = Object.keys(t)).length; n < r; n += 1){
                        e[o = i[n]] = t[o];
                    }
                }
                return e;
            };
        },
        {}
    ],
    3: [
        function(e, t, n) {
            "use strict";
            const r = e("./common");
            const o = e("./exception");
            const i = e("./schema/default_full");
            const a = e("./schema/default_safe");
            const toString = Object.prototype.toString;
            const hasOwnProperty = Object.prototype.hasOwnProperty;
            const s = {
                0: "\\0",
                7: "\\a",
                8: "\\b",
                9: "\\t",
                10: "\\n",
                11: "\\v",
                12: "\\f",
                13: "\\r",
                27: "\\e",
                34: '\\"',
                92: "\\\\",
                133: "\\N",
                160: "\\_",
                8232: "\\L",
                8233: "\\P"
            };
            const c = [
                "y",
                "Y",
                "yes",
                "Yes",
                "YES",
                "on",
                "On",
                "ON",
                "n",
                "N",
                "no",
                "No",
                "NO",
                "off",
                "Off",
                "OFF"
            ];
            function f(e) {
                let t;
                let n;
                let i;
                t = e.toString(16).toUpperCase();
                if (e <= 255) {
                    n = "x";
                    i = 2;
                } else if (e <= 65535) {
                    n = "u";
                    i = 4;
                } else {
                    if (!(e <= 4294967295)) {
                        throw new o("code point within a string may not be greater than 0xFFFFFFFF");
                    }
                    n = "U";
                    i = 8;
                }
                return `\\${n}${r.repeat("0", i - t.length)}${t}`;
            }
            function d(e) {
                this.schema = e.schema || i;
                this.indent = Math.max(1, e.indent || 2);
                this.noArrayIndent = e.noArrayIndent || false;
                this.skipInvalid = e.skipInvalid || false;
                this.flowLevel = r.isNothing(e.flowLevel) ? -1 : e.flowLevel;
                this.styleMap = ((e, t)=>{
                    let n;
                    let r;
                    let o;
                    let i;
                    let a;
                    let l;
                    let s;
                    if (t === null) {
                        return {};
                    }
                    n = {};
                    o = 0;
                    for(i = (r = Object.keys(t)).length; o < i; o += 1){
                        a = r[o];
                        l = String(t[a]);
                        if (a.slice(0, 2) === "!!") {
                            a = `tag:yaml.org,2002:${a.slice(2)}`;
                        }
                        if ((s = e.compiledTypeMap.fallback[a]) && hasOwnProperty.call(s.styleAliases, l)) {
                            l = s.styleAliases[l];
                        }
                        n[a] = l;
                    }
                    return n;
                })(this.schema, e.styles || null);
                this.sortKeys = e.sortKeys || false;
                this.lineWidth = e.lineWidth || 80;
                this.noRefs = e.noRefs || false;
                this.noCompatMode = e.noCompatMode || false;
                this.condenseFlow = e.condenseFlow || false;
                this.implicitTypes = this.schema.compiledImplicit;
                this.explicitTypes = this.schema.compiledExplicit;
                this.tag = null;
                this.result = "";
                this.duplicates = [];
                this.usedDuplicates = null;
            }
            function p(e, t) {
                let n;
                const o = r.repeat(" ", t);
                for(var i = 0, a = -1, l = "", u = e.length; i < u;){
                    if ((a = e.indexOf("\n", i)) === -1) {
                        n = e.slice(i);
                        i = u;
                    } else {
                        n = e.slice(i, a + 1);
                        i = a + 1;
                    }
                    if (n.length && n !== "\n") {
                        l += o;
                    }
                    l += n;
                }
                return l;
            }
            function h(e, t) {
                return `
${r.repeat(" ", e.indent * t)}`;
            }
            function v(e) {
                return e === 32 || e === 9;
            }
            function g(e) {
                return e >= 32 && e <= 126 || e >= 161 && e <= 55295 && e !== 8232 && e !== 8233 || e >= 57344 && e <= 65533 && e !== 65279 || e >= 65536 && e <= 1114111;
            }
            function y(e, t) {
                return g(e) && e !== 65279 && e !== 44 && e !== 91 && e !== 93 && e !== 123 && e !== 125 && e !== 58 && (e !== 35 || t && ((e)=>g(e) && !v(e) && e !== 65279 && e !== 13 && e !== 10)(t));
            }
            function m(e) {
                return /^\n* /.test(e);
            }
            function b(e, dump, n, r) {
                e.dump = (()=>{
                    if (dump.length === 0) {
                        return "''";
                    }
                    if (!e.noCompatMode && c.indexOf(dump) !== -1) {
                        return `'${dump}'`;
                    }
                    const i = e.indent * Math.max(1, n);
                    const a = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - i);
                    const l = r || e.flowLevel > -1 && n >= e.flowLevel;
                    switch(((dump_1, t, n, r, o)=>{
                        let i;
                        let a;
                        let l;
                        let u;
                        let s = false;
                        let c = false;
                        const f = r !== -1;
                        let d = -1;
                        let p = g(u = dump_1.charCodeAt(0)) && u !== 65279 && !v(u) && u !== 45 && u !== 63 && u !== 58 && u !== 44 && u !== 91 && u !== 93 && u !== 123 && u !== 125 && u !== 35 && u !== 38 && u !== 42 && u !== 33 && u !== 124 && u !== 61 && u !== 62 && u !== 39 && u !== 34 && u !== 37 && u !== 64 && u !== 96 && !v(dump_1.charCodeAt(dump_1.length - 1));
                        if (t) {
                            for(i = 0; i < dump_1.length; i++){
                                if (!g(a = dump_1.charCodeAt(i))) {
                                    return 5;
                                }
                                l = i > 0 ? dump_1.charCodeAt(i - 1) : null;
                                p = p && y(a, l);
                            }
                        } else {
                            for(i = 0; i < dump_1.length; i++){
                                if ((a = dump_1.charCodeAt(i)) === 10) {
                                    s = true;
                                    if (f) {
                                        c = c || i - d - 1 > r && dump_1[d + 1] !== " ";
                                        d = i;
                                    }
                                } else if (!g(a)) {
                                    return 5;
                                }
                                l = i > 0 ? dump_1.charCodeAt(i - 1) : null;
                                p = p && y(a, l);
                            }
                            c = c || f && i - d - 1 > r && dump_1[d + 1] !== " ";
                        }
                        if (s || c) {
                            if (n > 9 && m(dump_1)) {
                                return 5;
                            }
                            if (c) {
                                return 4;
                            }
                            return 3;
                        }
                        if (p && !o(dump_1)) {
                            return 1;
                        }
                        return 2;
                    })(dump, l, e.indent, a, (t)=>((e, t)=>{
                            let r;
                            let n = 0;
                            for(r = e.implicitTypes.length; n < r; n += 1){
                                if (e.implicitTypes[n].resolve(t)) {
                                    return true;
                                }
                            }
                            return false;
                        })(e, t))){
                        case 1:
                            return dump;
                        case 2:
                            return `'${dump.replace(/'/g, "''")}'`;
                        case 3:
                            return `|${x(dump, e.indent)}${w(p(dump, i))}`;
                        case 4:
                            return `>${x(dump, e.indent)}${w(p(((dump_1, t)=>{
                                let n;
                                let r;
                                let o;
                                const i = /(\n+)([^\n]*)/g;
                                o = (o = dump_1.indexOf("\n")) !== -1 ? o : dump_1.length;
                                i.lastIndex = o;
                                let a = _(dump_1.slice(0, o), t);
                                let l = dump_1[0] === "\n" || dump_1[0] === " ";
                                while(r = i.exec(dump_1)){
                                    const u = r[1];
                                    const s = r[2];
                                    n = s[0] === " ";
                                    a += u + (l || n || s === "" ? "" : "\n") + _(s, t);
                                    l = n;
                                }
                                return a;
                            })(dump, a), i))}`;
                        case 5:
                            return `"${((dump_1)=>{
                                let t;
                                let n;
                                let r;
                                let o = "";
                                for(let i = 0; i < dump_1.length; i++){
                                    if ((t = dump_1.charCodeAt(i)) >= 55296 && t <= 56319 && (n = dump_1.charCodeAt(i + 1)) >= 56320 && n <= 57343) {
                                        o += f(1024 * (t - 55296) + n - 56320 + 65536);
                                        i++;
                                    } else {
                                        o += !(r = s[t]) && g(t) ? dump_1[i] : r || f(t);
                                    }
                                }
                                return o;
                            })(dump)}"`;
                        default:
                            throw new o("impossible error: invalid scalar style");
                    }
                })();
            }
            function x(dump, indent) {
                const n = m(dump) ? String(indent) : "";
                const r = dump[dump.length - 1] === "\n";
                return `${n + (!r || dump[dump.length - 2] !== "\n" && dump !== "\n" ? r ? "" : "-" : "+")}
`;
            }
            function w(e) {
                if (e[e.length - 1] === "\n") {
                    return e.slice(0, -1);
                }
                return e;
            }
            function _(e, t) {
                if (e === "" || e[0] === " ") {
                    return e;
                }
                let n;
                let r;
                for(var o = / [^ ]/g, i = 0, a = 0, l = 0, u = ""; n = o.exec(e);){
                    if ((l = n.index) - i > t) {
                        r = a > i ? a : l;
                        u += `
${e.slice(i, r)}`;
                        i = r + 1;
                    }
                    a = l;
                }
                u += "\n";
                if (e.length - i > t && a > i) {
                    u += `${e.slice(i, a)}
${e.slice(a + 1)}`;
                } else {
                    u += e.slice(i);
                }
                return u.slice(1);
            }
            function C(e, t, n) {
                let r;
                let i;
                let s;
                let c;
                let f;
                let a = 0;
                for(s = (i = n ? e.explicitTypes : e.implicitTypes).length; a < s; a += 1){
                    if (((c = i[a]).instanceOf || c.predicate) && (!c.instanceOf || typeof t === "object" && t instanceof c.instanceOf) && (!c.predicate || c.predicate(t))) {
                        e.tag = n ? c.tag : "?";
                        if (c.represent) {
                            f = e.styleMap[c.tag] || c.defaultStyle;
                            if (toString.call(c.represent) === "[object Function]") {
                                r = c.represent(t, f);
                            } else {
                                if (!hasOwnProperty.call(c.represent, f)) {
                                    throw new o(`!<${c.tag}> tag resolver accepts not "${f}" style`);
                                }
                                r = c.represent[f](t, f);
                            }
                            e.dump = r;
                        }
                        return true;
                    }
                }
                return false;
            }
            function O(e, t, n, r, i, a) {
                e.tag = null;
                e.dump = n;
                if (!C(e, n, false)) {
                    C(e, n, true);
                }
                const u = toString.call(e.dump);
                if (r) {
                    r = e.flowLevel < 0 || e.flowLevel > t;
                }
                let s;
                let c;
                const f = u === "[object Object]" || u === "[object Array]";
                if (f) {
                    c = (s = e.duplicates.indexOf(n)) !== -1;
                }
                if (e.tag !== null && e.tag !== "?" || c || e.indent !== 2 && t > 0) {
                    i = false;
                }
                if (c && e.usedDuplicates[s]) {
                    e.dump = `*ref_${s}`;
                } else {
                    if (f && c && !e.usedDuplicates[s]) {
                        e.usedDuplicates[s] = true;
                    }
                    if (u === "[object Object]") {
                        if (r && Object.keys(e.dump).length !== 0) {
                            ((e, t, n, r)=>{
                                let i;
                                let a;
                                let l;
                                let u;
                                let s;
                                let c;
                                let f = "";
                                const e_tag = e.tag;
                                const p = Object.keys(n);
                                if (e.sortKeys === true) {
                                    p.sort();
                                } else if (typeof e.sortKeys === "function") {
                                    p.sort(e.sortKeys);
                                } else if (e.sortKeys) {
                                    throw new o("sortKeys must be a boolean or a function");
                                }
                                i = 0;
                                for(a = p.length; i < a; i += 1){
                                    c = "";
                                    if (!(r && i === 0)) {
                                        c += h(e, t);
                                    }
                                    u = n[l = p[i]];
                                    if (O(e, t + 1, l, true, true, true)) {
                                        if (s = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024) {
                                            if (e.dump && e.dump.charCodeAt(0) === 10) {
                                                c += "?";
                                            } else {
                                                c += "? ";
                                            }
                                        }
                                        c += e.dump;
                                        if (s) {
                                            c += h(e, t);
                                        }
                                        if (O(e, t + 1, u, true, s)) {
                                            if (e.dump && e.dump.charCodeAt(0) === 10) {
                                                c += ":";
                                            } else {
                                                c += ": ";
                                            }
                                            f += c += e.dump;
                                        }
                                    }
                                }
                                e.tag = e_tag;
                                e.dump = f || "{}";
                            })(e, t, e.dump, i);
                            if (c) {
                                e.dump = `&ref_${s}${e.dump}`;
                            }
                        } else {
                            ((e, t, n)=>{
                                let r;
                                let o;
                                let i;
                                let a;
                                let l;
                                let u = "";
                                const e_tag = e.tag;
                                const c = Object.keys(n);
                                r = 0;
                                for(o = c.length; r < o; r += 1){
                                    l = "";
                                    if (r !== 0) {
                                        l += ", ";
                                    }
                                    if (e.condenseFlow) {
                                        l += '"';
                                    }
                                    a = n[i = c[r]];
                                    if (O(e, t, i, false, false)) {
                                        if (e.dump.length > 1024) {
                                            l += "? ";
                                        }
                                        l += `${e.dump + (e.condenseFlow ? '"' : "")}:${e.condenseFlow ? "" : " "}`;
                                        if (O(e, t, a, false, false)) {
                                            u += l += e.dump;
                                        }
                                    }
                                }
                                e.tag = e_tag;
                                e.dump = `{${u}}`;
                            })(e, t, e.dump);
                            if (c) {
                                e.dump = `&ref_${s} ${e.dump}`;
                            }
                        }
                    } else if (u === "[object Array]") {
                        const d = e.noArrayIndent && t > 0 ? t - 1 : t;
                        if (r && e.dump.length !== 0) {
                            ((e, t, n, r)=>{
                                let o;
                                let i;
                                let a = "";
                                const e_tag = e.tag;
                                o = 0;
                                for(i = n.length; o < i; o += 1){
                                    if (O(e, t + 1, n[o], true, true)) {
                                        if (!(r && o === 0)) {
                                            a += h(e, t);
                                        }
                                        if (e.dump && e.dump.charCodeAt(0) === 10) {
                                            a += "-";
                                        } else {
                                            a += "- ";
                                        }
                                        a += e.dump;
                                    }
                                }
                                e.tag = e_tag;
                                e.dump = a || "[]";
                            })(e, d, e.dump, i);
                            if (c) {
                                e.dump = `&ref_${s}${e.dump}`;
                            }
                        } else {
                            ((e, t, n)=>{
                                let r;
                                let o;
                                let i = "";
                                const e_tag = e.tag;
                                r = 0;
                                for(o = n.length; r < o; r += 1){
                                    if (O(e, t, n[r], false, false)) {
                                        if (r !== 0) {
                                            i += `,${e.condenseFlow ? "" : " "}`;
                                        }
                                        i += e.dump;
                                    }
                                }
                                e.tag = e_tag;
                                e.dump = `[${i}]`;
                            })(e, d, e.dump);
                            if (c) {
                                e.dump = `&ref_${s} ${e.dump}`;
                            }
                        }
                    } else {
                        if (u !== "[object String]") {
                            if (e.skipInvalid) {
                                return false;
                            }
                            throw new o(`unacceptable kind of an object to dump ${u}`);
                        }
                        if (e.tag !== "?") {
                            b(e, e.dump, t, a);
                        }
                    }
                    if (e.tag !== null && e.tag !== "?") {
                        e.dump = `!<${e.tag}> ${e.dump}`;
                    }
                }
                return true;
            }
            function E(e, t) {
                const n = new d(t = t || {});
                if (!n.noRefs) {
                    ((e, t)=>{
                        let n;
                        let r;
                        const o = [];
                        const i = [];
                        (function e(t, n, r) {
                            let o;
                            let i;
                            let a;
                            if (t !== null && typeof t === "object") {
                                if ((i = n.indexOf(t)) !== -1) {
                                    if (r.indexOf(i) === -1) {
                                        r.push(i);
                                    }
                                } else {
                                    n.push(t);
                                    if (Array.isArray(t)) {
                                        i = 0;
                                        for(a = t.length; i < a; i += 1){
                                            e(t[i], n, r);
                                        }
                                    } else {
                                        i = 0;
                                        for(a = (o = Object.keys(t)).length; i < a; i += 1){
                                            e(t[o[i]], n, r);
                                        }
                                    }
                                }
                            }
                        })(e, o, i);
                        n = 0;
                        for(r = i.length; n < r; n += 1){
                            t.duplicates.push(o[i[n]]);
                        }
                        t.usedDuplicates = new Array(r);
                    })(e, n);
                }
                if (O(n, 0, e, true, true)) {
                    return `${n.dump}
`;
                }
                return "";
            }
            t.exports.dump = E;
            t.exports.safeDump = function(e, t) {
                return E(e, r.extend({
                    schema: a
                }, t));
            };
        },
        {
            "./common": 2,
            "./exception": 4,
            "./schema/default_full": 9,
            "./schema/default_safe": 10
        }
    ],
    4: [
        function(e, t, n) {
            "use strict";
            class r extends Error {
                constructor(e, t){
                    super();
                    this.name = "YAMLException";
                    this.reason = e;
                    this.mark = t;
                    this.message = (this.reason || "(unknown reason)") + (this.mark ? ` ${this.mark.toString()}` : "");
                    if (Error.captureStackTrace) {
                        Error.captureStackTrace(this, this.constructor);
                    } else {
                        this.stack = (new Error).stack || "";
                    }
                }
                toString(e) {
                    let t = `${this.name}: `;
                    t += this.reason || "(unknown reason)";
                    if (!e && this.mark) {
                        t += ` ${this.mark.toString()}`;
                    }
                    return t;
                }
            }
            t.exports = r;
        },
        {}
    ],
    5: [
        function(e, t, n) {
            "use strict";
            const r = e("./common");
            const o = e("./exception");
            const i = e("./mark");
            const a = e("./schema/default_safe");
            const l = e("./schema/default_full");
            const hasOwnProperty = Object.prototype.hasOwnProperty;
            const s = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
            const c = /[\x85\u2028\u2029]/;
            const f = /[,\[\]\{\}]/;
            const d = /^(?:!|!!|![a-z\-]+!)$/i;
            const p = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
            function h(e) {
                return Object.prototype.toString.call(e);
            }
            function v(e) {
                return e === 10 || e === 13;
            }
            function g(e) {
                return e === 9 || e === 32;
            }
            function y(e) {
                return e === 9 || e === 32 || e === 10 || e === 13;
            }
            function m(e) {
                return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
            }
            function b(e) {
                let t;
                if (e >= 48 && e <= 57) {
                    return e - 48;
                }
                if ((t = 32 | e) >= 97 && t <= 102) {
                    return t - 97 + 10;
                }
                return -1;
            }
            function x(e) {
                if (e === 48) {
                    return "\0";
                }
                if (e === 97) {
                    return "";
                }
                if (e === 98) {
                    return "\b";
                }
                if (e === 116 || e === 9) {
                    return "\t";
                }
                if (e === 110) {
                    return "\n";
                }
                if (e === 118) {
                    return "\v";
                }
                if (e === 102) {
                    return "\f";
                }
                if (e === 114) {
                    return "\r";
                }
                if (e === 101) {
                    return "";
                }
                if (e === 32) {
                    return " ";
                }
                if (e === 34) {
                    return '"';
                }
                if (e === 47) {
                    return "/";
                }
                if (e === 92) {
                    return "\\";
                }
                if (e === 78) {
                    return "";
                }
                if (e === 95) {
                    return " ";
                }
                if (e === 76) {
                    return "\u2028";
                }
                if (e === 80) {
                    return "\u2029";
                }
                return "";
            }
            function w(e) {
                if (e <= 65535) {
                    return String.fromCharCode(e);
                }
                return String.fromCharCode(55296 + (e - 65536 >> 10), 56320 + (e - 65536 & 1023));
            }
            const _ = new Array(256);
            const C = new Array(256);
            for(let O = 0; O < 256; O++){
                _[O] = x(O) ? 1 : 0;
                C[O] = x(O);
            }
            function E(e, t) {
                this.input = e;
                this.filename = t.filename || null;
                this.schema = t.schema || l;
                this.onWarning = t.onWarning || null;
                this.legacy = t.legacy || false;
                this.json = t.json || false;
                this.listener = t.listener || null;
                this.implicitTypes = this.schema.compiledImplicit;
                this.typeMap = this.schema.compiledTypeMap;
                this.length = e.length;
                this.position = 0;
                this.line = 0;
                this.lineStart = 0;
                this.lineIndent = 0;
                this.documents = [];
            }
            function M(e, t) {
                return new o(t, new i(e.filename, e.input, e.position, e.line, e.position - e.lineStart));
            }
            function S(e, t) {
                throw M(e, t);
            }
            function A(e, t) {
                if (e.onWarning) {
                    e.onWarning.call(null, M(e, t));
                }
            }
            const k = {
                YAML: function(e, t, n) {
                    let r;
                    let o;
                    let i;
                    if (e.version !== null) {
                        S(e, "duplication of %YAML directive");
                    }
                    if (n.length !== 1) {
                        S(e, "YAML directive accepts exactly one argument");
                    }
                    if ((r = /^([0-9]+)\.([0-9]+)$/.exec(n[0])) === null) {
                        S(e, "ill-formed argument of the YAML directive");
                    }
                    o = parseInt(r[1], 10);
                    i = parseInt(r[2], 10);
                    if (o !== 1) {
                        S(e, "unacceptable YAML version of the document");
                    }
                    e.version = n[0];
                    e.checkLineBreaks = i < 2;
                    if (i !== 1 && i !== 2) {
                        A(e, "unsupported YAML version of the document");
                    }
                },
                TAG: function(e, t, n) {
                    let r;
                    let o;
                    if (n.length !== 2) {
                        S(e, "TAG directive accepts exactly two arguments");
                    }
                    r = n[0];
                    o = n[1];
                    if (!d.test(r)) {
                        S(e, "ill-formed tag handle (first argument) of the TAG directive");
                    }
                    if (hasOwnProperty.call(e.tagMap, r)) {
                        S(e, `there is a previously declared suffix for "${r}" tag handle`);
                    }
                    if (!p.test(o)) {
                        S(e, "ill-formed tag prefix (second argument) of the TAG directive");
                    }
                    e.tagMap[r] = o;
                }
            };
            function j(e, t, n, r) {
                let o;
                let i;
                let a;
                let l;
                if (t < n) {
                    l = e.input.slice(t, n);
                    if (r) {
                        o = 0;
                        for(i = l.length; o < i; o += 1){
                            if (!((a = l.charCodeAt(o)) === 9 || a >= 32 && a <= 1114111)) {
                                S(e, "expected valid JSON character");
                            }
                        }
                    } else {
                        if (s.test(l)) {
                            S(e, "the stream contains non-printable characters");
                        }
                    }
                    e.result += l;
                }
            }
            function T(e, t, n, o) {
                let i;
                let a;
                let l;
                let s;
                if (!r.isObject(n)) {
                    S(e, "cannot merge mappings; the provided source object is unacceptable");
                }
                l = 0;
                for(s = (i = Object.keys(n)).length; l < s; l += 1){
                    a = i[l];
                    if (!hasOwnProperty.call(t, a)) {
                        t[a] = n[a];
                        o[a] = true;
                    }
                }
            }
            function P(e, t, n, r, o, i, a, l) {
                let s;
                let c;
                if (Array.isArray(o)) {
                    s = 0;
                    for(c = (o = Array.prototype.slice.call(o)).length; s < c; s += 1){
                        if (Array.isArray(o[s])) {
                            S(e, "nested arrays are not supported inside keys");
                        }
                        if (typeof o === "object" && h(o[s]) === "[object Object]") {
                            o[s] = "[object Object]";
                        }
                    }
                }
                if (typeof o === "object" && h(o) === "[object Object]") {
                    o = "[object Object]";
                }
                o = String(o);
                if (t === null) {
                    t = {};
                }
                if (r === "tag:yaml.org,2002:merge") {
                    if (Array.isArray(i)) {
                        s = 0;
                        for(c = i.length; s < c; s += 1){
                            T(e, t, i[s], n);
                        }
                    } else {
                        T(e, t, i, n);
                    }
                } else {
                    if (!(e.json || hasOwnProperty.call(n, o) || !hasOwnProperty.call(t, o))) {
                        e.line = a || e.line;
                        e.position = l || e.position;
                        S(e, "duplicated mapping key");
                    }
                    t[o] = i;
                    delete n[o];
                }
                return t;
            }
            function L(e) {
                let t;
                if ((t = e.input.charCodeAt(e.position)) === 10) {
                    e.position++;
                } else if (t === 13) {
                    e.position++;
                    if (e.input.charCodeAt(e.position) === 10) {
                        e.position++;
                    }
                } else {
                    S(e, "a line break is expected");
                }
                e.line += 1;
                e.lineStart = e.position;
            }
            function z(e, t, n) {
                let r = 0;
                for(let o = e.input.charCodeAt(e.position); o !== 0;){
                    while(g(o)){
                        o = e.input.charCodeAt(++e.position);
                    }
                    if (t && o === 35) {
                        do {
                            o = e.input.charCodeAt(++e.position);
                        }while (o !== 10 && o !== 13 && o !== 0)
                    }
                    if (!v(o)) {
                        break;
                    }
                    L(e);
                    o = e.input.charCodeAt(e.position);
                    r++;
                    for(e.lineIndent = 0; o === 32;){
                        e.lineIndent++;
                        o = e.input.charCodeAt(++e.position);
                    }
                }
                if (n !== -1 && r !== 0 && e.lineIndent < n) {
                    A(e, "deficient indentation");
                }
                return r;
            }
            function N(e) {
                let t;
                let e_position = e.position;
                return !((t = e.input.charCodeAt(e_position)) !== 45 && t !== 46 || t !== e.input.charCodeAt(e_position + 1) || t !== e.input.charCodeAt(e_position + 2) || (e_position += 3, (t = e.input.charCodeAt(e_position)) !== 0 && !y(t)));
            }
            function D(e, t) {
                if (t === 1) {
                    e.result += " ";
                } else if (t > 1) {
                    e.result += r.repeat("\n", t - 1);
                }
            }
            function I(e, t) {
                let n;
                let r;
                const { tag, anchor } = e;
                const a = [];
                let l = false;
                if (e.anchor !== null) {
                    e.anchorMap[e.anchor] = a;
                }
                for(r = e.input.charCodeAt(e.position); r !== 0 && r === 45 && y(e.input.charCodeAt(e.position + 1));){
                    l = true;
                    e.position++;
                    if (z(e, true, -1) && e.lineIndent <= t) {
                        a.push(null);
                        r = e.input.charCodeAt(e.position);
                    } else {
                        n = e.line;
                        B(e, t, 3, false, true);
                        a.push(e.result);
                        z(e, true, -1);
                        r = e.input.charCodeAt(e.position);
                        if ((e.line === n || e.lineIndent > t) && r !== 0) {
                            S(e, "bad indentation of a sequence entry");
                        } else if (e.lineIndent < t) {
                            break;
                        }
                    }
                }
                return !!l && (e.tag = tag, e.anchor = anchor, e.kind = "sequence", e.result = a, true);
            }
            function R(e) {
                let t;
                let n;
                let r;
                let o;
                let i = false;
                let a = false;
                if ((o = e.input.charCodeAt(e.position)) !== 33) {
                    return false;
                }
                if (e.tag !== null) {
                    S(e, "duplication of a tag property");
                }
                if ((o = e.input.charCodeAt(++e.position)) === 60) {
                    i = true;
                    o = e.input.charCodeAt(++e.position);
                } else if (o === 33) {
                    a = true;
                    n = "!!";
                    o = e.input.charCodeAt(++e.position);
                } else {
                    n = "!";
                }
                t = e.position;
                if (i) {
                    do {
                        o = e.input.charCodeAt(++e.position);
                    }while (o !== 0 && o !== 62)
                    if (e.position < e.length) {
                        r = e.input.slice(t, e.position);
                        o = e.input.charCodeAt(++e.position);
                    } else {
                        S(e, "unexpected end of the stream within a verbatim tag");
                    }
                } else {
                    while(o !== 0 && !y(o)){
                        if (o === 33) {
                            if (a) {
                                S(e, "tag suffix cannot contain exclamation marks");
                            } else {
                                n = e.input.slice(t - 1, e.position + 1);
                                if (!d.test(n)) {
                                    S(e, "named tag handle cannot contain such characters");
                                }
                                a = true;
                                t = e.position + 1;
                            }
                        }
                        o = e.input.charCodeAt(++e.position);
                    }
                    r = e.input.slice(t, e.position);
                    if (f.test(r)) {
                        S(e, "tag suffix cannot contain flow indicator characters");
                    }
                }
                if (r && !p.test(r)) {
                    S(e, `tag name cannot contain such characters: ${r}`);
                }
                if (i) {
                    e.tag = r;
                } else if (hasOwnProperty.call(e.tagMap, n)) {
                    e.tag = e.tagMap[n] + r;
                } else if (n === "!") {
                    e.tag = `!${r}`;
                } else if (n === "!!") {
                    e.tag = `tag:yaml.org,2002:${r}`;
                } else {
                    S(e, `undeclared tag handle "${n}"`);
                }
                return true;
            }
            function H(e) {
                let t;
                let n;
                if ((n = e.input.charCodeAt(e.position)) !== 38) {
                    return false;
                }
                if (e.anchor !== null) {
                    S(e, "duplication of an anchor property");
                }
                n = e.input.charCodeAt(++e.position);
                for(t = e.position; n !== 0 && !y(n) && !m(n);){
                    n = e.input.charCodeAt(++e.position);
                }
                if (e.position === t) {
                    S(e, "name of an anchor node must contain at least one character");
                }
                e.anchor = e.input.slice(t, e.position);
                return true;
            }
            function B(e, t, n, o, i) {
                let a;
                let l;
                let s;
                let c;
                let f;
                let d;
                let p;
                let h;
                let x = 1;
                let O = false;
                let E = false;
                if (e.listener !== null) {
                    e.listener("open", e);
                }
                e.tag = null;
                e.anchor = null;
                e.kind = null;
                e.result = null;
                a = l = s = n === 4 || n === 3;
                if (o && z(e, true, -1)) {
                    O = true;
                    if (e.lineIndent > t) {
                        x = 1;
                    } else if (e.lineIndent === t) {
                        x = 0;
                    } else if (e.lineIndent < t) {
                        x = -1;
                    }
                }
                if (x === 1) {
                    while(R(e) || H(e)){
                        if (z(e, true, -1)) {
                            O = true;
                            s = a;
                            if (e.lineIndent > t) {
                                x = 1;
                            } else if (e.lineIndent === t) {
                                x = 0;
                            } else if (e.lineIndent < t) {
                                x = -1;
                            }
                        } else {
                            s = false;
                        }
                    }
                }
                if (s) {
                    s = O || i;
                }
                if (!(x !== 1 && n !== 4)) {
                    p = n === 1 || n === 2 ? t : t + 1;
                    h = e.position - e.lineStart;
                    if (x === 1) {
                        if (s && (I(e, h) || ((e, t, n)=>{
                            let r;
                            let o;
                            let i;
                            let a;
                            let l;
                            const { tag, anchor } = e;
                            const c = {};
                            const f = {};
                            let d = null;
                            let p = null;
                            let h = null;
                            let v = false;
                            let m = false;
                            if (e.anchor !== null) {
                                e.anchorMap[e.anchor] = c;
                            }
                            for(l = e.input.charCodeAt(e.position); l !== 0;){
                                r = e.input.charCodeAt(e.position + 1);
                                i = e.line;
                                a = e.position;
                                if (l !== 63 && l !== 58 || !y(r)) {
                                    if (!B(e, n, 2, false, true)) {
                                        break;
                                    }
                                    if (e.line === i) {
                                        for(l = e.input.charCodeAt(e.position); g(l);){
                                            l = e.input.charCodeAt(++e.position);
                                        }
                                        if (l === 58) {
                                            if (!y(l = e.input.charCodeAt(++e.position))) {
                                                S(e, "a whitespace character is expected after the key-value separator within a block mapping");
                                            }
                                            if (v) {
                                                P(e, c, f, d, p, null);
                                                h = null;
                                                p = null;
                                                d = null;
                                            }
                                            m = true;
                                            v = false;
                                            o = false;
                                            d = e.tag;
                                            p = e.result;
                                        } else {
                                            if (!m) {
                                                e.tag = tag;
                                                e.anchor = anchor;
                                                return true;
                                            }
                                            S(e, "can not read an implicit mapping pair; a colon is missed");
                                        }
                                    } else {
                                        if (!m) {
                                            e.tag = tag;
                                            e.anchor = anchor;
                                            return true;
                                        }
                                        S(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
                                    }
                                } else {
                                    if (l === 63) {
                                        if (v) {
                                            P(e, c, f, d, p, null);
                                            h = null;
                                            p = null;
                                            d = null;
                                        }
                                        m = true;
                                        v = true;
                                        o = true;
                                    } else if (v) {
                                        v = false;
                                        o = true;
                                    } else {
                                        S(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
                                    }
                                    e.position += 1;
                                    l = r;
                                }
                                if (e.line === i || e.lineIndent > t) {
                                    if (B(e, t, 4, true, o)) {
                                        if (v) {
                                            p = e.result;
                                        } else {
                                            h = e.result;
                                        }
                                    }
                                    if (!v) {
                                        P(e, c, f, d, p, h, i, a);
                                        h = null;
                                        p = null;
                                        d = null;
                                    }
                                    z(e, true, -1);
                                    l = e.input.charCodeAt(e.position);
                                }
                                if (e.lineIndent > t && l !== 0) {
                                    S(e, "bad indentation of a mapping entry");
                                } else if (e.lineIndent < t) {
                                    break;
                                }
                            }
                            if (v) {
                                P(e, c, f, d, p, null);
                            }
                            if (m) {
                                e.tag = tag;
                                e.anchor = anchor;
                                e.kind = "mapping";
                                e.result = c;
                            }
                            return m;
                        })(e, h, p)) || ((e, t)=>{
                            let n;
                            let r;
                            let o;
                            let i;
                            let a;
                            let l;
                            let u;
                            let s;
                            let c;
                            let f;
                            let d = true;
                            const { tag, anchor } = e;
                            const v = {};
                            if ((f = e.input.charCodeAt(e.position)) === 91) {
                                o = 93;
                                l = false;
                                r = [];
                            } else {
                                if (f !== 123) {
                                    return false;
                                }
                                o = 125;
                                l = true;
                                r = {};
                            }
                            if (e.anchor !== null) {
                                e.anchorMap[e.anchor] = r;
                            }
                            for(f = e.input.charCodeAt(++e.position); f !== 0;){
                                z(e, true, t);
                                if ((f = e.input.charCodeAt(e.position)) === o) {
                                    e.position++;
                                    e.tag = tag;
                                    e.anchor = anchor;
                                    e.kind = l ? "mapping" : "sequence";
                                    e.result = r;
                                    return true;
                                }
                                if (!d) {
                                    S(e, "missed comma between flow collection entries");
                                }
                                c = null;
                                a = false;
                                i = false;
                                if (f === 63 && y(e.input.charCodeAt(e.position + 1))) {
                                    a = true;
                                    i = true;
                                    e.position++;
                                    z(e, true, t);
                                }
                                n = e.line;
                                B(e, t, 1, false, true);
                                s = e.tag;
                                u = e.result;
                                z(e, true, t);
                                f = e.input.charCodeAt(e.position);
                                if (!(!a && e.line !== n || f !== 58)) {
                                    i = true;
                                    f = e.input.charCodeAt(++e.position);
                                    z(e, true, t);
                                    B(e, t, 1, false, true);
                                    c = e.result;
                                }
                                if (l) {
                                    P(e, r, v, s, u, c);
                                } else if (i) {
                                    r.push(P(e, null, v, s, u, c));
                                } else {
                                    r.push(u);
                                }
                                z(e, true, t);
                                if ((f = e.input.charCodeAt(e.position)) === 44) {
                                    d = true;
                                    f = e.input.charCodeAt(++e.position);
                                } else {
                                    d = false;
                                }
                            }
                            S(e, "unexpected end of the stream within a flow collection");
                        })(e, p)) {
                            E = true;
                        } else {
                            if (l && ((e, t)=>{
                                let n;
                                let o;
                                let i;
                                let a;
                                let l;
                                let u = 1;
                                let s = false;
                                let c = false;
                                let f = t;
                                let d = 0;
                                let p = false;
                                if ((a = e.input.charCodeAt(e.position)) === 124) {
                                    o = false;
                                } else {
                                    if (a !== 62) {
                                        return false;
                                    }
                                    o = true;
                                }
                                e.kind = "scalar";
                                for(e.result = ""; a !== 0;){
                                    if ((a = e.input.charCodeAt(++e.position)) === 43 || a === 45) {
                                        if (u === 1) {
                                            u = a === 43 ? 3 : 2;
                                        } else {
                                            S(e, "repeat of a chomping mode identifier");
                                        }
                                    } else {
                                        if (!((i = (l = a) >= 48 && l <= 57 ? l - 48 : -1) >= 0)) {
                                            break;
                                        }
                                        if (i === 0) {
                                            S(e, "bad explicit indentation width of a block scalar; it cannot be less than one");
                                        } else if (c) {
                                            S(e, "repeat of an indentation width identifier");
                                        } else {
                                            f = t + i - 1;
                                            c = true;
                                        }
                                    }
                                }
                                if (g(a)) {
                                    do {
                                        a = e.input.charCodeAt(++e.position);
                                    }while (g(a))
                                    if (a === 35) {
                                        do {
                                            a = e.input.charCodeAt(++e.position);
                                        }while (!v(a) && a !== 0)
                                    }
                                }
                                while(a !== 0){
                                    L(e);
                                    e.lineIndent = 0;
                                    for(a = e.input.charCodeAt(e.position); (!c || e.lineIndent < f) && a === 32;){
                                        e.lineIndent++;
                                        a = e.input.charCodeAt(++e.position);
                                    }
                                    if (!c && e.lineIndent > f) {
                                        f = e.lineIndent;
                                    }
                                    if (v(a)) {
                                        d++;
                                    } else {
                                        if (e.lineIndent < f) {
                                            if (u === 3) {
                                                e.result += r.repeat("\n", s ? 1 + d : d);
                                            } else if (u === 1 && s) {
                                                e.result += "\n";
                                            }
                                            break;
                                        }
                                        if (o) {
                                            if (g(a)) {
                                                p = true;
                                                e.result += r.repeat("\n", s ? 1 + d : d);
                                            } else if (p) {
                                                p = false;
                                                e.result += r.repeat("\n", d + 1);
                                            } else if (d === 0) {
                                                if (s) {
                                                    e.result += " ";
                                                }
                                            } else {
                                                e.result += r.repeat("\n", d);
                                            }
                                        } else {
                                            e.result += r.repeat("\n", s ? 1 + d : d);
                                        }
                                        s = true;
                                        c = true;
                                        d = 0;
                                        for(n = e.position; !v(a) && a !== 0;){
                                            a = e.input.charCodeAt(++e.position);
                                        }
                                        j(e, n, e.position, false);
                                    }
                                }
                                return true;
                            })(e, p) || ((e, t)=>{
                                let n;
                                let r;
                                let o;
                                if ((n = e.input.charCodeAt(e.position)) !== 39) {
                                    return false;
                                }
                                e.kind = "scalar";
                                e.result = "";
                                e.position++;
                                for(r = o = e.position; (n = e.input.charCodeAt(e.position)) !== 0;){
                                    if (n === 39) {
                                        j(e, r, e.position, true);
                                        if ((n = e.input.charCodeAt(++e.position)) !== 39) {
                                            return true;
                                        }
                                        r = e.position;
                                        e.position++;
                                        o = e.position;
                                    } else {
                                        if (v(n)) {
                                            j(e, r, o, true);
                                            D(e, z(e, false, t));
                                            r = o = e.position;
                                        } else if (e.position === e.lineStart && N(e)) {
                                            S(e, "unexpected end of the document within a single quoted scalar");
                                        } else {
                                            e.position++;
                                            o = e.position;
                                        }
                                    }
                                }
                                S(e, "unexpected end of the stream within a single quoted scalar");
                            })(e, p) || ((e, t)=>{
                                let n;
                                let r;
                                let o;
                                let i;
                                let a;
                                let l;
                                let u;
                                if ((l = e.input.charCodeAt(e.position)) !== 34) {
                                    return false;
                                }
                                e.kind = "scalar";
                                e.result = "";
                                e.position++;
                                for(n = r = e.position; (l = e.input.charCodeAt(e.position)) !== 0;){
                                    if (l === 34) {
                                        j(e, n, e.position, true);
                                        e.position++;
                                        return true;
                                    }
                                    if (l === 92) {
                                        j(e, n, e.position, true);
                                        if (v(l = e.input.charCodeAt(++e.position))) {
                                            z(e, false, t);
                                        } else if (l < 256 && _[l]) {
                                            e.result += C[l];
                                            e.position++;
                                        } else if ((a = (u = l) === 120 ? 2 : u === 117 ? 4 : u === 85 ? 8 : 0) > 0) {
                                            o = a;
                                            for(i = 0; o > 0; o--){
                                                if ((a = b(l = e.input.charCodeAt(++e.position))) >= 0) {
                                                    i = (i << 4) + a;
                                                } else {
                                                    S(e, "expected hexadecimal character");
                                                }
                                            }
                                            e.result += w(i);
                                            e.position++;
                                        } else {
                                            S(e, "unknown escape sequence");
                                        }
                                        n = r = e.position;
                                    } else {
                                        if (v(l)) {
                                            j(e, n, r, true);
                                            D(e, z(e, false, t));
                                            n = r = e.position;
                                        } else if (e.position === e.lineStart && N(e)) {
                                            S(e, "unexpected end of the document within a double quoted scalar");
                                        } else {
                                            e.position++;
                                            r = e.position;
                                        }
                                    }
                                }
                                S(e, "unexpected end of the stream within a double quoted scalar");
                            })(e, p)) {
                                E = true;
                            } else if (((e)=>{
                                let t;
                                let n;
                                let r;
                                if ((r = e.input.charCodeAt(e.position)) !== 42) {
                                    return false;
                                }
                                r = e.input.charCodeAt(++e.position);
                                for(t = e.position; r !== 0 && !y(r) && !m(r);){
                                    r = e.input.charCodeAt(++e.position);
                                }
                                if (e.position === t) {
                                    S(e, "name of an alias node must contain at least one character");
                                }
                                n = e.input.slice(t, e.position);
                                if (!e.anchorMap.hasOwnProperty(n)) {
                                    S(e, `unidentified alias "${n}"`);
                                }
                                e.result = e.anchorMap[n];
                                z(e, true, -1);
                                return true;
                            })(e)) {
                                E = true;
                                if (!(e.tag === null && e.anchor === null)) {
                                    S(e, "alias node should not have any properties");
                                }
                            } else if (((e, t, n)=>{
                                let r;
                                let o;
                                let i;
                                let a;
                                let l;
                                let u;
                                let s;
                                let c;
                                const { kind, result } = e;
                                if (y(c = e.input.charCodeAt(e.position)) || m(c) || c === 35 || c === 38 || c === 42 || c === 33 || c === 124 || c === 62 || c === 39 || c === 34 || c === 37 || c === 64 || c === 96) {
                                    return false;
                                }
                                if ((c === 63 || c === 45) && (y(r = e.input.charCodeAt(e.position + 1)) || n && m(r))) {
                                    return false;
                                }
                                e.kind = "scalar";
                                e.result = "";
                                o = i = e.position;
                                for(a = false; c !== 0;){
                                    if (c === 58) {
                                        if (y(r = e.input.charCodeAt(e.position + 1)) || n && m(r)) {
                                            break;
                                        }
                                    } else if (c === 35) {
                                        if (y(e.input.charCodeAt(e.position - 1))) {
                                            break;
                                        }
                                    } else {
                                        if (e.position === e.lineStart && N(e) || n && m(c)) {
                                            break;
                                        }
                                        if (v(c)) {
                                            l = e.line;
                                            u = e.lineStart;
                                            s = e.lineIndent;
                                            z(e, false, -1);
                                            if (e.lineIndent >= t) {
                                                a = true;
                                                c = e.input.charCodeAt(e.position);
                                                continue;
                                            }
                                            e.position = i;
                                            e.line = l;
                                            e.lineStart = u;
                                            e.lineIndent = s;
                                            break;
                                        }
                                    }
                                    if (a) {
                                        j(e, o, i, false);
                                        D(e, e.line - l);
                                        o = i = e.position;
                                        a = false;
                                    }
                                    if (!g(c)) {
                                        i = e.position + 1;
                                    }
                                    c = e.input.charCodeAt(++e.position);
                                }
                                j(e, o, i, false);
                                return !!e.result || (e.kind = kind, e.result = result, false);
                            })(e, p, n === 1)) {
                                E = true;
                                if (e.tag === null) {
                                    e.tag = "?";
                                }
                            }
                            if (e.anchor !== null) {
                                e.anchorMap[e.anchor] = e.result;
                            }
                        }
                    } else if (x === 0) {
                        E = s && I(e, h);
                    }
                }
                if (e.tag !== null && e.tag !== "!") {
                    if (e.tag === "?") {
                        if (e.result !== null && e.kind !== "scalar") {
                            S(e, `unacceptable node kind for !<?> tag; it should be "scalar", not "${e.kind}"`);
                        }
                        c = 0;
                        for(f = e.implicitTypes.length; c < f; c += 1){
                            if ((d = e.implicitTypes[c]).resolve(e.result)) {
                                e.result = d.construct(e.result);
                                e.tag = d.tag;
                                if (e.anchor !== null) {
                                    e.anchorMap[e.anchor] = e.result;
                                }
                                break;
                            }
                        }
                    } else {
                        if (hasOwnProperty.call(e.typeMap[e.kind || "fallback"], e.tag)) {
                            d = e.typeMap[e.kind || "fallback"][e.tag];
                            if (e.result !== null && d.kind !== e.kind) {
                                S(e, `unacceptable node kind for !<${e.tag}> tag; it should be "${d.kind}", not "${e.kind}"`);
                            }
                            if (d.resolve(e.result)) {
                                e.result = d.construct(e.result);
                                if (e.anchor !== null) {
                                    e.anchorMap[e.anchor] = e.result;
                                }
                            } else {
                                S(e, `cannot resolve a node with !<${e.tag}> explicit tag`);
                            }
                        } else {
                            S(e, `unknown tag !<${e.tag}>`);
                        }
                    }
                }
                if (e.listener !== null) {
                    e.listener("close", e);
                }
                return e.tag !== null || e.anchor !== null || E;
            }
            function F(e) {
                let t;
                let n;
                let r;
                let o;
                const e_position = e.position;
                let a = false;
                e.version = null;
                e.checkLineBreaks = e.legacy;
                e.tagMap = {};
                for(e.anchorMap = {}; (o = e.input.charCodeAt(e.position)) !== 0 && (z(e, true, -1), o = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || o !== 37));){
                    a = true;
                    o = e.input.charCodeAt(++e.position);
                    for(t = e.position; o !== 0 && !y(o);){
                        o = e.input.charCodeAt(++e.position);
                    }
                    r = [];
                    if ((n = e.input.slice(t, e.position)).length < 1) {
                        S(e, "directive name must not be less than one character in length");
                    }
                    while(o !== 0){
                        while(g(o)){
                            o = e.input.charCodeAt(++e.position);
                        }
                        if (o === 35) {
                            do {
                                o = e.input.charCodeAt(++e.position);
                            }while (o !== 0 && !v(o))
                            break;
                        }
                        if (v(o)) {
                            break;
                        }
                        for(t = e.position; o !== 0 && !y(o);){
                            o = e.input.charCodeAt(++e.position);
                        }
                        r.push(e.input.slice(t, e.position));
                    }
                    if (o !== 0) {
                        L(e);
                    }
                    if (hasOwnProperty.call(k, n)) {
                        k[n](e, n, r);
                    } else {
                        A(e, `unknown document directive "${n}"`);
                    }
                }
                z(e, true, -1);
                if (e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45) {
                    e.position += 3;
                    z(e, true, -1);
                } else if (a) {
                    S(e, "directives end mark is expected");
                }
                B(e, e.lineIndent - 1, 4, false, true);
                z(e, true, -1);
                if (e.checkLineBreaks && c.test(e.input.slice(e_position, e.position))) {
                    A(e, "non-ASCII line breaks are interpreted as content");
                }
                e.documents.push(e.result);
                if (e.position === e.lineStart && N(e)) {
                    if (e.input.charCodeAt(e.position) === 46) {
                        e.position += 3;
                        z(e, true, -1);
                    }
                } else if (e.position < e.length - 1) {
                    S(e, "end of the stream or a document separator is expected");
                }
            }
            function V(e, t) {
                t = t || {};
                if ((e = String(e)).length !== 0) {
                    if (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13) {
                        e += "\n";
                    }
                    if (e.charCodeAt(0) === 65279) {
                        e = e.slice(1);
                    }
                }
                const n = new E(e, t);
                const r = e.indexOf("\0");
                if (r !== -1) {
                    n.position = r;
                    S(n, "null byte is not allowed in input");
                }
                for(n.input += "\0"; n.input.charCodeAt(n.position) === 32;){
                    n.lineIndent += 1;
                    n.position += 1;
                }
                while(n.position < n.length - 1){
                    F(n);
                }
                return n.documents;
            }
            function $(e, t, n) {
                if (t !== null && typeof t === "object" && n === undefined) {
                    n = t;
                    t = null;
                }
                const r = V(e, n);
                if (typeof t !== "function") {
                    return r;
                }
                for(let o = 0, i = r.length; o < i; o += 1){
                    t(r[o]);
                }
            }
            function U(e, t) {
                const n = V(e, t);
                if (n.length !== 0) {
                    if (n.length === 1) {
                        return n[0];
                    }
                    throw new o("expected a single document in the stream, but found more");
                }
            }
            t.exports.loadAll = $;
            t.exports.load = U;
            t.exports.safeLoadAll = function(e, t, n) {
                if (typeof t === "object" && t !== null && n === undefined) {
                    n = t;
                    t = null;
                }
                return $(e, t, r.extend({
                    schema: a
                }, n));
            };
            t.exports.safeLoad = function(e, t) {
                return U(e, r.extend({
                    schema: a
                }, t));
            };
        },
        {
            "./common": 2,
            "./exception": 4,
            "./mark": 6,
            "./schema/default_full": 9,
            "./schema/default_safe": 10
        }
    ],
    6: [
        function(e, t, n) {
            "use strict";
            const r = e("./common");
            class o {
                constructor(e, t, n, r, o){
                    this.name = e;
                    this.buffer = t;
                    this.position = n;
                    this.line = r;
                    this.column = o;
                }
                getSnippet(e, t) {
                    let n;
                    let o;
                    let i;
                    let a;
                    let l;
                    if (!this.buffer) {
                        return null;
                    }
                    e = e || 4;
                    t = t || 75;
                    n = "";
                    for(o = this.position; o > 0 && "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(o - 1)) === -1;){
                        o -= 1;
                        if (this.position - o > t / 2 - 1) {
                            n = " ... ";
                            o += 5;
                            break;
                        }
                    }
                    i = "";
                    for(a = this.position; a < this.buffer.length && "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(a)) === -1;){
                        if ((a += 1) - this.position > t / 2 - 1) {
                            i = " ... ";
                            a -= 5;
                            break;
                        }
                    }
                    l = this.buffer.slice(o, a);
                    return `${r.repeat(" ", e) + n + l + i}
${r.repeat(" ", e + this.position - o + n.length)}^`;
                }
                toString(e) {
                    let t;
                    let n = "";
                    if (this.name) {
                        n += `in "${this.name}" `;
                    }
                    n += `at line ${this.line + 1}, column ${this.column + 1}`;
                    if (!e) {
                        if (t = this.getSnippet()) {
                            n += `:
${t}`;
                        }
                    }
                    return n;
                }
            }
            t.exports = o;
        },
        {
            "./common": 2
        }
    ],
    7: [
        function(e, t, n) {
            "use strict";
            const r = e("./common");
            const o = e("./exception");
            const i = e("./type");
            function a(e, t, n) {
                const r = [];
                e.include.forEach((e)=>{
                    n = a(e, t, n);
                });
                e[t].forEach((e)=>{
                    n.forEach((t, n)=>{
                        if (t.tag === e.tag && t.kind === e.kind) {
                            r.push(n);
                        }
                    });
                    n.push(e);
                });
                return n.filter((e, t)=>r.indexOf(t) === -1);
            }
            function l(e) {
                this.include = e.include || [];
                this.implicit = e.implicit || [];
                this.explicit = e.explicit || [];
                this.implicit.forEach((e)=>{
                    if (e.loadKind && e.loadKind !== "scalar") {
                        throw new o("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
                    }
                });
                this.compiledImplicit = a(this, "implicit", []);
                this.compiledExplicit = a(this, "explicit", []);
                this.compiledTypeMap = function() {
                    let e;
                    let t;
                    const n = {
                        scalar: {},
                        sequence: {},
                        mapping: {},
                        fallback: {}
                    };
                    function r(e) {
                        n[e.kind][e.tag] = n.fallback[e.tag] = e;
                    }
                    e = 0;
                    for(t = arguments.length; e < t; e += 1){
                        arguments[e].forEach(r);
                    }
                    return n;
                }(this.compiledImplicit, this.compiledExplicit);
            }
            l.DEFAULT = null;
            l.create = function(...args) {
                let include;
                let explicit;
                switch(args.length){
                    case 1:
                        include = l.DEFAULT;
                        explicit = args[0];
                        break;
                    case 2:
                        include = args[0];
                        explicit = args[1];
                        break;
                    default:
                        throw new o("Wrong number of arguments for Schema.create function");
                }
                include = r.toArray(include);
                explicit = r.toArray(explicit);
                if (!include.every((e)=>e instanceof l)) {
                    throw new o("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
                }
                if (!explicit.every((e)=>e instanceof i)) {
                    throw new o("Specified list of YAML types (or a single Type object) contains a non-Type object.");
                }
                return new l({
                    include,
                    explicit
                });
            };
            t.exports = l;
        },
        {
            "./common": 2,
            "./exception": 4,
            "./type": 13
        }
    ],
    8: [
        function(e, t, n) {
            "use strict";
            const r = e("../schema");
            t.exports = new r({
                include: [
                    e("./json")
                ]
            });
        },
        {
            "../schema": 7,
            "./json": 12
        }
    ],
    9: [
        function(e, t, n) {
            "use strict";
            const r = e("../schema");
            t.exports = r.DEFAULT = new r({
                include: [
                    e("./default_safe")
                ],
                explicit: [
                    e("../type/js/undefined"),
                    e("../type/js/regexp"),
                    e("../type/js/function")
                ]
            });
        },
        {
            "../schema": 7,
            "../type/js/function": 18,
            "../type/js/regexp": 19,
            "../type/js/undefined": 20,
            "./default_safe": 10
        }
    ],
    10: [
        function(e, t, n) {
            "use strict";
            const r = e("../schema");
            t.exports = new r({
                include: [
                    e("./core")
                ],
                implicit: [
                    e("../type/timestamp"),
                    e("../type/merge")
                ],
                explicit: [
                    e("../type/binary"),
                    e("../type/omap"),
                    e("../type/pairs"),
                    e("../type/set")
                ]
            });
        },
        {
            "../schema": 7,
            "../type/binary": 14,
            "../type/merge": 22,
            "../type/omap": 24,
            "../type/pairs": 25,
            "../type/set": 27,
            "../type/timestamp": 29,
            "./core": 8
        }
    ],
    11: [
        function(e, t, n) {
            "use strict";
            const r = e("../schema");
            t.exports = new r({
                explicit: [
                    e("../type/str"),
                    e("../type/seq"),
                    e("../type/map")
                ]
            });
        },
        {
            "../schema": 7,
            "../type/map": 21,
            "../type/seq": 26,
            "../type/str": 28
        }
    ],
    12: [
        function(e, t, n) {
            "use strict";
            const r = e("../schema");
            t.exports = new r({
                include: [
                    e("./failsafe")
                ],
                implicit: [
                    e("../type/null"),
                    e("../type/bool"),
                    e("../type/int"),
                    e("../type/float")
                ]
            });
        },
        {
            "../schema": 7,
            "../type/bool": 15,
            "../type/float": 16,
            "../type/int": 17,
            "../type/null": 23,
            "./failsafe": 11
        }
    ],
    13: [
        function(e, t, n) {
            "use strict";
            const r = e("./exception");
            const o = [
                "kind",
                "resolve",
                "construct",
                "instanceOf",
                "predicate",
                "represent",
                "defaultStyle",
                "styleAliases"
            ];
            const i = [
                "scalar",
                "sequence",
                "mapping"
            ];
            t.exports = function(e, t) {
                let n;
                let a;
                t = t || {};
                Object.keys(t).forEach((t)=>{
                    if (o.indexOf(t) === -1) {
                        throw new r(`Unknown option "${t}" is met in definition of "${e}" YAML type.`);
                    }
                });
                this.tag = e;
                this.kind = t.kind || null;
                this.resolve = t.resolve || function() {
                    return true;
                };
                this.construct = t.construct || function(e) {
                    return e;
                };
                this.instanceOf = t.instanceOf || null;
                this.predicate = t.predicate || null;
                this.represent = t.represent || null;
                this.defaultStyle = t.defaultStyle || null;
                this.styleAliases = (n = t.styleAliases || null, a = {}, n !== null && Object.keys(n).forEach((e)=>{
                    n[e].forEach((t)=>{
                        a[String(t)] = e;
                    });
                }), a);
                if (i.indexOf(this.kind) === -1) {
                    throw new r(`Unknown kind "${this.kind}" is specified for "${e}" YAML type.`);
                }
            };
        },
        {
            "./exception": 4
        }
    ],
    14: [
        function(e, t, n) {
            "use strict";
            let r;
            try {
                r = e("buffer").Buffer;
            } catch (e) {}
            const o = e("../type");
            const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
            t.exports = new o("tag:yaml.org,2002:binary", {
                kind: "scalar",
                resolve: function(e) {
                    if (e === null) {
                        return false;
                    }
                    let t;
                    let n;
                    let r = 0;
                    const e_length = e.length;
                    const a = i;
                    for(n = 0; n < e_length; n++){
                        if (!((t = a.indexOf(e.charAt(n))) > 64)) {
                            if (t < 0) {
                                return false;
                            }
                            r += 6;
                        }
                    }
                    return r % 8 == 0;
                },
                construct: function(e) {
                    let t;
                    let n;
                    const o = e.replace(/[\r\n=]/g, "");
                    const o_length = o.length;
                    const l = i;
                    let u = 0;
                    const s = [];
                    for(t = 0; t < o_length; t++){
                        if (t % 4 == 0 && t) {
                            s.push(u >> 16 & 255);
                            s.push(u >> 8 & 255);
                            s.push(255 & u);
                        }
                        u = u << 6 | l.indexOf(o.charAt(t));
                    }
                    if ((n = o_length % 4 * 6) == 0) {
                        s.push(u >> 16 & 255);
                        s.push(u >> 8 & 255);
                        s.push(255 & u);
                    } else if (n === 18) {
                        s.push(u >> 10 & 255);
                        s.push(u >> 2 & 255);
                    } else if (n === 12) {
                        s.push(u >> 4 & 255);
                    }
                    if (r) {
                        if (r.from) {
                            return r.from(s);
                        }
                        return new r(s);
                    }
                    return s;
                },
                predicate: function(e) {
                    return r && r.isBuffer(e);
                },
                represent: function(e) {
                    let t;
                    let n;
                    let r = "";
                    let o = 0;
                    const e_length = e.length;
                    const l = i;
                    for(t = 0; t < e_length; t++){
                        if (t % 3 == 0 && t) {
                            r += l[o >> 18 & 63];
                            r += l[o >> 12 & 63];
                            r += l[o >> 6 & 63];
                            r += l[63 & o];
                        }
                        o = (o << 8) + e[t];
                    }
                    if ((n = e_length % 3) == 0) {
                        r += l[o >> 18 & 63];
                        r += l[o >> 12 & 63];
                        r += l[o >> 6 & 63];
                        r += l[63 & o];
                    } else if (n === 2) {
                        r += l[o >> 10 & 63];
                        r += l[o >> 4 & 63];
                        r += l[o << 2 & 63];
                        r += l[64];
                    } else if (n === 1) {
                        r += l[o >> 2 & 63];
                        r += l[o << 4 & 63];
                        r += l[64];
                        r += l[64];
                    }
                    return r;
                }
            });
        },
        {
            "../type": 13
        }
    ],
    15: [
        function(e, t, n) {
            "use strict";
            const r = e("../type");
            t.exports = new r("tag:yaml.org,2002:bool", {
                kind: "scalar",
                resolve: function(e) {
                    if (e === null) {
                        return false;
                    }
                    const e_length = e.length;
                    return e_length === 4 && (e === "true" || e === "True" || e === "TRUE") || e_length === 5 && (e === "false" || e === "False" || e === "FALSE");
                },
                construct: function(e) {
                    return e === "true" || e === "True" || e === "TRUE";
                },
                predicate: function(e) {
                    return Object.prototype.toString.call(e) === "[object Boolean]";
                },
                represent: {
                    lowercase: function(e) {
                        if (e) {
                            return "true";
                        }
                        return "false";
                    },
                    uppercase: function(e) {
                        if (e) {
                            return "TRUE";
                        }
                        return "FALSE";
                    },
                    camelcase: function(e) {
                        if (e) {
                            return "True";
                        }
                        return "False";
                    }
                },
                defaultStyle: "lowercase"
            });
        },
        {
            "../type": 13
        }
    ],
    16: [
        function(e, t, n) {
            "use strict";
            const r = e("../common");
            const o = e("../type");
            const i = new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
            const a = /^[-+]?[0-9]+e/;
            t.exports = new o("tag:yaml.org,2002:float", {
                kind: "scalar",
                resolve: function(e) {
                    return e !== null && !(!i.test(e) || e[e.length - 1] === "_");
                },
                construct: function(e) {
                    let t;
                    let n;
                    let r;
                    let o;
                    n = (t = e.replace(/_/g, "").toLowerCase())[0] === "-" ? -1 : 1;
                    o = [];
                    if ("+-".indexOf(t[0]) >= 0) {
                        t = t.slice(1);
                    }
                    if (t === ".inf") {
                        if (n === 1) {
                            return Number.POSITIVE_INFINITY;
                        }
                        return Number.NEGATIVE_INFINITY;
                    }
                    if (t === ".nan") {
                        return NaN;
                    }
                    if (t.indexOf(":") >= 0) {
                        t.split(":").forEach((e)=>{
                            o.unshift(parseFloat(e, 10));
                        });
                        t = 0;
                        r = 1;
                        o.forEach((e)=>{
                            t += e * r;
                            r *= 60;
                        });
                        return n * t;
                    }
                    return n * parseFloat(t, 10);
                },
                predicate: function(e) {
                    return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 != 0 || r.isNegativeZero(e));
                },
                represent: function(e, t) {
                    let n;
                    if (isNaN(e)) {
                        switch(t){
                            case "lowercase":
                                return ".nan";
                            case "uppercase":
                                return ".NAN";
                            case "camelcase":
                                return ".NaN";
                        }
                    } else if (Number.POSITIVE_INFINITY === e) {
                        switch(t){
                            case "lowercase":
                                return ".inf";
                            case "uppercase":
                                return ".INF";
                            case "camelcase":
                                return ".Inf";
                        }
                    } else if (Number.NEGATIVE_INFINITY === e) {
                        switch(t){
                            case "lowercase":
                                return "-.inf";
                            case "uppercase":
                                return "-.INF";
                            case "camelcase":
                                return "-.Inf";
                        }
                    } else if (r.isNegativeZero(e)) {
                        return "-0.0";
                    }
                    n = e.toString(10);
                    if (a.test(n)) {
                        return n.replace("e", ".e");
                    }
                    return n;
                },
                defaultStyle: "lowercase"
            });
        },
        {
            "../common": 2,
            "../type": 13
        }
    ],
    17: [
        function(e, t, n) {
            "use strict";
            const r = e("../common");
            const o = e("../type");
            function i(e) {
                return e >= 48 && e <= 55;
            }
            function a(e) {
                return e >= 48 && e <= 57;
            }
            t.exports = new o("tag:yaml.org,2002:int", {
                kind: "scalar",
                resolve: function(e) {
                    if (e === null) {
                        return false;
                    }
                    let t;
                    let n;
                    const e_length = e.length;
                    let o = 0;
                    let l = false;
                    if (!e_length) {
                        return false;
                    }
                    if (!((t = e[o]) !== "-" && t !== "+")) {
                        t = e[++o];
                    }
                    if (t === "0") {
                        if (o + 1 === e_length) {
                            return true;
                        }
                        if ((t = e[++o]) === "b") {
                            for(o++; o < e_length; o++){
                                if ((t = e[o]) !== "_") {
                                    if (t !== "0" && t !== "1") {
                                        return false;
                                    }
                                    l = true;
                                }
                            }
                            return l && t !== "_";
                        }
                        if (t === "x") {
                            for(o++; o < e_length; o++){
                                if ((t = e[o]) !== "_") {
                                    if (!((n = e.charCodeAt(o)) >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102)) {
                                        return false;
                                    }
                                    l = true;
                                }
                            }
                            return l && t !== "_";
                        }
                        for(; o < e_length; o++){
                            if ((t = e[o]) !== "_") {
                                if (!i(e.charCodeAt(o))) {
                                    return false;
                                }
                                l = true;
                            }
                        }
                        return l && t !== "_";
                    }
                    if (t === "_") {
                        return false;
                    }
                    for(; o < e_length; o++){
                        if ((t = e[o]) !== "_") {
                            if (t === ":") {
                                break;
                            }
                            if (!a(e.charCodeAt(o))) {
                                return false;
                            }
                            l = true;
                        }
                    }
                    return !(!l || t === "_") && (t !== ":" || /^(:[0-5]?[0-9])+$/.test(e.slice(o)));
                },
                construct: function(e) {
                    let t;
                    let n;
                    let r = e;
                    let o = 1;
                    const i = [];
                    if (r.indexOf("_") !== -1) {
                        r = r.replace(/_/g, "");
                    }
                    if (!((t = r[0]) !== "-" && t !== "+")) {
                        if (t === "-") {
                            o = -1;
                        }
                        t = (r = r.slice(1))[0];
                    }
                    if (r === "0") {
                        return 0;
                    }
                    if (t === "0") {
                        if (r[1] === "b") {
                            return o * parseInt(r.slice(2), 2);
                        }
                        if (r[1] === "x") {
                            return o * parseInt(r, 16);
                        }
                        return o * parseInt(r, 8);
                    }
                    if (r.indexOf(":") !== -1) {
                        r.split(":").forEach((e)=>{
                            i.unshift(parseInt(e, 10));
                        });
                        r = 0;
                        n = 1;
                        i.forEach((e)=>{
                            r += e * n;
                            n *= 60;
                        });
                        return o * r;
                    }
                    return o * parseInt(r, 10);
                },
                predicate: function(e) {
                    return Object.prototype.toString.call(e) === "[object Number]" && e % 1 == 0 && !r.isNegativeZero(e);
                },
                represent: {
                    binary: function(e) {
                        if (e >= 0) {
                            return `0b${e.toString(2)}`;
                        }
                        return `-0b${e.toString(2).slice(1)}`;
                    },
                    octal: function(e) {
                        if (e >= 0) {
                            return `0${e.toString(8)}`;
                        }
                        return `-0${e.toString(8).slice(1)}`;
                    },
                    decimal: function(e) {
                        return e.toString(10);
                    },
                    hexadecimal: function(e) {
                        if (e >= 0) {
                            return `0x${e.toString(16).toUpperCase()}`;
                        }
                        return `-0x${e.toString(16).toUpperCase().slice(1)}`;
                    }
                },
                defaultStyle: "decimal",
                styleAliases: {
                    binary: [
                        2,
                        "bin"
                    ],
                    octal: [
                        8,
                        "oct"
                    ],
                    decimal: [
                        10,
                        "dec"
                    ],
                    hexadecimal: [
                        16,
                        "hex"
                    ]
                }
            });
        },
        {
            "../common": 2,
            "../type": 13
        }
    ],
    18: [
        function(e, t, n) {
            "use strict";
            let r;
            try {
                r = e("esprima");
            } catch (e) {
                if (typeof window !== "undefined") {
                    r = window.esprima;
                }
            }
            const o = e("../../type");
            t.exports = new o("tag:yaml.org,2002:js/function", {
                kind: "scalar",
                resolve: function(e) {
                    if (e === null) {
                        return false;
                    }
                    try {
                        const t = `(${e})`;
                        const n = r.parse(t, {
                            range: true
                        });
                        return n.type === "Program" && n.body.length === 1 && n.body[0].type === "ExpressionStatement" && (n.body[0].expression.type === "ArrowFunctionExpression" || n.body[0].expression.type === "FunctionExpression");
                    } catch (e) {
                        return false;
                    }
                },
                construct: function(e) {
                    let t;
                    const n = `(${e})`;
                    const o = r.parse(n, {
                        range: true
                    });
                    const i = [];
                    if (o.type !== "Program" || o.body.length !== 1 || o.body[0].type !== "ExpressionStatement" || o.body[0].expression.type !== "ArrowFunctionExpression" && o.body[0].expression.type !== "FunctionExpression") {
                        throw new Error("Failed to resolve function");
                    }
                    o.body[0].expression.params.forEach((e)=>{
                        i.push(e.name);
                    });
                    t = o.body[0].expression.body.range;
                    if (o.body[0].expression.body.type === "BlockStatement") {
                        return new Function(i, n.slice(t[0] + 1, t[1] - 1));
                    }
                    return new Function(i, `return ${n.slice(t[0], t[1])}`);
                },
                predicate: function(e) {
                    return Object.prototype.toString.call(e) === "[object Function]";
                },
                represent: function(e) {
                    return e.toString();
                }
            });
        },
        {
            "../../type": 13
        }
    ],
    19: [
        function(e, t, n) {
            "use strict";
            const r = e("../../type");
            t.exports = new r("tag:yaml.org,2002:js/regexp", {
                kind: "scalar",
                resolve: function(e) {
                    if (e === null) {
                        return false;
                    }
                    if (e.length === 0) {
                        return false;
                    }
                    const t = e;
                    const n = /\/([gim]*)$/.exec(e);
                    let r = "";
                    if (t[0] === "/") {
                        if (n) {
                            r = n[1];
                        }
                        if (r.length > 3) {
                            return false;
                        }
                        if (t[t.length - r.length - 1] !== "/") {
                            return false;
                        }
                    }
                    return true;
                },
                construct: function(e) {
                    let t = e;
                    const n = /\/([gim]*)$/.exec(e);
                    let r = "";
                    if (t[0] === "/") {
                        if (n) {
                            r = n[1];
                        }
                        t = t.slice(1, t.length - r.length - 1);
                    }
                    return new RegExp(t, r);
                },
                predicate: function(e) {
                    return Object.prototype.toString.call(e) === "[object RegExp]";
                },
                represent: function(e) {
                    let t = `/${e.source}/`;
                    if (e.global) {
                        t += "g";
                    }
                    if (e.multiline) {
                        t += "m";
                    }
                    if (e.ignoreCase) {
                        t += "i";
                    }
                    return t;
                }
            });
        },
        {
            "../../type": 13
        }
    ],
    20: [
        function(e, t, n) {
            "use strict";
            const r = e("../../type");
            t.exports = new r("tag:yaml.org,2002:js/undefined", {
                kind: "scalar",
                resolve: function() {
                    return true;
                },
                construct: function() {},
                predicate: function(e) {
                    return e === undefined;
                },
                represent: function() {
                    return "";
                }
            });
        },
        {
            "../../type": 13
        }
    ],
    21: [
        function(e, t, n) {
            "use strict";
            const r = e("../type");
            t.exports = new r("tag:yaml.org,2002:map", {
                kind: "mapping",
                construct: function(e) {
                    if (e !== null) {
                        return e;
                    }
                    return {};
                }
            });
        },
        {
            "../type": 13
        }
    ],
    22: [
        function(e, t, n) {
            "use strict";
            const r = e("../type");
            t.exports = new r("tag:yaml.org,2002:merge", {
                kind: "scalar",
                resolve: function(e) {
                    return e === "<<" || e === null;
                }
            });
        },
        {
            "../type": 13
        }
    ],
    23: [
        function(e, t, n) {
            "use strict";
            const r = e("../type");
            t.exports = new r("tag:yaml.org,2002:null", {
                kind: "scalar",
                resolve: function(e) {
                    if (e === null) {
                        return true;
                    }
                    const e_length = e.length;
                    return e_length === 1 && e === "~" || e_length === 4 && (e === "null" || e === "Null" || e === "NULL");
                },
                construct: function() {
                    return null;
                },
                predicate: function(e) {
                    return e === null;
                },
                represent: {
                    canonical: function() {
                        return "~";
                    },
                    lowercase: function() {
                        return "null";
                    },
                    uppercase: function() {
                        return "NULL";
                    },
                    camelcase: function() {
                        return "Null";
                    }
                },
                defaultStyle: "lowercase"
            });
        },
        {
            "../type": 13
        }
    ],
    24: [
        function(e, t, n) {
            "use strict";
            const r = e("../type");
            const hasOwnProperty = Object.prototype.hasOwnProperty;
            const toString = Object.prototype.toString;
            t.exports = new r("tag:yaml.org,2002:omap", {
                kind: "sequence",
                resolve: function(e) {
                    if (e === null) {
                        return true;
                    }
                    let t;
                    let n;
                    let r;
                    let a;
                    let l;
                    const u = [];
                    const s = e;
                    t = 0;
                    for(n = s.length; t < n; t += 1){
                        r = s[t];
                        l = false;
                        if (toString.call(r) !== "[object Object]") {
                            return false;
                        }
                        for(a in r){
                            if (hasOwnProperty.call(r, a)) {
                                if (l) {
                                    return false;
                                }
                                l = true;
                            }
                        }
                        if (!l) {
                            return false;
                        }
                        if (u.indexOf(a) !== -1) {
                            return false;
                        }
                        u.push(a);
                    }
                    return true;
                },
                construct: function(e) {
                    if (e !== null) {
                        return e;
                    }
                    return [];
                }
            });
        },
        {
            "../type": 13
        }
    ],
    25: [
        function(e, t, n) {
            "use strict";
            const r = e("../type");
            const toString = Object.prototype.toString;
            t.exports = new r("tag:yaml.org,2002:pairs", {
                kind: "sequence",
                resolve: function(e) {
                    if (e === null) {
                        return true;
                    }
                    let t;
                    let n;
                    let r;
                    let i;
                    let a;
                    const l = e;
                    a = new Array(l.length);
                    t = 0;
                    for(n = l.length; t < n; t += 1){
                        r = l[t];
                        if (toString.call(r) !== "[object Object]") {
                            return false;
                        }
                        if ((i = Object.keys(r)).length !== 1) {
                            return false;
                        }
                        a[t] = [
                            i[0],
                            r[i[0]]
                        ];
                    }
                    return true;
                },
                construct: function(e) {
                    if (e === null) {
                        return [];
                    }
                    let t;
                    let n;
                    let r;
                    let o;
                    let i;
                    const a = e;
                    i = new Array(a.length);
                    t = 0;
                    for(n = a.length; t < n; t += 1){
                        r = a[t];
                        o = Object.keys(r);
                        i[t] = [
                            o[0],
                            r[o[0]]
                        ];
                    }
                    return i;
                }
            });
        },
        {
            "../type": 13
        }
    ],
    26: [
        function(e, t, n) {
            "use strict";
            const r = e("../type");
            t.exports = new r("tag:yaml.org,2002:seq", {
                kind: "sequence",
                construct: function(e) {
                    if (e !== null) {
                        return e;
                    }
                    return [];
                }
            });
        },
        {
            "../type": 13
        }
    ],
    27: [
        function(e, t, n) {
            "use strict";
            const r = e("../type");
            const hasOwnProperty = Object.prototype.hasOwnProperty;
            t.exports = new r("tag:yaml.org,2002:set", {
                kind: "mapping",
                resolve: function(e) {
                    if (e === null) {
                        return true;
                    }
                    let t;
                    const n = e;
                    for(t in n){
                        if (hasOwnProperty.call(n, t) && n[t] !== null) {
                            return false;
                        }
                    }
                    return true;
                },
                construct: function(e) {
                    if (e !== null) {
                        return e;
                    }
                    return {};
                }
            });
        },
        {
            "../type": 13
        }
    ],
    28: [
        function(e, t, n) {
            "use strict";
            const r = e("../type");
            t.exports = new r("tag:yaml.org,2002:str", {
                kind: "scalar",
                construct: function(e) {
                    if (e !== null) {
                        return e;
                    }
                    return "";
                }
            });
        },
        {
            "../type": 13
        }
    ],
    29: [
        function(e, t, n) {
            "use strict";
            const r = e("../type");
            const o = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$");
            const i = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
            t.exports = new r("tag:yaml.org,2002:timestamp", {
                kind: "scalar",
                resolve: function(e) {
                    return e !== null && (o.exec(e) !== null || i.exec(e) !== null);
                },
                construct: function(e) {
                    let t;
                    let n;
                    let r;
                    let a;
                    let l;
                    let u;
                    let s;
                    let c;
                    let f = 0;
                    let d = null;
                    if ((t = o.exec(e)) === null) {
                        t = i.exec(e);
                    }
                    if (t === null) {
                        throw new Error("Date resolve error");
                    }
                    n = +t[1];
                    r = +t[2] - 1;
                    a = +t[3];
                    if (!t[4]) {
                        return new Date(Date.UTC(n, r, a));
                    }
                    l = +t[4];
                    u = +t[5];
                    s = +t[6];
                    if (t[7]) {
                        for(f = t[7].slice(0, 3); f.length < 3;){
                            f += "0";
                        }
                        f = +f;
                    }
                    if (t[9]) {
                        d = 60000 * (60 * +t[10] + +(t[11] || 0));
                        if (t[9] === "-") {
                            d = -d;
                        }
                    }
                    c = new Date(Date.UTC(n, r, a, l, u, s, f));
                    if (d) {
                        c.setTime(c.getTime() - d);
                    }
                    return c;
                },
                instanceOf: Date,
                represent: function(e) {
                    return e.toISOString();
                }
            });
        },
        {
            "../type": 13
        }
    ],
    "/": [
        function(e, t, n) {
            "use strict";
            const r = e("./lib/js-yaml.js");
            t.exports = r;
        },
        {
            "./lib/js-yaml.js": 1
        }
    ]
}, {}, [])("/");
