import "./module-15.js";
import module36 from "./module-36.js";
import { compareVersion } from "utils/index";
import module26 from "./module-26.js";
import module1103 from "./module-1103.js";
import module2429 from "./module-2429.js";
export default (function e(t) {
    const _this = this;
    module36(this, e);
    this.store = null;
    this.setStore = function(e) {
        _this.store = e;
    };
    this.isCalico = function(e) {
        const n = window.parent?.globals ?? window.globals;
        const o = n?.app?.isMultiCluster ? module26(n, `clusterConfig.${e}.ksVersion`) : module26(n, "ksConfig.ksVersion");
        return compareVersion(o, "3.4.1") >= 0;
    };
    this.isOutdated = function(e) {
        const n = window.parent?.globals ?? window.globals;
        if (!n?.app?.isMultiCluster) {
            return false;
        }
        const o = module26(n, `clusterConfig.${e}.ksVersion`);
        return compareVersion(o, "3.4.0") < 0;
    };
    this.getStoreByCluster = function(e) {
        if (_this.isCalico(e)) {
            return module2429;
        }
        return module1103;
    };
    this.setStoreByCluster = function(e) {
        const t = _this.getStoreByCluster(e);
        _this.setStore(new t);
    };
    if (t) {
        this.store = t;
    }
});
