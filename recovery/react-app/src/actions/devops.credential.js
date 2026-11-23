import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-196.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import module788 from "components/Base/Modal";
import module240 from "unpacked/module-240.js";
import modal from "components/Modals/CredentialCreate";
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
