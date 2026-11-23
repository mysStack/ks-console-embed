import defaultExport from "./module-1465.js";
let r;
const n = this && this.__extends || (r = function(e, t) {
    return (r = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for(const i in t){
            if (t.hasOwnProperty(i)) {
                e[i] = t[i];
            }
        }
    })(e, t);
}, (e, t)=>{
    function i() {
        this.constructor = e;
    }
    r(e, t);
    e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i);
});
const s = ((defaultExport_1)=>{
    function t(t, i) {
        return defaultExport_1.call(this) || this;
    }
    n(t, defaultExport_1);
    t.prototype.draw = function(e, t, i, r) {
        return false;
    };
    return t;
})(defaultExport);
export default s;
