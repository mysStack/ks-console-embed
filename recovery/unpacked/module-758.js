import module310 from "./module-310.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
const i = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: false,
    comma: false,
    decoder: module310.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};
const l = (e)=>e.replace(/&#(\d+);/g, (e, t)=>String.fromCharCode(parseInt(t, 10)));
const s = (e, t)=>{
    if (e && typeof e === "string" && t.comma && e.indexOf(",") > -1) {
        return e.split(",");
    }
    return e;
};
const u = (e, t, n, r)=>{
    if (e) {
        const a = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e;
        const i = /(\[[^[\]]*])/g;
        let l = n.depth > 0 && /(\[[^[\]]*])/.exec(a);
        const u = l ? a.slice(0, l.index) : a;
        const c = [];
        if (u) {
            if (!n.plainObjects && hasOwnProperty.call(Object.prototype, u) && !n.allowPrototypes) {
                return;
            }
            c.push(u);
        }
        for(let f = 0; n.depth > 0 && (l = i.exec(a)) !== null && f < n.depth;){
            f += 1;
            if (!n.plainObjects && hasOwnProperty.call(Object.prototype, l[1].slice(1, -1)) && !n.allowPrototypes) {
                return;
            }
            c.push(l[1]);
        }
        if (l) {
            c.push(`[${a.slice(l.index)}]`);
        }
        return ((e, t, n, r)=>{
            let o = r ? t : s(t, n);
            for(let a = e.length - 1; a >= 0; --a){
                let i;
                const l = e[a];
                if (l === "[]" && n.parseArrays) {
                    i = [].concat(o);
                } else {
                    i = n.plainObjects ? Object.create(null) : {};
                    const u = l.charAt(0) === "[" && l.charAt(l.length - 1) === "]" ? l.slice(1, -1) : l;
                    const c = parseInt(u, 10);
                    if (n.parseArrays || u !== "") {
                        if (!isNaN(c) && l !== u && String(c) === u && c >= 0 && n.parseArrays && c <= n.arrayLimit) {
                            i = [];
                            i[c] = o;
                        } else {
                            i[u] = o;
                        }
                    } else {
                        i = {
                            0: o
                        };
                    }
                }
                o = i;
            }
            return o;
        })(c, t, n, r);
    }
};
export default function(e, t) {
    const n = ((e)=>{
        if (!e) {
            return i;
        }
        if (e.decoder !== null && e.decoder !== undefined && typeof e.decoder !== "function") {
            throw new TypeError("Decoder has to be a function.");
        }
        if (e.charset !== undefined && e.charset !== "utf-8" && e.charset !== "iso-8859-1") {
            throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        }
        const charset = e.charset === undefined ? i.charset : e.charset;
        return {
            allowDots: e.allowDots === undefined ? i.allowDots : !!e.allowDots,
            allowPrototypes: typeof e.allowPrototypes === "boolean" ? e.allowPrototypes : i.allowPrototypes,
            arrayLimit: typeof e.arrayLimit === "number" ? e.arrayLimit : i.arrayLimit,
            charset,
            charsetSentinel: typeof e.charsetSentinel === "boolean" ? e.charsetSentinel : i.charsetSentinel,
            comma: typeof e.comma === "boolean" ? e.comma : i.comma,
            decoder: typeof e.decoder === "function" ? e.decoder : i.decoder,
            delimiter: typeof e.delimiter === "string" || module310.isRegExp(e.delimiter) ? e.delimiter : i.delimiter,
            depth: typeof e.depth === "number" || e.depth === false ? +e.depth : i.depth,
            ignoreQueryPrefix: e.ignoreQueryPrefix === true,
            interpretNumericEntities: typeof e.interpretNumericEntities === "boolean" ? e.interpretNumericEntities : i.interpretNumericEntities,
            parameterLimit: typeof e.parameterLimit === "number" ? e.parameterLimit : i.parameterLimit,
            parseArrays: e.parseArrays !== false,
            plainObjects: typeof e.plainObjects === "boolean" ? e.plainObjects : i.plainObjects,
            strictNullHandling: typeof e.strictNullHandling === "boolean" ? e.strictNullHandling : i.strictNullHandling
        };
    })(t);
    if (e === "" || e == null) {
        if (n.plainObjects) {
            return Object.create(null);
        }
        return {};
    }
    const c = typeof e === "string" ? ((e, t)=>{
        let n;
        const u = {};
        const c = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e;
        const f = t.parameterLimit === Infinity ? undefined : t.parameterLimit;
        const d = c.split(t.delimiter, f);
        let p = -1;
        let t_charset = t.charset;
        if (t.charsetSentinel) {
            for(n = 0; n < d.length; ++n){
                if (d[n].indexOf("utf8=") === 0) {
                    if (d[n] === "utf8=%E2%9C%93") {
                        t_charset = "utf-8";
                    } else if (d[n] === "utf8=%26%2310003%3B") {
                        t_charset = "iso-8859-1";
                    }
                    p = n;
                    n = d.length;
                }
            }
        }
        for(n = 0; n < d.length; ++n){
            if (n !== p) {
                let v;
                let m;
                const g = d[n];
                const y = g.indexOf("]=");
                const b = y === -1 ? g.indexOf("=") : y + 1;
                if (b === -1) {
                    v = t.decoder(g, i.decoder, t_charset, "key");
                    m = t.strictNullHandling ? null : "";
                } else {
                    v = t.decoder(g.slice(0, b), i.decoder, t_charset, "key");
                    m = module310.maybeMap(s(g.slice(b + 1), t), function(e) {
                        return t.decoder(e, i.decoder, t_charset, "value");
                    });
                }
                if (m && t.interpretNumericEntities && t_charset === "iso-8859-1") {
                    m = l(m);
                }
                if (g.indexOf("[]=") > -1) {
                    m = Array.isArray(m) ? [
                        m
                    ] : m;
                }
                if (hasOwnProperty.call(u, v)) {
                    u[v] = module310.combine(u[v], m);
                } else {
                    u[v] = m;
                }
            }
        }
        return u;
    })(e, n) : e;
    let f = n.plainObjects ? Object.create(null) : {};
    for(let d = Object.keys(c), p = 0; p < d.length; ++p){
        const h = d[p];
        const v = u(h, c[h], n, typeof e === "string");
        f = module310.merge(f, v, n);
    }
    return module310.compact(f);
};
