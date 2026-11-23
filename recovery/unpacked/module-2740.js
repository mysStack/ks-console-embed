import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import module31 from "./module-31.js";
import "./module-58.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import module826 from "./module-826.js";
import module2741 from "./module-2741.js";
import { MODULE_KIND_MAP } from "./module-72.js";
import module435 from "./module-435.js";
import module902 from "./module-902.js";
import steps from "./module-2747.js";
const g = {
    "configmap.create": {
        on: function({ store, cluster, namespace, module, isFederated, success, ...rest }) {
            const b = MODULE_KIND_MAP[module];
            const formTemplate = module31({}, b, module435[module]({
                namespace
            }));
            if (isFederated) {
                Object.keys(formTemplate).forEach((kind)=>{
                    formTemplate[kind] = module435.federated({
                        data: formTemplate[kind],
                        clusters: rest.projectDetail.clusters.map((e)=>e.name),
                        kind
                    });
                });
            }
            var _ = module788.open({
                onOk: function(e) {
                    const l = module26(e, b);
                    if (l) {
                        store.create(l, {
                            cluster,
                            namespace: namespace || module26(l, "metadata.namespace")
                        }).then(()=>{
                            module788.close(_);
                            module240.success({
                                content: t("CREATE_SUCCESSFUL")
                            });
                            if (success) {
                                success(l);
                            }
                            module902.delete(`${module}_create_form`);
                        });
                    }
                },
                module,
                cluster,
                namespace,
                name: b,
                isFederated,
                formTemplate,
                steps,
                modal: module826,
                store,
                ...rest
            });
        }
    },
    "configmap.edit": {
        on: function({ store, detail, success, ...rest }) {
            var u = module788.open({
                onOk: function(e) {
                    module74(e, "metadata.resourceVersion", detail.resourceVersion);
                    if (rest.isFederated) {
                        module74(e, "apiVersion", store.version);
                        module74(e, "kind", "FederatedConfigMap");
                    }
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
                modal: module2741,
                ...rest
            });
        }
    }
};
export default g;
