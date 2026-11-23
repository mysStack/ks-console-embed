import "./module-12.js";
import "./module-135.js";
import "./module-210.js";
import "./module-11.js";
import "./module-6.js";
import "./module-200.js";
import "./module-30.js";
import "./module-48.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-17.js";
import "./module-38.js";
import "./module-7.js";
import "./module-32.js";
import "./module-249.js";
import "./module-45.js";
import "./module-118.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-24.js";
import "./module-193.js";
import "./module-31.js";
import "./module-58.js";
import module240 from "./module-240.js";
import module788 from "components/Base/Modal";
import module826 from "components/Modals/Create";
import module2868 from "./module-2868.js";
import steps from "./module-2902.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module435 from "utils/form.templates";
const y = {
    "customScaling.create": {
        on: function({ store, cluster, namespace, module, isFederated: _isFederated, success, ...rest }) {
            const formTemplate = module435[module]({
                namespace
            });
            var v = module788.open({
                onOk: function(e) {
                    if (!e) {
                        return false;
                    }
                    store.create(b(e), {
                        cluster,
                        namespace
                    }).then(()=>{
                        module788.close(v);
                        module240.success({
                            content: t("CREATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                module,
                cluster,
                namespace,
                formTemplate,
                steps,
                modal: module826,
                store,
                ...rest
            });
        }
    },
    "customScaling.edit.setting": {
        on: function({ store, cluster, namespace, module, detail, isFederated: _isFederated, success, ...rest }) {
            var p = module788.open({
                onOk: function(e) {
                    if (!e) {
                        return false;
                    }
                    store.update(detail, b(e)).then(()=>{
                        module788.close(p);
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                module,
                cluster,
                namespace,
                detail,
                modal: module2868,
                store,
                ...rest
            });
        }
    }
};
export default y;
const g = [
    "spec.minReplicaCount",
    "spec.maxReplicaCount",
    "spec.pollingInterval",
    "spec.cooldownPeriod"
];
var b = (e)=>{
    for (const r of g){
        if (module26(e, r) === "") {
            module74(e, r, undefined);
        }
    }
    return e;
};
