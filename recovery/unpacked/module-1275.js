export const shallowEqual = function(e, t) {
    for(const n in e){
        if (Object.prototype.hasOwnProperty.call(e, n) && (!Object.prototype.hasOwnProperty.call(t, n) || e[n] !== t[n])) {
            return false;
        }
    }
    for(const r in t){
        if (Object.prototype.hasOwnProperty.call(t, r) && !Object.prototype.hasOwnProperty.call(e, r)) {
            return false;
        }
    }
    return true;
};
