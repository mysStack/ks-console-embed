import "./module-12.js";
import "./module-135.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-24.js";
import "./module-64.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-31.js";
import "./module-58.js";
import module788 from "./module-788.js";
import module240 from "./module-240.js";
import module3292 from "./module-3292.js";
import module1284 from "./module-1284.js";
const p = {
    "update.platformInfo.theme": {
        on: function({ store, success, cluster: _cluster, workspace: _workspace, ...rest }) {
            var l = module788.open({
                onOk: function({ title, description, logo, favicon, background }) {
                    const d = {
                        title,
                        description,
                        logo: logo.replace(/\/theme\/static\/images\//g, ""),
                        favicon: favicon.replace(/\/theme\/static\/images\//g, ""),
                        background: background.replace(/\/theme\/static\/images\//g, "")
                    };
                    store.updateTheme(d).then(()=>{
                        module788.close(l);
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                modal: module3292,
                store,
                ...rest
            });
        }
    },
    "platformInfo.resetTheme": {
        on: function({ store, success, cluster: _cluster, workspace: _workspace, ...rest }) {
            var l = module788.open({
                onOk: function() {
                    store.updateTheme({
                        title: "",
                        logo: "",
                        favicon: "",
                        background: "",
                        description: ""
                    }).then(()=>{
                        module788.close(l);
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                modal: module1284,
                title: t("RESET_PLATFORM_INFO"),
                desc: t("RESET_PLATFORM_INFO_TIP"),
                store,
                ...rest
            });
        }
    }
};
export default p;
