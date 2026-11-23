import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-16.js";
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
import "./module-44.js";
import "./module-31.js";
import "./module-58.js";
import "./module-553.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import module3092 from "./module-3092.js";
import module3104 from "./module-3104.js";
import module3105 from "./module-3105.js";
import module823 from "./module-823.js";
import module3107 from "./module-3107.js";
import module3132 from "./module-3132.js";
import module1711 from "./module-1711.js";
import module1575 from "./module-1575.js";
import module3141 from "./module-3141.js";
import module1713 from "./module-1713.js";
import module3153 from "./module-3153.js";
import module3163 from "./module-3163.js";
import module3165 from "./module-3165.js";
import module3167 from "./module-3167.js";
import module3169 from "./module-3169.js";
import module3170 from "./module-3170.js";
import module3172 from "./module-3172.js";
import module3173 from "./module-3173.js";
import module3177 from "./module-3177.js";
import module1374 from "./module-1374.js";
import module3179 from "./module-3179.js";
import module3203 from "./module-3203.js";
import module3204 from "./module-3204.js";
import module3205 from "./module-3205.js";
import module3206 from "./module-3206.js";
import module3207 from "./module-3207.js";
import module3209 from "./module-3209.js";
import { HANDLE_TYPE_TO_SHOW } from "./module-1048.js";
const B = {
    "openpitrix.app.create": {
        on: function({ store, cluster, namespace, ...rest }) {
            var l = module788.open({
                onOk: function() {
                    module788.close(l);
                },
                store,
                cluster,
                namespace,
                modal: module3092,
                ...rest
            });
        }
    },
    "openpitrix.app.edit": {
        on: function({ store, detail, success, ...rest }) {
            var o = module788.open({
                onOk: function(e) {
                    store.patch(detail, e).then(()=>{
                        module788.close(o);
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
                modal: module3104,
                ...rest
            });
        }
    },
    "openpitrix.app.template.edit": {
        on: function({ store, detail, success, ...rest }) {
            var o = module788.open({
                onOk: function(e) {
                    store.upgrade(e, detail).then(()=>{
                        module788.close(o);
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
                modal: module3105,
                ...rest
            });
        }
    },
    "openpitrix.repo.add": {
        on: function({ store, workspace, success, ...rest }) {
            var s = module788.open({
                onOk: async (t)=>{
                    await store.create({
                        ...t,
                        workspace,
                        app_default_status: "active"
                    });
                    module788.close(s);
                    if (success) {
                        success();
                    }
                },
                store,
                modal: module3107,
                workspace,
                ...rest
            });
        }
    },
    "openpitrix.repo.edit": {
        on: function({ store, detail, workspace, success, ...rest }) {
            var i = module788.open({
                onOk: async (t)=>{
                    await store.update(t);
                    module788.close(i);
                    if (success) {
                        success();
                    }
                },
                store,
                detail,
                modal: module3107,
                workspace,
                ...rest
            });
        }
    },
    "openpitrix.template.create": {
        on: function({ store, success, ...rest }) {
            var n = module788.open({
                onOk: function() {
                    module788.close(n);
                    if (success) {
                        success();
                    }
                },
                store,
                modal: module3132,
                ...rest
            });
        }
    },
    "openpitrix.template.upload": {
        on: function({ store, workspace, success, ...rest }) {
            var d = module788.open({
                onOk: async (a)=>{
                    await store.create({
                        ...a,
                        workspace
                    });
                    module240.success({
                        content: t("UPLOAD_SUCCESSFUL")
                    });
                    module788.close(d);
                    if (success) {
                        success();
                    }
                },
                store,
                modal: module1711,
                title: t("UPLOAD_HELM_TITLE"),
                description: t("UPLOAD_HELM_CHART_DESC"),
                icon: "templet",
                type: "CREATE_APP",
                workspace,
                ...rest
            });
        }
    },
    "openpitrix.template.edit": {
        on: function({ store, success, ...rest }) {
            var s = module788.open({
                onOk: async (a)=>{
                    await store.update(a);
                    module788.close(s);
                    module240.success({
                        content: t("MODIFY_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                modal: module1575,
                success,
                ...rest
            });
        }
    },
    "openpitrix.template.addVersion": {
        on: function({ store, versionStore, workspace, success, ...rest }) {
            var p = module788.open({
                onOk: async (a)=>{
                    await versionStore.create(a);
                    module240.success({
                        content: t("ADD_VERSION_SUCCESSFUL")
                    });
                    module788.close(p);
                    if (success) {
                        success();
                    }
                },
                store,
                modal: module1711,
                title: t("UPLOAD_HELM_TITLE"),
                description: t("UPLOAD_HELM_CHART_DESC"),
                icon: "templet",
                type: "CREATE_APP",
                workspace,
                ...rest
            });
        }
    },
    "openpitrix.template.deploy": {
        on: function({ store, success, ...rest }) {
            var s = module788.open({
                onOk: async (a)=>{
                    let namespace;
                    let cluster;
                    let workspace;
                    let p;
                    ({ namespace, cluster, workspace, ...p } = a);
                    await store.deploy(p, {
                        workspace,
                        namespace,
                        cluster
                    });
                    module788.close(s);
                    module240.success({
                        content: `${t("DEPLOYED_SUCCESSFUL")}`
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                modal: module3141,
                ...rest
            });
        }
    },
    "openpitrix.template.delete": {
        on: function({ store, detail, versions, success, ...rest }) {
            const detail_name = detail.name;
            let desc = t.html("DELETE_APP_TEMPLATE_DESC", {
                resource: detail_name
            });
            if (versions.length) {
                desc = <span>{t.html("DELETE_APP_TEMPLATE_VERSIONS_DESC", {
                    resource: detail_name
                })}</span>;
            }
            var E = module788.open({
                onOk: async ()=>{
                    await store.delete(detail);
                    module788.close(E);
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                desc,
                type: "APP_TEMPLATE",
                resource: detail_name,
                modal: module823,
                ...rest
            });
        }
    },
    "openpitrix.template.action": {
        on: function({ store, detail, handleType, success, ...rest }) {
            var p = module788.open({
                onOk: async ()=>{
                    let a;
                    await store.handle({
                        action: handleType,
                        app_id: detail.app_id,
                        app_version_types: detail.app_version_types
                    });
                    a = HANDLE_TYPE_TO_SHOW[handleType] || handleType;
                    module788.close(p);
                    module240.success({
                        content: `${t(`${a.toUpperCase()}_SUCCESSFUL`)}`
                    });
                    if (success) {
                        success();
                    }
                },
                content: t.html(`APP_${(handleType || "suspend").toUpperCase()}_TIP`, {
                    name: detail.name
                }),
                modal: module1713,
                store,
                ...rest
            });
        }
    },
    "openpitrix.template.review": {
        on: function({ store, detail, type, success, onReject, ...rest }) {
            var m = module788.open({
                onOk: async ()=>{
                    let a;
                    let o;
                    a = detail.app_id;
                    o = detail.version_id;
                    await store.handle({
                        app_id: a,
                        version_id: o,
                        action: "pass"
                    });
                    module788.close(m);
                    module240.success(t("RELEASE_SUCCESSFUL"));
                    if (success) {
                        success();
                    }
                },
                onReject: function() {
                    module788.close(m);
                    onReject();
                },
                icon: "safe-notice",
                title: t("APP_DETAILS"),
                description: t("APP_DETAILS_DESC"),
                canHandle: type === "unprocessed",
                modal: module3153,
                detail,
                store,
                ...rest
            });
        }
    },
    "openpitrix.template.reject": {
        on: function({ store, detail, type, success, ...rest }) {
            var p = module788.open({
                onOk: async (a)=>{
                    let o;
                    let u;
                    o = detail.app_id;
                    u = detail.version_id;
                    await store.handle({
                        app_id: o,
                        version_id: u,
                        action: "reject",
                        ...a
                    });
                    module788.close(p);
                    module240.success(t("REJECT_SUCCESSFUL"));
                    if (success) {
                        success();
                    }
                },
                icon: "safe-notice",
                title: t("REJECTION_REASON"),
                description: t("REJECT_REASON_DESC"),
                canHandle: type === "unprocessed",
                versionId: detail.version_id || "",
                modal: module3163,
                store,
                ...rest
            });
        }
    },
    "openpitrix.category.edit": {
        on: function({ store, detail, names, success, ...rest }) {
            var p = module788.open({
                onOk: async (a)=>{
                    let content;
                    if (detail.category_id) {
                        await store.update(a);
                        content = `${t("MODIFY_SUCCESSFUL")}`;
                    } else {
                        await store.create(a);
                        content = t("CREATE_SUCCESSFUL");
                    }
                    module788.close(p);
                    module240.success({
                        content
                    });
                    if (success) {
                        success();
                    }
                },
                title: t("CATEGORY"),
                icon: "tag",
                detail,
                categoryNames: names,
                modal: module3165,
                store,
                ...rest
            });
        }
    },
    "openpitrix.category.delete": {
        on: function({ store, detail, success, ...rest }) {
            var d = module788.open({
                onOk: async ()=>{
                    await store.delete(detail);
                    module788.close(d);
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                    if (success) {
                        success();
                    }
                },
                desc: t.html("DELETE_CATEGORY_DESC", {
                    name: detail.name
                }),
                modal: module823,
                store,
                ...rest
            });
        }
    },
    "openpitrix.category.ajust": {
        on: function({ store, success, ...rest }) {
            var s = module788.open({
                onOk: async (a)=>{
                    await store.adjustCategory(a);
                    module788.close(s);
                    module240.success({
                        content: `${t("CHANGED_SUCCESSFULLY")}`
                    });
                    if (success) {
                        success();
                    }
                },
                title: t("CHANGE_CATEGORY"),
                icon: "tag",
                modal: module3167,
                store,
                ...rest
            });
        }
    },
    "openpitrix.db.adjustCapacity": {
        on: function({ store, success, icon, ...rest }) {
            var d = module788.open({
                onOk: async ()=>{
                    module788.close(d);
                    module240.success({
                        content: `${t("MODIFY_SUCCESSFUL")}`
                    });
                    if (success) {
                        success();
                    }
                },
                title: t("EXPAND_VOLUME"),
                icon,
                modal: module3169,
                store,
                ...rest
            });
        }
    },
    "openpitrix.db.createDBNode": {
        on: function({ store, success, icon, ...rest }) {
            var d = module788.open({
                onOk: async (a)=>{
                    module788.close(d);
                    if (a) {
                        module240.success({
                            content: `${t("DELETED_SUCCESSFULLY")}`
                        });
                    } else {
                        module240.success({
                            content: `${t("CREATE_SUCCESSFUL")}`
                        });
                    }
                    if (success) {
                        success();
                    }
                },
                title: t("SCALE_OUT"),
                icon,
                modal: module3170,
                store,
                ...rest
            });
        }
    },
    "openpitrix.db.adjustSpecification": {
        on: function({ store, success, icon, ...rest }) {
            var d = module788.open({
                onOk: async (a)=>{
                    module788.close(d);
                    module240.success({
                        content: `${t("MODIFY_SUCCESSFUL")}`
                    });
                    if (success) {
                        success(a);
                    }
                },
                title: t("ADJUST_RESOURCES"),
                icon,
                modal: module3172,
                store,
                ...rest
            });
        }
    },
    "openpitrix.db.createAccount": {
        on: function({ store, success, icon, content, ...rest }) {
            var d = module788.open({
                onOk: async ()=>{
                    module788.close(d);
                    if (content) {
                        module240.success({
                            content
                        });
                    }
                    if (success) {
                        success();
                    }
                },
                onCancel: function() {
                    module788.close(d);
                },
                icon,
                modal: module3173,
                store,
                ...rest
            });
        }
    },
    "openpitrix.db.app.edit": {
        on: function({ store, detail, success, ...rest }) {
            var o = module788.open({
                onOk: function(e) {
                    store.patch(detail, e).then(()=>{
                        module788.close(o);
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
                modal: module3177,
                ...rest
            });
        }
    },
    "openpitrix.db.app.update": {
        on: function({ store, detail, success, ...rest }) {
            var o = module788.open({
                onOk: function() {
                    store.updateVersion(detail).then(()=>{
                        module788.close(o);
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
                modal: module3209,
                ...rest
            });
        }
    },
    "openpitrix.db.app.create": {
        on: function({ store, detail, success, ...rest }) {
            var o = module1374.open({
                onOk: function() {
                    module788.close(o);
                    module240.success({
                        content: `${t("CREATE_SUCCESSFUL")}`
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                detail,
                modal: module3179,
                ...rest
            });
        }
    },
    "openpitrix.db.backup.create": {
        on: function({ store, detail, success, ...rest }) {
            var d = module1374.open({
                onOk: async (a)=>{
                    await store.add({
                        ...rest,
                        ...a
                    });
                    module788.close(d);
                    module240.success({
                        content: `${t("CREATE_SUCCESSFUL")}`
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                detail,
                modal: module3203,
                ...rest
            });
        }
    },
    "openpitrix.db.backup.auto": {
        on: function({ store, detail, success, ...rest }) {
            var d = module1374.open({
                onOk: async (a)=>{
                    await store.autoBackup(a);
                    module788.close(d);
                    module240.success({
                        content: `${t("MODIFY_SUCCESSFUL")}`
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                detail,
                modal: module3204,
                ...rest
            });
        }
    },
    "openpitrix.db.kafka.rebalance": {
        on: function({ store, detail, success, ...rest }) {
            var o = module1374.open({
                onOk: function() {
                    module788.close(o);
                    module240.success({
                        content: `${t("CREATE_SUCCESSFUL")}`
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                detail,
                modal: module3205,
                ...rest
            });
        }
    },
    "openpitrix.db.topic.create": {
        on: function({ store, isEdit, detail, success, ...rest }) {
            var p = module1374.open({
                onOk: async (topic)=>{
                    if (isEdit) {
                        await store.edit({
                            topic,
                            oldTopicName: detail.name,
                            ...rest
                        });
                        module240.success({
                            content: `${t("UPDATE_SUCCESSFUL")}`
                        });
                    } else {
                        await store.create({
                            topic,
                            ...rest
                        });
                        module240.success({
                            content: `${t("CREATE_SUCCESSFUL")}`
                        });
                    }
                    module788.close(p);
                    if (success) {
                        success();
                    }
                },
                store,
                detail,
                isEdit,
                modal: module3206,
                okText: t("OK"),
                ...rest
            });
        }
    },
    "openpitrix.app.agreement": {
        on: function({ success, ...rest }) {
            var r = module788.open({
                onOk: function() {
                    module788.close(r);
                    if (success) {
                        success();
                    }
                },
                modal: module3207,
                ...rest
            });
        }
    }
};
export default B;
