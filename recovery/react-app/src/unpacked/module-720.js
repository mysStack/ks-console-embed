import module71 from "unpacked/module-71.js";
export default ((e, t, n, o, a)=>{
    if (typeof n === "string") {
        a = o;
        o = n;
        n = undefined;
    }
    try {
        return new module71(e instanceof module71 ? e.version : e, n).inc(t, o, a).version;
    } catch (e) {
        return null;
    }
});
