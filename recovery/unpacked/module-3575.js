import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-31.js";
import "./module-58.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import module63 from "./module-63.js";
import module3576 from "./module-3576.js";
import module823 from "./module-823.js";
const m = {
    "whizard.storage.delete": {
        on: function({ store, detail: _detail, success, ...rest }) {
            const l = ()=>{
                module788.close(i);
                module240.success({
                    content: t("DISABLE_SUCCESSFUL")
                });
                if (success) {
                    success();
                }
            };
            var i = module788.open({
                onOk: function() {
                    if (module63(store.storage.data)) {
                        l();
                    } else {
                        store.deleteStorage().then(()=>{
                            l();
                        });
                    }
                },
                store,
                modal: module823,
                title: t("DISABLE_STORAGE"),
                desc: t("DISABLE_STORAGE_DESC"),
                type: "STORAGE",
                ...rest
            });
        }
    },
    "whizard.create": {
        on: function({ store, success, ...rest }) {
            var l = module788.open({
                onOk: function(e) {
                    store.updateConfigs(e).then(()=>{
                        module788.close(l);
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                store,
                modal: module3576,
                icon: "cogwheel",
                title: t("COMPONENT_PARAMETER_CONFIG"),
                type: "STORAGE",
                ...rest
            });
        }
    }
};
export default m;
