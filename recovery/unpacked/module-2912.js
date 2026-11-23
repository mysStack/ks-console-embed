import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-196.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-41.js";
import "./module-44.js";
import "./module-31.js";
import "./module-58.js";
import module788 from "./module-788.js";
import module240 from "./module-240.js";
import modal from "./module-1181.js";
const m = {
    "devops.credential.create": {
        on: function({ store, success, cluster, workspace, devops, formTemplate, ...rest }) {
            var E = module788.open({
                onOk: async (a, o)=>{
                    await store.handleCreate(a, {
                        devops,
                        cluster
                    }).finally(()=>{
                        if (o) {
                            o();
                        }
                    });
                    module788.close(E);
                    module240.success({
                        content: t("CREATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                cluster,
                workspace,
                devops,
                formTemplate,
                modal,
                ...rest
            });
        }
    },
    "devops.credential.edit": {
        on: function({ store, success, cluster, workspace, devops, formTemplate, ...rest }) {
            var E = module788.open({
                onOk: async (a, o)=>{
                    await store.updateCredential(a, {
                        devops,
                        cluster
                    }).finally(()=>{
                        if (o) {
                            o();
                        }
                    });
                    module788.close(E);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                cluster,
                workspace,
                devops,
                formTemplate,
                modal,
                ...rest
            });
        }
    }
};
export default m;
