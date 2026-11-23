export default (function e(t, n, o) {
    if (t instanceof RegExp) {
        return ((e, t)=>{
            if (!t) {
                return e;
            }
            const n = e.source.match(/\((?!\?)/g);
            if (n) {
                for(let r = 0; r < n.length; r++){
                    t.push({
                        name: r,
                        prefix: null,
                        delimiter: null,
                        optional: false,
                        repeat: false,
                        partial: false,
                        pattern: null
                    });
                }
            }
            return e;
        })(t, n);
    }
    if (Array.isArray(t)) {
        return ((t, n, r)=>{
            const o = [];
            for(let i = 0; i < t.length; i++){
                o.push(e(t[i], n, r).source);
            }
            return new RegExp(`(?:${o.join("|")})`, l(r));
        })(t, n, o);
    }
    return ((e, t, n)=>tokensToRegExp(parse(e, n), t, n))(t, n, o);
});
export const compile = function(e, t) {
    return tokensToFunction(parse(e, t));
};
var n = new RegExp([
    "(\\\\.)",
    "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"
].join("|"), "g");
export function parse(e, t) {
    let r;
    const o = [];
    let l = 0;
    let u = 0;
    let s = "";
    const c = t && t.delimiter || "/";
    const f = t && t.delimiters || "./";
    let d = false;
    while((r = n.exec(e)) !== null){
        const p = r[0];
        const h = r[1];
        const v = r.index;
        s += e.slice(u, v);
        u = v + p.length;
        if (h) {
            s += h[1];
            d = true;
        } else {
            let prefix = "";
            const y = e[u];
            const m = r[2];
            const b = r[3];
            const x = r[4];
            const w = r[5];
            if (!d && s.length) {
                const _ = s.length - 1;
                if (f.indexOf(s[_]) > -1) {
                    prefix = s[_];
                    s = s.slice(0, _);
                }
            }
            if (s) {
                o.push(s);
                s = "";
                d = false;
            }
            const partial = prefix !== "" && y !== undefined && y !== prefix;
            const repeat = w === "+" || w === "*";
            const optional = w === "?" || w === "*";
            const delimiter = prefix || c;
            const S = b || x;
            o.push({
                name: m || l++,
                prefix,
                delimiter,
                optional,
                repeat,
                partial,
                pattern: S ? a(S) : `[^${i(delimiter)}]+?`
            });
        }
    }
    if (s || u < e.length) {
        o.push(s + e.substr(u));
    }
    return o;
}
export function tokensToFunction(e) {
    const t = new Array(e.length);
    for(let n = 0; n < e.length; n++){
        if (typeof e[n] === "object") {
            t[n] = new RegExp(`^(?:${e[n].pattern})\$`);
        }
    }
    return function(n, r) {
        let o = "";
        const i = r && r.encode || encodeURIComponent;
        for(let a = 0; a < e.length; a++){
            const l = e[a];
            if (typeof l !== "string") {
                let u;
                const s = n ? n[l.name] : undefined;
                if (Array.isArray(s)) {
                    if (!l.repeat) {
                        throw new TypeError(`Expected "${l.name}" to not repeat, but got array`);
                    }
                    if (s.length === 0) {
                        if (l.optional) {
                            continue;
                        }
                        throw new TypeError(`Expected "${l.name}" to not be empty`);
                    }
                    for(let c = 0; c < s.length; c++){
                        u = i(s[c], l);
                        if (!t[a].test(u)) {
                            throw new TypeError(`Expected all "${l.name}" to match "${l.pattern}"`);
                        }
                        o += (c === 0 ? l.prefix : l.delimiter) + u;
                    }
                } else if (typeof s !== "string" && typeof s !== "number" && typeof s !== "boolean") {
                    if (!l.optional) {
                        throw new TypeError(`Expected "${l.name}" to be ${l.repeat ? "an array" : "a string"}`);
                    }
                    if (l.partial) {
                        o += l.prefix;
                    }
                } else {
                    u = i(String(s), l);
                    if (!t[a].test(u)) {
                        throw new TypeError(`Expected "${l.name}" to match "${l.pattern}", but got "${u}"`);
                    }
                    o += l.prefix + u;
                }
            } else {
                o += l;
            }
        }
        return o;
    };
}
function i(e) {
    return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function a(e) {
    return e.replace(/([=!:$/()])/g, "\\$1");
}
function l(e) {
    if (e && e.sensitive) {
        return "";
    }
    return "i";
}
export function tokensToRegExp(e, t, n) {
    const strict = (n = n || {}).strict;
    const o = n.start !== false;
    const a = n.end !== false;
    const u = i(n.delimiter || "/");
    const s = n.delimiters || "./";
    const c = [].concat(n.endsWith || []).map(i).concat("$").join("|");
    let f = o ? "^" : "";
    let d = e.length === 0;
    for(let p = 0; p < e.length; p++){
        const h = e[p];
        if (typeof h === "string") {
            f += i(h);
            d = p === e.length - 1 && s.indexOf(h[h.length - 1]) > -1;
        } else {
            const v = h.repeat ? `(?:${h.pattern})(?:${i(h.delimiter)}(?:${h.pattern}))*` : h.pattern;
            if (t) {
                t.push(h);
            }
            if (h.optional) {
                if (h.partial) {
                    f += `${i(h.prefix)}(${v})?`;
                } else {
                    f += `(?:${i(h.prefix)}(${v}))?`;
                }
            } else {
                f += `${i(h.prefix)}(${v})`;
            }
        }
    }
    if (a) {
        if (!strict) {
            f += `(?:${u})?`;
        }
        f += c === "$" ? "$" : `(?=${c})`;
    } else {
        if (!strict) {
            f += `(?:${u}(?=${c}))?`;
        }
        if (!d) {
            f += `(?=${u}|${c})`;
        }
    }
    return new RegExp(f, l(n));
}
