const n = Object.freeze({
    loose: true
});
const r = Object.freeze({});
export default ((e)=>{
    if (e) {
        if (typeof e !== "object") {
            return n;
        }
        return e;
    }
    return r;
});
