import "./module-15.js";
import module318 from "stores/workload/index";
import module484 from "./module-484.js";
import module485 from "./module-485.js";
import module322 from "stores/user";
import module452 from "stores/pod";
import module470 from "stores/openpitrix/app";
import module323 from "stores/devops";
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
