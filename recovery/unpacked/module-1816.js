const _webpackExports = {};
((_webpackExports_1)=>{
    "use strict";
    function t() {}
    function n(_this, components, n, r, useLongestToken) {
        for(var i = 0, a = components.length, l = 0, u = 0; i < a; i++){
            const component = components[i];
            if (component.removed) {
                component.value = _this.join(r.slice(u, u + component.count));
                u += component.count;
                if (i && components[i - 1].added) {
                    const c = components[i - 1];
                    components[i - 1] = components[i];
                    components[i] = c;
                }
            } else {
                if (!component.added && useLongestToken) {
                    let f = n.slice(l, l + component.count);
                    f = f.map((e, t)=>{
                        const n = r[u + t];
                        if (n.length > e.length) {
                            return n;
                        }
                        return e;
                    });
                    component.value = _this.join(f);
                } else {
                    component.value = _this.join(n.slice(l, l + component.count));
                }
                l += component.count;
                if (!component.added) {
                    u += component.count;
                }
            }
        }
        const d = components[a - 1];
        if (a > 1 && typeof d.value === "string" && (d.added || d.removed) && _this.equals("", d.value)) {
            components[a - 2].value += d.value;
            components.pop();
        }
        return components;
    }
    function r(e) {
        return {
            newPos: e.newPos,
            components: e.components.slice(0)
        };
    }
    t.prototype = {
        diff: function(e, t, o = {}) {
            let o_callback = o.callback;
            if (typeof o === "function") {
                o_callback = o;
                o = {};
            }
            this.options = o;
            const _this = this;
            function l(e) {
                if (o_callback) {
                    setTimeout(()=>{
                        o_callback(undefined, e);
                    }, 0);
                    return true;
                }
                return e;
            }
            e = this.castInput(e);
            t = this.castInput(t);
            e = this.removeEmpty(this.tokenize(e));
            const length = (t = this.removeEmpty(this.tokenize(t))).length;
            const e_length = e.length;
            let c = 1;
            const f = length + e_length;
            const d = [
                {
                    newPos: -1,
                    components: []
                }
            ];
            const p = this.extractCommon(d[0], t, e, 0);
            if (d[0].newPos + 1 >= length && p + 1 >= e_length) {
                return l([
                    {
                        value: this.join(t),
                        count: t.length
                    }
                ]);
            }
            function h() {
                for(let o = -1 * c; o <= c; o += 2){
                    let i;
                    const f = d[o - 1];
                    const p = d[o + 1];
                    let h = (p ? p.newPos : 0) - o;
                    if (f) {
                        d[o - 1] = undefined;
                    }
                    const v = f && f.newPos + 1 < length;
                    const g = p && h >= 0 && h < e_length;
                    if (v || g) {
                        if (!v || g && f.newPos < p.newPos) {
                            i = r(p);
                            _this.pushComponent(i.components, undefined, true);
                        } else {
                            (i = f).newPos++;
                            _this.pushComponent(i.components, true, undefined);
                        }
                        h = _this.extractCommon(i, t, e, o);
                        if (i.newPos + 1 >= length && h + 1 >= e_length) {
                            return l(n(_this, i.components, t, e, _this.useLongestToken));
                        }
                        d[o] = i;
                    } else {
                        d[o] = undefined;
                    }
                }
                c++;
            }
            if (o_callback) {
                (function e() {
                    setTimeout(()=>{
                        if (c > f) {
                            return o_callback();
                        }
                        if (!h()) {
                            e();
                        }
                    }, 0);
                })();
            } else {
                while(c <= f){
                    const v = h();
                    if (v) {
                        return v;
                    }
                }
            }
        },
        pushComponent: function(e, added, removed) {
            const r = e[e.length - 1];
            if (r && r.added === added && r.removed === removed) {
                e[e.length - 1] = {
                    count: r.count + 1,
                    added,
                    removed
                };
            } else {
                e.push({
                    count: 1,
                    added,
                    removed
                });
            }
        },
        extractCommon: function(e, t, n, r) {
            for(var o = t.length, i = n.length, a = e.newPos, l = a - r, count = 0; a + 1 < o && l + 1 < i && this.equals(t[a + 1], n[l + 1]);){
                a++;
                l++;
                count++;
            }
            if (count) {
                e.components.push({
                    count
                });
            }
            e.newPos = a;
            return l;
        },
        equals: function(e, t) {
            if (this.options.comparator) {
                return this.options.comparator(e, t);
            }
            return e === t || this.options.ignoreCase && e.toLowerCase() === t.toLowerCase();
        },
        removeEmpty: function(e) {
            const t = [];
            for(let n = 0; n < e.length; n++){
                if (e[n]) {
                    t.push(e[n]);
                }
            }
            return t;
        },
        castInput: function(e) {
            return e;
        },
        tokenize: function(e) {
            return e.split("");
        },
        join: function(e) {
            return e.join("");
        }
    };
    const o = new t;
    function i(e, t) {
        if (typeof e === "function") {
            t.callback = e;
        } else if (e) {
            for(const n in e){
                if (e.hasOwnProperty(n)) {
                    t[n] = e[n];
                }
            }
        }
        return t;
    }
    const a = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
    const l = /\S/;
    const u = new t;
    u.equals = function(e, t) {
        if (this.options.ignoreCase) {
            e = e.toLowerCase();
            t = t.toLowerCase();
        }
        return e === t || this.options.ignoreWhitespace && !l.test(e) && !l.test(t);
    };
    u.tokenize = function(e) {
        for(var t = e.split(/(\s+|[()[\]{}'"]|\b)/), n = 0; n < t.length - 1; n++){
            if (!t[n + 1] && t[n + 2] && a.test(t[n]) && a.test(t[n + 2])) {
                t[n] += t[n + 2];
                t.splice(n + 1, 2);
                n--;
            }
        }
        return t;
    };
    const s = new t;
    function c(e, t, n) {
        return s.diff(e, t, n);
    }
    s.tokenize = function(e) {
        const t = [];
        const n = e.split(/(\n|\r\n)/);
        if (!n[n.length - 1]) {
            n.pop();
        }
        for(let r = 0; r < n.length; r++){
            let o = n[r];
            if (r % 2 && !this.options.newlineIsToken) {
                t[t.length - 1] += o;
            } else {
                if (this.options.ignoreWhitespace) {
                    o = o.trim();
                }
                t.push(o);
            }
        }
        return t;
    };
    const f = new t;
    f.tokenize = function(e) {
        return e.split(/(\S.+?[.!?])(?=\s+|$)/);
    };
    const d = new t;
    function p(e) {
        return (p = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e;
        } : function(e) {
            if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
                return "symbol";
            }
            return typeof e;
        })(e);
    }
    function h(e) {
        return ((e)=>{
            if (Array.isArray(e)) {
                for(var t = 0, n = new Array(e.length); t < e.length; t++){
                    n[t] = e[t];
                }
                return n;
            }
        })(e) || ((e)=>{
            if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") {
                return Array.from(e);
            }
        })(e) || (()=>{
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        })();
    }
    d.tokenize = function(e) {
        return e.split(/([{}:;,]|\s+)/);
    };
    const toString = Object.prototype.toString;
    const g = new t;
    function y(e, t, n, r, o) {
        let i;
        let a;
        t = t || [];
        n = n || [];
        if (r) {
            e = r(o, e);
        }
        for(i = 0; i < t.length; i += 1){
            if (t[i] === e) {
                return n[i];
            }
        }
        if (toString.call(e) === "[object Array]") {
            t.push(e);
            a = new Array(e.length);
            n.push(a);
            for(i = 0; i < e.length; i += 1){
                a[i] = y(e[i], t, n, r, o);
            }
            t.pop();
            n.pop();
            return a;
        }
        if (e && e.toJSON) {
            e = e.toJSON();
        }
        if (p(e) === "object" && e !== null) {
            t.push(e);
            a = {};
            n.push(a);
            let l;
            const u = [];
            for(l in e){
                if (e.hasOwnProperty(l)) {
                    u.push(l);
                }
            }
            u.sort();
            for(i = 0; i < u.length; i += 1){
                a[l = u[i]] = y(e[l], t, n, r, l);
            }
            t.pop();
            n.pop();
        } else {
            a = e;
        }
        return a;
    }
    g.useLongestToken = true;
    g.tokenize = s.tokenize;
    g.castInput = function(e) {
        const { undefinedReplacement, stringifyReplacer = function(e, t) {
            if (t === undefined) {
                return undefinedReplacement;
            }
            return t;
        } } = this.options;
        if (typeof e === "string") {
            return e;
        }
        return JSON.stringify(y(e, null, null, stringifyReplacer), stringifyReplacer, "  ");
    };
    g.equals = function(e, n) {
        return t.prototype.equals.call(g, e.replace(/,([\r\n])/g, "$1"), n.replace(/,([\r\n])/g, "$1"));
    };
    const m = new t;
    function b(e, t = {}) {
        const n = e.split(/\r\n|[\n\v\f\r\x85]/);
        const r = e.match(/\r\n|[\n\v\f\r\x85]/g) || [];
        const o = [];
        let i = 0;
        function a() {
            const e = {};
            for(o.push(e); i < n.length;){
                const r = n[i];
                if (/^(\-\-\-|\+\+\+|@@)\s/.test(r)) {
                    break;
                }
                const a = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(r);
                if (a) {
                    e.index = a[1];
                }
                i++;
            }
            l(e);
            l(e);
            for(e.hunks = []; i < n.length;){
                const s = n[i];
                if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(s)) {
                    break;
                }
                if (/^@@/.test(s)) {
                    e.hunks.push(u());
                } else {
                    if (s && t.strict) {
                        throw new Error(`Unknown line ${i + 1} ${JSON.stringify(s)}`);
                    }
                    i++;
                }
            }
        }
        function l(e) {
            const t = /^(---|\+\+\+)\s+(.*)$/.exec(n[i]);
            if (t) {
                const r = t[1] === "---" ? "old" : "new";
                const o = t[2].split("\t", 2);
                let a = o[0].replace(/\\\\/g, "\\");
                if (/^".*"$/.test(a)) {
                    a = a.substr(1, a.length - 2);
                }
                e[`${r}FileName`] = a;
                e[`${r}Header`] = (o[1] || "").trim();
                i++;
            }
        }
        function u() {
            const e = i;
            const o = n[i++].split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
            const a = {
                oldStart: +o[1],
                oldLines: +o[2] || 1,
                newStart: +o[3],
                newLines: +o[4] || 1,
                lines: [],
                linedelimiters: []
            };
            let l = 0;
            let u = 0;
            for(; i < n.length && !(n[i].indexOf("--- ") === 0 && i + 2 < n.length && n[i + 1].indexOf("+++ ") === 0 && n[i + 2].indexOf("@@") === 0); i++){
                const s = n[i].length == 0 && i != n.length - 1 ? " " : n[i][0];
                if (s !== "+" && s !== "-" && s !== " " && s !== "\\") {
                    break;
                }
                a.lines.push(n[i]);
                a.linedelimiters.push(r[i] || "\n");
                switch(s){
                    case "+":
                        l++;
                        break;
                    case "-":
                        u++;
                        break;
                    default:
                        if (s === " ") {
                            l++;
                            u++;
                        }
                }
            }
            if (!(l || a.newLines !== 1)) {
                a.newLines = 0;
            }
            if (!(u || a.oldLines !== 1)) {
                a.oldLines = 0;
            }
            if (t.strict) {
                if (l !== a.newLines) {
                    throw new Error(`Added line count did not match for hunk at line ${e + 1}`);
                }
                if (u !== a.oldLines) {
                    throw new Error(`Removed line count did not match for hunk at line ${e + 1}`);
                }
            }
            return a;
        }
        while(i < n.length){
            a();
        }
        return o;
    }
    function x(e, t, n) {
        let r = true;
        let o = false;
        let i = false;
        let a = 1;
        return function l() {
            if (r && !i) {
                if (o) {
                    a++;
                } else {
                    r = false;
                }
                if (e + a <= n) {
                    return a;
                }
                i = true;
            }
            if (!o) {
                if (!i) {
                    r = true;
                }
                if (t <= e - a) {
                    return -a++;
                }
                o = true;
                return l();
            }
        };
    }
    function w(e, t, n = {}) {
        if (typeof t === "string") {
            t = b(t);
        }
        if (Array.isArray(t)) {
            if (t.length > 1) {
                throw new Error("applyPatch only works with a single input.");
            }
            t = t[0];
        }
        let r;
        let o;
        const i = e.split(/\r\n|[\n\v\f\r\x85]/);
        const a = e.match(/\r\n|[\n\v\f\r\x85]/g) || [];
        const t_hunks = t.hunks;
        const u = n.compareLine || ((e, t, n, r)=>t === r);
        let s = 0;
        const c = n.fuzzFactor || 0;
        let f = 0;
        let d = 0;
        function p(e, t) {
            for(let n = 0; n < e.lines.length; n++){
                const line = e.lines[n];
                const o = line.length > 0 ? line[0] : " ";
                const a = line.length > 0 ? line.substr(1) : line;
                if (o === " " || o === "-") {
                    if (!u(t + 1, i[t], o, a) && ++s > c) {
                        return false;
                    }
                    t++;
                }
            }
            return true;
        }
        for (const v of t_hunks){
            const g = i.length - v.oldLines;
            for(var y = 0, m = d + v.oldStart - 1, w = x(m, f, g); y !== undefined; y = w()){
                if (p(v, m + y)) {
                    v.offset = d += y;
                    break;
                }
            }
            if (y === undefined) {
                return false;
            }
            f = v.offset + v.oldStart + v.oldLines;
        }
        let _ = 0;
        for (const O of t_hunks){
            let E = O.oldStart + O.offset + _ - 1;
            _ += O.newLines - O.oldLines;
            if (E < 0) {
                E = 0;
            }
            for(let M = 0; M < O.lines.length; M++){
                const line = O.lines[M];
                const A = line.length > 0 ? line[0] : " ";
                const k = line.length > 0 ? line.substr(1) : line;
                const j = O.linedelimiters[M];
                if (A === " ") {
                    E++;
                } else if (A === "-") {
                    i.splice(E, 1);
                    a.splice(E, 1);
                } else if (A === "+") {
                    i.splice(E, 0, k);
                    a.splice(E, 0, j);
                    E++;
                } else if (A === "\\") {
                    const T = O.lines[M - 1] ? O.lines[M - 1][0] : null;
                    if (T === "+") {
                        r = true;
                    } else if (T === "-") {
                        o = true;
                    }
                }
            }
        }
        if (r) {
            while(!i[i.length - 1]){
                i.pop();
                a.pop();
            }
        } else {
            if (o) {
                i.push("");
                a.push("\n");
            }
        }
        for(let P = 0; P < i.length - 1; P++){
            i[P] = i[P] + a[P];
        }
        return i.join("");
    }
    function _(oldFileName, newFileName, n, r, oldHeader, newHeader, a) {
        if (!a) {
            a = {};
        }
        if (a.context === undefined) {
            a.context = 4;
        }
        const l = c(n, r, a);
        function u(e) {
            return e.map((e)=>` ${e}`);
        }
        l.push({
            value: "",
            lines: []
        });
        const hunks = [];
        let oldStart = 0;
        let newStart = 0;
        let lines = [];
        let v = 1;
        let g = 1;
        const y = (e)=>{
            const t = l[e];
            const o = t.lines || t.value.replace(/\n$/, "").split("\n");
            t.lines = o;
            if (t.added || t.removed) {
                let i;
                if (!oldStart) {
                    const c = l[e - 1];
                    oldStart = v;
                    newStart = g;
                    if (c) {
                        lines = a.context > 0 ? u(c.lines.slice(-a.context)) : [];
                        oldStart -= lines.length;
                        newStart -= lines.length;
                    }
                }
                (i = lines).push.apply(i, h(o.map((e)=>(t.added ? "+" : "-") + e)));
                if (t.added) {
                    g += o.length;
                } else {
                    v += o.length;
                }
            } else {
                if (oldStart) {
                    if (o.length <= 2 * a.context && e < l.length - 2) {
                        let y;
                        (y = lines).push.apply(y, h(u(o)));
                    } else {
                        let m;
                        const b = Math.min(o.length, a.context);
                        (m = lines).push.apply(m, h(u(o.slice(0, b))));
                        const x = {
                            oldStart,
                            oldLines: v - oldStart + b,
                            newStart,
                            newLines: g - newStart + b,
                            lines
                        };
                        if (e >= l.length - 2 && o.length <= a.context) {
                            const w = /\n$/.test(n);
                            const _ = /\n$/.test(r);
                            const C = o.length == 0 && lines.length > x.oldLines;
                            if (!w && C) {
                                lines.splice(x.oldLines, 0, "\\ No newline at end of file");
                            }
                            if (!((w || C) && _)) {
                                lines.push("\\ No newline at end of file");
                            }
                        }
                        hunks.push(x);
                        oldStart = 0;
                        newStart = 0;
                        lines = [];
                    }
                }
                v += o.length;
                g += o.length;
            }
        };
        for(let m = 0; m < l.length; m++){
            y(m);
        }
        return {
            oldFileName,
            newFileName,
            oldHeader,
            newHeader,
            hunks
        };
    }
    function C(e, t, n, r, o, i, a) {
        const l = _(e, t, n, r, o, i, a);
        const u = [];
        if (e == t) {
            u.push(`Index: ${e}`);
        }
        u.push("===================================================================");
        u.push(`--- ${l.oldFileName}${l.oldHeader === undefined ? "" : `\t${l.oldHeader}`}`);
        u.push(`+++ ${l.newFileName}${l.newHeader === undefined ? "" : `\t${l.newHeader}`}`);
        for(let s = 0; s < l.hunks.length; s++){
            const hunk = l.hunks[s];
            u.push(`@@ -${hunk.oldStart},${hunk.oldLines} +${hunk.newStart},${hunk.newLines} @@`);
            u.push.apply(u, hunk.lines);
        }
        return `${u.join("\n")}
`;
    }
    function O(e, t) {
        if (t.length > e.length) {
            return false;
        }
        for(let n = 0; n < t.length; n++){
            if (t[n] !== e[n]) {
                return false;
            }
        }
        return true;
    }
    function E(e, t) {
        if (typeof e === "string") {
            if (/^@@/m.test(e) || /^Index:/m.test(e)) {
                return b(e)[0];
            }
            if (!t) {
                throw new Error("Must provide a base reference or pass in a patch");
            }
            return _(undefined, undefined, t, e);
        }
        return e;
    }
    function M(e) {
        return e.newFileName && e.newFileName !== e.oldFileName;
    }
    function S(e, mine, theirs) {
        if (mine === theirs) {
            return mine;
        }
        e.conflict = true;
        return {
            mine,
            theirs
        };
    }
    function A(e, t) {
        return e.oldStart < t.oldStart && e.oldStart + e.oldLines < t.oldStart;
    }
    function k(e, t) {
        return {
            oldStart: e.oldStart,
            oldLines: e.oldLines,
            newStart: e.newStart + t,
            newLines: e.newLines,
            lines: e.lines
        };
    }
    function j(e, oldStart, lines, offset, lines_1) {
        const i = {
            offset: oldStart,
            lines,
            index: 0
        };
        const a = {
            offset,
            lines: lines_1,
            index: 0
        };
        z(e, i, a);
        z(e, a, i);
        while(i.index < i.lines.length && a.index < a.lines.length){
            const l = i.lines[i.index];
            const u = a.lines[a.index];
            if (l[0] !== "-" && l[0] !== "+" || u[0] !== "-" && u[0] !== "+") {
                if (l[0] === "+" && u[0] === " ") {
                    let s;
                    (s = e.lines).push.apply(s, h(D(i)));
                } else if (u[0] === "+" && l[0] === " ") {
                    let c;
                    (c = e.lines).push.apply(c, h(D(a)));
                } else {
                    if (l[0] === "-" && u[0] === " ") {
                        P(e, i, a);
                    } else if (u[0] === "-" && l[0] === " ") {
                        P(e, a, i, true);
                    } else if (l === u) {
                        e.lines.push(l);
                        i.index++;
                        a.index++;
                    } else {
                        L(e, D(i), D(a));
                    }
                }
            } else {
                T(e, i, a);
            }
        }
        N(e, i);
        N(e, a);
        ((e)=>{
            const t = function e(t) {
                let oldLines_1 = 0;
                let newLines_1 = 0;
                t.forEach((t)=>{
                    if (typeof t !== "string") {
                        const o = e(t.mine);
                        const i = e(t.theirs);
                        if (oldLines_1 !== undefined) {
                            if (o.oldLines === i.oldLines) {
                                oldLines_1 += o.oldLines;
                            } else {
                                oldLines_1 = undefined;
                            }
                        }
                        if (newLines_1 !== undefined) {
                            if (o.newLines === i.newLines) {
                                newLines_1 += o.newLines;
                            } else {
                                newLines_1 = undefined;
                            }
                        }
                    } else {
                        if (!(newLines_1 === undefined || t[0] !== "+" && t[0] !== " ")) {
                            newLines_1++;
                        }
                        if (!(oldLines_1 === undefined || t[0] !== "-" && t[0] !== " ")) {
                            oldLines_1++;
                        }
                    }
                });
                return {
                    oldLines: oldLines_1,
                    newLines: newLines_1
                };
            }(e.lines);
            const { oldLines, newLines } = t;
            if (oldLines !== undefined) {
                e.oldLines = oldLines;
            } else {
                delete e.oldLines;
            }
            if (newLines !== undefined) {
                e.newLines = newLines;
            } else {
                delete e.newLines;
            }
        })(e);
    }
    function T(e, t, n) {
        let r;
        let o;
        const i = D(t);
        const a = D(n);
        if (I(i) && I(a)) {
            let l;
            let u;
            if (O(i, a) && R(n, i, i.length - a.length)) {
                return void (l = e.lines).push.apply(l, h(i));
            }
            if (O(a, i) && R(t, a, a.length - i.length)) {
                return void (u = e.lines).push.apply(u, h(a));
            }
        } else {
            o = a;
            if ((r = i).length === o.length && O(r, o)) {
                let s;
                return void (s = e.lines).push.apply(s, h(i));
            }
        }
        L(e, i, a);
    }
    function P(e, t, n, r) {
        let o;
        const i = D(t);
        const a = ((e, t)=>{
            const changes = [];
            const merged = [];
            for(var o = 0, i = false, a = false; o < t.length && e.index < e.lines.length;){
                let l = e.lines[e.index];
                const u = t[o];
                if (u[0] === "+") {
                    break;
                }
                i = i || l[0] !== " ";
                merged.push(u);
                o++;
                if (l[0] === "+") {
                    for(a = true; l[0] === "+";){
                        changes.push(l);
                        l = e.lines[++e.index];
                    }
                }
                if (u.substr(1) === l.substr(1)) {
                    changes.push(l);
                    e.index++;
                } else {
                    a = true;
                }
            }
            if ((t[o] || "")[0] === "+" && i) {
                a = true;
            }
            if (a) {
                return changes;
            }
            while(o < t.length){
                merged.push(t[o++]);
            }
            return {
                merged,
                changes
            };
        })(n, i);
        if (a.merged) {
            (o = e.lines).push.apply(o, h(a.merged));
        } else {
            L(e, r ? a : i, r ? i : a);
        }
    }
    function L(e, mine, theirs) {
        e.conflict = true;
        e.lines.push({
            conflict: true,
            mine,
            theirs
        });
    }
    function z(e, t, n) {
        while(t.offset < n.offset && t.index < t.lines.length){
            const r = t.lines[t.index++];
            e.lines.push(r);
            t.offset++;
        }
    }
    function N(e, t) {
        while(t.index < t.lines.length){
            const n = t.lines[t.index++];
            e.lines.push(n);
        }
    }
    function D(e) {
        const t = [];
        let n = e.lines[e.index][0];
        while(e.index < e.lines.length){
            const r = e.lines[e.index];
            if (n === "-" && r[0] === "+") {
                n = "+";
            }
            if (n !== r[0]) {
                break;
            }
            t.push(r);
            e.index++;
        }
        return t;
    }
    function I(e) {
        return e.reduce((acc, item)=>acc && item[0] === "-", true);
    }
    function R(e, t, n) {
        for(let r = 0; r < n; r++){
            const o = t[t.length - n + r].substr(1);
            if (e.lines[e.index + r] !== ` ${o}`) {
                return false;
            }
        }
        e.index += n;
        return true;
    }
    m.tokenize = function(e) {
        return e.slice();
    };
    m.join = m.removeEmpty = function(e) {
        return e;
    };
    _webpackExports_1.Diff = t;
    _webpackExports_1.diffChars = function(e, t, n) {
        return o.diff(e, t, n);
    };
    _webpackExports_1.diffWords = function(e, t, n) {
        n = i(n, {
            ignoreWhitespace: true
        });
        return u.diff(e, t, n);
    };
    _webpackExports_1.diffWordsWithSpace = function(e, t, n) {
        return u.diff(e, t, n);
    };
    _webpackExports_1.diffLines = c;
    _webpackExports_1.diffTrimmedLines = function(e, t, n) {
        const r = i(n, {
            ignoreWhitespace: true
        });
        return s.diff(e, t, r);
    };
    _webpackExports_1.diffSentences = function(e, t, n) {
        return f.diff(e, t, n);
    };
    _webpackExports_1.diffCss = function(e, t, n) {
        return d.diff(e, t, n);
    };
    _webpackExports_1.diffJson = function(e, t, n) {
        return g.diff(e, t, n);
    };
    _webpackExports_1.diffArrays = function(e, t, n) {
        return m.diff(e, t, n);
    };
    _webpackExports_1.structuredPatch = _;
    _webpackExports_1.createTwoFilesPatch = C;
    _webpackExports_1.createPatch = function(e, t, n, r, o, i) {
        return C(e, e, t, n, r, o, i);
    };
    _webpackExports_1.applyPatch = w;
    _webpackExports_1.applyPatches = function(e, t) {
        if (typeof e === "string") {
            e = b(e);
        }
        let n = 0;
        (function r() {
            const o = e[n++];
            if (!o) {
                return t.complete();
            }
            t.loadFile(o, function(e, n) {
                if (e) {
                    return t.complete(e);
                }
                const i = w(n, o, t);
                t.patched(o, i, function(e) {
                    if (e) {
                        return t.complete(e);
                    }
                    r();
                });
            });
        })();
    };
    _webpackExports_1.parsePatch = b;
    _webpackExports_1.merge = function(e, t, n) {
        e = E(e, n);
        t = E(t, n);
        const r = {};
        if (e.index || t.index) {
            r.index = e.index || t.index;
        }
        if (e.newFileName || t.newFileName) {
            if (M(e)) {
                if (M(t)) {
                    r.oldFileName = S(r, e.oldFileName, t.oldFileName);
                    r.newFileName = S(r, e.newFileName, t.newFileName);
                    r.oldHeader = S(r, e.oldHeader, t.oldHeader);
                    r.newHeader = S(r, e.newHeader, t.newHeader);
                } else {
                    r.oldFileName = e.oldFileName;
                    r.newFileName = e.newFileName;
                    r.oldHeader = e.oldHeader;
                    r.newHeader = e.newHeader;
                }
            } else {
                r.oldFileName = t.oldFileName || e.oldFileName;
                r.newFileName = t.newFileName || e.newFileName;
                r.oldHeader = t.oldHeader || e.oldHeader;
                r.newHeader = t.newHeader || e.newHeader;
            }
        }
        r.hunks = [];
        for(let o = 0, i = 0, a = 0, l = 0; o < e.hunks.length || i < t.hunks.length;){
            const u = e.hunks[o] || {
                oldStart: Infinity
            };
            const s = t.hunks[i] || {
                oldStart: Infinity
            };
            if (A(u, s)) {
                r.hunks.push(k(u, a));
                o++;
                l += u.newLines - u.oldLines;
            } else if (A(s, u)) {
                r.hunks.push(k(s, l));
                i++;
                a += s.newLines - s.oldLines;
            } else {
                const c = {
                    oldStart: Math.min(u.oldStart, s.oldStart),
                    oldLines: 0,
                    newStart: Math.min(u.newStart + a, s.oldStart + l),
                    newLines: 0,
                    lines: []
                };
                j(c, u.oldStart, u.lines, s.oldStart, s.lines);
                i++;
                o++;
                r.hunks.push(c);
            }
        }
        return r;
    };
    _webpackExports_1.convertChangesToDMP = function(e) {
        let t;
        let n;
        const r = [];
        for(let o = 0; o < e.length; o++){
            n = (t = e[o]).added ? 1 : t.removed ? -1 : 0;
            r.push([
                n,
                t.value
            ]);
        }
        return r;
    };
    _webpackExports_1.convertChangesToXML = function(e) {
        const t = [];
        for (const r of e){
            if (r.added) {
                t.push("<ins>");
            } else if (r.removed) {
                t.push("<del>");
            }
            t.push(r.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"));
            if (r.added) {
                t.push("</ins>");
            } else if (r.removed) {
                t.push("</del>");
            }
        }
        return t.join("");
    };
    _webpackExports_1.canonicalize = y;
    Object.defineProperty(_webpackExports_1, "__esModule", {
        value: true
    });
})(_webpackExports);
export default _webpackExports;
