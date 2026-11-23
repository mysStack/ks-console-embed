import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-73.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-24.js";
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import module14 from "unpacked/module-14.js";
import module240 from "unpacked/module-240.js";
import module788 from "components/Base/Modal";
import module2971 from "components/Modals/InviteMember";
import module1686 from "components/Modals/ModifyMember";
import module823 from "components/Modals/Delete";
const v = {
    "member.invite": {
        on: function({ store, cluster, workspace, namespace, success, devops, ...rest }) {
            var p = module788.open({
                onOk: function(e) {
                    store.create(e, {
                        cluster,
                        workspace,
                        namespace: namespace ?? devops
                    }).then(()=>{
                        module788.close(p);
                        module240.success({
                            content: t("INVITED_SUCCESSFULLY")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                modal: module2971,
                store,
                cluster,
                workspace,
                namespace,
                devops,
                ...rest
            });
        }
    },
    "member.edit": {
        on: function({ store, module, detail, cluster, workspace, namespace, success, devops, ...rest }) {
            var h = module788.open({
                onOk: function(roleRef) {
                    store.update({
                        ...detail,
                        ...cluster,
                        workspace,
                        namespace: namespace ?? devops
                    }, {
                        username: detail.name,
                        roleRef
                    }).then(()=>{
                        module788.close(h);
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                modal: module1686,
                store,
                module,
                ...rest
            });
        }
    },
    "member.remove": {
        on: function({ store, detail, cluster, workspace, namespace, success, devops, ...rest }) {
            var v = module788.open({
                onOk: function() {
                    store.delete({
                        ...detail,
                        cluster,
                        workspace,
                        namespace: namespace ?? devops
                    }).then(()=>{
                        module788.close(v);
                        module240.success({
                            content: t("DELETED_SUCCESSFULLY")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                modal: module823,
                title: t("REMOVE_MEMBER"),
                desc: t.html("REMOVE_MEMBER_TIP", {
                    resource: detail.name
                }),
                resource: detail.name,
                store,
                ...rest
            });
        }
    },
    "member.remove.batch": {
        on: function({ store, cluster, workspace, namespace, success, devops, ...rest }) {
            const rowKeys = module14.toJS(store.list.selectedRowKeys);
            const resource = rowKeys.join(", ");
            var E = module788.open({
                onOk: function() {
                    store.batchDelete({
                        rowKeys,
                        cluster,
                        workspace,
                        namespace,
                        devops
                    }).then(()=>{
                        module788.close(E);
                        module240.success({
                            content: t("DELETED_SUCCESSFULLY")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                modal: module823,
                title: resource.split(", ").length === 1 ? t("REMOVE_MEMBER") : t("REMOVE_MULTIPLE_MEMBERS"),
                desc: resource.split(", ").length === 1 ? t.html("REMOVE_MEMBER_TIP", {
                    resource
                }) : t.html("REMOVE_MULTIPLE_MEMBERS_TIP", {
                    resource
                }),
                resource,
                store,
                ...rest
            });
        }
    }
};
export default v;
