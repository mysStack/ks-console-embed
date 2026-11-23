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
import module31 from "./module-31.js";
import "./module-58.js";
import module14 from "./module-14.js";
import module26 from "./module-26.js";
import module189 from "./module-189.js";
import module74 from "./module-74.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import module826 from "./module-826.js";
import module2975 from "./module-2975.js";
import { MODULE_KIND_MAP, OMIT_TOTAL_REPLICAS } from "./module-72.js";
import module435 from "./module-435.js";
import module902 from "./module-902.js";
import steps from "./module-1687.js";
const S = {
    "microservice.create": {
        on: function({ store, cluster, namespace, module, success, isFederated, supportGpuSelect = false, ...rest }) {
            const C = MODULE_KIND_MAP[module];
            const formTemplate = module31({}, C, module435[module]({
                namespace
            }));
            var R = module788.open({
                onOk: function(e) {
                    const l = (e = module189(e, OMIT_TOTAL_REPLICAS(C)))[C];
                    if (l) {
                        const o = module26(l, "metadata.name");
                        module74(l, 'metadata.labels["springcloud.kubesphere.io/app"]', o);
                        module74(l, 'spec.template.metadata.labels["springcloud.kubesphere.io/app"]', o);
                        store.create(l, {
                            cluster,
                            namespace
                        }).then(()=>{
                            module788.close(R);
                            module240.success({
                                content: t("CREATE_SUCCESSFUL")
                            });
                            if (success) {
                                success();
                            }
                            module902.delete(`${module}_create_form`);
                        });
                    }
                },
                steps,
                module,
                cluster,
                namespace,
                name: C,
                isFederated,
                formTemplate,
                modal: module826,
                store,
                supportGpuSelect,
                maxNameLength: 63,
                ...rest
            });
        }
    },
    "microservice.instance.weight.edit": {
        on: function({ store, namespace, module: _module, cluster, detail, success, ...rest }) {
            var i = module788.open({
                modal: module2975,
                onOk: function(e) {
                    store.update(detail, e).then(()=>{
                        module788.close(i);
                        module240.success({
                            content: t("MODIFY_SUCCESSFUL")
                        });
                        if (success) {
                            success(e);
                        }
                    });
                },
                detail: module14.toJS(detail._originData),
                store,
                namespace,
                cluster,
                ...rest
            });
        }
    }
};
export default S;
