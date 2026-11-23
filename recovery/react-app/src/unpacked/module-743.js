import module94 from "unpacked/module-94.js";
import module236 from "unpacked/module-236.js";
import module237 from "unpacked/module-237.js";
import module93 from "unpacked/module-93.js";
const { ANY } = module236;
const s = [
    new module236(">=0.0.0-0")
];
const u = [
    new module236(">=0.0.0")
];
const c = (e, t, n)=>{
    if (e === t) {
        return true;
    }
    if (e.length === 1 && e[0].semver === ANY) {
        if (t.length === 1 && t[0].semver === ANY) {
            return true;
        }
        e = n.includePrerelease ? s : u;
    }
    if (t.length === 1 && t[0].semver === ANY) {
        if (n.includePrerelease) {
            return true;
        }
        t = u;
    }
    const set = new Set;
    let o;
    let c;
    let p;
    let h;
    let v;
    let m;
    let g;
    for (const a of e){
        if (a.operator === ">" || a.operator === ">=") {
            o = f(o, a, n);
        } else if (a.operator === "<" || a.operator === "<=") {
            c = d(c, a, n);
        } else {
            set.add(a.semver);
        }
    }
    if (set.size > 1) {
        return null;
    }
    if (o && c) {
        p = module93(o.semver, c.semver, n);
        if (p > 0) {
            return null;
        }
        if (p === 0 && (o.operator !== ">=" || c.operator !== "<=")) {
            return null;
        }
    }
    for (const a of set){
        if (o && !module237(a, String(o), n)) {
            return null;
        }
        if (c && !module237(a, String(c), n)) {
            return null;
        }
        for (const e of t){
            if (!module237(a, String(e), n)) {
                return false;
            }
        }
        return true;
    }
    let y = !(!c || n.includePrerelease || !c.semver.prerelease.length) && c.semver;
    let b = !(!o || n.includePrerelease || !o.semver.prerelease.length) && o.semver;
    if (y && y.prerelease.length === 1 && c.operator === "<" && y.prerelease[0] === 0) {
        y = false;
    }
    for (const a of t){
        g = g || a.operator === ">" || a.operator === ">=";
        m = m || a.operator === "<" || a.operator === "<=";
        if (o) {
            if (b && a.semver.prerelease && a.semver.prerelease.length && a.semver.major === b.major && a.semver.minor === b.minor && a.semver.patch === b.patch) {
                b = false;
            }
            if (a.operator === ">" || a.operator === ">=") {
                h = f(o, a, n);
                if (h === a && h !== o) {
                    return false;
                }
            } else if (o.operator === ">=" && !module237(o.semver, String(a), n)) {
                return false;
            }
        }
        if (c) {
            if (y && a.semver.prerelease && a.semver.prerelease.length && a.semver.major === y.major && a.semver.minor === y.minor && a.semver.patch === y.patch) {
                y = false;
            }
            if (a.operator === "<" || a.operator === "<=") {
                v = d(c, a, n);
                if (v === a && v !== c) {
                    return false;
                }
            } else if (c.operator === "<=" && !module237(c.semver, String(a), n)) {
                return false;
            }
        }
        if (!a.operator && (c || o) && p !== 0) {
            return false;
        }
    }
    return !(o && m && !c && p !== 0 || c && g && !o && p !== 0 || b || y);
};
const f = (e, t, n)=>{
    if (!e) {
        return t;
    }
    const r = module93(e.semver, t.semver, n);
    if (r > 0) {
        return e;
    }
    if (r < 0 || t.operator === ">" && e.operator === ">=") {
        return t;
    }
    return e;
};
const d = (e, t, n)=>{
    if (!e) {
        return t;
    }
    const r = module93(e.semver, t.semver, n);
    if (r < 0) {
        return e;
    }
    if (r > 0 || t.operator === "<" && e.operator === "<=") {
        return t;
    }
    return e;
};
export default ((e, t, n = {})=>{
    if (e === t) {
        return true;
    }
    e = new module94(e, n);
    t = new module94(t, n);
    let o = false;
    e: for (const r of e.set){
        for (const e of t.set){
            const t = c(r, e, n);
            o = o || t !== null;
            if (t) {
                continue e;
            }
        }
        if (o) {
            return false;
        }
    }
    return true;
});
