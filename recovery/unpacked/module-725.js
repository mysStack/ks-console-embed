import module157 from "./module-157.js";
export default ((e, t)=>{
    const n = module157(e, t);
    if (n && n.prerelease.length) {
        return n.prerelease;
    }
    return null;
});
