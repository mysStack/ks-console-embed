import module76 from "./module-76.js";
const a = (()=>{
    function e() {}
    return function(t) {
        if (!module76(t)) {
            return {};
        }
        if (Object.create) {
            return Object.create(t);
        }
        e.prototype = t;
        const n = new e;
        e.prototype = undefined;
        return n;
    };
})();
export default a;
