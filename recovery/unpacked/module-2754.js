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
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module14 from "./module-14.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import module435 from "./module-435.js";
import module2755 from "./module-2755.js";
import module2857 from "./module-2857.js";
const E = {
    "custom.monitoring.create": {
        on: function({ store, cluster, namespace, module, success, ...rest }) {
            const formTemplate = module435[module]({
                namespace
            });
            var v = module788.open({
                onOk: function(e) {
                    if (e) {
                        if (e.type === "grafana") {
                            delete e.type;
                            store.createGrafana(e, {
                                cluster,
                                namespace: namespace || module26(e, "metadata.namespace")
                            }).then(()=>{
                                module788.close(v);
                                module240.success({
                                    content: t("CREATE_SUCCESSFUL")
                                });
                                if (success) {
                                    success();
                                }
                            });
                        } else {
                            store.create(e, {
                                cluster,
                                namespace: namespace || module26(e, "metadata.namespace")
                            }).then(()=>{
                                module788.close(v);
                                module240.success({
                                    content: t("CREATE_SUCCESSFUL")
                                });
                                if (success) {
                                    success();
                                }
                            });
                        }
                    }
                },
                module,
                cluster,
                namespace,
                modal: module2857,
                formTemplate,
                store,
                ...rest
            });
        }
    },
    "custom.monitoring.edit": {
        on: function({ store, detail, cluster, namespace, success, ...rest }) {
            module788.open({
                onOk: function(e) {
                    module74(e, "metadata.resourceVersion", detail.resourceVersion);
                    store.update(detail, e).then(()=>{
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                store,
                cluster,
                namespace,
                data: module14.toJS(detail._originData),
                modal: module2755,
                ...rest
            });
        }
    }
};
export default E;
