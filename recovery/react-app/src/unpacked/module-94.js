class r {
    constructor(e, t){
        t = module304(t);
        if (e instanceof r) {
            if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) {
                return e;
            }
            return new r(e.raw, t);
        }
        if (e instanceof module236) {
            this.raw = e.value;
            this.set = [
                [
                    e
                ]
            ];
            this.format();
            return this;
        }
        this.options = t;
        this.loose = !!t.loose;
        this.includePrerelease = !!t.includePrerelease;
        this.raw = e.trim().split(/\s+/).join(" ");
        this.set = this.raw.split("||").map((e)=>this.parseRange(e.trim())).filter((e)=>e.length);
        if (!this.set.length) {
            throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        if (this.set.length > 1) {
            const e = this.set[0];
            this.set = this.set.filter((e)=>!m(e[0]));
            if (this.set.length === 0) {
                this.set = [
                    e
                ];
            } else if (this.set.length > 1) {
                for (const t of this.set){
                    if (t.length === 1 && g(t[0])) {
                        this.set = [
                            t
                        ];
                        break;
                    }
                }
            }
        }
        this.format();
    }
    format() {
        this.range = this.set.map((e)=>e.join(" ").trim()).join("||").trim();
        return this.range;
    }
    toString() {
        return this.range;
    }
    parseRange(e) {
        const t = `${(this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE)}:${e}`;
        const n = o.get(t);
        if (n) {
            return n;
        }
        const loose = this.options.loose;
        const a = loose ? safeRe[t_1.HYPHENRANGELOOSE] : safeRe[t_1.HYPHENRANGE];
        e = e.replace(a, L(this.options.includePrerelease));
        module234("hyphen replace", e);
        e = e.replace(safeRe[t_1.COMPARATORTRIM], comparatorTrimReplace);
        module234("comparator trim", e);
        e = e.replace(safeRe[t_1.TILDETRIM], tildeTrimReplace);
        module234("tilde trim", e);
        e = e.replace(safeRe[t_1.CARETTRIM], caretTrimReplace);
        module234("caret trim", e);
        let s = e.split(" ").map((e)=>b(e, this.options)).join(" ").split(/\s+/).map((e)=>S(e, this.options));
        if (loose) {
            s = s.filter((e)=>{
                module234("loose invalid filter", e, this.options);
                return !!e.match(safeRe[t_1.COMPARATORLOOSE]);
            });
        }
        module234("range list", s);
        const map = new Map;
        const y = s.map((e)=>new module236(e, this.options));
        for (const o of y){
            if (m(o)) {
                return [
                    o
                ];
            }
            map.set(o.value, o);
        }
        if (map.size > 1 && map.has("")) {
            map.delete("");
        }
        const C = [
            ...map.values()
        ];
        o.set(t, C);
        return C;
    }
    intersects(e, t) {
        if (!(e instanceof r)) {
            throw new TypeError("a Range is required");
        }
        return this.set.some((n)=>y(n, t) && e.set.some((e)=>y(e, t) && n.every((n)=>e.every((e)=>n.intersects(e, t)))));
    }
    test(e) {
        if (!e) {
            return false;
        }
        if (typeof e === "string") {
            try {
                e = new module71(e, this.options);
            } catch (e) {
                return false;
            }
        }
        for(let t = 0; t < this.set.length; t++){
            if (z(this.set[t], e, this.options)) {
                return true;
            }
        }
        return false;
    }
}
module.exports = r;
const o = new (require("unpacked/module-731.js")).default({
    max: 1000
});
const module304 = require("unpacked/module-304.js").default;
const module236 = require("unpacked/module-236.js").default;
const module234 = require("unpacked/module-234.js");
const module71 = require("unpacked/module-71.js").default;
const { safeRe, t: t_1, comparatorTrimReplace, tildeTrimReplace, caretTrimReplace } = require("unpacked/module-184.js").default;
const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require("unpacked/module-233.js").default;
const m = (e)=>e.value === "<0.0.0-0";
const g = (e)=>e.value === "";
const y = (e, t)=>{
    let n = true;
    const r = e.slice();
    let o = r.pop();
    while(n && r.length){
        n = r.every((e)=>o.intersects(e, t));
        o = r.pop();
    }
    return n;
};
const b = (e, options)=>{
    module234("comp", e, options);
    e = x(e, options);
    module234("caret", e);
    e = w(e, options);
    module234("tildes", e);
    e = E(e, options);
    module234("xrange", e);
    e = O(e, options);
    module234("stars", e);
    return e;
};
const C = (e)=>!e || e.toLowerCase() === "x" || e === "*";
const w = (e, options)=>e.trim().split(/\s+/).map((e)=>_(e, options)).join(" ");
const _ = (e, t)=>{
    const n = t.loose ? safeRe[t_1.TILDELOOSE] : safeRe[t_1.TILDE];
    return e.replace(n, (t, n, r, o, a)=>{
        let i;
        module234("tilde", e, t, n, r, o, a);
        if (C(n)) {
            i = "";
        } else if (C(r)) {
            i = `>=${n}.0.0 <${+n + 1}.0.0-0`;
        } else if (C(o)) {
            i = `>=${n}.${r}.0 <${n}.${+r + 1}.0-0`;
        } else if (a) {
            module234("replaceTilde pr", a);
            i = `>=${n}.${r}.${o}-${a} <${n}.${+r + 1}.0-0`;
        } else {
            i = `>=${n}.${r}.${o} <${n}.${+r + 1}.0-0`;
        }
        module234("tilde return", i);
        return i;
    });
};
const x = (e, options)=>e.trim().split(/\s+/).map((e)=>M(e, options)).join(" ");
const M = (e, t)=>{
    module234("caret", e, t);
    const n = t.loose ? safeRe[t_1.CARETLOOSE] : safeRe[t_1.CARET];
    const r = t.includePrerelease ? "-0" : "";
    return e.replace(n, (t, n, o, a, i)=>{
        let s;
        module234("caret", e, t, n, o, a, i);
        if (C(n)) {
            s = "";
        } else if (C(o)) {
            s = `>=${n}.0.0${r} <${+n + 1}.0.0-0`;
        } else if (C(a)) {
            s = n === "0" ? `>=${n}.${o}.0${r} <${n}.${+o + 1}.0-0` : `>=${n}.${o}.0${r} <${+n + 1}.0.0-0`;
        } else if (i) {
            module234("replaceCaret pr", i);
            s = n === "0" ? o === "0" ? `>=${n}.${o}.${a}-${i} <${n}.${o}.${+a + 1}-0` : `>=${n}.${o}.${a}-${i} <${n}.${+o + 1}.0-0` : `>=${n}.${o}.${a}-${i} <${+n + 1}.0.0-0`;
        } else {
            module234("no pr");
            s = n === "0" ? o === "0" ? `>=${n}.${o}.${a}${r} <${n}.${o}.${+a + 1}-0` : `>=${n}.${o}.${a}${r} <${n}.${+o + 1}.0-0` : `>=${n}.${o}.${a} <${+n + 1}.0.0-0`;
        }
        module234("caret return", s);
        return s;
    });
};
const E = (e, options)=>{
    module234("replaceXRanges", e, options);
    return e.split(/\s+/).map((e)=>k(e, options)).join(" ");
};
const k = (e, t)=>{
    e = e.trim();
    const n = t.loose ? safeRe[t_1.XRANGELOOSE] : safeRe[t_1.XRANGE];
    return e.replace(n, (n, r, o, a, i, s)=>{
        module234("xRange", e, n, r, o, a, i, s);
        const u = C(o);
        const c = u || C(a);
        const f = c || C(i);
        const d = f;
        if (r === "=" && d) {
            r = "";
        }
        s = t.includePrerelease ? "-0" : "";
        if (u) {
            n = r === ">" || r === "<" ? "<0.0.0-0" : "*";
        } else if (r && d) {
            if (c) {
                a = 0;
            }
            i = 0;
            if (r === ">") {
                r = ">=";
                if (c) {
                    o = +o + 1;
                    a = 0;
                    i = 0;
                } else {
                    a = +a + 1;
                    i = 0;
                }
            } else if (r === "<=") {
                r = "<";
                if (c) {
                    o = +o + 1;
                } else {
                    a = +a + 1;
                }
            }
            if (r === "<") {
                s = "-0";
            }
            n = `${r + o}.${a}.${i}${s}`;
        } else if (c) {
            n = `>=${o}.0.0${s} <${+o + 1}.0.0-0`;
        } else if (f) {
            n = `>=${o}.${a}.0${s} <${o}.${+a + 1}.0-0`;
        }
        module234("xRange return", n);
        return n;
    });
};
const O = (e, options)=>{
    module234("replaceStars", e, options);
    return e.trim().replace(safeRe[t_1.STAR], "");
};
const S = (e, options)=>{
    module234("replaceGTE0", e, options);
    return e.trim().replace(safeRe[options.includePrerelease ? t_1.GTE0PRE : t_1.GTE0], "");
};
const L = (includePrerelease)=>(t, n, r, o, a, i, l, s, u, c, f, d, p)=>`${n = C(r) ? "" : C(o) ? `>=${r}.0.0${includePrerelease ? "-0" : ""}` : C(a) ? `>=${r}.${o}.0${includePrerelease ? "-0" : ""}` : i ? `>=${n}` : `>=${n}${includePrerelease ? "-0" : ""}`} ${s = C(u) ? "" : C(c) ? `<${+u + 1}.0.0-0` : C(f) ? `<${u}.${+c + 1}.0-0` : d ? `<=${u}.${c}.${f}-${d}` : includePrerelease ? `<${u}.${c}.${+f + 1}-0` : `<=${s}`}`.trim();
const z = (e, t, options)=>{
    for(let r = 0; r < e.length; r++){
        if (!e[r].test(t)) {
            return false;
        }
    }
    if (t.prerelease.length && !options.includePrerelease) {
        for(let n = 0; n < e.length; n++){
            module234(e[n].semver);
            if (e[n].semver !== module236.ANY && e[n].semver.prerelease.length > 0) {
                const r = e[n].semver;
                if (r.major === t.major && r.minor === t.minor && r.patch === t.patch) {
                    return true;
                }
            }
        }
        return false;
    }
    return true;
};
