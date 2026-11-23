import module157 from "./module-157.js";
export default ((e, t)=>{
    const n = module157(e, null, true);
    const o = module157(t, null, true);
    const a = n.compare(o);
    if (a === 0) {
        return null;
    }
    const i = a > 0;
    const l = i ? n : o;
    const s = i ? o : n;
    const u = !!l.prerelease.length;
    if (s.prerelease.length && !u) {
        if (s.patch || s.minor) {
            if (l.patch) {
                return "patch";
            }
            if (l.minor) {
                return "minor";
            }
            return "major";
        }
        return "major";
    }
    const c = u ? "pre" : "";
    if (n.major !== o.major) {
        return `${c}major`;
    }
    if (n.minor !== o.minor) {
        return `${c}minor`;
    }
    if (n.patch !== o.patch) {
        return `${c}patch`;
    }
    return "prerelease";
});
