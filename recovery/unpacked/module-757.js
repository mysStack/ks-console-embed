import module310 from "./module-310.js";
import module430 from "./module-430.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
const i = {
    brackets: function(e) {
        return `${e}[]`;
    },
    comma: "comma",
    indices: function(e, t) {
        return `${e}[${t}]`;
    },
    repeat: function(e) {
        return e;
    }
};
const push = Array.prototype.push;
const u = (e, t)=>{
    push.apply(e, Array.isArray(t) ? t : [
        t
    ]);
};
const toISOString = Date.prototype.toISOString;
const module430_default = module430.default;
const d = {
    addQueryPrefix: false,
    allowDots: false,
    charset: "utf-8",
    charsetSentinel: false,
    delimiter: "&",
    encode: true,
    encoder: module310.encode,
    encodeValuesOnly: false,
    format: module430_default,
    formatter: module430.formatters[module430_default],
    indices: false,
    serializeDate: function(e) {
        return toISOString.call(e);
    },
    skipNulls: false,
    strictNullHandling: false
};
const p = function e(t, n, o, strictNullHandling, skipNulls, s, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset) {
    let y;
    let b = t;
    if (typeof filter === "function") {
        b = filter(n, b);
    } else if (b instanceof Date) {
        b = serializeDate(b);
    } else if (o === "comma" && Array.isArray(b)) {
        b = module310.maybeMap(b, function(e) {
            if (e instanceof Date) {
                return serializeDate(e);
            }
            return e;
        }).join(",");
    }
    if (b === null) {
        if (strictNullHandling) {
            if (s && !encodeValuesOnly) {
                return s(n, d.encoder, charset, "key");
            }
            return n;
        }
        b = "";
    }
    if (typeof (y = b) === "string" || typeof y === "number" || typeof y === "boolean" || typeof y === "symbol" || typeof y === "bigint" || module310.isBuffer(b)) {
        if (s) {
            return [
                `${formatter(encodeValuesOnly ? n : s(n, d.encoder, charset, "key"))}=${formatter(s(b, d.encoder, charset, "value"))}`
            ];
        }
        return [
            `${formatter(n)}=${formatter(String(b))}`
        ];
    }
    let C;
    const w = [];
    if (b === undefined) {
        return w;
    }
    if (Array.isArray(filter)) {
        C = filter;
    } else {
        const _ = Object.keys(b);
        C = sort ? _.sort(sort) : _;
    }
    for (const M of C){
        const E = b[M];
        if (!skipNulls || E !== null) {
            const k = Array.isArray(b) ? typeof o === "function" ? o(n, M) : n : n + (allowDots ? `.${M}` : `[${M}]`);
            u(w, e(E, k, o, strictNullHandling, skipNulls, s, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset));
        }
    }
    return w;
};
export default function(e, t) {
    let n;
    let r = e;
    const s = ((e)=>{
        if (!e) {
            return d;
        }
        if (e.encoder !== null && e.encoder !== undefined && typeof e.encoder !== "function") {
            throw new TypeError("Encoder has to be a function.");
        }
        const charset = e.charset || d.charset;
        if (e.charset !== undefined && e.charset !== "utf-8" && e.charset !== "iso-8859-1") {
            throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        }
        let o_default = module430.default;
        if (e.format !== undefined) {
            if (!hasOwnProperty.call(module430.formatters, e.format)) {
                throw new TypeError("Unknown format option provided.");
            }
            o_default = e.format;
        }
        const formatter = module430.formatters[o_default];
        let d_filter = d.filter;
        if (typeof e.filter === "function" || Array.isArray(e.filter)) {
            d_filter = e.filter;
        }
        return {
            addQueryPrefix: typeof e.addQueryPrefix === "boolean" ? e.addQueryPrefix : d.addQueryPrefix,
            allowDots: e.allowDots === undefined ? d.allowDots : !!e.allowDots,
            charset,
            charsetSentinel: typeof e.charsetSentinel === "boolean" ? e.charsetSentinel : d.charsetSentinel,
            delimiter: e.delimiter === undefined ? d.delimiter : e.delimiter,
            encode: typeof e.encode === "boolean" ? e.encode : d.encode,
            encoder: typeof e.encoder === "function" ? e.encoder : d.encoder,
            encodeValuesOnly: typeof e.encodeValuesOnly === "boolean" ? e.encodeValuesOnly : d.encodeValuesOnly,
            filter: d_filter,
            formatter,
            serializeDate: typeof e.serializeDate === "function" ? e.serializeDate : d.serializeDate,
            skipNulls: typeof e.skipNulls === "boolean" ? e.skipNulls : d.skipNulls,
            sort: typeof e.sort === "function" ? e.sort : null,
            strictNullHandling: typeof e.strictNullHandling === "boolean" ? e.strictNullHandling : d.strictNullHandling
        };
    })(t);
    if (typeof s.filter === "function") {
        r = s.filter("", r);
    } else if (Array.isArray(s.filter)) {
        n = s.filter;
    }
    let c;
    const f = [];
    if (typeof r !== "object" || r === null) {
        return "";
    }
    c = t && t.arrayFormat in i ? t.arrayFormat : t && "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
    const h = i[c];
    if (!n) {
        n = Object.keys(r);
    }
    if (s.sort) {
        n.sort(s.sort);
    }
    for (const m of n){
        if (!(s.skipNulls && r[m] === null)) {
            u(f, p(r[m], m, h, s.strictNullHandling, s.skipNulls, s.encode ? s.encoder : null, s.filter, s.sort, s.allowDots, s.serializeDate, s.formatter, s.encodeValuesOnly, s.charset));
        }
    }
    const g = f.join(s.delimiter);
    let y = s.addQueryPrefix === true ? "?" : "";
    if (s.charsetSentinel) {
        if (s.charset === "iso-8859-1") {
            y += "utf8=%26%2310003%3B&";
        } else {
            y += "utf8=%E2%9C%93&";
        }
    }
    if (g.length > 0) {
        return y + g;
    }
    return "";
};
