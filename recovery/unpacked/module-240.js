import "./module-15.js";
import module186 from "./module-186.js";
const o = {
    warning: function(e) {
        if (window.$wujie) {
            return window.$wujie.bus.$emit("notify", {
                message: e,
                type: "warning"
            });
        }
        return module186.Notify.warning(e);
    },
    success: function(e) {
        if (window.$wujie) {
            return window.$wujie.bus.$emit("notify", {
                message: e,
                type: "success"
            });
        }
        return module186.Notify.success(e);
    },
    error: function(e) {
        if (window.$wujie) {
            return window.$wujie.bus.$emit("notify", {
                message: e,
                type: "error"
            });
        }
        return module186.Notify.error(e);
    },
    info: function(e) {
        if (window.$wujie) {
            return window.$wujie.bus.$emit("notify", {
                message: e,
                type: "info"
            });
        }
        return module186.Notify.info(e);
    }
};
export default o;
