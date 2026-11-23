import { hop } from "./module-381.js";
const o = (()=>{
    try {
        return !!Object.defineProperty({}, "a", {});
    } catch (e) {
        return false;
    }
})();
!o && Object.prototype.__defineGetter__;
export const defineProperty = o ? Object.defineProperty : function(e, t, n) {
    if ("get" in n && e.__defineGetter__) {
        e.__defineGetter__(t, n.get);
    } else if (!(hop.call(e, t) && !("value" in n))) {
        e[t] = n.value;
    }
};
export const objCreate = Object.create || function(e, t) {
    let n;
    let o;
    function i() {}
    i.prototype = e;
    n = new i;
    for(o in t){
        if (hop.call(t, o)) {
            defineProperty(n, o, t[o]);
        }
    }
    return n;
};
