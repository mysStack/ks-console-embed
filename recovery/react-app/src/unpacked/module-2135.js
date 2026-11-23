import module2136 from "unpacked/module-2136.js";
import module2137 from "unpacked/module-2137.js";
import module2139 from "unpacked/module-2139.js";
let r;
const l = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g;
export default function(e, t) {
    r = 0;
    t = 10 ** (t === undefined ? 5 : t);
    e = e.replace(/\n+/g, " ");
    return module2137(e, /((?:\-[a-z]+\-)?calc)\(/, function e(n, i, u) {
        if (r++ > 100) {
            r = 0;
            throw new Error(`Call stack overflow for ${u}`);
        }
        if (n === "") {
            throw new Error(`${i}(): '${u}' must contain a non-whitespace string`);
        }
        const s = ((e)=>{
            const t = [];
            const n = [];
            const r = /[\.0-9]([%a-z]+)/gi;
            for(let o = r.exec(e); o;){
                if (o && o[1]) {
                    if (n.indexOf(o[1].toLowerCase()) === -1) {
                        t.push(o[1]);
                        n.push(o[1].toLowerCase());
                    }
                    o = r.exec(e);
                }
            }
            return t;
        })(n = ((t, n)=>{
            let r;
            let i = "";
            for(var a = t = t.replace(/((?:\-[a-z]+\-)?calc)/g, ""); r = l.exec(a);){
                if (r[0].index > 0) {
                    i += a.substring(0, r[0].index);
                }
                const u = module2136("(", ")", a.substring([
                    0
                ].index));
                if (u.body === "") {
                    throw new Error(`'${t}' must contain a non-whitespace string`);
                }
                const s = e(u.body, "", n);
                i += u.pre + s;
                a = u.post;
            }
            return i + a;
        })(n, u));
        if (s.length > 1 || n.indexOf("var(") > -1) {
            return `${i}(${n})`;
        }
        const c = s[0] || "";
        if (c === "%") {
            n = n.replace(/\b[0-9\.]+%/g, (e)=>0.01 * parseFloat(e.slice(0, -1)));
        }
        let f;
        const d = n.replace(new RegExp(c, "gi"), "");
        try {
            f = module2139.eval(d);
        } catch (t) {
            return `${i}(${n})`;
        }
        if (c === "%") {
            f *= 100;
        }
        if (i.length || c === "%") {
            f = Math.round(f * t) / t;
        }
        return f + c;
    });
};
