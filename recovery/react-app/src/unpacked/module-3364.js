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
import module14 from "./module-14.js";
import module74 from "./module-74.js";
import module26 from "./module-26.js";
import module240 from "./module-240.js";
import module788 from "components/Base/Modal";
import module826 from "components/Modals/Create";
import module3365 from "./module-3365.js";
import module435 from "utils/form.templates";
import steps from "./module-3368.js";
const y = {
    "servicerouting.create": {
        on: function({ store, namespace, module, cluster, gateway, success, ...rest }) {
            var y = module788.open({
                modal: module826,
                onOk: function(e) {
                    const n = module26(e, "metadata.name");
                    module74(e, "spec.routes[0].id", n);
                    store.create(e, {
                        cluster,
                        namespace
                    }).then(()=>{
                        module788.close(y);
                        module240.success({
                            content: t("CREATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                steps,
                formTemplate: module435[module]({
                    namespace,
                    gateway
                }),
                store,
                namespace,
                cluster,
                ...rest
            });
        }
    },
    "servicerouting.edit": {
        on: function({ store, namespace, module: _module, cluster, detail, title = t("EDIT_MICROSERVICE_ROUTE"), success, ...rest }) {
            var v = module788.open({
                modal: module3365,
                onOk: function(e) {
                    store.update(detail, e).then(()=>{
                        module788.close(v);
                        module240.success({
                            content: t("MODIFY_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                title,
                detail: module14.toJS(detail._originData),
                store,
                namespace,
                cluster,
                isEditMode: true,
                ...rest
            });
        }
    }
};
export default y;
