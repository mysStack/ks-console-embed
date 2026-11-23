import module760 from "./module-760.js";
export default (function e(t, n, o) {
    if (!module760(n)) {
        o = n || o;
        n = [];
    }
    o = o || {};
    if (t instanceof RegExp) {
        return ((e, t)=>{
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
                        asterisk: false,
                        pattern: null
                    });
                }
            }
            return c(e, t);
        })(t, n);
    }
    if (module760(t)) {
        return ((t, n, r)=>{
            const o = [];
            for(let a = 0; a < t.length; a++){
                o.push(e(t[a], n, r).source);
            }
            return c(new RegExp(`(?:${o.join("|")})`, f(r)), n);
        })(t, n, o);
    }
    return ((e, t, n)=>tokensToRegExp(parse(e, n), t, n))(t, n, o);
});
export const compile = function(e, t) {
    return tokensToFunction(parse(e, t), t);
};
var o = new RegExp([
    "(\\\\.)",
    "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
].join("|"), "g");
export function parse(e, t) {
    let n;
    const r = [];
    let a = 0;
    let i = 0;
    let l = "";
    const c = t && t.delimiter || "/";
    while((n = o.exec(e)) != null){
        const f = n[0];
        const d = n[1];
        const p = n.index;
        l += e.slice(i, p);
        i = p + f.length;
        if (d) {
            l += d[1];
        } else {
            const h = e[i];
            const v = n[2];
            const m = n[3];
            const g = n[4];
            const y = n[5];
            const b = n[6];
            const C = n[7];
            if (l) {
                r.push(l);
                l = "";
            }
            const partial = v != null && h != null && h !== v;
            const repeat = b === "+" || b === "*";
            const optional = b === "?" || b === "*";
            const delimiter = n[2] || c;
            const E = g || y;
            r.push({
                name: m || a++,
                prefix: v || "",
                delimiter,
                optional,
                repeat,
                partial,
                asterisk: !!C,
                pattern: E ? u(E) : C ? ".*" : `[^${s(delimiter)}]+?`
            });
        }
    }
    if (i < e.length) {
        l += e.substr(i);
    }
    if (l) {
        r.push(l);
    }
    return r;
}
function i(e) {
    return encodeURI(e).replace(/[\/?#]/g, (e)=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`);
}
export function tokensToFunction(e, t) {
    const n = new Array(e.length);
    for(let o = 0; o < e.length; o++){
        if (typeof e[o] === "object") {
            n[o] = new RegExp(`^(?:${e[o].pattern})\$`, f(t));
        }
    }
    return function(t, o) {
        let a = "";
        const l = t || {};
        const s = (o || {}).pretty ? i : encodeURIComponent;
        for(let u = 0; u < e.length; u++){
            const c = e[u];
            if (typeof c !== "string") {
                let f;
                const d = l[c.name];
                if (d == null) {
                    if (c.optional) {
                        if (c.partial) {
                            a += c.prefix;
                        }
                        continue;
                    }
                    throw new TypeError(`Expected "${c.name}" to be defined`);
                }
                if (module760(d)) {
                    if (!c.repeat) {
                        throw new TypeError(`Expected "${c.name}" to not repeat, but received \`${JSON.stringify(d)}\``);
                    }
                    if (d.length === 0) {
                        if (c.optional) {
                            continue;
                        }
                        throw new TypeError(`Expected "${c.name}" to not be empty`);
                    }
                    for(let p = 0; p < d.length; p++){
                        f = s(d[p]);
                        if (!n[u].test(f)) {
                            throw new TypeError(`Expected all "${c.name}" to match "${c.pattern}", but received \`${JSON.stringify(f)}\``);
                        }
                        a += (p === 0 ? c.prefix : c.delimiter) + f;
                    }
                } else {
                    f = c.asterisk ? encodeURI(d).replace(/[?#]/g, (e)=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`) : s(d);
                    if (!n[u].test(f)) {
                        throw new TypeError(`Expected "${c.name}" to match "${c.pattern}", but received "${f}"`);
                    }
                    a += c.prefix + f;
                }
            } else {
                a += c;
            }
        }
        return a;
    };
}
function s(e) {
    return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function u(e) {
    return e.replace(/([=!:$\/()])/g, "\\$1");
}
function c(e, t) {
    e.keys = t;
    return e;
}
function f(e) {
    if (e && e.sensitive) {
        return "";
    }
    return "i";
}
export function tokensToRegExp(e, t, n) {
    if (!module760(t)) {
        n = t || n;
        t = [];
    }
    const strict = (n = n || {}).strict;
    const a = n.end !== false;
    let i = "";
    for (const u of e){
        if (typeof u === "string") {
            i += s(u);
        } else {
            const d = s(u.prefix);
            let p = `(?:${u.pattern})`;
            t.push(u);
            if (u.repeat) {
                p += `(?:${d}${p})*`;
            }
            i += p = u.optional ? u.partial ? `${d}(${p})?` : `(?:${d}(${p}))?` : `${d}(${p})`;
        }
    }
    const h = s(n.delimiter || "/");
    const v = i.slice(-h.length) === h;
    if (!strict) {
        i = `${v ? i.slice(0, -h.length) : i}(?:${h}(?=\$))?`;
    }
    i += a ? "$" : strict && v ? "" : `(?=${h}|\$)`;
    return c(new RegExp(`^${i}`, f(n)), t);
}
