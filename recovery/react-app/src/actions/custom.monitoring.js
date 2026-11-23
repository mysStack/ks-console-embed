import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module14 from "unpacked/module-14.js";
import module240 from "unpacked/module-240.js";
import module788 from "components/Base/Modal";
import module435 from "utils/form.templates";
import module2755 from "pages/projects/containers/CustomMonitoring/EditDashborad";
import module2857 from "pages/projects/containers/CustomMonitoring/CreateDashborad";
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
