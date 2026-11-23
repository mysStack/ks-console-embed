import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-138.js";
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
import module74 from "./module-74.js";
import module136 from "./module-136.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import module3320 from "./module-3320.js";
import module1730 from "./module-1730.js";
import module3323 from "./module-3323.js";
import module435 from "./module-435.js";
const E = {
    "role.create": {
        on: function({ store, cluster, namespace, workspace, success, devops, ...rest }) {
            const store_module = store.module;
            var v = module788.open({
                onOk: function(e) {
                    if (e) {
                        if (devops) {
                            e.metadata.namespace = devops;
                        }
                        store.create(e, {
                            cluster,
                            namespace,
                            workspace,
                            devops
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
                        module788.close(v);
                    }
                },
                modal: module3320,
                store,
                module: store_module,
                cluster,
                namespace,
                workspace,
                formTemplate: module435[store_module]({
                    namespace
                }),
                ...rest
            });
        }
    },
    "role.edit": {
        on: function({ store, detail, success, ...rest }) {
            const store_module = store.module;
            const formTemplate = Object.assign(module435[store_module]({
                namespace: rest.namespace
            }), module136(detail._originData));
            module74(formTemplate, "metadata.resourceVersion", detail.resourceVersion);
            var v = module788.open({
                onOk: function(e) {
                    if (e) {
                        delete formTemplate.roleTemplates;
                        if (formTemplate?.metadata?.annotations) {
                            delete formTemplate.metadata.annotations["iam.kubesphere.io/rego-override"];
                        }
                        module74(formTemplate, "aggregationRoleTemplates.templateNames", e);
                        store.update(detail, formTemplate).then(()=>{
                            module788.close(v);
                            module240.success({
                                content: t("UPDATE_SUCCESSFUL")
                            });
                            if (success) {
                                success();
                            }
                        });
                    } else {
                        module788.close(v);
                    }
                },
                modal: module1730,
                store,
                module: store_module,
                edit: true,
                formTemplate,
                ...rest
            });
        }
    },
    "role.delete": {
        on: function({ store, detail, success, ...rest }) {
            var u = module788.open({
                onOk: function() {
                    store.delete(detail).then(()=>{
                        module788.close(u);
                        module240.success({
                            content: t("DELETED_SUCCESSFULLY")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                modal: module3323,
                module: store.module,
                detail,
                store,
                ...rest
            });
        }
    }
};
export default E;
