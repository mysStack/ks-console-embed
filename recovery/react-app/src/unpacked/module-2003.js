import "unpacked/module-15.js";
import module36 from "unpacked/module-36.js";
import { compareVersion } from "utils/index";
import module26 from "unpacked/module-26.js";
import "unpacked/module-1314.js";
import module1175 from "unpacked/module-1175.js";
export default (function e(t) {
    const _this = this;
    module36(this, e);
    this.store = null;
    this.setStore = function(e) {
        _this.store = e;
    };
    this.isCalico = function(e) {
        const t = globals.app.isMultiCluster ? module26(globals, `clusterConfig.${e}.ksVersion`) : module26(globals, "ksConfig.ksVersion");
        return compareVersion(t, "3.4.1") >= 0;
    };
    this.isOutdated = function(e) {
        if (!globals.app.isMultiCluster) {
            return false;
        }
        const t = module26(globals, `clusterConfig.${e}.ksVersion`);
        return compareVersion(t, "3.4.0") < 0;
    };
    this.getStoreByCluster = function(e) {
        return module1175;
    };
    this.setStoreByCluster = function(e) {
        const t = _this.getStoreByCluster(e);
        _this.setStore(new t);
    };
    if (t) {
        this.store = t;
    }
});
