const r = (e)=>{
    switch(typeof e){
        case "string":
            return e;
        case "boolean":
            if (e) {
                return "true";
            }
            return "false";
        case "number":
            if (isFinite(e)) {
                return e;
            }
            return "";
        default:
            return "";
    }
};
export default function(e, t, n, l) {
    t = t || "&";
    n = n || "=";
    if (e === null) {
        e = undefined;
    }
    if (typeof e === "object") {
        return a(i(e), function(i) {
            const l = encodeURIComponent(r(i)) + n;
            if (o(e[i])) {
                return a(e[i], function(e) {
                    return l + encodeURIComponent(r(e));
                }).join(t);
            }
            return l + encodeURIComponent(r(e[i]));
        }).join(t);
    }
    if (l) {
        return encodeURIComponent(r(l)) + n + encodeURIComponent(r(e));
    }
    return "";
};
var o = Array.isArray || ((e)=>Object.prototype.toString.call(e) === "[object Array]");
function a(e, t) {
    if (e.map) {
        return e.map(t);
    }
    const n = [];
    for(let r = 0; r < e.length; r++){
        n.push(t(e[r], r));
    }
    return n;
}
var i = Object.keys || ((e)=>{
    const t = [];
    for(const n in e){
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            t.push(n);
        }
    }
    return t;
});
