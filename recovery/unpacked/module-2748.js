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
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import module435 from "./module-435.js";
import module2749 from "./module-2749.js";
import module2751 from "./module-2751.js";
import module2753 from "./module-2753.js";
const E = {
    "configuration.create": {
        on: function({ store, cluster, namespace, module, success, ...rest }) {
            var m = module788.open({
                onOk: function(e) {
                    if (e) {
                        store.create(e, {
                            cluster,
                            namespace: namespace || module26(e, "metadata.namespace")
                        }).then(()=>{
                            module788.close(m);
                            module240.success({
                                content: t("CREATE_SUCCESSFUL")
                            });
                            if (success) {
                                success(e);
                            }
                        });
                    }
                },
                module,
                cluster,
                namespace,
                modal: module2749,
                formTemplate: module435[module]({
                    namespace
                }),
                store,
                okText: t("CREATE"),
                ...rest
            });
        }
    },
    "configuration.edit": {
        on: function({ store, detail, success, ...rest }) {
            var u = module788.open({
                onOk: function(e) {
                    module74(e, "metadata.resourceVersion", detail.resourceVersion);
                    store.update(detail, e).then(()=>{
                        module788.close(u);
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                store,
                detail,
                modal: module2751,
                ...rest
            });
        }
    },
    "configuration.copy": {
        on: function({ cluster, namespace, store, detail, success, ...rest }) {
            var p = module788.open({
                onOk: function(e) {
                    store.create(e, {
                        cluster: cluster || module26(detail, "cluster"),
                        namespace: namespace || module26(detail, "namespace")
                    }).then(()=>{
                        module788.close(p);
                        module240.success({
                            content: t("COPY_SUCCESSFUL")
                        });
                        if (success) {
                            success(e);
                        }
                    });
                },
                store,
                detail,
                modal: module2749,
                ...rest
            });
        }
    },
    "configuration.rollback": {
        on: function({ store, detail, success, ...rest }) {
            var u = module788.open({
                onOk: function(e) {
                    store.rollBack(detail, e).then(()=>{
                        module788.close(u);
                        module240.success({
                            content: t("ROLLBACK_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                detail,
                modal: module2753,
                store,
                ...rest
            });
        }
    }
};
export default E;
