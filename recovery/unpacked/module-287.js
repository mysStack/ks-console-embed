const hasOwnProperty = Object.prototype.hasOwnProperty;
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
function i(e) {
    if (e == null) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(e);
}
export default (()=>{
    try {
        if (!Object.assign) {
            return false;
        }
        const e = new String("abc");
        e[5] = "de";
        if (Object.getOwnPropertyNames(e)[0] === "5") {
            return false;
        }
        const t = {};
        for(let n = 0; n < 10; n++){
            t[`_${String.fromCharCode(n)}`] = n;
        }
        if (Object.getOwnPropertyNames(t).map((e)=>t[e]).join("") !== "0123456789") {
            return false;
        }
        const r = {};
        "abcdefghijklmnopqrst".split("").forEach((e)=>{
            r[e] = e;
        });
        return Object.keys({
            ...r
        }).join("") === "abcdefghijklmnopqrst";
    } catch (e) {
        return false;
    }
})() ? Object.assign : function(e, t) {
    let n;
    let l;
    const s = i(e);
    for(let u = 1; u < arguments.length; u++){
        for(const c in n = Object(arguments[u])){
            if (hasOwnProperty.call(n, c)) {
                s[c] = n[c];
            }
        }
        if (Object.getOwnPropertySymbols) {
            l = Object.getOwnPropertySymbols(n);
            for(let f = 0; f < l.length; f++){
                if (propertyIsEnumerable.call(n, l[f])) {
                    s[l[f]] = n[l[f]];
                }
            }
        }
    }
    return s;
};
