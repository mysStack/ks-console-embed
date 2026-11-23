import "./module-15.js";
import module318 from "./module-318.js";
import module484 from "./module-484.js";
import module485 from "./module-485.js";
import module322 from "./module-322.js";
import module452 from "./module-452.js";
import module470 from "./module-470.js";
import module323 from "./module-323.js";
export const getStore = function(e, t) {
    return f[e](t);
};
var f = {
    workload: function(e) {
        return new module318(e);
    },
    edgeStore: function(e) {
        return new module484(e);
    },
    podStore: function(e) {
        return new module452(e);
    },
    edgeTemplateStore: function(e) {
        return new module485(e);
    },
    userStore: function() {
        return new module322;
    },
    appStore: function(e) {
        return new module470(e);
    },
    devopsStore: function() {
        return new module323;
    }
};
