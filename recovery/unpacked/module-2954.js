import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-31.js";
import "./module-58.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import module14 from "./module-14.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import module826 from "./module-826.js";
import module2955 from "./module-2955.js";
import module435 from "./module-435.js";
import module902 from "./module-902.js";
import steps from "./module-2957.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module60 from "./module-60.js";
import module74 from "./module-74.js";
const S = (e, t)=>{
    let a = module26(e, "spec.config.environment");
    if (module60(a)) {
        a = a.filter((e)=>t(e));
    }
    return a;
};
const _ = {
    "imagebuilder.create": {
        on: function({ store, cluster, namespace, module, success, ...rest }) {
            const formTemplate = module435[module]({
                namespace
            });
            var E = module788.open({
                onOk: function(e) {
                    if (e) {
                        const o = S(e, (e)=>!module63(e));
                        module74(e, "spec.config.environment", o);
                        store.create(e, {
                            cluster,
                            namespace
                        }).then(()=>{
                            module788.close(E);
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
                module,
                cluster,
                namespace,
                name: "IMAGE_BUILDER",
                formTemplate,
                steps,
                modal: module826,
                noCodeEdit: true,
                store,
                ...rest
            });
        }
    },
    "imagebuilder.rerun": {
        on: function({ store, detail, success, ...rest }) {
            var l = module788.open({
                onOk: function(e) {
                    const n = S(e, (e)=>!module63(e));
                    module74(e, "spec.config.environment", n);
                    store.updateBuilder(e, detail).then(()=>{
                        module788.close(l);
                        if (success) {
                            success();
                        }
                    });
                },
                detail: module14.toJS(detail._originData),
                modal: module2955,
                cluster: detail.cluster,
                namespace: detail.namespace,
                store,
                ...rest
            });
        }
    }
};
export default _;
