import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-30.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-326.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-85.js";
import "unpacked/module-38.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import module136 from "unpacked/module-136.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module240 from "unpacked/module-240.js";
import module788 from "components/Base/Modal";
import module2914 from "components/Modals/DevOpsCreate";
import module2916 from "components/Modals/DevOpsEdit";
import module2917 from "components/Modals/DevOpsAllowList";
import module823 from "components/Modals/Delete";
const S = (e)=>{
    if (e.length > 0) {
        const t = new Map;
        let a = [];
        e.forEach(({ name })=>{
            if (name) {
                const n = e.filter((e)=>e.name === name);
                t.set(name, n);
            }
        });
        if (t.has("*")) {
            return a = module61(t.get("*"));
        }
        t.forEach((e)=>{
            const t = e.length && e.filter((e)=>e.namespace === "*");
            if (t.length > 0) {
                a.push(t[0]);
            } else {
                a = a.concat(e);
            }
        });
        return a;
    }
    return e;
};
const _ = {
    "devops.create": {
        on: function({ store, workspace, success, ...rest }) {
            var o = module788.open({
                onOk: function(e) {
                    const cluster = module26(e, "spec.placement.cluster");
                    store.create(e, {
                        cluster,
                        workspace
                    }).then(()=>{
                        module788.close(o);
                        module240.success({
                            content: t("CREATE_SUCCESSFUL")
                        });
                        if (success) {
                            success(cluster);
                        }
                    });
                },
                formTemplate: {},
                modal: module2914,
                store,
                workspace,
                hideCluster: !globals.app.isMultiCluster,
                ...rest
            });
        }
    },
    "devops.edit": {
        on: function({ store, detail, success, ...rest }) {
            var o = module788.open({
                onOk: function(e) {
                    store.update(detail, e).then(()=>{
                        module788.close(o);
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                modal: module2916,
                detail,
                store,
                ...rest
            });
        }
    },
    "devops.edit.allowlist": {
        on: function({ store, detail, success, ...rest }) {
            var v = module788.open({
                onOk: async (a)=>{
                    let o;
                    let c;
                    let s;
                    let h;
                    let E;
                    o = module136(a);
                    c = module26(o, "spec.argo.sourceRepos", []);
                    s = module26(o, "spec.argo.destinations", []);
                    if ((h = c.filter((e)=>e === "*")).length > 0) {
                        module74(o, "spec.argo.sourceRepos", h);
                    }
                    E = S(s);
                    module74(o, "spec.argo.destinations", E);
                    await store.editAllowlist(detail, o);
                    module788.close(v);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                modal: module2917,
                store,
                ...rest
            });
        }
    },
    "devops.batch.delete": {
        on: function({ store, success, rowKey, ...rest }) {
            const store_list = store.list;
            const { data, selectedRowKeys } = store_list;
            const v = data.filter((e)=>selectedRowKeys.includes(e[rowKey])).map((e)=>e.name);
            var h = module788.open({
                onOk: async ()=>{
                    const a = [];
                    data.forEach((e)=>{
                        if (selectedRowKeys.includes(e[rowKey])) {
                            a.push(store.delete(e));
                        }
                    });
                    await Promise.all(a);
                    module788.close(h);
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                    store.setSelectRowKeys([]);
                    if (success) {
                        success();
                    }
                },
                title: v.length === 1 ? t("DELETE_DEVOPS_PROJECT") : t("DELETE_MULTIPLE_DEVOPS_PROJECTS"),
                desc: v.length === 1 ? t.html("DELETE_DEVOPS_PROJECT_TIP", {
                    resource: v.join(", ")
                }) : t.html("DELETE_DEVOPS_PROJECT_TIP_PL", {
                    resource: v.join(", ")
                }),
                resource: v.join(", "),
                modal: module823,
                store,
                ...rest
            });
        }
    }
};
export default _;
