((t)=>{
    const n = typeof t === "object" && t.env && t.env.NODE_DEBUG && /\bsemver\b/i.test(t.env.NODE_DEBUG) ? (...e)=>console.error("SEMVER", ...e) : ()=>{};
    module.exports = n;
})(require("./module-257.js").default);
