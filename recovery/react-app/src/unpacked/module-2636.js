import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-73.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-22.js";
import "./module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import "./module-31.js";
import "./module-58.js";
import module240 from "./module-240.js";
import module788 from "components/Base/Modal";
import module823 from "components/Modals/Delete";
import module1545 from "./module-1545.js";
import module2637 from "./module-2637.js";
const h = {
    "batch.deploy.app.create": {
        on: function({ store, module, success: _success, ...rest }) {
            var l = module788.open({
                onOk: function() {
                    return module788.close(l);
                },
                store,
                module,
                title: t("EDGE_APP_TEMPLATE_PL"),
                modal: module2637,
                ...rest
            });
        }
    },
    "app.template.deploy": {
        on: function({ store, module, formTemplate, success, cluster, namespace, ...rest }) {
            var E = module788.open({
                onOk: async (a)=>{
                    await store.create({
                        namespace,
                        cluster
                    }, a);
                    module240.success({
                        content: t("CREATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                    module788.close(E);
                },
                store,
                module,
                namespace,
                formTemplate,
                modal: module1545,
                cluster,
                ...rest
            });
        }
    },
    "app.deploy.batch.delete": {
        on: function({ store, success, onOk, selectedRowKeys, ...rest }) {
            var m = module788.open({
                onOk: async ()=>{
                    await onOk();
                    module788.close(m);
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                    if (success) {
                        success();
                    }
                },
                modal: module823,
                resource: selectedRowKeys.join(", "),
                title: t("DELETE_TITLE_PL", {
                    type: t("EDGE_APPLICATION")
                }),
                store,
                ...rest
            });
        }
    }
};
export default h;
