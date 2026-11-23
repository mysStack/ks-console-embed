import "./module-15.js";
import "./module-5.js";
import module31 from "./module-31.js";
import module26 from "./module-26.js";
const u = {};
const o = {
    get: function(e, t = location.pathname) {
        return module26(u, `${e}.${t}`);
    },
    set: function(e, t, a = location.pathname) {
        u[e] = module31({}, a, t);
    },
    delete: function(e) {
        delete u[e];
    }
};
export default o;
