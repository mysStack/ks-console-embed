import module157 from "unpacked/module-157.js";
export default ((e, t)=>{
    const n = module157(e.trim().replace(/^[=v]+/, ""), t);
    if (n) {
        return n.version;
    }
    return null;
});
