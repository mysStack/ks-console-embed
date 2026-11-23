import module71 from "unpacked/module-71.js";
export default ((e, t, n = false)=>{
    if (e instanceof module71) {
        return e;
    }
    try {
        return new module71(e, t);
    } catch (error) {
        if (!n) {
            return null;
        }
        throw error;
    }
});
