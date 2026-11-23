import { a } from "./module-841.js";
const i = (()=>{
    function e() {}
    return function(t) {
        if (!a(t)) {
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
export { i as a };
